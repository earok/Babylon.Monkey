
using namespace Windows::ApplicationModel;
using namespace Windows::ApplicationModel::Core;
using namespace Windows::ApplicationModel::Activation;
using namespace Windows::UI::Core;
using namespace Windows::UI::Input;
using namespace Windows::System;
using namespace Windows::Foundation;
using namespace Windows::Graphics::Display;
using namespace Windows::System::Threading;
using namespace Windows::Devices::Sensors;

using namespace concurrency;

//${CONFIG_BEGIN}
#define CFG_BINARY_FILES *.bin|*.dat
#define CFG_BRL_GAMETARGET_IMPLEMENTED 1
#define CFG_BRL_THREAD_IMPLEMENTED 1
#define CFG_CONFIG release
#define CFG_CPP_GC_MODE 1
#define CFG_HOST winnt
#define CFG_IMAGE_FILES *.png|*.jpg
#define CFG_LANG cpp
#define CFG_MOJO_AUTO_SUSPEND_ENABLED 0
#define CFG_MOJO_DRIVER_IMPLEMENTED 1
#define CFG_MOJO_IMAGE_FILTERING_ENABLED 1
#define CFG_MUSIC_FILES *.wav|*.mp3
#define CFG_SAFEMODE 0
#define CFG_SOUND_FILES *.wav|*.mp3
#define CFG_TARGET winrt
#define CFG_TEXT_FILES *.txt|*.xml|*.json
#define CFG_WINRT_PRINT_ENABLED 0
//${CONFIG_END}

//${TRANSCODE_BEGIN}

// C++ Monkey runtime.
//
// Placed into the public domain 24/02/2011.
// No warranty implied; use at your own risk.

//***** Monkey Types *****

typedef wchar_t Char;
template<class T> class Array;
class String;
class Object;

#if CFG_CPP_DOUBLE_PRECISION_FLOATS
typedef double Float;
#define FLOAT(X) X
#else
typedef float Float;
#define FLOAT(X) X##f
#endif

void dbg_error( const char *p );

#if !_MSC_VER
#define sprintf_s sprintf
#define sscanf_s sscanf
#endif

//***** GC Config *****

#define DEBUG_GC 0

// GC mode:
//
// 0 = disabled
// 1 = Full GC every OnUpdate
// 2 = Incremental GC every OnUpdate
// 3 = Incremental GC every allocation
//
#ifndef CFG_CPP_GC_MODE
#define CFG_CPP_GC_MODE 1
#endif

//How many bytes alloced to trigger GC
//
#ifndef CFG_CPP_GC_TRIGGER
#define CFG_CPP_GC_TRIGGER 8*1024*1024
#endif

#ifndef CFG_CPP_GC_MAX_LOCALS
#define CFG_CPP_GC_MAX_LOCALS 8192
#endif

// ***** GC *****

#if _WIN32

int gc_micros(){
	static int f;
	static LARGE_INTEGER pcf;
	if( !f ){
		if( QueryPerformanceFrequency( &pcf ) && pcf.QuadPart>=1000000L ){
			pcf.QuadPart/=1000000L;
			f=1;
		}else{
			f=-1;
		}
	}
	if( f>0 ){
		LARGE_INTEGER pc;
		if( QueryPerformanceCounter( &pc ) ) return pc.QuadPart/pcf.QuadPart;
		f=-1;
	}
	return 0;// timeGetTime()*1000;
}

#elif __APPLE__

#include <mach/mach_time.h>

int gc_micros(){
	static int f;
	static mach_timebase_info_data_t timeInfo;
	if( !f ){
		mach_timebase_info( &timeInfo );
		timeInfo.denom*=1000L;
		f=1;
	}
	return mach_absolute_time()*timeInfo.numer/timeInfo.denom;
}

#else

int gc_micros(){
	return 0;
}

#endif

#define gc_mark_roots gc_mark

void gc_mark_roots();

struct gc_object;

gc_object *gc_object_alloc( int size );
void gc_object_free( gc_object *p );

struct gc_object{
	gc_object *succ;
	gc_object *pred;
	int flags;
	
	virtual ~gc_object(){
	}
	
	virtual void mark(){
	}
	
	void *operator new( size_t size ){
		return gc_object_alloc( size );
	}
	
	void operator delete( void *p ){
		gc_object_free( (gc_object*)p );
	}
};

gc_object gc_free_list;
gc_object gc_marked_list;
gc_object gc_unmarked_list;
gc_object gc_queued_list;	//doesn't really need to be doubly linked...

bool gc_force_sweep;

int gc_free_bytes;
int gc_marked_bytes;
int gc_alloced_bytes;
int gc_max_alloced_bytes;
int gc_new_bytes;
int gc_markbit=1;

gc_object *gc_cache[8];

int gc_ctor_nest;
gc_object *gc_locals[CFG_CPP_GC_MAX_LOCALS],**gc_locals_sp=gc_locals;

void gc_collect_all();
void gc_mark_queued( int n );

#define GC_CLEAR_LIST( LIST ) ((LIST).succ=(LIST).pred=&(LIST))

#define GC_LIST_IS_EMPTY( LIST ) ((LIST).succ==&(LIST))

#define GC_REMOVE_NODE( NODE ){\
(NODE)->pred->succ=(NODE)->succ;\
(NODE)->succ->pred=(NODE)->pred;}

#define GC_INSERT_NODE( NODE,SUCC ){\
(NODE)->pred=(SUCC)->pred;\
(NODE)->succ=(SUCC);\
(SUCC)->pred->succ=(NODE);\
(SUCC)->pred=(NODE);}

void gc_init1(){
	GC_CLEAR_LIST( gc_free_list );
	GC_CLEAR_LIST( gc_marked_list );
	GC_CLEAR_LIST( gc_unmarked_list);
	GC_CLEAR_LIST( gc_queued_list );
}

void gc_init2(){
	gc_mark_roots();
}

#if CFG_CPP_GC_MODE==2

struct gc_ctor{
	gc_ctor(){ ++gc_ctor_nest; }
	~gc_ctor(){ --gc_ctor_nest; }
};

struct gc_enter{
	gc_object **sp;
	gc_enter():sp(gc_locals_sp){
	}
	~gc_enter(){
	/*
		static int max_locals;
		int n=gc_locals_sp-gc_locals;
		if( n>max_locals ){
			max_locals=n;
			printf( "max_locals=%i\n",n );
		}
	*/
		gc_locals_sp=sp;
	}
};

#define GC_CTOR gc_ctor _c;
#define GC_ENTER gc_enter _e;

#else

struct gc_ctor{
};
struct gc_enter{
};

#define GC_CTOR
#define GC_ENTER

#endif

void gc_flush_free( int size ){

	int t=gc_free_bytes-size;
	if( t<0 ) t=0;
	
	while( gc_free_bytes>t ){
		gc_object *p=gc_free_list.succ;
		if( !p || p==&gc_free_list ){
//			printf("ERROR:p=%p gc_free_bytes=%i\n",p,gc_free_bytes);
//			fflush(stdout);
			gc_free_bytes=0;
			break;
		}
		GC_REMOVE_NODE(p);
		delete p;	//...to gc_free
	}
}

gc_object *gc_object_alloc( int size ){

	size=(size+7)&~7;
	
#if CFG_CPP_GC_MODE==1

	gc_new_bytes+=size;
	
#elif CFG_CPP_GC_MODE==2

	if( !gc_ctor_nest ){
#if DEBUG_GC
		int ms=gc_micros();
#endif
		if( gc_new_bytes+size>(CFG_CPP_GC_TRIGGER) ){
			gc_collect_all();
			gc_new_bytes=size;
		}else{
			gc_new_bytes+=size;
			gc_mark_queued( (long long)(gc_new_bytes)*(gc_alloced_bytes-gc_new_bytes)/(CFG_CPP_GC_TRIGGER)+gc_new_bytes );
//			gc_mark_queued( double(gc_new_bytes)/(CFG_CPP_GC_TRIGGER)*(gc_alloced_bytes-gc_new_bytes)+gc_new_bytes );
		}
		
#if DEBUG_GC
		ms=gc_micros()-ms;
		if( ms>=100 ) {printf( "gc time:%i\n",ms );fflush( stdout );}
#endif
	}

#endif

	gc_flush_free( size );

	gc_object *p;
	if( size<64 && (p=gc_cache[size>>3]) ){
		gc_cache[size>>3]=p->succ;
	}else{
		p=(gc_object*)malloc( size );
	}
	
	p->flags=size|gc_markbit;
	GC_INSERT_NODE( p,&gc_unmarked_list );

	gc_alloced_bytes+=size;
	if( gc_alloced_bytes>gc_max_alloced_bytes ) gc_max_alloced_bytes=gc_alloced_bytes;
	
#if CFG_CPP_GC_MODE==2
	*gc_locals_sp++=p;
#endif

	return p;
}

void gc_object_free( gc_object *p ){

	int size=p->flags & ~7;
	gc_free_bytes-=size;
	
	if( size<64 ){
		p->succ=gc_cache[size>>3];
		gc_cache[size>>3]=p;
	}else{
		free( p );
	}
}

template<class T> void gc_mark( T *t ){

	gc_object *p=dynamic_cast<gc_object*>(t);
	
	if( p && (p->flags & 3)==gc_markbit ){
		p->flags^=1;
		GC_REMOVE_NODE( p );
		GC_INSERT_NODE( p,&gc_marked_list );
		gc_marked_bytes+=(p->flags & ~7);
		p->mark();
	}
}

template<class T> void gc_mark_q( T *t ){

	gc_object *p=dynamic_cast<gc_object*>(t);
	
	if( p && (p->flags & 3)==gc_markbit ){
		p->flags^=1;
		GC_REMOVE_NODE( p );
		GC_INSERT_NODE( p,&gc_queued_list );
	}
}

template<class T> T *gc_retain( T *t ){
#if CFG_CPP_GC_MODE==2
	*gc_locals_sp++=dynamic_cast<gc_object*>( t );
#endif	
	return t;
}

template<class T,class V> void gc_assign( T *&lhs,V *rhs ){
	gc_object *p=dynamic_cast<gc_object*>(rhs);
	if( p && (p->flags & 3)==gc_markbit ){
		p->flags^=1;
		GC_REMOVE_NODE( p );
		GC_INSERT_NODE( p,&gc_queued_list );
	}
	lhs=rhs;
}

void gc_mark_locals(){
	for( gc_object **pp=gc_locals;pp!=gc_locals_sp;++pp ){
		gc_object *p=*pp;
		if( p && (p->flags & 3)==gc_markbit ){
			p->flags^=1;
			GC_REMOVE_NODE( p );
			GC_INSERT_NODE( p,&gc_marked_list );
			gc_marked_bytes+=(p->flags & ~7);
			p->mark();
		}
	}
}

void gc_mark_queued( int n ){
	while( gc_marked_bytes<n && !GC_LIST_IS_EMPTY( gc_queued_list ) ){
		gc_object *p=gc_queued_list.succ;
		GC_REMOVE_NODE( p );
		GC_INSERT_NODE( p,&gc_marked_list );
		gc_marked_bytes+=(p->flags & ~7);
		p->mark();
	}
}

//returns reclaimed bytes
int gc_sweep(){

	int reclaimed_bytes=gc_alloced_bytes-gc_marked_bytes;
	
	if( reclaimed_bytes ){
	
		//append unmarked list to end of free list
		gc_object *head=gc_unmarked_list.succ;
		gc_object *tail=gc_unmarked_list.pred;
		gc_object *succ=&gc_free_list;
		gc_object *pred=succ->pred;
		head->pred=pred;
		tail->succ=succ;
		pred->succ=head;
		succ->pred=tail;
		
		gc_free_bytes+=reclaimed_bytes;
	}
	
	//move marked to unmarked.
	gc_unmarked_list=gc_marked_list;
	gc_unmarked_list.succ->pred=gc_unmarked_list.pred->succ=&gc_unmarked_list;
	
	//clear marked.
	GC_CLEAR_LIST( gc_marked_list );
	
	//adjust sizes
	gc_alloced_bytes=gc_marked_bytes;
	gc_marked_bytes=0;
	gc_markbit^=1;
	
	return reclaimed_bytes;
}

void gc_collect_all(){

//	printf( "Mark locals\n" );fflush( stdout );
	gc_mark_locals();

//	printf( "Mark queued\n" );fflush( stdout );
	gc_mark_queued( 0x7fffffff );

//	printf( "sweep\n" );fflush( stdout );	
	gc_sweep();

//	printf( "Mark roots\n" );fflush( stdout );
	gc_mark_roots();

#if DEBUG_GC	
	printf( "gc collected:%i\n",reclaimed );fflush( stdout );
#endif
}

void gc_collect(){

	if( gc_locals_sp!=gc_locals ){
//		printf( "GC_LOCALS error\n" );fflush( stdout );
		gc_locals_sp=gc_locals;
	}
	
#if CFG_CPP_GC_MODE==1

#if DEBUG_GC
	int ms=gc_micros();
#endif

	if( gc_new_bytes>(CFG_CPP_GC_TRIGGER) ){
		gc_collect_all();
		gc_new_bytes=0;
	}else{
		gc_mark_queued( (long long)(gc_new_bytes)*(gc_alloced_bytes-gc_new_bytes)/(CFG_CPP_GC_TRIGGER)+gc_new_bytes );
//		gc_mark_queued( double(gc_new_bytes)/(CFG_CPP_GC_TRIGGER)*(gc_alloced_bytes-gc_new_bytes)+gc_new_bytes );
	}

#if DEBUG_GC
	ms=gc_micros()-ms;
	if( ms>=100 ) {printf( "gc time:%i\n",ms );fflush( stdout );}
#endif

#endif

}

// ***** Array *****

template<class T> T *t_memcpy( T *dst,const T *src,int n ){
	memcpy( dst,src,n*sizeof(T) );
	return dst+n;
}

template<class T> T *t_memset( T *dst,int val,int n ){
	memset( dst,val,n*sizeof(T) );
	return dst+n;
}

template<class T> int t_memcmp( const T *x,const T *y,int n ){
	return memcmp( x,y,n*sizeof(T) );
}

template<class T> int t_strlen( const T *p ){
	const T *q=p++;
	while( *q++ ){}
	return q-p;
}

template<class T> T *t_create( int n,T *p ){
	t_memset( p,0,n );
	return p+n;
}

template<class T> T *t_create( int n,T *p,const T *q ){
	t_memcpy( p,q,n );
	return p+n;
}

template<class T> void t_destroy( int n,T *p ){
}

template<class T> void gc_mark_elements( int n,T *p ){
}

template<class T> void gc_mark_elements( int n,T **p ){
	for( int i=0;i<n;++i ) gc_mark( p[i] );
}

template<class T> class Array{
public:
	Array():rep( &nullRep ){
	}

	//Uses default...
//	Array( const Array<T> &t )...
	
	Array( int length ):rep( Rep::alloc( length ) ){
		t_create( rep->length,rep->data );
	}
	
	Array( const T *p,int length ):rep( Rep::alloc(length) ){
		t_create( rep->length,rep->data,p );
	}
	
	~Array(){
	}

	//Uses default...
//	Array &operator=( const Array &t )...
	
	int Length()const{ 
		return rep->length; 
	}
	
	T &At( int index ){
		if( index<0 || index>=rep->length ) dbg_error( "Array index out of range" );
		return rep->data[index]; 
	}
	
	const T &At( int index )const{
		if( index<0 || index>=rep->length ) dbg_error( "Array index out of range" );
		return rep->data[index]; 
	}
	
	T &operator[]( int index ){
		return rep->data[index]; 
	}

	const T &operator[]( int index )const{
		return rep->data[index]; 
	}
	
	Array Slice( int from,int term )const{
		int len=rep->length;
		if( from<0 ){ 
			from+=len;
			if( from<0 ) from=0;
		}else if( from>len ){
			from=len;
		}
		if( term<0 ){
			term+=len;
		}else if( term>len ){
			term=len;
		}
		if( term<=from ) return Array();
		return Array( rep->data+from,term-from );
	}

	Array Slice( int from )const{
		return Slice( from,rep->length );
	}
	
	Array Resize( int newlen )const{
		if( newlen<=0 ) return Array();
		int n=rep->length;
		if( newlen<n ) n=newlen;
		Rep *p=Rep::alloc( newlen );
		T *q=p->data;
		q=t_create( n,q,rep->data );
		q=t_create( (newlen-n),q );
		return Array( p );
	}
	
private:
	struct Rep : public gc_object{
		int length;
		T data[0];
		
		Rep():length(0){
			flags=3;
		}
		
		Rep( int length ):length(length){
		}
		
		~Rep(){
			t_destroy( length,data );
		}
		
		void mark(){
			gc_mark_elements( length,data );
		}
		
		static Rep *alloc( int length ){
			if( !length ) return &nullRep;
			void *p=gc_object_alloc( sizeof(Rep)+length*sizeof(T) );
			return ::new(p) Rep( length );
		}
		
	};
	Rep *rep;
	
	static Rep nullRep;
	
	template<class C> friend void gc_mark( Array<C> t );
	template<class C> friend void gc_mark_q( Array<C> t );
	template<class C> friend Array<C> gc_retain( Array<C> t );
	template<class C> friend void gc_assign( Array<C> &lhs,Array<C> rhs );
	template<class C> friend void gc_mark_elements( int n,Array<C> *p );
	
	Array( Rep *rep ):rep(rep){
	}
};

template<class T> typename Array<T>::Rep Array<T>::nullRep;

template<class T> Array<T> *t_create( int n,Array<T> *p ){
	for( int i=0;i<n;++i ) *p++=Array<T>();
	return p;
}

template<class T> Array<T> *t_create( int n,Array<T> *p,const Array<T> *q ){
	for( int i=0;i<n;++i ) *p++=*q++;
	return p;
}

template<class T> void gc_mark( Array<T> t ){
	gc_mark( t.rep );
}

template<class T> void gc_mark_q( Array<T> t ){
	gc_mark_q( t.rep );
}

template<class T> Array<T> gc_retain( Array<T> t ){
#if CFG_CPP_GC_MODE==2
	gc_retain( t.rep );
#endif
	return t;
}

template<class T> void gc_assign( Array<T> &lhs,Array<T> rhs ){
	gc_mark( rhs.rep );
	lhs=rhs;
}

template<class T> void gc_mark_elements( int n,Array<T> *p ){
	for( int i=0;i<n;++i ) gc_mark( p[i].rep );
}
		
// ***** String *****

static const char *_str_load_err;

class String{
public:
	String():rep( &nullRep ){
	}
	
	String( const String &t ):rep( t.rep ){
		rep->retain();
	}

	String( int n ){
		char buf[256];
		sprintf_s( buf,"%i",n );
		rep=Rep::alloc( t_strlen(buf) );
		for( int i=0;i<rep->length;++i ) rep->data[i]=buf[i];
	}
	
	String( Float n ){
		char buf[256];
		
		//would rather use snprintf, but it's doing weird things in MingW.
		//
		sprintf_s( buf,"%.17lg",n );
		//
		char *p;
		for( p=buf;*p;++p ){
			if( *p=='.' || *p=='e' ) break;
		}
		if( !*p ){
			*p++='.';
			*p++='0';
			*p=0;
		}

		rep=Rep::alloc( t_strlen(buf) );
		for( int i=0;i<rep->length;++i ) rep->data[i]=buf[i];
	}

	String( Char ch,int length ):rep( Rep::alloc(length) ){
		for( int i=0;i<length;++i ) rep->data[i]=ch;
	}

	String( const Char *p ):rep( Rep::alloc(t_strlen(p)) ){
		t_memcpy( rep->data,p,rep->length );
	}

	String( const Char *p,int length ):rep( Rep::alloc(length) ){
		t_memcpy( rep->data,p,rep->length );
	}
	
#if __OBJC__	
	String( NSString *nsstr ):rep( Rep::alloc([nsstr length]) ){
		unichar *buf=(unichar*)malloc( rep->length * sizeof(unichar) );
		[nsstr getCharacters:buf range:NSMakeRange(0,rep->length)];
		for( int i=0;i<rep->length;++i ) rep->data[i]=buf[i];
		free( buf );
	}
#endif

#if __cplusplus_winrt
	String( Platform::String ^str ):rep( Rep::alloc(str->Length()) ){
		for( int i=0;i<rep->length;++i ) rep->data[i]=str->Data()[i];
	}
#endif

	~String(){
		rep->release();
	}
	
	template<class C> String( const C *p ):rep( Rep::alloc(t_strlen(p)) ){
		for( int i=0;i<rep->length;++i ) rep->data[i]=p[i];
	}
	
	template<class C> String( const C *p,int length ):rep( Rep::alloc(length) ){
		for( int i=0;i<rep->length;++i ) rep->data[i]=p[i];
	}
	
	int Length()const{
		return rep->length;
	}
	
	const Char *Data()const{
		return rep->data;
	}
	
	Char At( int index )const{
		if( index<0 || index>=rep->length ) dbg_error( "Character index out of range" );
		return rep->data[index]; 
	}
	
	Char operator[]( int index )const{
		return rep->data[index];
	}
	
	String &operator=( const String &t ){
		t.rep->retain();
		rep->release();
		rep=t.rep;
		return *this;
	}
	
	String &operator+=( const String &t ){
		return operator=( *this+t );
	}
	
	int Compare( const String &t )const{
		int n=rep->length<t.rep->length ? rep->length : t.rep->length;
		for( int i=0;i<n;++i ){
			if( int q=(int)(rep->data[i])-(int)(t.rep->data[i]) ) return q;
		}
		return rep->length-t.rep->length;
	}
	
	bool operator==( const String &t )const{
		return rep->length==t.rep->length && t_memcmp( rep->data,t.rep->data,rep->length )==0;
	}
	
	bool operator!=( const String &t )const{
		return rep->length!=t.rep->length || t_memcmp( rep->data,t.rep->data,rep->length )!=0;
	}
	
	bool operator<( const String &t )const{
		return Compare( t )<0;
	}
	
	bool operator<=( const String &t )const{
		return Compare( t )<=0;
	}
	
	bool operator>( const String &t )const{
		return Compare( t )>0;
	}
	
	bool operator>=( const String &t )const{
		return Compare( t )>=0;
	}
	
	String operator+( const String &t )const{
		if( !rep->length ) return t;
		if( !t.rep->length ) return *this;
		Rep *p=Rep::alloc( rep->length+t.rep->length );
		Char *q=p->data;
		q=t_memcpy( q,rep->data,rep->length );
		q=t_memcpy( q,t.rep->data,t.rep->length );
		return String( p );
	}
	
	int Find( String find,int start=0 )const{
		if( start<0 ) start=0;
		while( start+find.rep->length<=rep->length ){
			if( !t_memcmp( rep->data+start,find.rep->data,find.rep->length ) ) return start;
			++start;
		}
		return -1;
	}
	
	int FindLast( String find )const{
		int start=rep->length-find.rep->length;
		while( start>=0 ){
			if( !t_memcmp( rep->data+start,find.rep->data,find.rep->length ) ) return start;
			--start;
		}
		return -1;
	}
	
	int FindLast( String find,int start )const{
		if( start>rep->length-find.rep->length ) start=rep->length-find.rep->length;
		while( start>=0 ){
			if( !t_memcmp( rep->data+start,find.rep->data,find.rep->length ) ) return start;
			--start;
		}
		return -1;
	}
	
	String Trim()const{
		int i=0,i2=rep->length;
		while( i<i2 && rep->data[i]<=32 ) ++i;
		while( i2>i && rep->data[i2-1]<=32 ) --i2;
		if( i==0 && i2==rep->length ) return *this;
		return String( rep->data+i,i2-i );
	}

	Array<String> Split( String sep )const{
	
		if( !sep.rep->length ){
			Array<String> bits( rep->length );
			for( int i=0;i<rep->length;++i ){
				bits[i]=String( (Char)(*this)[i],1 );
			}
			return bits;
		}
		
		int i=0,i2,n=1;
		while( (i2=Find( sep,i ))!=-1 ){
			++n;
			i=i2+sep.rep->length;
		}
		Array<String> bits( n );
		if( n==1 ){
			bits[0]=*this;
			return bits;
		}
		i=0;n=0;
		while( (i2=Find( sep,i ))!=-1 ){
			bits[n++]=Slice( i,i2 );
			i=i2+sep.rep->length;
		}
		bits[n]=Slice( i );
		return bits;
	}

	String Join( Array<String> bits )const{
		if( bits.Length()==0 ) return String();
		if( bits.Length()==1 ) return bits[0];
		int newlen=rep->length * (bits.Length()-1);
		for( int i=0;i<bits.Length();++i ){
			newlen+=bits[i].rep->length;
		}
		Rep *p=Rep::alloc( newlen );
		Char *q=p->data;
		q=t_memcpy( q,bits[0].rep->data,bits[0].rep->length );
		for( int i=1;i<bits.Length();++i ){
			q=t_memcpy( q,rep->data,rep->length );
			q=t_memcpy( q,bits[i].rep->data,bits[i].rep->length );
		}
		return String( p );
	}

	String Replace( String find,String repl )const{
		int i=0,i2,newlen=0;
		while( (i2=Find( find,i ))!=-1 ){
			newlen+=(i2-i)+repl.rep->length;
			i=i2+find.rep->length;
		}
		if( !i ) return *this;
		newlen+=rep->length-i;
		Rep *p=Rep::alloc( newlen );
		Char *q=p->data;
		i=0;
		while( (i2=Find( find,i ))!=-1 ){
			q=t_memcpy( q,rep->data+i,i2-i );
			q=t_memcpy( q,repl.rep->data,repl.rep->length );
			i=i2+find.rep->length;
		}
		q=t_memcpy( q,rep->data+i,rep->length-i );
		return String( p );
	}

	String ToLower()const{
		for( int i=0;i<rep->length;++i ){
			Char t=tolower( rep->data[i] );
			if( t==rep->data[i] ) continue;
			Rep *p=Rep::alloc( rep->length );
			Char *q=p->data;
			t_memcpy( q,rep->data,i );
			for( q[i++]=t;i<rep->length;++i ){
				q[i]=tolower( rep->data[i] );
			}
			return String( p );
		}
		return *this;
	}

	String ToUpper()const{
		for( int i=0;i<rep->length;++i ){
			Char t=toupper( rep->data[i] );
			if( t==rep->data[i] ) continue;
			Rep *p=Rep::alloc( rep->length );
			Char *q=p->data;
			t_memcpy( q,rep->data,i );
			for( q[i++]=t;i<rep->length;++i ){
				q[i]=toupper( rep->data[i] );
			}
			return String( p );
		}
		return *this;
	}
	
	bool Contains( String sub )const{
		return Find( sub )!=-1;
	}

	bool StartsWith( String sub )const{
		return sub.rep->length<=rep->length && !t_memcmp( rep->data,sub.rep->data,sub.rep->length );
	}

	bool EndsWith( String sub )const{
		return sub.rep->length<=rep->length && !t_memcmp( rep->data+rep->length-sub.rep->length,sub.rep->data,sub.rep->length );
	}
	
	String Slice( int from,int term )const{
		int len=rep->length;
		if( from<0 ){
			from+=len;
			if( from<0 ) from=0;
		}else if( from>len ){
			from=len;
		}
		if( term<0 ){
			term+=len;
		}else if( term>len ){
			term=len;
		}
		if( term<from ) return String();
		if( from==0 && term==len ) return *this;
		return String( rep->data+from,term-from );
	}

	String Slice( int from )const{
		return Slice( from,rep->length );
	}
	
	Array<int> ToChars()const{
		Array<int> chars( rep->length );
		for( int i=0;i<rep->length;++i ) chars[i]=rep->data[i];
		return chars;
	}
	
	int ToInt()const{
		char buf[64];
		return atoi( ToCString<char>( buf,sizeof(buf) ) );
	}
	
	Float ToFloat()const{
		char buf[256];
		return atof( ToCString<char>( buf,sizeof(buf) ) );
	}

	template<class C> class CString{
		struct Rep{
			int refs;
			C data[1];
		};
		Rep *_rep;
	public:
		template<class T> CString( const T *data,int length ){
			_rep=(Rep*)malloc( length*sizeof(C)+sizeof(Rep) );
			_rep->refs=1;
			_rep->data[length]=0;
			for( int i=0;i<length;++i ){
				_rep->data[i]=(C)data[i];
			}
		}
		CString( const CString &c ):_rep(c._rep){
			++_rep->refs;
		}
		~CString(){
			if( !--_rep->refs ) free( _rep );
		}
		CString &operator=( const CString &c ){
			++c._rep->refs;
			if( !--_rep->refs ) free( _rep );
			_rep=c._rep;
			return *this;
		}
		operator const C*()const{ 
			return _rep->data;
		}
	};
	
	template<class C> CString<C> ToCString()const{
		return CString<C>( rep->data,rep->length );
	}

	template<class C> C *ToCString( C *p,int length )const{
		if( --length>rep->length ) length=rep->length;
		for( int i=0;i<length;++i ) p[i]=rep->data[i];
		p[length]=0;
		return p;
	}

#if __OBJC__	
	NSString *ToNSString()const{
		return [NSString stringWithCharacters:ToCString<unichar>() length:rep->length];
	}
#endif

#if __cplusplus_winrt
	Platform::String ^ToWinRTString()const{
		return ref new Platform::String( rep->data,rep->length );
	}
#endif

	bool Save( FILE *fp ){
		std::vector<unsigned char> buf;
		Save( buf );
		return buf.size() ? fwrite( &buf[0],1,buf.size(),fp )==buf.size() : true;
	}
	
	void Save( std::vector<unsigned char> &buf ){
	
		Char *p=rep->data;
		Char *e=p+rep->length;
		
		while( p<e ){
			Char c=*p++;
			if( c<0x80 ){
				buf.push_back( c );
			}else if( c<0x800 ){
				buf.push_back( 0xc0 | (c>>6) );
				buf.push_back( 0x80 | (c & 0x3f) );
			}else{
				buf.push_back( 0xe0 | (c>>12) );
				buf.push_back( 0x80 | ((c>>6) & 0x3f) );
				buf.push_back( 0x80 | (c & 0x3f) );
			}
		}
	}
	
	static String FromChars( Array<int> chars ){
		int n=chars.Length();
		Rep *p=Rep::alloc( n );
		for( int i=0;i<n;++i ){
			p->data[i]=chars[i];
		}
		return String( p );
	}

	static String Load( FILE *fp ){
		unsigned char tmp[4096];
		std::vector<unsigned char> buf;
		for(;;){
			int n=fread( tmp,1,4096,fp );
			if( n>0 ) buf.insert( buf.end(),tmp,tmp+n );
			if( n!=4096 ) break;
		}
		return buf.size() ? String::Load( &buf[0],buf.size() ) : String();
	}
	
	static String Load( unsigned char *p,int n ){
	
		_str_load_err=0;
		
		unsigned char *e=p+n;
		std::vector<Char> chars;
		
		int t0=n>0 ? p[0] : -1;
		int t1=n>1 ? p[1] : -1;

		if( t0==0xfe && t1==0xff ){
			p+=2;
			while( p<e-1 ){
				int c=*p++;
				chars.push_back( (c<<8)|*p++ );
			}
		}else if( t0==0xff && t1==0xfe ){
			p+=2;
			while( p<e-1 ){
				int c=*p++;
				chars.push_back( (*p++<<8)|c );
			}
		}else{
			int t2=n>2 ? p[2] : -1;
			if( t0==0xef && t1==0xbb && t2==0xbf ) p+=3;
			unsigned char *q=p;
			bool fail=false;
			while( p<e ){
				unsigned int c=*p++;
				if( c & 0x80 ){
					if( (c & 0xe0)==0xc0 ){
						if( p>=e || (p[0] & 0xc0)!=0x80 ){
							fail=true;
							break;
						}
						c=((c & 0x1f)<<6) | (p[0] & 0x3f);
						p+=1;
					}else if( (c & 0xf0)==0xe0 ){
						if( p+1>=e || (p[0] & 0xc0)!=0x80 || (p[1] & 0xc0)!=0x80 ){
							fail=true;
							break;
						}
						c=((c & 0x0f)<<12) | ((p[0] & 0x3f)<<6) | (p[1] & 0x3f);
						p+=2;
					}else{
						fail=true;
						break;
					}
				}
				chars.push_back( c );
			}
			if( fail ){
				_str_load_err="Invalid UTF-8";
				return String( q,n );
			}
		}
		return chars.size() ? String( &chars[0],chars.size() ) : String();
	}

private:
	
	struct Rep{
		int refs;
		int length;
		Char data[0];
		
		Rep():refs(1),length(0){
		}
		
		Rep( int length ):refs(1),length(length){
		}
		
		void retain(){
			++refs;
		}
		
		void release(){
			if( --refs || !length ) return;
			free( this );
		}

		static Rep *alloc( int length ){
			if( !length ) return &nullRep;
			void *p=malloc( sizeof(Rep)+length*sizeof(Char) );
			return new(p) Rep( length );
		}
	};
	Rep *rep;
	
	static Rep nullRep;
	
	String( Rep *rep ):rep(rep){
	}
};

String::Rep String::nullRep;

String *t_create( int n,String *p ){
	for( int i=0;i<n;++i ) new( &p[i] ) String();
	return p+n;
}

String *t_create( int n,String *p,const String *q ){
	for( int i=0;i<n;++i ) new( &p[i] ) String( q[i] );
	return p+n;
}

void t_destroy( int n,String *p ){
	for( int i=0;i<n;++i ) p[i].~String();
}

// ***** Object *****

String dbg_stacktrace();

class Object : public gc_object{
public:
	virtual bool Equals( Object *obj ){
		return this==obj;
	}
	
	virtual int Compare( Object *obj ){
		return (char*)this-(char*)obj;
	}
	
	virtual String debug(){
		return "+Object\n";
	}
};

class ThrowableObject : public Object{
#ifndef NDEBUG
public:
	String stackTrace;
	ThrowableObject():stackTrace( dbg_stacktrace() ){}
#endif
};

struct gc_interface{
	virtual ~gc_interface(){}
};

//***** Debugger *****

//#define Error bbError
//#define Print bbPrint

int bbPrint( String t );

#define dbg_stream stderr

#if _MSC_VER
#define dbg_typeof decltype
#else
#define dbg_typeof __typeof__
#endif 

struct dbg_func;
struct dbg_var_type;

static int dbg_suspend;
static int dbg_stepmode;

const char *dbg_info;
String dbg_exstack;

static void *dbg_var_buf[65536*3];
static void **dbg_var_ptr=dbg_var_buf;

static dbg_func *dbg_func_buf[1024];
static dbg_func **dbg_func_ptr=dbg_func_buf;

String dbg_type( bool *p ){
	return "Bool";
}

String dbg_type( int *p ){
	return "Int";
}

String dbg_type( Float *p ){
	return "Float";
}

String dbg_type( String *p ){
	return "String";
}

template<class T> String dbg_type( T *p ){
	return "Object";
}

template<class T> String dbg_type( Array<T> *p ){
	return dbg_type( &(*p)[0] )+"[]";
}

String dbg_value( bool *p ){
	return *p ? "True" : "False";
}

String dbg_value( int *p ){
	return String( *p );
}

String dbg_value( Float *p ){
	return String( *p );
}

String dbg_value( String *p ){
	String t=*p;
	if( t.Length()>100 ) t=t.Slice( 0,100 )+"...";
	t=t.Replace( "\"","~q" );
	t=t.Replace( "\t","~t" );
	t=t.Replace( "\n","~n" );
	t=t.Replace( "\r","~r" );
	return String("\"")+t+"\"";
}

template<class T> String dbg_value( T *t ){
	Object *p=dynamic_cast<Object*>( *t );
	char buf[64];
	sprintf_s( buf,"%p",p );
	return String("@") + (buf[0]=='0' && buf[1]=='x' ? buf+2 : buf );
}

template<class T> String dbg_value( Array<T> *p ){
	String t="[";
	int n=(*p).Length();
	for( int i=0;i<n;++i ){
		if( i ) t+=",";
		t+=dbg_value( &(*p)[i] );
	}
	return t+"]";
}

template<class T> String dbg_decl( const char *id,T *ptr ){
	return String( id )+":"+dbg_type(ptr)+"="+dbg_value(ptr)+"\n";
}

struct dbg_var_type{
	virtual String type( void *p )=0;
	virtual String value( void *p )=0;
};

template<class T> struct dbg_var_type_t : public dbg_var_type{

	String type( void *p ){
		return dbg_type( (T*)p );
	}
	
	String value( void *p ){
		return dbg_value( (T*)p );
	}
	
	static dbg_var_type_t<T> info;
};
template<class T> dbg_var_type_t<T> dbg_var_type_t<T>::info;

struct dbg_blk{
	void **var_ptr;
	
	dbg_blk():var_ptr(dbg_var_ptr){
		if( dbg_stepmode=='l' ) --dbg_suspend;
	}
	
	~dbg_blk(){
		if( dbg_stepmode=='l' ) ++dbg_suspend;
		dbg_var_ptr=var_ptr;
	}
};

struct dbg_func : public dbg_blk{
	const char *id;
	const char *info;

	dbg_func( const char *p ):id(p),info(dbg_info){
		*dbg_func_ptr++=this;
		if( dbg_stepmode=='s' ) --dbg_suspend;
	}
	
	~dbg_func(){
		if( dbg_stepmode=='s' ) ++dbg_suspend;
		--dbg_func_ptr;
		dbg_info=info;
	}
};

int dbg_print( String t ){
	static char *buf;
	static int len;
	int n=t.Length();
	if( n+100>len ){
		len=n+100;
		free( buf );
		buf=(char*)malloc( len );
	}
	buf[n]='\n';
	for( int i=0;i<n;++i ) buf[i]=t[i];
	fwrite( buf,n+1,1,dbg_stream );
	fflush( dbg_stream );
	return 0;
}

void dbg_callstack(){

	void **var_ptr=dbg_var_buf;
	dbg_func **func_ptr=dbg_func_buf;
	
	while( var_ptr!=dbg_var_ptr ){
		while( func_ptr!=dbg_func_ptr && var_ptr==(*func_ptr)->var_ptr ){
			const char *id=(*func_ptr++)->id;
			const char *info=func_ptr!=dbg_func_ptr ? (*func_ptr)->info : dbg_info;
			fprintf( dbg_stream,"+%s;%s\n",id,info );
		}
		void *vp=*var_ptr++;
		const char *nm=(const char*)*var_ptr++;
		dbg_var_type *ty=(dbg_var_type*)*var_ptr++;
		dbg_print( String(nm)+":"+ty->type(vp)+"="+ty->value(vp) );
	}
	while( func_ptr!=dbg_func_ptr ){
		const char *id=(*func_ptr++)->id;
		const char *info=func_ptr!=dbg_func_ptr ? (*func_ptr)->info : dbg_info;
		fprintf( dbg_stream,"+%s;%s\n",id,info );
	}
}

String dbg_stacktrace(){
	if( !dbg_info || !dbg_info[0] ) return "";
	String str=String( dbg_info )+"\n";
	dbg_func **func_ptr=dbg_func_ptr;
	if( func_ptr==dbg_func_buf ) return str;
	while( --func_ptr!=dbg_func_buf ){
		str+=String( (*func_ptr)->info )+"\n";
	}
	return str;
}

void dbg_throw( const char *err ){
	dbg_exstack=dbg_stacktrace();
	throw err;
}

void dbg_stop(){

#if TARGET_OS_IPHONE
	dbg_throw( "STOP" );
#endif

	fprintf( dbg_stream,"{{~~%s~~}}\n",dbg_info );
	dbg_callstack();
	dbg_print( "" );
	
	for(;;){

		char buf[256];
		char *e=fgets( buf,256,stdin );
		if( !e ) exit( -1 );
		
		e=strchr( buf,'\n' );
		if( !e ) exit( -1 );
		
		*e=0;
		
		Object *p;
		
		switch( buf[0] ){
		case '?':
			break;
		case 'r':	//run
			dbg_suspend=0;		
			dbg_stepmode=0;
			return;
		case 's':	//step
			dbg_suspend=1;
			dbg_stepmode='s';
			return;
		case 'e':	//enter func
			dbg_suspend=1;
			dbg_stepmode='e';
			return;
		case 'l':	//leave block
			dbg_suspend=0;
			dbg_stepmode='l';
			return;
		case '@':	//dump object
			p=0;
			sscanf_s( buf+1,"%p",&p );
			if( p ){
				dbg_print( p->debug() );
			}else{
				dbg_print( "" );
			}
			break;
		case 'q':	//quit!
			exit( 0 );
			break;			
		default:
			printf( "????? %s ?????",buf );fflush( stdout );
			exit( -1 );
		}
	}
}

void dbg_error( const char *err ){

#if TARGET_OS_IPHONE
	dbg_throw( err );
#endif

	for(;;){
		bbPrint( String("Monkey Runtime Error : ")+err );
		bbPrint( dbg_stacktrace() );
		dbg_stop();
	}
}

#define DBG_INFO(X) dbg_info=(X);if( dbg_suspend>0 ) dbg_stop();

#define DBG_ENTER(P) dbg_func _dbg_func(P);

#define DBG_BLOCK() dbg_blk _dbg_blk;

#define DBG_GLOBAL( ID,NAME )	//TODO!

#define DBG_LOCAL( ID,NAME )\
*dbg_var_ptr++=&ID;\
*dbg_var_ptr++=(void*)NAME;\
*dbg_var_ptr++=&dbg_var_type_t<dbg_typeof(ID)>::info;

//**** main ****

int argc;
const char **argv;

Float D2R=0.017453292519943295f;
Float R2D=57.29577951308232f;

int bbPrint( String t ){

	static std::vector<unsigned char> buf;
	buf.clear();
	t.Save( buf );
	buf.push_back( '\n' );
	buf.push_back( 0 );
	
#if __cplusplus_winrt	//winrt?

#if CFG_WINRT_PRINT_ENABLED
	OutputDebugStringA( (const char*)&buf[0] );
#endif

#elif _WIN32			//windows?

	fputs( (const char*)&buf[0],stdout );
	fflush( stdout );

#elif __APPLE__			//macos/ios?

	fputs( (const char*)&buf[0],stdout );
	fflush( stdout );
	
#elif __linux			//linux?

	fputs( (const char*)&buf[0],stdout );
	fflush( stdout );

#else					//ndk?

#if CFG_ANDROID_PRINT_ENABLED
	LOGI( (const char*)&buf[0] );
#endif

#endif

	return 0;
}

class BBExitApp{
};

int bbError( String err ){
	if( !err.Length() ){
#if __cplusplus_winrt
		throw BBExitApp();
#else
		exit( 0 );
#endif
	}
	dbg_error( err.ToCString<char>() );
	return 0;
}

int bbDebugLog( String t ){
	bbPrint( t );
	return 0;
}

int bbDebugStop(){
	dbg_stop();
	return 0;
}

int bbInit();
int bbMain();

#if _MSC_VER

static void _cdecl seTranslator( unsigned int ex,EXCEPTION_POINTERS *p ){

	switch( ex ){
	case EXCEPTION_ACCESS_VIOLATION:dbg_error( "Memory access violation" );
	case EXCEPTION_ILLEGAL_INSTRUCTION:dbg_error( "Illegal instruction" );
	case EXCEPTION_INT_DIVIDE_BY_ZERO:dbg_error( "Integer divide by zero" );
	case EXCEPTION_STACK_OVERFLOW:dbg_error( "Stack overflow" );
	}
	dbg_error( "Unknown exception" );
}

#else

void sighandler( int sig  ){
	switch( sig ){
	case SIGSEGV:dbg_error( "Memory access violation" );
	case SIGILL:dbg_error( "Illegal instruction" );
	case SIGFPE:dbg_error( "Floating point exception" );
#if !_WIN32
	case SIGBUS:dbg_error( "Bus error" );
#endif	
	}
	dbg_error( "Unknown signal" );
}

#endif

//entry point call by target main()...
//
int bb_std_main( int argc,const char **argv ){

	::argc=argc;
	::argv=argv;
	
#if _MSC_VER

	_set_se_translator( seTranslator );

#else
	
	signal( SIGSEGV,sighandler );
	signal( SIGILL,sighandler );
	signal( SIGFPE,sighandler );
#if !_WIN32
	signal( SIGBUS,sighandler );
#endif

#endif

	gc_init1();

	bbInit();
	
	gc_init2();

	bbMain();

	return 0;
}

//***** game.h *****

struct BBGameEvent{
	enum{
		None=0,
		KeyDown=1,KeyUp=2,KeyChar=3,
		MouseDown=4,MouseUp=5,MouseMove=6,
		TouchDown=7,TouchUp=8,TouchMove=9,
		MotionAccel=10
	};
};

class BBGameDelegate : public Object{
public:
	virtual void StartGame(){}
	virtual void SuspendGame(){}
	virtual void ResumeGame(){}
	virtual void UpdateGame(){}
	virtual void RenderGame(){}
	virtual void KeyEvent( int event,int data ){}
	virtual void MouseEvent( int event,int data,float x,float y ){}
	virtual void TouchEvent( int event,int data,float x,float y ){}
	virtual void MotionEvent( int event,int data,float x,float y,float z ){}
	virtual void DiscardGraphics(){}
};

class BBGame{
public:
	BBGame();
	virtual ~BBGame(){}
	
	static BBGame *Game(){ return _game; }
	
	virtual void SetDelegate( BBGameDelegate *delegate );
	virtual BBGameDelegate *Delegate(){ return _delegate; }
	
	virtual void SetKeyboardEnabled( bool enabled );
	virtual bool KeyboardEnabled();
	
	virtual void SetUpdateRate( int updateRate );
	virtual int UpdateRate();
	
	virtual bool Started(){ return _started; }
	virtual bool Suspended(){ return _suspended; }
	
	virtual int Millisecs();
	virtual void GetDate( Array<int> date );
	virtual int SaveState( String state );
	virtual String LoadState();
	virtual String LoadString( String path );
	virtual bool PollJoystick( int port,Array<Float> joyx,Array<Float> joyy,Array<Float> joyz,Array<bool> buttons );
	virtual void OpenUrl( String url );
	virtual void SetMouseVisible( bool visible );
	
	//***** cpp extensions *****
	virtual String PathToFilePath( String path );
	virtual FILE *OpenFile( String path,String mode );
	virtual unsigned char *LoadData( String path,int *plength );
	
	//***** INTERNAL *****
	virtual void Die( ThrowableObject *ex );
	virtual void gc_collect();
	virtual void StartGame();
	virtual void SuspendGame();
	virtual void ResumeGame();
	virtual void UpdateGame();
	virtual void RenderGame();
	virtual void KeyEvent( int ev,int data );
	virtual void MouseEvent( int ev,int data,float x,float y );
	virtual void TouchEvent( int ev,int data,float x,float y );
	virtual void MotionEvent( int ev,int data,float x,float y,float z );
	virtual void DiscardGraphics();

protected:

	static BBGame *_game;

	BBGameDelegate *_delegate;
	bool _keyboardEnabled;
	int _updateRate;
	bool _started;
	bool _suspended;
};

//***** game.cpp *****

BBGame *BBGame::_game;

BBGame::BBGame():
_delegate( 0 ),
_keyboardEnabled( false ),
_updateRate( 0 ),
_started( false ),
_suspended( false ){
	_game=this;
}

void BBGame::SetDelegate( BBGameDelegate *delegate ){
	_delegate=delegate;
}

void BBGame::SetKeyboardEnabled( bool enabled ){
	_keyboardEnabled=enabled;
}

bool BBGame::KeyboardEnabled(){
	return _keyboardEnabled;
}

void BBGame::SetUpdateRate( int updateRate ){
	_updateRate=updateRate;
}

int BBGame::UpdateRate(){
	return _updateRate;
}

int BBGame::Millisecs(){
	return 0;
}

void BBGame::GetDate( Array<int> date ){
	int n=date.Length();
	if( n>0 ){
		time_t t=time( 0 );
		
#if _MSC_VER
		struct tm tii;
		struct tm *ti=&tii;
		localtime_s( ti,&t );
#else
		struct tm *ti=localtime( &t );
#endif

		date[0]=ti->tm_year+1900;
		if( n>1 ){ 
			date[1]=ti->tm_mon+1;
			if( n>2 ){
				date[2]=ti->tm_mday;
				if( n>3 ){
					date[3]=ti->tm_hour;
					if( n>4 ){
						date[4]=ti->tm_min;
						if( n>5 ){
							date[5]=ti->tm_sec;
							if( n>6 ){
								date[6]=0;
							}
						}
					}
				}
			}
		}
	}
}

int BBGame::SaveState( String state ){
	if( FILE *f=OpenFile( "./.monkeystate","wb" ) ){
		bool ok=state.Save( f );
		fclose( f );
		return ok ? 0 : -2;
	}
	return -1;
}

String BBGame::LoadState(){
	if( FILE *f=OpenFile( "./.monkeystate","rb" ) ){
		String str=String::Load( f );
		fclose( f );
		return str;
	}
	return "";
}

String BBGame::LoadString( String path ){
	if( FILE *fp=OpenFile( path,"rb" ) ){
		String str=String::Load( fp );
		fclose( fp );
		return str;
	}
	return "";
}

bool BBGame::PollJoystick( int port,Array<Float> joyx,Array<Float> joyy,Array<Float> joyz,Array<bool> buttons ){
	return false;
}

void BBGame::OpenUrl( String url ){
}

void BBGame::SetMouseVisible( bool visible ){
}

//***** C++ Game *****

String BBGame::PathToFilePath( String path ){
	return path;
}

FILE *BBGame::OpenFile( String path,String mode ){
	path=PathToFilePath( path );
	if( path=="" ) return 0;
	
#if __cplusplus_winrt
	path=path.Replace( "/","\\" );
	FILE *f;
	if( _wfopen_s( &f,path.ToCString<wchar_t>(),mode.ToCString<wchar_t>() ) ) return 0;
	return f;
#elif _WIN32
	return _wfopen( path.ToCString<wchar_t>(),mode.ToCString<wchar_t>() );
#else
	return fopen( path.ToCString<char>(),mode.ToCString<char>() );
#endif
}

unsigned char *BBGame::LoadData( String path,int *plength ){

	FILE *f=OpenFile( path,"rb" );
	if( !f ) return 0;

	const int BUF_SZ=4096;
	std::vector<void*> tmps;
	int length=0;
	
	for(;;){
		void *p=malloc( BUF_SZ );
		int n=fread( p,1,BUF_SZ,f );
		tmps.push_back( p );
		length+=n;
		if( n!=BUF_SZ ) break;
	}
	fclose( f );
	
	unsigned char *data=(unsigned char*)malloc( length );
	unsigned char *p=data;
	
	int sz=length;
	for( int i=0;i<tmps.size();++i ){
		int n=sz>BUF_SZ ? BUF_SZ : sz;
		memcpy( p,tmps[i],n );
		free( tmps[i] );
		sz-=n;
		p+=n;
	}
	
	*plength=length;
	
	gc_force_sweep=true;
	
	return data;
}

//***** INTERNAL *****

void BBGame::Die( ThrowableObject *ex ){
	bbPrint( "Monkey Runtime Error : Uncaught Monkey Exception" );
#ifndef NDEBUG
	bbPrint( ex->stackTrace );
#endif
	exit( -1 );
}

void BBGame::gc_collect(){
	gc_mark( _delegate );
	::gc_collect();
}

void BBGame::StartGame(){

	if( _started ) return;
	_started=true;
	
	try{
		_delegate->StartGame();
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::SuspendGame(){

	if( !_started || _suspended ) return;
	_suspended=true;
	
	try{
		_delegate->SuspendGame();
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::ResumeGame(){

	if( !_started || !_suspended ) return;
	_suspended=false;
	
	try{
		_delegate->ResumeGame();
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::UpdateGame(){

	if( !_started || _suspended ) return;
	
	try{
		_delegate->UpdateGame();
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::RenderGame(){

	if( !_started ) return;
	
	try{
		_delegate->RenderGame();
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::KeyEvent( int ev,int data ){

	if( !_started ) return;
	
	try{
		_delegate->KeyEvent( ev,data );
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::MouseEvent( int ev,int data,float x,float y ){

	if( !_started ) return;
	
	try{
		_delegate->MouseEvent( ev,data,x,y );
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::TouchEvent( int ev,int data,float x,float y ){

	if( !_started ) return;
	
	try{
		_delegate->TouchEvent( ev,data,x,y );
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::MotionEvent( int ev,int data,float x,float y,float z ){

	if( !_started ) return;
	
	try{
		_delegate->MotionEvent( ev,data,x,y,z );
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

void BBGame::DiscardGraphics(){

	if( !_started ) return;
	
	try{
		_delegate->DiscardGraphics();
	}catch( ThrowableObject *ex ){
		Die( ex );
	}
	gc_collect();
}

//***** winrtgame.h *****

class BBWinrtGame : public BBGame{
public:
	BBWinrtGame();
	
	virtual int GetDeviceWidth()=0;
	virtual int GetDeviceHeight()=0;
	virtual int GetDeviceRotation()=0;
	
	virtual ID3D11Device1 *GetD3dDevice()=0;
	virtual ID3D11DeviceContext1 *GetD3dContext()=0;
	virtual ID3D11RenderTargetView *GetRenderTargetView()=0;

	virtual unsigned char *LoadImageData( String path,int *width,int *height,int *format )=0;
	virtual unsigned char *LoadAudioData( String path,int *length,int *channels,int *format,int *hertz )=0;

	virtual void ValidateUpdateTimer()=0;

	static BBWinrtGame *WinrtGame(){ return _winrtGame; }
	
	virtual void SetUpdateRate( int updateRate );
	virtual int Millisecs();
	virtual int SaveState( String state );
	virtual String LoadState();
	virtual bool PollJoystick( int port,Array<Float> joyx,Array<Float> joyy,Array<Float> joyz,Array<bool> buttons );
	virtual void OpenUrl( String url );
	
	virtual String PathToFilePath( String path );

	virtual void SuspendGame();
	virtual void ResumeGame();
	
	virtual void OnPointerPressed( Windows::UI::Input::PointerPoint ^p );
	virtual void OnPointerReleased( Windows::UI::Input::PointerPoint ^p );
	virtual void OnPointerMoved( Windows::UI::Input::PointerPoint ^p );

	void Sleep( double time );
	double GetTime();
	
private:
	static BBWinrtGame *_winrtGame;
	
	unsigned int _pointerIds[32];
};

//***** winrtgame.cpp *****

#define ZEROMEM(X) memset( &X,0,sizeof(X) );

static void DXASS( HRESULT hr ){
	if( FAILED( hr ) ){
		// Set a breakpoint on this line to catch Win32 API errors.
		throw Platform::Exception::CreateException( hr );
	}
}

static float DipsToPixels( float dips ){
	static const float dipsPerInch=96.0f;
	return floor( dips*DisplayProperties::LogicalDpi/dipsPerInch+0.5f ); // Round to nearest integer.
}

BBWinrtGame *BBWinrtGame::_winrtGame;

BBWinrtGame::BBWinrtGame(){

	_winrtGame=this;
	
	memset( _pointerIds,0,sizeof( _pointerIds ) );
}

void BBWinrtGame::SetUpdateRate( int hertz ){
	BBGame::SetUpdateRate( hertz );
	ValidateUpdateTimer();
}

int BBWinrtGame::Millisecs(){
	return int( GetTime()*1000.0 );
}

int BBWinrtGame::SaveState( String state ){
	if( FILE *f=OpenFile( "monkey://internal/.monkeystate","wb" ) ){
		bool ok=state.Save( f );
		fclose( f );
		return ok ? 0 : -2;
	}
	return -1;
}

String BBWinrtGame::LoadState(){
	if( FILE *f=OpenFile( "monkey://internal/.monkeystate","rb" ) ){
		String str=String::Load( f );
		fclose( f );
		return str;
	}
	return "";
}

bool BBWinrtGame::PollJoystick( int port,Array<Float> joyx,Array<Float> joyy,Array<Float> joyz,Array<bool> buttons ){
	return false;
}

void BBWinrtGame::OpenUrl( String url ){
	auto str=ref new Platform::String( url.ToCString<char16>(),url.Length() );
	auto uri=ref new Windows::Foundation::Uri( str );
	Windows::System::Launcher::LaunchUriAsync( uri );
}

String BBWinrtGame::PathToFilePath( String path ){
	String fpath;
	if( !path.StartsWith( "monkey:" ) ){
		fpath=path;
	}else if( path.StartsWith( "monkey://data/" ) ){
		auto folder=Windows::ApplicationModel::Package::Current->InstalledLocation;
		fpath=String( folder->Path )+"/Assets/monkey/"+path.Slice( 14 );
	}else if( path.StartsWith( "monkey://internal/" ) ){
		auto folder=Windows::Storage::ApplicationData::Current->LocalFolder;
		fpath=String( folder->Path )+"/"+path.Slice( 18 );
	}
	return fpath;
}

void BBWinrtGame::SuspendGame(){
	BBGame::SuspendGame();
	ValidateUpdateTimer();
}

void BBWinrtGame::ResumeGame(){
	BBGame::ResumeGame();
	ValidateUpdateTimer();
}

double BBWinrtGame::GetTime(){
	static int f;
	static LARGE_INTEGER pcf,pc0;
	if( !f ){
		if( QueryPerformanceFrequency( &pcf ) && QueryPerformanceCounter( &pc0 ) ){
			f=1;
		}else{
			f=-1;
		}
	}
	if( f>0 ){
		LARGE_INTEGER pc;
		if( QueryPerformanceCounter( &pc ) ) return (double)(pc.QuadPart-pc0.QuadPart) / (double)pcf.QuadPart;
		f=-1;
	}
	abort();
	return -1;
}

void BBWinrtGame::Sleep( double time ){
	if( WaitForSingleObjectEx( GetCurrentThread(),int( time*1000.0 ),FALSE )==WAIT_OBJECT_0 ){
		//success!
	}
}

void BBWinrtGame::OnPointerPressed( PointerPoint ^p ){
	
#if WINDOWS_8
	auto t=p->PointerDevice->PointerDeviceType;
#elif WINDOWS_PHONE_8
	auto t=Windows::Devices::Input::PointerDeviceType::Touch;
#endif
	
	switch( t ){
	case Windows::Devices::Input::PointerDeviceType::Touch:
		{
			int id=0;
			while( id<32 && _pointerIds[id]!=p->PointerId ) ++id;
			if( id<32 ) return;		//Error! Pointer ID already in use!
			id=0;
			while( id<32 && _pointerIds[id] ) ++id;
			if( id>=32 ) return;	//Error! Too many fingers!
			_pointerIds[id]=p->PointerId;
			float x=DipsToPixels( p->Position.X );
			float y=DipsToPixels( p->Position.Y );
			TouchEvent( BBGameEvent::TouchDown,id,x,y );
		}
		break;
	case Windows::Devices::Input::PointerDeviceType::Mouse:
		{
			float x=DipsToPixels( p->Position.X );
			float y=DipsToPixels( p->Position.Y );
			switch( p->Properties->PointerUpdateKind ){
			case Windows::UI::Input::PointerUpdateKind::LeftButtonPressed:
				MouseEvent( BBGameEvent::MouseDown,0,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::RightButtonPressed:
				MouseEvent( BBGameEvent::MouseDown,1,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::MiddleButtonPressed:
				MouseEvent( BBGameEvent::MouseDown,2,x,y );
				break;
			}
		}
		break;
	}
}

void BBWinrtGame::OnPointerReleased( PointerPoint ^p ){

#if WINDOWS_8
	auto t=p->PointerDevice->PointerDeviceType;
#elif WINDOWS_PHONE_8
	auto t=Windows::Devices::Input::PointerDeviceType::Touch;
#endif
	
	switch( t ){
	case Windows::Devices::Input::PointerDeviceType::Touch:
		{
			int id=0;
			while( id<32 && _pointerIds[id]!=p->PointerId ) ++id;
			if( id>=32 ) return; 	//Pointer ID not found!
			_pointerIds[id]=0;
			float x=DipsToPixels( p->Position.X );
			float y=DipsToPixels( p->Position.Y );
			TouchEvent( BBGameEvent::TouchUp,id,x,y );
		}
		break;
	case Windows::Devices::Input::PointerDeviceType::Mouse:
		{
			float x=DipsToPixels( p->Position.X );
			float y=DipsToPixels( p->Position.Y );
			switch( p->Properties->PointerUpdateKind ){
			case Windows::UI::Input::PointerUpdateKind::LeftButtonReleased:
				MouseEvent( BBGameEvent::MouseUp,0,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::RightButtonReleased:
				MouseEvent( BBGameEvent::MouseUp,1,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::MiddleButtonReleased:
				MouseEvent( BBGameEvent::MouseUp,2,x,y );
				break;
			}
		}
		break;
	}
}

void BBWinrtGame::OnPointerMoved( PointerPoint ^p ){

#if WINDOWS_8
	auto t=p->PointerDevice->PointerDeviceType;
#elif WINDOWS_PHONE_8
	auto t=Windows::Devices::Input::PointerDeviceType::Touch;
#endif
	
	switch( t ){
	case Windows::Devices::Input::PointerDeviceType::Touch:
		{
			int id=0;
			while( id<32 && _pointerIds[id]!=p->PointerId ) ++id;
			if( id>=32 ) return;	 //Pointer ID not found!
			float x=DipsToPixels( p->Position.X );
			float y=DipsToPixels( p->Position.Y );
			TouchEvent( BBGameEvent::TouchMove,id,x,y );
		}
		break;
	case Windows::Devices::Input::PointerDeviceType::Mouse:
		{
			float x=DipsToPixels( p->Position.X );
			float y=DipsToPixels( p->Position.Y );
			switch( p->Properties->PointerUpdateKind ){
			case Windows::UI::Input::PointerUpdateKind::LeftButtonPressed:
				MouseEvent( BBGameEvent::MouseDown,0,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::RightButtonPressed:
				MouseEvent( BBGameEvent::MouseDown,1,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::MiddleButtonPressed:
				MouseEvent( BBGameEvent::MouseDown,2,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::LeftButtonReleased:
				MouseEvent( BBGameEvent::MouseUp,0,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::RightButtonReleased:
				MouseEvent( BBGameEvent::MouseUp,1,x,y );
				break;
			case Windows::UI::Input::PointerUpdateKind::MiddleButtonReleased:
				MouseEvent( BBGameEvent::MouseUp,2,x,y );
				break;
			default:
				MouseEvent( BBGameEvent::MouseMove,-1,x,y );
			}
		}
		break;
	case Windows::Devices::Input::PointerDeviceType::Pen:{
		}
		break;
	}
}

// ***** monkeygame.h *****

// This class is the bridge to native project, ie: the only class that can see Direct3DBackground class.
//
class BBMonkeyGame : public BBWinrtGame{
public:
	BBMonkeyGame();
	
	//BBMonkeyGame...
	IDXGISwapChain1 *GetSwapChain(){ return _swapChain.Get(); }
	bool UpdateGameEx();
	void SwapBuffers();
	
	//BBWinrtGame implementations...
	virtual int GetDeviceWidth(){ return _devWidth; }
	virtual int GetDeviceHeight(){ return _devHeight; }
	virtual int GetDeviceRotation();
	
	virtual ID3D11Device1 *GetD3dDevice(){ return _device.Get(); }
	virtual ID3D11DeviceContext1 *GetD3dContext(){ return _context.Get(); }
	virtual ID3D11RenderTargetView *GetRenderTargetView(){ return _view.Get(); }
	
	virtual unsigned char *LoadImageData( String path,int *width,int *height,int *format );
	virtual unsigned char *LoadAudioData( String path,int *length,int *channels,int *format,int *hertz );

	virtual void ValidateUpdateTimer();
	
private:

	int _devWidth,_devHeight;
	
	double _updateTime,_updatePeriod;
	
	void CreateD3dResources();
	D3D_FEATURE_LEVEL _featureLevel;

	ComPtr<IDXGISwapChain1> _swapChain;
	ComPtr<ID3D11Device1> _device;
	ComPtr<ID3D11DeviceContext1> _context;
	ComPtr<ID3D11RenderTargetView> _view;
	
	IWICImagingFactory *_wicFactory;
};

// ***** monkeygame.cpp *****
BBMonkeyGame::BBMonkeyGame():_updateTime( 0 ),_updatePeriod( 0 ),_wicFactory( 0 ){

	_devWidth=DipsToPixels( CoreWindow::GetForCurrentThread()->Bounds.Width );
	_devHeight=DipsToPixels( CoreWindow::GetForCurrentThread()->Bounds.Height );
	
	if( _devWidth<_devHeight ) std::swap( _devWidth,_devHeight );

	CreateD3dResources();
}

void BBMonkeyGame::CreateD3dResources(){

	int width=_devWidth;
	int height=_devHeight;

	UINT creationFlags=D3D11_CREATE_DEVICE_BGRA_SUPPORT;
	
#ifdef _DEBUG
	creationFlags|=D3D11_CREATE_DEVICE_DEBUG;
#endif

	D3D_FEATURE_LEVEL featureLevels[]={
		D3D_FEATURE_LEVEL_11_1,
		D3D_FEATURE_LEVEL_11_0,
		D3D_FEATURE_LEVEL_10_1,
		D3D_FEATURE_LEVEL_10_0,
		D3D_FEATURE_LEVEL_9_3,
		D3D_FEATURE_LEVEL_9_2,
		D3D_FEATURE_LEVEL_9_1
	};
	
	ComPtr<ID3D11Device> device;
	ComPtr<ID3D11DeviceContext> context;

	DXASS( D3D11CreateDevice( 
		0,
		D3D_DRIVER_TYPE_HARDWARE,
		0,
		creationFlags,
		featureLevels,
		ARRAYSIZE(featureLevels),
		D3D11_SDK_VERSION,
		&device,
		&_featureLevel,
		&context ) );
		
	DXASS( device.As( &_device ) );
	DXASS( context.As( &_context ) );
	
	//create swap chain
	if( _swapChain ){

		DXASS( _swapChain->ResizeBuffers( 2,width,height,DXGI_FORMAT_B8G8R8A8_UNORM,0 ) );

	}else{

		DXGI_SWAP_CHAIN_DESC1 swapChainDesc;
		ZEROMEM( swapChainDesc );
		swapChainDesc.Width=width;
		swapChainDesc.Height=height;
		swapChainDesc.Format=DXGI_FORMAT_B8G8R8A8_UNORM;
		swapChainDesc.Stereo=false;
		swapChainDesc.SampleDesc.Count=1;
		swapChainDesc.SampleDesc.Quality=0;
		swapChainDesc.BufferUsage=DXGI_USAGE_RENDER_TARGET_OUTPUT;
		swapChainDesc.BufferCount=2;
		swapChainDesc.Scaling=DXGI_SCALING_STRETCH;
		swapChainDesc.SwapEffect=DXGI_SWAP_EFFECT_FLIP_SEQUENTIAL;
		swapChainDesc.Flags=0;

		ComPtr<IDXGIDevice1> dxgiDevice;
		_device.As( &dxgiDevice );
		
		ComPtr<IDXGIAdapter> dxgiAdapter;
		DXASS( dxgiDevice->GetAdapter( &dxgiAdapter ) );

		ComPtr<IDXGIFactory2> dxgiFactory;
		DXASS( dxgiAdapter->GetParent( __uuidof( IDXGIFactory2 ),(void**)&dxgiFactory ) );
	
		DXASS( dxgiFactory->CreateSwapChainForComposition( _device.Get(),&swapChainDesc,0,&_swapChain ) );
		DXASS( dxgiDevice->SetMaximumFrameLatency( 1 ) );
	}
	
	// Create a render target view of the swap chain back buffer.
	//
	ComPtr<ID3D11Texture2D> backBuffer;
	DXASS( _swapChain->GetBuffer( 0,__uuidof( ID3D11Texture2D ),(void**)&backBuffer ) );
	DXASS( _device->CreateRenderTargetView( backBuffer.Get(),0,&_view ) );
}

void BBMonkeyGame::ValidateUpdateTimer(){
	if( _updateRate && !_suspended ){
		_updatePeriod=1.0/_updateRate;
		_updateTime=GetTime()+_updatePeriod;
	}else{
		_updatePeriod=0;
	}
}

bool BBMonkeyGame::UpdateGameEx(){
	double time=GetTime();

	for( int i=0;i<4;++i ){
	
		if( !_updatePeriod || _updateTime>time ) return i>0;
		
		_updateTime+=_updatePeriod;
		
		BBWinrtGame::UpdateGame();
	}
	
	_updateTime=GetTime()+_updatePeriod;
	
	return true;
}

void BBMonkeyGame::SwapBuffers(){
	DXASS( _swapChain->Present( 1,0 ) );
}

int BBMonkeyGame::GetDeviceRotation(){
	switch( DisplayProperties::CurrentOrientation ){
	case DisplayOrientations::Landscape:return 0;
	case DisplayOrientations::Portrait:return 1;
	case DisplayOrientations::LandscapeFlipped:return 2;
	case DisplayOrientations::PortraitFlipped:return 3;
	}
	return 0;
}

unsigned char *BBMonkeyGame::LoadImageData( String path,int *pwidth,int *pheight,int *pformat ){

	if( !_wicFactory ){
		DXASS( CoCreateInstance( CLSID_WICImagingFactory,0,CLSCTX_INPROC_SERVER,__uuidof(IWICImagingFactory),(LPVOID*)&_wicFactory ) );
	}
	
	path=PathToFilePath( path );

	IWICBitmapDecoder *decoder;
	if( !SUCCEEDED( _wicFactory->CreateDecoderFromFilename( path.ToCString<wchar_t>(),NULL,GENERIC_READ,WICDecodeMetadataCacheOnDemand,&decoder ) ) ){
		return 0;
	}
	
	unsigned char *data=0;

	IWICBitmapFrameDecode *bitmapFrame;
	DXASS( decoder->GetFrame( 0,&bitmapFrame ) );
	
	UINT width,height;
	WICPixelFormatGUID pixelFormat;
	DXASS( bitmapFrame->GetSize( &width,&height ) );
	DXASS( bitmapFrame->GetPixelFormat( &pixelFormat ) );
			
	if( pixelFormat==GUID_WICPixelFormat24bppBGR ){
		unsigned char *t=(unsigned char*)malloc( width*3*height );
		DXASS( bitmapFrame->CopyPixels( 0,width*3,width*3*height,t ) );
		data=(unsigned char*)malloc( width*4*height );
		unsigned char *s=t,*d=data;
		int n=width*height;
		while( n-- ){
			*d++=s[2];
			*d++=s[1];
			*d++=s[0];
			*d++=0xff;
			s+=3;
		}
		free( t );
	}else if( pixelFormat==GUID_WICPixelFormat32bppBGRA ){
		unsigned char *t=(unsigned char*)malloc( width*4*height );
		DXASS( bitmapFrame->CopyPixels( 0,width*4,width*4*height,t ) );
		data=t;
		int n=width*height;
		while( n-- ){	//premultiply alpha
			unsigned char r=t[0];
			t[0]=t[2]*t[3]/255;
			t[1]=t[1]*t[3]/255;
			t[2]=r*t[3]/255;
			t+=4;
		}
	}
	
	if( data ){
		*pwidth=width;
		*pheight=height;
		*pformat=4;
	}
	
	bitmapFrame->Release();
	decoder->Release();
	
	gc_force_sweep=true;

	return data;
}

unsigned char *BBMonkeyGame::LoadAudioData( String path,int *length,int *channels,int *format,int *hertz ){

	String url=PathToFilePath( path );
	
	DXASS( MFStartup( MF_VERSION ) );
	
	IMFAttributes *attrs;
	DXASS( MFCreateAttributes( &attrs,1 ) );
	DXASS( attrs->SetUINT32( MF_LOW_LATENCY,TRUE ) );
	
	IMFSourceReader *reader;
	if( FAILED( MFCreateSourceReaderFromURL( url.ToCString<wchar_t>(),attrs,&reader ) ) ){
		attrs->Release();
		return 0;
	}

	attrs->Release();

	IMFMediaType *mediaType;
	DXASS( MFCreateMediaType( &mediaType ) );
	DXASS( mediaType->SetGUID( MF_MT_MAJOR_TYPE,MFMediaType_Audio ) );
	DXASS( mediaType->SetGUID( MF_MT_SUBTYPE,MFAudioFormat_PCM ) );

	DXASS( reader->SetCurrentMediaType( MF_SOURCE_READER_FIRST_AUDIO_STREAM,0,mediaType ) );
    
	mediaType->Release();

	IMFMediaType *outputMediaType;
	DXASS( reader->GetCurrentMediaType( MF_SOURCE_READER_FIRST_AUDIO_STREAM,&outputMediaType ) );
	
	WAVEFORMATEX *wformat;
	uint32 formatByteCount=0;
	DXASS( MFCreateWaveFormatExFromMFMediaType( outputMediaType,&wformat,&formatByteCount ) );

	*channels=wformat->nChannels;
	*format=wformat->wBitsPerSample/8;
	*hertz=wformat->nSamplesPerSec;

	CoTaskMemFree( wformat );
    
	outputMediaType->Release();
/*    
	PROPVARIANT var;
	DXASS( reader->GetPresentationAttribute( MF_SOURCE_READER_MEDIASOURCE,MF_PD_DURATION,&var ) );
	LONGLONG duration=var.uhVal.QuadPart;
	float64 durationInSeconds=(duration / (float64)(10000 * 1000));
	m_maxStreamLengthInBytes=(uint32)( durationInSeconds * m_waveFormat.nAvgBytesPerSec );
*/
	std::vector<unsigned char*> bufs;
	std::vector<uint32> lens;
	uint32 len=0;
    
	for( ;; ){
		uint32 flags=0;
		IMFSample *sample;
		DXASS( reader->ReadSample( MF_SOURCE_READER_FIRST_AUDIO_STREAM,0,0,reinterpret_cast<DWORD*>(&flags),0,&sample ) );
		
		if( flags & MF_SOURCE_READERF_ENDOFSTREAM ){
			break;
		}
		if( sample==0 ){ 
			abort();
		}
		
		IMFMediaBuffer *mediaBuffer;
		DXASS( sample->ConvertToContiguousBuffer( &mediaBuffer ) );

		uint8 *audioData=0;
		uint32 sampleBufferLength=0;
		DXASS( mediaBuffer->Lock( &audioData,0,reinterpret_cast<DWORD*>( &sampleBufferLength ) ) );
		
		unsigned char *buf=(unsigned char*)malloc( sampleBufferLength );
		memcpy( buf,audioData,sampleBufferLength );
		
		bufs.push_back( buf );
		lens.push_back( sampleBufferLength );
		len+=sampleBufferLength;
		
		DXASS( mediaBuffer->Unlock() );
		mediaBuffer->Release();
		
		sample->Release();
	}
	
	reader->Release();
	
	*length=len/(*channels * *format);

	unsigned char *data=(unsigned char*)malloc( len );
	unsigned char *p=data;
	
	for( int i=0;i<bufs.size();++i ){
		memcpy( p,bufs[i],lens[i] );
		free( bufs[i] );
		p+=lens[i];
	}
	
	gc_force_sweep=true;
	
	return data;
}	

// ***** gxtkGraphics.h *****

class gxtkSurface;

class gxtkGraphics : public Object{
public:
	gxtkGraphics();
	
	virtual int Width();
	virtual int Height();
	
	virtual int  BeginRender();
	virtual void EndRender();
	virtual void DiscardGraphics();
	
	virtual gxtkSurface *LoadSurface__UNSAFE__( gxtkSurface *surface,String path );
	virtual gxtkSurface *LoadSurface( String path );
	virtual gxtkSurface *CreateSurface( int width,int height );
	
	virtual int Cls( float red,float g,float b );
	virtual int SetAlpha( float alpha );
	virtual int SetColor( float r,float g,float b );
	virtual int SetMatrix( float ix,float iy,float jx,float jy,float tx,float ty );
	virtual int SetScissor( int x,int y,int width,int height );
	virtual int SetBlend( int blend );
	
	virtual int DrawPoint( float x,float y );
	virtual int DrawRect( float x,float y,float w,float h );
	virtual int DrawLine( float x1,float y1,float x2,float y2 );
	virtual int DrawOval( float x,float y,float w,float h );
	virtual int DrawPoly( Array<Float> verts );
	virtual int DrawPoly2( Array<Float> verts,gxtkSurface *surface,int srcx,int srcy );
	virtual int DrawSurface( gxtkSurface *surface,float x,float y );
	virtual int DrawSurface2( gxtkSurface *surface,float x,float y,int srcx,int srcy,int srcw,int srch );
	
	virtual int ReadPixels( Array<int> pixels,int x,int y,int width,int height,int offset,int pitch );
	virtual int WritePixels2( gxtkSurface *surface,Array<int> pixels,int x,int y,int width,int height,int offset,int pitch );
	
	// ***** INTERNAL *****
	struct Vertex{
		float x,y,u,v;
		unsigned int color;
	};
	
	struct ShaderConstants{
		DirectX::XMFLOAT4X4 projection;
	};

	enum{
		MAX_VERTS=1024,
		MAX_POINTS=MAX_VERTS,
		MAX_LINES=MAX_VERTS/2,
		MAX_QUADS=MAX_VERTS/4
	};
	
	Vertex *primVerts,*nextVert;
	int primType;
	gxtkSurface *primSurf;
	gxtkSurface *devPrimSurf;
	D3D11_PRIMITIVE_TOPOLOGY primTop;
	
	unsigned short quadIndices[MAX_QUADS*6]; 

	int gwidth,gheight;
	int dwidth,dheight;
	DirectX::XMFLOAT4X4 omatrix;
	
	float ix,iy,jx,jy,tx,ty;
	bool tformed;

	float r,g,b,alpha;
	unsigned int color;
	
	D3D11_RECT scissorRect;
	
	ShaderConstants shaderConstants;
	
	ComPtr<ID3D11Device1> d3dDevice;
	ComPtr<ID3D11DeviceContext1> d3dContext;
	
	// ***** D3d resources *****
	//
	ComPtr<ID3D11VertexShader> simpleVertexShader;
	ComPtr<ID3D11PixelShader> simplePixelShader;
	ComPtr<ID3D11VertexShader> textureVertexShader;
	ComPtr<ID3D11PixelShader> texturePixelShader;
	
	ComPtr<ID3D11InputLayout> inputLayout;
	ComPtr<ID3D11Buffer> vertexBuffer;
	ComPtr<ID3D11Buffer> indexBuffer;
	ComPtr<ID3D11Buffer> indexBuffer2;
	ComPtr<ID3D11Buffer> constantBuffer;
	
	ComPtr<ID3D11BlendState> alphaBlendState;
	ComPtr<ID3D11BlendState> additiveBlendState;
	ComPtr<ID3D11RasterizerState> rasterizerState;
	ComPtr<ID3D11DepthStencilState> depthStencilState;
	ComPtr<ID3D11SamplerState> samplerState;

	void MapVB();
	void UnmapVB();
	void CreateD3dResources();
	void Flush();
	void ValidateSize();
	D3D11_RECT DisplayRect( int x,int y,int w,int h );
	Vertex *Begin( int type,gxtkSurface *surf );

};

class gxtkSurface : public Object{
public:
	int seq;
	unsigned char *data;
	int width,height,format;
	float uscale,vscale;
	ComPtr<ID3D11Texture2D> texture;
	ComPtr<ID3D11ShaderResourceView> resourceView;

	gxtkSurface();
	~gxtkSurface();
	
	void SetData( unsigned char *data,int width,int height,int format );
	void SetSubData( int x,int y,int w,int h,unsigned *src,int pitch );
	
	void Validate();
	
	virtual int Width();
	virtual int Height();
	virtual void Discard();
	virtual bool OnUnsafeLoadComplete();
};

//***** gxtkGraphics.cpp *****

using namespace DirectX;
using namespace Windows::Graphics::Display;

static int graphics_seq=1;

gxtkGraphics::gxtkGraphics(){

	CreateD3dResources();
	
	ValidateSize();
}

void gxtkGraphics::ValidateSize(){

	gwidth=dwidth=BBWinrtGame::WinrtGame()->GetDeviceWidth();
	gheight=dheight=BBWinrtGame::WinrtGame()->GetDeviceHeight();
	
	ZEROMEM( omatrix );
	
	int devrot=BBWinrtGame::WinrtGame()->GetDeviceRotation();
	
	switch( devrot ){
	case 0:
		omatrix._11=omatrix._22=1;
		omatrix._33=omatrix._44=1;
		break;
	case 1:
		omatrix._11= 0;omatrix._12=-1;
		omatrix._21= 1;omatrix._22= 0;
		omatrix._33=omatrix._44=1;
		break;
	case 2:
		omatrix._11=-1;omatrix._12= 0;
		omatrix._21= 0;omatrix._22=-1;
		omatrix._33=omatrix._44=1;
		break;
	case 3:
		omatrix._11= 0;omatrix._12= 1;
		omatrix._21=-1;omatrix._22= 0;
		omatrix._33=omatrix._44=1;
		break;
	}
	
	if( devrot & 1 ){
		gwidth=dheight;
		gheight=dwidth;
	}
}

D3D11_RECT gxtkGraphics::DisplayRect( int x,int y,int width,int height ){

	int x0,y0,x1,y1;
	
	int devrot=BBWinrtGame::WinrtGame()->GetDeviceRotation();

	switch( devrot ){
	case 0:
		x0=x;
		y0=y;
		x1=x0+width;
		y1=y0+height;
		break;
	case 1:
		x0=dwidth-y-height;
		y0=x;
		x1=x0+height;
		y1=y0+width;
		break;
	case 2:
		x0=dwidth-x-width;
		y0=dheight-y-height;
		x1=x0+width;
		y1=y0+height;
		break;
	case 3:
		x0=y;
		y0=dheight-x-width;
		x1=x0+height;
		y1=y0+width;
		break;
	}
	D3D11_RECT rect={x0,y0,x1,y1};
	return rect;
}

void gxtkGraphics::MapVB(){
	if( primVerts ) return;
	D3D11_MAPPED_SUBRESOURCE msr;
	d3dContext->Map( vertexBuffer.Get(),0,D3D11_MAP_WRITE_DISCARD,0,&msr );
	primVerts=(Vertex*)msr.pData;
}

void gxtkGraphics::UnmapVB(){
	if( !primVerts ) return;
	d3dContext->Unmap( vertexBuffer.Get(),0 );
	primVerts=0;
}

void gxtkGraphics::Flush(){
	if( !primType ) return;

	int n=nextVert-primVerts;
	
	UnmapVB();
	
	if( primSurf!=devPrimSurf ){
		if( devPrimSurf=primSurf ){
			primSurf->Validate();
			d3dContext->VSSetShader( textureVertexShader.Get(),0,0 );
			d3dContext->PSSetShader( texturePixelShader.Get(),0,0 );
			d3dContext->PSSetShaderResources( 0,1,primSurf->resourceView.GetAddressOf() );
		}else{
			d3dContext->VSSetShader( simpleVertexShader.Get(),0,0 );
			d3dContext->PSSetShader( simplePixelShader.Get(),0,0 );
			d3dContext->PSSetShaderResources( 0,0,0 );
		}
	}
	
	switch( primType ){
	case 1:
		if( primTop!=D3D11_PRIMITIVE_TOPOLOGY_POINTLIST ){
			primTop=D3D11_PRIMITIVE_TOPOLOGY_POINTLIST;
			d3dContext->IASetPrimitiveTopology( primTop );
		}
		d3dContext->Draw( n,0 );
		break;
	case 2:
		if( primTop!=D3D11_PRIMITIVE_TOPOLOGY_LINELIST ){
			primTop=D3D11_PRIMITIVE_TOPOLOGY_LINELIST;
			d3dContext->IASetPrimitiveTopology( primTop );
		}
		d3dContext->Draw( n,0 );
		break;
	case 3:
		if( primTop!=D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST ){
			primTop=D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST;
			d3dContext->IASetPrimitiveTopology( primTop );
		}
		d3dContext->Draw( n,0 );
		break;
	case 4:
		if( primTop!=D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST ){
			primTop=D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST;
			d3dContext->IASetPrimitiveTopology( primTop );
		}
		d3dContext->DrawIndexed( n/4*6,0,0 );
		break;
	default:
		if( primTop!=D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST ){
			primTop=D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST;
			d3dContext->IASetPrimitiveTopology( primTop );
		}
		d3dContext->IASetIndexBuffer( indexBuffer2.Get(),DXGI_FORMAT_R16_UINT,0 );
		for( int j=0;j<n;j+=primType){
			d3dContext->DrawIndexed( (primType-2)*3,0,j );
		}
		d3dContext->IASetIndexBuffer( indexBuffer.Get(),DXGI_FORMAT_R16_UINT,0 );
		break;	
	}
	
	primType=0;
}

gxtkGraphics::Vertex *gxtkGraphics::Begin( int type,gxtkSurface *surf ){
	if( type!=primType || surf!=primSurf || (nextVert+type)-primVerts>MAX_VERTS ){
		Flush();
		MapVB();
		nextVert=primVerts;
		primType=type;
		primSurf=surf;
	}
	Vertex *v=nextVert;
	nextVert+=type;
	return v;
}

//***** gxtk API *****

int gxtkGraphics::Width(){
	return gwidth;
}

int gxtkGraphics::Height(){
	return gheight;
}

int gxtkGraphics::BeginRender(){

	if( BBWinrtGame::WinrtGame()->GetD3dDevice()!=d3dDevice.Get() ){
	
		++graphics_seq;
	
		CreateD3dResources();
	}
	
	d3dContext=BBWinrtGame::WinrtGame()->GetD3dContext();
	
	ValidateSize();
	
	XMStoreFloat4x4( 
		&shaderConstants.projection,
		XMMatrixTranspose( 
			XMMatrixMultiply( 
				XMMatrixOrthographicOffCenterLH( 0,Width(),Height(),0,-1,1 ),
				XMLoadFloat4x4( &omatrix ) ) ) );

	ID3D11RenderTargetView *rtv=BBWinrtGame::WinrtGame()->GetRenderTargetView();
	
	d3dContext->OMSetRenderTargets( 1,&rtv,0 );
	
	d3dContext->OMSetDepthStencilState( depthStencilState.Get(),0 );
	
	d3dContext->UpdateSubresource( constantBuffer.Get(),0,0,&shaderConstants,0,0 );
	
	UINT stride=sizeof( Vertex ),offset=0;
	d3dContext->IASetVertexBuffers( 0,1,vertexBuffer.GetAddressOf(),&stride,&offset );
	
	d3dContext->IASetIndexBuffer( indexBuffer.Get(),DXGI_FORMAT_R16_UINT,0 );

	d3dContext->IASetInputLayout( inputLayout.Get() );

	d3dContext->VSSetConstantBuffers( 0,1,constantBuffer.GetAddressOf()	);

	d3dContext->OMSetBlendState( alphaBlendState.Get(),0,~0 );

	d3dContext->VSSetShader( simpleVertexShader.Get(),0,0 );

	d3dContext->PSSetShader( simplePixelShader.Get(),0,0 );
	
	d3dContext->PSSetSamplers( 0,1,samplerState.GetAddressOf() );
	
	d3dContext->RSSetState( rasterizerState.Get() );
	
	d3dContext->RSSetScissorRects( 0,0 );
	
	D3D11_VIEWPORT viewport={ 0,0,dwidth,dheight,0,1 };
//	D3D11_VIEWPORT viewport={ 0,0,Width(),Height(),0,1 };
	d3dContext->RSSetViewports( 1,&viewport );
	
	primVerts=0;
	primType=0;
	primSurf=0;
	devPrimSurf=0;
	primTop=D3D11_PRIMITIVE_TOPOLOGY_UNDEFINED;
	
	ix=1;iy=0;jx=0;jy=1;tx=0;ty=0;tformed=false;
	
	r=255;g=255;b=255;alpha=1;color=0xffffffff;

	return 1;
}

void gxtkGraphics::EndRender(){

	Flush();
}

void gxtkGraphics::DiscardGraphics(){
}

gxtkSurface *gxtkGraphics::LoadSurface__UNSAFE__( gxtkSurface *surface,String path ){

	int width,height,format;
	unsigned char *data=BBWinrtGame::WinrtGame()->LoadImageData( path,&width,&height,&format );
	if( !data ){
		OutputDebugStringA( "LoadImageData failed!" );
		return 0;
	}
	
	if( format==4 ){
		unsigned char *p=data;
		for( int n=width*height;n>0;--n ){ p[0]=p[0]*p[3]/255;p[1]=p[1]*p[3]/255;p[2]=p[2]*p[3]/255;p+=4; }
	}else if( format==3 ){
		unsigned char *out=(unsigned char*)malloc( width*height*4 );
		unsigned char *s=data,*d=out;
		for( int n=width*height;n>0;--n ){ *d++=*s++;*d++=*s++;*d++=*s++;*d++=255; }
		free( data );
		data=out;
		format=4;
	}else{
		bbPrint( String( "Bad image format: path=" )+path+", format="+format );
		free( data );
		return 0;
	}
	
	surface->SetData( data,width,height,format );

	return surface;
}

gxtkSurface *gxtkGraphics::LoadSurface( String path ){

	return LoadSurface__UNSAFE__( new gxtkSurface,path );
}

gxtkSurface *gxtkGraphics::CreateSurface( int width,int height ){

	gxtkSurface *surface=new gxtkSurface;
	
	surface->SetData( 0,width,height,4 );
	
	return surface;
}

int gxtkGraphics::WritePixels2( gxtkSurface *surface,Array<int> pixels,int x,int y,int width,int height,int offset,int pitch ){

	Flush();
	
	surface->SetSubData( x,y,width,height,(unsigned*)&pixels[offset],pitch );
	
	return 0;
}

int gxtkGraphics::Cls( float r,float g,float b ){

	if( scissorRect.left!=0 || scissorRect.top!=0 || scissorRect.right!=gwidth || scissorRect.bottom!=gheight ){
	
		float x0=scissorRect.left;
		float x1=scissorRect.right;
		float y0=scissorRect.top;
		float y1=scissorRect.bottom;
		unsigned color=0xff000000 | (int(b)<<16) | (int(g)<<8) | int(r);
		
		MapVB();
		primType=4;
		primSurf=0;
		Vertex *v=primVerts;
		nextVert=v+4;
		
		v[0].x=x0;v[0].y=y0;v[0].color=color;
		v[1].x=x1;v[1].y=y0;v[1].color=color;
		v[2].x=x1;v[2].y=y1;v[2].color=color;
		v[3].x=x0;v[3].y=y1;v[3].color=color;
		
	}else{
	
		UnmapVB();
		primType=0;
		
		float rgba[]={ r/255.0f,g/255.0f,b/255.0f,1.0f };
		d3dContext->ClearRenderTargetView( BBWinrtGame::WinrtGame()->GetRenderTargetView(),rgba );
	}
	
	return 0;
}


int gxtkGraphics::SetAlpha( float alpha ){

	this->alpha=alpha;
	
	color=(int(alpha*255)<<24) | (int(b*alpha)<<16) | (int(g*alpha)<<8) | int(r*alpha);
	
	return 0;
}

int gxtkGraphics::SetColor( float r,float g,float b ){

	this->r=r;this->g=g;this->b=b;
	
	color=(int(alpha*255)<<24) | (int(b*alpha)<<16) | (int(g*alpha)<<8) | int(r*alpha);

	return 0;
}

int gxtkGraphics::SetMatrix( float ix,float iy,float jx,float jy,float tx,float ty ){

	this->ix=ix;this->iy=iy;this->jx=jx;this->jy=jy;this->tx=tx;this->ty=ty;

	tformed=(ix!=1 || iy!=0 || jx!=0 || jy!=1 || tx!=0 || ty!=0);

	return 0;
}

int gxtkGraphics::SetScissor( int x,int y,int width,int height ){

	Flush();
	
	scissorRect.left=x;scissorRect.top=y;
	scissorRect.right=x+width;scissorRect.bottom=y+height;
	
	D3D11_RECT rect=DisplayRect( x,y,width,height );
	d3dContext->RSSetScissorRects( 1,&rect );

	return 0;
}

int gxtkGraphics::SetBlend( int blend ){
	
	Flush();
	
	switch( blend ){
	case 1:
		d3dContext->OMSetBlendState( additiveBlendState.Get(),0,~0 );
		break;
	default:
		d3dContext->OMSetBlendState( alphaBlendState.Get(),0,~0 );
	}

	return 0;
}

int gxtkGraphics::DrawPoint( float x0,float y0 ){

	if( tformed ){
		float tx0=x0;
		x0=tx0 * ix + y0 * jx + tx;
		y0=tx0 * iy + y0 * jy + ty;
	}
	
	Vertex *v=Begin( 1,0 );

	v[0].x=x0;v[0].y=y0;v[0].color=color;

	return 0;
}

int gxtkGraphics::DrawLine( float x0,float y0,float x1,float y1 ){

	if( tformed ){
		float tx0=x0,tx1=x1;
		x0=tx0 * ix + y0 * jx + tx;
		y0=tx0 * iy + y0 * jy + ty;
		x1=tx1 * ix + y1 * jx + tx;
		y1=tx1 * iy + y1 * jy + ty;
	}

	Vertex *v=Begin( 2,0 );

	v[0].x=x0;v[0].y=y0;v[0].color=color;
	v[1].x=x1;v[1].y=y1;v[1].color=color;

	return 0;
}

int gxtkGraphics::DrawRect( float x,float y,float w,float h ){

	float x0=x,x1=x+w,x2=x+w,x3=x;
	float y0=y,y1=y,y2=y+h,y3=y+h;
	
	if( tformed ){
		float tx0=x0,tx1=x1,tx2=x2,tx3=x3;
		x0=tx0 * ix + y0 * jx + tx;
		y0=tx0 * iy + y0 * jy + ty;
		x1=tx1 * ix + y1 * jx + tx;
		y1=tx1 * iy + y1 * jy + ty;
		x2=tx2 * ix + y2 * jx + tx;
		y2=tx2 * iy + y2 * jy + ty;
		x3=tx3 * ix + y3 * jx + tx;
		y3=tx3 * iy + y3 * jy + ty;
	}
	
	Vertex *v=Begin( 4,0 );
	
	v[0].x=x0;v[0].y=y0;v[0].color=color;
	v[1].x=x1;v[1].y=y1;v[1].color=color;
	v[2].x=x2;v[2].y=y2;v[2].color=color;
	v[3].x=x3;v[3].y=y3;v[3].color=color;
	
	return 0;
}

int gxtkGraphics::DrawOval( float x,float y,float w,float h ){

	float xr=w/2.0f;
	float yr=h/2.0f;

	int segs;
	if( tformed ){
		float dx_x=xr * ix;
		float dx_y=xr * iy;
		float dx=sqrtf( dx_x*dx_x+dx_y*dx_y );
		float dy_x=yr * jx;
		float dy_y=yr * jy;
		float dy=sqrtf( dy_x*dy_x+dy_y*dy_y );
		segs=(int)( dx+dy );
	}else{
		segs=(int)( abs( xr )+abs( yr ) );
	}
	
	if( segs<12 ){
		segs=12;
	}else if( segs>MAX_VERTS ){
		segs=MAX_VERTS;
	}else{
		segs&=~3;
	}
	
	x+=xr;
	y+=yr;
	
	Vertex *v=Begin( segs,0 );

	for( int i=0;i<segs;++i ){
	
		float th=i * 6.28318531f / segs;

		float x0=x+cosf( th ) * xr;
		float y0=y-sinf( th ) * yr;
		
		if( tformed ){
			float tx0=x0;
			x0=tx0 * ix + y0 * jx + tx;
			y0=tx0 * iy + y0 * jy + ty;
		}
		v[i].x=x0;v[i].y=y0;v[i].color=color;
	}

	return 0;
}

int gxtkGraphics::DrawPoly( Array<Float> verts ){
	int n=verts.Length()/2;
	if( n<1 || n>MAX_VERTS ) return 0;

	Vertex *v=Begin( n,0 );
	
	for( int i=0;i<n;++i ){
		float x0=verts[i*2];
		float y0=verts[i*2+1];
		if( tformed ){
			float tx0=x0;
			x0=tx0 * ix + y0 * jx + tx;
			y0=tx0 * iy + y0 * jy + ty;
		}
		v[i].x=x0;v[i].y=y0;v[i].color=color;
	}
	return 0;
}

int gxtkGraphics::DrawPoly2( Array<Float> verts,gxtkSurface *surface,int srcx,int srcy ){
	int n=verts.Length()/4;
	if( n<1 || n>MAX_VERTS ) return 0;

	Vertex *v=Begin( n,surface );
	
	for( int i=0;i<n;++i ){
		int j=i*4;
		float x0=verts[j];
		float y0=verts[j+1];
		if( tformed ){
			float tx0=x0;
			x0=tx0 * ix + y0 * jx + tx;
			y0=tx0 * iy + y0 * jy + ty;
		}
		v[i].x=x0;
		v[i].y=y0;
		v[i].u=(srcx+verts[j+2])*surface->uscale;
		v[i].v=(srcy+verts[j+3])*surface->vscale;
		v[i].color=color;
	}
	return 0;
}

int gxtkGraphics::DrawSurface( gxtkSurface *surf,float x,float y ){
	float w=surf->Width();
	float h=surf->Height();
	float x0=x,x1=x+w,x2=x+w,x3=x;
	float y0=y,y1=y,y2=y+h,y3=y+h;
	float u0=0,u1=w*surf->uscale;
	float v0=0,v1=h*surf->vscale;

	if( tformed ){
		float tx0=x0,tx1=x1,tx2=x2,tx3=x3;
		x0=tx0 * ix + y0 * jx + tx;y0=tx0 * iy + y0 * jy + ty;
		x1=tx1 * ix + y1 * jx + tx;y1=tx1 * iy + y1 * jy + ty;
		x2=tx2 * ix + y2 * jx + tx;y2=tx2 * iy + y2 * jy + ty;
		x3=tx3 * ix + y3 * jx + tx;y3=tx3 * iy + y3 * jy + ty;
	}
	
	Vertex *v=Begin( 4,surf );
	
	v[0].x=x0;v[0].y=y0;v[0].u=u0;v[0].v=v0;v[0].color=color;
	v[1].x=x1;v[1].y=y1;v[1].u=u1;v[1].v=v0;v[1].color=color;
	v[2].x=x2;v[2].y=y2;v[2].u=u1;v[2].v=v1;v[2].color=color;
	v[3].x=x3;v[3].y=y3;v[3].u=u0;v[3].v=v1;v[3].color=color;
	
	return 0;
}

int gxtkGraphics::DrawSurface2( gxtkSurface *surf,float x,float y,int srcx,int srcy,int srcw,int srch ){
	float w=srcw;
	float h=srch;
	float x0=x,x1=x+w,x2=x+w,x3=x;
	float y0=y,y1=y,y2=y+h,y3=y+h;
	float u0=srcx*surf->uscale,u1=(srcx+srcw)*surf->uscale;
	float v0=srcy*surf->vscale,v1=(srcy+srch)*surf->vscale;

	if( tformed ){
		float tx0=x0,tx1=x1,tx2=x2,tx3=x3;
		x0=tx0 * ix + y0 * jx + tx;y0=tx0 * iy + y0 * jy + ty;
		x1=tx1 * ix + y1 * jx + tx;y1=tx1 * iy + y1 * jy + ty;
		x2=tx2 * ix + y2 * jx + tx;y2=tx2 * iy + y2 * jy + ty;
		x3=tx3 * ix + y3 * jx + tx;y3=tx3 * iy + y3 * jy + ty;
	}
	
	Vertex *v=Begin( 4,surf );
	
	v[0].x=x0;v[0].y=y0;v[0].u=u0;v[0].v=v0;v[0].color=color;
	v[1].x=x1;v[1].y=y1;v[1].u=u1;v[1].v=v0;v[1].color=color;
	v[2].x=x2;v[2].y=y2;v[2].u=u1;v[2].v=v1;v[2].color=color;
	v[3].x=x3;v[3].y=y3;v[3].u=u0;v[3].v=v1;v[3].color=color;
	
	return 0;
}

int gxtkGraphics::ReadPixels( Array<int> pixels,int x,int y,int width,int height,int offset,int pitch ){

	Flush();
	
	ID3D11Resource *resource=0;
	BBWinrtGame::WinrtGame()->GetRenderTargetView()->GetResource( &resource );

	ID3D11Texture2D *backbuf=0;
	resource->QueryInterface( __uuidof(ID3D11Texture2D),(void**)&backbuf );

	D3D11_RECT r=DisplayRect( x,y,width,height );
	
	D3D11_TEXTURE2D_DESC txdesc;
	ZEROMEM( txdesc );
	txdesc.Width=r.right-r.left;
	txdesc.Height=r.bottom-r.top;
	txdesc.MipLevels=1;
	txdesc.ArraySize=1;
	txdesc.Format=DXGI_FORMAT_B8G8R8A8_UNORM;
	txdesc.SampleDesc.Count=1;
	txdesc.SampleDesc.Quality=0;
	txdesc.Usage=D3D11_USAGE_STAGING;
	txdesc.BindFlags=0;
	txdesc.CPUAccessFlags=D3D11_CPU_ACCESS_READ;
	txdesc.MiscFlags=0;

	ID3D11Texture2D *texture=0;
	DXASS( d3dDevice->CreateTexture2D( &txdesc,0,&texture ) );
	
	D3D11_BOX box={r.left,r.top,0,r.right,r.bottom,1};
	d3dContext->CopySubresourceRegion( texture,0,0,0,0,backbuf,0,&box );
	
	D3D11_MAPPED_SUBRESOURCE msr;
	ZEROMEM( msr );
	d3dContext->Map( texture,0,D3D11_MAP_READ,0,&msr );
	
//	char buf[256];
//	sprintf( buf,"Mapped! pData=%p, RowPitch=%i, DepthPitch=%i\n",msr.pData,msr.RowPitch,msr.DepthPitch );
//	OutputDebugStringA( buf );

	unsigned char *pData=(unsigned char*)msr.pData;

	int devrot=BBWinrtGame::WinrtGame()->GetDeviceRotation();

	if( devrot==0 ){
		for( int py=0;py<height;++py ){
			memcpy( &pixels[offset+py*pitch],pData+py*msr.RowPitch,width*4 );
		}
	}else if( devrot==1 ){
		for( int py=0;py<height;++py ){
			int *d=&pixels[offset+py*pitch];
			unsigned char *p=pData+(height-py-1)*4;
			for( int px=0;px<width;++px ){
				*d++=*(int*)p;
				p+=msr.RowPitch;
			}
		}
	}else if( devrot==2 ){
		for( int py=0;py<height;++py ){
			int *d=&pixels[offset+py*pitch];
			unsigned char *p=pData+(height-py-1)*msr.RowPitch+(width-1)*4;
			for( int px=0;px<width;++px ){
				*d++=*(int*)p;
				p-=4;
			}
		}
	}else if( devrot==3 ){
		for( int py=0;py<height;++py ){
			int *d=&pixels[offset+py*pitch];
			unsigned char *p=pData+(width-1)*msr.RowPitch+py*4;
			for( int px=0;px<width;++px ){
				*d++=*(int*)p;
				p-=msr.RowPitch;
			}
		}
	}

	d3dContext->Unmap( texture,0 );
	
	texture->Release();
	
	backbuf->Release();
	
	resource->Release();

	return 0;
}

static void *loadData( String path,int *sz ){
	FILE *f;
	if( _wfopen_s( &f,path.ToCString<wchar_t>(),L"rb" ) ) return 0;
	fseek( f,0,SEEK_END );
	int n=ftell( f );
	fseek( f,0,SEEK_SET );
	void *p=malloc( n );
	if( fread( p,1,n,f )!=n ) abort();
	fclose( f );
	*sz=n;
	return p;
}

void gxtkGraphics::CreateD3dResources(){

	d3dDevice=BBWinrtGame::WinrtGame()->GetD3dDevice();

	String path=Windows::ApplicationModel::Package::Current->InstalledLocation->Path;
	
	int sz;
	void *vs,*ps;

	vs=loadData( path+"/SimpleVertexShader.cso",&sz );
	if( !vs ) vs=loadData( path+"/Assets/SimpleVertexShader.cso",&sz );
	if( !vs ) abort();
	DXASS( d3dDevice->CreateVertexShader( vs,sz,0,&simpleVertexShader ) );
	free( vs );
	
	vs=loadData( path+"/TextureVertexShader.cso",&sz );
	if( !vs ) vs=loadData( path+"/Assets/TextureVertexShader.cso",&sz );
	if( !vs ) abort();
	DXASS( d3dDevice->CreateVertexShader( vs,sz,0,&textureVertexShader ) );
	const D3D11_INPUT_ELEMENT_DESC vertexDesc[]={
		{ "POSITION", 0, DXGI_FORMAT_R32G32_FLOAT,   0, 0,  D3D11_INPUT_PER_VERTEX_DATA, 0 },
		{ "TEXCOORD", 0, DXGI_FORMAT_R32G32_FLOAT,   0, 8,  D3D11_INPUT_PER_VERTEX_DATA, 0 },
		{ "COLOR",    0, DXGI_FORMAT_R8G8B8A8_UNORM, 0, 16, D3D11_INPUT_PER_VERTEX_DATA, 0 }
	};
	DXASS( d3dDevice->CreateInputLayout( vertexDesc,ARRAYSIZE(vertexDesc),vs,sz,&inputLayout ) );
	free( vs );

	ps=loadData( path+"/SimplePixelShader.cso",&sz );
	if( !ps ) ps=loadData( path+"/Assets/SimplePixelShader.cso",&sz );
	if( !ps ) abort();
	DXASS( d3dDevice->CreatePixelShader( ps,sz,0,&simplePixelShader ) );
	free( ps );

	ps=loadData( path+"/TexturePixelShader.cso",&sz );
	if( !ps ) ps=loadData( path+"/Assets/TexturePixelShader.cso",&sz );
	if( !ps ) abort();
	DXASS( d3dDevice->CreatePixelShader( ps,sz,0,&texturePixelShader ) );
	free( ps );

	D3D11_BUFFER_DESC vbdesc;
	ZEROMEM( vbdesc );
	vbdesc.ByteWidth=MAX_VERTS*sizeof( Vertex );
	vbdesc.Usage=D3D11_USAGE_DYNAMIC;
	vbdesc.BindFlags=D3D11_BIND_VERTEX_BUFFER;
	vbdesc.CPUAccessFlags=D3D11_CPU_ACCESS_WRITE;
	DXASS( d3dDevice->CreateBuffer( &vbdesc,0,&vertexBuffer ) );
	
	//Create quad index buffer
	D3D11_BUFFER_DESC ibdesc;
	ZEROMEM( ibdesc );
	ibdesc.ByteWidth=MAX_QUADS * 6 * sizeof( unsigned short );
	ibdesc.Usage=D3D11_USAGE_DEFAULT;
	ibdesc.BindFlags=D3D11_BIND_INDEX_BUFFER;
	//
	unsigned short *indices=new unsigned short[ MAX_QUADS*6 ];
	for( int i=0;i<MAX_QUADS;++i ){
		indices[i*6  ]=(unsigned short)(i*4);
		indices[i*6+1]=(unsigned short)(i*4+1);
		indices[i*6+2]=(unsigned short)(i*4+2);
		indices[i*6+3]=(unsigned short)(i*4);
		indices[i*6+4]=(unsigned short)(i*4+2);
		indices[i*6+5]=(unsigned short)(i*4+3);
	}
	D3D11_SUBRESOURCE_DATA ibdata;
	ZEROMEM( ibdata );
	ibdata.pSysMem=indices;
	//
	DXASS( d3dDevice->CreateBuffer( &ibdesc,&ibdata,&indexBuffer ) );
	//
	delete[] indices;
	
	//Create trifan index buffer
	D3D11_BUFFER_DESC ibdesc2;
	ZEROMEM( ibdesc2 );
	ibdesc2.ByteWidth=(MAX_VERTS-2) * 3 * sizeof( unsigned short );
	ibdesc2.Usage=D3D11_USAGE_DEFAULT;
	ibdesc2.BindFlags=D3D11_BIND_INDEX_BUFFER;
	//
	unsigned short *indices2=new unsigned short[ (MAX_VERTS-2)*3 ];
	for( int i=0;i<MAX_VERTS-2;++i ){
		indices2[i*3  ]=(unsigned short)0;
		indices2[i*3+1]=(unsigned short)(i+1);
		indices2[i*3+2]=(unsigned short)(i+2);
	}
	D3D11_SUBRESOURCE_DATA ibdata2;
	ZEROMEM( ibdata2 );
	ibdata2.pSysMem=indices2;
	//
	DXASS( d3dDevice->CreateBuffer( &ibdesc2,&ibdata2,&indexBuffer2 ) );
	//
	delete[] indices2;
	
	//Create shader consts buffer
	D3D11_BUFFER_DESC cbdesc;
	ZEROMEM( cbdesc );
	cbdesc.ByteWidth=sizeof( ShaderConstants );
	cbdesc.Usage=D3D11_USAGE_DEFAULT;
	cbdesc.BindFlags=D3D11_BIND_CONSTANT_BUFFER;
	DXASS( d3dDevice->CreateBuffer( &cbdesc,0,&constantBuffer ) );
	
	//Create alphaBlendState
	D3D11_BLEND_DESC abdesc;
	ZEROMEM( abdesc );
	abdesc.AlphaToCoverageEnable=FALSE;
	abdesc.IndependentBlendEnable=FALSE;
	abdesc.RenderTarget[0].BlendEnable=TRUE;
	abdesc.RenderTarget[0].SrcBlend=D3D11_BLEND_ONE;
	abdesc.RenderTarget[0].DestBlend=D3D11_BLEND_INV_SRC_ALPHA;
	abdesc.RenderTarget[0].BlendOp=D3D11_BLEND_OP_ADD;
	abdesc.RenderTarget[0].SrcBlendAlpha=D3D11_BLEND_ONE;
	abdesc.RenderTarget[0].DestBlendAlpha=D3D11_BLEND_ZERO;
	abdesc.RenderTarget[0].BlendOpAlpha=D3D11_BLEND_OP_ADD;
	abdesc.RenderTarget[0].RenderTargetWriteMask=D3D11_COLOR_WRITE_ENABLE_ALL;
	DXASS( d3dDevice->CreateBlendState( &abdesc,&alphaBlendState ) );
	
	//Additive blend state
	D3D11_BLEND_DESC pbdesc;
	ZEROMEM( pbdesc );
	memset( &pbdesc,0,sizeof(pbdesc) );
	pbdesc.AlphaToCoverageEnable=FALSE;
	pbdesc.IndependentBlendEnable=FALSE;
	pbdesc.RenderTarget[0].BlendEnable=TRUE;
	pbdesc.RenderTarget[0].SrcBlend=D3D11_BLEND_ONE;
	pbdesc.RenderTarget[0].DestBlend=D3D11_BLEND_ONE;
	pbdesc.RenderTarget[0].BlendOp=D3D11_BLEND_OP_ADD;
	pbdesc.RenderTarget[0].SrcBlendAlpha=D3D11_BLEND_ONE;
	pbdesc.RenderTarget[0].DestBlendAlpha=D3D11_BLEND_ZERO;
	pbdesc.RenderTarget[0].BlendOpAlpha=D3D11_BLEND_OP_ADD;
	pbdesc.RenderTarget[0].RenderTargetWriteMask=D3D11_COLOR_WRITE_ENABLE_ALL;
	DXASS( d3dDevice->CreateBlendState( &pbdesc,&additiveBlendState ) );
	
	//Create RasterizerState
	D3D11_RASTERIZER_DESC rsdesc;
	ZEROMEM( rsdesc );
	rsdesc.FillMode=D3D11_FILL_SOLID;
	rsdesc.CullMode=D3D11_CULL_NONE;
	rsdesc.DepthClipEnable=TRUE;
	rsdesc.ScissorEnable=TRUE;
	rsdesc.MultisampleEnable=FALSE;
	rsdesc.AntialiasedLineEnable=FALSE;
	DXASS( d3dDevice->CreateRasterizerState( &rsdesc,&rasterizerState ) );
	
	// Create DepthStencilState
	D3D11_DEPTH_STENCIL_DESC dsdesc;
	ZEROMEM( dsdesc );
	dsdesc.DepthEnable=FALSE;
	dsdesc.StencilEnable=FALSE;
	DXASS( d3dDevice->CreateDepthStencilState( &dsdesc,&depthStencilState ) );

	// Create SamplerState
	D3D11_SAMPLER_DESC ssdesc;
	ZEROMEM( ssdesc );
	ssdesc.Filter=D3D11_FILTER_MIN_MAG_MIP_LINEAR;
	ssdesc.AddressU=D3D11_TEXTURE_ADDRESS_CLAMP;
	ssdesc.AddressV=D3D11_TEXTURE_ADDRESS_CLAMP;
	ssdesc.AddressW=D3D11_TEXTURE_ADDRESS_CLAMP;
	ssdesc.MinLOD=-FLT_MAX;
	ssdesc.MaxLOD=+FLT_MAX;
	ssdesc.MaxAnisotropy=16;
	ssdesc.ComparisonFunc=D3D11_COMPARISON_NEVER;
	DXASS( d3dDevice->CreateSamplerState( &ssdesc,&samplerState ) );
}

gxtkSurface::gxtkSurface():seq(0),data(0),width(0),height(0),format(0),uscale(0),vscale(0){
}

gxtkSurface::~gxtkSurface(){
	Discard();
}

void gxtkSurface::SetData( unsigned char *data,int width,int height,int format ){
	this->seq=0;
	this->data=data;
	this->width=width;
	this->height=height;
	this->format=format;
	this->uscale=1.0f/width;
	this->vscale=1.0f/height;
}

void gxtkSurface::SetSubData( int x,int y,int w,int h,unsigned *src,int pitch ){
	if( !data ) data=(unsigned char*)malloc( width*height*4 );

	unsigned *dst=(unsigned*)data+y*width+x;
	for( int py=0;py<h;++py ){
		unsigned *d=dst+py*width;
		unsigned *s=src+py*pitch;
		for( int px=0;px<w;++px ){
			unsigned p=*s++;
			unsigned a=p>>24;
			*d++=(a<<24) | ((p>>0&0xff)*a/255<<16) | ((p>>8&0xff)*a/255<<8) | ((p>>16&0xff)*a/255);
		}
	}

	if( seq==graphics_seq ){
		D3D11_BOX box={x,y,0,x+width,y+height,1};
		BBWinrtGame::WinrtGame()->GetD3dContext()->UpdateSubresource( texture.Get(),0,&box,dst,width*4,0 );
	}
}

void gxtkSurface::Validate(){

	if( seq==graphics_seq ) return;
	
	seq=graphics_seq;

	ID3D11Device1 *d3dDevice=BBWinrtGame::WinrtGame()->GetD3dDevice();	

	D3D11_TEXTURE2D_DESC txdesc;
	txdesc.Width=width;
	txdesc.Height=height;
	txdesc.MipLevels=1;
	txdesc.ArraySize=1;
	txdesc.Format=DXGI_FORMAT_R8G8B8A8_UNORM;
	txdesc.SampleDesc.Count=1;
	txdesc.SampleDesc.Quality=0;
	txdesc.Usage=D3D11_USAGE_DEFAULT;
	txdesc.BindFlags=D3D11_BIND_SHADER_RESOURCE;
	txdesc.CPUAccessFlags=0;
	txdesc.MiscFlags=0;
	
	if( data ){
		D3D11_SUBRESOURCE_DATA txdata={ data,width*4,0 };
		DXASS( d3dDevice->CreateTexture2D( &txdesc,&txdata,&texture ) );
	}else{
		DXASS( d3dDevice->CreateTexture2D( &txdesc,0,&texture ) );
	}
	
	D3D11_SHADER_RESOURCE_VIEW_DESC rvdesc;
	ZEROMEM( rvdesc );
	rvdesc.Format=txdesc.Format;
	rvdesc.ViewDimension=D3D11_SRV_DIMENSION_TEXTURE2D;
	rvdesc.Texture2D.MostDetailedMip=0;
	rvdesc.Texture2D.MipLevels=1;
	
	DXASS( d3dDevice->CreateShaderResourceView( texture.Get(),&rvdesc,&resourceView ) );
}

bool gxtkSurface::OnUnsafeLoadComplete(){
	return true;
}

void gxtkSurface::Discard(){
}

int gxtkSurface::Width(){
	return width;
}

int gxtkSurface::Height(){
	return height;
}

//***** gxtkAudio.h *****

class gxtkSample;
class VoiceCallback;
class MediaEngineNotify;

struct gxtkChannel{
	int state,id;
	gxtkSample *sample;
	IXAudio2SourceVoice *voice;
	
	gxtkChannel():state(0),id(0),sample(0),voice(0){}
};

class gxtkAudio : public Object{
public:

	static gxtkAudio *audio;

	IXAudio2 *xaudio2;
	IXAudio2MasteringVoice *masterVoice;
	
	gxtkChannel channels[33];
	
	MediaEngineNotify *mediaEngineNotify;
	IMFMediaEngine *mediaEngine;
	
	int musicState;
	bool musicLoop;
	
	void MediaEvent( DWORD ev );
	
	gxtkAudio();
	
	virtual void mark();
	
	virtual int Suspend();
	virtual int Resume();
	
	virtual gxtkSample *LoadSample__UNSAFE__( gxtkSample *sample,String path );
	virtual gxtkSample *LoadSample( String path );
	
	virtual int PlaySample( gxtkSample *sample,int channel,int flags );
	virtual int StopChannel( int channel );
	virtual int PauseChannel( int channel );
	virtual int ResumeChannel( int channel );
	virtual int ChannelState( int channel );
	virtual int SetVolume( int channel,float volume );
	virtual int SetPan( int channel,float pan );
	virtual int SetRate( int channel,float rate );

	virtual int PlayMusic( String path,int flags );
	virtual int StopMusic();
	virtual int PauseMusic();
	virtual int ResumeMusic();
	virtual int MusicState();
	virtual int SetMusicVolume( float volume );
};

class gxtkSample : public Object{
public:

	WAVEFORMATEX wformat;
	XAUDIO2_BUFFER xbuffer;
	VoiceCallback *callbacks[16];
	IXAudio2SourceVoice *voices[16];
	bool free[16];

	gxtkSample();
	~gxtkSample();
	
	void SetData( unsigned char *data,int length,int channels,int format,int hertz );
	
	int Alloc( bool loop );
	bool IsFree( int id );

	IXAudio2SourceVoice *GetVoice( int id );

	virtual int Discard();
};

//***** gxtkAudio.cpp *****

gxtkAudio *gxtkAudio::audio;

class MediaEngineNotify : public IMFMediaEngineNotify{
    long _refs;
public:
	MediaEngineNotify():_refs( 1 ){
	}
	
	STDMETHODIMP QueryInterface( REFIID riid,void **ppv ){
		if( riid==__uuidof( IMFMediaEngineNotify ) ){
			*ppv=static_cast<IMFMediaEngineNotify*>(this);
		}else{
			*ppv=0;
			return E_NOINTERFACE;
		}
		AddRef();
		return S_OK;
	}      
	
	STDMETHODIMP_(ULONG) AddRef(){
		return InterlockedIncrement( &_refs );
	}
	
	STDMETHODIMP_(ULONG) Release(){
		LONG refs=InterlockedDecrement( &_refs );
		if( !refs ) delete this;
		return refs;
	}

	STDMETHODIMP EventNotify( DWORD meEvent,DWORD_PTR param1,DWORD param2 ){
		if( meEvent==MF_MEDIA_ENGINE_EVENT_NOTIFYSTABLESTATE ){
			SetEvent( reinterpret_cast<HANDLE>( param1 ) );
		}else{
			gxtkAudio::audio->MediaEvent( meEvent );
		}
		return S_OK;
	}
};

gxtkAudio::gxtkAudio():musicState( 0 ),musicLoop( false ){

	audio=this;

	DXASS( MFStartup( MF_VERSION ) );

	//Create xaudio2
	DXASS( XAudio2Create( &xaudio2,0,XAUDIO2_DEFAULT_PROCESSOR ) );
	DXASS( xaudio2->CreateMasteringVoice( &masterVoice ) );
	
	//Media engine attrs
	mediaEngineNotify=new MediaEngineNotify;
	
	IMFAttributes *attrs;
	DXASS( MFCreateAttributes( &attrs,1 ) );
	DXASS( attrs->SetUnknown( MF_MEDIA_ENGINE_CALLBACK,(IUnknown*)mediaEngineNotify ) );
	
	//Create media engine
	IMFMediaEngineClassFactory *factory;
	DXASS( CoCreateInstance( CLSID_MFMediaEngineClassFactory,0,CLSCTX_ALL,IID_PPV_ARGS( &factory ) ) );
	
#if WINDOWS_PHONE_8
	DXASS( factory->CreateInstance( 0,attrs,&mediaEngine ) );
#else
	DXASS( factory->CreateInstance( MF_MEDIA_ENGINE_AUDIOONLY,attrs,&mediaEngine ) );
#endif

	factory->Release();
	attrs->Release();
}

void gxtkAudio::MediaEvent( DWORD ev ){
	if( ev==MF_MEDIA_ENGINE_EVENT_LOADEDMETADATA ){
//		bbPrint( "MF_MEDIA_ENGINE_EVENT_LOADEDMETADATA" );
	}else if( ev==MF_MEDIA_ENGINE_EVENT_LOADEDDATA ){
//		bbPrint( "MF_MEDIA_ENGINE_EVENT_LOADEDDATA" );
	}else if( ev==MF_MEDIA_ENGINE_EVENT_CANPLAY ){
//		bbPrint( "MF_MEDIA_ENGINE_EVENT_CANPLAY" );
	}else if( ev==MF_MEDIA_ENGINE_EVENT_CANPLAYTHROUGH ){
//		bbPrint( "MF_MEDIA_ENGINE_EVENT_CANPLAYTHROUGH" );
	}else if( ev==MF_MEDIA_ENGINE_EVENT_ERROR ){
//		bbPrint( "MF_MEDIA_ENGINE_EVENT_ERROR" );
		musicState=0;
	}else{
//		bbPrint( String( "MF_MEDIA_ENGINE_EVENT:" )+(int)ev );
	}
}

void gxtkAudio::mark(){
	for( int i=0;i<32;++i ){
		gxtkChannel *chan=&channels[i];
		if( chan->state && chan->sample->IsFree( chan->id ) ) chan->state=0;
		if( chan->state ) gc_mark( chan->sample );
	}
}

gxtkSample *gxtkAudio::LoadSample__UNSAFE__( gxtkSample *sample,String path ){
	int length=0,channels=0,format=0,hertz=0;
	
	unsigned char *data=BBWinrtGame::WinrtGame()->LoadAudioData( path,&length,&channels,&format,&hertz );
	
	if( data ){
		sample->SetData( data,length,channels,format,hertz );
	}else{
		sample=0;
	}
	return sample;
}

gxtkSample *gxtkAudio::LoadSample( String path ){
	return LoadSample__UNSAFE__( new gxtkSample,path );
}

int gxtkAudio::Suspend(){
	return 0;
}

int gxtkAudio::Resume(){
	return 0;
}

int gxtkAudio::PlaySample( gxtkSample *sample,int channel,int flags ){

	gxtkChannel *chan=&channels[channel];
	
	StopChannel( channel );
	
	int id=sample->Alloc( (flags&1)==1 );
	if( id<0 ) return -1;
	
	IXAudio2SourceVoice *voice=sample->GetVoice( id );
	
	chan->state=1;
	chan->id=id;
	chan->sample=sample;
	chan->voice=voice;
			
	voice->Start();
	return 0;
}

int gxtkAudio::StopChannel( int channel ){

	gxtkChannel *chan=&channels[channel];
	
	if( chan->state!=0 ){
		chan->voice->Stop( 0,0 );
		chan->voice->FlushSourceBuffers();
		chan->state=0;
	}

	return 0;
}

int gxtkAudio::PauseChannel( int channel ){

	gxtkChannel *chan=&channels[channel];
	
	if( chan->state==1 ){
		chan->voice->Stop( 0,0 );
		chan->state=2;
	}
	return 0;
}

int gxtkAudio::ResumeChannel( int channel ){

	gxtkChannel *chan=&channels[channel];
	
	if( chan->state==2 ){
		chan->voice->Start();
		chan->state=1;
	}

	return 0;
}

int gxtkAudio::ChannelState( int channel ){

	gxtkChannel *chan=&channels[channel];
	
	if( chan->state && chan->sample->IsFree( chan->id ) ) chan->state=0;
	
	return chan->state;
}

int gxtkAudio::SetVolume( int channel,float volume ){
	return 0;
}

int gxtkAudio::SetPan( int channel,float pan ){
	return 0;
}

int gxtkAudio::SetRate( int channel,float rate ){
	return 0;
}

int gxtkAudio::PlayMusic( String path,int flags ){

	StopMusic();

	//should really be PathToUrl...?
	path=BBWinrtGame::WinrtGame()->PathToFilePath( path );
	
	int sz=path.Length()*2;
	int *p=(int*)malloc( 4+sz+2 );
	*p=sz;memcpy( p+1,path.ToCString<wchar_t>(),sz+2 );

	musicLoop=(flags&1)==1;

	mediaEngine->SetLoop( musicLoop );
	
	mediaEngine->SetSource( (BSTR)(p+1) );
	
	mediaEngine->Play();
	
	musicState=1;
	
	free( p );
	
	return 0;
}

int gxtkAudio::StopMusic(){

	if( !musicState ) return 0;
	
	mediaEngine->Pause();
	
	musicState=0;

	return 0;
}

int gxtkAudio::PauseMusic(){

	if( musicState!=1 ) return 0;
	
	mediaEngine->Pause();
	
	musicState=2;
	
	return 0;
}

int gxtkAudio::ResumeMusic(){

	if( musicState!=2 ) return 0;
	
	mediaEngine->Play();
	
	musicState=1;
	
	return 0;
}

int gxtkAudio::MusicState(){

	if( musicState && !musicLoop && mediaEngine->IsEnded() ) musicState=0;
	
	return musicState;
}

int gxtkAudio::SetMusicVolume( float volume ){

	mediaEngine->SetVolume( volume );

	return 0;
}

// ***** gxtkSample *****

class VoiceCallback : public IXAudio2VoiceCallback{
public:

	gxtkSample *sample;
	int id;

	VoiceCallback( gxtkSample *sample,int id ){
		this->sample=sample;
		this->id=id;
	}

	void _stdcall OnStreamEnd(){
	}
	
	void _stdcall OnVoiceProcessingPassEnd(){
	}
	
	void _stdcall OnVoiceProcessingPassStart( UINT32 SamplesRequired ){
	}
	
	void _stdcall OnBufferEnd( void *pBufferContext ){
		sample->free[id]=true;
	}
	
	void _stdcall OnBufferStart( void *pBufferContext ) {
	}
	
	void _stdcall OnLoopEnd( void *pBufferContext ){
	}
	
	void _stdcall OnVoiceError( void *pBufferContext,HRESULT Error ){
	}
};

gxtkSample::gxtkSample(){
	ZEROMEM( wformat );
	ZEROMEM( xbuffer );
	ZEROMEM( voices );
	ZEROMEM( callbacks );
	ZEROMEM( free );
}

gxtkSample::~gxtkSample(){
	Discard();
}

void gxtkSample::SetData( unsigned char *data,int length,int channels,int format,int hertz ){
	wformat.wFormatTag=WAVE_FORMAT_PCM;
	wformat.nChannels=channels;
	wformat.nSamplesPerSec=hertz;
	wformat.nAvgBytesPerSec=channels*format*hertz;
	wformat.nBlockAlign=channels*format;
	wformat.wBitsPerSample=format*8;
	
	xbuffer.AudioBytes=length*channels*format;
	xbuffer.pAudioData=data;
}

int gxtkSample::Alloc( bool loop ){
	if( !xbuffer.pAudioData ) return -1;

	int st=loop ? 8 : 0;
	
	for( int i=st;i<st+8;++i ){

		IXAudio2SourceVoice *voice=voices[i];
		
		if( !voice ){
		
			VoiceCallback *cb=new VoiceCallback( this,i );
			if( FAILED( gxtkAudio::audio->xaudio2->CreateSourceVoice( &voice,&wformat,0,XAUDIO2_DEFAULT_FREQ_RATIO,cb,0,0 ) ) ){
				delete cb;
				return 0;
			}
			callbacks[i]=cb;
			voices[i]=voice;
			
		}else if( !free[i] ){
			continue;
		}
		
		xbuffer.LoopCount=loop ? XAUDIO2_LOOP_INFINITE : 0;
		voice->SubmitSourceBuffer( &xbuffer,0 );
		free[i]=false;
		
		return i;
	}
	return -1;
}

IXAudio2SourceVoice *gxtkSample::GetVoice( int id ){
	return voices[id];
}

bool gxtkSample::IsFree( int id ){
	return free[id];
}

int gxtkSample::Discard(){
	if( !xbuffer.pAudioData ) return 0;

	for( int i=0;i<16 && voices[i];++i ){
		voices[i]->DestroyVoice();
		delete callbacks[i];
	}
	::free( (void*)xbuffer.pAudioData );
	xbuffer.pAudioData=0;
	
	return 0;
}

// ***** thread.h *****

#if __cplusplus_winrt

using namespace Windows::System::Threading;

#endif

class BBThread : public Object{
public:
	Object *result;
	
	BBThread();
	~BBThread();
	
	virtual void Start();
	virtual bool IsRunning();
	virtual Object *Result();
	virtual void SetResult( Object *result );
	
	virtual void Run__UNSAFE__();
	
	virtual void Wait();
	
private:

	enum{
		INIT=0,
		RUNNING=1,
		FINISHED=2
	};

	
	int _state;
	Object *_result;
	
#if __cplusplus_winrt

	friend class Launcher;

	class Launcher{
	
		friend class BBThread;
		BBThread *_thread;
		
		Launcher( BBThread *thread ):_thread(thread){
		}
		
		public:
		void operator()( IAsyncAction ^operation ){
			_thread->Run__UNSAFE__();
			_thread->_state=FINISHED;
		} 
	};

#elif _WIN32

	DWORD _id;
	HANDLE _handle;
	
	static DWORD WINAPI run( void *p );
	
#else

	pthread_t _handle;
	
	static void *run( void *p );
	
#endif

};

// ***** thread.cpp *****

BBThread::BBThread():_result( 0 ),_state( INIT ){
}

BBThread::~BBThread(){
	Wait();
}

bool BBThread::IsRunning(){
	return _state==RUNNING;
}

void BBThread::SetResult( Object *result ){
	_result=result;
}

Object *BBThread::Result(){
	return _result;
}

void BBThread::Run__UNSAFE__(){
}

#if __cplusplus_winrt

void BBThread::Start(){
	if( _state==RUNNING ) return;
	
	if( _state==FINISHED ) {}

	_result=0;
	
	_state=RUNNING;
	
	Launcher launcher( this );
	
	auto handler=ref new WorkItemHandler( launcher );
	
	ThreadPool::RunAsync( handler );
}

void BBThread::Wait(){
	exit( -1 );
}

#elif _WIN32

void BBThread::Start(){
	if( _state==RUNNING ) return;
	
	if( _state==FINISHED ) CloseHandle( _handle );

	_state=RUNNING;

	_handle=CreateThread( 0,0,run,this,0,&_id );
	
//	_handle=CreateThread( 0,0,run,this,CREATE_SUSPENDED,&_id );
//	SetThreadPriority( _handle,THREAD_PRIORITY_ABOVE_NORMAL );
//	ResumeThread( _handle );
}

void BBThread::Wait(){
	if( _state==INIT ) return;

	WaitForSingleObject( _handle,INFINITE );
	CloseHandle( _handle );

	_state=INIT;
}

DWORD WINAPI BBThread::run( void *p ){
	BBThread *thread=(BBThread*)p;

	thread->Run__UNSAFE__();
	
	thread->_state=FINISHED;
	return 0;
}

#else

void BBThread::Start(){
	if( _state==RUNNING ) return;
	
	if( _state==FINISHED ) pthread_join( _handle,0 );

	_result=0;
		
	_state=RUNNING;
	
	pthread_create( &_handle,0,run,this );
}

void BBThread::Wait(){
	if( _state==INIT ) return;
	
	pthread_join( _handle,0 );
	
	_state=INIT;
}

void *BBThread::run( void *p ){
	BBThread *thread=(BBThread*)p;

	thread->Run__UNSAFE__();

	thread->_state=FINISHED;
	return 0;
}

#endif
class c_App;
class c_BabylonGame;
class c_BabylonState;
class c_GameDelegate;
class c_Sample;
class c_Bones;
class c_BabylonImporter;
class c_LoadedMeshData;
class c_Map;
class c_StringMap;
class c_Node;
class c_Map2;
class c_StringMap2;
class c_Node2;
class c_Bumpmap;
class c_Charting;
class c_Fog;
class c_HeightMap;
class c_Lights;
class c_MultiMat;
class c_Octree;
class c_Shadows;
class c_Test;
class c_Image;
class c_GraphicsContext;
class c_Frame;
class c_InputDevice;
class c_JoyState;
class c_BBGameEvent;
class c_Charting_ChartData;
class c_List;
class c_Node3;
class c_HeadNode;
class c_Enumerator;
class c_App : public Object{
	public:
	c_App();
	c_App* m_new();
	int p_OnCreate();
	int p_OnSuspend();
	int p_OnResume();
	virtual int p_OnUpdate();
	int p_OnLoading();
	virtual int p_OnRender();
	int p_OnClose();
	int p_OnBack();
	void mark();
};
class c_BabylonGame : public c_App{
	public:
	BABYLON.Engine* m_Engine;
	Canvas* m_Canvas3D;
	Canvas* m_Canvas2D;
	c_BabylonState* m__state;
	c_StringMap2* m__states;
	bool m_AutoResize;
	Float m_Width;
	Float m_Height;
	c_BabylonGame();
	c_BabylonState* p_State();
	void p_State2(c_BabylonState*);
	c_BabylonGame* m_new(c_BabylonState*,String,bool,int);
	int p_AddState(String,c_BabylonState*);
	int p_StateCount();
	void p_StartState(String,bool);
	int p_OnUpdate();
	int p_OnRender();
	void mark();
};
class c_BabylonState : public Object{
	public:
	c_BabylonGame* m_Game;
	bool m_HasBeenPreloaded;
	BABYLON.Scene* m_Scene;
	c_BabylonImporter* m_Importer;
	bool m_HasLoadUpdateRun;
	bool m_HasBeenCreated;
	bool m_HasLoadRenderRun;
	c_BabylonState();
	virtual int p_Preload();
	c_BabylonState* m_new();
	int p_LoadUpdate();
	virtual int p_Create();
	virtual int p_Update();
	virtual int p_LoadRender();
	virtual int p_Render();
	void mark();
};
extern c_App* bb_app__app;
class c_GameDelegate : public BBGameDelegate{
	public:
	gxtkGraphics* m__graphics;
	gxtkAudio* m__audio;
	c_InputDevice* m__input;
	c_GameDelegate();
	c_GameDelegate* m_new();
	void StartGame();
	void SuspendGame();
	void ResumeGame();
	void UpdateGame();
	void RenderGame();
	void KeyEvent(int,int);
	void MouseEvent(int,int,Float,Float);
	void TouchEvent(int,int,Float,Float);
	void MotionEvent(int,int,Float,Float,Float);
	void DiscardGraphics();
	void mark();
};
extern c_GameDelegate* bb_app__delegate;
extern BBGame* bb_app__game;
extern int bb_app__updateRate;
int bb_app_SetUpdateRate(int);
extern c_BabylonGame* bb_samples_BGame;
class c_Sample : public c_BabylonState{
	public:
	String m_Name;
	c_Sample();
	c_Sample* m_new();
	int p_Update();
	int p_LoadRender();
	int p_Render();
	void mark();
};
class c_Bones : public c_Sample{
	public:
	c_Bones();
	c_Bones* m_new();
	int p_Preload();
	int p_Create();
	void mark();
};
class c_BabylonImporter : public Object{
	public:
	c_BabylonState* m_State;
	c_StringMap* m_Meshes;
	int m_ToLoad;
	String m_DefaultPath;
	c_BabylonImporter();
	int p__loadedMesh(String,Array<BABYLON.Mesh* >,Array<BABYLON.ParticleSystem* >,Array<BABYLON.Skeleton* >);
	c_BabylonImporter* m_new(c_BabylonState*);
	c_BabylonImporter* m_new2();
	int p_LoadMesh(String,String);
	void mark();
};
class c_LoadedMeshData : public Object{
	public:
	Array<BABYLON.Mesh* > m_Meshes;
	Array<BABYLON.ParticleSystem* > m_ParticleSystems;
	Array<BABYLON.Skeleton* > m_Skeletons;
	c_LoadedMeshData();
	c_LoadedMeshData* m_new();
	void mark();
};
class c_Map : public Object{
	public:
	c_Node* m_root;
	c_Map();
	c_Map* m_new();
	virtual int p_Compare(String,String)=0;
	int p_RotateLeft(c_Node*);
	int p_RotateRight(c_Node*);
	int p_InsertFixup(c_Node*);
	bool p_Add(String,c_LoadedMeshData*);
	c_Node* p_FindNode(String);
	c_LoadedMeshData* p_Get(String);
	void mark();
};
class c_StringMap : public c_Map{
	public:
	c_StringMap();
	c_StringMap* m_new();
	int p_Compare(String,String);
	void mark();
};
class c_Node : public Object{
	public:
	String m_key;
	c_Node* m_right;
	c_Node* m_left;
	c_LoadedMeshData* m_value;
	int m_color;
	c_Node* m_parent;
	c_Node();
	c_Node* m_new(String,c_LoadedMeshData*,int,c_Node*);
	c_Node* m_new2();
	void mark();
};
class c_Map2 : public Object{
	public:
	c_Node2* m_root;
	c_Map2();
	c_Map2* m_new();
	virtual int p_Compare(String,String)=0;
	int p_RotateLeft2(c_Node2*);
	int p_RotateRight2(c_Node2*);
	int p_InsertFixup2(c_Node2*);
	bool p_Add2(String,c_BabylonState*);
	int p_Count();
	c_Node2* p_FindNode(String);
	c_BabylonState* p_Get(String);
	void mark();
};
class c_StringMap2 : public c_Map2{
	public:
	c_StringMap2();
	c_StringMap2* m_new();
	int p_Compare(String,String);
	void mark();
};
class c_Node2 : public Object{
	public:
	String m_key;
	c_Node2* m_right;
	c_Node2* m_left;
	c_BabylonState* m_value;
	int m_color;
	c_Node2* m_parent;
	c_Node2();
	c_Node2* m_new(String,c_BabylonState*,int,c_Node2*);
	c_Node2* m_new2();
	int p_Count2(int);
	void mark();
};
class c_Bumpmap : public c_Sample{
	public:
	BABYLON.Mesh* m_sphere;
	c_Bumpmap();
	c_Bumpmap* m_new();
	int p_Preload();
	int p_Create();
	int p_Update();
	void mark();
};
class c_Charting : public c_Sample{
	public:
	Float m_scale;
	c_List* m_operatingSystem_Series;
	c_List* m_browsers_Series;
	int m_playgroundSize;
	BABYLON.ShadowGenerator* m_shadowGenerator;
	c_Charting();
	c_Charting* m_new();
	int p_Preload();
	int p_createSeries(c_List*);
	int p_Create();
	void mark();
};
class c_Fog : public c_Sample{
	public:
	BABYLON.Mesh* m_sphere0;
	BABYLON.Mesh* m_sphere1;
	BABYLON.Mesh* m_sphere2;
	Float m_alpha;
	c_Fog();
	c_Fog* m_new();
	int p_Preload();
	int p_Create();
	int p_Update();
	void mark();
};
class c_HeightMap : public c_Sample{
	public:
	BABYLON.ArcRotateCamera* m_camera;
	c_HeightMap();
	c_HeightMap* m_new();
	int p_Preload();
	int p_Create();
	int p_Update();
	void mark();
};
class c_Lights : public c_Sample{
	public:
	BABYLON.PointLight* m_light0;
	BABYLON.PointLight* m_light1;
	BABYLON.PointLight* m_light2;
	BABYLON.Mesh* m_lightSphere0;
	BABYLON.Mesh* m_lightSphere1;
	BABYLON.Mesh* m_lightSphere2;
	Float m_alpha;
	c_Lights();
	c_Lights* m_new();
	int p_Preload();
	int p_Create();
	int p_Update();
	void mark();
};
class c_MultiMat : public c_Sample{
	public:
	c_MultiMat();
	c_MultiMat* m_new();
	int p_Preload();
	int p_Create();
	void mark();
};
class c_Octree : public c_Sample{
	public:
	c_Octree();
	c_Octree* m_new();
	int p_Preload();
	int p_Create();
	void mark();
};
class c_Shadows : public c_Sample{
	public:
	BABYLON.ArcRotateCamera* m_camera;
	BABYLON.Mesh* m_torus;
	BABYLON.Mesh* m_torus2;
	c_Shadows();
	c_Shadows* m_new();
	int p_Preload();
	int p_Create();
	int p_Update();
	void mark();
};
class c_Test : public c_Sample{
	public:
	BABYLON.StandardMaterial* m_material;
	BABYLON.StandardMaterial* m_material2;
	BABYLON.StandardMaterial* m_material3;
	BABYLON.Mesh* m_box;
	BABYLON.Mesh* m_cylinder;
	BABYLON.Mesh* m_torus;
	BABYLON.Mesh* m_sphere;
	BABYLON.Mesh* m_plane;
	BABYLON.DynamicTexture* m_planeTexture;
	BABYLON.SpriteManager* m_spriteManager;
	BABYLON.Layer* m_background0;
	BABYLON.Mesh* m_spaceDek;
	BABYLON.Mesh* m_spaceDek2;
	BABYLON.Mesh* m_spaceDek3;
	Float m_alpha;
	int m_frameCount;
	int m_reloop;
	int m_startDate;
	int m_count;
	c_Test();
	c_Test* m_new();
	int p_Preload();
	int p_Create();
	int p_Update();
	void mark();
};
extern int bb_samples_CurrentState;
int bb_samples_NextState();
int bbMain();
extern gxtkGraphics* bb_graphics_device;
int bb_graphics_SetGraphicsDevice(gxtkGraphics*);
class c_Image : public Object{
	public:
	gxtkSurface* m_surface;
	int m_width;
	int m_height;
	Array<c_Frame* > m_frames;
	int m_flags;
	Float m_tx;
	Float m_ty;
	c_Image* m_source;
	c_Image();
	static int m_DefaultFlags;
	c_Image* m_new();
	int p_SetHandle(Float,Float);
	int p_ApplyFlags(int);
	c_Image* p_Init(gxtkSurface*,int,int);
	c_Image* p_Grab(int,int,int,int,int,int,c_Image*);
	c_Image* p_GrabImage(int,int,int,int,int,int);
	int p_Width();
	int p_Height();
	int p_Frames();
	void mark();
};
class c_GraphicsContext : public Object{
	public:
	c_Image* m_defaultFont;
	c_Image* m_font;
	int m_firstChar;
	int m_matrixSp;
	Float m_ix;
	Float m_iy;
	Float m_jx;
	Float m_jy;
	Float m_tx;
	Float m_ty;
	int m_tformed;
	int m_matDirty;
	Float m_color_r;
	Float m_color_g;
	Float m_color_b;
	Float m_alpha;
	int m_blend;
	Float m_scissor_x;
	Float m_scissor_y;
	Float m_scissor_width;
	Float m_scissor_height;
	Array<Float > m_matrixStack;
	c_GraphicsContext();
	c_GraphicsContext* m_new();
	int p_Validate();
	void mark();
};
extern c_GraphicsContext* bb_graphics_context;
String bb_data_FixDataPath(String);
class c_Frame : public Object{
	public:
	int m_x;
	int m_y;
	c_Frame();
	c_Frame* m_new(int,int);
	c_Frame* m_new2();
	void mark();
};
c_Image* bb_graphics_LoadImage(String,int,int);
c_Image* bb_graphics_LoadImage2(String,int,int,int,int);
int bb_graphics_SetFont(c_Image*,int);
extern gxtkAudio* bb_audio_device;
int bb_audio_SetAudioDevice(gxtkAudio*);
class c_InputDevice : public Object{
	public:
	Array<c_JoyState* > m__joyStates;
	Array<bool > m__keyDown;
	int m__keyHitPut;
	Array<int > m__keyHitQueue;
	Array<int > m__keyHit;
	int m__charGet;
	int m__charPut;
	Array<int > m__charQueue;
	Float m__mouseX;
	Float m__mouseY;
	Array<Float > m__touchX;
	Array<Float > m__touchY;
	Float m__accelX;
	Float m__accelY;
	Float m__accelZ;
	c_InputDevice();
	c_InputDevice* m_new();
	void p_PutKeyHit(int);
	void p_BeginUpdate();
	void p_EndUpdate();
	void p_KeyEvent(int,int);
	void p_MouseEvent(int,int,Float,Float);
	void p_TouchEvent(int,int,Float,Float);
	void p_MotionEvent(int,int,Float,Float,Float);
	int p_KeyHit(int);
	void mark();
};
class c_JoyState : public Object{
	public:
	Array<Float > m_joyx;
	Array<Float > m_joyy;
	Array<Float > m_joyz;
	Array<bool > m_buttons;
	c_JoyState();
	c_JoyState* m_new();
	void mark();
};
extern c_InputDevice* bb_input_device;
int bb_input_SetInputDevice(c_InputDevice*);
extern gxtkGraphics* bb_graphics_renderDevice;
int bb_graphics_SetMatrix(Float,Float,Float,Float,Float,Float);
int bb_graphics_SetMatrix2(Array<Float >);
int bb_graphics_SetColor(Float,Float,Float);
int bb_graphics_SetAlpha(Float);
int bb_graphics_SetBlend(int);
int bb_graphics_DeviceWidth();
int bb_graphics_DeviceHeight();
int bb_graphics_SetScissor(Float,Float,Float,Float);
int bb_graphics_BeginRender();
int bb_graphics_EndRender();
class c_BBGameEvent : public Object{
	public:
	c_BBGameEvent();
	void mark();
};
int bb_app_EndApp();
int bb_input_KeyHit(int);
int bb_graphics_Cls(Float,Float,Float);
int bb_graphics_DrawImage(c_Image*,Float,Float,int);
int bb_graphics_PushMatrix();
int bb_graphics_Transform(Float,Float,Float,Float,Float,Float);
int bb_graphics_Transform2(Array<Float >);
int bb_graphics_Translate(Float,Float);
int bb_graphics_Rotate(Float);
int bb_graphics_Scale(Float,Float);
int bb_graphics_PopMatrix();
int bb_graphics_DrawImage2(c_Image*,Float,Float,Float,Float,Float,int);
int bb_graphics_DrawText(String,Float,Float,Float,Float);
class c_Charting_ChartData : public Object{
	public:
	String m_Label;
	int m_Value;
	BABYLON.Color3* m_Color;
	c_Charting_ChartData();
	c_Charting_ChartData* m_new(String,int,BABYLON.Color3*);
	c_Charting_ChartData* m_new2();
	void mark();
};
class c_List : public Object{
	public:
	c_Node3* m__head;
	c_List();
	c_List* m_new();
	c_Node3* p_AddLast(c_Charting_ChartData*);
	c_List* m_new2(Array<c_Charting_ChartData* >);
	int p_Count();
	c_Enumerator* p_ObjectEnumerator();
	void mark();
};
class c_Node3 : public Object{
	public:
	c_Node3* m__succ;
	c_Node3* m__pred;
	c_Charting_ChartData* m__data;
	c_Node3();
	c_Node3* m_new(c_Node3*,c_Node3*,c_Charting_ChartData*);
	c_Node3* m_new2();
	void mark();
};
class c_HeadNode : public c_Node3{
	public:
	c_HeadNode();
	c_HeadNode* m_new();
	void mark();
};
class c_Enumerator : public Object{
	public:
	c_List* m__list;
	c_Node3* m__curr;
	c_Enumerator();
	c_Enumerator* m_new(c_List*);
	c_Enumerator* m_new2();
	bool p_HasNext();
	c_Charting_ChartData* p_NextObject();
	void mark();
};
extern int bb_random_Seed;
Float bb_random_Rnd();
Float bb_random_Rnd2(Float,Float);
Float bb_random_Rnd3(Float);
int bb_app_Millisecs();
c_App::c_App(){
}
c_App* c_App::m_new(){
	if((bb_app__app)!=0){
		bbError(String(L"App has already been created",28));
	}
	gc_assign(bb_app__app,this);
	gc_assign(bb_app__delegate,(new c_GameDelegate)->m_new());
	bb_app__game->SetDelegate(bb_app__delegate);
	return this;
}
int c_App::p_OnCreate(){
	return 0;
}
int c_App::p_OnSuspend(){
	return 0;
}
int c_App::p_OnResume(){
	return 0;
}
int c_App::p_OnUpdate(){
	return 0;
}
int c_App::p_OnLoading(){
	return 0;
}
int c_App::p_OnRender(){
	return 0;
}
int c_App::p_OnClose(){
	bb_app_EndApp();
	return 0;
}
int c_App::p_OnBack(){
	p_OnClose();
	return 0;
}
void c_App::mark(){
	Object::mark();
}
c_BabylonGame::c_BabylonGame(){
	m_Engine=0;
	m_Canvas3D=0;
	m_Canvas2D=0;
	m__state=0;
	m__states=(new c_StringMap2)->m_new();
	m_AutoResize=true;
	m_Width=FLOAT(.0);
	m_Height=FLOAT(.0);
}
c_BabylonState* c_BabylonGame::p_State(){
	return m__state;
}
void c_BabylonGame::p_State2(c_BabylonState* t_value){
	gc_assign(m__state,t_value);
	gc_assign(m__state->m_Game,this);
	if(!m__state->m_HasBeenPreloaded){
		gc_assign(m__state->m_Scene,new BABYLON.Scene(m_Engine));
		m__state->p_Preload();
		m__state->m_HasBeenPreloaded=true;
	}
}
c_BabylonGame* c_BabylonGame::m_new(c_BabylonState* t_state,String t_canvasName,bool t_antialias,int t_updateRate){
	c_App::m_new();
	if(!BABYLON.Engine::isSupported()){
		bbError(String(L"Babylon Engine Not Supported!",29));
	}
	gc_assign(m_Canvas3D,document.getElementById(t_canvasName));
	gc_assign(m_Canvas2D,document.getElementById(String(L"GameCanvas",10)));
	gc_assign(m_Engine,new BABYLON.Engine(m_Canvas3D,t_antialias));
	if((t_state)!=0){
		p_State2(t_state);
	}
	bb_app_SetUpdateRate(t_updateRate);
	return this;
}
int c_BabylonGame::p_AddState(String t_key,c_BabylonState* t_state){
	m__states->p_Add2(t_key,t_state);
	return 0;
}
int c_BabylonGame::p_StateCount(){
	return m__states->p_Count();
}
void c_BabylonGame::p_StartState(String t_value,bool t_clearScene){
	p_State2(m__states->p_Get(t_value));
}
int c_BabylonGame::p_OnUpdate(){
	if(!((m__state)!=0)){
		return 0;
	}
	if(!m__state->m_HasLoadUpdateRun || m__state->m_Importer->m_ToLoad>0){
		m__state->m_HasLoadUpdateRun=true;
		m__state->p_LoadUpdate();
		return 0;
	}
	if(!m__state->m_HasBeenCreated){
		m__state->p_Create();
		m__state->m_HasBeenCreated=true;
	}
	m__state->p_Update();
	return 0;
}
int c_BabylonGame::p_OnRender(){
	BABYLON.Tools::_MeasureFps();
	if(!((m__state)!=0)){
		return 0;
	}
	if(!m__state->m_HasLoadRenderRun || m__state->m_Importer->m_ToLoad>0){
		m__state->m_HasLoadRenderRun=true;
		m__state->p_LoadRender();
		return 0;
	}
	if(!m__state->m_HasBeenCreated){
		return 0;
	}
	if(m_AutoResize && (Float(m_Canvas2D->width)!=m_Width || Float(m_Canvas2D->height)!=m_Height)){
		m_Width=Float(m_Canvas2D->width);
		m_Height=Float(m_Canvas2D->height);
		m_Canvas3D->width=int(m_Width);
		m_Canvas3D->height=int(m_Height);
		m_Engine->resize();
	}
	if((m__state->m_Scene)!=0){
		m__state->m_Scene->render();
	}
	m_Canvas2D->getContext(String(L"2d",2))->clearRect(0,0,m_Canvas2D->width,m_Canvas2D->height);
	m__state->p_Render();
	return 0;
}
void c_BabylonGame::mark(){
	c_App::mark();
	gc_mark_q(m_Engine);
	gc_mark_q(m_Canvas3D);
	gc_mark_q(m_Canvas2D);
	gc_mark_q(m__state);
	gc_mark_q(m__states);
}
c_BabylonState::c_BabylonState(){
	m_Game=0;
	m_HasBeenPreloaded=false;
	m_Scene=0;
	m_Importer=0;
	m_HasLoadUpdateRun=false;
	m_HasBeenCreated=false;
	m_HasLoadRenderRun=false;
}
int c_BabylonState::p_Preload(){
	return 0;
}
c_BabylonState* c_BabylonState::m_new(){
	gc_assign(m_Importer,(new c_BabylonImporter)->m_new(this));
	return this;
}
int c_BabylonState::p_LoadUpdate(){
	return 0;
}
int c_BabylonState::p_Create(){
	return 0;
}
int c_BabylonState::p_Update(){
	return 0;
}
int c_BabylonState::p_LoadRender(){
	return 0;
}
int c_BabylonState::p_Render(){
	return 0;
}
void c_BabylonState::mark(){
	Object::mark();
	gc_mark_q(m_Game);
	gc_mark_q(m_Scene);
	gc_mark_q(m_Importer);
}
c_App* bb_app__app;
c_GameDelegate::c_GameDelegate(){
	m__graphics=0;
	m__audio=0;
	m__input=0;
}
c_GameDelegate* c_GameDelegate::m_new(){
	return this;
}
void c_GameDelegate::StartGame(){
	gc_assign(m__graphics,(new gxtkGraphics));
	bb_graphics_SetGraphicsDevice(m__graphics);
	bb_graphics_SetFont(0,32);
	gc_assign(m__audio,(new gxtkAudio));
	bb_audio_SetAudioDevice(m__audio);
	gc_assign(m__input,(new c_InputDevice)->m_new());
	bb_input_SetInputDevice(m__input);
	bb_app__app->p_OnCreate();
}
void c_GameDelegate::SuspendGame(){
	bb_app__app->p_OnSuspend();
	m__audio->Suspend();
}
void c_GameDelegate::ResumeGame(){
	m__audio->Resume();
	bb_app__app->p_OnResume();
}
void c_GameDelegate::UpdateGame(){
	m__input->p_BeginUpdate();
	bb_app__app->p_OnUpdate();
	m__input->p_EndUpdate();
}
void c_GameDelegate::RenderGame(){
	int t_mode=m__graphics->BeginRender();
	if((t_mode)!=0){
		bb_graphics_BeginRender();
	}
	if(t_mode==2){
		bb_app__app->p_OnLoading();
	}else{
		bb_app__app->p_OnRender();
	}
	if((t_mode)!=0){
		bb_graphics_EndRender();
	}
	m__graphics->EndRender();
}
void c_GameDelegate::KeyEvent(int t_event,int t_data){
	m__input->p_KeyEvent(t_event,t_data);
	if(t_event!=1){
		return;
	}
	int t_1=t_data;
	if(t_1==432){
		bb_app__app->p_OnClose();
	}else{
		if(t_1==416){
			bb_app__app->p_OnBack();
		}
	}
}
void c_GameDelegate::MouseEvent(int t_event,int t_data,Float t_x,Float t_y){
	m__input->p_MouseEvent(t_event,t_data,t_x,t_y);
}
void c_GameDelegate::TouchEvent(int t_event,int t_data,Float t_x,Float t_y){
	m__input->p_TouchEvent(t_event,t_data,t_x,t_y);
}
void c_GameDelegate::MotionEvent(int t_event,int t_data,Float t_x,Float t_y,Float t_z){
	m__input->p_MotionEvent(t_event,t_data,t_x,t_y,t_z);
}
void c_GameDelegate::DiscardGraphics(){
	m__graphics->DiscardGraphics();
}
void c_GameDelegate::mark(){
	BBGameDelegate::mark();
	gc_mark_q(m__graphics);
	gc_mark_q(m__audio);
	gc_mark_q(m__input);
}
c_GameDelegate* bb_app__delegate;
BBGame* bb_app__game;
int bb_app__updateRate;
int bb_app_SetUpdateRate(int t_hertz){
	bb_app__updateRate=t_hertz;
	bb_app__game->SetUpdateRate(t_hertz);
	return 0;
}
c_BabylonGame* bb_samples_BGame;
c_Sample::c_Sample(){
	m_Name=String();
}
c_Sample* c_Sample::m_new(){
	c_BabylonState::m_new();
	return this;
}
int c_Sample::p_Update(){
	if((bb_input_KeyHit(32))!=0){
		bb_samples_NextState();
	}
	return 0;
}
int c_Sample::p_LoadRender(){
	bb_graphics_Cls(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0));
	bb_graphics_DrawText(String(L"Loading",7),FLOAT(400.0),FLOAT(275.0),FLOAT(0.5),FLOAT(0.5));
	bb_graphics_DrawText(m_Name,FLOAT(400.0),FLOAT(300.0),FLOAT(0.5),FLOAT(0.5));
	bb_graphics_DrawText(String(L"State ",6)+String(bb_samples_CurrentState+1)+String(L" of ",4)+String(bb_samples_BGame->p_StateCount()),FLOAT(400.0),FLOAT(325.0),FLOAT(0.5),FLOAT(0.5));
	return 0;
}
int c_Sample::p_Render(){
	bb_graphics_DrawText(m_Name,FLOAT(0.0),FLOAT(0.0),FLOAT(0.0),FLOAT(0.0));
	bb_graphics_DrawText(String(L"State ",6)+String(bb_samples_CurrentState+1)+String(L" of ",4)+String(bb_samples_BGame->p_StateCount()),FLOAT(0.0),FLOAT(16.0),FLOAT(0.0),FLOAT(0.0));
	bb_graphics_DrawText(String(L"Press space to cycle",20),FLOAT(0.0),FLOAT(32.0),FLOAT(0.0),FLOAT(0.0));
	return 0;
}
void c_Sample::mark(){
	c_BabylonState::mark();
}
c_Bones::c_Bones(){
}
c_Bones* c_Bones::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Bones::p_Preload(){
	m_Name=String(L"Bones",5);
	m_Importer->p_LoadMesh(String(L"Rabbit",6),String(L"Scenes/Rabbit/Rabbit.babylon",28));
	m_Importer->p_LoadMesh(String(L"him",3),String(L"Scenes/Dude/Dude.babylon",24));
	return 0;
}
int c_Bones::p_Create(){
	BABYLON.DirectionalLight* t_light=new BABYLON.DirectionalLight(String(L"dir01",5),new BABYLON.Vector3(FLOAT(0.0),FLOAT(-0.5),FLOAT(-1.0)),m_Scene);
	BABYLON.ArcRotateCamera* t_camera=new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),new BABYLON.Vector3(FLOAT(0.0),FLOAT(30.0),FLOAT(0.0)),m_Scene);
	t_camera->setPosition(new BABYLON.Vector3(FLOAT(20.0),FLOAT(70.0),FLOAT(120.0)));
	gc_assign(t_light->position,new BABYLON.Vector3(FLOAT(20.0),FLOAT(150.0),FLOAT(70.0)));
	gc_assign(m_Scene->ambientColor,new BABYLON.Color3(FLOAT(0.3),FLOAT(0.3),FLOAT(0.3)));
	BABYLON.Mesh* t_ground=BABYLON.Mesh::CreateGround(String(L"ground",6),FLOAT(1000.0),FLOAT(1000.0),1,m_Scene,false);
	BABYLON.StandardMaterial* t_groundMaterial=new BABYLON.StandardMaterial(String(L"ground",6),m_Scene);
	gc_assign(t_groundMaterial->diffuseColor,new BABYLON.Color3(FLOAT(0.2),FLOAT(0.2),FLOAT(0.2)));
	gc_assign(t_groundMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_ground->material,(t_groundMaterial));
	t_ground->receiveShadows=true;
	BABYLON.ShadowGenerator* t_shadowGenerator=new BABYLON.ShadowGenerator(FLOAT(1024.0),(t_light));
	BABYLON.Mesh* t_rabbit=m_Importer->m_Meshes->p_Get(String(L"Rabbit",6))->m_Meshes[1];
	gc_assign(t_rabbit->scaling,new BABYLON.Vector3(FLOAT(0.4),FLOAT(0.4),FLOAT(0.4)));
	t_shadowGenerator->getShadowMap()->renderList.push(t_rabbit);
	BABYLON.Mesh* t_rabbit2=t_rabbit->clone(String(L"rabbit2",7),0,false);
	BABYLON.Mesh* t_rabbit3=t_rabbit->clone(String(L"rabbit2",7),0,false);
	t_shadowGenerator->getShadowMap()->renderList.push(t_rabbit2);
	t_shadowGenerator->getShadowMap()->renderList.push(t_rabbit3);
	gc_assign(t_rabbit2->position,new BABYLON.Vector3(FLOAT(-50.0),FLOAT(0.0),FLOAT(-20.0)));
	gc_assign(t_rabbit2->skeleton,t_rabbit->skeleton->clone(String(L"clonedSkeleton",14)));
	gc_assign(t_rabbit3->position,new BABYLON.Vector3(FLOAT(50.0),FLOAT(0.0),FLOAT(-20.0)));
	gc_assign(t_rabbit3->skeleton,t_rabbit->skeleton->clone(String(L"clonedSkeleton2",15)));
	m_Scene->beginAnimation((t_rabbit->skeleton),0,100,true,FLOAT(0.8),0);
	m_Scene->beginAnimation((t_rabbit2->skeleton),73,100,true,FLOAT(0.8),0);
	m_Scene->beginAnimation((t_rabbit3->skeleton),0,72,true,FLOAT(0.8),0);
	BABYLON.Mesh* t_dude=m_Importer->m_Meshes->p_Get(String(L"him",3))->m_Meshes[0];
	for(int t_index=0;t_index<=m_Importer->m_Meshes->p_Get(String(L"him",3))->m_Meshes.Length()-1;t_index=t_index+1){
	}
	t_dude->rotation->y=FLOAT(3.14159265);
	gc_assign(t_dude->position,new BABYLON.Vector3(FLOAT(0.0),FLOAT(0.0),FLOAT(-80.0)));
	m_Scene->beginAnimation((m_Importer->m_Meshes->p_Get(String(L"him",3))->m_Skeletons[0]),0,100,true,FLOAT(1.0),0);
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
void c_Bones::mark(){
	c_Sample::mark();
}
c_BabylonImporter::c_BabylonImporter(){
	m_State=0;
	m_Meshes=(new c_StringMap)->m_new();
	m_ToLoad=0;
	m_DefaultPath=String(L"data/",5);
}
int c_BabylonImporter::p__loadedMesh(String t_name,Array<BABYLON.Mesh* > t_newMeshes,Array<BABYLON.ParticleSystem* > t_particleSystems,Array<BABYLON.Skeleton* > t_skeletons){
	if(t_name==String()){
		return 0;
	}
	c_LoadedMeshData* t_data=(new c_LoadedMeshData)->m_new();
	gc_assign(t_data->m_Meshes,t_newMeshes);
	gc_assign(t_data->m_ParticleSystems,t_particleSystems);
	gc_assign(t_data->m_Skeletons,t_skeletons);
	m_Meshes->p_Add(t_name,t_data);
	m_ToLoad-=1;
	return 0;
}
c_BabylonImporter* c_BabylonImporter::m_new(c_BabylonState* t_state){
	gc_assign(m_State,t_state);
	p__loadedMesh(String(),Array<BABYLON.Mesh* >(0),Array<BABYLON.ParticleSystem* >(0),Array<BABYLON.Skeleton* >(0));
	return this;
}
c_BabylonImporter* c_BabylonImporter::m_new2(){
	return this;
}
int c_BabylonImporter::p_LoadMesh(String t_name,String t_file){
	m_ToLoad+=1;
	String t_path=String(L"/",1);
	Array<String > t_fileparts=t_file.Split(String(L"/",1));
	if(t_fileparts.Length()>0){
		t_path=String(L"/",1).Join(t_fileparts.Slice(0,t_fileparts.Length()-1))+String(L"/",1);
		t_file=t_fileparts[t_fileparts.Length()-1];
	}
	BabylonMonkey_LoadMesh(t_name,m_DefaultPath+t_path,t_file,m_State->m_Scene,this);
	return 0;
}
void c_BabylonImporter::mark(){
	Object::mark();
	gc_mark_q(m_State);
	gc_mark_q(m_Meshes);
}
c_LoadedMeshData::c_LoadedMeshData(){
	m_Meshes=Array<BABYLON.Mesh* >();
	m_ParticleSystems=Array<BABYLON.ParticleSystem* >();
	m_Skeletons=Array<BABYLON.Skeleton* >();
}
c_LoadedMeshData* c_LoadedMeshData::m_new(){
	return this;
}
void c_LoadedMeshData::mark(){
	Object::mark();
	gc_mark_q(m_Meshes);
	gc_mark_q(m_ParticleSystems);
	gc_mark_q(m_Skeletons);
}
c_Map::c_Map(){
	m_root=0;
}
c_Map* c_Map::m_new(){
	return this;
}
int c_Map::p_RotateLeft(c_Node* t_node){
	c_Node* t_child=t_node->m_right;
	gc_assign(t_node->m_right,t_child->m_left);
	if((t_child->m_left)!=0){
		gc_assign(t_child->m_left->m_parent,t_node);
	}
	gc_assign(t_child->m_parent,t_node->m_parent);
	if((t_node->m_parent)!=0){
		if(t_node==t_node->m_parent->m_left){
			gc_assign(t_node->m_parent->m_left,t_child);
		}else{
			gc_assign(t_node->m_parent->m_right,t_child);
		}
	}else{
		gc_assign(m_root,t_child);
	}
	gc_assign(t_child->m_left,t_node);
	gc_assign(t_node->m_parent,t_child);
	return 0;
}
int c_Map::p_RotateRight(c_Node* t_node){
	c_Node* t_child=t_node->m_left;
	gc_assign(t_node->m_left,t_child->m_right);
	if((t_child->m_right)!=0){
		gc_assign(t_child->m_right->m_parent,t_node);
	}
	gc_assign(t_child->m_parent,t_node->m_parent);
	if((t_node->m_parent)!=0){
		if(t_node==t_node->m_parent->m_right){
			gc_assign(t_node->m_parent->m_right,t_child);
		}else{
			gc_assign(t_node->m_parent->m_left,t_child);
		}
	}else{
		gc_assign(m_root,t_child);
	}
	gc_assign(t_child->m_right,t_node);
	gc_assign(t_node->m_parent,t_child);
	return 0;
}
int c_Map::p_InsertFixup(c_Node* t_node){
	while(((t_node->m_parent)!=0) && t_node->m_parent->m_color==-1 && ((t_node->m_parent->m_parent)!=0)){
		if(t_node->m_parent==t_node->m_parent->m_parent->m_left){
			c_Node* t_uncle=t_node->m_parent->m_parent->m_right;
			if(((t_uncle)!=0) && t_uncle->m_color==-1){
				t_node->m_parent->m_color=1;
				t_uncle->m_color=1;
				t_uncle->m_parent->m_color=-1;
				t_node=t_uncle->m_parent;
			}else{
				if(t_node==t_node->m_parent->m_right){
					t_node=t_node->m_parent;
					p_RotateLeft(t_node);
				}
				t_node->m_parent->m_color=1;
				t_node->m_parent->m_parent->m_color=-1;
				p_RotateRight(t_node->m_parent->m_parent);
			}
		}else{
			c_Node* t_uncle2=t_node->m_parent->m_parent->m_left;
			if(((t_uncle2)!=0) && t_uncle2->m_color==-1){
				t_node->m_parent->m_color=1;
				t_uncle2->m_color=1;
				t_uncle2->m_parent->m_color=-1;
				t_node=t_uncle2->m_parent;
			}else{
				if(t_node==t_node->m_parent->m_left){
					t_node=t_node->m_parent;
					p_RotateRight(t_node);
				}
				t_node->m_parent->m_color=1;
				t_node->m_parent->m_parent->m_color=-1;
				p_RotateLeft(t_node->m_parent->m_parent);
			}
		}
	}
	m_root->m_color=1;
	return 0;
}
bool c_Map::p_Add(String t_key,c_LoadedMeshData* t_value){
	c_Node* t_node=m_root;
	c_Node* t_parent=0;
	int t_cmp=0;
	while((t_node)!=0){
		t_parent=t_node;
		t_cmp=p_Compare(t_key,t_node->m_key);
		if(t_cmp>0){
			t_node=t_node->m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node->m_left;
			}else{
				return false;
			}
		}
	}
	t_node=(new c_Node)->m_new(t_key,t_value,-1,t_parent);
	if((t_parent)!=0){
		if(t_cmp>0){
			gc_assign(t_parent->m_right,t_node);
		}else{
			gc_assign(t_parent->m_left,t_node);
		}
		p_InsertFixup(t_node);
	}else{
		gc_assign(m_root,t_node);
	}
	return true;
}
c_Node* c_Map::p_FindNode(String t_key){
	c_Node* t_node=m_root;
	while((t_node)!=0){
		int t_cmp=p_Compare(t_key,t_node->m_key);
		if(t_cmp>0){
			t_node=t_node->m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node->m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_LoadedMeshData* c_Map::p_Get(String t_key){
	c_Node* t_node=p_FindNode(t_key);
	if((t_node)!=0){
		return t_node->m_value;
	}
	return 0;
}
void c_Map::mark(){
	Object::mark();
	gc_mark_q(m_root);
}
c_StringMap::c_StringMap(){
}
c_StringMap* c_StringMap::m_new(){
	c_Map::m_new();
	return this;
}
int c_StringMap::p_Compare(String t_lhs,String t_rhs){
	return t_lhs.Compare(t_rhs);
}
void c_StringMap::mark(){
	c_Map::mark();
}
c_Node::c_Node(){
	m_key=String();
	m_right=0;
	m_left=0;
	m_value=0;
	m_color=0;
	m_parent=0;
}
c_Node* c_Node::m_new(String t_key,c_LoadedMeshData* t_value,int t_color,c_Node* t_parent){
	this->m_key=t_key;
	gc_assign(this->m_value,t_value);
	this->m_color=t_color;
	gc_assign(this->m_parent,t_parent);
	return this;
}
c_Node* c_Node::m_new2(){
	return this;
}
void c_Node::mark(){
	Object::mark();
	gc_mark_q(m_right);
	gc_mark_q(m_left);
	gc_mark_q(m_value);
	gc_mark_q(m_parent);
}
c_Map2::c_Map2(){
	m_root=0;
}
c_Map2* c_Map2::m_new(){
	return this;
}
int c_Map2::p_RotateLeft2(c_Node2* t_node){
	c_Node2* t_child=t_node->m_right;
	gc_assign(t_node->m_right,t_child->m_left);
	if((t_child->m_left)!=0){
		gc_assign(t_child->m_left->m_parent,t_node);
	}
	gc_assign(t_child->m_parent,t_node->m_parent);
	if((t_node->m_parent)!=0){
		if(t_node==t_node->m_parent->m_left){
			gc_assign(t_node->m_parent->m_left,t_child);
		}else{
			gc_assign(t_node->m_parent->m_right,t_child);
		}
	}else{
		gc_assign(m_root,t_child);
	}
	gc_assign(t_child->m_left,t_node);
	gc_assign(t_node->m_parent,t_child);
	return 0;
}
int c_Map2::p_RotateRight2(c_Node2* t_node){
	c_Node2* t_child=t_node->m_left;
	gc_assign(t_node->m_left,t_child->m_right);
	if((t_child->m_right)!=0){
		gc_assign(t_child->m_right->m_parent,t_node);
	}
	gc_assign(t_child->m_parent,t_node->m_parent);
	if((t_node->m_parent)!=0){
		if(t_node==t_node->m_parent->m_right){
			gc_assign(t_node->m_parent->m_right,t_child);
		}else{
			gc_assign(t_node->m_parent->m_left,t_child);
		}
	}else{
		gc_assign(m_root,t_child);
	}
	gc_assign(t_child->m_right,t_node);
	gc_assign(t_node->m_parent,t_child);
	return 0;
}
int c_Map2::p_InsertFixup2(c_Node2* t_node){
	while(((t_node->m_parent)!=0) && t_node->m_parent->m_color==-1 && ((t_node->m_parent->m_parent)!=0)){
		if(t_node->m_parent==t_node->m_parent->m_parent->m_left){
			c_Node2* t_uncle=t_node->m_parent->m_parent->m_right;
			if(((t_uncle)!=0) && t_uncle->m_color==-1){
				t_node->m_parent->m_color=1;
				t_uncle->m_color=1;
				t_uncle->m_parent->m_color=-1;
				t_node=t_uncle->m_parent;
			}else{
				if(t_node==t_node->m_parent->m_right){
					t_node=t_node->m_parent;
					p_RotateLeft2(t_node);
				}
				t_node->m_parent->m_color=1;
				t_node->m_parent->m_parent->m_color=-1;
				p_RotateRight2(t_node->m_parent->m_parent);
			}
		}else{
			c_Node2* t_uncle2=t_node->m_parent->m_parent->m_left;
			if(((t_uncle2)!=0) && t_uncle2->m_color==-1){
				t_node->m_parent->m_color=1;
				t_uncle2->m_color=1;
				t_uncle2->m_parent->m_color=-1;
				t_node=t_uncle2->m_parent;
			}else{
				if(t_node==t_node->m_parent->m_left){
					t_node=t_node->m_parent;
					p_RotateRight2(t_node);
				}
				t_node->m_parent->m_color=1;
				t_node->m_parent->m_parent->m_color=-1;
				p_RotateLeft2(t_node->m_parent->m_parent);
			}
		}
	}
	m_root->m_color=1;
	return 0;
}
bool c_Map2::p_Add2(String t_key,c_BabylonState* t_value){
	c_Node2* t_node=m_root;
	c_Node2* t_parent=0;
	int t_cmp=0;
	while((t_node)!=0){
		t_parent=t_node;
		t_cmp=p_Compare(t_key,t_node->m_key);
		if(t_cmp>0){
			t_node=t_node->m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node->m_left;
			}else{
				return false;
			}
		}
	}
	t_node=(new c_Node2)->m_new(t_key,t_value,-1,t_parent);
	if((t_parent)!=0){
		if(t_cmp>0){
			gc_assign(t_parent->m_right,t_node);
		}else{
			gc_assign(t_parent->m_left,t_node);
		}
		p_InsertFixup2(t_node);
	}else{
		gc_assign(m_root,t_node);
	}
	return true;
}
int c_Map2::p_Count(){
	if((m_root)!=0){
		return m_root->p_Count2(0);
	}
	return 0;
}
c_Node2* c_Map2::p_FindNode(String t_key){
	c_Node2* t_node=m_root;
	while((t_node)!=0){
		int t_cmp=p_Compare(t_key,t_node->m_key);
		if(t_cmp>0){
			t_node=t_node->m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node->m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_BabylonState* c_Map2::p_Get(String t_key){
	c_Node2* t_node=p_FindNode(t_key);
	if((t_node)!=0){
		return t_node->m_value;
	}
	return 0;
}
void c_Map2::mark(){
	Object::mark();
	gc_mark_q(m_root);
}
c_StringMap2::c_StringMap2(){
}
c_StringMap2* c_StringMap2::m_new(){
	c_Map2::m_new();
	return this;
}
int c_StringMap2::p_Compare(String t_lhs,String t_rhs){
	return t_lhs.Compare(t_rhs);
}
void c_StringMap2::mark(){
	c_Map2::mark();
}
c_Node2::c_Node2(){
	m_key=String();
	m_right=0;
	m_left=0;
	m_value=0;
	m_color=0;
	m_parent=0;
}
c_Node2* c_Node2::m_new(String t_key,c_BabylonState* t_value,int t_color,c_Node2* t_parent){
	this->m_key=t_key;
	gc_assign(this->m_value,t_value);
	this->m_color=t_color;
	gc_assign(this->m_parent,t_parent);
	return this;
}
c_Node2* c_Node2::m_new2(){
	return this;
}
int c_Node2::p_Count2(int t_n){
	if((m_left)!=0){
		t_n=m_left->p_Count2(t_n);
	}
	if((m_right)!=0){
		t_n=m_right->p_Count2(t_n);
	}
	return t_n+1;
}
void c_Node2::mark(){
	Object::mark();
	gc_mark_q(m_right);
	gc_mark_q(m_left);
	gc_mark_q(m_value);
	gc_mark_q(m_parent);
}
c_Bumpmap::c_Bumpmap(){
	m_sphere=0;
}
c_Bumpmap* c_Bumpmap::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Bumpmap::p_Preload(){
	m_Name=String(L"Bumpmap",7);
	return 0;
}
int c_Bumpmap::p_Create(){
	BABYLON.ArcRotateCamera* t_camera=new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene);
	BABYLON.PointLight* t_light=new BABYLON.PointLight(String(L"Omni",4),new BABYLON.Vector3(FLOAT(20.0),FLOAT(100.0),FLOAT(2.0)),m_Scene);
	gc_assign(m_sphere,BABYLON.Mesh::CreateSphere(String(L"Sphere",6),16,FLOAT(3.0),m_Scene));
	BABYLON.StandardMaterial* t_material=new BABYLON.StandardMaterial(String(L"kosh",4),m_Scene);
	gc_assign(t_material->bumpTexture,new BABYLON.Texture(String(L"data/normalMap.jpg",18),m_Scene,false,false));
	gc_assign(t_material->diffuseColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(m_sphere->material,(t_material));
	t_camera->setPosition(new BABYLON.Vector3(FLOAT(-5.0),FLOAT(5.0),FLOAT(0.0)));
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
int c_Bumpmap::p_Update(){
	c_Sample::p_Update();
	m_sphere->rotation->y+=FLOAT(0.02);
	return 0;
}
void c_Bumpmap::mark(){
	c_Sample::mark();
	gc_mark_q(m_sphere);
}
c_Charting::c_Charting(){
	m_scale=FLOAT(.0);
	m_operatingSystem_Series=(new c_List)->m_new();
	m_browsers_Series=(new c_List)->m_new();
	m_playgroundSize=0;
	m_shadowGenerator=0;
}
c_Charting* c_Charting::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Charting::p_Preload(){
	m_Name=String(L"Charting (I have no idea why this test fails so badly, will look into it later - E)",83);
	return 0;
}
int c_Charting::p_createSeries(c_List* t_series){
	Float t_margin=FLOAT(2.0);
	Float t_offset=Float(m_playgroundSize/t_series->p_Count())-t_margin;
	Float t_x=Float(-m_playgroundSize/2)+t_offset/FLOAT(2.0);
	c_Enumerator* t_=t_series->p_ObjectEnumerator();
	while(t_->p_HasNext()){
		c_Charting_ChartData* t_data=t_->p_NextObject();
		BABYLON.Mesh* t_bar=BABYLON.Mesh::CreateBox(t_data->m_Label,FLOAT(1.0),m_Scene);
		gc_assign(t_bar->scaling,new BABYLON.Vector3(t_offset/FLOAT(2.0),FLOAT(0.0),t_offset/FLOAT(2.0)));
		t_bar->position->x=t_x;
		t_bar->position->y=FLOAT(0.0);
		BABYLON.Animation* t_animation=new BABYLON.Animation(String(L"anim",4),String(L"scaling",7),FLOAT(30.0),String(BABYLON.Animation::ANIMATIONTYPE_VECTOR3),0);
		AnimationFrame* t_2[]={NAnimationFrame(0,(new BABYLON.Vector3(t_offset/FLOAT(2.0),FLOAT(0.0),t_offset/FLOAT(2.0)))),NAnimationFrame(100,(new BABYLON.Vector3(t_offset/FLOAT(2.0),Float(t_data->m_Value)*m_scale,t_offset/FLOAT(2.0))))};
		t_animation->setKeys(Array<AnimationFrame* >(t_2,2));
		t_bar->animations.push(t_animation);
		t_animation=new BABYLON.Animation(String(L"anim2",5),String(L"position.y",10),FLOAT(30.0),String(BABYLON.Animation::ANIMATIONTYPE_FLOAT),0);
		AnimationFrame* t_3[]={NAnimationFrame(0,FLOAT(0.0)),NAnimationFrame(100,Float(t_data->m_Value)*m_scale/FLOAT(2.0))};
		t_animation->setKeys(Array<AnimationFrame* >(t_3,2));
		t_bar->animations.push(t_animation);
		m_Scene->beginAnimation((t_bar),0,100,false,FLOAT(2.0),0);
		gc_assign(t_bar->material,(new BABYLON.StandardMaterial(t_data->m_Label+String(L"mat",3),m_Scene)));
		gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_bar->material)->diffuseColor,t_data->m_Color);
		gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_bar->material)->emissiveColor,t_data->m_Color->scale(FLOAT(0.3)));
		gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_bar->material)->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
		m_shadowGenerator->getShadowMap()->renderList.push(t_bar);
		BABYLON.Mesh* t_barLegend=BABYLON.Mesh::CreateGround(t_data->m_Label+String(L"Legend",6),Float(m_playgroundSize/2),t_offset*FLOAT(2.0),1,m_Scene,false);
		t_barLegend->position->x=t_x;
		t_barLegend->position->z=Float(-m_playgroundSize/4);
		t_barLegend->rotation->y=FLOAT(1.5707963250000001);
		gc_assign(t_barLegend->material,(new BABYLON.StandardMaterial(t_data->m_Label+String(L"LegendMat",9),m_Scene)));
		BABYLON.DynamicTexture* t_barLegendTexture=new BABYLON.DynamicTexture(String(L"dynamic texture",15),512,m_Scene,true);
		t_barLegendTexture->hasAlpha=true;
		gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_barLegend->material)->diffuseTexture,(t_barLegendTexture));
		gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_barLegend->material)->emissiveColor,new BABYLON.Color3(FLOAT(0.4),FLOAT(0.4),FLOAT(0.4)));
		Size2D* t_size=t_barLegendTexture->getSize();
		t_barLegendTexture->drawText(t_data->m_Label+String(L" (",2)+String(t_data->m_Value)+String(L"%)",2),FLOAT(80.0),t_size->height/FLOAT(2.0)+FLOAT(30.0),String(L"bold 50px Segoe UI",18),String(L"white",5),String(L"transparent",11),false);
		t_x+=t_offset+t_margin;
	}
	return 0;
}
int c_Charting::p_Create(){
	BABYLON.DirectionalLight* t_light=new BABYLON.DirectionalLight(String(L"dir01",5),new BABYLON.Vector3(FLOAT(0.0),FLOAT(-0.5),FLOAT(1.0)),m_Scene);
	BABYLON.ArcRotateCamera* t_camera=new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene);
	t_camera->setPosition(new BABYLON.Vector3(FLOAT(20.0),FLOAT(70.0),FLOAT(-100.0)));
	gc_assign(t_light->position,new BABYLON.Vector3(FLOAT(0.0),FLOAT(25.0),FLOAT(-50.0)));
	m_scale=FLOAT(0.6);
	m_operatingSystem_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Macintosh",9),12,new BABYLON.Color3(FLOAT(0.0),FLOAT(1.0),FLOAT(0.0))));
	m_operatingSystem_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Windows",7),77,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0))));
	m_operatingSystem_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Linux",5),4,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(1.0))));
	m_operatingSystem_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"iOS",3),3,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(0.0))));
	m_operatingSystem_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Android",7),2,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(1.0))));
	m_operatingSystem_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Win Phone",9),1,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(1.0))));
	m_browsers_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"IE",2),32,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(1.0))));
	m_browsers_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Chrome",6),28,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0))));
	m_browsers_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Firefox",7),16,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(1.0))));
	m_browsers_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Opera",5),14,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(0.0))));
	m_browsers_Series->p_AddLast((new c_Charting_ChartData)->m_new(String(L"Safari",6),10,new BABYLON.Color3(FLOAT(0.0),FLOAT(1.0),FLOAT(1.0))));
	m_playgroundSize=100;
	BABYLON.Mesh* t_background=BABYLON.Mesh::CreatePlane(String(L"background",10),Float(m_playgroundSize),m_Scene);
	gc_assign(t_background->material,(new BABYLON.StandardMaterial(String(L"background",10),m_Scene)));
	t_background->scaling->y=FLOAT(0.5);
	t_background->position->z=Float(m_playgroundSize/2)-FLOAT(0.5);
	t_background->position->y=Float(m_playgroundSize/4);
	t_background->receiveShadows=true;
	BABYLON.DynamicTexture* t_backgroundTexture=new BABYLON.DynamicTexture(String(L"dynamic texture",15),512,m_Scene,true);
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_background->material)->diffuseTexture,(t_backgroundTexture));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_background->material)->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	t_background->material->backFaceCulling=false;
	t_backgroundTexture->drawText(String(L"Eternalcoding",13),FLOAT(10.0),FLOAT(80.0),String(L"bold 70px Segoe UI",18),String(L"white",5),String(L"#555555",7),false);
	t_backgroundTexture->drawText(String(L"- browsers statistics -",23),FLOAT(10.0),FLOAT(250.0),String(L"35px Segoe UI",13),String(L"white",5),String(),false);
	BABYLON.Mesh* t_ground=BABYLON.Mesh::CreateGround(String(L"ground",6),Float(m_playgroundSize),Float(m_playgroundSize),1,m_Scene,false);
	BABYLON.StandardMaterial* t_groundMaterial=new BABYLON.StandardMaterial(String(L"ground",6),m_Scene);
	gc_assign(t_groundMaterial->diffuseColor,new BABYLON.Color3(FLOAT(0.5),FLOAT(0.5),FLOAT(0.5)));
	gc_assign(t_groundMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_ground->material,(t_groundMaterial));
	t_ground->receiveShadows=true;
	t_ground->position->y=FLOAT(-0.1);
	gc_assign(m_shadowGenerator,new BABYLON.ShadowGenerator(FLOAT(1024.0),(t_light)));
	t_camera->lowerAlphaLimit=FLOAT(3.14159265);
	t_camera->upperAlphaLimit=FLOAT(6.2831853000000004);
	t_camera->lowerBetaLimit=FLOAT(0.1);
	t_camera->upperBetaLimit=FLOAT(1.55508836175);
	t_camera->lowerRadiusLimit=FLOAT(5.0);
	t_camera->upperRadiusLimit=FLOAT(150.0);
	p_createSeries(m_browsers_Series);
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
void c_Charting::mark(){
	c_Sample::mark();
	gc_mark_q(m_operatingSystem_Series);
	gc_mark_q(m_browsers_Series);
	gc_mark_q(m_shadowGenerator);
}
c_Fog::c_Fog(){
	m_sphere0=0;
	m_sphere1=0;
	m_sphere2=0;
	m_alpha=FLOAT(.0);
}
c_Fog* c_Fog::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Fog::p_Preload(){
	m_Name=String(L"Fog",3);
	return 0;
}
int c_Fog::p_Create(){
	FreeCamera* t_camera=new BABYLON.FreeCamera(String(L"Camera",6),new BABYLON.Vector3(FLOAT(0.0),FLOAT(0.0),FLOAT(-20.0)),m_Scene);
	BABYLON.PointLight* t_light=new BABYLON.PointLight(String(L"Omni",4),new BABYLON.Vector3(FLOAT(20.0),FLOAT(100.0),FLOAT(2.0)),m_Scene);
	gc_assign(m_sphere0,BABYLON.Mesh::CreateSphere(String(L"Sphere0",7),16,FLOAT(3.0),m_Scene));
	gc_assign(m_sphere1,BABYLON.Mesh::CreateSphere(String(L"Sphere1",7),16,FLOAT(3.0),m_Scene));
	gc_assign(m_sphere2,BABYLON.Mesh::CreateSphere(String(L"Sphere2",7),16,FLOAT(3.0),m_Scene));
	BABYLON.StandardMaterial* t_material0=new BABYLON.StandardMaterial(String(L"mat0",4),m_Scene);
	gc_assign(t_material0->diffuseColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(m_sphere0->material,(t_material0));
	gc_assign(m_sphere0->position,new BABYLON.Vector3(FLOAT(-10.0),FLOAT(0.0),FLOAT(0.0)));
	BABYLON.StandardMaterial* t_material1=new BABYLON.StandardMaterial(String(L"mat1",4),m_Scene);
	gc_assign(t_material1->diffuseColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(0.0)));
	gc_assign(m_sphere1->material,(t_material1));
	BABYLON.StandardMaterial* t_material2=new BABYLON.StandardMaterial(String(L"mat2",4),m_Scene);
	gc_assign(t_material2->diffuseColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(1.0)));
	gc_assign(m_sphere2->material,(t_material2));
	gc_assign(m_sphere2->position,new BABYLON.Vector3(FLOAT(10.0),FLOAT(0.0),FLOAT(0.0)));
	t_camera->setTarget(new BABYLON.Vector3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	m_Scene->fogMode=BABYLON.Scene::FOGMODE_EXP;
	m_Scene->fogDensity=FLOAT(0.1);
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
int c_Fog::p_Update(){
	m_sphere0->position->z=FLOAT(4.0)*(Float)cos(m_alpha);
	m_sphere1->position->z=FLOAT(4.0)*(Float)sin(m_alpha);
	m_sphere2->position->z=FLOAT(4.0)*(Float)cos(m_alpha);
	m_alpha+=FLOAT(0.1);
	c_Sample::p_Update();
	return 0;
}
void c_Fog::mark(){
	c_Sample::mark();
	gc_mark_q(m_sphere0);
	gc_mark_q(m_sphere1);
	gc_mark_q(m_sphere2);
}
c_HeightMap::c_HeightMap(){
	m_camera=0;
}
c_HeightMap* c_HeightMap::m_new(){
	c_Sample::m_new();
	return this;
}
int c_HeightMap::p_Preload(){
	m_Name=String(L"HeightMap",9);
	return 0;
}
int c_HeightMap::p_Create(){
	gc_assign(m_camera,new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene));
	BABYLON.PointLight* t_sun=new BABYLON.PointLight(String(L"Omni0",5),new BABYLON.Vector3(FLOAT(60.0),FLOAT(100.0),FLOAT(10.0)),m_Scene);
	m_camera->setPosition(new BABYLON.Vector3(FLOAT(-20.0),FLOAT(20.0),FLOAT(0.0)));
	BABYLON.Mesh* t_skybox=BABYLON.Mesh::CreateBox(String(L"skyBox",6),FLOAT(100.0),m_Scene);
	BABYLON.StandardMaterial* t_skyboxMaterial=new BABYLON.StandardMaterial(String(L"skyBox",6),m_Scene);
	t_skyboxMaterial->backFaceCulling=false;
	gc_assign(t_skyboxMaterial->reflectionTexture,(new BABYLON.CubeTexture(String(L"data/skybox/skybox",18),m_Scene)));
	t_skyboxMaterial->reflectionTexture->coordinatesMode=Float(BABYLON.Texture::SKYBOX_MODE);
	gc_assign(t_skyboxMaterial->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_skyboxMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_skybox->material,(t_skyboxMaterial));
	BABYLON.Mesh* t_ground=BABYLON.Mesh::CreateGroundFromHeightMap(String(L"ground",6),String(L"data/heightMap.png",18),FLOAT(100.0),FLOAT(100.0),100,FLOAT(0.0),FLOAT(10.0),m_Scene,false);
	BABYLON.StandardMaterial* t_groundMaterial=new BABYLON.StandardMaterial(String(L"ground",6),m_Scene);
	gc_assign(t_groundMaterial->diffuseTexture,new BABYLON.Texture(String(L"data/ground.jpg",15),m_Scene,false,false));
	t_groundMaterial->diffuseTexture->uScale=FLOAT(6.0);
	t_groundMaterial->diffuseTexture->vScale=FLOAT(6.0);
	gc_assign(t_groundMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	t_ground->position->y=FLOAT(-2.05);
	gc_assign(t_ground->material,(t_groundMaterial));
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
int c_HeightMap::p_Update(){
	if(m_camera->beta<FLOAT(0.1)){
		m_camera->beta=FLOAT(0.1);
	}else{
		if(m_camera->beta>FLOAT(1.4137166925000002)){
			m_camera->beta=FLOAT(1.4137166925000002);
		}
	}
	if(m_camera->radius>FLOAT(30.0)){
		m_camera->radius=FLOAT(30.0);
	}
	if(m_camera->radius<FLOAT(5.0)){
		m_camera->radius=FLOAT(5.0);
	}
	c_Sample::p_Update();
	return 0;
}
void c_HeightMap::mark(){
	c_Sample::mark();
	gc_mark_q(m_camera);
}
c_Lights::c_Lights(){
	m_light0=0;
	m_light1=0;
	m_light2=0;
	m_lightSphere0=0;
	m_lightSphere1=0;
	m_lightSphere2=0;
	m_alpha=FLOAT(.0);
}
c_Lights* c_Lights::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Lights::p_Preload(){
	m_Name=String(L"Lights",6);
	return 0;
}
int c_Lights::p_Create(){
	BABYLON.ArcRotateCamera* t_camera=new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene);
	gc_assign(m_light0,new BABYLON.PointLight(String(L"Omni0",5),new BABYLON.Vector3(FLOAT(0.0),FLOAT(10.0),FLOAT(0.0)),m_Scene));
	gc_assign(m_light1,new BABYLON.PointLight(String(L"Omni1",5),new BABYLON.Vector3(FLOAT(0.0),FLOAT(-10.0),FLOAT(0.0)),m_Scene));
	gc_assign(m_light2,new BABYLON.PointLight(String(L"Omni2",5),new BABYLON.Vector3(FLOAT(10.0),FLOAT(0.0),FLOAT(0.0)),m_Scene));
	BABYLON.DirectionalLight* t_light3=new BABYLON.DirectionalLight(String(L"Dir0",4),new BABYLON.Vector3(FLOAT(1.0),FLOAT(-1.0),FLOAT(0.0)),m_Scene);
	BABYLON.StandardMaterial* t_material=new BABYLON.StandardMaterial(String(L"kosh",4),m_Scene);
	BABYLON.Mesh* t_sphere=BABYLON.Mesh::CreateSphere(String(L"Sphere",6),16,FLOAT(3.0),m_Scene);
	t_camera->setPosition(new BABYLON.Vector3(FLOAT(-10.0),FLOAT(10.0),FLOAT(0.0)));
	gc_assign(m_lightSphere0,BABYLON.Mesh::CreateSphere(String(L"Sphere0",7),16,FLOAT(0.5),m_Scene));
	gc_assign(m_lightSphere1,BABYLON.Mesh::CreateSphere(String(L"Sphere1",7),16,FLOAT(0.5),m_Scene));
	gc_assign(m_lightSphere2,BABYLON.Mesh::CreateSphere(String(L"Sphere2",7),16,FLOAT(0.5),m_Scene));
	gc_assign(m_lightSphere0->material,(new BABYLON.StandardMaterial(String(L"red",3),m_Scene)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere0->material)->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere0->material)->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere0->material)->emissiveColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(m_lightSphere1->material,(new BABYLON.StandardMaterial(String(L"green",5),m_Scene)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere1->material)->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere1->material)->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere1->material)->emissiveColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(1.0),FLOAT(0.0)));
	gc_assign(m_lightSphere2->material,(new BABYLON.StandardMaterial(String(L"blue",4),m_Scene)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere2->material)->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere2->material)->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_lightSphere2->material)->emissiveColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(1.0)));
	gc_assign(t_material->diffuseColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(1.0)));
	gc_assign(t_sphere->material,(t_material));
	gc_assign(m_light0->diffuse,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(m_light0->specular,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(m_light1->diffuse,new BABYLON.Color3(FLOAT(0.0),FLOAT(1.0),FLOAT(0.0)));
	gc_assign(m_light1->specular,new BABYLON.Color3(FLOAT(0.0),FLOAT(1.0),FLOAT(0.0)));
	gc_assign(m_light2->diffuse,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(1.0)));
	gc_assign(m_light2->specular,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(1.0)));
	gc_assign(t_light3->diffuse,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(1.0)));
	gc_assign(t_light3->specular,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(1.0)));
	BABYLON.Mesh* t_skybox=BABYLON.Mesh::CreateBox(String(L"skyBox",6),FLOAT(100.0),m_Scene);
	BABYLON.StandardMaterial* t_skyboxMaterial=new BABYLON.StandardMaterial(String(L"skyBox",6),m_Scene);
	t_skyboxMaterial->backFaceCulling=false;
	gc_assign(t_skyboxMaterial->reflectionTexture,(new BABYLON.CubeTexture(String(L"data/skybox/skybox",18),m_Scene)));
	t_skyboxMaterial->reflectionTexture->coordinatesMode=Float(BABYLON.Texture::SKYBOX_MODE);
	gc_assign(t_skyboxMaterial->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_skyboxMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_skybox->material,(t_skyboxMaterial));
	int t_alpha=0;
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
int c_Lights::p_Update(){
	gc_assign(m_light0->position,new BABYLON.Vector3(FLOAT(10.0)*(Float)sin(m_alpha),FLOAT(0.0),FLOAT(10.0)*(Float)cos(m_alpha)));
	gc_assign(m_light1->position,new BABYLON.Vector3(FLOAT(10.0)*(Float)sin(m_alpha),FLOAT(0.0),FLOAT(-10.0)*(Float)cos(m_alpha)));
	gc_assign(m_light2->position,new BABYLON.Vector3(FLOAT(10.0)*(Float)cos(m_alpha),FLOAT(0.0),FLOAT(10.0)*(Float)sin(m_alpha)));
	gc_assign(m_lightSphere0->position,m_light0->position);
	gc_assign(m_lightSphere1->position,m_light1->position);
	gc_assign(m_lightSphere2->position,m_light2->position);
	m_alpha+=FLOAT(0.01);
	c_Sample::p_Update();
	return 0;
}
void c_Lights::mark(){
	c_Sample::mark();
	gc_mark_q(m_light0);
	gc_mark_q(m_light1);
	gc_mark_q(m_light2);
	gc_mark_q(m_lightSphere0);
	gc_mark_q(m_lightSphere1);
	gc_mark_q(m_lightSphere2);
}
c_MultiMat::c_MultiMat(){
}
c_MultiMat* c_MultiMat::m_new(){
	c_Sample::m_new();
	return this;
}
int c_MultiMat::p_Preload(){
	m_Name=String(L"Multi Material",14);
	return 0;
}
int c_MultiMat::p_Create(){
	BABYLON.ArcRotateCamera* t_camera=new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene);
	BABYLON.PointLight* t_light=new BABYLON.PointLight(String(L"Omni",4),new BABYLON.Vector3(FLOAT(20.0),FLOAT(100.0),FLOAT(2.0)),m_Scene);
	BABYLON.StandardMaterial* t_material0=new BABYLON.StandardMaterial(String(L"mat0",4),m_Scene);
	gc_assign(t_material0->diffuseColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_material0->bumpTexture,new BABYLON.Texture(String(L"data/normalMap.jpg",18),m_Scene,false,false));
	BABYLON.StandardMaterial* t_material1=new BABYLON.StandardMaterial(String(L"mat1",4),m_Scene);
	gc_assign(t_material1->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(1.0)));
	BABYLON.StandardMaterial* t_material2=new BABYLON.StandardMaterial(String(L"mat2",4),m_Scene);
	gc_assign(t_material2->emissiveColor,new BABYLON.Color3(FLOAT(0.4),FLOAT(0.0),FLOAT(0.4)));
	BABYLON.MultiMaterial* t_multimat=new BABYLON.MultiMaterial(String(L"multi",5),m_Scene);
	t_multimat->subMaterials.push(t_material0);
	t_multimat->subMaterials.push(t_material1);
	t_multimat->subMaterials.push(t_material2);
	BABYLON.Mesh* t_sphere=BABYLON.Mesh::CreateSphere(String(L"Sphere0",7),16,FLOAT(3.0),m_Scene);
	gc_assign(t_sphere->material,(t_multimat));
	t_sphere->subMeshes=Array<new BABYLON.SubMesh* >();
	int t_verticesCount=t_sphere->getTotalVertices();
	t_sphere->subMeshes.push(new BABYLON.SubMesh(FLOAT(0.0),FLOAT(0.0),Float(t_verticesCount),FLOAT(0.0),FLOAT(900.0),t_sphere));
	t_sphere->subMeshes.push(new BABYLON.SubMesh(FLOAT(1.0),FLOAT(0.0),Float(t_verticesCount),FLOAT(900.0),FLOAT(900.0),t_sphere));
	t_sphere->subMeshes.push(new BABYLON.SubMesh(FLOAT(2.0),FLOAT(0.0),Float(t_verticesCount),FLOAT(1800.0),FLOAT(2088.0),t_sphere));
	t_camera->setPosition(new BABYLON.Vector3(FLOAT(-3.0),FLOAT(3.0),FLOAT(0.0)));
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
void c_MultiMat::mark(){
	c_Sample::mark();
}
c_Octree::c_Octree(){
}
c_Octree* c_Octree::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Octree::p_Preload(){
	m_Name=String(L"Octree",6);
	return 0;
}
int c_Octree::p_Create(){
	BABYLON.ArcRotateCamera* t_camera=new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene);
	BABYLON.PointLight* t_light0=new BABYLON.PointLight(String(L"Omni0",5),new BABYLON.Vector3(FLOAT(0.0),FLOAT(10.0),FLOAT(0.0)),m_Scene);
	BABYLON.StandardMaterial* t_material=new BABYLON.StandardMaterial(String(L"kosh",4),m_Scene);
	BABYLON.Mesh* t_sphere=BABYLON.Mesh::CreateSphere(String(L"sphere0",7),16,FLOAT(1.0),m_Scene);
	t_camera->setPosition(new BABYLON.Vector3(FLOAT(-10.0),FLOAT(10.0),FLOAT(0.0)));
	gc_assign(t_material->diffuseColor,new BABYLON.Color3(FLOAT(0.5),FLOAT(0.5),FLOAT(0.5)));
	gc_assign(t_material->specularColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(1.0),FLOAT(1.0)));
	t_material->specularPower=FLOAT(32.0);
	t_material->checkReadyOnEveryCall=false;
	gc_assign(t_sphere->material,(t_material));
	m_Scene->fogMode=BABYLON.Scene::FOGMODE_EXP;
	m_Scene->fogDensity=FLOAT(0.05);
	int t_playgroundSize=50;
	for(int t_index=0;t_index<=7999;t_index=t_index+1){
		BABYLON.Mesh* t_clone=t_sphere->clone(String(L"sphere",6)+String(t_index+1),0,true);
		Float t_scale=bb_random_Rnd()*FLOAT(0.8)+FLOAT(0.6);
		gc_assign(t_clone->scaling,new BABYLON.Vector3(t_scale,t_scale,t_scale));
		gc_assign(t_clone->position,new BABYLON.Vector3(bb_random_Rnd()*FLOAT(2.0)*Float(t_playgroundSize)-Float(t_playgroundSize),bb_random_Rnd()*FLOAT(2.0)*Float(t_playgroundSize)-Float(t_playgroundSize),bb_random_Rnd()*FLOAT(2.0)*Float(t_playgroundSize)-Float(t_playgroundSize)));
	}
	t_sphere->setEnabled(false);
	m_Scene->createOrUpdateSelectionOctree();
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
void c_Octree::mark(){
	c_Sample::mark();
}
c_Shadows::c_Shadows(){
	m_camera=0;
	m_torus=0;
	m_torus2=0;
}
c_Shadows* c_Shadows::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Shadows::p_Preload(){
	m_Name=String(L"Shadows",7);
	return 0;
}
int c_Shadows::p_Create(){
	gc_assign(m_camera,new BABYLON.ArcRotateCamera(String(L"Camera",6),FLOAT(0.0),FLOAT(0.0),FLOAT(10.0),BABYLON.Vector3::Zero(),m_Scene));
	BABYLON.DirectionalLight* t_light=new BABYLON.DirectionalLight(String(L"dir01",5),new BABYLON.Vector3(FLOAT(0.0),FLOAT(-1.0),FLOAT(-0.2)),m_Scene);
	BABYLON.DirectionalLight* t_light2=new BABYLON.DirectionalLight(String(L"dir02",5),new BABYLON.Vector3(FLOAT(-1.0),FLOAT(-2.0),FLOAT(-1.0)),m_Scene);
	gc_assign(t_light->position,new BABYLON.Vector3(FLOAT(0.0),FLOAT(30.0),FLOAT(0.0)));
	gc_assign(t_light2->position,new BABYLON.Vector3(FLOAT(10.0),FLOAT(20.0),FLOAT(10.0)));
	t_light->intensity=FLOAT(0.6);
	t_light2->intensity=FLOAT(0.6);
	m_camera->setPosition(new BABYLON.Vector3(FLOAT(-20.0),FLOAT(20.0),FLOAT(0.0)));
	BABYLON.Mesh* t_skybox=BABYLON.Mesh::CreateBox(String(L"skyBox",6),FLOAT(1000.0),m_Scene);
	BABYLON.StandardMaterial* t_skyboxMaterial=new BABYLON.StandardMaterial(String(L"skyBox",6),m_Scene);
	t_skyboxMaterial->backFaceCulling=false;
	gc_assign(t_skyboxMaterial->reflectionTexture,(new BABYLON.CubeTexture(String(L"data/skybox/night",17),m_Scene)));
	t_skyboxMaterial->reflectionTexture->coordinatesMode=Float(BABYLON.Texture::SKYBOX_MODE);
	gc_assign(t_skyboxMaterial->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_skyboxMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_skybox->material,(t_skyboxMaterial));
	BABYLON.Mesh* t_ground=BABYLON.Mesh::CreateGround(String(L"ground",6),FLOAT(1000.0),FLOAT(1000.0),1,m_Scene,false);
	BABYLON.StandardMaterial* t_groundMaterial=new BABYLON.StandardMaterial(String(L"ground",6),m_Scene);
	gc_assign(t_groundMaterial->diffuseTexture,new BABYLON.Texture(String(L"data/assets/grass.jpg",21),m_Scene,false,false));
	t_groundMaterial->diffuseTexture->uScale=FLOAT(60.0);
	t_groundMaterial->diffuseTexture->vScale=FLOAT(60.0);
	gc_assign(t_groundMaterial->diffuseColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	gc_assign(t_groundMaterial->specularColor,new BABYLON.Color3(FLOAT(0.0),FLOAT(0.0),FLOAT(0.0)));
	t_ground->position->y=FLOAT(-2.05);
	gc_assign(t_ground->material,(t_groundMaterial));
	gc_assign(m_torus,BABYLON.Mesh::CreateTorus(String(L"torus",5),FLOAT(8.0),FLOAT(2.0),FLOAT(32.0),m_Scene,false));
	m_torus->position->y=FLOAT(6.0);
	gc_assign(m_torus2,BABYLON.Mesh::CreateTorus(String(L"torus2",6),FLOAT(4.0),FLOAT(1.0),FLOAT(32.0),m_Scene,false));
	m_torus2->position->y=FLOAT(6.0);
	BABYLON.ShadowGenerator* t_shadowGenerator=new BABYLON.ShadowGenerator(FLOAT(512.0),(t_light));
	t_shadowGenerator->getShadowMap()->renderList.push(m_torus);
	t_shadowGenerator->getShadowMap()->renderList.push(m_torus2);
	BABYLON.ShadowGenerator* t_shadowGenerator2=new BABYLON.ShadowGenerator(FLOAT(512.0),(t_light2));
	t_shadowGenerator2->getShadowMap()->renderList.push(m_torus);
	t_shadowGenerator2->getShadowMap()->renderList.push(m_torus2);
	t_shadowGenerator2->useVarianceShadowMap=false;
	t_ground->receiveShadows=true;
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
int c_Shadows::p_Update(){
	if(m_camera->beta<FLOAT(0.1)){
		m_camera->beta=FLOAT(0.1);
	}else{
		if(m_camera->beta>FLOAT(1.55508836175)){
			m_camera->beta=FLOAT(1.55508836175);
		}
	}
	if(m_camera->radius>FLOAT(150.0)){
		m_camera->radius=FLOAT(150.0);
	}
	if(m_camera->radius<FLOAT(5.0)){
		m_camera->radius=FLOAT(5.0);
	}
	m_torus->rotation->x+=FLOAT(0.01);
	m_torus->rotation->z+=FLOAT(0.02);
	m_torus2->rotation->x+=FLOAT(0.02);
	m_torus2->rotation->y+=FLOAT(0.01);
	c_Sample::p_Update();
	return 0;
}
void c_Shadows::mark(){
	c_Sample::mark();
	gc_mark_q(m_camera);
	gc_mark_q(m_torus);
	gc_mark_q(m_torus2);
}
c_Test::c_Test(){
	m_material=0;
	m_material2=0;
	m_material3=0;
	m_box=0;
	m_cylinder=0;
	m_torus=0;
	m_sphere=0;
	m_plane=0;
	m_planeTexture=0;
	m_spriteManager=0;
	m_background0=0;
	m_spaceDek=0;
	m_spaceDek2=0;
	m_spaceDek3=0;
	m_alpha=FLOAT(.0);
	m_frameCount=0;
	m_reloop=0;
	m_startDate=0;
	m_count=0;
}
c_Test* c_Test::m_new(){
	c_Sample::m_new();
	return this;
}
int c_Test::p_Preload(){
	m_Name=String(L"Big Test!",9);
	m_Importer->p_LoadMesh(String(L"Vaisseau",8),String(L"SpaceDek/SpaceDek.babylon",25));
	return 0;
}
int c_Test::p_Create(){
	FreeCamera* t_camera2=new BABYLON.FreeCamera(String(L"Camera",6),new BABYLON.Vector3(FLOAT(0.0),FLOAT(0.0),FLOAT(-10.0)),m_Scene);
	BABYLON.PointLight* t_light=new BABYLON.PointLight(String(L"Omni",4),new BABYLON.Vector3(FLOAT(20.0),FLOAT(100.0),FLOAT(2.0)),m_Scene);
	gc_assign(m_material,new BABYLON.StandardMaterial(String(L"leaves",6),m_Scene));
	gc_assign(m_material2,new BABYLON.StandardMaterial(String(L"kosh transparent",16),m_Scene));
	gc_assign(m_material3,new BABYLON.StandardMaterial(String(L"kosh",4),m_Scene));
	BABYLON.StandardMaterial* t_planeMaterial=new BABYLON.StandardMaterial(String(L"plane material",14),m_Scene);
	gc_assign(m_box,BABYLON.Mesh::CreateBox(String(L"Box",3),FLOAT(1.0),m_Scene));
	gc_assign(m_cylinder,BABYLON.Mesh::CreateCylinder(String(L"Cylinder",8),FLOAT(2.0),FLOAT(0.8),FLOAT(0.0),FLOAT(32.0),m_Scene,false));
	gc_assign(m_torus,BABYLON.Mesh::CreateTorus(String(L"Torus",5),FLOAT(1.0),FLOAT(0.5),FLOAT(16.0),m_Scene,false));
	gc_assign(m_sphere,BABYLON.Mesh::CreateSphere(String(L"Sphere",6),16,FLOAT(3.0),m_Scene));
	gc_assign(m_plane,BABYLON.Mesh::CreatePlane(String(L"plane",5),FLOAT(3.0),m_Scene));
	gc_assign(m_material->diffuseTexture,new BABYLON.Texture(String(L"data/Assets/Tree.png",20),m_Scene,false,false));
	m_material->diffuseTexture->hasAlpha=true;
	m_material->backFaceCulling=false;
	gc_assign(m_material2->diffuseTexture,new BABYLON.Texture(String(L"data/Assets/kosh.jpg",20),m_Scene,false,false));
	m_material2->alpha=FLOAT(0.5);
	m_material2->backFaceCulling=false;
	gc_assign(m_material3->diffuseTexture,new BABYLON.Texture(String(L"data/Assets/kosh.jpg",20),m_Scene,false,false));
	t_planeMaterial->backFaceCulling=false;
	gc_assign(m_planeTexture,new BABYLON.DynamicTexture(String(L"dynamic texture",15),512,m_Scene,true));
	m_planeTexture->hasAlpha=true;
	gc_assign(t_planeMaterial->diffuseTexture,(m_planeTexture));
	m_plane->billboardMode=Float(BABYLON.Mesh::BILLBOARDMODE_ALL);
	gc_assign(m_box->material,(m_material));
	gc_assign(m_cylinder->material,(m_material3));
	gc_assign(m_torus->material,(m_material2));
	gc_assign(m_sphere->material,(m_material));
	gc_assign(m_plane->material,(t_planeMaterial));
	m_cylinder->position->x=m_cylinder->position->x+FLOAT(13.0);
	m_torus->position->x=m_torus->position->x-FLOAT(3.0);
	gc_assign(m_torus->parent,m_sphere);
	m_sphere->position->z=FLOAT(3.0);
	gc_assign(m_plane->position,new BABYLON.Vector3(FLOAT(0.0),FLOAT(7.0),FLOAT(0.0)));
	BABYLON.ParticleSystem* t_particleSystem=new BABYLON.ParticleSystem(String(L"particles",9),FLOAT(4000.0),m_Scene);
	gc_assign(t_particleSystem->particleTexture,new BABYLON.Texture(String(L"data/Assets/Flare.png",21),m_Scene,false,false));
	t_particleSystem->minAngularSpeed=FLOAT(-0.5);
	t_particleSystem->maxAngularSpeed=FLOAT(0.5);
	t_particleSystem->minSize=FLOAT(0.5);
	t_particleSystem->maxSize=FLOAT(1.0);
	t_particleSystem->minLifeTime=FLOAT(0.5);
	t_particleSystem->maxLifeTime=FLOAT(1.0);
	gc_assign(t_particleSystem->emitter,(m_torus));
	t_particleSystem->emitRate=FLOAT(300.0);
	t_particleSystem->blendMode=BABYLON.ParticleSystem::BLENDMODE_ONEONE;
	gc_assign(t_particleSystem->minEmitBox,new BABYLON.Vector3(FLOAT(0.0),FLOAT(0.1),FLOAT(0.0)));
	gc_assign(t_particleSystem->maxEmitBox,new BABYLON.Vector3(FLOAT(0.0),FLOAT(-0.1),FLOAT(0.0)));
	gc_assign(t_particleSystem->gravity,new BABYLON.Vector3(FLOAT(0.0),FLOAT(-0.5),FLOAT(0.0)));
	t_particleSystem->start();
	BABYLON.Mesh* t_mirror=BABYLON.Mesh::CreateBox(String(L"Mirror",6),FLOAT(1.0),m_Scene);
	gc_assign(t_mirror->scaling,new BABYLON.Vector3(FLOAT(100.0),FLOAT(0.01),FLOAT(100.0)));
	gc_assign(t_mirror->material,(new BABYLON.StandardMaterial(String(L"mirror",6),m_Scene)));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_mirror->material)->diffuseColor,new BABYLON.Color3(FLOAT(0.4),FLOAT(0.4),FLOAT(0.4)));
	BABYLON.MirrorTexture* t_mTexture=new BABYLON.MirrorTexture(String(L"mirror",6),512,m_Scene,true);
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(t_mirror->material)->reflectionTexture,(t_mTexture));
	gc_assign(t_mTexture->mirrorPlane,new BABYLON.Plane(FLOAT(0.0),FLOAT(-1.0),FLOAT(0.0),FLOAT(-5.0)));
	BABYLON.Mesh* t_[]={m_box,m_cylinder,m_torus,m_sphere};
	gc_assign(t_mTexture->renderList,Array<BABYLON.Mesh* >(t_,4));
	t_mTexture->level=FLOAT(0.5);
	gc_assign(t_mirror->position,new BABYLON.Vector3(FLOAT(0.0),FLOAT(-5.0),FLOAT(0.0)));
	gc_assign(m_spriteManager,new BABYLON.SpriteManager(String(L"MonsterA",8),String(L"data/Assets/Player.png",22),FLOAT(500.0),FLOAT(64.0),m_Scene));
	for(int t_index=0;t_index<=499;t_index=t_index+1){
		BABYLON.Sprite* t_sprite=new BABYLON.Sprite(String(L"toto",4),m_spriteManager);
		t_sprite->position->y=FLOAT(-4.5);
		t_sprite->position->z=bb_random_Rnd()*FLOAT(20.0)-FLOAT(10.0);
		t_sprite->position->x=bb_random_Rnd()*FLOAT(20.0)-FLOAT(10.0);
		t_sprite->dir=int((Float)floor(bb_random_Rnd()*FLOAT(2.0)-FLOAT(1.0)));
		t_sprite->invertU=t_sprite->dir<0;
		t_sprite->playAnimation(0,9,true,FLOAT(100.0));
		gc_assign(t_sprite->color,new BABYLON.Color4(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0),FLOAT(1.0)));
	}
	gc_assign(m_background0,new BABYLON.Layer(String(L"back0",5),String(L"data/Assets/Layer0_0.png",24),m_Scene));
	BABYLON.Layer* t_background1=new BABYLON.Layer(String(L"back1",5),String(L"data/Assets/Layer1_0.png",24),m_Scene);
	BABYLON.Layer* t_foreground=new BABYLON.Layer(String(L"back0",5),String(L"data/Assets/Layer2_0.png",24),m_Scene,true,new BABYLON.Color4(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0),FLOAT(1.0)));
	gc_assign(m_spaceDek,m_Importer->m_Meshes->p_Get(String(L"Vaisseau",8))->m_Meshes[0]);
	for(int t_index2=0;t_index2<=m_Importer->m_Meshes->p_Get(String(L"Vaisseau",8))->m_Meshes.Length()-1;t_index2=t_index2+1){
		dynamic_cast<BABYLON.MirrorTexture*>(dynamic_cast<BABYLON.StandardMaterial*>(t_mirror->material)->reflectionTexture)->renderList.push(m_Importer->m_Meshes->p_Get(String(L"Vaisseau",8))->m_Meshes[t_index2]);
	}
	gc_assign(m_spaceDek->position,new BABYLON.Vector3(FLOAT(0.0),FLOAT(20.0),FLOAT(0.0)));
	gc_assign(m_spaceDek->scaling,new BABYLON.Vector3(FLOAT(0.3),FLOAT(0.3),FLOAT(0.3)));
	gc_assign(m_spaceDek2,m_spaceDek->clone(String(L"Vaisseau 2",10),0,false));
	gc_assign(m_spaceDek2->position,new BABYLON.Vector3(FLOAT(40.0),FLOAT(20.0),FLOAT(0.0)));
	gc_assign(m_spaceDek2->scaling,new BABYLON.Vector3(FLOAT(0.3),FLOAT(0.3),FLOAT(0.3)));
	gc_assign(m_spaceDek3,m_spaceDek2->clone(String(L"Vaisseau 3",10),0,false));
	gc_assign(m_spaceDek3->position,new BABYLON.Vector3(FLOAT(-50.0),FLOAT(20.0),FLOAT(0.0)));
	gc_assign(m_spaceDek3->scaling,new BABYLON.Vector3(FLOAT(0.3),FLOAT(0.3),FLOAT(0.3)));
	dynamic_cast<BABYLON.MirrorTexture*>(dynamic_cast<BABYLON.StandardMaterial*>(t_mirror->material)->reflectionTexture)->renderList.push(m_spaceDek3);
	Array<BABYLON.Mesh* > t_children=m_spaceDek3->getDescendants();
	for(int t_index3=0;t_index3<=t_children.Length()-1;t_index3=t_index3+1){
		dynamic_cast<BABYLON.MirrorTexture*>(dynamic_cast<BABYLON.StandardMaterial*>(t_mirror->material)->reflectionTexture)->renderList.push(t_children[t_index3]);
	}
	gc_assign(m_spaceDek3->material,(dynamic_cast<BABYLON.StandardMaterial*>(m_spaceDek2->material)->clone(String(L"Vaisseau 3 mat",14))));
	gc_assign(dynamic_cast<BABYLON.StandardMaterial*>(m_spaceDek3->material)->emissiveColor,new BABYLON.Color3(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0)));
	m_Scene->beginAnimation((m_spaceDek3),0,100,true,FLOAT(1.0),0);
	m_Scene->activeCamera->attachControl(m_Game->m_Canvas2D);
	return 0;
}
int c_Test::p_Update(){
	m_box->rotation->y+=FLOAT(0.01);
	m_cylinder->rotation->x+=FLOAT(0.01);
	m_sphere->rotation->y+=FLOAT(0.02);
	m_torus->rotation->z+=FLOAT(0.01);
	m_alpha+=FLOAT(0.01);
	if((m_spaceDek)!=0){
		m_spaceDek->rotation->y+=FLOAT(0.01);
	}
	if((m_spaceDek2)!=0){
		m_spaceDek2->rotation->y-=FLOAT(0.01);
	}
	if((m_spaceDek3)!=0){
		m_spaceDek3->rotation->y-=FLOAT(0.01);
	}
	if(m_torus->intersectsMesh(m_box,true)){
		m_material2->alpha=FLOAT(1.0);
		gc_assign(m_torus->scaling,new BABYLON.Vector3(FLOAT(2.0),FLOAT(2.0),FLOAT(2.0)));
	}else{
		m_material2->alpha=FLOAT(0.5);
		gc_assign(m_torus->scaling,new BABYLON.Vector3(FLOAT(1.0),FLOAT(1.0),FLOAT(1.0)));
	}
	m_frameCount+=1;
	if(m_frameCount>3){
		m_frameCount=0;
		m_reloop+=1;
		for(int t_index=0;t_index<=m_spriteManager->sprites.Length()-1;t_index=t_index+1){
			BABYLON.Sprite* t_sprite=m_spriteManager->sprites[t_index];
			t_sprite->position->x-=FLOAT(0.1)*Float(t_sprite->dir);
			if(m_reloop>20){
				t_sprite->dir*=-1;
				t_sprite->invertU=!t_sprite->invertU;
			}
		}
		if(m_reloop>20){
			m_reloop=0;
		}
	}
	int t_diff=bb_app_Millisecs()-m_startDate;
	if(t_diff>200){
		m_startDate=bb_app_Millisecs();
		Context* t_textureContext=m_planeTexture->getContext();
		Size2D* t_size=m_planeTexture->getSize();
		String t_text=String(m_count);
		t_textureContext->clearRect(0,0,int(t_size->width),int(t_size->height));
		t_textureContext->font=String(L"bold 120px Calibri",18);
		Size2D* t_textSize=t_textureContext->measureText(t_text);
		t_textureContext->fillStyle=String(L"white",5);
		t_textureContext->fillText(t_text,(t_size->width-t_textSize->width)/FLOAT(2.0),(t_size->height-FLOAT(120.0))/FLOAT(2.0));
		m_planeTexture->update();
		m_count+=1;
	}
	m_background0->texture->uOffset+=FLOAT(0.001);
	c_Sample::p_Update();
	return 0;
}
void c_Test::mark(){
	c_Sample::mark();
	gc_mark_q(m_material);
	gc_mark_q(m_material2);
	gc_mark_q(m_material3);
	gc_mark_q(m_box);
	gc_mark_q(m_cylinder);
	gc_mark_q(m_torus);
	gc_mark_q(m_sphere);
	gc_mark_q(m_plane);
	gc_mark_q(m_planeTexture);
	gc_mark_q(m_spriteManager);
	gc_mark_q(m_background0);
	gc_mark_q(m_spaceDek);
	gc_mark_q(m_spaceDek2);
	gc_mark_q(m_spaceDek3);
}
int bb_samples_CurrentState;
int bb_samples_NextState(){
	bb_samples_CurrentState=(bb_samples_CurrentState+1) % bb_samples_BGame->p_StateCount();
	bb_samples_BGame->p_StartState(String(bb_samples_CurrentState),true);
	return 0;
}
int bbMain(){
	gc_assign(bb_samples_BGame,(new c_BabylonGame)->m_new(0,String(L"GameCanvas3D",12),true,60));
	bb_samples_BGame->p_AddState(String(L"0",1),((new c_Bones)->m_new()));
	bb_samples_BGame->p_AddState(String(L"1",1),((new c_Bumpmap)->m_new()));
	bb_samples_BGame->p_AddState(String(L"2",1),((new c_Charting)->m_new()));
	bb_samples_BGame->p_AddState(String(L"3",1),((new c_Fog)->m_new()));
	bb_samples_BGame->p_AddState(String(L"4",1),((new c_HeightMap)->m_new()));
	bb_samples_BGame->p_AddState(String(L"5",1),((new c_Lights)->m_new()));
	bb_samples_BGame->p_AddState(String(L"6",1),((new c_MultiMat)->m_new()));
	bb_samples_BGame->p_AddState(String(L"7",1),((new c_Octree)->m_new()));
	bb_samples_BGame->p_AddState(String(L"8",1),((new c_Shadows)->m_new()));
	bb_samples_BGame->p_AddState(String(L"9",1),((new c_Test)->m_new()));
	bb_samples_CurrentState=bb_samples_BGame->p_StateCount()-2;
	bb_samples_NextState();
	return 0;
}
gxtkGraphics* bb_graphics_device;
int bb_graphics_SetGraphicsDevice(gxtkGraphics* t_dev){
	gc_assign(bb_graphics_device,t_dev);
	return 0;
}
c_Image::c_Image(){
	m_surface=0;
	m_width=0;
	m_height=0;
	m_frames=Array<c_Frame* >();
	m_flags=0;
	m_tx=FLOAT(.0);
	m_ty=FLOAT(.0);
	m_source=0;
}
int c_Image::m_DefaultFlags;
c_Image* c_Image::m_new(){
	return this;
}
int c_Image::p_SetHandle(Float t_tx,Float t_ty){
	this->m_tx=t_tx;
	this->m_ty=t_ty;
	this->m_flags=this->m_flags&-2;
	return 0;
}
int c_Image::p_ApplyFlags(int t_iflags){
	m_flags=t_iflags;
	if((m_flags&2)!=0){
		Array<c_Frame* > t_=m_frames;
		int t_2=0;
		while(t_2<t_.Length()){
			c_Frame* t_f=t_[t_2];
			t_2=t_2+1;
			t_f->m_x+=1;
		}
		m_width-=2;
	}
	if((m_flags&4)!=0){
		Array<c_Frame* > t_3=m_frames;
		int t_4=0;
		while(t_4<t_3.Length()){
			c_Frame* t_f2=t_3[t_4];
			t_4=t_4+1;
			t_f2->m_y+=1;
		}
		m_height-=2;
	}
	if((m_flags&1)!=0){
		p_SetHandle(Float(m_width)/FLOAT(2.0),Float(m_height)/FLOAT(2.0));
	}
	if(m_frames.Length()==1 && m_frames[0]->m_x==0 && m_frames[0]->m_y==0 && m_width==m_surface->Width() && m_height==m_surface->Height()){
		m_flags|=65536;
	}
	return 0;
}
c_Image* c_Image::p_Init(gxtkSurface* t_surf,int t_nframes,int t_iflags){
	gc_assign(m_surface,t_surf);
	m_width=m_surface->Width()/t_nframes;
	m_height=m_surface->Height();
	gc_assign(m_frames,Array<c_Frame* >(t_nframes));
	for(int t_i=0;t_i<t_nframes;t_i=t_i+1){
		gc_assign(m_frames[t_i],(new c_Frame)->m_new(t_i*m_width,0));
	}
	p_ApplyFlags(t_iflags);
	return this;
}
c_Image* c_Image::p_Grab(int t_x,int t_y,int t_iwidth,int t_iheight,int t_nframes,int t_iflags,c_Image* t_source){
	gc_assign(this->m_source,t_source);
	gc_assign(m_surface,t_source->m_surface);
	m_width=t_iwidth;
	m_height=t_iheight;
	gc_assign(m_frames,Array<c_Frame* >(t_nframes));
	int t_ix=t_x;
	int t_iy=t_y;
	for(int t_i=0;t_i<t_nframes;t_i=t_i+1){
		if(t_ix+m_width>t_source->m_width){
			t_ix=0;
			t_iy+=m_height;
		}
		if(t_ix+m_width>t_source->m_width || t_iy+m_height>t_source->m_height){
			bbError(String(L"Image frame outside surface",27));
		}
		gc_assign(m_frames[t_i],(new c_Frame)->m_new(t_ix+t_source->m_frames[0]->m_x,t_iy+t_source->m_frames[0]->m_y));
		t_ix+=m_width;
	}
	p_ApplyFlags(t_iflags);
	return this;
}
c_Image* c_Image::p_GrabImage(int t_x,int t_y,int t_width,int t_height,int t_frames,int t_flags){
	if(this->m_frames.Length()!=1){
		return 0;
	}
	return ((new c_Image)->m_new())->p_Grab(t_x,t_y,t_width,t_height,t_frames,t_flags,this);
}
int c_Image::p_Width(){
	return m_width;
}
int c_Image::p_Height(){
	return m_height;
}
int c_Image::p_Frames(){
	return m_frames.Length();
}
void c_Image::mark(){
	Object::mark();
	gc_mark_q(m_surface);
	gc_mark_q(m_frames);
	gc_mark_q(m_source);
}
c_GraphicsContext::c_GraphicsContext(){
	m_defaultFont=0;
	m_font=0;
	m_firstChar=0;
	m_matrixSp=0;
	m_ix=FLOAT(1.0);
	m_iy=FLOAT(.0);
	m_jx=FLOAT(.0);
	m_jy=FLOAT(1.0);
	m_tx=FLOAT(.0);
	m_ty=FLOAT(.0);
	m_tformed=0;
	m_matDirty=0;
	m_color_r=FLOAT(.0);
	m_color_g=FLOAT(.0);
	m_color_b=FLOAT(.0);
	m_alpha=FLOAT(.0);
	m_blend=0;
	m_scissor_x=FLOAT(.0);
	m_scissor_y=FLOAT(.0);
	m_scissor_width=FLOAT(.0);
	m_scissor_height=FLOAT(.0);
	m_matrixStack=Array<Float >(192);
}
c_GraphicsContext* c_GraphicsContext::m_new(){
	return this;
}
int c_GraphicsContext::p_Validate(){
	if((m_matDirty)!=0){
		bb_graphics_renderDevice->SetMatrix(bb_graphics_context->m_ix,bb_graphics_context->m_iy,bb_graphics_context->m_jx,bb_graphics_context->m_jy,bb_graphics_context->m_tx,bb_graphics_context->m_ty);
		m_matDirty=0;
	}
	return 0;
}
void c_GraphicsContext::mark(){
	Object::mark();
	gc_mark_q(m_defaultFont);
	gc_mark_q(m_font);
	gc_mark_q(m_matrixStack);
}
c_GraphicsContext* bb_graphics_context;
String bb_data_FixDataPath(String t_path){
	int t_i=t_path.Find(String(L":/",2),0);
	if(t_i!=-1 && t_path.Find(String(L"/",1),0)==t_i+1){
		return t_path;
	}
	if(t_path.StartsWith(String(L"./",2)) || t_path.StartsWith(String(L"/",1))){
		return t_path;
	}
	return String(L"monkey://data/",14)+t_path;
}
c_Frame::c_Frame(){
	m_x=0;
	m_y=0;
}
c_Frame* c_Frame::m_new(int t_x,int t_y){
	this->m_x=t_x;
	this->m_y=t_y;
	return this;
}
c_Frame* c_Frame::m_new2(){
	return this;
}
void c_Frame::mark(){
	Object::mark();
}
c_Image* bb_graphics_LoadImage(String t_path,int t_frameCount,int t_flags){
	gxtkSurface* t_surf=bb_graphics_device->LoadSurface(bb_data_FixDataPath(t_path));
	if((t_surf)!=0){
		return ((new c_Image)->m_new())->p_Init(t_surf,t_frameCount,t_flags);
	}
	return 0;
}
c_Image* bb_graphics_LoadImage2(String t_path,int t_frameWidth,int t_frameHeight,int t_frameCount,int t_flags){
	c_Image* t_atlas=bb_graphics_LoadImage(t_path,1,0);
	if((t_atlas)!=0){
		return t_atlas->p_GrabImage(0,0,t_frameWidth,t_frameHeight,t_frameCount,t_flags);
	}
	return 0;
}
int bb_graphics_SetFont(c_Image* t_font,int t_firstChar){
	if(!((t_font)!=0)){
		if(!((bb_graphics_context->m_defaultFont)!=0)){
			gc_assign(bb_graphics_context->m_defaultFont,bb_graphics_LoadImage(String(L"mojo_font.png",13),96,2));
		}
		t_font=bb_graphics_context->m_defaultFont;
		t_firstChar=32;
	}
	gc_assign(bb_graphics_context->m_font,t_font);
	bb_graphics_context->m_firstChar=t_firstChar;
	return 0;
}
gxtkAudio* bb_audio_device;
int bb_audio_SetAudioDevice(gxtkAudio* t_dev){
	gc_assign(bb_audio_device,t_dev);
	return 0;
}
c_InputDevice::c_InputDevice(){
	m__joyStates=Array<c_JoyState* >(4);
	m__keyDown=Array<bool >(512);
	m__keyHitPut=0;
	m__keyHitQueue=Array<int >(33);
	m__keyHit=Array<int >(512);
	m__charGet=0;
	m__charPut=0;
	m__charQueue=Array<int >(32);
	m__mouseX=FLOAT(.0);
	m__mouseY=FLOAT(.0);
	m__touchX=Array<Float >(32);
	m__touchY=Array<Float >(32);
	m__accelX=FLOAT(.0);
	m__accelY=FLOAT(.0);
	m__accelZ=FLOAT(.0);
}
c_InputDevice* c_InputDevice::m_new(){
	for(int t_i=0;t_i<4;t_i=t_i+1){
		gc_assign(m__joyStates[t_i],(new c_JoyState)->m_new());
	}
	return this;
}
void c_InputDevice::p_PutKeyHit(int t_key){
	if(m__keyHitPut==m__keyHitQueue.Length()){
		return;
	}
	m__keyHit[t_key]+=1;
	m__keyHitQueue[m__keyHitPut]=t_key;
	m__keyHitPut+=1;
}
void c_InputDevice::p_BeginUpdate(){
	for(int t_i=0;t_i<4;t_i=t_i+1){
		c_JoyState* t_state=m__joyStates[t_i];
		if(!BBGame::Game()->PollJoystick(t_i,t_state->m_joyx,t_state->m_joyy,t_state->m_joyz,t_state->m_buttons)){
			break;
		}
		for(int t_j=0;t_j<32;t_j=t_j+1){
			int t_key=256+t_i*32+t_j;
			if(t_state->m_buttons[t_j]){
				if(!m__keyDown[t_key]){
					m__keyDown[t_key]=true;
					p_PutKeyHit(t_key);
				}
			}else{
				m__keyDown[t_key]=false;
			}
		}
	}
}
void c_InputDevice::p_EndUpdate(){
	for(int t_i=0;t_i<m__keyHitPut;t_i=t_i+1){
		m__keyHit[m__keyHitQueue[t_i]]=0;
	}
	m__keyHitPut=0;
	m__charGet=0;
	m__charPut=0;
}
void c_InputDevice::p_KeyEvent(int t_event,int t_data){
	int t_1=t_event;
	if(t_1==1){
		if(!m__keyDown[t_data]){
			m__keyDown[t_data]=true;
			p_PutKeyHit(t_data);
			if(t_data==1){
				m__keyDown[384]=true;
				p_PutKeyHit(384);
			}else{
				if(t_data==384){
					m__keyDown[1]=true;
					p_PutKeyHit(1);
				}
			}
		}
	}else{
		if(t_1==2){
			if(m__keyDown[t_data]){
				m__keyDown[t_data]=false;
				if(t_data==1){
					m__keyDown[384]=false;
				}else{
					if(t_data==384){
						m__keyDown[1]=false;
					}
				}
			}
		}else{
			if(t_1==3){
				if(m__charPut<m__charQueue.Length()){
					m__charQueue[m__charPut]=t_data;
					m__charPut+=1;
				}
			}
		}
	}
}
void c_InputDevice::p_MouseEvent(int t_event,int t_data,Float t_x,Float t_y){
	int t_2=t_event;
	if(t_2==4){
		p_KeyEvent(1,1+t_data);
	}else{
		if(t_2==5){
			p_KeyEvent(2,1+t_data);
			return;
		}else{
			if(t_2==6){
			}else{
				return;
			}
		}
	}
	m__mouseX=t_x;
	m__mouseY=t_y;
	m__touchX[0]=t_x;
	m__touchY[0]=t_y;
}
void c_InputDevice::p_TouchEvent(int t_event,int t_data,Float t_x,Float t_y){
	int t_3=t_event;
	if(t_3==7){
		p_KeyEvent(1,384+t_data);
	}else{
		if(t_3==8){
			p_KeyEvent(2,384+t_data);
			return;
		}else{
			if(t_3==9){
			}else{
				return;
			}
		}
	}
	m__touchX[t_data]=t_x;
	m__touchY[t_data]=t_y;
	if(t_data==0){
		m__mouseX=t_x;
		m__mouseY=t_y;
	}
}
void c_InputDevice::p_MotionEvent(int t_event,int t_data,Float t_x,Float t_y,Float t_z){
	int t_4=t_event;
	if(t_4==10){
	}else{
		return;
	}
	m__accelX=t_x;
	m__accelY=t_y;
	m__accelZ=t_z;
}
int c_InputDevice::p_KeyHit(int t_key){
	if(t_key>0 && t_key<512){
		return m__keyHit[t_key];
	}
	return 0;
}
void c_InputDevice::mark(){
	Object::mark();
	gc_mark_q(m__joyStates);
	gc_mark_q(m__keyDown);
	gc_mark_q(m__keyHitQueue);
	gc_mark_q(m__keyHit);
	gc_mark_q(m__charQueue);
	gc_mark_q(m__touchX);
	gc_mark_q(m__touchY);
}
c_JoyState::c_JoyState(){
	m_joyx=Array<Float >(2);
	m_joyy=Array<Float >(2);
	m_joyz=Array<Float >(2);
	m_buttons=Array<bool >(32);
}
c_JoyState* c_JoyState::m_new(){
	return this;
}
void c_JoyState::mark(){
	Object::mark();
	gc_mark_q(m_joyx);
	gc_mark_q(m_joyy);
	gc_mark_q(m_joyz);
	gc_mark_q(m_buttons);
}
c_InputDevice* bb_input_device;
int bb_input_SetInputDevice(c_InputDevice* t_dev){
	gc_assign(bb_input_device,t_dev);
	return 0;
}
gxtkGraphics* bb_graphics_renderDevice;
int bb_graphics_SetMatrix(Float t_ix,Float t_iy,Float t_jx,Float t_jy,Float t_tx,Float t_ty){
	bb_graphics_context->m_ix=t_ix;
	bb_graphics_context->m_iy=t_iy;
	bb_graphics_context->m_jx=t_jx;
	bb_graphics_context->m_jy=t_jy;
	bb_graphics_context->m_tx=t_tx;
	bb_graphics_context->m_ty=t_ty;
	bb_graphics_context->m_tformed=((t_ix!=FLOAT(1.0) || t_iy!=FLOAT(0.0) || t_jx!=FLOAT(0.0) || t_jy!=FLOAT(1.0) || t_tx!=FLOAT(0.0) || t_ty!=FLOAT(0.0))?1:0);
	bb_graphics_context->m_matDirty=1;
	return 0;
}
int bb_graphics_SetMatrix2(Array<Float > t_m){
	bb_graphics_SetMatrix(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
int bb_graphics_SetColor(Float t_r,Float t_g,Float t_b){
	bb_graphics_context->m_color_r=t_r;
	bb_graphics_context->m_color_g=t_g;
	bb_graphics_context->m_color_b=t_b;
	bb_graphics_renderDevice->SetColor(t_r,t_g,t_b);
	return 0;
}
int bb_graphics_SetAlpha(Float t_alpha){
	bb_graphics_context->m_alpha=t_alpha;
	bb_graphics_renderDevice->SetAlpha(t_alpha);
	return 0;
}
int bb_graphics_SetBlend(int t_blend){
	bb_graphics_context->m_blend=t_blend;
	bb_graphics_renderDevice->SetBlend(t_blend);
	return 0;
}
int bb_graphics_DeviceWidth(){
	return bb_graphics_device->Width();
}
int bb_graphics_DeviceHeight(){
	return bb_graphics_device->Height();
}
int bb_graphics_SetScissor(Float t_x,Float t_y,Float t_width,Float t_height){
	bb_graphics_context->m_scissor_x=t_x;
	bb_graphics_context->m_scissor_y=t_y;
	bb_graphics_context->m_scissor_width=t_width;
	bb_graphics_context->m_scissor_height=t_height;
	bb_graphics_renderDevice->SetScissor(int(t_x),int(t_y),int(t_width),int(t_height));
	return 0;
}
int bb_graphics_BeginRender(){
	gc_assign(bb_graphics_renderDevice,bb_graphics_device);
	bb_graphics_context->m_matrixSp=0;
	bb_graphics_SetMatrix(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0),FLOAT(1.0),FLOAT(0.0),FLOAT(0.0));
	bb_graphics_SetColor(FLOAT(255.0),FLOAT(255.0),FLOAT(255.0));
	bb_graphics_SetAlpha(FLOAT(1.0));
	bb_graphics_SetBlend(0);
	bb_graphics_SetScissor(FLOAT(0.0),FLOAT(0.0),Float(bb_graphics_DeviceWidth()),Float(bb_graphics_DeviceHeight()));
	return 0;
}
int bb_graphics_EndRender(){
	bb_graphics_renderDevice=0;
	return 0;
}
c_BBGameEvent::c_BBGameEvent(){
}
void c_BBGameEvent::mark(){
	Object::mark();
}
int bb_app_EndApp(){
	bbError(String());
	return 0;
}
int bb_input_KeyHit(int t_key){
	return bb_input_device->p_KeyHit(t_key);
}
int bb_graphics_Cls(Float t_r,Float t_g,Float t_b){
	bb_graphics_renderDevice->Cls(t_r,t_g,t_b);
	return 0;
}
int bb_graphics_DrawImage(c_Image* t_image,Float t_x,Float t_y,int t_frame){
	c_Frame* t_f=t_image->m_frames[t_frame];
	bb_graphics_context->p_Validate();
	if((t_image->m_flags&65536)!=0){
		bb_graphics_renderDevice->DrawSurface(t_image->m_surface,t_x-t_image->m_tx,t_y-t_image->m_ty);
	}else{
		bb_graphics_renderDevice->DrawSurface2(t_image->m_surface,t_x-t_image->m_tx,t_y-t_image->m_ty,t_f->m_x,t_f->m_y,t_image->m_width,t_image->m_height);
	}
	return 0;
}
int bb_graphics_PushMatrix(){
	int t_sp=bb_graphics_context->m_matrixSp;
	bb_graphics_context->m_matrixStack[t_sp+0]=bb_graphics_context->m_ix;
	bb_graphics_context->m_matrixStack[t_sp+1]=bb_graphics_context->m_iy;
	bb_graphics_context->m_matrixStack[t_sp+2]=bb_graphics_context->m_jx;
	bb_graphics_context->m_matrixStack[t_sp+3]=bb_graphics_context->m_jy;
	bb_graphics_context->m_matrixStack[t_sp+4]=bb_graphics_context->m_tx;
	bb_graphics_context->m_matrixStack[t_sp+5]=bb_graphics_context->m_ty;
	bb_graphics_context->m_matrixSp=t_sp+6;
	return 0;
}
int bb_graphics_Transform(Float t_ix,Float t_iy,Float t_jx,Float t_jy,Float t_tx,Float t_ty){
	Float t_ix2=t_ix*bb_graphics_context->m_ix+t_iy*bb_graphics_context->m_jx;
	Float t_iy2=t_ix*bb_graphics_context->m_iy+t_iy*bb_graphics_context->m_jy;
	Float t_jx2=t_jx*bb_graphics_context->m_ix+t_jy*bb_graphics_context->m_jx;
	Float t_jy2=t_jx*bb_graphics_context->m_iy+t_jy*bb_graphics_context->m_jy;
	Float t_tx2=t_tx*bb_graphics_context->m_ix+t_ty*bb_graphics_context->m_jx+bb_graphics_context->m_tx;
	Float t_ty2=t_tx*bb_graphics_context->m_iy+t_ty*bb_graphics_context->m_jy+bb_graphics_context->m_ty;
	bb_graphics_SetMatrix(t_ix2,t_iy2,t_jx2,t_jy2,t_tx2,t_ty2);
	return 0;
}
int bb_graphics_Transform2(Array<Float > t_m){
	bb_graphics_Transform(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
int bb_graphics_Translate(Float t_x,Float t_y){
	bb_graphics_Transform(FLOAT(1.0),FLOAT(0.0),FLOAT(0.0),FLOAT(1.0),t_x,t_y);
	return 0;
}
int bb_graphics_Rotate(Float t_angle){
	bb_graphics_Transform((Float)cos((t_angle)*D2R),-(Float)sin((t_angle)*D2R),(Float)sin((t_angle)*D2R),(Float)cos((t_angle)*D2R),FLOAT(0.0),FLOAT(0.0));
	return 0;
}
int bb_graphics_Scale(Float t_x,Float t_y){
	bb_graphics_Transform(t_x,FLOAT(0.0),FLOAT(0.0),t_y,FLOAT(0.0),FLOAT(0.0));
	return 0;
}
int bb_graphics_PopMatrix(){
	int t_sp=bb_graphics_context->m_matrixSp-6;
	bb_graphics_SetMatrix(bb_graphics_context->m_matrixStack[t_sp+0],bb_graphics_context->m_matrixStack[t_sp+1],bb_graphics_context->m_matrixStack[t_sp+2],bb_graphics_context->m_matrixStack[t_sp+3],bb_graphics_context->m_matrixStack[t_sp+4],bb_graphics_context->m_matrixStack[t_sp+5]);
	bb_graphics_context->m_matrixSp=t_sp;
	return 0;
}
int bb_graphics_DrawImage2(c_Image* t_image,Float t_x,Float t_y,Float t_rotation,Float t_scaleX,Float t_scaleY,int t_frame){
	c_Frame* t_f=t_image->m_frames[t_frame];
	bb_graphics_PushMatrix();
	bb_graphics_Translate(t_x,t_y);
	bb_graphics_Rotate(t_rotation);
	bb_graphics_Scale(t_scaleX,t_scaleY);
	bb_graphics_Translate(-t_image->m_tx,-t_image->m_ty);
	bb_graphics_context->p_Validate();
	if((t_image->m_flags&65536)!=0){
		bb_graphics_renderDevice->DrawSurface(t_image->m_surface,FLOAT(0.0),FLOAT(0.0));
	}else{
		bb_graphics_renderDevice->DrawSurface2(t_image->m_surface,FLOAT(0.0),FLOAT(0.0),t_f->m_x,t_f->m_y,t_image->m_width,t_image->m_height);
	}
	bb_graphics_PopMatrix();
	return 0;
}
int bb_graphics_DrawText(String t_text,Float t_x,Float t_y,Float t_xalign,Float t_yalign){
	if(!((bb_graphics_context->m_font)!=0)){
		return 0;
	}
	int t_w=bb_graphics_context->m_font->p_Width();
	int t_h=bb_graphics_context->m_font->p_Height();
	t_x-=(Float)floor(Float(t_w*t_text.Length())*t_xalign);
	t_y-=(Float)floor(Float(t_h)*t_yalign);
	for(int t_i=0;t_i<t_text.Length();t_i=t_i+1){
		int t_ch=(int)t_text[t_i]-bb_graphics_context->m_firstChar;
		if(t_ch>=0 && t_ch<bb_graphics_context->m_font->p_Frames()){
			bb_graphics_DrawImage(bb_graphics_context->m_font,t_x+Float(t_i*t_w),t_y,t_ch);
		}
	}
	return 0;
}
c_Charting_ChartData::c_Charting_ChartData(){
	m_Label=String();
	m_Value=0;
	m_Color=0;
}
c_Charting_ChartData* c_Charting_ChartData::m_new(String t_label,int t_value,BABYLON.Color3* t_color){
	m_Label=t_label;
	m_Value=t_value;
	gc_assign(m_Color,t_color);
	return this;
}
c_Charting_ChartData* c_Charting_ChartData::m_new2(){
	return this;
}
void c_Charting_ChartData::mark(){
	Object::mark();
	gc_mark_q(m_Color);
}
c_List::c_List(){
	m__head=((new c_HeadNode)->m_new());
}
c_List* c_List::m_new(){
	return this;
}
c_Node3* c_List::p_AddLast(c_Charting_ChartData* t_data){
	return (new c_Node3)->m_new(m__head,m__head->m__pred,t_data);
}
c_List* c_List::m_new2(Array<c_Charting_ChartData* > t_data){
	Array<c_Charting_ChartData* > t_=t_data;
	int t_2=0;
	while(t_2<t_.Length()){
		c_Charting_ChartData* t_t=t_[t_2];
		t_2=t_2+1;
		p_AddLast(t_t);
	}
	return this;
}
int c_List::p_Count(){
	int t_n=0;
	c_Node3* t_node=m__head->m__succ;
	while(t_node!=m__head){
		t_node=t_node->m__succ;
		t_n+=1;
	}
	return t_n;
}
c_Enumerator* c_List::p_ObjectEnumerator(){
	return (new c_Enumerator)->m_new(this);
}
void c_List::mark(){
	Object::mark();
	gc_mark_q(m__head);
}
c_Node3::c_Node3(){
	m__succ=0;
	m__pred=0;
	m__data=0;
}
c_Node3* c_Node3::m_new(c_Node3* t_succ,c_Node3* t_pred,c_Charting_ChartData* t_data){
	gc_assign(m__succ,t_succ);
	gc_assign(m__pred,t_pred);
	gc_assign(m__succ->m__pred,this);
	gc_assign(m__pred->m__succ,this);
	gc_assign(m__data,t_data);
	return this;
}
c_Node3* c_Node3::m_new2(){
	return this;
}
void c_Node3::mark(){
	Object::mark();
	gc_mark_q(m__succ);
	gc_mark_q(m__pred);
	gc_mark_q(m__data);
}
c_HeadNode::c_HeadNode(){
}
c_HeadNode* c_HeadNode::m_new(){
	c_Node3::m_new2();
	gc_assign(m__succ,(this));
	gc_assign(m__pred,(this));
	return this;
}
void c_HeadNode::mark(){
	c_Node3::mark();
}
c_Enumerator::c_Enumerator(){
	m__list=0;
	m__curr=0;
}
c_Enumerator* c_Enumerator::m_new(c_List* t_list){
	gc_assign(m__list,t_list);
	gc_assign(m__curr,t_list->m__head->m__succ);
	return this;
}
c_Enumerator* c_Enumerator::m_new2(){
	return this;
}
bool c_Enumerator::p_HasNext(){
	while(m__curr->m__succ->m__pred!=m__curr){
		gc_assign(m__curr,m__curr->m__succ);
	}
	return m__curr!=m__list->m__head;
}
c_Charting_ChartData* c_Enumerator::p_NextObject(){
	c_Charting_ChartData* t_data=m__curr->m__data;
	gc_assign(m__curr,m__curr->m__succ);
	return t_data;
}
void c_Enumerator::mark(){
	Object::mark();
	gc_mark_q(m__list);
	gc_mark_q(m__curr);
}
int bb_random_Seed;
Float bb_random_Rnd(){
	bb_random_Seed=bb_random_Seed*1664525+1013904223|0;
	return Float(bb_random_Seed>>8&16777215)/FLOAT(16777216.0);
}
Float bb_random_Rnd2(Float t_low,Float t_high){
	return bb_random_Rnd3(t_high-t_low)+t_low;
}
Float bb_random_Rnd3(Float t_range){
	return bb_random_Rnd()*t_range;
}
int bb_app_Millisecs(){
	return bb_app__game->Millisecs();
}
int bbInit(){
	GC_CTOR
	bb_app__app=0;
	bb_app__delegate=0;
	bb_app__game=BBGame::Game();
	bb_app__updateRate=0;
	bb_samples_BGame=0;
	bb_samples_CurrentState=-1;
	bb_graphics_device=0;
	bb_graphics_context=(new c_GraphicsContext)->m_new();
	c_Image::m_DefaultFlags=0;
	bb_audio_device=0;
	bb_input_device=0;
	bb_graphics_renderDevice=0;
	bb_random_Seed=1234;
	return 0;
}
void gc_mark(){
	gc_mark_q(bb_app__app);
	gc_mark_q(bb_app__delegate);
	gc_mark_q(bb_samples_BGame);
	gc_mark_q(bb_graphics_device);
	gc_mark_q(bb_graphics_context);
	gc_mark_q(bb_audio_device);
	gc_mark_q(bb_input_device);
	gc_mark_q(bb_graphics_renderDevice);
}
//${TRANSCODE_END}

