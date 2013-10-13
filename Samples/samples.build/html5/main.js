
//Change this to true for a stretchy canvas!
//
var RESIZEABLE_CANVAS=false;

//Start us up!
//
window.onload=function( e ){

	if( RESIZEABLE_CANVAS ){
		window.onresize=function( e ){
			var canvas=document.getElementById( "GameCanvas" );

			//This vs window.innerWidth, which apparently doesn't account for scrollbar?
			var width=document.body.clientWidth;
			
			//This vs document.body.clientHeight, which does weird things - document seems to 'grow'...perhaps canvas resize pushing page down?
			var height=window.innerHeight;			

			canvas.width=width;
			canvas.height=height;
		}
		window.onresize( null );
	}

	BBMonkeyGame.Main( document.getElementById( "GameCanvas" ) );
}

//${CONFIG_BEGIN}
CFG_BINARY_FILES="*.bin|*.dat";
CFG_BRL_GAMETARGET_IMPLEMENTED="1";
CFG_BRL_THREAD_IMPLEMENTED="1";
CFG_CONFIG="release";
CFG_HOST="winnt";
CFG_IMAGE_FILES="*.png|*.jpg";
CFG_LANG="js";
CFG_MOJO_AUTO_SUSPEND_ENABLED="1";
CFG_MOJO_DRIVER_IMPLEMENTED="1";
CFG_MUSIC_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_OPENGL_GLES20_ENABLED="0";
CFG_SAFEMODE="0";
CFG_SOUND_FILES="*.wav|*.ogg|*.mp3|*.m4a";
CFG_TARGET="html5";
CFG_TEXT_FILES=".txt|*.xml|*.json|*.manifest|*.babylon";
//${CONFIG_END}

//${METADATA_BEGIN}
var META_DATA="[mojo_font.png];type=image/png;width=864;height=13;\n[Assets/BandeauEmbleme.png];type=image/png;width=1343;height=134;\n[Assets/Bandeauhaut.png];type=image/png;width=13;height=134;\n[Assets/BtnAbout.png];type=image/png;width=98;height=130;\n[Assets/BtnDownload.png];type=image/png;width=98;height=98;\n[Assets/Download.png];type=image/png;width=76;height=76;\n[Assets/Flare.png];type=image/png;width=256;height=256;\n[Assets/Layer0_0.png];type=image/png;width=800;height=480;\n[Assets/Layer1_0.png];type=image/png;width=800;height=480;\n[Assets/Layer2_0.png];type=image/png;width=800;height=480;\n[Assets/Logo.png];type=image/png;width=217;height=114;\n[Assets/MonsterARun.png];type=image/png;width=640;height=64;\n[Assets/Player.png];type=image/png;width=1408;height=192;\n[Assets/SpotDown.png];type=image/png;width=92;height=92;\n[Assets/SpotLast.png];type=image/png;width=124;height=124;\n[Assets/Tree.png];type=image/png;width=512;height=512;\n[Assets/gradient.png];type=image/png;width=13;height=47;\n[Assets/grass.jpg];type=image/jpg;width=512;height=512;\n[Assets/heightMap.png];type=image/png;width=512;height=512;\n[Assets/kosh.jpg];type=image/jpg;width=480;height=597;\n[Ground.jpg];type=image/jpg;width=512;height=512;\n[Scenes/Dude/0.jpg];type=image/jpg;width=256;height=256;\n[Scenes/Dude/1.jpg];type=image/jpg;width=256;height=256;\n[Scenes/Dude/2.jpg];type=image/jpg;width=256;height=256;\n[Scenes/Dude/3.jpg];type=image/jpg;width=256;height=256;\n[Scenes/Rabbit/0.jpg];type=image/jpg;width=2048;height=2048;\n[SpaceDek/Bidule1.png];type=image/png;width=256;height=256;\n[SpaceDek/BiduleOmega.png];type=image/png;width=256;height=256;\n[SpaceDek/Bidulelaser.png];type=image/png;width=256;height=256;\n[SpaceDek/Biduleshield.png];type=image/png;width=256;height=256;\n[SpaceDek/Boss1DiffuseMap.png];type=image/png;width=1024;height=1024;\n[SpaceDek/Boss1Spec.png];type=image/png;width=256;height=256;\n[SpaceDek/Ennemi1DiffuseMap.png];type=image/png;width=2048;height=2048;\n[SpaceDek/Ennemi1SpecularMap.png];type=image/png;width=256;height=256;\n[SpaceDek/Explo.png];type=image/png;width=128;height=128;\n[SpaceDek/FondSpace.jpg];type=image/jpg;width=2048;height=768;\n[SpaceDek/Laser1.png];type=image/png;width=512;height=512;\n[SpaceDek/Laser2.png];type=image/png;width=512;height=512;\n[SpaceDek/Missile.png];type=image/png;width=512;height=512;\n[SpaceDek/Missile1SE.png];type=image/png;width=128;height=128;\n[SpaceDek/Missilespec.png];type=image/png;width=128;height=128;\n[SpaceDek/Part.jpg];type=image/jpg;width=256;height=256;\n[SpaceDek/Part.png];type=image/png;width=256;height=256;\n[SpaceDek/Premplan.png];type=image/png;width=1024;height=512;\n[SpaceDek/Protec.png];type=image/png;width=64;height=64;\n[SpaceDek/ProtecSpec.png];type=image/png;width=32;height=32;\n[SpaceDek/React2.jpg];type=image/jpg;width=128;height=128;\n[SpaceDek/V1Diff.png];type=image/png;width=1024;height=1024;\n[SpaceDek/VaisseauDiffuseMap.jpg];type=image/jpg;width=2048;height=2048;\n[SpaceDek/VaisseauSpecularMap.jpg];type=image/jpg;width=512;height=512;\n[SpaceDek/react.jpg];type=image/jpg;width=64;height=64;\n[SpaceDek/refext2_nx.jpg];type=image/jpg;width=64;height=64;\n[SpaceDek/refext2_ny.jpg];type=image/jpg;width=64;height=64;\n[SpaceDek/refext2_nz.jpg];type=image/jpg;width=64;height=64;\n[SpaceDek/refext2_px.jpg];type=image/jpg;width=64;height=64;\n[SpaceDek/refext2_py.jpg];type=image/jpg;width=64;height=64;\n[SpaceDek/refext2_pz.jpg];type=image/jpg;width=64;height=64;\n[heightMap.png];type=image/png;width=512;height=512;\n[normalMap.jpg];type=image/jpg;width=512;height=512;\n[skybox/night_nx.jpg];type=image/jpg;width=512;height=512;\n[skybox/night_ny.jpg];type=image/jpg;width=512;height=512;\n[skybox/night_nz.jpg];type=image/jpg;width=512;height=512;\n[skybox/night_px.jpg];type=image/jpg;width=512;height=512;\n[skybox/night_py.jpg];type=image/jpg;width=512;height=512;\n[skybox/night_pz.jpg];type=image/jpg;width=512;height=512;\n[skybox/skybox_nx.jpg];type=image/jpg;width=512;height=512;\n[skybox/skybox_ny.jpg];type=image/jpg;width=512;height=512;\n[skybox/skybox_nz.jpg];type=image/jpg;width=512;height=512;\n[skybox/skybox_px.jpg];type=image/jpg;width=512;height=512;\n[skybox/skybox_py.jpg];type=image/jpg;width=512;height=512;\n[skybox/skybox_pz.jpg];type=image/jpg;width=512;height=512;\n";
//${METADATA_END}

//${TRANSCODE_BEGIN}

// Javascript Monkey runtime.
//
// Placed into the public domain 24/02/2011.
// No warranty implied; use at your own risk.

//***** JavaScript Runtime *****

var D2R=0.017453292519943295;
var R2D=57.29577951308232;

var err_info="";
var err_stack=[];

var dbg_index=0;

function push_err(){
	err_stack.push( err_info );
}

function pop_err(){
	err_info=err_stack.pop();
}

function stackTrace(){
	if( !err_info.length ) return "";
	var str=err_info+"\n";
	for( var i=err_stack.length-1;i>0;--i ){
		str+=err_stack[i]+"\n";
	}
	return str;
}

function print( str ){
	var cons=document.getElementById( "GameConsole" );
	if( cons ){
		cons.value+=str+"\n";
		cons.scrollTop=cons.scrollHeight-cons.clientHeight;
	}else if( window.console!=undefined ){
		window.console.log( str );
	}
	return 0;
}

function alertError( err ){
	if( typeof(err)=="string" && err=="" ) return;
	alert( "Monkey Runtime Error : "+err.toString()+"\n\n"+stackTrace() );
}

function error( err ){
	throw err;
}

function debugLog( str ){
	if( window.console!=undefined ) window.console.log( str );
}

function debugStop(){
	debugger;	//	error( "STOP" );
}

function dbg_object( obj ){
	if( obj ) return obj;
	error( "Null object access" );
}

function dbg_charCodeAt( str,index ){
	if( index<0 || index>=str.length ) error( "Character index out of range" );
	return str.charCodeAt( index );
}

function dbg_array( arr,index ){
	if( index<0 || index>=arr.length ) error( "Array index out of range" );
	dbg_index=index;
	return arr;
}

function new_bool_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=false;
	return arr;
}

function new_number_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=0;
	return arr;
}

function new_string_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]='';
	return arr;
}

function new_array_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=[];
	return arr;
}

function new_object_array( len ){
	var arr=Array( len );
	for( var i=0;i<len;++i ) arr[i]=null;
	return arr;
}

function resize_bool_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=false;
	return arr;
}

function resize_number_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=0;
	return arr;
}

function resize_string_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]="";
	return arr;
}

function resize_array_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=[];
	return arr;
}

function resize_object_array( arr,len ){
	var i=arr.length;
	arr=arr.slice(0,len);
	if( len<=i ) return arr;
	arr.length=len;
	while( i<len ) arr[i++]=null;
	return arr;
}

function string_compare( lhs,rhs ){
	var n=Math.min( lhs.length,rhs.length ),i,t;
	for( i=0;i<n;++i ){
		t=lhs.charCodeAt(i)-rhs.charCodeAt(i);
		if( t ) return t;
	}
	return lhs.length-rhs.length;
}

function string_replace( str,find,rep ){	//no unregex replace all?!?
	var i=0;
	for(;;){
		i=str.indexOf( find,i );
		if( i==-1 ) return str;
		str=str.substring( 0,i )+rep+str.substring( i+find.length );
		i+=rep.length;
	}
}

function string_trim( str ){
	var i=0,i2=str.length;
	while( i<i2 && str.charCodeAt(i)<=32 ) i+=1;
	while( i2>i && str.charCodeAt(i2-1)<=32 ) i2-=1;
	return str.slice( i,i2 );
}

function string_startswith( str,substr ){
	return substr.length<=str.length && str.slice(0,substr.length)==substr;
}

function string_endswith( str,substr ){
	return substr.length<=str.length && str.slice(str.length-substr.length,str.length)==substr;
}

function string_tochars( str ){
	var arr=new Array( str.length );
	for( var i=0;i<str.length;++i ) arr[i]=str.charCodeAt(i);
	return arr;
}

function string_fromchars( chars ){
	var str="",i;
	for( i=0;i<chars.length;++i ){
		str+=String.fromCharCode( chars[i] );
	}
	return str;
}

function object_downcast( obj,clas ){
	if( obj instanceof clas ) return obj;
	return null;
}

function object_implements( obj,iface ){
	if( obj && obj.implments && obj.implments[iface] ) return obj;
	return null;
}

function extend_class( clas ){
	var tmp=function(){};
	tmp.prototype=clas.prototype;
	return new tmp;
}

function ThrowableObject(){
}

ThrowableObject.prototype.toString=function(){ 
	return "Uncaught Monkey Exception"; 
}

function BBGameEvent(){}
BBGameEvent.KeyDown=1;
BBGameEvent.KeyUp=2;
BBGameEvent.KeyChar=3;
BBGameEvent.MouseDown=4;
BBGameEvent.MouseUp=5;
BBGameEvent.MouseMove=6;
BBGameEvent.TouchDown=7;
BBGameEvent.TouchUp=8;
BBGameEvent.TouchMove=9;
BBGameEvent.MotionAccel=10;

function BBGameDelegate(){}
BBGameDelegate.prototype.StartGame=function(){}
BBGameDelegate.prototype.SuspendGame=function(){}
BBGameDelegate.prototype.ResumeGame=function(){}
BBGameDelegate.prototype.UpdateGame=function(){}
BBGameDelegate.prototype.RenderGame=function(){}
BBGameDelegate.prototype.KeyEvent=function( ev,data ){}
BBGameDelegate.prototype.MouseEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.TouchEvent=function( ev,data,x,y ){}
BBGameDelegate.prototype.MotionEvent=function( ev,data,x,y,z ){}
BBGameDelegate.prototype.DiscardGraphics=function(){}

function BBGame(){
	BBGame._game=this;
	this._delegate=null;
	this._keyboardEnabled=false;
	this._updateRate=0;
	this._started=false;
	this._suspended=false;
	this._debugExs=(CFG_CONFIG=="debug");
	this._startms=Date.now();
}

BBGame.Game=function(){
	return BBGame._game;
}

BBGame.prototype.SetDelegate=function( delegate ){
	this._delegate=delegate;
}

BBGame.prototype.Delegate=function(){
	return this._delegate;
}

BBGame.prototype.SetUpdateRate=function( updateRate ){
	this._updateRate=updateRate;
}

BBGame.prototype.SetKeyboardEnabled=function( keyboardEnabled ){
	this._keyboardEnabled=keyboardEnabled;
}

BBGame.prototype.Started=function(){
	return this._started;
}

BBGame.prototype.Suspended=function(){
	return this._suspended;
}

BBGame.prototype.Millisecs=function(){
	return Date.now()-this._startms;
}

BBGame.prototype.GetDate=function( date ){
	var n=date.length;
	if( n>0 ){
		var t=new Date();
		date[0]=t.getFullYear();
		if( n>1 ){
			date[1]=t.getMonth()+1;
			if( n>2 ){
				date[2]=t.getDate();
				if( n>3 ){
					date[3]=t.getHours();
					if( n>4 ){
						date[4]=t.getMinutes();
						if( n>5 ){
							date[5]=t.getSeconds();
							if( n>6 ){
								date[6]=t.getMilliseconds();
							}
						}
					}
				}
			}
		}
	}
}

BBGame.prototype.SaveState=function( state ){
	localStorage.setItem( "monkeystate@"+document.URL,state );	//key can't start with dot in Chrome!
	return 1;
}

BBGame.prototype.LoadState=function(){
	var state=localStorage.getItem( "monkeystate@"+document.URL );
	if( state ) return state;
	return "";
}

BBGame.prototype.LoadString=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );
	
	xhr.send( null );
	
	if( xhr.status==200 || xhr.status==0 ) return xhr.responseText;
	
	return "";
}

BBGame.prototype.PollJoystick=function( port,joyx,joyy,joyz,buttons ){
	return false;
}

BBGame.prototype.OpenUrl=function( url ){
	window.location=url;
}

BBGame.prototype.SetMouseVisible=function( visible ){
	if( visible ){
		this._canvas.style.cursor='default';	
	}else{
		this._canvas.style.cursor="url('data:image/cur;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA55ZXBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOeWVxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnllcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9////////////////////+////////f/////////8%3D'), auto";
	}
}

BBGame.prototype.PathToFilePath=function( path ){
	return "";
}

//***** js Game *****

BBGame.prototype.PathToUrl=function( path ){
	return path;
}

BBGame.prototype.LoadData=function( path ){

	var xhr=new XMLHttpRequest();
	xhr.open( "GET",this.PathToUrl( path ),false );

	if( xhr.overrideMimeType ) xhr.overrideMimeType( "text/plain; charset=x-user-defined" );

	xhr.send( null );
	if( xhr.status!=200 && xhr.status!=0 ) return null;

	var r=xhr.responseText;
	var buf=new ArrayBuffer( r.length );
	var bytes=new Int8Array( buf );
	for( var i=0;i<r.length;++i ){
		bytes[i]=r.charCodeAt( i );
	}
	return buf;
}

//***** INTERNAL ******

BBGame.prototype.Die=function( ex ){

	this._delegate=new BBGameDelegate();
	
	if( !ex.toString() ){
		return;
	}
	
	if( this._debugExs ){
		print( "Monkey Runtime Error : "+ex.toString() );
		print( stackTrace() );
	}
	
	throw ex;
}

BBGame.prototype.StartGame=function(){

	if( this._started ) return;
	this._started=true;
	
	if( this._debugExs ){
		try{
			this._delegate.StartGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.StartGame();
	}
}

BBGame.prototype.SuspendGame=function(){

	if( !this._started || this._suspended ) return;
	this._suspended=true;
	
	if( this._debugExs ){
		try{
			this._delegate.SuspendGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.SuspendGame();
	}
}

BBGame.prototype.ResumeGame=function(){

	if( !this._started || !this._suspended ) return;
	this._suspended=false;
	
	if( this._debugExs ){
		try{
			this._delegate.ResumeGame();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.ResumeGame();
	}
}

BBGame.prototype.UpdateGame=function(){

	if( !this._started || this._suspended ) return;

	if( this._debugExs ){
		try{
			this._delegate.UpdateGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.UpdateGame();
	}
}

BBGame.prototype.RenderGame=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.RenderGame();
		}catch( ex ){
			this.Die( ex );
		}	
	}else{
		this._delegate.RenderGame();
	}
}

BBGame.prototype.KeyEvent=function( ev,data ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.KeyEvent( ev,data );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.KeyEvent( ev,data );
	}
}

BBGame.prototype.MouseEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MouseEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MouseEvent( ev,data,x,y );
	}
}

BBGame.prototype.TouchEvent=function( ev,data,x,y ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.TouchEvent( ev,data,x,y );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.TouchEvent( ev,data,x,y );
	}
}

BBGame.prototype.MotionEvent=function( ev,data,x,y,z ){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.MotionEvent( ev,data,x,y,z );
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.MotionEvent( ev,data,x,y,z );
	}
}

BBGame.prototype.DiscardGraphics=function(){

	if( !this._started ) return;
	
	if( this._debugExs ){
		try{
			this._delegate.DiscardGraphics();
		}catch( ex ){
			this.Die( ex );
		}
	}else{
		this._delegate.DiscardGraphics();
	}
}

function BBHtml5Game( canvas ){
	BBGame.call( this );
	BBHtml5Game._game=this;
	this._canvas=canvas;
	this._loading=0;
	this._timerSeq=0;
	this._gl=null;
	if( CFG_OPENGL_GLES20_ENABLED=="1" ){
		this._gl=this._canvas.getContext( "webgl" );
		if( !this._gl ) this._gl=this._canvas.getContext( "experimental-webgl" );
		if( !this._gl ) this.Die( "Can't create WebGL" );
		gl=this._gl;
	}
}

BBHtml5Game.prototype=extend_class( BBGame );

BBHtml5Game.Html5Game=function(){
	return BBHtml5Game._game;
}

BBHtml5Game.prototype.ValidateUpdateTimer=function(){

	++this._timerSeq;

	if( !this._updateRate || this._suspended ) return;
	
	var game=this;
	var updatePeriod=1000.0/this._updateRate;
	var nextUpdate=Date.now()+updatePeriod;
	var seq=game._timerSeq;
	
	function timeElapsed(){
		if( seq!=game._timerSeq ) return;

		var time;		
		var updates;
		
		for( updates=0;updates<4;++updates ){
		
			nextUpdate+=updatePeriod;
			
			game.UpdateGame();
			if( seq!=game._timerSeq ) return;
			
			if( nextUpdate-Date.now()>0 ) break;
		}
		
		game.RenderGame();
		if( seq!=game._timerSeq ) return;
		
		if( updates==4 ){
			nextUpdate=Date.now();
			setTimeout( timeElapsed,0 );
		}else{
			var delay=nextUpdate-Date.now();
			setTimeout( timeElapsed,delay>0 ? delay : 0 );
		}
	}

	setTimeout( timeElapsed,updatePeriod );
}

//***** BBGame methods *****

BBHtml5Game.prototype.SetUpdateRate=function( updateRate ){

	BBGame.prototype.SetUpdateRate.call( this,updateRate );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.GetMetaData=function( path,key ){
	if( path.indexOf( "monkey://data/" )!=0 ) return "";
	path=path.slice(14);

	var i=META_DATA.indexOf( "["+path+"]" );
	if( i==-1 ) return "";
	i+=path.length+2;

	var e=META_DATA.indexOf( "\n",i );
	if( e==-1 ) e=META_DATA.length;

	i=META_DATA.indexOf( ";"+key+"=",i )
	if( i==-1 || i>=e ) return "";
	i+=key.length+2;

	e=META_DATA.indexOf( ";",i );
	if( e==-1 ) return "";

	return META_DATA.slice( i,e );
}

BBHtml5Game.prototype.PathToUrl=function( path ){
	if( path.indexOf( "monkey:" )!=0 ){
		return path;
	}else if( path.indexOf( "monkey://data/" )==0 ) {
		return "data/"+path.slice( 14 );
	}
	return "";
}

BBHtml5Game.prototype.GetLoading=function(){
	return this._loading;
}

BBHtml5Game.prototype.IncLoading=function(){
	++this._loading;
	return this._loading;
}

BBHtml5Game.prototype.DecLoading=function(){
	--this._loading;
	return this._loading;
}

BBHtml5Game.prototype.GetCanvas=function(){
	return this._canvas;
}

BBHtml5Game.prototype.GetWebGL=function(){
	return this._gl;
}

//***** INTERNAL *****

BBHtml5Game.prototype.UpdateGame=function(){

	if( !this._loading ) BBGame.prototype.UpdateGame.call( this );
}

BBHtml5Game.prototype.SuspendGame=function(){

	BBGame.prototype.SuspendGame.call( this );
	
	BBGame.prototype.RenderGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.ResumeGame=function(){

	BBGame.prototype.ResumeGame.call( this );
	
	this.ValidateUpdateTimer();
}

BBHtml5Game.prototype.Run=function(){

	var game=this;
	var canvas=game._canvas;
	
	var touchIds=new Array( 32 );
	for( i=0;i<32;++i ) touchIds[i]=-1;
	
	function eatEvent( e ){
		if( e.stopPropagation ){
			e.stopPropagation();
			e.preventDefault();
		}else{
			e.cancelBubble=true;
			e.returnValue=false;
		}
	}
	
	function keyToChar( key ){
		switch( key ){
		case 8:case 9:case 13:case 27:case 32:return key;
		case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 45:return key|0x10000;
		case 46:return 127;
		}
		return 0;
	}
	
	function mouseX( e ){
		var x=e.clientX+document.body.scrollLeft;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x;
	}
	
	function mouseY( e ){
		var y=e.clientY+document.body.scrollTop;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y;
	}

	function touchX( touch ){
		var x=touch.pageX;
		var c=canvas;
		while( c ){
			x-=c.offsetLeft;
			c=c.offsetParent;
		}
		return x;
	}			
	
	function touchY( touch ){
		var y=touch.pageY;
		var c=canvas;
		while( c ){
			y-=c.offsetTop;
			c=c.offsetParent;
		}
		return y;
	}
	
	canvas.onkeydown=function( e ){
		game.KeyEvent( BBGameEvent.KeyDown,e.keyCode );
		var chr=keyToChar( e.keyCode );
		if( chr ) game.KeyEvent( BBGameEvent.KeyChar,chr );
		if( e.keyCode<48 || (e.keyCode>111 && e.keyCode<122) ) eatEvent( e );
	}

	canvas.onkeyup=function( e ){
		game.KeyEvent( BBGameEvent.KeyUp,e.keyCode );
	}

	canvas.onkeypress=function( e ){
		if( e.charCode ){
			game.KeyEvent( BBGameEvent.KeyChar,e.charCode );
		}else if( e.which ){
			game.KeyEvent( BBGameEvent.KeyChar,e.which );
		}
	}

	canvas.onmousedown=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseDown,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseDown,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseDown,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmouseup=function( e ){
		switch( e.button ){
		case 0:game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );break;
		case 1:game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );break;
		case 2:game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );break;
		}
		eatEvent( e );
	}
	
	canvas.onmousemove=function( e ){
		game.MouseEvent( BBGameEvent.MouseMove,-1,mouseX(e),mouseY(e) );
		eatEvent( e );
	}

	canvas.onmouseout=function( e ){
		game.MouseEvent( BBGameEvent.MouseUp,0,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,1,mouseX(e),mouseY(e) );
		game.MouseEvent( BBGameEvent.MouseUp,2,mouseX(e),mouseY(e) );
		eatEvent( e );
	}

	canvas.ontouchstart=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=-1 ) continue;
				touchIds[j]=touch.identifier;
				game.TouchEvent( BBGameEvent.TouchDown,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchmove=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				game.TouchEvent( BBGameEvent.TouchMove,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	canvas.ontouchend=function( e ){
		for( var i=0;i<e.changedTouches.length;++i ){
			var touch=e.changedTouches[i];
			for( var j=0;j<32;++j ){
				if( touchIds[j]!=touch.identifier ) continue;
				touchIds[j]=-1;
				game.TouchEvent( BBGameEvent.TouchUp,j,touchX(touch),touchY(touch) );
				break;
			}
		}
		eatEvent( e );
	}
	
	window.ondevicemotion=function( e ){
		var tx=e.accelerationIncludingGravity.x/9.81;
		var ty=e.accelerationIncludingGravity.y/9.81;
		var tz=e.accelerationIncludingGravity.z/9.81;
		var x,y;
		switch( window.orientation ){
		case   0:x=+tx;y=-ty;break;
		case 180:x=-tx;y=+ty;break;
		case  90:x=-ty;y=-tx;break;
		case -90:x=+ty;y=+tx;break;
		}
		game.MotionEvent( BBGameEvent.MotionAccel,0,x,y,tz );
		eatEvent( e );
	}

	canvas.onfocus=function( e ){
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.ResumeGame();
		}
	}
	
	canvas.onblur=function( e ){
		for( var i=0;i<256;++i ) game.KeyEvent( BBGameEvent.KeyUp,i );
		if( CFG_MOJO_AUTO_SUSPEND_ENABLED=="1" ){
			game.SuspendGame();
		}
	}
	
	canvas.focus();
	
	game.StartGame();

	game.RenderGame();
}

function BBMonkeyGame( canvas ){
	BBHtml5Game.call( this,canvas );
}

BBMonkeyGame.prototype=extend_class( BBHtml5Game );

BBMonkeyGame.Main=function( canvas ){

	var game=new BBMonkeyGame( canvas );

	try{

		bbInit();
		bbMain();

	}catch( ex ){
	
		game.Die( ex );
		return;
	}

	if( !game.Delegate() ) return;
	
	game.Run();
}
var BABYLON=BABYLON||{};(function(){BABYLON.Ray=function(origin,direction){this.origin=origin;this.direction=direction;};BABYLON.Ray.prototype.intersectsBox=function(box){var d=0.0;var maxValue=Number.MAX_VALUE;if(Math.abs(this.direction.x)<0.0000001){if(this.origin.x<box.minimum.x||this.origin.x>box.maximum.x){return false;}}else{var inv=1.0/this.direction.x;var min=(box.minimum.x-this.origin.x)*inv;var max=(box.maximum.x-this.origin.x)*inv;if(min>max){var temp=min;min=max;max=temp;}d=Math.max(min,d);maxValue=Math.min(max,maxValue);if(d>maxValue){return false;}}if(Math.abs(this.direction.y)<0.0000001){if(this.origin.y<box.minimum.y||this.origin.y>box.maximum.y){return false;}}else{var inv=1.0/this.direction.y;var min=(box.minimum.y-this.origin.y)*inv;var max=(box.maximum.y-this.origin.y)*inv;if(min>max){var temp=min;min=max;max=temp;}d=Math.max(min,d);maxValue=Math.min(max,maxValue);if(d>maxValue){return false;}}if(Math.abs(this.direction.z)<0.0000001){if(this.origin.z<box.minimum.z||this.origin.z>box.maximum.z){return false;}}else{var inv=1.0/this.direction.z;var min=(box.minimum.z-this.origin.z)*inv;var max=(box.maximum.z-this.origin.z)*inv;if(min>max){var temp=min;min=max;max=temp;}d=Math.max(min,d);maxValue=Math.min(max,maxValue);if(d>maxValue){return false;}}return true;};BABYLON.Ray.prototype.intersectsSphere=function(sphere){var x=sphere.center.x-this.origin.x;var y=sphere.center.y-this.origin.y;var z=sphere.center.z-this.origin.z;var pyth=(x*x)+(y*y)+(z*z);var rr=sphere.radius*sphere.radius;if(pyth<=rr){return true;}var dot=(x*this.direction.x)+(y*this.direction.y)+(z*this.direction.z);if(dot<0.0){return false;}var temp=pyth-(dot*dot);return temp<=rr;};BABYLON.Ray.prototype.intersectsTriangle=function(vertex0,vertex1,vertex2){var edge1=vertex1.subtract(vertex0);var edge2=vertex2.subtract(vertex0);var pvec=BABYLON.Vector3.Cross(this.direction,edge2);var det=BABYLON.Vector3.Dot(edge1,pvec);if(det===0){return{hit:false,distance:0,bu:0,bv:0};}var invdet=1/det;var tvec=this.origin.subtract(vertex0);var bu=BABYLON.Vector3.Dot(tvec,pvec)*invdet;if(bu<0||bu>1.0){return{hit:false,distance:0,bu:bu,bv:0};}var qvec=BABYLON.Vector3.Cross(tvec,edge1);bv=BABYLON.Vector3.Dot(this.direction,qvec)*invdet;if(bv<0||bu+bv>1.0){return{hit:false,distance:0,bu:bu,bv:bv};}distance=BABYLON.Vector3.Dot(edge2,qvec)*invdet;return{hit:true,distance:distance,bu:bu,bv:bv};};BABYLON.Ray.CreateNew=function(x,y,viewportWidth,viewportHeight,world,view,projection){var start=BABYLON.Vector3.Unproject(new BABYLON.Vector3(x,y,0),viewportWidth,viewportHeight,world,view,projection);var end=BABYLON.Vector3.Unproject(new BABYLON.Vector3(x,y,1),viewportWidth,viewportHeight,world,view,projection);var direction=end.subtract(start);direction.normalize();return new BABYLON.Ray(start,direction);};BABYLON.Color3=function(initialR,initialG,initialB){this.r=initialR;this.g=initialG;this.b=initialB;};BABYLON.Color3.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+"}";};BABYLON.Color3.prototype.multiply=function(otherColor){return new BABYLON.Color3(this.r*otherColor.r,this.g*otherColor.g,this.b*otherColor.b);};BABYLON.Color3.prototype.multiplyToRef=function(otherColor,result){result.r=this.r*otherColor.r;result.g=this.g*otherColor.g;result.b=this.b*otherColor.b;};BABYLON.Color3.prototype.equals=function(otherColor){return this.r===otherColor.r&&this.g===otherColor.g&&this.b===otherColor.b;};BABYLON.Color3.prototype.scale=function(scale){return new BABYLON.Color3(this.r*scale,this.g*scale,this.b*scale);};BABYLON.Color3.prototype.scaleToRef=function(scale,result){result.r=this.r*scale;result.g=this.g*scale;result.b=this.b*scale;};BABYLON.Color3.prototype.clone=function(){return new BABYLON.Color3(this.r,this.g,this.b);};BABYLON.Color3.prototype.copyFrom=function(source){this.r=source.r;this.g=source.g;this.b=source.b;};BABYLON.Color3.prototype.copyFromFloats=function(r,g,b){this.r=r;this.g=g;this.b=b;};BABYLON.Color3.FromArray=function(array){return new BABYLON.Color3(array[0],array[1],array[2]);};BABYLON.Color4=function(initialR,initialG,initialB,initialA){this.r=initialR;this.g=initialG;this.b=initialB;this.a=initialA;};BABYLON.Color4.prototype.addInPlace=function(right){this.r+=right.r;this.g+=right.g;this.b+=right.b;this.a+=right.a;};BABYLON.Color4.prototype.add=function(right){return new BABYLON.Color4(this.r+right.r,this.g+right.g,this.b+right.b,this.a+right.a);};BABYLON.Color4.prototype.subtract=function(right){return new BABYLON.Color4(this.r-right.r,this.g-right.g,this.b-right.b,this.a-right.a);};BABYLON.Color4.prototype.subtractToRef=function(right,result){result.r=this.r-right.r;result.g=this.g-right.g;result.b=this.b-right.b;result.a=this.a-right.a;};BABYLON.Color4.prototype.scale=function(scale){return new BABYLON.Color4(this.r*scale,this.g*scale,this.b*scale,this.a*scale);};BABYLON.Color4.prototype.scaleToRef=function(scale,result){result.r=this.r*scale;result.g=this.g*scale;result.b=this.b*scale;result.a=this.a*scale;};BABYLON.Color4.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+" A:"+this.a+"}";};BABYLON.Color4.prototype.clone=function(){return new BABYLON.Color4(this.r,this.g,this.b,this.a);};BABYLON.Color4.Lerp=function(left,right,amount){var result=new BABYLON.Color4(0,0,0,0);BABYLON.Color4.LerpToRef(left,right,amount,result);return result;};BABYLON.Color4.LerpToRef=function(left,right,amount,result){result.r=left.r+(right.r-left.r)*amount;result.g=left.g+(right.g-left.g)*amount;result.b=left.b+(right.b-left.b)*amount;result.a=left.a+(right.a-left.a)*amount;};BABYLON.Color4.FromArray=function(array,offset){if(!offset){offset=0;}return new BABYLON.Color4(array[offset],array[offset+1],array[offset+2],array[offset+3]);};BABYLON.Vector2=function(initialX,initialY){this.x=initialX;this.y=initialY;};BABYLON.Vector2.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+"}";};BABYLON.Vector2.prototype.add=function(otherVector){return new BABYLON.Vector2(this.x+otherVector.x,this.y+otherVector.y);};BABYLON.Vector2.prototype.subtract=function(otherVector){return new BABYLON.Vector2(this.x-otherVector.x,this.y-otherVector.y);};BABYLON.Vector2.prototype.negate=function(){return new BABYLON.Vector2(-this.x,-this.y);};BABYLON.Vector2.prototype.scaleInPlace=function(scale){this.x*=scale;this.y*=scale;};BABYLON.Vector2.prototype.scale=function(scale){return new BABYLON.Vector2(this.x*scale,this.y*scale);};BABYLON.Vector2.prototype.equals=function(otherVector){return this.x===otherVector.x&&this.y===otherVector.y;};BABYLON.Vector2.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y);};BABYLON.Vector2.prototype.lengthSquared=function(){return(this.x*this.x+this.y*this.y);};BABYLON.Vector2.prototype.normalize=function(){var len=this.length();if(len===0)return;var num=1.0/len;this.x*=num;this.y*=num;};BABYLON.Vector2.prototype.clone=function(){return new BABYLON.Vector2(this.x,this.y);};BABYLON.Vector2.Zero=function(){return new BABYLON.Vector2(0,0);};BABYLON.Vector2.CatmullRom=function(value1,value2,value3,value4,amount){var squared=amount*amount;var cubed=amount*squared;var x=0.5*((((2.0*value2.x)+((-value1.x+value3.x)*amount))+(((((2.0*value1.x)-(5.0*value2.x))+(4.0*value3.x))-value4.x)*squared))+((((-value1.x+(3.0*value2.x))-(3.0*value3.x))+value4.x)*cubed));var y=0.5*((((2.0*value2.y)+((-value1.y+value3.y)*amount))+(((((2.0*value1.y)-(5.0*value2.y))+(4.0*value3.y))-value4.y)*squared))+((((-value1.y+(3.0*value2.y))-(3.0*value3.y))+value4.y)*cubed));return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Clamp=function(value,min,max){var x=value.x;x=(x>max.x)?max.x:x;x=(x<min.x)?min.x:x;var y=value.y;y=(y>max.y)?max.y:y;y=(y<min.y)?min.y:y;return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Hermite=function(value1,tangent1,value2,tangent2,amount){var squared=amount*amount;var cubed=amount*squared;var part1=((2.0*cubed)-(3.0*squared))+1.0;var part2=(-2.0*cubed)+(3.0*squared);var part3=(cubed-(2.0*squared))+amount;var part4=cubed-squared;var x=(((value1.x*part1)+(value2.x*part2))+(tangent1.x*part3))+(tangent2.x*part4);var y=(((value1.y*part1)+(value2.y*part2))+(tangent1.y*part3))+(tangent2.y*part4);return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Lerp=function(start,end,amount){var x=start.x+((end.x-start.x)*amount);var y=start.y+((end.y-start.y)*amount);return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Dot=function(left,right){return left.x*right.x+left.y*right.y;};BABYLON.Vector2.Normalize=function(vector){var newVector=vector.clone();newVector.normalize();return newVector;};BABYLON.Vector2.Minimize=function(left,right){var x=(left.x<right.x)?left.x:right.x;var y=(left.y<right.y)?left.y:right.y;return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Maximize=function(left,right){var x=(left.x>right.x)?left.x:right.x;var y=(left.y>right.y)?left.y:right.y;return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Transform=function(vector,transformation){var x=(vector.x*transformation.m[0])+(vector.y*transformation.m[4]);var y=(vector.x*transformation.m[1])+(vector.y*transformation.m[5]);return new BABYLON.Vector2(x,y);};BABYLON.Vector2.Distance=function(value1,value2){return Math.sqrt(BABYLON.Vector2.DistanceSquared(value1,value2));};BABYLON.Vector2.DistanceSquared=function(value1,value2){var x=value1.x-value2.x;var y=value1.y-value2.y;return(x*x)+(y*y);};BABYLON.Vector3=function(initialX,initialY,initialZ){this.x=initialX;this.y=initialY;this.z=initialZ;};BABYLON.Vector3.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+"}";};BABYLON.Vector3.prototype.toArray=function(array,index){array[index]=this.x;array[index+1]=this.y;array[index+2]=this.z;};BABYLON.Vector3.prototype.addInPlace=function(otherVector){this.x+=otherVector.x;this.y+=otherVector.y;this.z+=otherVector.z;};BABYLON.Vector3.prototype.add=function(otherVector){return new BABYLON.Vector3(this.x+otherVector.x,this.y+otherVector.y,this.z+otherVector.z);};BABYLON.Vector3.prototype.addToRef=function(otherVector,result){result.x=this.x+otherVector.x;result.y=this.y+otherVector.y;result.z=this.z+otherVector.z;};BABYLON.Vector3.prototype.subtractInPlace=function(otherVector){this.x-=otherVector.x;this.y-=otherVector.y;this.z-=otherVector.z;};BABYLON.Vector3.prototype.subtract=function(otherVector){return new BABYLON.Vector3(this.x-otherVector.x,this.y-otherVector.y,this.z-otherVector.z);};BABYLON.Vector3.prototype.subtractToRef=function(otherVector,result){result.x=this.x-otherVector.x;result.y=this.y-otherVector.y;result.z=this.z-otherVector.z;};BABYLON.Vector3.prototype.subtractFromFloats=function(x,y,z){return new BABYLON.Vector3(this.x-x,this.y-y,this.z-z);};BABYLON.Vector3.prototype.subtractFromFloatsToRef=function(x,y,z,result){result.x=this.x-x;result.y=this.y-y;result.z=this.z-z;};BABYLON.Vector3.prototype.negate=function(){return new BABYLON.Vector3(-this.x,-this.y,-this.z);};BABYLON.Vector3.prototype.scaleInPlace=function(scale){this.x*=scale;this.y*=scale;this.z*=scale;};BABYLON.Vector3.prototype.scale=function(scale){return new BABYLON.Vector3(this.x*scale,this.y*scale,this.z*scale);};BABYLON.Vector3.prototype.scaleToRef=function(scale,result){result.x=this.x*scale;result.y=this.y*scale;result.z=this.z*scale;};BABYLON.Vector3.prototype.equals=function(otherVector){return this.x===otherVector.x&&this.y===otherVector.y&&this.z===otherVector.z;};BABYLON.Vector3.prototype.equalsToFloats=function(x,y,z){return this.x===x&&this.y===y&&this.z===z;};BABYLON.Vector3.prototype.multiplyInPlace=function(otherVector){this.x*=otherVector.x;this.y*=otherVector.y;this.z*=otherVector.z;};BABYLON.Vector3.prototype.multiply=function(otherVector){return new BABYLON.Vector3(this.x*otherVector.x,this.y*otherVector.y,this.z*otherVector.z);};BABYLON.Vector3.prototype.multiplyToRef=function(otherVector,result){result.x=this.x*otherVector.x;result.y=this.y*otherVector.y;result.z=this.z*otherVector.z;};BABYLON.Vector3.prototype.multiplyByFloats=function(x,y,z){return new BABYLON.Vector3(this.x*x,this.y*y,this.z*z);};BABYLON.Vector3.prototype.divide=function(otherVector){return new BABYLON.Vector3(this.x/otherVector.x,this.y/otherVector.y,this.z/otherVector.z);};BABYLON.Vector3.prototype.divideToRef=function(otherVector,result){result.x=this.x/otherVector.x;result.y=this.y/otherVector.y;result.z=this.z/otherVector.z;};BABYLON.Vector3.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);};BABYLON.Vector3.prototype.lengthSquared=function(){return(this.x*this.x+this.y*this.y+this.z*this.z);};BABYLON.Vector3.prototype.normalize=function(){var len=this.length();if(len===0)return;var num=1.0/len;this.x*=num;this.y*=num;this.z*=num;};BABYLON.Vector3.prototype.clone=function(){return new BABYLON.Vector3(this.x,this.y,this.z);};BABYLON.Vector3.prototype.copyFrom=function(source){this.x=source.x;this.y=source.y;this.z=source.z;};BABYLON.Vector3.prototype.copyFromFloats=function(x,y,z){this.x=x;this.y=y;this.z=z;};BABYLON.Vector3.FromArray=function(array,offset){if(!offset){offset=0;}return new BABYLON.Vector3(array[offset],array[offset+1],array[offset+2]);};BABYLON.Vector3.FromArrayToRef=function(array,offset,result){if(!offset){offset=0;}result.x=array[offset];result.y=array[offset+1];result.z=array[offset+2];};BABYLON.Vector3.FromFloatsToRef=function(x,y,z,result){result.x=x;result.y=y;result.z=z;};BABYLON.Vector3.Zero=function(){return new BABYLON.Vector3(0,0,0);};BABYLON.Vector3.Up=function(){return new BABYLON.Vector3(0,1.0,0);};BABYLON.Vector3.TransformCoordinates=function(vector,transformation){var result=BABYLON.Vector3.Zero();BABYLON.Vector3.TransformCoordinatesToRef(vector,transformation,result);return result;};BABYLON.Vector3.TransformCoordinatesToRef=function(vector,transformation,result){var x=(vector.x*transformation.m[0])+(vector.y*transformation.m[4])+(vector.z*transformation.m[8])+transformation.m[12];var y=(vector.x*transformation.m[1])+(vector.y*transformation.m[5])+(vector.z*transformation.m[9])+transformation.m[13];var z=(vector.x*transformation.m[2])+(vector.y*transformation.m[6])+(vector.z*transformation.m[10])+transformation.m[14];var w=(vector.x*transformation.m[3])+(vector.y*transformation.m[7])+(vector.z*transformation.m[11])+transformation.m[15];result.x=x/w;result.y=y/w;result.z=z/w;};BABYLON.Vector3.TransformCoordinatesFromFloatsToRef=function(x,y,z,transformation,result){var rx=(x*transformation.m[0])+(y*transformation.m[4])+(z*transformation.m[8])+transformation.m[12];var ry=(x*transformation.m[1])+(y*transformation.m[5])+(z*transformation.m[9])+transformation.m[13];var rz=(x*transformation.m[2])+(y*transformation.m[6])+(z*transformation.m[10])+transformation.m[14];var rw=(x*transformation.m[3])+(y*transformation.m[7])+(z*transformation.m[11])+transformation.m[15];result.x=rx/rw;result.y=ry/rw;result.z=rz/rw;};BABYLON.Vector3.TransformNormal=function(vector,transformation){var result=BABYLON.Vector3.Zero();BABYLON.Vector3.TransformNormalToRef(vector,transformation,result);return result;};BABYLON.Vector3.TransformNormalToRef=function(vector,transformation,result){result.x=(vector.x*transformation.m[0])+(vector.y*transformation.m[4])+(vector.z*transformation.m[8]);result.y=(vector.x*transformation.m[1])+(vector.y*transformation.m[5])+(vector.z*transformation.m[9]);result.z=(vector.x*transformation.m[2])+(vector.y*transformation.m[6])+(vector.z*transformation.m[10]);};BABYLON.Vector3.TransformNormalFromFloatsToRef=function(x,y,z,transformation,result){result.x=(x*transformation.m[0])+(y*transformation.m[4])+(z*transformation.m[8]);result.y=(x*transformation.m[1])+(y*transformation.m[5])+(z*transformation.m[9]);result.z=(x*transformation.m[2])+(y*transformation.m[6])+(z*transformation.m[10]);};BABYLON.Vector3.CatmullRom=function(value1,value2,value3,value4,amount){var squared=amount*amount;var cubed=amount*squared;var x=0.5*((((2.0*value2.x)+((-value1.x+value3.x)*amount))+(((((2.0*value1.x)-(5.0*value2.x))+(4.0*value3.x))-value4.x)*squared))+((((-value1.x+(3.0*value2.x))-(3.0*value3.x))+value4.x)*cubed));var y=0.5*((((2.0*value2.y)+((-value1.y+value3.y)*amount))+(((((2.0*value1.y)-(5.0*value2.y))+(4.0*value3.y))-value4.y)*squared))+((((-value1.y+(3.0*value2.y))-(3.0*value3.y))+value4.y)*cubed));var z=0.5*((((2.0*value2.z)+((-value1.z+value3.z)*amount))+(((((2.0*value1.z)-(5.0*value2.z))+(4.0*value3.z))-value4.z)*squared))+((((-value1.z+(3.0*value2.z))-(3.0*value3.z))+value4.z)*cubed));return new BABYLON.Vector3(x,y,z);};BABYLON.Vector3.Clamp=function(value,min,max){var x=value.x;x=(x>max.x)?max.x:x;x=(x<min.x)?min.x:x;var y=value.y;y=(y>max.y)?max.y:y;y=(y<min.y)?min.y:y;var z=value.z;z=(z>max.z)?max.z:z;z=(z<min.z)?min.z:z;return new BABYLON.Vector3(x,y,z);};BABYLON.Vector3.Hermite=function(value1,tangent1,value2,tangent2,amount){var squared=amount*amount;var cubed=amount*squared;var part1=((2.0*cubed)-(3.0*squared))+1.0;var part2=(-2.0*cubed)+(3.0*squared);var part3=(cubed-(2.0*squared))+amount;var part4=cubed-squared;var x=(((value1.x*part1)+(value2.x*part2))+(tangent1.x*part3))+(tangent2.x*part4);var y=(((value1.y*part1)+(value2.y*part2))+(tangent1.y*part3))+(tangent2.y*part4);var z=(((value1.z*part1)+(value2.z*part2))+(tangent1.z*part3))+(tangent2.z*part4);return new BABYLON.Vector3(x,y,z);};BABYLON.Vector3.Lerp=function(start,end,amount){var x=start.x+((end.x-start.x)*amount);var y=start.y+((end.y-start.y)*amount);var z=start.z+((end.z-start.z)*amount);return new BABYLON.Vector3(x,y,z);};BABYLON.Vector3.Dot=function(left,right){return(left.x*right.x+left.y*right.y+left.z*right.z);};BABYLON.Vector3.Cross=function(left,right){var result=BABYLON.Vector3.Zero();BABYLON.Vector3.CrossToRef(left,right,result);return result;};BABYLON.Vector3.CrossToRef=function(left,right,result){result.x=left.y*right.z-left.z*right.y;result.y=left.z*right.x-left.x*right.z;result.z=left.x*right.y-left.y*right.x;};BABYLON.Vector3.Normalize=function(vector){var result=BABYLON.Vector3.Zero();BABYLON.Vector3.NormalizeToRef(vector,result);return result;};BABYLON.Vector3.NormalizeToRef=function(vector,result){result.copyFrom(vector);result.normalize();};BABYLON.Vector3.Unproject=function(source,viewportWidth,viewportHeight,world,view,projection){var matrix=world.multiply(view).multiply(projection);matrix.invert();source.x=source.x/viewportWidth*2-1;source.y=-(source.y/viewportHeight*2-1);var vector=BABYLON.Vector3.TransformCoordinates(source,matrix);var num=source.x*matrix.m[3]+source.y*matrix.m[7]+source.z*matrix.m[11]+matrix.m[15];if(BABYLON.Tools.WithinEpsilon(num,1.0)){vector=vector.scale(1.0/num);}return vector;};BABYLON.Vector3.Minimize=function(left,right){var x=(left.x<right.x)?left.x:right.x;var y=(left.y<right.y)?left.y:right.y;var z=(left.z<right.z)?left.z:right.z;return new BABYLON.Vector3(x,y,z);};BABYLON.Vector3.Maximize=function(left,right){var x=(left.x>right.x)?left.x:right.x;var y=(left.y>right.y)?left.y:right.y;var z=(left.z>right.z)?left.z:right.z;return new BABYLON.Vector3(x,y,z);};BABYLON.Vector3.Distance=function(value1,value2){return Math.sqrt(BABYLON.Vector3.DistanceSquared(value1,value2));};BABYLON.Vector3.DistanceSquared=function(value1,value2){var x=value1.x-value2.x;var y=value1.y-value2.y;var z=value1.z-value2.z;return(x*x)+(y*y)+(z*z);};BABYLON.Quaternion=function(initialX,initialY,initialZ,initialW){this.x=initialX;this.y=initialY;this.z=initialZ;this.w=initialW;};BABYLON.Quaternion.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}";};BABYLON.Quaternion.prototype.equals=function(otherQuaternion){return this.x===otherQuaternion.x&&this.y===otherQuaternion.y&&this.z===otherQuaternion.z&&this.w===otherQuaternion.w;};BABYLON.Quaternion.prototype.clone=function(){return new BABYLON.Quaternion(this.x,this.y,this.z,this.w);};BABYLON.Quaternion.prototype.copyFrom=function(other){this.x=other.x;this.y=other.y;this.z=other.z;this.w=other.w;};BABYLON.Quaternion.prototype.add=function(other){return new BABYLON.Quaternion(this.x+other.x,this.y+other.y,this.z+other.z,this.w+other.w);};BABYLON.Quaternion.prototype.scale=function(value){return new BABYLON.Quaternion(this.x*value,this.y*value,this.z*value,this.w*value);};BABYLON.Quaternion.prototype.multiply=function(q1){var result=new BABYLON.Quaternion(0,0,0,1.0);this.multiplyToRef(q1,result);return result;};BABYLON.Quaternion.prototype.multiplyToRef=function(q1,result){result.x=this.x*q1.w+this.y*q1.z-this.z*q1.y+this.w*q1.x;result.y=-this.x*q1.z+this.y*q1.w+this.z*q1.x+this.w*q1.y;result.z=this.x*q1.y-this.y*q1.x+this.z*q1.w+this.w*q1.z;result.w=-this.x*q1.x-this.y*q1.y-this.z*q1.z+this.w*q1.w;};BABYLON.Quaternion.prototype.length=function(){return Math.sqrt((this.x*this.x)+(this.y*this.y)+(this.z*this.z)+(this.w*this.w));};BABYLON.Quaternion.prototype.normalize=function(){var length=1.0/this.length();this.x*=length;this.y*=length;this.z*=length;this.w*=length;};BABYLON.Quaternion.prototype.toEulerAngles=function(){var qx=this.x;var qy=this.y;var qz=this.z;var qw=this.w;var sqx=qx*qx;var sqy=qy*qy;var sqz=qz*qz;var yaw=Math.atan2(2.0*(qy*qw-qx*qz),1.0-2.0*(sqy+sqz));var pitch=Math.asin(2.0*(qx*qy+qz*qw));var roll=Math.atan2(2.0*(qx*qw-qy*qz),1.0-2.0*(sqx+sqz));var gimbaLockTest=qx*qy+qz*qw;if(gimbaLockTest>0.499){yaw=2.0*Math.atan2(qx,qw);roll=0;}else if(gimbaLockTest<-0.499){yaw=-2.0*Math.atan2(qx,qw);roll=0;}return new BABYLON.Vector3(pitch,yaw,roll);};BABYLON.Quaternion.prototype.toRotationMatrix=function(result){var xx=this.x*this.x;var yy=this.y*this.y;var zz=this.z*this.z;var xy=this.x*this.y;var zw=this.z*this.w;var zx=this.z*this.x;var yw=this.y*this.w;var yz=this.y*this.z;var xw=this.x*this.w;result.m[0]=1.0-(2.0*(yy+zz));result.m[1]=2.0*(xy+zw);result.m[2]=2.0*(zx-yw);result.m[3]=0;result.m[4]=2.0*(xy-zw);result.m[5]=1.0-(2.0*(zz+xx));result.m[6]=2.0*(yz+xw);result.m[7]=0;result.m[8]=2.0*(zx+yw);result.m[9]=2.0*(yz-xw);result.m[10]=1.0-(2.0*(yy+xx));result.m[11]=0;result.m[12]=0;result.m[13]=0;result.m[14]=0;result.m[15]=1.0;};BABYLON.Quaternion.FromArray=function(array,offset){if(!offset){offset=0;}return new BABYLON.Quaternion(array[offset],array[offset+1],array[offset+2],array[offset+3]);};BABYLON.Quaternion.RotationYawPitchRoll=function(yaw,pitch,roll){var result=new BABYLON.Quaternion();BABYLON.Quaternion.RotationYawPitchRollToRef(yaw,pitch,roll,result);return result;};BABYLON.Quaternion.RotationYawPitchRollToRef=function(yaw,pitch,roll,result){var halfRoll=roll*0.5;var halfPitch=pitch*0.5;var halfYaw=yaw*0.5;var sinRoll=Math.sin(halfRoll);var cosRoll=Math.cos(halfRoll);var sinPitch=Math.sin(halfPitch);var cosPitch=Math.cos(halfPitch);var sinYaw=Math.sin(halfYaw);var cosYaw=Math.cos(halfYaw);result.x=(cosYaw*sinPitch*cosRoll)+(sinYaw*cosPitch*sinRoll);result.y=(sinYaw*cosPitch*cosRoll)-(cosYaw*sinPitch*sinRoll);result.z=(cosYaw*cosPitch*sinRoll)-(sinYaw*sinPitch*cosRoll);result.w=(cosYaw*cosPitch*cosRoll)+(sinYaw*sinPitch*sinRoll);};BABYLON.Quaternion.Slerp=function(left,right,amount){var num2;var num3;var num=amount;var num4=(((left.x*right.x)+(left.y*right.y))+(left.z*right.z))+(left.w*right.w);var flag=false;if(num4<0){flag=true;num4=-num4;}if(num4>0.999999){num3=1-num;num2=flag?-num:num;}else{var num5=Math.acos(num4);var num6=(1.0/Math.sin(num5));num3=(Math.sin((1.0-num)*num5))*num6;num2=flag?((-Math.sin(num*num5))*num6):((Math.sin(num*num5))*num6);}return new BABYLON.Quaternion((num3*left.x)+(num2*right.x),(num3*left.y)+(num2*right.y),(num3*left.z)+(num2*right.z),(num3*left.w)+(num2*right.w));};if(!BABYLON.MatrixType){BABYLON.MatrixType=(typeof Float32Array!=='undefined')?Float32Array:Array;}BABYLON.Matrix=function(){this.m=new BABYLON.MatrixType(16);};BABYLON.Matrix.prototype.isIdentity=function(){if(this.m[0]!=1.0||this.m[5]!=1.0||this.m[10]!=1.0||this.m[15]!=1.0)return false;if(this.m[1]!=0.0||this.m[2]!=0.0||this.m[3]!=0.0||this.m[4]!=0.0||this.m[6]!=0.0||this.m[7]!=0.0||this.m[8]!=0.0||this.m[9]!=0.0||this.m[11]!=0.0||this.m[12]!=0.0||this.m[13]!=0.0||this.m[14]!=0.0)return false;return true;};BABYLON.Matrix.prototype.determinant=function(){var temp1=(this.m[10]*this.m[15])-(this.m[11]*this.m[14]);var temp2=(this.m[9]*this.m[15])-(this.m[11]*this.m[13]);var temp3=(this.m[9]*this.m[14])-(this.m[10]*this.m[13]);var temp4=(this.m[8]*this.m[15])-(this.m[11]*this.m[12]);var temp5=(this.m[8]*this.m[14])-(this.m[10]*this.m[12]);var temp6=(this.m[8]*this.m[13])-(this.m[9]*this.m[12]);return((((this.m[0]*(((this.m[5]*temp1)-(this.m[6]*temp2))+(this.m[7]*temp3)))-(this.m[1]*(((this.m[4]*temp1)-(this.m[6]*temp4))+(this.m[7]*temp5))))+(this.m[2]*(((this.m[4]*temp2)-(this.m[5]*temp4))+(this.m[7]*temp6))))-(this.m[3]*(((this.m[4]*temp3)-(this.m[5]*temp5))+(this.m[6]*temp6))));};BABYLON.Matrix.prototype.toArray=function(){return this.m;};BABYLON.Matrix.prototype.invert=function(){this.invertToRef(this);};BABYLON.Matrix.prototype.invertToRef=function(other){var l1=this.m[0];var l2=this.m[1];var l3=this.m[2];var l4=this.m[3];var l5=this.m[4];var l6=this.m[5];var l7=this.m[6];var l8=this.m[7];var l9=this.m[8];var l10=this.m[9];var l11=this.m[10];var l12=this.m[11];var l13=this.m[12];var l14=this.m[13];var l15=this.m[14];var l16=this.m[15];var l17=(l11*l16)-(l12*l15);var l18=(l10*l16)-(l12*l14);var l19=(l10*l15)-(l11*l14);var l20=(l9*l16)-(l12*l13);var l21=(l9*l15)-(l11*l13);var l22=(l9*l14)-(l10*l13);var l23=((l6*l17)-(l7*l18))+(l8*l19);var l24=-(((l5*l17)-(l7*l20))+(l8*l21));var l25=((l5*l18)-(l6*l20))+(l8*l22);var l26=-(((l5*l19)-(l6*l21))+(l7*l22));var l27=1.0/((((l1*l23)+(l2*l24))+(l3*l25))+(l4*l26));var l28=(l7*l16)-(l8*l15);var l29=(l6*l16)-(l8*l14);var l30=(l6*l15)-(l7*l14);var l31=(l5*l16)-(l8*l13);var l32=(l5*l15)-(l7*l13);var l33=(l5*l14)-(l6*l13);var l34=(l7*l12)-(l8*l11);var l35=(l6*l12)-(l8*l10);var l36=(l6*l11)-(l7*l10);var l37=(l5*l12)-(l8*l9);var l38=(l5*l11)-(l7*l9);var l39=(l5*l10)-(l6*l9);other.m[0]=l23*l27;other.m[4]=l24*l27;other.m[8]=l25*l27;other.m[12]=l26*l27;other.m[1]=-(((l2*l17)-(l3*l18))+(l4*l19))*l27;other.m[5]=(((l1*l17)-(l3*l20))+(l4*l21))*l27;other.m[9]=-(((l1*l18)-(l2*l20))+(l4*l22))*l27;other.m[13]=(((l1*l19)-(l2*l21))+(l3*l22))*l27;other.m[2]=(((l2*l28)-(l3*l29))+(l4*l30))*l27;other.m[6]=-(((l1*l28)-(l3*l31))+(l4*l32))*l27;other.m[10]=(((l1*l29)-(l2*l31))+(l4*l33))*l27;other.m[14]=-(((l1*l30)-(l2*l32))+(l3*l33))*l27;other.m[3]=-(((l2*l34)-(l3*l35))+(l4*l36))*l27;other.m[7]=(((l1*l34)-(l3*l37))+(l4*l38))*l27;other.m[11]=-(((l1*l35)-(l2*l37))+(l4*l39))*l27;other.m[15]=(((l1*l36)-(l2*l38))+(l3*l39))*l27;};BABYLON.Matrix.prototype.setTranslation=function(vector3){this.m[12]=vector3.x;this.m[13]=vector3.y;this.m[14]=vector3.z;};BABYLON.Matrix.prototype.multiply=function(other){var result=new BABYLON.Matrix();this.multiplyToRef(other,result);return result;};BABYLON.Matrix.prototype.copyFrom=function(other){for(var index=0;index<16;index++){this.m[index]=other.m[index];}};BABYLON.Matrix.prototype.multiplyToRef=function(other,result){this.multiplyToArray(other,result.m,0);};BABYLON.Matrix.prototype.multiplyToArray=function(other,result,offset){result[offset]=this.m[0]*other.m[0]+this.m[1]*other.m[4]+this.m[2]*other.m[8]+this.m[3]*other.m[12];result[offset+1]=this.m[0]*other.m[1]+this.m[1]*other.m[5]+this.m[2]*other.m[9]+this.m[3]*other.m[13];result[offset+2]=this.m[0]*other.m[2]+this.m[1]*other.m[6]+this.m[2]*other.m[10]+this.m[3]*other.m[14];result[offset+3]=this.m[0]*other.m[3]+this.m[1]*other.m[7]+this.m[2]*other.m[11]+this.m[3]*other.m[15];result[offset+4]=this.m[4]*other.m[0]+this.m[5]*other.m[4]+this.m[6]*other.m[8]+this.m[7]*other.m[12];result[offset+5]=this.m[4]*other.m[1]+this.m[5]*other.m[5]+this.m[6]*other.m[9]+this.m[7]*other.m[13];result[offset+6]=this.m[4]*other.m[2]+this.m[5]*other.m[6]+this.m[6]*other.m[10]+this.m[7]*other.m[14];result[offset+7]=this.m[4]*other.m[3]+this.m[5]*other.m[7]+this.m[6]*other.m[11]+this.m[7]*other.m[15];result[offset+8]=this.m[8]*other.m[0]+this.m[9]*other.m[4]+this.m[10]*other.m[8]+this.m[11]*other.m[12];result[offset+9]=this.m[8]*other.m[1]+this.m[9]*other.m[5]+this.m[10]*other.m[9]+this.m[11]*other.m[13];result[offset+10]=this.m[8]*other.m[2]+this.m[9]*other.m[6]+this.m[10]*other.m[10]+this.m[11]*other.m[14];result[offset+11]=this.m[8]*other.m[3]+this.m[9]*other.m[7]+this.m[10]*other.m[11]+this.m[11]*other.m[15];result[offset+12]=this.m[12]*other.m[0]+this.m[13]*other.m[4]+this.m[14]*other.m[8]+this.m[15]*other.m[12];result[offset+13]=this.m[12]*other.m[1]+this.m[13]*other.m[5]+this.m[14]*other.m[9]+this.m[15]*other.m[13];result[offset+14]=this.m[12]*other.m[2]+this.m[13]*other.m[6]+this.m[14]*other.m[10]+this.m[15]*other.m[14];result[offset+15]=this.m[12]*other.m[3]+this.m[13]*other.m[7]+this.m[14]*other.m[11]+this.m[15]*other.m[15];};BABYLON.Matrix.prototype.equals=function(value){return(this.m[0]===value.m[0]&&this.m[1]===value.m[1]&&this.m[2]===value.m[2]&&this.m[3]===value.m[3]&&this.m[4]===value.m[4]&&this.m[5]===value.m[5]&&this.m[6]===value.m[6]&&this.m[7]===value.m[7]&&this.m[8]===value.m[8]&&this.m[9]===value.m[9]&&this.m[10]===value.m[10]&&this.m[11]===value.m[11]&&this.m[12]===value.m[12]&&this.m[13]===value.m[13]&&this.m[14]===value.m[14]&&this.m[15]===value.m[15]);};BABYLON.Matrix.prototype.clone=function(){return BABYLON.Matrix.FromValues(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5],this.m[6],this.m[7],this.m[8],this.m[9],this.m[10],this.m[11],this.m[12],this.m[13],this.m[14],this.m[15]);};BABYLON.Matrix.FromArray=function(array,offset){var result=new BABYLON.Matrix();BABYLON.Matrix.FromArrayToRef(array,offset,result);return result;};BABYLON.Matrix.FromArrayToRef=function(array,offset,result){if(!offset){offset=0;}for(var index=0;index<16;index++){result.m[index]=array[index+offset];}};BABYLON.Matrix.FromValuesToRef=function(initialM11,initialM12,initialM13,initialM14,initialM21,initialM22,initialM23,initialM24,initialM31,initialM32,initialM33,initialM34,initialM41,initialM42,initialM43,initialM44,result){result.m[0]=initialM11;result.m[1]=initialM12;result.m[2]=initialM13;result.m[3]=initialM14;result.m[4]=initialM21;result.m[5]=initialM22;result.m[6]=initialM23;result.m[7]=initialM24;result.m[8]=initialM31;result.m[9]=initialM32;result.m[10]=initialM33;result.m[11]=initialM34;result.m[12]=initialM41;result.m[13]=initialM42;result.m[14]=initialM43;result.m[15]=initialM44;};BABYLON.Matrix.FromValues=function(initialM11,initialM12,initialM13,initialM14,initialM21,initialM22,initialM23,initialM24,initialM31,initialM32,initialM33,initialM34,initialM41,initialM42,initialM43,initialM44){var result=new BABYLON.Matrix();result.m[0]=initialM11;result.m[1]=initialM12;result.m[2]=initialM13;result.m[3]=initialM14;result.m[4]=initialM21;result.m[5]=initialM22;result.m[6]=initialM23;result.m[7]=initialM24;result.m[8]=initialM31;result.m[9]=initialM32;result.m[10]=initialM33;result.m[11]=initialM34;result.m[12]=initialM41;result.m[13]=initialM42;result.m[14]=initialM43;result.m[15]=initialM44;return result;};BABYLON.Matrix.Identity=function(){return BABYLON.Matrix.FromValues(1.0,0,0,0,0,1.0,0,0,0,0,1.0,0,0,0,0,1.0);};BABYLON.Matrix.IdentityToRef=function(result){BABYLON.Matrix.FromValuesToRef(1.0,0,0,0,0,1.0,0,0,0,0,1.0,0,0,0,0,1.0,result);};BABYLON.Matrix.Zero=function(){return BABYLON.Matrix.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);};BABYLON.Matrix.RotationX=function(angle){var result=new BABYLON.Matrix();BABYLON.Matrix.RotationXToRef(angle,result);return result;};BABYLON.Matrix.RotationXToRef=function(angle,result){var s=Math.sin(angle);var c=Math.cos(angle);result.m[0]=1.0;result.m[15]=1.0;result.m[5]=c;result.m[10]=c;result.m[9]=-s;result.m[6]=s;result.m[1]=0;result.m[2]=0;result.m[3]=0;result.m[4]=0;result.m[7]=0;result.m[8]=0;result.m[11]=0;result.m[12]=0;result.m[13]=0;result.m[14]=0;};BABYLON.Matrix.RotationY=function(angle){var result=new BABYLON.Matrix();BABYLON.Matrix.RotationYToRef(angle,result);return result;};BABYLON.Matrix.RotationYToRef=function(angle,result){var s=Math.sin(angle);var c=Math.cos(angle);result.m[5]=1.0;result.m[15]=1.0;result.m[0]=c;result.m[2]=-s;result.m[8]=s;result.m[10]=c;result.m[1]=0;result.m[3]=0;result.m[4]=0;result.m[6]=0;result.m[7]=0;result.m[9]=0;result.m[11]=0;result.m[12]=0;result.m[13]=0;result.m[14]=0;};BABYLON.Matrix.RotationZ=function(angle){var result=new BABYLON.Matrix();BABYLON.Matrix.RotationZToRef(angle,result);return result;};BABYLON.Matrix.RotationZToRef=function(angle,result){var s=Math.sin(angle);var c=Math.cos(angle);result.m[10]=1.0;result.m[15]=1.0;result.m[0]=c;result.m[1]=s;result.m[4]=-s;result.m[5]=c;result.m[2]=0;result.m[3]=0;result.m[6]=0;result.m[7]=0;result.m[8]=0;result.m[9]=0;result.m[11]=0;result.m[12]=0;result.m[13]=0;result.m[14]=0;};BABYLON.Matrix.RotationAxis=function(axis,angle){var s=Math.sin(-angle);var c=Math.cos(-angle);var c1=1-c;axis.normalize();var result=BABYLON.Matrix.Zero();result.m[0]=(axis.x*axis.x)*c1+c;result.m[1]=(axis.x*axis.y)*c1-(axis.z*s);result.m[2]=(axis.x*axis.z)*c1+(axis.y*s);result.m[3]=0.0;result.m[4]=(axis.y*axis.x)*c1+(axis.z*s);result.m[5]=(axis.y*axis.y)*c1+c;result.m[6]=(axis.y*axis.z)*c1-(axis.x*s);result.m[7]=0.0;result.m[8]=(axis.z*axis.x)*c1-(axis.y*s);result.m[9]=(axis.z*axis.y)*c1+(axis.x*s);result.m[10]=(axis.z*axis.z)*c1+c;result.m[11]=0.0;result.m[15]=1.0;return result;};BABYLON.Matrix.RotationYawPitchRoll=function(yaw,pitch,roll){var result=new BABYLON.Matrix();BABYLON.Matrix.RotationYawPitchRollToRef(yaw,pitch,roll,result);return result;};var tempQuaternion=new BABYLON.Quaternion();BABYLON.Matrix.RotationYawPitchRollToRef=function(yaw,pitch,roll,result){BABYLON.Quaternion.RotationYawPitchRollToRef(yaw,pitch,roll,tempQuaternion);tempQuaternion.toRotationMatrix(result);};BABYLON.Matrix.Scaling=function(x,y,z){var result=BABYLON.Matrix.Zero();BABYLON.Matrix.ScalingToRef(x,y,z,result);return result;};BABYLON.Matrix.ScalingToRef=function(x,y,z,result){result.m[0]=x;result.m[1]=0;result.m[2]=0;result.m[3]=0;result.m[4]=0;result.m[5]=y;result.m[6]=0;result.m[7]=0;result.m[8]=0;result.m[9]=0;result.m[10]=z;result.m[11]=0;result.m[12]=0;result.m[13]=0;result.m[14]=0;result.m[15]=1.0;};BABYLON.Matrix.Translation=function(x,y,z){var result=BABYLON.Matrix.Identity();BABYLON.Matrix.TranslationToRef(x,y,z,result);return result;};BABYLON.Matrix.TranslationToRef=function(x,y,z,result){BABYLON.Matrix.FromValuesToRef(1.0,0,0,0,0,1.0,0,0,0,0,1.0,0,x,y,z,1.0,result);};BABYLON.Matrix.LookAtLH=function(eye,target,up){var result=BABYLON.Matrix.Zero();BABYLON.Matrix.LookAtLHToRef(eye,target,up,result);return result;};var xAxis=BABYLON.Vector3.Zero();var yAxis=BABYLON.Vector3.Zero();var zAxis=BABYLON.Vector3.Zero();BABYLON.Matrix.LookAtLHToRef=function(eye,target,up,result){target.subtractToRef(eye,zAxis);zAxis.normalize();BABYLON.Vector3.CrossToRef(up,zAxis,xAxis);xAxis.normalize();BABYLON.Vector3.CrossToRef(zAxis,xAxis,yAxis);yAxis.normalize();var ex=-BABYLON.Vector3.Dot(xAxis,eye);var ey=-BABYLON.Vector3.Dot(yAxis,eye);var ez=-BABYLON.Vector3.Dot(zAxis,eye);return BABYLON.Matrix.FromValuesToRef(xAxis.x,yAxis.x,zAxis.x,0,xAxis.y,yAxis.y,zAxis.y,0,xAxis.z,yAxis.z,zAxis.z,0,ex,ey,ez,1,result);};BABYLON.Matrix.OrthoLH=function(width,height,znear,zfar){var hw=2.0/width;var hh=2.0/height;var id=1.0/(zfar-znear);var nid=znear/(znear-zfar);return BABYLON.Matrix.FromValues(hw,0,0,0,0,hh,0,0,0,0,id,0,0,0,nid,1);};BABYLON.Matrix.OrthoOffCenterLH=function(left,right,bottom,top,znear,zfar){var matrix=BABYLON.Matrix.Zero();BABYLON.Matrix.OrthoOffCenterLHToRef(left,right,bottom,top,znear,zfar,matrix);return matrix;};BABYLON.Matrix.OrthoOffCenterLHToRef=function(left,right,bottom,top,znear,zfar,result){result.m[0]=2.0/(right-left);result.m[1]=result.m[2]=result.m[3]=0;result.m[5]=2.0/(top-bottom);result.m[4]=result.m[6]=result.m[7]=0;result.m[10]=-1.0/(znear-zfar);result.m[8]=result.m[9]=result.m[11]=0;result.m[12]=(left+right)/(left-right);result.m[13]=(top+bottom)/(bottom-top);result.m[14]=znear/(znear-zfar);result.m[15]=1.0;};BABYLON.Matrix.PerspectiveLH=function(width,height,znear,zfar){var matrix=BABYLON.Matrix.Zero();matrix.m[0]=(2.0*znear)/width;matrix.m[1]=matrix.m[2]=matrix.m[3]=0.0;matrix.m[5]=(2.0*znear)/height;matrix.m[4]=matrix.m[6]=matrix.m[7]=0.0;matrix.m[10]=-zfar/(znear-zfar);matrix.m[8]=matrix.m[9]=0.0;matrix.m[11]=1.0;matrix.m[12]=matrix.m[13]=matrix.m[15]=0.0;matrix.m[14]=(znear*zfar)/(znear-zfar);return matrix;};BABYLON.Matrix.PerspectiveFovLH=function(fov,aspect,znear,zfar){var matrix=BABYLON.Matrix.Zero();BABYLON.Matrix.PerspectiveFovLHToRef(fov,aspect,znear,zfar,matrix);return matrix;};BABYLON.Matrix.PerspectiveFovLHToRef=function(fov,aspect,znear,zfar,result){var tan=1.0/(Math.tan(fov*0.5));result.m[0]=tan/aspect;result.m[1]=result.m[2]=result.m[3]=0.0;result.m[5]=tan;result.m[4]=result.m[6]=result.m[7]=0.0;result.m[8]=result.m[9]=0.0;result.m[10]=-zfar/(znear-zfar);result.m[11]=1.0;result.m[12]=result.m[13]=result.m[15]=0.0;result.m[14]=(znear*zfar)/(znear-zfar);};BABYLON.Matrix.AffineTransformation=function(scaling,rotationCenter,rotation,translation){return BABYLON.Matrix.Scaling(scaling,scaling,scaling)*BABYLON.Matrix.Translation(-rotationCenter)*BABYLON.Matrix.RotationQuaternion(rotation)*BABYLON.Matrix.Translation(rotationCenter)*BABYLON.Matrix.Translation(translation);};BABYLON.Matrix.GetFinalMatrix=function(viewport,world,view,projection){var cw=viewport.width;var ch=viewport.height;var cx=viewport.x;var cy=viewport.y;var zmin=viewport.minZ;var zmax=viewport.maxZ;var viewportMatrix=new BABYLON.Matrix(cw/2.0,0,0,0,0,-ch/2.0,0,0,0,0,zmax-zmin,0,cx+cw/2.0,ch/2.0+cy,zmin,1);return world.multiply(view).multiply(projection).multiply(viewportMatrix);};BABYLON.Matrix.Transpose=function(matrix){var result=new BABYLON.Matrix();result.m[0]=matrix.m[0];result.m[1]=matrix.m[4];result.m[2]=matrix.m[8];result.m[3]=matrix.m[12];result.m[4]=matrix.m[1];result.m[5]=matrix.m[5];result.m[6]=matrix.m[9];result.m[7]=matrix.m[13];result.m[8]=matrix.m[2];result.m[9]=matrix.m[6];result.m[10]=matrix.m[10];result.m[11]=matrix.m[14];result.m[12]=matrix.m[3];result.m[13]=matrix.m[7];result.m[14]=matrix.m[11];result.m[15]=matrix.m[15];return result;};BABYLON.Matrix.Reflection=function(plane){var matrix=new BABYLON.Matrix();BABYLON.Matrix.ReflectionToRef(plane,matrix);return matrix;};BABYLON.Matrix.ReflectionToRef=function(plane,result){plane.normalize();var x=plane.normal.x;var y=plane.normal.y;var z=plane.normal.z;var temp=-2*x;var temp2=-2*y;var temp3=-2*z;result.m[0]=(temp*x)+1;result.m[1]=temp2*x;result.m[2]=temp3*x;result.m[3]=0.0;result.m[4]=temp*y;result.m[5]=(temp2*y)+1;result.m[6]=temp3*y;result.m[7]=0.0;result.m[8]=temp*z;result.m[9]=temp2*z;result.m[10]=(temp3*z)+1;result.m[11]=0.0;result.m[12]=temp*plane.d;result.m[13]=temp2*plane.d;result.m[14]=temp3*plane.d;result.m[15]=1.0;};BABYLON.Plane=function(a,b,c,d){this.normal=new BABYLON.Vector3(a,b,c);this.d=d;};BABYLON.Plane.prototype.normalize=function(){var norm=(Math.sqrt((this.normal.x*this.normal.x)+(this.normal.y*this.normal.y)+(this.normal.z*this.normal.z)));var magnitude=0;if(norm!=0){magnitude=1.0/norm;}this.normal.x*=magnitude;this.normal.y*=magnitude;this.normal.z*=magnitude;this.d*=magnitude;};BABYLON.Plane.prototype.transform=function(transformation){var transposedMatrix=BABYLON.Matrix.Transpose(transformation);var x=this.normal.x;var y=this.normal.y;var z=this.normal.z;var d=this.d;var normalX=(((x*transposedMatrix.m[0])+(y*transposedMatrix.m[1]))+(z*transposedMatrix.m[2]))+(d*transposedMatrix.m[3]);var normalY=(((x*transposedMatrix.m[4])+(y*transposedMatrix.m[5]))+(z*transposedMatrix.m[6]))+(d*transposedMatrix.m[7]);var normalZ=(((x*transposedMatrix.m[8])+(y*transposedMatrix.m[9]))+(z*transposedMatrix.m[10]))+(d*transposedMatrix.m[11]);var finalD=(((x*transposedMatrix.m[12])+(y*transposedMatrix.m[13]))+(z*transposedMatrix.m[14]))+(d*transposedMatrix.m[15]);return new BABYLON.Plane(normalX,normalY,normalZ,finalD);};BABYLON.Plane.prototype.dotCoordinate=function(point){return((((this.normal.x*point.x)+(this.normal.y*point.y))+(this.normal.z*point.z))+this.d);};BABYLON.Plane.prototype.copyFromPoints=function(point1,point2,point3){var x1=point2.x-point1.x;var y1=point2.y-point1.y;var z1=point2.z-point1.z;var x2=point3.x-point1.x;var y2=point3.y-point1.y;var z2=point3.z-point1.z;var yz=(y1*z2)-(z1*y2);var xz=(z1*x2)-(x1*z2);var xy=(x1*y2)-(y1*x2);var pyth=(Math.sqrt((yz*yz)+(xz*xz)+(xy*xy)));var invPyth;if(pyth!=0)invPyth=1.0/pyth;elseinvPyth=0;this.normal.x=yz*invPyth;this.normal.y=xz*invPyth;this.normal.z=xy*invPyth;this.d=-((this.normal.x*point1.x)+(this.normal.y*point1.y)+(this.normal.z*point1.z));};BABYLON.Plane.prototype.isFrontFacingTo=function(direction,epsilon){var dot=BABYLON.Vector3.Dot(this.normal,direction);return(dot<=epsilon);};BABYLON.Plane.prototype.signedDistanceTo=function(point){return BABYLON.Vector3.Dot(point,this.normal)+this.d;};BABYLON.Plane.FromArray=function(array){return new BABYLON.Plane(array[0],array[1],array[2],array[3]);};BABYLON.Plane.FromPoints=function(point1,point2,point3){var result=new BABYLON.Plane(0,0,0,0);result.copyFromPoints(point1,point2,point3);return result;};BABYLON.Plane.FromPositionAndNormal=function(origin,normal){var result=new BABYLON.Plane(0,0,0,0);normal.normalize();result.normal=normal;result.d=-(normal.x*origin.x+normal.y*origin.y+normal.z*origin.z);return result;};BABYLON.Plane.SignedDistanceToPlaneFromPositionAndNormal=function(origin,normal,point){var d=-(normal.x*origin.x+normal.y*origin.y+normal.z*origin.z);return BABYLON.Vector3.Dot(point,normal)+d;};BABYLON.Frustum={};BABYLON.Frustum.GetPlanes=function(transform){var frustumPlanes=[];for(var index=0;index<6;index++){frustumPlanes.push(new BABYLON.Plane(0,0,0,0));}BABYLON.Frustum.GetPlanesToRef(transform,frustumPlanes);return frustumPlanes;};BABYLON.Frustum.GetPlanesToRef=function(transform,frustumPlanes){frustumPlanes[0].normal.x=transform.m[3]+transform.m[2];frustumPlanes[0].normal.y=transform.m[7]+transform.m[6];frustumPlanes[0].normal.z=transform.m[10]+transform.m[10];frustumPlanes[0].d=transform.m[15]+transform.m[14];frustumPlanes[0].normalize();frustumPlanes[1].normal.x=transform.m[3]-transform.m[2];frustumPlanes[1].normal.y=transform.m[7]-transform.m[6];frustumPlanes[1].normal.z=transform.m[11]-transform.m[10];frustumPlanes[1].d=transform.m[15]-transform.m[14];frustumPlanes[1].normalize();frustumPlanes[2].normal.x=transform.m[3]+transform.m[0];frustumPlanes[2].normal.y=transform.m[7]+transform.m[4];frustumPlanes[2].normal.z=transform.m[11]+transform.m[8];frustumPlanes[2].d=transform.m[15]+transform.m[12];frustumPlanes[2].normalize();frustumPlanes[3].normal.x=transform.m[3]-transform.m[0];frustumPlanes[3].normal.y=transform.m[7]-transform.m[4];frustumPlanes[3].normal.z=transform.m[11]-transform.m[8];frustumPlanes[3].d=transform.m[15]-transform.m[12];frustumPlanes[3].normalize();frustumPlanes[4].normal.x=transform.m[3]-transform.m[1];frustumPlanes[4].normal.y=transform.m[7]-transform.m[5];frustumPlanes[4].normal.z=transform.m[11]-transform.m[9];frustumPlanes[4].d=transform.m[15]-transform.m[13];frustumPlanes[4].normalize();frustumPlanes[5].normal.x=transform.m[3]+transform.m[1];frustumPlanes[5].normal.y=transform.m[7]+transform.m[5];frustumPlanes[5].normal.z=transform.m[11]+transform.m[9];frustumPlanes[5].d=transform.m[15]+transform.m[13];frustumPlanes[5].normalize();};})();var BABYLON=BABYLON||{};(function(){BABYLON.Tools={};BABYLON.Tools.ExtractMinAndMax=function(positions,start,count){var minimum=new BABYLON.Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);var maximum=new BABYLON.Vector3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var index=start;index<start+count;index++){var current=new BABYLON.Vector3(positions[index*3],positions[index*3+1],positions[index*3+2]);minimum=BABYLON.Vector3.Minimize(current,minimum);maximum=BABYLON.Vector3.Maximize(current,maximum);}return{minimum:minimum,maximum:maximum};};BABYLON.Tools.SmartArray=function(capacity){this.data=new Array(capacity);this.length=0;};BABYLON.Tools.SmartArray.prototype.push=function(value){this.data[this.length++]=value;if(this.length>this.data.length){this.data.length*=2;}};BABYLON.Tools.SmartArray.prototype.pushNoDuplicate=function(value){if(this.indexOf(value)>-1){return;}this.push(value);};BABYLON.Tools.SmartArray.prototype.reset=function(){this.length=0;};BABYLON.Tools.SmartArray.prototype.concat=function(array){if(array.length===0){return;}if(this.length+array.length>this.data.length){this.data.length=(this.length+array.length)*2;}for(var index=0;index<array.length;index++){this.data[this.length++]=(array.data||array)[index];}};BABYLON.Tools.SmartArray.prototype.concatWithNoDuplicate=function(array){if(array.length===0){return;}if(this.length+array.length>this.data.length){this.data.length=(this.length+array.length)*2;}for(var index=0;index<array.length;index++){var item=(array.data||array)[index];var pos=this.data.indexOf(item);if(pos===-1||pos>=this.length){this.data[this.length++]=item;}}};BABYLON.Tools.SmartArray.prototype.indexOf=function(value){var position=this.data.indexOf(value);if(position>=this.length){return-1;}return position;};BABYLON.Tools.GetPointerPrefix=function(){var eventPrefix="pointer";if(!navigator.pointerEnabled){eventPrefix="mouse";}return eventPrefix;};BABYLON.Tools.QueueNewFrame=function(func){if(window.requestAnimationFrame)window.requestAnimationFrame(func);else if(window.msRequestAnimationFrame)window.msRequestAnimationFrame(func);else if(window.webkitRequestAnimationFrame)window.webkitRequestAnimationFrame(func);else if(window.mozRequestAnimationFrame)window.mozRequestAnimationFrame(func);else if(window.oRequestAnimationFrame)window.oRequestAnimationFrame(func);else{window.setTimeout(func,16);}};BABYLON.Tools.RequestFullscreen=function(element){if(element.requestFullscreen)element.requestFullscreen();else if(element.msRequestFullscreen)element.msRequestFullscreen();else if(element.webkitRequestFullscreen)element.webkitRequestFullscreen();else if(element.mozRequestFullScreen)element.mozRequestFullScreen();};BABYLON.Tools.ExitFullscreen=function(){if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.msCancelFullScreen){document.msCancelFullScreen();}};BABYLON.Tools.BaseUrl="";BABYLON.Tools.LoadImage=function(url,onload,onerror,database){var img=new Image();img.onload=function(){onload(img);};img.onerror=function(err){onerror(img,err);};var noIndexedDB=function(){img.src=url;};var loadFromIndexedDB=function(){database.loadImageFromDB(url,img);};if(database&&database.enableTexturesOffline&&BABYLON.Database.isUASupportingBlobStorage){database.openAsync(loadFromIndexedDB,noIndexedDB);}else{noIndexedDB();}return img;};BABYLON.Tools.LoadFile=function(url,callback,progressCallBack,database){var noIndexedDB=function(){var request=new XMLHttpRequest();var loadUrl=BABYLON.Tools.BaseUrl+url;request.open('GET',loadUrl,true);request.onprogress=progressCallBack;request.onreadystatechange=function(){if(request.readyState==4){if(request.status==200){callback(request.responseText);}else{throw new Error(request.status,"Unable to load "+loadUrl);}}};request.send(null);};var loadFromIndexedDB=function(){database.loadSceneFromDB(url,callback,progressCallBack);};if(database&&url.indexOf(".babylon")!==-1&&(database.enableSceneOffline)){database.openAsync(loadFromIndexedDB,noIndexedDB);}else{noIndexedDB();}};BABYLON.Tools.isIE=function(){return window.ActiveXObject!==undefined;};BABYLON.Tools.WithinEpsilon=function(a,b){var num=a-b;return-1.401298E-45<=num&&num<=1.401298E-45;};var cloneValue=function(source,destinationObject){if(!source)return null;if(source instanceof BABYLON.Mesh){return null;}if(source instanceof BABYLON.SubMesh){return source.clone(destinationObject);}else if(source.clone){return source.clone();}return null;};BABYLON.Tools.DeepCopy=function(source,destination,doNotCopyList,mustCopyList){for(var prop in source){if(prop[0]==="_"&&(!mustCopyList||mustCopyList.indexOf(prop)===-1)){continue;}if(doNotCopyList&&doNotCopyList.indexOf(prop)!==-1){continue;}var sourceValue=source[prop];var typeOfSourceValue=typeof sourceValue;if(typeOfSourceValue=="function"){continue;}if(typeOfSourceValue=="object"){if(sourceValue instanceof Array){destination[prop]=[];if(sourceValue.length>0){if(typeof sourceValue[0]=="object"){for(var index=0;index<sourceValue.length;index++){var clonedValue=cloneValue(sourceValue[index],destination);if(destination[prop].indexOf(clonedValue)===-1){destination[prop].push(clonedValue);}}}else{destination[prop]=sourceValue.slice(0);}}}else{destination[prop]=cloneValue(sourceValue,destination);}}else{destination[prop]=sourceValue;}}};var fpsRange=60;var previousFramesDuration=[];var fps=60;var deltaTime=0;BABYLON.Tools.GetFps=function(){return fps;};BABYLON.Tools.GetDeltaTime=function(){return deltaTime;};BABYLON.Tools._MeasureFps=function(){previousFramesDuration.push((new Date).getTime());var length=previousFramesDuration.length;if(length>=2){deltaTime=previousFramesDuration[length-1]-previousFramesDuration[length-2];}if(length>=fpsRange){if(length>fpsRange){previousFramesDuration.splice(0,1);length=previousFramesDuration.length;}var sum=0;for(var id=0;id<length-1;id++){sum+=previousFramesDuration[id+1]-previousFramesDuration[id];}fps=1000.0/(sum/(length-1));}};})();var BABYLON=BABYLON||{};(function(){BABYLON.Engine=function(canvas,antialias){this._renderingCanvas=canvas;try{this._gl=canvas.getContext("webgl",{antialias:antialias})||canvas.getContext("experimental-webgl",{antialias:antialias});}catch(e){throw new Error("WebGL not supported");}if(!this._gl){throw new Error("WebGL not supported");}this.forceWireframe=false;this.cullBackFaces=true;this.scenes=[];this._workingCanvas=document.createElement("canvas");this._workingContext=this._workingCanvas.getContext("2d");this._hardwareScalingLevel=1.0/(window.devicePixelRatio||1.0);this.resize();this._caps={};this._caps.maxTexturesImageUnits=this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);this._caps.maxTextureSize=this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE);this._caps.maxCubemapTextureSize=this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE);this._caps.maxRenderTextureSize=this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE);var derivatives=this._gl.getExtension('OES_standard_derivatives');this._caps.standardDerivatives=(derivatives!==null);this._loadedTexturesCache=[];this._activeTexturesCache=[];this._currentEffect=null;this._currentState={culling:null};this._compiledEffects={};this._gl.enable(this._gl.DEPTH_TEST);this._gl.depthFunc(this._gl.LEQUAL);this.isFullscreen=false;var that=this;var onFullscreenChange=function(){if(document.fullscreen!==undefined){that.isFullscreen=document.fullscreen;}else if(document.mozFullScreen!==undefined){that.isFullscreen=document.mozFullScreen;}else if(document.webkitIsFullScreen!==undefined){that.isFullscreen=document.webkitIsFullScreen;}else if(document.msIsFullScreen!==undefined){that.isFullscreen=document.msIsFullScreen;}if(that.isFullscreen&&that._pointerLockRequested){canvas.requestPointerLock=canvas.requestPointerLock||canvas.msRequestPointerLock||canvas.mozRequestPointerLock||canvas.webkitRequestPointerLock;if(canvas.requestPointerLock){canvas.requestPointerLock();}}};document.addEventListener("fullscreenchange",onFullscreenChange,false);document.addEventListener("mozfullscreenchange",onFullscreenChange,false);document.addEventListener("webkitfullscreenchange",onFullscreenChange,false);document.addEventListener("msfullscreenchange",onFullscreenChange,false);this.isPointerLock=false;var onPointerLockChange=function(){that.isPointerLock=(document.mozPointerLockElement===canvas||document.webkitPointerLockElement===canvas||document.msPointerLockElement===canvas||document.pointerLockElement===canvas);};document.addEventListener("pointerlockchange",onPointerLockChange,false);document.addEventListener("mspointerlockchange",onPointerLockChange,false);document.addEventListener("mozpointerlockchange",onPointerLockChange,false);document.addEventListener("webkitpointerlockchange",onPointerLockChange,false);};BABYLON.Engine.prototype.getAspectRatio=function(){return this._aspectRatio;};BABYLON.Engine.prototype.getRenderWidth=function(){return this._renderingCanvas.width;};BABYLON.Engine.prototype.getRenderHeight=function(){return this._renderingCanvas.height;};BABYLON.Engine.prototype.getRenderingCanvas=function(){return this._renderingCanvas;};BABYLON.Engine.prototype.setHardwareScalingLevel=function(level){this._hardwareScalingLevel=level;this.resize();};BABYLON.Engine.prototype.getHardwareScalingLevel=function(){return this._hardwareScalingLevel;};BABYLON.Engine.prototype.getLoadedTexturesCache=function(){return this._loadedTexturesCache;};BABYLON.Engine.prototype.getCaps=function(){return this._caps;};BABYLON.Engine.prototype.stopRenderLoop=function(){this._renderFunction=null;this._runningLoop=false;};BABYLON.Engine.prototype._renderLoop=function(){this.beginFrame();if(this._renderFunction){this._renderFunction();}this.endFrame();if(this._runningLoop){var that=this;BABYLON.Tools.QueueNewFrame(function(){that._renderLoop();});}};BABYLON.Engine.prototype.runRenderLoop=function(renderFunction){this._runningLoop=true;this._renderFunction=renderFunction;var that=this;BABYLON.Tools.QueueNewFrame(function(){that._renderLoop();});};BABYLON.Engine.prototype.switchFullscreen=function(requestPointerLock){if(this.isFullscreen){BABYLON.Tools.ExitFullscreen();}else{this._pointerLockRequested=requestPointerLock;BABYLON.Tools.RequestFullscreen(this._renderingCanvas);}};BABYLON.Engine.prototype.clear=function(color,backBuffer,depthStencil){this._gl.clearColor(color.r,color.g,color.b,1.0);this._gl.clearDepth(1.0);var mode=0;if(backBuffer)mode|=this._gl.COLOR_BUFFER_BIT;if(depthStencil)mode|=this._gl.DEPTH_BUFFER_BIT;this._gl.clear(mode);};BABYLON.Engine.prototype.beginFrame=function(){BABYLON.Tools._MeasureFps();this._gl.viewport(0,0,this._renderingCanvas.width,this._renderingCanvas.height);};BABYLON.Engine.prototype.endFrame=function(){this.flushFramebuffer();};BABYLON.Engine.prototype.resize=function(){this._renderingCanvas.width=this._renderingCanvas.clientWidth/this._hardwareScalingLevel;this._renderingCanvas.height=this._renderingCanvas.clientHeight/this._hardwareScalingLevel;this._aspectRatio=this._renderingCanvas.width/this._renderingCanvas.height;};BABYLON.Engine.prototype.bindFramebuffer=function(texture){var gl=this._gl;gl.bindFramebuffer(gl.FRAMEBUFFER,texture._framebuffer);gl.viewport(0.0,0.0,texture._size,texture._size);this.wipeCaches();};BABYLON.Engine.prototype.unBindFramebuffer=function(texture){if(texture.generateMipMaps){var gl=this._gl;gl.bindTexture(gl.TEXTURE_2D,texture);gl.generateMipmap(gl.TEXTURE_2D);gl.bindTexture(gl.TEXTURE_2D,null);}};BABYLON.Engine.prototype.flushFramebuffer=function(){this._gl.flush();};BABYLON.Engine.prototype.restoreDefaultFramebuffer=function(){this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null);this._gl.viewport(0,0,this._renderingCanvas.width,this._renderingCanvas.height);this.wipeCaches();};BABYLON.Engine.prototype.createVertexBuffer=function(vertices){var vbo=this._gl.createBuffer();this._gl.bindBuffer(this._gl.ARRAY_BUFFER,vbo);this._gl.bufferData(this._gl.ARRAY_BUFFER,new Float32Array(vertices),this._gl.STATIC_DRAW);this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);vbo.references=1;return vbo;};BABYLON.Engine.prototype.createDynamicVertexBuffer=function(capacity){var vbo=this._gl.createBuffer();this._gl.bindBuffer(this._gl.ARRAY_BUFFER,vbo);this._gl.bufferData(this._gl.ARRAY_BUFFER,capacity,this._gl.DYNAMIC_DRAW);this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);vbo.references=1;return vbo;};BABYLON.Engine.prototype.updateDynamicVertexBuffer=function(vertexBuffer,vertices,length){this._gl.bindBuffer(this._gl.ARRAY_BUFFER,vertexBuffer);if(length){this._gl.bufferSubData(this._gl.ARRAY_BUFFER,0,new Float32Array(vertices,0,length));}else{this._gl.bufferSubData(this._gl.ARRAY_BUFFER,0,new Float32Array(vertices));}this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);};BABYLON.Engine.prototype.createIndexBuffer=function(indices){var vbo=this._gl.createBuffer();this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,vbo);this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),this._gl.STATIC_DRAW);this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,null);vbo.references=1;return vbo;};BABYLON.Engine.prototype.bindBuffers=function(vertexBuffer,indexBuffer,vertexDeclaration,vertexStrideSize,effect){if(this._cachedVertexBuffers!==vertexBuffer||this._cachedEffectForVertexBuffers!==effect){this._cachedVertexBuffers=vertexBuffer;this._cachedEffectForVertexBuffers=effect;this._gl.bindBuffer(this._gl.ARRAY_BUFFER,vertexBuffer);var offset=0;for(var index=0;index<vertexDeclaration.length;index++){var order=effect.getAttribute(index);if(order>=0){this._gl.vertexAttribPointer(order,vertexDeclaration[index],this._gl.FLOAT,false,vertexStrideSize,offset);}offset+=vertexDeclaration[index]*4;}}if(this._cachedIndexBuffer!==indexBuffer){this._cachedIndexBuffer=indexBuffer;this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,indexBuffer);}};BABYLON.Engine.prototype.bindMultiBuffers=function(vertexBuffers,indexBuffer,effect){if(this._cachedVertexBuffers!==vertexBuffers||this._cachedEffectForVertexBuffers!==effect){this._cachedVertexBuffers=vertexBuffers;this._cachedEffectForVertexBuffers=effect;var attributes=effect.getAttributesNames();for(var index=0;index<attributes.length;index++){var order=effect.getAttribute(index);if(order>=0){var vertexBuffer=vertexBuffers[attributes[index]];var stride=vertexBuffer.getStrideSize();this._gl.bindBuffer(this._gl.ARRAY_BUFFER,vertexBuffer._buffer);this._gl.vertexAttribPointer(order,stride,this._gl.FLOAT,false,stride*4,0);}}}if(this._cachedIndexBuffer!==indexBuffer){this._cachedIndexBuffer=indexBuffer;this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER,indexBuffer);}};BABYLON.Engine.prototype._releaseBuffer=function(buffer){buffer.references--;if(buffer.references===0){this._gl.deleteBuffer(buffer);}};BABYLON.Engine.prototype.draw=function(useTriangles,indexStart,indexCount){this._gl.drawElements(useTriangles?this._gl.TRIANGLES:this._gl.LINES,indexCount,this._gl.UNSIGNED_SHORT,indexStart*2);};BABYLON.Engine.prototype.createEffect=function(baseName,attributesNames,uniformsNames,samplers,defines){var name=baseName+"@"+defines;if(this._compiledEffects[name]){return this._compiledEffects[name];}var effect=new BABYLON.Effect(baseName,attributesNames,uniformsNames,samplers,this,defines);this._compiledEffects[name]=effect;return effect;};var compileShader=function(gl,source,type,defines){var shader=gl.createShader(type==="vertex"?gl.VERTEX_SHADER:gl.FRAGMENT_SHADER);gl.shaderSource(shader,(defines?defines+"\n":"")+source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){throw new Error(gl.getShaderInfoLog(shader));}return shader;};BABYLON.Engine.prototype.createShaderProgram=function(vertexCode,fragmentCode,defines){var vertexShader=compileShader(this._gl,vertexCode,"vertex",defines);var fragmentShader=compileShader(this._gl,fragmentCode,"fragment",defines);var shaderProgram=this._gl.createProgram();this._gl.attachShader(shaderProgram,vertexShader);this._gl.attachShader(shaderProgram,fragmentShader);this._gl.linkProgram(shaderProgram);var error=this._gl.getProgramInfoLog(shaderProgram);if(error){throw new Error(error);}this._gl.deleteShader(vertexShader);this._gl.deleteShader(fragmentShader);return shaderProgram;};BABYLON.Engine.prototype.getUniforms=function(shaderProgram,uniformsNames){var results=[];for(var index=0;index<uniformsNames.length;index++){results.push(this._gl.getUniformLocation(shaderProgram,uniformsNames[index]));}return results;};BABYLON.Engine.prototype.getAttributes=function(shaderProgram,attributesNames){var results=[];for(var index=0;index<attributesNames.length;index++){try{results.push(this._gl.getAttribLocation(shaderProgram,attributesNames[index]));}catch(e){results.push(-1);}}return results;};BABYLON.Engine.prototype.enableEffect=function(effect){if(!effect||!effect.getAttributesCount()||this._currentEffect===effect){return;}this._gl.useProgram(effect.getProgram());for(var index=0;index<effect.getAttributesCount();index++){var order=effect.getAttribute(index);if(order>=0){this._gl.enableVertexAttribArray(effect.getAttribute(index));}}this._currentEffect=effect;};BABYLON.Engine.prototype.setMatrices=function(uniform,matrices){if(!uniform)return;this._gl.uniformMatrix4fv(uniform,false,matrices);};BABYLON.Engine.prototype.setMatrix=function(uniform,matrix){if(!uniform)return;this._gl.uniformMatrix4fv(uniform,false,matrix.toArray());};BABYLON.Engine.prototype.setVector2=function(uniform,x,y){if(!uniform)return;this._gl.uniform2f(uniform,x,y);};BABYLON.Engine.prototype.setVector3=function(uniform,vector3){if(!uniform)return;this._gl.uniform3f(uniform,vector3.x,vector3.y,vector3.z);};BABYLON.Engine.prototype.setFloat2=function(uniform,x,y){if(!uniform)return;this._gl.uniform2f(uniform,x,y);};BABYLON.Engine.prototype.setFloat3=function(uniform,x,y,z){if(!uniform)return;this._gl.uniform3f(uniform,x,y,z);};BABYLON.Engine.prototype.setBool=function(uniform,bool){if(!uniform)return;this._gl.uniform1i(uniform,bool);};BABYLON.Engine.prototype.setFloat4=function(uniform,x,y,z,w){if(!uniform)return;this._gl.uniform4f(uniform,x,y,z,w);};BABYLON.Engine.prototype.setColor3=function(uniform,color3){if(!uniform)return;this._gl.uniform3f(uniform,color3.r,color3.g,color3.b);};BABYLON.Engine.prototype.setColor4=function(uniform,color3,alpha){if(!uniform)return;this._gl.uniform4f(uniform,color3.r,color3.g,color3.b,alpha);};BABYLON.Engine.prototype.setState=function(culling){if(this._currentState.culling!==culling){if(culling){this._gl.cullFace(this.cullBackFaces?this._gl.BACK:this._gl.FRONT);this._gl.enable(this._gl.CULL_FACE);}else{this._gl.disable(this._gl.CULL_FACE);}this._currentState.culling=culling;}};BABYLON.Engine.prototype.setDepthBuffer=function(enable){if(enable){this._gl.enable(this._gl.DEPTH_TEST);}else{this._gl.disable(this._gl.DEPTH_TEST);}};BABYLON.Engine.prototype.setDepthWrite=function(enable){this._gl.depthMask(enable);};BABYLON.Engine.prototype.setColorWrite=function(enable){this._gl.colorMask(enable,enable,enable,enable);};BABYLON.Engine.prototype.setAlphaMode=function(mode){switch(mode){case BABYLON.Engine.ALPHA_DISABLE:this.setDepthWrite(true);this._gl.disable(this._gl.BLEND);break;case BABYLON.Engine.ALPHA_COMBINE:this.setDepthWrite(false);this._gl.blendFuncSeparate(this._gl.SRC_ALPHA,this._gl.ONE_MINUS_SRC_ALPHA,this._gl.ZERO,this._gl.ONE);this._gl.enable(this._gl.BLEND);break;case BABYLON.Engine.ALPHA_ADD:this.setDepthWrite(false);this._gl.blendFuncSeparate(this._gl.ONE,this._gl.ONE,this._gl.ZERO,this._gl.ONE);this._gl.enable(this._gl.BLEND);break;}};BABYLON.Engine.prototype.setAlphaTesting=function(enable){this._alphaTest=enable;};BABYLON.Engine.prototype.getAlphaTesting=function(){return this._alphaTest;};BABYLON.Engine.prototype.wipeCaches=function(){this._activeTexturesCache=[];this._currentEffect=null;this._currentState={culling:null};this._cachedVertexBuffers=null;this._cachedVertexBuffers=null;this._cachedEffectForVertexBuffers=null;};var getExponantOfTwo=function(value,max){var count=1;do{count*=2;}while(count<value);if(count>max)count=max;return count;};BABYLON.Engine.prototype.createTexture=function(url,noMipmap,invertY,scene){var texture=this._gl.createTexture();var that=this;var onload=function(img){var potWidth=getExponantOfTwo(img.width,that._caps.maxTextureSize);var potHeight=getExponantOfTwo(img.height,that._caps.maxTextureSize);var isPot=(img.width==potWidth&&img.height==potHeight);if(!isPot){that._workingCanvas.width=potWidth;that._workingCanvas.height=potHeight;that._workingContext.drawImage(img,0,0,img.width,img.height,0,0,potWidth,potHeight);};that._gl.bindTexture(that._gl.TEXTURE_2D,texture);that._gl.pixelStorei(that._gl.UNPACK_FLIP_Y_WEBGL,invertY===undefined?true:invertY);that._gl.texImage2D(that._gl.TEXTURE_2D,0,that._gl.RGBA,that._gl.RGBA,that._gl.UNSIGNED_BYTE,isPot?img:that._workingCanvas);that._gl.texParameteri(that._gl.TEXTURE_2D,that._gl.TEXTURE_MAG_FILTER,that._gl.LINEAR);if(noMipmap){that._gl.texParameteri(that._gl.TEXTURE_2D,that._gl.TEXTURE_MIN_FILTER,that._gl.LINEAR);}else{that._gl.texParameteri(that._gl.TEXTURE_2D,that._gl.TEXTURE_MIN_FILTER,that._gl.LINEAR_MIPMAP_LINEAR);that._gl.generateMipmap(that._gl.TEXTURE_2D);}that._gl.bindTexture(that._gl.TEXTURE_2D,null);that._activeTexturesCache=[];texture._baseWidth=img.width;texture._baseHeight=img.height;texture._width=potWidth;texture._height=potHeight;texture.isReady=true;scene._removePendingData(texture);};var onerror=function(){scene._removePendingData(texture);};scene._addPendingData(texture);BABYLON.Tools.LoadImage(url,onload,onerror,scene.database);texture.url=url;texture.noMipmap=noMipmap;texture.references=1;this._loadedTexturesCache.push(texture);return texture;};BABYLON.Engine.prototype.createDynamicTexture=function(size,generateMipMaps){var texture=this._gl.createTexture();var width=getExponantOfTwo(size,this._caps.maxTextureSize);var height=width;this._gl.bindTexture(this._gl.TEXTURE_2D,texture);this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MAG_FILTER,this._gl.LINEAR);if(!generateMipMaps){this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,this._gl.LINEAR);}else{this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,this._gl.LINEAR_MIPMAP_LINEAR);}this._gl.bindTexture(this._gl.TEXTURE_2D,null);this._activeTexturesCache=[];texture._baseWidth=width;texture._baseHeight=height;texture._width=width;texture._height=height;texture.isReady=false;texture.generateMipMaps=generateMipMaps;texture.references=1;this._loadedTexturesCache.push(texture);return texture;};BABYLON.Engine.prototype.updateDynamicTexture=function(texture,canvas,invertY){this._gl.bindTexture(this._gl.TEXTURE_2D,texture);this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL,invertY);this._gl.texImage2D(this._gl.TEXTURE_2D,0,this._gl.RGBA,this._gl.RGBA,this._gl.UNSIGNED_BYTE,canvas);if(texture.generateMipMaps){this._gl.generateMipmap(this._gl.TEXTURE_2D);}this._gl.bindTexture(this._gl.TEXTURE_2D,null);this._activeTexturesCache=[];texture.isReady=true;};BABYLON.Engine.prototype.updateVideoTexture=function(texture,video){this._gl.bindTexture(this._gl.TEXTURE_2D,texture);this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL,false);if(video.videoWidth!==texture._width||video.videoHeight!==texture._height){if(!texture._workingCanvas){texture._workingCanvas=document.createElement("canvas");texture._workingContext=texture._workingCanvas.getContext("2d");texture._workingCanvas.width=texture._width;texture._workingCanvas.height=texture._height;}texture._workingContext.drawImage(video,0,0,video.videoWidth,video.videoHeight,0,0,texture._width,texture._height);this._gl.texImage2D(this._gl.TEXTURE_2D,0,this._gl.RGBA,this._gl.RGBA,this._gl.UNSIGNED_BYTE,texture._workingCanvas);}else{this._gl.texImage2D(this._gl.TEXTURE_2D,0,this._gl.RGBA,this._gl.RGBA,this._gl.UNSIGNED_BYTE,video);}if(texture.generateMipMaps){this._gl.generateMipmap(this._gl.TEXTURE_2D);}this._gl.bindTexture(this._gl.TEXTURE_2D,null);this._activeTexturesCache=[];texture.isReady=true;};BABYLON.Engine.prototype.createRenderTargetTexture=function(size,generateMipMaps){var gl=this._gl;var texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,generateMipMaps?gl.LINEAR_MIPMAP_LINEAR:gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,size,size,0,gl.RGBA,gl.UNSIGNED_BYTE,null);var depthBuffer=gl.createRenderbuffer();gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,size,size);var framebuffer=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);gl.bindTexture(gl.TEXTURE_2D,null);gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,null);texture._framebuffer=framebuffer;texture._depthBuffer=depthBuffer;texture._size=size;texture.isReady=true;texture.generateMipMaps=generateMipMaps;texture.references=1;this._activeTexturesCache=[];this._loadedTexturesCache.push(texture);return texture;};var extensions=["_px.jpg","_py.jpg","_pz.jpg","_nx.jpg","_ny.jpg","_nz.jpg"];var cascadeLoad=function(rootUrl,index,loadedImages,scene,onfinish){var img;var onload=function(){loadedImages.push(img);scene._removePendingData(img);if(index!=extensions.length-1){cascadeLoad(rootUrl,index+1,loadedImages,scene,onfinish);}else{onfinish(loadedImages);}};var onerror=function(){scene._removePendingData(img);};img=BABYLON.Tools.LoadImage(rootUrl+extensions[index],onload,onerror,scene.database);scene._addPendingData(img);};BABYLON.Engine.prototype.createCubeTexture=function(rootUrl,scene){var gl=this._gl;var texture=gl.createTexture();texture.isCube=true;texture.url=rootUrl;texture.references=1;this._loadedTexturesCache.push(texture);var that=this;cascadeLoad(rootUrl,0,[],scene,function(imgs){var width=getExponantOfTwo(imgs[0].width);var height=width;that._workingCanvas.width=width;that._workingCanvas.height=height;var faces=[gl.TEXTURE_CUBE_MAP_POSITIVE_X,gl.TEXTURE_CUBE_MAP_POSITIVE_Y,gl.TEXTURE_CUBE_MAP_POSITIVE_Z,gl.TEXTURE_CUBE_MAP_NEGATIVE_X,gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];gl.bindTexture(gl.TEXTURE_CUBE_MAP,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);for(var index=0;index<faces.length;index++){that._workingContext.drawImage(imgs[index],0,0,imgs[index].width,imgs[index].height,0,0,width,height);gl.texImage2D(faces[index],0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,that._workingCanvas);}gl.generateMipmap(gl.TEXTURE_CUBE_MAP);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.bindTexture(gl.TEXTURE_CUBE_MAP,null);that._activeTexturesCache=[];texture._width=width;texture._height=height;texture.isReady=true;});return texture;};BABYLON.Engine.prototype._releaseTexture=function(texture){var gl=this._gl;if(texture._framebuffer){gl.deleteFramebuffer(texture._framebuffer);}if(texture._depthBuffer){gl.deleteRenderbuffer(texture._depthBuffer);}gl.deleteTexture(texture);for(var channel=0;channel<this._caps.maxTexturesImageUnits;channel++){this._gl.activeTexture(this._gl["TEXTURE"+channel]);this._gl.bindTexture(this._gl.TEXTURE_2D,null);this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP,null);this._activeTexturesCache[channel]=null;}};BABYLON.Engine.prototype.bindSamplers=function(effect){this._gl.useProgram(effect.getProgram());var samplers=effect.getSamplers();for(var index=0;index<samplers.length;index++){var uniform=effect.getUniform(samplers[index]);this._gl.uniform1i(uniform,index);}this._currentEffect=null;};BABYLON.Engine.prototype.setTexture=function(channel,texture){if(channel<0){return;}if(!texture||!texture.isReady()){if(this._activeTexturesCache[channel]!=null){this._gl.activeTexture(this._gl["TEXTURE"+channel]);this._gl.bindTexture(this._gl.TEXTURE_2D,null);this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP,null);this._activeTexturesCache[channel]=null;}return;}if(texture instanceof BABYLON.VideoTexture){if(texture._update()){this._activeTexturesCache[channel]=null;}}else if(texture.delayLoadState==BABYLON.Engine.DELAYLOADSTATE_NOTLOADED){texture.delayLoad();return;}if(this._activeTexturesCache[channel]==texture){return;}this._activeTexturesCache[channel]=texture;var internalTexture=texture.getInternalTexture();this._gl.activeTexture(this._gl["TEXTURE"+channel]);if(internalTexture.isCube){this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP,internalTexture);if(internalTexture._cachedCoordinatesMode!==texture.coordinatesMode){internalTexture._cachedCoordinatesMode=texture.coordinatesMode;this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP,this._gl.TEXTURE_WRAP_S,texture.coordinatesMode!==BABYLON.CubeTexture.CUBIC_MODE?this._gl.REPEAT:this._gl.CLAMP_TO_EDGE);this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP,this._gl.TEXTURE_WRAP_T,texture.coordinatesMode!==BABYLON.CubeTexture.CUBIC_MODE?this._gl.REPEAT:this._gl.CLAMP_TO_EDGE);}}else{this._gl.bindTexture(this._gl.TEXTURE_2D,internalTexture);if(internalTexture._cachedWrapU!==texture.wrapU){internalTexture._cachedWrapU=texture.wrapU;switch(texture.wrapU){case BABYLON.Texture.WRAP_ADDRESSMODE:this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_S,this._gl.REPEAT);break;case BABYLON.Texture.CLAMP_ADDRESSMODE:this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_S,this._gl.CLAMP_TO_EDGE);break;case BABYLON.Texture.MIRROR_ADDRESSMODE:this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_S,this._gl.MIRRORED_REPEAT);break;}}if(internalTexture._cachedWrapV!==texture.wrapV){internalTexture._cachedWrapV=texture.wrapV;switch(texture.wrapV){case BABYLON.Texture.WRAP_ADDRESSMODE:this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_T,this._gl.REPEAT);break;case BABYLON.Texture.CLAMP_ADDRESSMODE:this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_T,this._gl.CLAMP_TO_EDGE);break;case BABYLON.Texture.MIRROR_ADDRESSMODE:this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_T,this._gl.MIRRORED_REPEAT);break;}}}};BABYLON.Engine.prototype.dispose=function(){while(this.scenes.length){this.scenes[0].dispose();}for(var name in this._compiledEffects.length){this._gl.deleteProgram(this._compiledEffects[name]._program);}};BABYLON.Engine.ShadersRepository="Babylon/Shaders/";BABYLON.Engine.ALPHA_DISABLE=0;BABYLON.Engine.ALPHA_ADD=1;BABYLON.Engine.ALPHA_COMBINE=2;BABYLON.Engine.DELAYLOADSTATE_NONE=0;BABYLON.Engine.DELAYLOADSTATE_LOADED=1;BABYLON.Engine.DELAYLOADSTATE_LOADING=2;BABYLON.Engine.DELAYLOADSTATE_NOTLOADED=4;BABYLON.Engine.epsilon=0.001;BABYLON.Engine.collisionsEpsilon=0.001;BABYLON.Engine.isSupported=function(){try{var tempcanvas=document.createElement("canvas");var gl=tempcanvas.getContext("webgl")||tempcanvas.getContext("experimental-webgl");return gl!=null&&!!window.WebGLRenderingContext;}catch(e){return false;}};})();var BABYLON=BABYLON||{};(function(){BABYLON.BoundingSphere=function(minimum,maximum){this.minimum=minimum;this.maximum=maximum;var distance=BABYLON.Vector3.Distance(minimum,maximum);this.center=BABYLON.Vector3.Lerp(minimum,maximum,0.5);;this.radius=distance*0.5;this.centerWorld=BABYLON.Vector3.Zero();this._update(BABYLON.Matrix.Identity());};BABYLON.BoundingSphere.prototype._update=function(world,scale){BABYLON.Vector3.TransformCoordinatesToRef(this.center,world,this.centerWorld);this.radiusWorld=this.radius*scale;};BABYLON.BoundingSphere.prototype.isInFrustrum=function(frustumPlanes){for(var i=0;i<6;i++){if(frustumPlanes[i].dotCoordinate(this.centerWorld)<=-this.radiusWorld)return false;}return true;};BABYLON.BoundingSphere.prototype.intersectsPoint=function(point){var x=this.centerWorld.x-point.x;var y=this.centerWorld.y-point.y;var z=this.centerWorld.z-point.z;var distance=Math.sqrt((x*x)+(y*y)+(z*z));if(this.radiusWorld<distance)return false;return true;};BABYLON.BoundingSphere.intersects=function(sphere0,sphere1){var x=sphere0.centerWorld.x-sphere1.centerWorld.x;var y=sphere0.centerWorld.y-sphere1.centerWorld.y;var z=sphere0.centerWorld.z-sphere1.centerWorld.z;var distance=Math.sqrt((x*x)+(y*y)+(z*z));if(sphere0.radiusWorld+sphere1.radiusWorld<distance)return false;return true;};})();var BABYLON=BABYLON||{};(function(){BABYLON.BoundingBox=function(minimum,maximum){this.minimum=minimum;this.maximum=maximum;this.vectors=[];this.vectors.push(this.minimum.clone());this.vectors.push(this.maximum.clone());this.vectors.push(this.minimum.clone());this.vectors[2].x=this.maximum.x;this.vectors.push(this.minimum.clone());this.vectors[3].y=this.maximum.y;this.vectors.push(this.minimum.clone());this.vectors[4].z=this.maximum.z;this.vectors.push(this.maximum.clone());this.vectors[5].z=this.minimum.z;this.vectors.push(this.maximum.clone());this.vectors[6].x=this.minimum.x;this.vectors.push(this.maximum.clone());this.vectors[7].y=this.minimum.y;this.center=this.maximum.add(this.minimum).scale(0.5);this.extends=this.maximum.subtract(this.minimum).scale(0.5);this.directions=[BABYLON.Vector3.Zero(),BABYLON.Vector3.Zero(),BABYLON.Vector3.Zero()];this.vectorsWorld=[];for(var index=0;index<this.vectors.length;index++){this.vectorsWorld[index]=BABYLON.Vector3.Zero();}this.minimumWorld=BABYLON.Vector3.Zero();this.maximumWorld=BABYLON.Vector3.Zero();this._update(BABYLON.Matrix.Identity());};BABYLON.BoundingBox.prototype._update=function(world){BABYLON.Vector3.FromFloatsToRef(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,this.minimumWorld);BABYLON.Vector3.FromFloatsToRef(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,this.maximumWorld);for(var index=0;index<this.vectors.length;index++){var v=this.vectorsWorld[index];BABYLON.Vector3.TransformCoordinatesToRef(this.vectors[index],world,v);if(v.x<this.minimumWorld.x)this.minimumWorld.x=v.x;if(v.y<this.minimumWorld.y)this.minimumWorld.y=v.y;if(v.z<this.minimumWorld.z)this.minimumWorld.z=v.z;if(v.x>this.maximumWorld.x)this.maximumWorld.x=v.x;if(v.y>this.maximumWorld.y)this.maximumWorld.y=v.y;if(v.z>this.maximumWorld.z)this.maximumWorld.z=v.z;}this.maximumWorld.addToRef(this.minimumWorld,this.center);this.center.scaleInPlace(0.5);BABYLON.Vector3.FromArrayToRef(world.m,0,this.directions[0]);BABYLON.Vector3.FromArrayToRef(world.m,4,this.directions[1]);BABYLON.Vector3.FromArrayToRef(world.m,8,this.directions[2]);};BABYLON.BoundingBox.prototype.isInFrustrum=function(frustumPlanes){return BABYLON.BoundingBox.IsInFrustrum(this.vectorsWorld,frustumPlanes);};BABYLON.BoundingBox.prototype.intersectsPoint=function(point){if(this.maximumWorld.x<point.x||this.minimumWorld.x>point.x)return false;if(this.maximumWorld.y<point.y||this.minimumWorld.y>point.y)return false;if(this.maximumWorld.z<point.z||this.minimumWorld.z>point.z)return false;return true;};BABYLON.BoundingBox.prototype.intersectsSphere=function(sphere){var vector=BABYLON.Vector3.Clamp(sphere.centerWorld,this.minimumWorld,this.maximumWorld);var num=BABYLON.Vector3.DistanceSquared(sphere.centerWorld,vector);return(num<=(sphere.radiusWorld*sphere.radiusWorld));};BABYLON.BoundingBox.prototype.intersectsMinMax=function(min,max){if(this.maximumWorld.x<min.x||this.minimumWorld.x>max.x)return false;if(this.maximumWorld.y<min.y||this.minimumWorld.y>max.y)return false;if(this.maximumWorld.z<min.z||this.minimumWorld.z>max.z)return false;return true;};BABYLON.BoundingBox.intersects=function(box0,box1){if(box0.maximumWorld.x<box1.minimumWorld.x||box0.minimumWorld.x>box1.maximumWorld.x)return false;if(box0.maximumWorld.y<box1.minimumWorld.y||box0.minimumWorld.y>box1.maximumWorld.y)return false;if(box0.maximumWorld.z<box1.minimumWorld.z||box0.minimumWorld.z>box1.maximumWorld.z)return false;return true;};BABYLON.BoundingBox.IsInFrustrum=function(boundingVectors,frustumPlanes){for(var p=0;p<6;p++){var inCount=8;for(var i=0;i<8;i++){if(frustumPlanes[p].dotCoordinate(boundingVectors[i])<0){--inCount;}else{break;}}if(inCount==0)return false;}return true;};})();var BABYLON=BABYLON||{};(function(){BABYLON.BoundingInfo=function(minimum,maximum){this.boundingBox=new BABYLON.BoundingBox(minimum,maximum);this.boundingSphere=new BABYLON.BoundingSphere(minimum,maximum);};BABYLON.BoundingInfo.prototype._update=function(world,scale){this.boundingBox._update(world);this.boundingSphere._update(world,scale);};var extentsOverlap=function(min0,max0,min1,max1){return!(min0>max1||min1>max0);};var computeBoxExtents=function(axis,box){var p=BABYLON.Vector3.Dot(box.center,axis);var r0=Math.abs(BABYLON.Vector3.Dot(box.directions[0],axis))*box.extends.x;var r1=Math.abs(BABYLON.Vector3.Dot(box.directions[1],axis))*box.extends.y;var r2=Math.abs(BABYLON.Vector3.Dot(box.directions[2],axis))*box.extends.z;var r=r0+r1+r2;return{min:p-r,max:p+r};};var axisOverlap=function(axis,box0,box1){var result0=computeBoxExtents(axis,box0);var result1=computeBoxExtents(axis,box1);return extentsOverlap(result0.min,result0.max,result1.min,result1.max);};BABYLON.BoundingInfo.prototype.isInFrustrum=function(frustumPlanes){if(!this.boundingSphere.isInFrustrum(frustumPlanes))return false;return this.boundingBox.isInFrustrum(frustumPlanes);};BABYLON.BoundingInfo.prototype._checkCollision=function(collider){return collider._canDoCollision(this.boundingSphere.centerWorld,this.boundingSphere.radiusWorld,this.boundingBox.minimumWorld,this.boundingBox.maximumWorld);};BABYLON.BoundingInfo.prototype.intersectsPoint=function(point){if(!this.boundingSphere.centerWorld){return false;}if(!this.boundingSphere.intersectsPoint(point)){return false;}if(!this.boundingBox.intersectsPoint(point)){return false;}return true;};BABYLON.BoundingInfo.prototype.intersects=function(boundingInfo,precise){if(!this.boundingSphere.centerWorld||!boundingInfo.boundingSphere.centerWorld){return false;}if(!BABYLON.BoundingSphere.intersects(this.boundingSphere,boundingInfo.boundingSphere)){return false;}if(!BABYLON.BoundingBox.intersects(this.boundingBox,boundingInfo.boundingBox)){return false;}if(!precise){return true;}var box0=this.boundingBox;var box1=boundingInfo.boundingBox;if(!axisOverlap(box0.directions[0],box0,box1))return false;if(!axisOverlap(box0.directions[1],box0,box1))return false;if(!axisOverlap(box0.directions[2],box0,box1))return false;if(!axisOverlap(box1.directions[0],box0,box1))return false;if(!axisOverlap(box1.directions[1],box0,box1))return false;if(!axisOverlap(box1.directions[2],box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[0],box1.directions[0]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[0],box1.directions[1]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[0],box1.directions[2]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[1],box1.directions[0]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[1],box1.directions[1]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[1],box1.directions[2]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[2],box1.directions[0]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[2],box1.directions[1]),box0,box1))return false;if(!axisOverlap(BABYLON.Vector3.Cross(box0.directions[2],box1.directions[2]),box0,box1))return false;return true;};})();var BABYLON=BABYLON||{};(function(){BABYLON.Light=function(name,scene){this.name=name;this.id=name;this._scene=scene;scene.lights.push(this);};BABYLON.Light.prototype.intensity=1.0;BABYLON.Light.prototype.isEnabled=true;BABYLON.Light.prototype.getScene=function(){return this._scene;};BABYLON.Light.prototype.getShadowGenerator=function(){return this._shadowGenerator;};BABYLON.Light.prototype.dispose=function(){if(this._shadowGenerator){this._shadowGenerator.dispose();this._shadowGenerator=null;}var index=this._scene.lights.indexOf(this);this._scene.lights.splice(index,1);};})();var BABYLON=BABYLON||{};(function(){BABYLON.PointLight=function(name,position,scene){this.name=name;this.id=name;this.position=position;this.diffuse=new BABYLON.Color3(1.0,1.0,1.0);this.specular=new BABYLON.Color3(1.0,1.0,1.0);this._scene=scene;scene.lights.push(this);this.animations=[];};BABYLON.PointLight.prototype=Object.create(BABYLON.Light.prototype);BABYLON.PointLight.prototype.getShadowGenerator=function(){return null;};})();var BABYLON=BABYLON||{};(function(){BABYLON.SpotLight=function(name,position,direction,angle,exponent,scene){this.name=name;this.id=name;this.position=position;this.direction=direction;this.angle=angle;this.exponent=exponent;this.diffuse=new BABYLON.Color3(1.0,1.0,1.0);this.specular=new BABYLON.Color3(1.0,1.0,1.0);this._scene=scene;scene.lights.push(this);this.animations=[];};BABYLON.SpotLight.prototype=Object.create(BABYLON.Light.prototype);})();var BABYLON=BABYLON||{};(function(){BABYLON.DirectionalLight=function(name,direction,scene){this.name=name;this.id=name;this.position=direction.scale(-1);this.direction=direction;this.diffuse=new BABYLON.Color3(1.0,1.0,1.0);this.specular=new BABYLON.Color3(1.0,1.0,1.0);this._scene=scene;scene.lights.push(this);this.animations=[];};BABYLON.DirectionalLight.prototype=Object.create(BABYLON.Light.prototype);})();var BABYLON=BABYLON||{};(function(){BABYLON.ShadowGenerator=function(mapSize,light){this._light=light;this._scene=light.getScene();light._shadowGenerator=this;this._shadowMap=new BABYLON.RenderTargetTexture(light.name+"_shadowMap",mapSize,this._scene,false);this._shadowMap.wrapU=BABYLON.Texture.CLAMP_ADDRESSMODE;this._shadowMap.wrapV=BABYLON.Texture.CLAMP_ADDRESSMODE;this._shadowMap.renderParticles=false;var that=this;var renderSubMesh=function(subMesh){var mesh=subMesh.getMesh();var world=mesh.getWorldMatrix();var engine=that._scene.getEngine();if(that.isReady(mesh)){engine.enableEffect(that._effect);if(mesh.skeleton&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind)&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)){that._effect.setMatrix("world",world);that._effect.setMatrix("viewProjection",that.getTransformMatrix());that._effect.setMatrices("mBones",mesh.skeleton.getTransformMatrices());}else{world.multiplyToRef(that.getTransformMatrix(),that._worldViewProjection);that._effect.setMatrix("worldViewProjection",that._worldViewProjection);}mesh.bindAndDraw(subMesh,that._effect,false);}};this._shadowMap.customRenderFunction=function(opaqueSubMeshes,alphaTestSubMeshes){var index;for(index=0;index<opaqueSubMeshes.length;index++){renderSubMesh(opaqueSubMeshes.data[index]);}for(index=0;index<alphaTestSubMeshes.length;index++){renderSubMesh(alphaTestSubMeshes.data[index]);}};this._viewMatrix=BABYLON.Matrix.Zero();this._projectionMatrix=BABYLON.Matrix.Zero();this._transformMatrix=BABYLON.Matrix.Zero();this._worldViewProjection=BABYLON.Matrix.Zero();};BABYLON.ShadowGenerator.prototype.useVarianceShadowMap=true;BABYLON.ShadowGenerator.prototype.isReady=function(mesh){var defines=[];if(this.useVarianceShadowMap){defines.push("#define VSM");}if(BABYLON.Tools.isIE()){defines.push("#define IE");}var attribs=[BABYLON.VertexBuffer.PositionKind];if(mesh.skeleton&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind)&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)){attribs.push(BABYLON.VertexBuffer.MatricesIndicesKind);attribs.push(BABYLON.VertexBuffer.MatricesWeightsKind);defines.push("#define BONES");defines.push("#define BonesPerMesh "+mesh.skeleton.bones.length);}var join=defines.join("\n");if(this._cachedDefines!=join){this._cachedDefines=join;this._effect=this._scene.getEngine().createEffect("shadowMap",attribs,["world","mBones","viewProjection","worldViewProjection"],[],join);}return this._effect.isReady();};BABYLON.ShadowGenerator.prototype.getShadowMap=function(){return this._shadowMap;};BABYLON.ShadowGenerator.prototype.getLight=function(){return this._light;};BABYLON.ShadowGenerator.prototype.getTransformMatrix=function(){if(!this._cachedPosition||!this._cachedDirection||!this._light.position.equals(this._cachedPosition)||!this._light.direction.equals(this._cachedDirection)){this._cachedPosition=this._light.position.clone();this._cachedDirection=this._light.direction.clone();var activeCamera=this._scene.activeCamera;BABYLON.Matrix.LookAtLHToRef(this._light.position,this._light.position.add(this._light.direction),BABYLON.Vector3.Up(),this._viewMatrix);BABYLON.Matrix.PerspectiveFovLHToRef(Math.PI/2.0,1.0,activeCamera.minZ,activeCamera.maxZ,this._projectionMatrix);this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix);}return this._transformMatrix;};BABYLON.ShadowGenerator.prototype.dispose=function(){this._shadowMap.dispose();};})();var BABYLON=BABYLON||{};(function(){BABYLON.HemisphericLight=function(name,direction,scene){this.name=name;this.id=name;this.direction=direction;this.diffuse=new BABYLON.Color3(1.0,1.0,1.0);this.specular=new BABYLON.Color3(1.0,1.0,1.0);this.groundColor=new BABYLON.Color3(0.0,0.0,0.0);this._scene=scene;scene.lights.push(this);this.animations=[];};BABYLON.HemisphericLight.prototype=Object.create(BABYLON.Light.prototype);BABYLON.HemisphericLight.prototype.getShadowGenerator=function(){return null;};})();var BABYLON=BABYLON||{};(function(){BABYLON.Collider=function(){this.radius=new BABYLON.Vector3(1,1,1);this.retry=0;this.basePointWorld=BABYLON.Vector3.Zero();this.velocityWorld=BABYLON.Vector3.Zero();this.normalizedVelocity=BABYLON.Vector3.Zero();this._trianglePlane=new BABYLON.Plane(0,0,0,0);this._collisionPoint=BABYLON.Vector3.Zero();this._planeIntersectionPoint=BABYLON.Vector3.Zero();this._tempVector=BABYLON.Vector3.Zero();this._tempVector2=BABYLON.Vector3.Zero();this._tempVector3=BABYLON.Vector3.Zero();this._tempVector4=BABYLON.Vector3.Zero();this._edge=BABYLON.Vector3.Zero();this._baseToVertex=BABYLON.Vector3.Zero();this._destinationPoint=BABYLON.Vector3.Zero();this._slidePlaneNormal=BABYLON.Vector3.Zero();this._displacementVector=BABYLON.Vector3.Zero();};BABYLON.Collider.prototype._initialize=function(source,dir,e){this.velocity=dir;BABYLON.Vector3.NormalizeToRef(dir,this.normalizedVelocity);this.basePoint=source;source.multiplyToRef(this.radius,this.basePointWorld);dir.multiplyToRef(this.radius,this.velocityWorld);this.velocityWorldLength=this.velocityWorld.length();this.epsilon=e;this.collisionFound=false;};BABYLON.Collider.prototype._checkPointInTriangle=function(point,pa,pb,pc,n){pa.subtractToRef(point,this._tempVector);pb.subtractToRef(point,this._tempVector2);BABYLON.Vector3.CrossToRef(this._tempVector,this._tempVector2,this._tempVector4);var d=BABYLON.Vector3.Dot(this._tempVector4,n);if(d<0)return false;pc.subtractToRef(point,this._tempVector3);BABYLON.Vector3.CrossToRef(this._tempVector2,this._tempVector3,this._tempVector4);d=BABYLON.Vector3.Dot(this._tempVector4,n);if(d<0)return false;BABYLON.Vector3.CrossToRef(this._tempVector3,this._tempVector,this._tempVector4);d=BABYLON.Vector3.Dot(this._tempVector4,n);return d>=0;};var intersectBoxAASphere=function(boxMin,boxMax,sphereCenter,sphereRadius){if(boxMin.x>sphereCenter.x+sphereRadius)return false;if(sphereCenter.x-sphereRadius>boxMax.x)return false;if(boxMin.y>sphereCenter.y+sphereRadius)return false;if(sphereCenter.y-sphereRadius>boxMax.y)return false;if(boxMin.z>sphereCenter.z+sphereRadius)return false;if(sphereCenter.z-sphereRadius>boxMax.z)return false;return true;};var getLowestRoot=function(a,b,c,maxR){var determinant=b*b-4.0*a*c;var result={root:0,found:false};if(determinant<0)return result;var sqrtD=Math.sqrt(determinant);var r1=(-b-sqrtD)/(2.0*a);var r2=(-b+sqrtD)/(2.0*a);if(r1>r2){var temp=r2;r2=r1;r1=temp;}if(r1>0&&r1<maxR){result.root=r1;result.found=true;return result;}if(r2>0&&r2<maxR){result.root=r2;result.found=true;return result;}return result;};BABYLON.Collider.prototype._canDoCollision=function(sphereCenter,sphereRadius,vecMin,vecMax){var distance=BABYLON.Vector3.Distance(this.basePointWorld,sphereCenter);var max=Math.max(this.radius.x,this.radius.y);max=Math.max(max,this.radius.z);if(distance>this.velocityWorldLength+max+sphereRadius){return false;}if(!intersectBoxAASphere(vecMin,vecMax,this.basePointWorld,this.velocityWorldLength+max))return false;return true;};BABYLON.Collider.prototype._testTriangle=function(subMesh,p1,p2,p3){var t0;var embeddedInPlane=false;this._trianglePlane.copyFromPoints(p1,p2,p3);if((!subMesh.getMaterial())&&!this._trianglePlane.isFrontFacingTo(this.normalizedVelocity,0))return;var signedDistToTrianglePlane=this._trianglePlane.signedDistanceTo(this.basePoint);var normalDotVelocity=BABYLON.Vector3.Dot(this._trianglePlane.normal,this.velocity);if(normalDotVelocity==0){if(Math.abs(signedDistToTrianglePlane)>=1.0)return;embeddedInPlane=true;t0=0;}else{t0=(-1.0-signedDistToTrianglePlane)/normalDotVelocity;var t1=(1.0-signedDistToTrianglePlane)/normalDotVelocity;if(t0>t1){var temp=t1;t1=t0;t0=temp;}if(t0>1.0||t1<0.0)return;if(t0<0)t0=0;if(t0>1.0)t0=1.0;}this._collisionPoint.copyFromFloats(0,0,0);var found=false;var t=1.0;if(!embeddedInPlane){this.basePoint.subtractToRef(this._trianglePlane.normal,this._planeIntersectionPoint);this.velocity.scaleToRef(t0,this._tempVector);this._planeIntersectionPoint.addInPlace(this._tempVector);if(this._checkPointInTriangle(this._planeIntersectionPoint,p1,p2,p3,this._trianglePlane.normal)){found=true;t=t0;this._collisionPoint.copyFrom(this._planeIntersectionPoint);}}if(!found){var velocitySquaredLength=this.velocity.lengthSquared();var a=velocitySquaredLength;this.basePoint.subtractToRef(p1,this._tempVector);var b=2.0*(BABYLON.Vector3.Dot(this.velocity,this._tempVector));var c=this._tempVector.lengthSquared-1.0;var lowestRoot=getLowestRoot(a,b,c,t);if(lowestRoot.found){t=lowestRoot.root;found=true;this._collisionPoint.copyFrom(p1);}this.basePoint.subtractToRef(p2,this._tempVector);b=2.0*(BABYLON.Vector3.Dot(this.velocity,this._tempVector));c=this._tempVector.lengthSquared-1.0;lowestRoot=getLowestRoot(a,b,c,t);if(lowestRoot.found){t=lowestRoot.root;found=true;this._collisionPoint.copyFrom(p2);}this.basePoint.subtractToRef(p3,this._tempVector);b=2.0*(BABYLON.Vector3.Dot(this.velocity,this._tempVector));c=this._tempVector.lengthSquared-1.0;lowestRoot=getLowestRoot(a,b,c,t);if(lowestRoot.found){t=lowestRoot.root;found=true;this._collisionPoint.copyFrom(p3);}p2.subtractToRef(p1,this._edge);p1.subtractToRef(this.basePoint,this._baseToVertex);var edgeSquaredLength=this._edge.lengthSquared();var edgeDotVelocity=BABYLON.Vector3.Dot(this._edge,this.velocity);var edgeDotBaseToVertex=BABYLON.Vector3.Dot(this._edge,this._baseToVertex);a=edgeSquaredLength*(-velocitySquaredLength)+edgeDotVelocity*edgeDotVelocity;b=edgeSquaredLength*(2.0*BABYLON.Vector3.Dot(this.velocity,this._baseToVertex))-2.0*edgeDotVelocity*edgeDotBaseToVertex;c=edgeSquaredLength*(1.0-this._baseToVertex.lengthSquared())+edgeDotBaseToVertex*edgeDotBaseToVertex;lowestRoot=getLowestRoot(a,b,c,t);if(lowestRoot.found){var f=(edgeDotVelocity*lowestRoot.root-edgeDotBaseToVertex)/edgeSquaredLength;if(f>=0.0&&f<=1.0){t=lowestRoot.root;found=true;this._edge.scaleInPlace(f);p1.addToRef(this._edge,this._collisionPoint);}}p3.subtractToRef(p2,this._edge);p2.subtractToRef(this.basePoint,this._baseToVertex);edgeSquaredLength=this._edge.lengthSquared();edgeDotVelocity=BABYLON.Vector3.Dot(this._edge,this.velocity);edgeDotBaseToVertex=BABYLON.Vector3.Dot(this._edge,this._baseToVertex);a=edgeSquaredLength*(-velocitySquaredLength)+edgeDotVelocity*edgeDotVelocity;b=edgeSquaredLength*(2.0*BABYLON.Vector3.Dot(this.velocity,this._baseToVertex))-2.0*edgeDotVelocity*edgeDotBaseToVertex;c=edgeSquaredLength*(1.0-this._baseToVertex.lengthSquared())+edgeDotBaseToVertex*edgeDotBaseToVertex;lowestRoot=getLowestRoot(a,b,c,t);if(lowestRoot.found){var f=(edgeDotVelocity*lowestRoot.root-edgeDotBaseToVertex)/edgeSquaredLength;if(f>=0.0&&f<=1.0){t=lowestRoot.root;found=true;this._edge.scaleInPlace(f);p2.addToRef(this._edge,this._collisionPoint);}}p1.subtractToRef(p3,this._edge);p3.subtractToRef(this.basePoint,this._baseToVertex);edgeSquaredLength=this._edge.lengthSquared();edgeDotVelocity=BABYLON.Vector3.Dot(this._edge,this.velocity);edgeDotBaseToVertex=BABYLON.Vector3.Dot(this._edge,this._baseToVertex);a=edgeSquaredLength*(-velocitySquaredLength)+edgeDotVelocity*edgeDotVelocity;b=edgeSquaredLength*(2.0*BABYLON.Vector3.Dot(this.velocity,this._baseToVertex))-2.0*edgeDotVelocity*edgeDotBaseToVertex;c=edgeSquaredLength*(1.0-this._baseToVertex.lengthSquared())+edgeDotBaseToVertex*edgeDotBaseToVertex;lowestRoot=getLowestRoot(a,b,c,t);if(lowestRoot.found){var f=(edgeDotVelocity*lowestRoot.root-edgeDotBaseToVertex)/edgeSquaredLength;if(f>=0.0&&f<=1.0){t=lowestRoot.root;found=true;this._edge.scaleInPlace(f);p3.addToRef(this._edge,this._collisionPoint);}}}if(found){var distToCollision=t*this.velocity.length();if(!this.collisionFound||distToCollision<this.nearestDistance){if(!this.intersectionPoint){this.intersectionPoint=this._collisionPoint.clone();}else{this.intersectionPoint.copyFrom(this._collisionPoint);}this.nearestDistance=distToCollision;this.collisionFound=true;}}};BABYLON.Collider.prototype._collide=function(subMesh,pts,indices,indexStart,indexEnd,decal){for(var i=indexStart;i<indexEnd;i+=3){var p1=pts[indices[i]-decal];var p2=pts[indices[i+1]-decal];var p3=pts[indices[i+2]-decal];this._testTriangle(subMesh,p3,p2,p1);}};BABYLON.Collider.prototype._getResponse=function(pos,vel){pos.addToRef(vel,this._destinationPoint);vel.scaleInPlace((this.nearestDistance/vel.length()));this.basePoint.addToRef(vel,pos);pos.subtractToRef(this.intersectionPoint,this._slidePlaneNormal);this._slidePlaneNormal.normalize();this._slidePlaneNormal.scaleToRef(this.epsilon,this._displacementVector);pos.addInPlace(this._displacementVector);this.intersectionPoint.addInPlace(this._displacementVector);this._slidePlaneNormal.scaleInPlace(BABYLON.Plane.SignedDistanceToPlaneFromPositionAndNormal(this.intersectionPoint,this._slidePlaneNormal,this._destinationPoint));this._destinationPoint.subtractInPlace(this._slidePlaneNormal);this._destinationPoint.subtractToRef(this.intersectionPoint,vel);};})();var BABYLON=BABYLON||{};(function(){BABYLON.Camera=function(name,position,scene){this.name=name;this.id=name;this.position=position;this._scene=scene;scene.cameras.push(this);if(!scene.activeCamera){scene.activeCamera=this;}};BABYLON.Camera.PERSPECTIVE_CAMERA=0;BABYLON.Camera.ORTHOGRAPHIC_CAMERA=1;BABYLON.Camera.prototype.fov=0.8;BABYLON.Camera.prototype.orthoLeft=null;BABYLON.Camera.prototype.orthoRight=null;BABYLON.Camera.prototype.orthoBottom=null;BABYLON.Camera.prototype.orthoTop=null;BABYLON.Camera.prototype.fov=0.8;BABYLON.Camera.prototype.minZ=0.1;BABYLON.Camera.prototype.maxZ=1000.0;BABYLON.Camera.prototype.inertia=0.9;BABYLON.Camera.prototype.mode=BABYLON.Camera.PERSPECTIVE_CAMERA;BABYLON.Camera.prototype.attachControl=function(canvas){};BABYLON.Camera.prototype.detachControl=function(canvas){};BABYLON.Camera.prototype._update=function(){};BABYLON.Camera.prototype.getViewMatrix=function(){return BABYLON.Matrix.Identity();};BABYLON.Camera.prototype.getProjectionMatrix=function(){if(!this._projectionMatrix){this._projectionMatrix=new BABYLON.Matrix();}var engine=this._scene.getEngine();if(this.mode===BABYLON.Camera.PERSPECTIVE_CAMERA){BABYLON.Matrix.PerspectiveFovLHToRef(this.fov,engine.getAspectRatio(),this.minZ,this.maxZ,this._projectionMatrix);return this._projectionMatrix;}var halfWidth=engine.getRenderWidth()/2.0;var halfHeight=engine.getRenderHeight()/2.0;BABYLON.Matrix.OrthoOffCenterLHToRef(this.orthoLeft||-halfWidth,this.orthoRight||halfWidth,this.orthoBottom||-halfHeight,this.orthoTop||halfHeight,this.minZ,this.maxZ,this._projectionMatrix);return this._projectionMatrix;};})();var BABYLON=BABYLON||{};(function(){BABYLON.FreeCamera=function(name,position,scene){this.name=name;this.id=name;this._scene=scene;this.position=position;scene.cameras.push(this);this.cameraDirection=new BABYLON.Vector3(0,0,0);this.cameraRotation=new BABYLON.Vector2(0,0);this.rotation=new BABYLON.Vector3(0,0,0);this.ellipsoid=new BABYLON.Vector3(0.5,1,0.5);this._keys=[];this.keysUp=[38];this.keysDown=[40];this.keysLeft=[37];this.keysRight=[39];if(!scene.activeCamera){scene.activeCamera=this;}this._collider=new BABYLON.Collider();this._needMoveForGravity=true;this.animations=[];this._currentTarget=BABYLON.Vector3.Zero();this._upVector=BABYLON.Vector3.Up();this._viewMatrix=BABYLON.Matrix.Zero();this._camMatrix=BABYLON.Matrix.Zero();this._cameraTransformMatrix=BABYLON.Matrix.Zero();this._cameraRotationMatrix=BABYLON.Matrix.Zero();this._referencePoint=BABYLON.Vector3.Zero();this._transformedReferencePoint=BABYLON.Vector3.Zero();this._oldPosition=BABYLON.Vector3.Zero();this._diffPosition=BABYLON.Vector3.Zero();this._newPosition=BABYLON.Vector3.Zero();};BABYLON.FreeCamera.prototype=Object.create(BABYLON.Camera.prototype);BABYLON.FreeCamera.prototype.speed=2.0;BABYLON.FreeCamera.prototype.checkCollisions=false;BABYLON.FreeCamera.prototype.applyGravity=false;BABYLON.FreeCamera.prototype._computeLocalCameraSpeed=function(){return this.speed*((BABYLON.Tools.GetDeltaTime()/(BABYLON.Tools.GetFps()*10.0)));};BABYLON.FreeCamera.prototype.setTarget=function(target){BABYLON.Matrix.LookAtLHToRef(this.position,target,BABYLON.Vector3.Up(),this._camMatrix);this._camMatrix.invert();this.rotation.x=Math.atan(this._camMatrix.m[6]/this._camMatrix.m[10]);var vDir=target.subtract(this.position);if(vDir.x>=0.0){this.rotation.y=(-Math.atan(vDir.z/vDir.x)+Math.PI/2.0);}else{this.rotation.y=(-Math.atan(vDir.z/vDir.x)-Math.PI/2.0);}this.rotation.z=-Math.acos(BABYLON.Vector3.Dot(new BABYLON.Vector3(0,1.0,0),BABYLON.Vector3.Up()));if(isNaN(this.rotation.x))this.rotation.x=0;if(isNaN(this.rotation.y))this.rotation.y=0;if(isNaN(this.rotation.z))this.rotation.z=0;};BABYLON.FreeCamera.prototype.attachControl=function(canvas,noPreventDefault){var previousPosition;var that=this;var engine=this._scene.getEngine();if(this._attachedCanvas){return;}this._attachedCanvas=canvas;if(this._onMouseDown===undefined){this._onMouseDown=function(evt){previousPosition={x:evt.clientX,y:evt.clientY};if(!noPreventDefault){evt.preventDefault();}};this._onMouseUp=function(evt){previousPosition=null;if(!noPreventDefault){evt.preventDefault();}};this._onMouseOut=function(evt){previousPosition=null;that._keys=[];if(!noPreventDefault){evt.preventDefault();}};this._onMouseMove=function(evt){if(!previousPosition&&!engine.isPointerLock){return;}var offsetX;var offsetY;if(!engine.isPointerLock){offsetX=evt.clientX-previousPosition.x;offsetY=evt.clientY-previousPosition.y;}else{offsetX=evt.movementX||evt.mozMovementX||evt.webkitMovementX||evt.msMovementX||0;offsetY=evt.movementY||evt.mozMovementY||evt.webkitMovementY||evt.msMovementY||0;}that.cameraRotation.y+=offsetX/2000.0;that.cameraRotation.x+=offsetY/2000.0;previousPosition={x:evt.clientX,y:evt.clientY};if(!noPreventDefault){evt.preventDefault();}};this._onKeyDown=function(evt){if(that.keysUp.indexOf(evt.keyCode)!==-1||that.keysDown.indexOf(evt.keyCode)!==-1||that.keysLeft.indexOf(evt.keyCode)!==-1||that.keysRight.indexOf(evt.keyCode)!==-1){var index=that._keys.indexOf(evt.keyCode);if(index===-1){that._keys.push(evt.keyCode);}if(!noPreventDefault){evt.preventDefault();}}};this._onKeyUp=function(evt){if(that.keysUp.indexOf(evt.keyCode)!==-1||that.keysDown.indexOf(evt.keyCode)!==-1||that.keysLeft.indexOf(evt.keyCode)!==-1||that.keysRight.indexOf(evt.keyCode)!==-1){var index=that._keys.indexOf(evt.keyCode);if(index>=0){that._keys.splice(index,1);}if(!noPreventDefault){evt.preventDefault();}}};this._onLostFocus=function(){that._keys=[];};}canvas.addEventListener("mousedown",this._onMouseDown,false);canvas.addEventListener("mouseup",this._onMouseUp,false);canvas.addEventListener("mouseout",this._onMouseOut,false);canvas.addEventListener("mousemove",this._onMouseMove,false);window.addEventListener("keydown",this._onKeyDown,false);window.addEventListener("keyup",this._onKeyUp,false);window.addEventListener("blur",this._onLostFocus,false);};BABYLON.FreeCamera.prototype.detachControl=function(canvas){if(this._attachedCanvas!=canvas){return;}canvas.removeEventListener("mousedown",this._onMouseDown);canvas.removeEventListener("mouseup",this._onMouseUp);canvas.removeEventListener("mouseout",this._onMouseOut);canvas.removeEventListener("mousemove",this._onMouseMove);window.removeEventListener("keydown",this._onKeyDown);window.removeEventListener("keyup",this._onKeyUp);window.removeEventListener("blur",this._onLostFocus);this._attachedCanvas=null;};BABYLON.FreeCamera.prototype._collideWithWorld=function(velocity){this.position.subtractFromFloatsToRef(0,this.ellipsoid.y,0,this._oldPosition);this._collider.radius=this.ellipsoid;this._scene._getNewPosition(this._oldPosition,velocity,this._collider,3,this._newPosition);this._newPosition.subtractToRef(this._oldPosition,this._diffPosition);if(this._diffPosition.length()>BABYLON.Engine.collisionsEpsilon){this.position.addInPlace(this._diffPosition);}};BABYLON.FreeCamera.prototype._checkInputs=function(){if(!this._localDirection){this._localDirection=BABYLON.Vector3.Zero();this._transformedDirection=BABYLON.Vector3.Zero();}for(var index=0;index<this._keys.length;index++){var keyCode=this._keys[index];var speed=this._computeLocalCameraSpeed();if(this.keysLeft.indexOf(keyCode)!==-1){this._localDirection.copyFromFloats(-speed,0,0);}else if(this.keysUp.indexOf(keyCode)!==-1){this._localDirection.copyFromFloats(0,0,speed);}else if(this.keysRight.indexOf(keyCode)!==-1){this._localDirection.copyFromFloats(speed,0,0);}else if(this.keysDown.indexOf(keyCode)!==-1){this._localDirection.copyFromFloats(0,0,-speed);}BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,0,this._cameraTransformMatrix);BABYLON.Vector3.TransformCoordinatesToRef(this._localDirection,this._cameraTransformMatrix,this._transformedDirection);this.cameraDirection.addInPlace(this._transformedDirection);}};BABYLON.FreeCamera.prototype._update=function(){this._checkInputs();var needToMove=this._needMoveForGravity||Math.abs(this.cameraDirection.x)>0||Math.abs(this.cameraDirection.y)>0||Math.abs(this.cameraDirection.z)>0;var needToRotate=Math.abs(this.cameraRotation.x)>0||Math.abs(this.cameraRotation.y)>0;if(needToMove){if(this.checkCollisions&&this._scene.collisionsEnabled){this._collideWithWorld(this.cameraDirection);if(this.applyGravity){var oldPosition=this.position;this._collideWithWorld(this._scene.gravity);this._needMoveForGravity=(BABYLON.Vector3.DistanceSquared(oldPosition,this.position)!=0);}}else{this.position.addInPlace(this.cameraDirection);}}if(needToRotate){this.rotation.x+=this.cameraRotation.x;this.rotation.y+=this.cameraRotation.y;var limit=(Math.PI/2)*0.95;if(this.rotation.x>limit)this.rotation.x=limit;if(this.rotation.x<-limit)this.rotation.x=-limit;}if(needToMove){this.cameraDirection.scaleInPlace(this.inertia);}if(needToRotate){this.cameraRotation.scaleInPlace(this.inertia);}};BABYLON.FreeCamera.prototype.getViewMatrix=function(){BABYLON.Vector3.FromFloatsToRef(0,0,1,this._referencePoint);BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._cameraRotationMatrix);BABYLON.Vector3.TransformCoordinatesToRef(this._referencePoint,this._cameraRotationMatrix,this._transformedReferencePoint);this.position.addToRef(this._transformedReferencePoint,this._currentTarget);BABYLON.Matrix.LookAtLHToRef(this.position,this._currentTarget,this._upVector,this._viewMatrix);return this._viewMatrix;};})();var BABYLON=BABYLON||{};(function(){BABYLON.TouchCamera=function(name,position,scene){this.name=name;this.id=name;this._scene=scene;this.position=position;scene.cameras.push(this);this.cameraDirection=new BABYLON.Vector3(0,0,0);this.cameraRotation=new BABYLON.Vector2(0,0);this.rotation=new BABYLON.Vector3(0,0,0);this.ellipsoid=new BABYLON.Vector3(0.5,1,0.5);this.angularSensibility=200000.0;this.moveSensibility=500.0;if(!scene.activeCamera){scene.activeCamera=this;}this._collider=new BABYLON.Collider();this._needMoveForGravity=true;this._offsetX=null;this._offsetY=null;this._pointerCount=0;this._pointerPressed=[];this.animations=[];this._cameraRotationMatrix=new BABYLON.Matrix();this._referencePoint=BABYLON.Vector3.Zero();this._currentTarget=BABYLON.Vector3.Zero();this._camMatrix=BABYLON.Matrix.Zero();this._transformedReferencePoint=BABYLON.Vector3.Zero();this._viewMatrix=BABYLON.Matrix.Zero();this._upVector=BABYLON.Vector3.Up();this._oldPosition=BABYLON.Vector3.Zero();this._diffPosition=BABYLON.Vector3.Zero();this._newPosition=BABYLON.Vector3.Zero();};BABYLON.TouchCamera.prototype=Object.create(BABYLON.FreeCamera.prototype);BABYLON.TouchCamera.prototype.attachControl=function(canvas,noPreventDefault){var previousPosition;var that=this;if(this._attachedCanvas){return;}this._attachedCanvas=canvas;if(this._onPointerDown===undefined){this._onPointerDown=function(evt){if(!noPreventDefault){evt.preventDefault();}that._pointerPressed.push(evt.pointerId);if(that._pointerPressed.length!==1){return;}previousPosition={x:evt.clientX,y:evt.clientY};};this._onPointerUp=function(evt){if(!noPreventDefault){evt.preventDefault();}var index=that._pointerPressed.indexOf(evt.pointerId);if(index===-1){return;}that._pointerPressed.splice(index,1);if(index!=0){return;}previousPosition=null;that._offsetX=null;that._offsetY=null;};this._onPointerMove=function(evt){if(!noPreventDefault){evt.preventDefault();}if(!previousPosition){return;}var index=that._pointerPressed.indexOf(evt.pointerId);if(index!=0){return;}that._offsetX=evt.clientX-previousPosition.x;that._offsetY=-(evt.clientY-previousPosition.y);};this._onLostFocus=function(){that._offsetX=null;that._offsetY=null;};}canvas.addEventListener("pointerdown",this._onPointerDown);canvas.addEventListener("pointerup",this._onPointerUp);canvas.addEventListener("pointerout",this._onPointerUp);canvas.addEventListener("pointermove",this._onPointerMove);window.addEventListener("blur",this._onLostFocus);};BABYLON.TouchCamera.prototype.detachControl=function(canvas){if(this._attachedCanvas!=canvas){return;}canvas.removeEventListener("pointerdown",this._onPointerDown);canvas.removeEventListener("pointerup",this._onPointerUp);canvas.removeEventListener("pointerout",this._onPointerUp);canvas.removeEventListener("pointermove",this._onPointerMove);window.removeEventListener("blur",this._onLostFocus);this._attachedCanvas=null;};BABYLON.TouchCamera.prototype._checkInputs=function(){if(!this._offsetX){return;}this.cameraRotation.y+=this._offsetX/this.angularSensibility;if(this._pointerPressed.length>1){this.cameraRotation.x+=-this._offsetY/this.angularSensibility;}else{var speed=this._computeLocalCameraSpeed();var direction=new BABYLON.Vector3(0,0,speed*this._offsetY/this.moveSensibility);BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,0,this._cameraRotationMatrix);this.cameraDirection.addInPlace(BABYLON.Vector3.TransformCoordinates(direction,this._cameraRotationMatrix));}};})();var BABYLON=BABYLON||{};(function(){BABYLON.DeviceOrientationCamera=function(name,position,scene){this.name=name;this.id=name;this._scene=scene;this.position=position;scene.cameras.push(this);this.cameraDirection=new BABYLON.Vector3(0,0,0);this.cameraRotation=new BABYLON.Vector2(0,0);this.rotation=new BABYLON.Vector3(0,0,0);this.ellipsoid=new BABYLON.Vector3(0.5,1,0.5);this.angularSensibility=10000.0;this.moveSensibility=50.0;if(!scene.activeCamera){scene.activeCamera=this;}this._collider=new BABYLON.Collider();this._needMoveForGravity=true;this._offsetX=null;this._offsetY=null;this._orientationGamma=0;this._orientationBeta=0;this._initialOrientationGamma=0;this._initialOrientationBeta=0;this.animations=[];this._cameraRotationMatrix=new BABYLON.Matrix();this._referencePoint=BABYLON.Vector3.Zero();this._currentTarget=BABYLON.Vector3.Zero();this._transformedReferencePoint=BABYLON.Vector3.Zero();this._viewMatrix=BABYLON.Matrix.Zero();this._upVector=BABYLON.Vector3.Up();this._oldPosition=BABYLON.Vector3.Zero();this._diffPosition=BABYLON.Vector3.Zero();this._newPosition=BABYLON.Vector3.Zero();};BABYLON.DeviceOrientationCamera.prototype=Object.create(BABYLON.FreeCamera.prototype);BABYLON.DeviceOrientationCamera.prototype.attachControl=function(canvas,noPreventDefault){if(this._attachedCanvas){return;}this._attachedCanvas=canvas;var that=this;if(!this._orientationChanged){this._orientationChanged=function(evt){if(!that._initialOrientationGamma){that._initialOrientationGamma=evt.gamma;that._initialOrientationBeta=evt.beta;}that._orientationGamma=evt.gamma;that._orientationBeta=evt.beta;that._offsetY=(that._initialOrientationBeta-that._orientationBeta);that._offsetX=(that._initialOrientationGamma-that._orientationGamma);};}window.addEventListener("deviceorientation",this._orientationChanged);};BABYLON.DeviceOrientationCamera.prototype.detachControl=function(canvas){if(this._attachedCanvas!=canvas){return;}window.removeEventListener("deviceorientation",this._orientationChanged);this._attachedCanvas=null;this._orientationGamma=0;this._orientationBeta=0;this._initialOrientationGamma=0;this._initialOrientationBeta=0;};BABYLON.DeviceOrientationCamera.prototype._checkInputs=function(){if(!this._offsetX){return;}this.cameraRotation.y-=this._offsetX/this.angularSensibility;var speed=this._computeLocalCameraSpeed();var direction=new BABYLON.Vector3(0,0,speed*this._offsetY/this.moveSensibility);BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,0,this._cameraRotationMatrix);this.cameraDirection.addInPlace(BABYLON.Vector3.TransformCoordinates(direction,this._cameraRotationMatrix));};})();var BABYLON=BABYLON||{};(function(){var eventPrefix=BABYLON.Tools.GetPointerPrefix();BABYLON.ArcRotateCamera=function(name,alpha,beta,radius,target,scene){this.name=name;this.id=name;this.alpha=alpha;this.beta=beta;this.radius=radius;this.target=target;this.position=BABYLON.Vector3.Zero();this._keys=[];this.keysUp=[38];this.keysDown=[40];this.keysLeft=[37];this.keysRight=[39];this._scene=scene;scene.cameras.push(this);if(!scene.activeCamera){scene.activeCamera=this;}this._viewMatrix=new BABYLON.Matrix();this.getViewMatrix();this.animations=[];};BABYLON.ArcRotateCamera.prototype=Object.create(BABYLON.Camera.prototype);BABYLON.ArcRotateCamera.prototype.inertialAlphaOffset=0;BABYLON.ArcRotateCamera.prototype.inertialBetaOffset=0;BABYLON.ArcRotateCamera.prototype.lowerAlphaLimit=null;BABYLON.ArcRotateCamera.prototype.upperAlphaLimit=null;BABYLON.ArcRotateCamera.prototype.lowerBetaLimit=null;BABYLON.ArcRotateCamera.prototype.upperBetaLimit=null;BABYLON.ArcRotateCamera.prototype.lowerRadiusLimit=null;BABYLON.ArcRotateCamera.prototype.upperRadiusLimit=null;BABYLON.ArcRotateCamera.prototype.attachControl=function(canvas,noPreventDefault){var previousPosition;var that=this;var pointerId;if(this._attachedCanvas){return;}this._attachedCanvas=canvas;var engine=this._scene.getEngine();if(this._onPointerDown===undefined){this._onPointerDown=function(evt){if(pointerId){return;}pointerId=evt.pointerId;previousPosition={x:evt.clientX,y:evt.clientY};if(!noPreventDefault){evt.preventDefault();}};this._onPointerUp=function(evt){previousPosition=null;pointerId=null;if(!noPreventDefault){evt.preventDefault();}};this._onPointerMove=function(evt){if(!previousPosition){return;}if(pointerId!==evt.pointerId){return;}var offsetX=evt.clientX-previousPosition.x;var offsetY=evt.clientY-previousPosition.y;that.inertialAlphaOffset-=offsetX/1000;that.inertialBetaOffset-=offsetY/1000;previousPosition={x:evt.clientX,y:evt.clientY};if(!noPreventDefault){evt.preventDefault();}};this._onMouseMove=function(evt){if(!engine.isPointerLock){return;}var offsetX=evt.movementX||evt.mozMovementX||evt.webkitMovementX||evt.msMovementX||0;var offsetY=evt.movementY||evt.mozMovementY||evt.webkitMovementY||evt.msMovementY||0;that.inertialAlphaOffset-=offsetX/1000;that.inertialBetaOffset-=offsetY/1000;if(!noPreventDefault){evt.preventDefault();}};this._wheel=function(event){var delta=0;if(event.wheelDelta){delta=event.wheelDelta/120;}else if(event.detail){delta=-event.detail/3;}if(delta)that.radius-=delta;if(event.preventDefault){if(!noPreventDefault){event.preventDefault();}}};this._onKeyDown=function(evt){if(that.keysUp.indexOf(evt.keyCode)!==-1||that.keysDown.indexOf(evt.keyCode)!==-1||that.keysLeft.indexOf(evt.keyCode)!==-1||that.keysRight.indexOf(evt.keyCode)!==-1){var index=that._keys.indexOf(evt.keyCode);if(index===-1){that._keys.push(evt.keyCode);}if(evt.preventDefault){if(!noPreventDefault){evt.preventDefault();}}}};this._onKeyUp=function(evt){if(that.keysUp.indexOf(evt.keyCode)!==-1||that.keysDown.indexOf(evt.keyCode)!==-1||that.keysLeft.indexOf(evt.keyCode)!==-1||that.keysRight.indexOf(evt.keyCode)!==-1){var index=that._keys.indexOf(evt.keyCode);if(index>=0){that._keys.splice(index,1);}if(evt.preventDefault){if(!noPreventDefault){evt.preventDefault();}}}};this._onLostFocus=function(){that._keys=[];pointerId=null;};this._onGestureStart=function(e){if(!that._MSGestureHandler){that._MSGestureHandler=new MSGesture();that._MSGestureHandler.target=canvas;}that._MSGestureHandler.addPointer(e.pointerId);};this._onGesture=function(e){that.radius*=e.scale;if(e.preventDefault){if(!noPreventDefault){e.stopPropagation();e.preventDefault();}}};}canvas.addEventListener(eventPrefix+"down",this._onPointerDown);canvas.addEventListener(eventPrefix+"up",this._onPointerUp);canvas.addEventListener(eventPrefix+"out",this._onPointerUp);canvas.addEventListener(eventPrefix+"move",this._onPointerMove);canvas.addEventListener("mousemove",this._onMouseMove);canvas.addEventListener("MSPointerDown",this._onGestureStart);canvas.addEventListener("MSGestureChange",this._onGesture);window.addEventListener("keydown",this._onKeyDown);window.addEventListener("keyup",this._onKeyUp);window.addEventListener('mousewheel',this._wheel);window.addEventListener("blur",this._onLostFocus);};BABYLON.ArcRotateCamera.prototype.detachControl=function(canvas){if(this._attachedCanvas!=canvas){return;}canvas.removeEventListener(eventPrefix+"down",this._onPointerDown);canvas.removeEventListener(eventPrefix+"up",this._onPointerUp);canvas.removeEventListener(eventPrefix+"out",this._onPointerUp);canvas.removeEventListener(eventPrefix+"move",this._onPointerMove);canvas.removeEventListener("mousemove",this._onMouseMove);canvas.removeEventListener("MSPointerDown",this._onGestureStart);canvas.removeEventListener("MSGestureChange",this._onGesture);window.removeEventListener("keydown",this._onKeyDown);window.removeEventListener("keyup",this._onKeyUp);window.removeEventListener('mousewheel',this._wheel);window.removeEventListener("blur",this._onLostFocus);this._MSGestureHandler=null;this._attachedCanvas=null;};BABYLON.ArcRotateCamera.prototype._update=function(){for(var index=0;index<this._keys.length;index++){var keyCode=this._keys[index];if(this.keysLeft.indexOf(keyCode)!==-1){this.inertialAlphaOffset-=0.01;}else if(this.keysUp.indexOf(keyCode)!==-1){this.inertialBetaOffset-=0.01;}else if(this.keysRight.indexOf(keyCode)!==-1){this.inertialAlphaOffset+=0.01;}else if(this.keysDown.indexOf(keyCode)!==-1){this.inertialBetaOffset+=0.01;}}if(this.inertialAlphaOffset!=0||this.inertialBetaOffset!=0){this.alpha+=this.inertialAlphaOffset;this.beta+=this.inertialBetaOffset;this.inertialAlphaOffset*=this.inertia;this.inertialBetaOffset*=this.inertia;if(Math.abs(this.inertialAlphaOffset)<BABYLON.Engine.epsilon)this.inertialAlphaOffset=0;if(Math.abs(this.inertialBetaOffset)<BABYLON.Engine.epsilon)this.inertialBetaOffset=0;}if(this.lowerAlphaLimit&&this.alpha<this.lowerAlphaLimit){this.alpha=this.lowerAlphaLimit;}if(this.upperAlphaLimit&&this.alpha>this.upperAlphaLimit){this.alpha=this.upperAlphaLimit;}if(this.lowerBetaLimit&&this.beta<this.lowerBetaLimit){this.beta=this.lowerBetaLimit;}if(this.upperBetaLimit&&this.beta>this.upperBetaLimit){this.beta=this.upperBetaLimit;}if(this.lowerRadiusLimit&&this.radius<this.lowerRadiusLimit){this.radius=this.lowerRadiusLimit;}if(this.upperRadiusLimit&&this.radius>this.upperRadiusLimit){this.radius=this.upperRadiusLimit;}};BABYLON.ArcRotateCamera.prototype.setPosition=function(position){var radiusv3=position.subtract(this.target.position?this.target.position:this.target);this.radius=radiusv3.length();this.alpha=Math.atan(radiusv3.z/radiusv3.x);this.beta=Math.acos(radiusv3.y/this.radius);};BABYLON.ArcRotateCamera.prototype.getViewMatrix=function(){if(this.beta>Math.PI)this.beta=Math.PI;if(this.beta<=0)this.beta=0.01;var cosa=Math.cos(this.alpha);var sina=Math.sin(this.alpha);var cosb=Math.cos(this.beta);var sinb=Math.sin(this.beta);this.target.addToRef(new BABYLON.Vector3(this.radius*cosa*sinb,this.radius*cosb,this.radius*sina*sinb),this.position);BABYLON.Matrix.LookAtLHToRef(this.position,this.target,BABYLON.Vector3.Up(),this._viewMatrix);return this._viewMatrix;};})();var BABYLON=BABYLON||{};(function(){BABYLON.Scene=function(engine){this._engine=engine;this.autoClear=true;this.clearColor=new BABYLON.Color3(0.2,0.2,0.3);this.ambientColor=new BABYLON.Color3(0,0,0);engine.scenes.push(this);this._totalVertices=0;this._activeVertices=0;this._activeParticles=0;this._lastFrameDuration=0;this._evaluateActiveMeshesDuration=0;this._renderTargetsDuration=0;this._renderDuration=0;this._renderId=0;this._executeWhenReadyTimeoutId=-1;this._toBeDisposed=new BABYLON.Tools.SmartArray(256);this._onReadyCallbacks=[];this._pendingData=[];this._onBeforeRenderCallbacks=[];this.fogMode=BABYLON.Scene.FOGMODE_NONE;this.fogColor=new BABYLON.Color3(0.2,0.2,0.3);this.fogDensity=0.1;this.fogStart=0;this.fogEnd=1000.0;this.lights=[];this.cameras=[];this.activeCamera=null;this.meshes=[];this._activeMeshes=new BABYLON.Tools.SmartArray(256);this._processedMaterials=new BABYLON.Tools.SmartArray(256);this._renderTargets=new BABYLON.Tools.SmartArray(256);this._activeParticleSystems=new BABYLON.Tools.SmartArray(256);this._activeSkeletons=new BABYLON.Tools.SmartArray(32);this._renderingManager=new BABYLON.RenderingManager(this);this.materials=[];this.multiMaterials=[];this.defaultMaterial=new BABYLON.StandardMaterial("default material",this);this.textures=[];this.particlesEnabled=true;this.particleSystems=[];this.spriteManagers=[];this.layers=[];this.skeletons=[];this.collisionsEnabled=true;this.gravity=new BABYLON.Vector3(0,-9.0,0);this._activeAnimatables=[];this._transformMatrix=BABYLON.Matrix.Zero();this._scaledPosition=BABYLON.Vector3.Zero();this._scaledVelocity=BABYLON.Vector3.Zero();this.postProcessManager=new BABYLON.PostProcessManager();};BABYLON.Scene.prototype.getEngine=function(){return this._engine;};BABYLON.Scene.prototype.getTotalVertices=function(){return this._totalVertices;};BABYLON.Scene.prototype.getActiveVertices=function(){return this._activeVertices;};BABYLON.Scene.prototype.getTotalVertices=function(){return this._totalVertices;};BABYLON.Scene.prototype.getActiveParticles=function(){return this._activeParticles;};BABYLON.Scene.prototype.getLastFrameDuration=function(){return this._lastFrameDuration;};BABYLON.Scene.prototype.getEvaluateActiveMeshesDuration=function(){return this._evaluateActiveMeshesDuration;};BABYLON.Scene.prototype.getRenderTargetsDuration=function(){return this._renderTargetsDuration;};BABYLON.Scene.prototype.getRenderDuration=function(){return this._renderDuration;};BABYLON.Scene.prototype.getParticlesDuration=function(){return this._particlesDuration;};BABYLON.Scene.prototype.getSpritesDuration=function(){return this._spritesDuration;};BABYLON.Scene.prototype.getAnimationRatio=function(){return this._animationRatio;};BABYLON.Scene.prototype.getRenderId=function(){return this._renderId;};BABYLON.Scene.prototype.isReady=function(){if(this._pendingData.length>0){return false;}for(var index=0;index<this.meshes.length;index++){var mesh=this.meshes[index];var mat=mesh.material;if(mesh.delayLoadState===BABYLON.Engine.DELAYLOADSTATE_LOADING){return false;}if(mat){if(!mat.isReady(mesh,mesh.delayLoadState!==BABYLON.Engine.DELAYLOADSTATE_NOTLOADED)){return false;}}}return true;};BABYLON.Scene.prototype.registerBeforeRender=function(func){this._onBeforeRenderCallbacks.push(func);};BABYLON.Scene.prototype.unregisterBeforeRender=function(func){var index=this._onBeforeRenderCallbacks.indexOf(func);if(index>-1){this._onBeforeRenderCallbacks.splice(index,1);}};BABYLON.Scene.prototype._addPendingData=function(data){this._pendingData.push(data);};BABYLON.Scene.prototype._removePendingData=function(data){var index=this._pendingData.indexOf(data);if(index!==-1){this._pendingData.splice(index,1);}};BABYLON.Scene.prototype.getWaitingItemsCount=function(){return this._pendingData.length;};BABYLON.Scene.prototype.executeWhenReady=function(func){this._onReadyCallbacks.push(func);if(this._executeWhenReadyTimeoutId!==-1){return;}var that=this;this._executeWhenReadyTimeoutId=setTimeout(function(){that._checkIsReady();},150);};BABYLON.Scene.prototype._checkIsReady=function(){if(this.isReady()){this._onReadyCallbacks.forEach(function(func){func();});this._onReadyCallbacks=[];this._executeWhenReadyTimeoutId=-1;return;}var that=this;this._executeWhenReadyTimeoutId=setTimeout(function(){that._checkIsReady();},150);};BABYLON.Scene.prototype.beginAnimation=function(target,from,to,loop,speedRatio,onAnimationEnd){if(speedRatio===undefined){speedRatio=1.0;}if(target.animations){this.stopAnimation(target);var animatable=new BABYLON._Animatable(target,from,to,loop,speedRatio,onAnimationEnd);this._activeAnimatables.push(animatable);}if(target.getAnimatables){var animatables=target.getAnimatables();for(var index=0;index<animatables.length;index++){this.beginAnimation(animatables[index],from,to,loop,speedRatio,onAnimationEnd);}}};BABYLON.Scene.prototype.stopAnimation=function(target){for(var index=0;index<this._activeAnimatables.length;index++){if(this._activeAnimatables[index].target===target){this._activeAnimatables.splice(index,1);return;}}};BABYLON.Scene.prototype._animate=function(){if(!this._animationStartDate){this._animationStartDate=new Date();}var now=new Date();var delay=now-this._animationStartDate;for(var index=0;index<this._activeAnimatables.length;index++){if(!this._activeAnimatables[index]._animate(delay)){this._activeAnimatables.splice(index,1);index--;}}};BABYLON.Scene.prototype.getViewMatrix=function(){return this._viewMatrix;};BABYLON.Scene.prototype.getProjectionMatrix=function(){return this._projectionMatrix;};BABYLON.Scene.prototype.getTransformMatrix=function(){return this._transformMatrix;};BABYLON.Scene.prototype.setTransformMatrix=function(view,projection){this._viewMatrix=view;this._projectionMatrix=projection;this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix);};BABYLON.Scene.prototype.activeCameraByID=function(id){for(var index=0;index<this.cameras.length;index++){if(this.cameras[index].id===id){this.activeCamera=this.cameras[index];return;}}};BABYLON.Scene.prototype.getMaterialByID=function(id){for(var index=0;index<this.materials.length;index++){if(this.materials[index].id===id){return this.materials[index];}}return null;};BABYLON.Scene.prototype.getLightByID=function(id){for(var index=0;index<this.lights.length;index++){if(this.lights[index].id===id){return this.lights[index];}}return null;};BABYLON.Scene.prototype.getMeshByID=function(id){for(var index=0;index<this.meshes.length;index++){if(this.meshes[index].id===id){return this.meshes[index];}}return null;};BABYLON.Scene.prototype.getLastMeshByID=function(id){for(var index=this.meshes.length-1;index>=0;index--){if(this.meshes[index].id===id){return this.meshes[index];}}return null;};BABYLON.Scene.prototype.getMeshByName=function(name){for(var index=0;index<this.meshes.length;index++){if(this.meshes[index].name===name){return this.meshes[index];}}return null;};BABYLON.Scene.prototype.getLastSkeletonByID=function(id){for(var index=this.skeletons.length-1;index>=0;index--){if(this.skeletons[index].id===id){return this.skeletons[index];}}return null;};BABYLON.Scene.prototype.getSkeletonById=function(id){for(var index=0;index<this.skeletons.length;index++){if(this.skeletons[index].id===id){return this.skeletons[index];}}return null;};BABYLON.Scene.prototype.getSkeletonByName=function(name){for(var index=0;index<this.skeleton.length;index++){if(this.skeletons[index].name===name){return this.skeletons[index];}}return null;};BABYLON.Scene.prototype.isActiveMesh=function(mesh){return(this._activeMeshes.indexOf(mesh)!==-1);};BABYLON.Scene.prototype._evaluateSubMesh=function(subMesh,mesh){if(mesh.subMeshes.length==1||subMesh.isInFrustrum(this._frustumPlanes)){var material=subMesh.getMaterial();if(material){if(material.getRenderTargetTextures){if(this._processedMaterials.indexOf(material)===-1){this._processedMaterials.push(material);this._renderTargets.concat(material.getRenderTargetTextures());}}this._activeVertices+=subMesh.verticesCount;this._renderingManager.dispatch(subMesh);}}};BABYLON.Scene.prototype._evaluateActiveMeshes=function(){this._activeMeshes.reset();this._renderingManager.reset();this._processedMaterials.reset();this._renderTargets.reset();this._activeParticleSystems.reset();this._activeSkeletons.reset();if(!this._frustumPlanes){this._frustumPlanes=BABYLON.Frustum.GetPlanes(this._transformMatrix);}else{BABYLON.Frustum.GetPlanesToRef(this._transformMatrix,this._frustumPlanes);}this._totalVertices=0;this._activeVertices=0;if(this._selectionOctree){var selection=this._selectionOctree.select(this._frustumPlanes);for(var blockIndex=0;blockIndex<selection.length;blockIndex++){var block=selection.data[blockIndex];for(var meshIndex=0;meshIndex<block.meshes.length;meshIndex++){var mesh=block.meshes[meshIndex];if(Math.abs(mesh._renderId)!==this._renderId){this._totalVertices+=mesh.getTotalVertices();if(!mesh.isReady()){continue;}mesh.computeWorldMatrix();mesh._renderId=0;}if(mesh._renderId===this._renderId||(mesh._renderId===0&&mesh.isEnabled()&&mesh.isVisible&&mesh.visibility>0&&mesh.isInFrustrum(this._frustumPlanes))){if(mesh._renderId===0){this._activeMeshes.push(mesh);}mesh._renderId=this._renderId;if(mesh.skeleton){this._activeSkeletons.pushNoDuplicate(mesh.skeleton);}var subMeshes=block.subMeshes[meshIndex];for(var subIndex=0;subIndex<subMeshes.length;subIndex++){var subMesh=subMeshes[subIndex];if(subMesh._renderId===this._renderId){continue;}subMesh._renderId=this._renderId;this._evaluateSubMesh(subMesh,mesh);}}else{mesh._renderId=-this._renderId;}}}}else{for(var meshIndex=0;meshIndex<this.meshes.length;meshIndex++){var mesh=this.meshes[meshIndex];this._totalVertices+=mesh.getTotalVertices();if(!mesh.isReady()){continue;}mesh.computeWorldMatrix();if(mesh.isEnabled()&&mesh.isVisible&&mesh.visibility>0&&mesh.isInFrustrum(this._frustumPlanes)){this._activeMeshes.push(mesh);if(mesh.skeleton){this._activeSkeletons.pushNoDuplicate(mesh.skeleton);}for(var subIndex=0;subIndex<mesh.subMeshes.length;subIndex++){var subMesh=mesh.subMeshes[subIndex];this._evaluateSubMesh(subMesh,mesh);}}}}var beforeParticlesDate=new Date();if(this.particlesEnabled){for(var particleIndex=0;particleIndex<this.particleSystems.length;particleIndex++){var particleSystem=this.particleSystems[particleIndex];if(!particleSystem.emitter.position||(particleSystem.emitter&&particleSystem.emitter.isEnabled())){this._activeParticleSystems.push(particleSystem);particleSystem.animate();}}}this._particlesDuration+=new Date()-beforeParticlesDate;};BABYLON.Scene.prototype.render=function(){var startDate=new Date();this._particlesDuration=0;this._activeParticles=0;var engine=this._engine;if(this.beforeRender){this.beforeRender();}for(var callbackIndex=0;callbackIndex<this._onBeforeRenderCallbacks.length;callbackIndex++){this._onBeforeRenderCallbacks[callbackIndex]();}if(!this.activeCamera)throw new Error("Active camera not set");this.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix());this._animationRatio=BABYLON.Tools.GetDeltaTime()*(60.0/1000.0);this._animate();this._renderId++;var beforeEvaluateActiveMeshesDate=new Date();this._evaluateActiveMeshes();this._evaluateActiveMeshesDuration=new Date()-beforeEvaluateActiveMeshesDate;for(var skeletonIndex=0;skeletonIndex<this._activeSkeletons.length;skeletonIndex++){var skeleton=this._activeSkeletons.data[skeletonIndex];skeleton.prepare();}for(var lightIndex=0;lightIndex<this.lights.length;lightIndex++){var light=this.lights[lightIndex];var shadowGenerator=light.getShadowGenerator();if(light.isEnabled&&shadowGenerator){this._renderTargets.push(shadowGenerator.getShadowMap());}}var beforeRenderTargetDate=new Date();for(var renderIndex=0;renderIndex<this._renderTargets.length;renderIndex++){var renderTarget=this._renderTargets.data[renderIndex];this._renderId++;renderTarget.render();}if(this._renderTargets.length>0){engine.restoreDefaultFramebuffer();}this._renderTargetsDuration=new Date()-beforeRenderTargetDate;this.postProcessManager._prepareFrame();var beforeRenderDate=new Date();engine.clear(this.clearColor,this.autoClear||this.forceWireframe,true);if(this.layers.length){engine.setDepthBuffer(false);var layerIndex;var layer;for(layerIndex=0;layerIndex<this.layers.length;layerIndex++){layer=this.layers[layerIndex];if(layer.isBackground){layer.render();}}engine.setDepthBuffer(true);}this._renderingManager.render(null,null,true,true);if(this.layers.length){engine.setDepthBuffer(false);for(layerIndex=0;layerIndex<this.layers.length;layerIndex++){layer=this.layers[layerIndex];if(!layer.isBackground){layer.render();}}engine.setDepthBuffer(true);}this._renderDuration=new Date()-beforeRenderDate;this.postProcessManager._finalizeFrame();this.activeCamera._update();if(this.afterRender){this.afterRender();}for(var index=0;index<this._toBeDisposed.length;index++){this._toBeDisposed.data[index].dispose();this._toBeDisposed[index]=null;}this._toBeDisposed.reset();this._lastFrameDuration=new Date()-startDate;};BABYLON.Scene.prototype.dispose=function(){this.beforeRender=null;this.afterRender=null;this.skeletons=[];var canvas=this._engine.getRenderingCanvas();var index;for(index=0;index<this.cameras.length;index++){this.cameras[index].detachControl(canvas);}while(this.lights.length){this.lights[0].dispose(true);}while(this.meshes.length){this.meshes[0].dispose(true);}while(this.materials.length){this.materials[0].dispose();}while(this.particleSystems.length){this.particleSystems[0].dispose();}while(this.spriteManagers.length){this.spriteManagers[0].dispose();}while(this.layers.length){this.layers[0].dispose();}while(this.textures.length){this.textures[0].dispose();}index=this._engine.scenes.indexOf(this);this._engine.scenes.splice(index,1);this._engine.wipeCaches();};BABYLON.Scene.prototype._getNewPosition=function(position,velocity,collider,maximumRetry,finalPosition){position.divideToRef(collider.radius,this._scaledPosition);velocity.divideToRef(collider.radius,this._scaledVelocity);collider.retry=0;collider.initialVelocity=this._scaledVelocity;collider.initialPosition=this._scaledPosition;this._collideWithWorld(this._scaledPosition,this._scaledVelocity,collider,maximumRetry,finalPosition);finalPosition.multiplyInPlace(collider.radius);};BABYLON.Scene.prototype._collideWithWorld=function(position,velocity,collider,maximumRetry,finalPosition){var closeDistance=BABYLON.Engine.collisionsEpsilon*10.0;if(collider.retry>=maximumRetry){finalPosition.copyFrom(position);return;}collider._initialize(position,velocity,closeDistance);for(var index=0;index<this.meshes.length;index++){var mesh=this.meshes[index];if(mesh.isEnabled()&&mesh.checkCollisions){mesh._checkCollision(collider);}}if(!collider.collisionFound){position.addToRef(velocity,finalPosition);return;}if(velocity.x!=0||velocity.y!=0||velocity.z!=0){collider._getResponse(position,velocity);}if(velocity.length()<=closeDistance){finalPosition.copyFrom(position);return;}collider.retry++;this._collideWithWorld(position,velocity,collider,maximumRetry,finalPosition);};BABYLON.Scene.prototype.createOrUpdateSelectionOctree=function(){if(!this._selectionOctree){this._selectionOctree=new BABYLON.Octree();}var checkExtends=function(v,min,max){if(v.x<min.x)min.x=v.x;if(v.y<min.y)min.y=v.y;if(v.z<min.z)min.z=v.z;if(v.x>max.x)max.x=v.x;if(v.y>max.y)max.y=v.y;if(v.z>max.z)max.z=v.z;};var min=new BABYLON.Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);var max=new BABYLON.Vector3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var index=0;index<this.meshes.length;index++){var mesh=this.meshes[index];mesh.computeWorldMatrix();var minBox=mesh.getBoundingInfo().boundingBox.minimumWorld;var maxBox=mesh.getBoundingInfo().boundingBox.maximumWorld;checkExtends(minBox,min,max);checkExtends(maxBox,min,max);}this._selectionOctree.update(min,max,this.meshes);};BABYLON.Scene.prototype.createPickingRay=function(x,y,world){var engine=this._engine;if(!this._viewMatrix){if(!this.activeCamera)throw new Error("Active camera not set");this.setTransformMatrix(this.activeCamera.getViewMatrix(),this.activeCamera.getProjectionMatrix());}return BABYLON.Ray.CreateNew(x,y,engine.getRenderWidth()*engine.getHardwareScalingLevel(),engine.getRenderHeight()*engine.getHardwareScalingLevel(),world?world:BABYLON.Matrix.Identity(),this._viewMatrix,this._projectionMatrix);};BABYLON.Scene.prototype.pick=function(x,y,predicate){var distance=Number.MAX_VALUE;var pickedPoint=null;var pickedMesh=null;for(var meshIndex=0;meshIndex<this.meshes.length;meshIndex++){var mesh=this.meshes[meshIndex];if(predicate){if(!predicate(mesh)){continue;}}else if(!mesh.isEnabled()||!mesh.isVisible||!mesh.isPickable){continue;}var world=mesh.getWorldMatrix();var ray=this.createPickingRay(x,y,world);var result=mesh.intersects(ray);if(!result.hit)continue;if(result.distance>=distance)continue;distance=result.distance;pickedMesh=mesh;pickedPoint=result.pickedPoint;}return{hit:distance!=Number.MAX_VALUE,distance:distance,pickedMesh:pickedMesh,pickedPoint:pickedPoint};};BABYLON.Scene.FOGMODE_NONE=0;BABYLON.Scene.FOGMODE_EXP=1;BABYLON.Scene.FOGMODE_EXP2=2;BABYLON.Scene.FOGMODE_LINEAR=3;})();var BABYLON=BABYLON||{};(function(){BABYLON.VertexBuffer=function(mesh,data,kind,updatable){this._mesh=mesh;this._engine=mesh.getScene().getEngine();this._updatable=updatable;if(updatable){this._buffer=this._engine.createDynamicVertexBuffer(data.length*4);this._engine.updateDynamicVertexBuffer(this._buffer,data);}else{this._buffer=this._engine.createVertexBuffer(data);}this._data=data;this._kind=kind;switch(kind){case BABYLON.VertexBuffer.PositionKind:this._strideSize=3;this._mesh._resetPointsArrayCache();break;case BABYLON.VertexBuffer.NormalKind:this._strideSize=3;break;case BABYLON.VertexBuffer.UVKind:this._strideSize=2;break;case BABYLON.VertexBuffer.UV2Kind:this._strideSize=2;break;case BABYLON.VertexBuffer.ColorKind:this._strideSize=3;break;case BABYLON.VertexBuffer.MatricesIndicesKind:this._strideSize=4;break;case BABYLON.VertexBuffer.MatricesWeightsKind:this._strideSize=4;break;}};BABYLON.VertexBuffer.prototype.isUpdatable=function(){return this._updatable;};BABYLON.VertexBuffer.prototype.getData=function(){return this._data;};BABYLON.VertexBuffer.prototype.getStrideSize=function(){return this._strideSize;};BABYLON.VertexBuffer.prototype.update=function(data){this._engine.updateDynamicVertexBuffer(this._buffer,data);this._data=data;if(this._kind===BABYLON.VertexBuffer.PositionKind){this._mesh._resetPointsArrayCache();}};BABYLON.VertexBuffer.prototype.dispose=function(){this._engine._releaseBuffer(this._buffer);};BABYLON.VertexBuffer.PositionKind="position";BABYLON.VertexBuffer.NormalKind="normal";BABYLON.VertexBuffer.UVKind="uv";BABYLON.VertexBuffer.UV2Kind="uv2";BABYLON.VertexBuffer.ColorKind="color";BABYLON.VertexBuffer.MatricesIndicesKind="matricesIndices";BABYLON.VertexBuffer.MatricesWeightsKind="matricesWeights";})();var BABYLON=BABYLON||{};(function(){BABYLON.Mesh=function(name,scene){this.name=name;this.id=name;this._scene=scene;this._totalVertices=0;this._worldMatrix=BABYLON.Matrix.Identity();scene.meshes.push(this);this.position=new BABYLON.Vector3(0,0,0);this.rotation=new BABYLON.Vector3(0,0,0);this.rotationQuaternion=null;this.scaling=new BABYLON.Vector3(1,1,1);this._pivotMatrix=BABYLON.Matrix.Identity();this._indices=[];this.subMeshes=[];this._renderId=0;this._onBeforeRenderCallbacks=[];this.animations=[];this._positions=null;this._cache={localMatrixUpdated:false,position:BABYLON.Vector3.Zero(),scaling:BABYLON.Vector3.Zero(),rotation:BABYLON.Vector3.Zero(),rotationQuaternion:new BABYLON.Quaternion(0,0,0,0)};this._childrenFlag=false;this._localScaling=BABYLON.Matrix.Zero();this._localRotation=BABYLON.Matrix.Zero();this._localTranslation=BABYLON.Matrix.Zero();this._localBillboard=BABYLON.Matrix.Zero();this._localPivotScaling=BABYLON.Matrix.Zero();this._localPivotScalingRotation=BABYLON.Matrix.Zero();this._localWorld=BABYLON.Matrix.Zero();this._worldMatrix=BABYLON.Matrix.Zero();this._rotateYByPI=BABYLON.Matrix.RotationY(Math.PI);this._collisionsTransformMatrix=BABYLON.Matrix.Zero();this._collisionsScalingMatrix=BABYLON.Matrix.Zero();};BABYLON.Mesh.BILLBOARDMODE_NONE=0;BABYLON.Mesh.BILLBOARDMODE_X=1;BABYLON.Mesh.BILLBOARDMODE_Y=2;BABYLON.Mesh.BILLBOARDMODE_Z=4;BABYLON.Mesh.BILLBOARDMODE_ALL=7;BABYLON.Mesh.prototype.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_NONE;BABYLON.Mesh.prototype.material=null;BABYLON.Mesh.prototype.parent=null;BABYLON.Mesh.prototype._isReady=true;BABYLON.Mesh.prototype._isEnabled=true;BABYLON.Mesh.prototype.isVisible=true;BABYLON.Mesh.prototype.isPickable=true;BABYLON.Mesh.prototype.visibility=1.0;BABYLON.Mesh.prototype.billboardMode=BABYLON.Mesh.BILLBOARDMODE_NONE;BABYLON.Mesh.prototype.checkCollisions=false;BABYLON.Mesh.prototype.receiveShadows=false;BABYLON.Mesh.prototype._isDisposed=false;BABYLON.Mesh.prototype.onDispose=null;BABYLON.Mesh.prototype.skeleton=null;BABYLON.Mesh.prototype.renderingGroupId=0;BABYLON.Mesh.prototype.getBoundingInfo=function(){return this._boundingInfo;};BABYLON.Mesh.prototype.getScene=function(){return this._scene;};BABYLON.Mesh.prototype.getWorldMatrix=function(){return this._worldMatrix;};BABYLON.Mesh.prototype.getTotalVertices=function(){return this._totalVertices;};BABYLON.Mesh.prototype.getVerticesData=function(kind){return this._vertexBuffers[kind].getData();};BABYLON.Mesh.prototype.isVerticesDataPresent=function(kind){if(!this._vertexBuffers&&this._delayInfo){return this._delayInfo.indexOf(kind)!==-1;}return this._vertexBuffers[kind]!==undefined;};BABYLON.Mesh.prototype.getTotalIndices=function(){return this._indices.length;};BABYLON.Mesh.prototype.getIndices=function(){return this._indices;};BABYLON.Mesh.prototype.getVertexStrideSize=function(){return this._vertexStrideSize;};BABYLON.Mesh.prototype._needToSynchonizeChildren=function(){return this._childrenFlag;};BABYLON.Mesh.prototype.setPivotMatrix=function(matrix){this._pivotMatrix=matrix;this._cache.pivotMatrixUpdated=true;};BABYLON.Mesh.prototype.getPivotMatrix=function(){return this._localMatrix;};BABYLON.Mesh.prototype.isSynchronized=function(){if(this.billboardMode!==BABYLON.Mesh.BILLBOARDMODE_NONE)return false;if(this._cache.pivotMatrixUpdated){return false;}if(!this._cache.position.equals(this.position))return false;if(this.rotationQuaternion){if(!this._cache.rotationQuaternion.equals(this.rotationQuaternion))return false;}else{if(!this._cache.rotation.equals(this.rotation))return false;}if(!this._cache.scaling.equals(this.scaling))return false;if(this.parent)return!this.parent._needToSynchonizeChildren();return true;};BABYLON.Mesh.prototype.isReady=function(){return this._isReady;};BABYLON.Mesh.prototype.isEnabled=function(){if(!this.isReady()||!this._isEnabled){return false;}if(this.parent){return this.parent.isEnabled();}return true;};BABYLON.Mesh.prototype.setEnabled=function(value){this._isEnabled=value;};BABYLON.Mesh.prototype.isAnimated=function(){return this._animationStarted;};BABYLON.Mesh.prototype.isDisposed=function(){return this._isDisposed;};BABYLON.Mesh.prototype.markAsDirty=function(property){if(property==="rotation"){this.rotationQuaternion=null;}};BABYLON.Mesh.prototype.refreshBoundingInfo=function(){var data=this.getVerticesData(BABYLON.VertexBuffer.PositionKind);if(!data){return;}var extend=BABYLON.Tools.ExtractMinAndMax(data,0,this._totalVertices);this._boundingInfo=new BABYLON.BoundingInfo(extend.minimum,extend.maximum);for(var index=0;index<this.subMeshes.length;index++){this.subMeshes[index].refreshBoundingInfo();}this._updateBoundingInfo();};BABYLON.Mesh.prototype._updateBoundingInfo=function(){if(this._boundingInfo){this._scaleFactor=Math.max(this.scaling.x,this.scaling.y);this._scaleFactor=Math.max(this._scaleFactor,this.scaling.z);if(this.parent)this._scaleFactor=this._scaleFactor*this.parent._scaleFactor;this._boundingInfo._update(this._worldMatrix,this._scaleFactor);for(var subIndex=0;subIndex<this.subMeshes.length;subIndex++){var subMesh=this.subMeshes[subIndex];subMesh.updateBoundingInfo(this._worldMatrix,this._scaleFactor);}}};BABYLON.Mesh.prototype.computeWorldMatrix=function(force){if(!force&&this.isSynchronized()){this._childrenFlag=false;return this._worldMatrix;}this._childrenFlag=true;this._cache.position.copyFrom(this.position);this._cache.scaling.copyFrom(this.scaling);this._cache.pivotMatrixUpdated=false;BABYLON.Matrix.ScalingToRef(this.scaling.x,this.scaling.y,this.scaling.z,this._localScaling);if(this.rotationQuaternion){this.rotationQuaternion.toRotationMatrix(this._localRotation);this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion);}else{BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y,this.rotation.x,this.rotation.z,this._localRotation);this._cache.rotation.copyFrom(this.rotation);}BABYLON.Matrix.TranslationToRef(this.position.x,this.position.y,this.position.z,this._localTranslation);this._pivotMatrix.multiplyToRef(this._localScaling,this._localPivotScaling);this._localPivotScaling.multiplyToRef(this._localRotation,this._localPivotScalingRotation);if(this.billboardMode!==BABYLON.Mesh.BILLBOARDMODE_NONE){var localPosition=this.position.clone();var zero=this._scene.activeCamera.position.clone();if(this.parent){localPosition.addInPlace(this.parent.position);BABYLON.Matrix.TranslationToRef(localPosition.x,localPosition.y,localPosition.z,this._localTranslation);}if(this.billboardMode&BABYLON.Mesh.BILLBOARDMODE_ALL===BABYLON.Mesh.BILLBOARDMODE_ALL){zero=this._scene.activeCamera.position;}else{if(this.billboardMode&BABYLON.Mesh.BILLBOARDMODE_X)zero.x=localPosition.x+BABYLON.Engine.epsilon;if(this.billboardMode&BABYLON.Mesh.BILLBOARDMODE_Y)zero.y=localPosition.y+BABYLON.Engine.epsilon;if(this.billboardMode&BABYLON.Mesh.BILLBOARDMODE_Z)zero.z=localPosition.z+BABYLON.Engine.epsilon;}BABYLON.Matrix.LookAtLHToRef(localPosition,zero,BABYLON.Vector3.Up(),this._localBillboard);this._localBillboard.m[12]=this._localBillboard.m[13]=this._localBillboard.m[14]=0;this._localBillboard.invert();this._localPivotScalingRotation.multiplyToRef(this._localBillboard,this._localWorld);this._rotateYByPI.multiplyToRef(this._localWorld,this._localPivotScalingRotation);}if(this.parent&&this.billboardMode===BABYLON.Mesh.BILLBOARDMODE_NONE){this._localPivotScalingRotation.multiplyToRef(this._localTranslation,this._localWorld);var parentWorld=this.parent.getWorldMatrix();this._localWorld.multiplyToRef(parentWorld,this._worldMatrix);}else{this._localPivotScalingRotation.multiplyToRef(this._localTranslation,this._worldMatrix);}this._updateBoundingInfo();return this._worldMatrix;};BABYLON.Mesh.prototype._createGlobalSubMesh=function(){if(!this._totalVertices||!this._indices){return null;}this.subMeshes=[];return new BABYLON.SubMesh(0,0,this._totalVertices,0,this._indices.length,this);};BABYLON.Mesh.prototype.subdivide=function(count){if(count<1){return;}var subdivisionSize=this._indices.length/count;var offset=0;this.subMeshes=[];for(var index=0;index<count;index++){BABYLON.SubMesh.CreateFromIndices(0,offset,Math.min(subdivisionSize,this._indices.length-offset),this);offset+=subdivisionSize;}};BABYLON.Mesh.prototype.setVerticesData=function(data,kind,updatable){if(!this._vertexBuffers){this._vertexBuffers={};}if(this._vertexBuffers[kind]){this._vertexBuffers[kind].dispose();}this._vertexBuffers[kind]=new BABYLON.VertexBuffer(this,data,kind,updatable);if(kind===BABYLON.VertexBuffer.PositionKind){var stride=this._vertexBuffers[kind].getStrideSize();this._totalVertices=data.length/stride;var extend=BABYLON.Tools.ExtractMinAndMax(data,0,this._totalVertices);this._boundingInfo=new BABYLON.BoundingInfo(extend.minimum,extend.maximum);this._createGlobalSubMesh();}};BABYLON.Mesh.prototype.updateVerticesData=function(kind,data){if(this._vertexBuffers[kind]){this._vertexBuffers[kind].update(data);}};BABYLON.Mesh.prototype.setIndices=function(indices){if(this._indexBuffer){this._scene.getEngine()._releaseBuffer(this._indexBuffer);}this._indexBuffer=this._scene.getEngine().createIndexBuffer(indices);this._indices=indices;this._createGlobalSubMesh();};BABYLON.Mesh.prototype.bindAndDraw=function(subMesh,effect,wireframe){var engine=this._scene.getEngine();var indexToBind=this._indexBuffer;var useTriangles=true;if(wireframe){indexToBind=subMesh.getLinesIndexBuffer(this._indices,engine);useTriangles=false;}engine.bindMultiBuffers(this._vertexBuffers,indexToBind,effect);engine.draw(useTriangles,useTriangles?subMesh.indexStart:0,useTriangles?subMesh.indexCount:subMesh.linesIndexCount);};BABYLON.Mesh.prototype.registerBeforeRender=function(func){this._onBeforeRenderCallbacks.push(func);};BABYLON.Mesh.prototype.unregisterBeforeRender=function(func){var index=this._onBeforeRenderCallbacks.indexOf(func);if(index>-1){this._onBeforeRenderCallbacks.splice(index,1);}};BABYLON.Mesh.prototype.render=function(subMesh){if(!this._vertexBuffers||!this._indexBuffer){return;}for(var callbackIndex=0;callbackIndex<this._onBeforeRenderCallbacks.length;callbackIndex++){this._onBeforeRenderCallbacks[callbackIndex]();}var world=this.getWorldMatrix();var effectiveMaterial=subMesh.getMaterial();if(!effectiveMaterial||!effectiveMaterial.isReady(this)){return;}effectiveMaterial._preBind();effectiveMaterial.bind(world,this);var engine=this._scene.getEngine();this.bindAndDraw(subMesh,effectiveMaterial.getEffect(),engine.forceWireframe||effectiveMaterial.wireframe);effectiveMaterial.unbind();};BABYLON.Mesh.prototype.isDescendantOf=function(ancestor){if(this.parent){if(this.parent===ancestor){return true;}return this.parent.isDescendantOf(ancestor);}return false;};BABYLON.Mesh.prototype.getDescendants=function(){var results=[];for(var index=0;index<this._scene.meshes.length;index++){var mesh=this._scene.meshes[index];if(mesh.isDescendantOf(this)){results.push(mesh);}}return results;};BABYLON.Mesh.prototype.getEmittedParticleSystems=function(){var results=[];for(var index=0;index<this._scene.particleSystems.length;index++){var particleSystem=this._scene.particleSystems[index];if(particleSystem.emitter===this){results.push(particleSystem);}}return results;};BABYLON.Mesh.prototype.getHierarchyEmittedParticleSystems=function(){var results=[];var descendants=this.getDescendants();descendants.push(this);for(var index=0;index<this._scene.particleSystems.length;index++){var particleSystem=this._scene.particleSystems[index];if(descendants.indexOf(particleSystem.emitter)!==-1){results.push(particleSystem);}}return results;};BABYLON.Mesh.prototype.getChildren=function(){var results=[];for(var index=0;index<this._scene.meshes.length;index++){var mesh=this._scene.meshes[index];if(mesh.parent==this){results.push(mesh);}}return results;};BABYLON.Mesh.prototype.isInFrustrum=function(frustumPlanes){if(this.delayLoadState===BABYLON.Engine.DELAYLOADSTATE_LOADING){return false;}var result=this._boundingInfo.isInFrustrum(frustumPlanes);if(result&&this.delayLoadState===BABYLON.Engine.DELAYLOADSTATE_NOTLOADED){this.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_LOADING;var that=this;this._scene._addPendingData(this);BABYLON.Tools.LoadFile(this.delayLoadingFile,function(data){BABYLON.SceneLoader._ImportGeometry(JSON.parse(data),that);that.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_LOADED;that._scene._removePendingData(that);},function(){},this._scene.database);}return result;};BABYLON.Mesh.prototype.setMaterialByID=function(id){var materials=this._scene.materials;for(var index=0;index<materials.length;index++){if(materials[index].id==id){this.material=materials[index];return;}}var multiMaterials=this._scene.multiMaterials;for(var index=0;index<multiMaterials.length;index++){if(multiMaterials[index].id==id){this.material=multiMaterials[index];return;}}};BABYLON.Mesh.prototype.getAnimatables=function(){var results=[];if(this.material){results.push(this.material);}return results;};BABYLON.Mesh.prototype.setLocalTranslation=function(vector3){this.computeWorldMatrix();var worldMatrix=this._worldMatrix.clone();worldMatrix.setTranslation(BABYLON.Vector3.Zero());this.position=BABYLON.Vector3.TransformCoordinates(vector3,worldMatrix);};BABYLON.Mesh.prototype.getLocalTranslation=function(){this.computeWorldMatrix();var invWorldMatrix=this._worldMatrix.clone();invWorldMatrix.setTranslation(BABYLON.Vector3.Zero());invWorldMatrix.invert();return BABYLON.Vector3.TransformCoordinates(this.position,invWorldMatrix);};BABYLON.Mesh.prototype.bakeTransformIntoVertices=function(transform){if(!this.isVerticesDataPresent(BABYLON.VertexBuffer.PositionKind)){return;}this._resetPointsArrayCache();var data=this._vertexBuffers[BABYLON.VertexBuffer.PositionKind].getData();var temp=new BABYLON.MatrixType(data.length);for(var index=0;index<data.length;index+=3){BABYLON.Vector3.TransformCoordinates(BABYLON.Vector3.FromArray(data,index),transform).toArray(temp,index);}this.setVerticesData(temp,BABYLON.VertexBuffer.PositionKind,this._vertexBuffers[BABYLON.VertexBuffer.PositionKind].isUpdatable());if(!this.isVerticesDataPresent(BABYLON.VertexBuffer.NormalKind)){return;}data=this._vertexBuffers[BABYLON.VertexBuffer.NormalKind].getData();for(var index=0;index<data.length;index+=3){BABYLON.Vector3.TransformNormal(BABYLON.Vector3.FromArray(data,index),transform).toArray(temp,index);}this.setVerticesData(temp,BABYLON.VertexBuffer.NormalKind,this._vertexBuffers[BABYLON.VertexBuffer.NormalKind].isUpdatable());};BABYLON.Mesh.prototype._resetPointsArrayCache=function(){this._positions=null;};BABYLON.Mesh.prototype._generatePointsArray=function(){if(this._positions)return;this._positions=[];var data=this._vertexBuffers[BABYLON.VertexBuffer.PositionKind].getData();for(var index=0;index<data.length;index+=3){this._positions.push(BABYLON.Vector3.FromArray(data,index));}};BABYLON.Mesh.prototype._collideForSubMesh=function(subMesh,transformMatrix,collider){this._generatePointsArray();if(!subMesh._lastColliderWorldVertices||!subMesh._lastColliderTransformMatrix.equals(transformMatrix)){subMesh._lastColliderTransformMatrix=transformMatrix;subMesh._lastColliderWorldVertices=[];var start=subMesh.verticesStart;var end=(subMesh.verticesStart+subMesh.verticesCount);for(var i=start;i<end;i++){subMesh._lastColliderWorldVertices.push(BABYLON.Vector3.TransformCoordinates(this._positions[i],transformMatrix));}}collider._collide(subMesh,subMesh._lastColliderWorldVertices,this._indices,subMesh.indexStart,subMesh.indexStart+subMesh.indexCount,subMesh.verticesStart);};BABYLON.Mesh.prototype._processCollisionsForSubModels=function(collider,transformMatrix){for(var index=0;index<this.subMeshes.length;index++){var subMesh=this.subMeshes[index];if(this.subMeshes.length>1&&!subMesh._checkCollision(collider))continue;this._collideForSubMesh(subMesh,transformMatrix,collider);}};BABYLON.Mesh.prototype._checkCollision=function(collider){if(!this._boundingInfo._checkCollision(collider))return;BABYLON.Matrix.ScalingToRef(1.0/collider.radius.x,1.0/collider.radius.y,1.0/collider.radius.z,this._collisionsScalingMatrix);this._worldMatrix.multiplyToRef(this._collisionsScalingMatrix,this._collisionsTransformMatrix);this._processCollisionsForSubModels(collider,this._collisionsTransformMatrix);};BABYLON.Mesh.prototype.intersectsMesh=function(mesh,precise){if(!this._boundingInfo||!mesh._boundingInfo){return false;}return this._boundingInfo.intersects(mesh._boundingInfo,precise);};BABYLON.Mesh.prototype.intersectsPoint=function(point){if(!this._boundingInfo){return false;}return this._boundingInfo.intersectsPoint(point);};BABYLON.Mesh.prototype.intersects=function(ray){if(!this._boundingInfo||!ray.intersectsSphere(this._boundingInfo.boundingSphere)){return{hit:false,distance:0};}this._generatePointsArray();var distance=Number.MAX_VALUE;for(var index=0;index<this.subMeshes.length;index++){var subMesh=this.subMeshes[index];if(this.subMeshes.length>1&&!subMesh.canIntersects(ray))continue;var result=subMesh.intersects(ray,this._positions,this._indices);if(result.hit){if(result.distance<distance&&result.distance>=0){distance=result.distance;}}}if(distance>=0){var world=this.getWorldMatrix();var worldOrigin=BABYLON.Vector3.TransformCoordinates(ray.origin,world);var direction=ray.direction.clone();direction.normalize();direction=direction.scale(distance);var worldDirection=BABYLON.Vector3.TransformNormal(direction,world);var pickedPoint=worldOrigin.add(worldDirection);return{hit:true,distance:BABYLON.Vector3.Distance(worldOrigin,pickedPoint),pickedPoint:pickedPoint};}return{hit:false,distance:0};};BABYLON.Mesh.prototype.clone=function(name,newParent,doNotCloneChildren){var result=new BABYLON.Mesh(name,this._scene);result._vertexBuffers=this._vertexBuffers;for(var kind in result._vertexBuffers){result._vertexBuffers[kind].references++;}result._indexBuffer=this._indexBuffer;this._indexBuffer.references++;BABYLON.Tools.DeepCopy(this,result,["name","material","skeleton"],["_indices","_totalVertices"]);var extend=BABYLON.Tools.ExtractMinAndMax(this.getVerticesData(BABYLON.VertexBuffer.PositionKind),0,this._totalVertices);result._boundingInfo=new BABYLON.BoundingInfo(extend.minimum,extend.maximum);result.material=this.material;if(newParent){result.parent=newParent;}if(!doNotCloneChildren){for(var index=0;index<this._scene.meshes.length;index++){var mesh=this._scene.meshes[index];if(mesh.parent==this){mesh.clone(mesh.name,result);}}}for(var index=0;index<this._scene.particleSystems.length;index++){var system=this._scene.particleSystems[index];if(system.emitter==this){system.clone(system.name,result);}}return result;};BABYLON.Mesh.prototype.dispose=function(doNotRecurse){if(this._vertexBuffers){for(var index=0;index<this._vertexBuffers.length;index++){this._vertexBuffers[index].dispose();}this._vertexBuffers=null;}if(this._indexBuffer){this._scene.getEngine()._releaseBuffer(this._indexBuffer);this._indexBuffer=null;}var index=this._scene.meshes.indexOf(this);this._scene.meshes.splice(index,1);if(!doNotRecurse){for(var index=0;index<this._scene.particleSystems.length;index++){if(this._scene.particleSystems[index].emitter==this){this._scene.particleSystems[index].dispose();index--;}}var objects=this._scene.meshes.slice(0);for(var index=0;index<objects.length;index++){if(objects[index].parent==this){objects[index].dispose();}}}this._isDisposed=true;if(this.onDispose){this.onDispose();}};BABYLON.Mesh.CreateBox=function(name,size,scene,updatable){var box=new BABYLON.Mesh(name,scene);var normalsSource=[new BABYLON.Vector3(0,0,1),new BABYLON.Vector3(0,0,-1),new BABYLON.Vector3(1,0,0),new BABYLON.Vector3(-1,0,0),new BABYLON.Vector3(0,1,0),new BABYLON.Vector3(0,-1,0)];var indices=[];var positions=[];var normals=[];var uvs=[];for(var index=0;index<normalsSource.length;index++){var normal=normalsSource[index];var side1=new BABYLON.Vector3(normal.y,normal.z,normal.x);var side2=BABYLON.Vector3.Cross(normal,side1);var verticesLength=positions.length/3;indices.push(verticesLength);indices.push(verticesLength+1);indices.push(verticesLength+2);indices.push(verticesLength);indices.push(verticesLength+2);indices.push(verticesLength+3);var vertex=normal.subtract(side1).subtract(side2).scale(size/2);positions.push(vertex.x,vertex.y,vertex.z);normals.push(normal.x,normal.y,normal.z);uvs.push(1.0,1.0);vertex=normal.subtract(side1).add(side2).scale(size/2);positions.push(vertex.x,vertex.y,vertex.z);normals.push(normal.x,normal.y,normal.z);uvs.push(0.0,1.0);vertex=normal.add(side1).add(side2).scale(size/2);positions.push(vertex.x,vertex.y,vertex.z);normals.push(normal.x,normal.y,normal.z);uvs.push(0.0,0.0);vertex=normal.add(side1).subtract(side2).scale(size/2);positions.push(vertex.x,vertex.y,vertex.z);normals.push(normal.x,normal.y,normal.z);uvs.push(1.0,0.0);}box.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);box.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);box.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);box.setIndices(indices);return box;};BABYLON.Mesh.CreateSphere=function(name,segments,diameter,scene,updatable){var sphere=new BABYLON.Mesh(name,scene);var radius=diameter/2;var totalZRotationSteps=2+segments;var totalYRotationSteps=2*totalZRotationSteps;var indices=[];var positions=[];var normals=[];var uvs=[];for(var zRotationStep=0;zRotationStep<=totalZRotationSteps;zRotationStep++){var normalizedZ=zRotationStep/totalZRotationSteps;var angleZ=(normalizedZ*Math.PI);for(var yRotationStep=0;yRotationStep<=totalYRotationSteps;yRotationStep++){var normalizedY=yRotationStep/totalYRotationSteps;var angleY=normalizedY*Math.PI*2;var rotationZ=BABYLON.Matrix.RotationZ(-angleZ);var rotationY=BABYLON.Matrix.RotationY(angleY);var afterRotZ=BABYLON.Vector3.TransformCoordinates(BABYLON.Vector3.Up(),rotationZ);var complete=BABYLON.Vector3.TransformCoordinates(afterRotZ,rotationY);var vertex=complete.scale(radius);var normal=BABYLON.Vector3.Normalize(vertex);positions.push(vertex.x,vertex.y,vertex.z);normals.push(normal.x,normal.y,normal.z);uvs.push(normalizedZ,normalizedY);}if(zRotationStep>0){var verticesCount=positions.length/3;for(var firstIndex=verticesCount-2*(totalYRotationSteps+1);(firstIndex+totalYRotationSteps+2)<verticesCount;firstIndex++){indices.push((firstIndex));indices.push((firstIndex+1));indices.push(firstIndex+totalYRotationSteps+1);indices.push((firstIndex+totalYRotationSteps+1));indices.push((firstIndex+1));indices.push((firstIndex+totalYRotationSteps+2));}}}sphere.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);sphere.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);sphere.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);sphere.setIndices(indices);return sphere;};BABYLON.Mesh.CreateCylinder=function(name,height,diameterTop,diameterBottom,tessellation,scene,updatable){var radiusTop=diameterTop/2;var radiusBottom=diameterBottom/2;var indices=[];var positions=[];var normals=[];var uvs=[];var cylinder=new BABYLON.Mesh(name,scene);var getCircleVector=function(i){var angle=(i*2.0*Math.PI/tessellation);var dx=Math.sin(angle);var dz=Math.cos(angle);return new BABYLON.Vector3(dx,0,dz);};var createCylinderCap=function(isTop){var radius=isTop?radiusTop:radiusBottom;if(radius==0){return}for(var i=0;i<tessellation-2;i++){var i1=(i+1)%tessellation;var i2=(i+2)%tessellation;if(!isTop){var tmp=i1;var i1=i2;i2=tmp;}var vbase=positions.length/3;indices.push(vbase);indices.push(vbase+i1);indices.push(vbase+i2);}var normal=new BABYLON.Vector3(0,-1,0);var textureScale=new BABYLON.Vector2(-0.5,-0.5);if(!isTop){normal=normal.scale(-1);textureScale.x=-textureScale.x;}for(var i=0;i<tessellation;i++){var circleVector=getCircleVector(i);var position=circleVector.scale(radius).add(normal.scale(height));var textureCoordinate=new BABYLON.Vector2(circleVector.x*textureScale.x+0.5,circleVector.z*textureScale.y+0.5);positions.push(position.x,position.y,position.z);normals.push(normal.x,normal.y,normal.z);uvs.push(textureCoordinate.x,textureCoordinate.y);}};height/=2;var topOffset=new BABYLON.Vector3(0,1,0).scale(height);var stride=tessellation+1;for(var i=0;i<=tessellation;i++){var normal=getCircleVector(i);var sideOffsetBottom=normal.scale(radiusBottom);var sideOffsetTop=normal.scale(radiusTop);var textureCoordinate=new BABYLON.Vector2(i/tessellation,0);var position=sideOffsetBottom.add(topOffset);positions.push(position.x,position.y,position.z);normals.push(normal.x,normal.y,normal.z);uvs.push(textureCoordinate.x,textureCoordinate.y);position=sideOffsetTop.subtract(topOffset);textureCoordinate.y+=1;positions.push(position.x,position.y,position.z);normals.push(normal.x,normal.y,normal.z);uvs.push(textureCoordinate.x,textureCoordinate.y);indices.push(i*2);indices.push((i*2+2)%(stride*2));indices.push(i*2+1);indices.push(i*2+1);indices.push((i*2+2)%(stride*2));indices.push((i*2+3)%(stride*2));}createCylinderCap(true);createCylinderCap(false);cylinder.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);cylinder.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);cylinder.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);cylinder.setIndices(indices);return cylinder;};BABYLON.Mesh.CreateTorus=function(name,diameter,thickness,tessellation,scene,updatable){var torus=new BABYLON.Mesh(name,scene);var indices=[];var positions=[];var normals=[];var uvs=[];var stride=tessellation+1;for(var i=0;i<=tessellation;i++){var u=i/tessellation;var outerAngle=i*Math.PI*2.0/tessellation-Math.PI/2.0;var transform=BABYLON.Matrix.Translation(diameter/2.0,0,0).multiply(BABYLON.Matrix.RotationY(outerAngle));for(var j=0;j<=tessellation;j++){var v=1-j/tessellation;var innerAngle=j*Math.PI*2.0/tessellation+Math.PI;var dx=Math.cos(innerAngle);var dy=Math.sin(innerAngle);var normal=new BABYLON.Vector3(dx,dy,0);var position=normal.scale(thickness/2);var textureCoordinate=new BABYLON.Vector2(u,v);position=BABYLON.Vector3.TransformCoordinates(position,transform);normal=BABYLON.Vector3.TransformNormal(normal,transform);positions.push(position.x,position.y,position.z);normals.push(normal.x,normal.y,normal.z);uvs.push(textureCoordinate.x,textureCoordinate.y);var nextI=(i+1)%stride;var nextJ=(j+1)%stride;indices.push(i*stride+j);indices.push(i*stride+nextJ);indices.push(nextI*stride+j);indices.push(i*stride+nextJ);indices.push(nextI*stride+nextJ);indices.push(nextI*stride+j);}}torus.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);torus.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);torus.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);torus.setIndices(indices);return torus;};BABYLON.Mesh.CreatePlane=function(name,size,scene,updatable){var plane=new BABYLON.Mesh(name,scene);var indices=[];var positions=[];var normals=[];var uvs=[];var halfSize=size/2.0;positions.push(-halfSize,-halfSize,0);normals.push(0,0,-1.0);uvs.push(0.0,0.0);positions.push(halfSize,-halfSize,0);normals.push(0,0,-1.0);uvs.push(1.0,0.0);positions.push(halfSize,halfSize,0);normals.push(0,0,-1.0);uvs.push(1.0,1.0);positions.push(-halfSize,halfSize,0);normals.push(0,0,-1.0);uvs.push(0.0,1.0);indices.push(0);indices.push(1);indices.push(2);indices.push(0);indices.push(2);indices.push(3);plane.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);plane.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);plane.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);plane.setIndices(indices);return plane;};BABYLON.Mesh.CreateGround=function(name,width,height,subdivisions,scene,updatable){var ground=new BABYLON.Mesh(name,scene);var indices=[];var positions=[];var normals=[];var uvs=[];var row,col;for(row=0;row<=subdivisions;row++){for(col=0;col<=subdivisions;col++){var position=new BABYLON.Vector3((col*width)/subdivisions-(width/2.0),0,((subdivisions-row)*height)/subdivisions-(height/2.0));var normal=new BABYLON.Vector3(0,1.0,0);positions.push(position.x,position.y,position.z);normals.push(normal.x,normal.y,normal.z);uvs.push(col/subdivisions,1.0-row/subdivisions);}}for(row=0;row<subdivisions;row++){for(col=0;col<subdivisions;col++){indices.push(col+1+(row+1)*(subdivisions+1));indices.push(col+1+row*(subdivisions+1));indices.push(col+row*(subdivisions+1));indices.push(col+(row+1)*(subdivisions+1));indices.push(col+1+(row+1)*(subdivisions+1));indices.push(col+row*(subdivisions+1));}}ground.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);ground.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);ground.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);ground.setIndices(indices);return ground;};BABYLON.Mesh.CreateGroundFromHeightMap=function(name,url,width,height,subdivisions,minHeight,maxHeight,scene,updatable){var ground=new BABYLON.Mesh(name,scene);var onload=function(img){var indices=[];var positions=[];var normals=[];var uvs=[];var row,col;var canvas=document.createElement("canvas");var context=canvas.getContext("2d");var heightMapWidth=img.width;var heightMapHeight=img.height;canvas.width=heightMapWidth;canvas.height=heightMapHeight;context.drawImage(img,0,0);var buffer=context.getImageData(0,0,heightMapWidth,heightMapHeight).data;for(row=0;row<=subdivisions;row++){for(col=0;col<=subdivisions;col++){var position=new BABYLON.Vector3((col*width)/subdivisions-(width/2.0),0,((subdivisions-row)*height)/subdivisions-(height/2.0));var heightMapX=(((position.x+width/2)/width)*(heightMapWidth-1))|0;var heightMapY=((1.0-(position.z+height/2)/height)*(heightMapHeight-1))|0;var pos=(heightMapX+heightMapY*heightMapWidth)*4;var r=buffer[pos]/255.0;var g=buffer[pos+1]/255.0;var b=buffer[pos+2]/255.0;var gradient=r*0.3+g*0.59+b*0.11;position.y=minHeight+(maxHeight-minHeight)*gradient;positions.push(position.x,position.y,position.z);normals.push(0,0,0);uvs.push(col/subdivisions,1.0-row/subdivisions);}}for(row=0;row<subdivisions;row++){for(col=0;col<subdivisions;col++){indices.push(col+1+(row+1)*(subdivisions+1));indices.push(col+1+row*(subdivisions+1));indices.push(col+row*(subdivisions+1));indices.push(col+(row+1)*(subdivisions+1));indices.push(col+1+(row+1)*(subdivisions+1));indices.push(col+row*(subdivisions+1));}}BABYLON.Mesh.ComputeNormal(positions,normals,indices);ground.setVerticesData(positions,BABYLON.VertexBuffer.PositionKind,updatable);ground.setVerticesData(normals,BABYLON.VertexBuffer.NormalKind,updatable);ground.setVerticesData(uvs,BABYLON.VertexBuffer.UVKind,updatable);ground.setIndices(indices);ground._isReady=true;};BABYLON.Tools.LoadImage(url,onload,scene.database);ground._isReady=false;return ground;};BABYLON.Mesh.ComputeNormal=function(positions,normals,indices){var positionVectors=[];var facesOfVertices=[];var index;for(index=0;index<positions.length;index+=3){var vector3=new BABYLON.Vector3(positions[index],positions[index+1],positions[index+2]);positionVectors.push(vector3);facesOfVertices.push([]);}var facesNormals=[];for(index=0;index<indices.length/3;index++){var i1=indices[index*3];var i2=indices[index*3+1];var i3=indices[index*3+2];var p1=positionVectors[i1];var p2=positionVectors[i2];var p3=positionVectors[i3];var p1p2=p1.subtract(p2);var p3p2=p3.subtract(p2);facesNormals[index]=BABYLON.Vector3.Normalize(BABYLON.Vector3.Cross(p1p2,p3p2));facesOfVertices[i1].push(index);facesOfVertices[i2].push(index);facesOfVertices[i3].push(index);}for(index=0;index<positionVectors.length;index++){var faces=facesOfVertices[index];var normal=BABYLON.Vector3.Zero();for(var faceIndex=0;faceIndex<faces.length;faceIndex++){normal.addInPlace(facesNormals[faces[faceIndex]]);}normal=BABYLON.Vector3.Normalize(normal.scale(1.0/faces.length));normals[index*3]=normal.x;normals[index*3+1]=normal.y;normals[index*3+2]=normal.z;}};})();var BABYLON=BABYLON||{};(function(){BABYLON.SubMesh=function(materialIndex,verticesStart,verticesCount,indexStart,indexCount,mesh){this._mesh=mesh;mesh.subMeshes.push(this);this.materialIndex=materialIndex;this.verticesStart=verticesStart;this.verticesCount=verticesCount;this.indexStart=indexStart;this.indexCount=indexCount;this.refreshBoundingInfo();};BABYLON.SubMesh.prototype.getBoundingInfo=function(){return this._boundingInfo;};BABYLON.SubMesh.prototype.getMesh=function(){return this._mesh;};BABYLON.SubMesh.prototype.getMaterial=function(){var rootMaterial=this._mesh.material;if(rootMaterial&&rootMaterial.getSubMaterial){return rootMaterial.getSubMaterial(this.materialIndex);}if(!rootMaterial){return this._mesh._scene.defaultMaterial;}return rootMaterial;};BABYLON.SubMesh.prototype.refreshBoundingInfo=function(){var data=this._mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);if(!data){return;}var extend=BABYLON.Tools.ExtractMinAndMax(data,this.verticesStart,this.verticesCount);this._boundingInfo=new BABYLON.BoundingInfo(extend.minimum,extend.maximum);};BABYLON.SubMesh.prototype._checkCollision=function(collider){return this._boundingInfo._checkCollision(collider);};BABYLON.SubMesh.prototype.updateBoundingInfo=function(world,scale){this._boundingInfo._update(world,scale);};BABYLON.SubMesh.prototype.isInFrustrum=function(frustumPlanes){return this._boundingInfo.isInFrustrum(frustumPlanes);};BABYLON.SubMesh.prototype.render=function(){this._mesh.render(this);};BABYLON.SubMesh.prototype.getLinesIndexBuffer=function(indices,engine){if(!this._linesIndexBuffer){var linesIndices=[];for(var index=this.indexStart;index<this.indexStart+this.indexCount;index+=3){linesIndices.push(indices[index],indices[index+1],indices[index+1],indices[index+2],indices[index+2],indices[index]);}this._linesIndexBuffer=engine.createIndexBuffer(linesIndices);this.linesIndexCount=linesIndices.length;}return this._linesIndexBuffer;};BABYLON.SubMesh.prototype.canIntersects=function(ray){return ray.intersectsBox(this._boundingInfo.boundingBox);};BABYLON.SubMesh.prototype.intersects=function(ray,positions,indices){var distance=Number.MAX_VALUE;for(var index=this.indexStart;index<this.indexStart+this.indexCount;index+=3){var p0=positions[indices[index]];var p1=positions[indices[index+1]];var p2=positions[indices[index+2]];var result=ray.intersectsTriangle(p0,p1,p2);if(result.hit){if(result.distance<distance&&result.distance>=0){distance=result.distance;}}}if(distance>=0)return{hit:true,distance:distance};return{hit:false,distance:0};};BABYLON.SubMesh.prototype.clone=function(newMesh){return new BABYLON.SubMesh(this.materialIndex,this.verticesStart,this.verticesCount,this.indexStart,this.indexCount,newMesh);};BABYLON.SubMesh.CreateFromIndices=function(materialIndex,startIndex,indexCount,mesh){var minVertexIndex=Number.MAX_VALUE;var maxVertexIndex=-Number.MAX_VALUE;var indices=mesh.getIndices();for(var index=startIndex;index<startIndex+indexCount;index++){var vertexIndex=indices[index];if(vertexIndex<minVertexIndex)minVertexIndex=vertexIndex;else if(vertexIndex>maxVertexIndex)maxVertexIndex=vertexIndex;}return new BABYLON.SubMesh(materialIndex,minVertexIndex,maxVertexIndex-minVertexIndex,startIndex,indexCount,mesh);};})();var BABYLON=BABYLON||{};(function(){BABYLON.BaseTexture=function(url,scene){this._scene=scene;this._scene.textures.push(this);};BABYLON.BaseTexture.prototype.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_NONE;BABYLON.BaseTexture.prototype.hasAlpha=false;BABYLON.BaseTexture.prototype.hasAlpha=false;BABYLON.BaseTexture.prototype.level=1;BABYLON.BaseTexture.prototype._texture=null;BABYLON.BaseTexture.prototype.onDispose=null;BABYLON.BaseTexture.prototype.getInternalTexture=function(){return this._texture;};BABYLON.BaseTexture.prototype.isReady=function(required){if(!required&&this.delayLoadState===BABYLON.Engine.DELAYLOADSTATE_NOTLOADED){return true;}if(this._texture){return this._texture.isReady;}return false;};BABYLON.BaseTexture.prototype.getSize=function(){if(this._texture._width){return{width:this._texture._width,height:this._texture._height};}if(this._texture._size){return{width:this._texture._size,height:this._texture._size};}return{width:0,height:0};};BABYLON.BaseTexture.prototype.getBaseSize=function(){if(!this.isReady())return{width:0,height:0};if(this._texture._size){return{width:this._texture._size,height:this._texture._size};}return{width:this._texture._baseWidth,height:this._texture._baseHeight};};BABYLON.BaseTexture.prototype._getFromCache=function(url,noMipmap){var texturesCache=this._scene.getEngine().getLoadedTexturesCache();for(var index=0;index<texturesCache.length;index++){var texturesCacheEntry=texturesCache[index];if(texturesCacheEntry.url===url&&texturesCacheEntry.noMipmap===noMipmap){texturesCacheEntry.references++;return texturesCacheEntry;}}return null;};BABYLON.BaseTexture.prototype.delayLoad=function(){};BABYLON.BaseTexture.prototype.releaseInternalTexture=function(){if(!this._texture){return;}var texturesCache=this._scene.getEngine().getLoadedTexturesCache();this._texture.references--;if(this._texture.references==0){var index=texturesCache.indexOf(this._texture);texturesCache.splice(index,1);this._scene.getEngine()._releaseTexture(this._texture);delete this._texture;}};BABYLON.BaseTexture.prototype.dispose=function(){if(this._texture===undefined){return;}this.releaseInternalTexture();var index=this._scene.textures.indexOf(this);this._scene.textures.splice(index,1);if(this.onDispose){this.onDispose();}};})();var BABYLON=BABYLON||{};(function(){BABYLON.RenderingGroup=function(index,scene){this.index=index;this._scene=scene;this._opaqueSubMeshes=new BABYLON.Tools.SmartArray(256);this._transparentSubMeshes=new BABYLON.Tools.SmartArray(256);this._alphaTestSubMeshes=new BABYLON.Tools.SmartArray(256);};BABYLON.RenderingGroup.prototype.render=function(customRenderFunction,beforeTransparents){if(customRenderFunction){customRenderFunction(this._opaqueSubMeshes,this._alphaTestSubMeshes,this._transparentSubMeshes,beforeTransparents);return true;}if(this._opaqueSubMeshes.length===0&&this._alphaTestSubMeshes.length===0&&this._transparentSubMeshes===0){return false;}var engine=this._scene.getEngine();var subIndex;var submesh;for(subIndex=0;subIndex<this._opaqueSubMeshes.length;subIndex++){submesh=this._opaqueSubMeshes.data[subIndex];this._activeVertices+=submesh.verticesCount;submesh.render();}engine.setAlphaTesting(true);for(subIndex=0;subIndex<this._alphaTestSubMeshes.length;subIndex++){submesh=this._alphaTestSubMeshes.data[subIndex];this._activeVertices+=submesh.verticesCount;submesh.render();}engine.setAlphaTesting(false);if(beforeTransparents){beforeTransparents();}engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);for(subIndex=0;subIndex<this._transparentSubMeshes.length;subIndex++){submesh=this._transparentSubMeshes.data[subIndex];this._activeVertices+=submesh.verticesCount;submesh.render();}engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);return true;};BABYLON.RenderingGroup.prototype.prepare=function(){this._opaqueSubMeshes.reset();this._transparentSubMeshes.reset();this._alphaTestSubMeshes.reset();};BABYLON.RenderingGroup.prototype.dispatch=function(subMesh){var material=subMesh.getMaterial();var mesh=subMesh.getMesh();if(material.needAlphaBlending()||mesh.visibility<1.0){if(material.alpha>0||mesh.visibility<1.0){this._transparentSubMeshes.push(subMesh);}}else if(material.needAlphaTesting()){this._alphaTestSubMeshes.push(subMesh);}else{this._opaqueSubMeshes.push(subMesh);}};})();var BABYLON=BABYLON||{};(function(){BABYLON.RenderingManager=function(scene){this._scene=scene;this._renderingGroups=[];};BABYLON.RenderingManager.prototype._renderParticles=function(index,activeMeshes){if(this._scene._activeParticleSystems.length===0){return;}var beforeParticlesDate=new Date();for(var particleIndex=0;particleIndex<this._scene._activeParticleSystems.length;particleIndex++){var particleSystem=this._scene._activeParticleSystems.data[particleIndex];if(particleSystem.renderingGroupId!==index){continue;}this._clearDepthBuffer();if(!particleSystem.emitter.position||!activeMeshes||activeMeshes.indexOf(particleSystem.emitter)!==-1){this._scene._activeParticles+=particleSystem.render();}}this._scene._particlesDuration+=new Date()-beforeParticlesDate;};BABYLON.RenderingManager.prototype._renderSprites=function(index){if(this._scene.spriteManagers.length===0){return;}var beforeSpritessDate=new Date();for(var id=0;id<this._scene.spriteManagers.length;id++){var spriteManager=this._scene.spriteManagers[id];if(spriteManager.renderingGroupId===index){this._clearDepthBuffer();spriteManager.render();}}this._scene._spritesDuration=new Date()-beforeSpritessDate;};BABYLON.RenderingManager.prototype._clearDepthBuffer=function(){if(this._depthBufferAlreadyCleaned){return;}this._scene.getEngine().clear(0,false,true);this._depthBufferAlreadyCleaned=true;};BABYLON.RenderingManager.prototype.render=function(customRenderFunction,activeMeshes,renderParticles,renderSprites){var that=this;for(var index=0;index<BABYLON.RenderingManager.MAX_RENDERINGGROUPS;index++){this._depthBufferAlreadyCleaned=index==0;var renderingGroup=this._renderingGroups[index];if(renderingGroup){this._clearDepthBuffer();if(!renderingGroup.render(customRenderFunction,function(){if(renderSprites){that._renderSprites(index);}})){this._renderingGroups.splice(index,1);}}else if(renderSprites){this._renderSprites(index);}if(renderParticles){this._renderParticles(index,activeMeshes);}}};BABYLON.RenderingManager.prototype.reset=function(){for(var index in this._renderingGroups){var renderingGroup=this._renderingGroups[index];renderingGroup.prepare();}};BABYLON.RenderingManager.prototype.dispatch=function(subMesh){var mesh=subMesh.getMesh();var renderingGroupId=mesh.renderingGroupId||0;if(!this._renderingGroups[renderingGroupId]){this._renderingGroups[renderingGroupId]=new BABYLON.RenderingGroup(renderingGroupId,this._scene);}this._renderingGroups[renderingGroupId].dispatch(subMesh);};BABYLON.RenderingManager.MAX_RENDERINGGROUPS=4;})();var BABYLON=BABYLON||{};(function(){BABYLON.Texture=function(url,scene,noMipmap,invertY){this._scene=scene;this._scene.textures.push(this);this.name=url;this.url=url;this._noMipmap=noMipmap;this._invertY=invertY;this._texture=this._getFromCache(url,noMipmap);if(!this._texture){if(!scene.useDelayedTextureLoading){this._texture=scene.getEngine().createTexture(url,noMipmap,invertY,scene);}else{this.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;}}this.animations=[];};BABYLON.Texture.prototype=Object.create(BABYLON.BaseTexture.prototype);BABYLON.Texture.EXPLICIT_MODE=0;BABYLON.Texture.SPHERICAL_MODE=1;BABYLON.Texture.PLANAR_MODE=2;BABYLON.Texture.CUBIC_MODE=3;BABYLON.Texture.PROJECTION_MODE=4;BABYLON.Texture.SKYBOX_MODE=5;BABYLON.Texture.CLAMP_ADDRESSMODE=0;BABYLON.Texture.WRAP_ADDRESSMODE=1;BABYLON.Texture.MIRROR_ADDRESSMODE=2;BABYLON.Texture.prototype.uOffset=0;BABYLON.Texture.prototype.vOffset=0;BABYLON.Texture.prototype.uScale=1.0;BABYLON.Texture.prototype.vScale=1.0;BABYLON.Texture.prototype.uAng=0;BABYLON.Texture.prototype.vAng=0;BABYLON.Texture.prototype.wAng=0;BABYLON.Texture.prototype.wrapU=BABYLON.Texture.WRAP_ADDRESSMODE;BABYLON.Texture.prototype.wrapV=BABYLON.Texture.WRAP_ADDRESSMODE;BABYLON.Texture.prototype.coordinatesIndex=0;BABYLON.Texture.prototype.coordinatesMode=BABYLON.Texture.EXPLICIT_MODE;BABYLON.Texture.prototype.delayLoad=function(){if(this.delayLoadState!=BABYLON.Engine.DELAYLOADSTATE_NOTLOADED){return;}this.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_LOADED;this._texture=this._getFromCache(this.url,this._noMipmap);if(!this._texture){this._texture=this._scene.getEngine().createTexture(this.url,this._noMipmap,this._invertY,this._scene);}};BABYLON.Texture.prototype._prepareRowForTextureGeneration=function(x,y,z,t){x-=this.uOffset+0.5;y-=this.vOffset+0.5;z-=0.5;BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(x,y,z,this._rowGenerationMatrix,t);t.x*=this.uScale;t.y*=this.vScale;t.x+=0.5;t.y+=0.5;t.z+=0.5;};BABYLON.Texture.prototype._computeTextureMatrix=function(){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng){return this._cachedTextureMatrix;}this._cachedUOffset=this.uOffset;this._cachedVOffset=this.vOffset;this._cachedUScale=this.uScale;this._cachedVScale=this.vScale;this._cachedUAng=this.uAng;this._cachedVAng=this.vAng;this._cachedWAng=this.wAng;if(!this._cachedTextureMatrix){this._cachedTextureMatrix=BABYLON.Matrix.Zero();this._rowGenerationMatrix=new BABYLON.Matrix();this._t0=BABYLON.Vector3.Zero();this._t1=BABYLON.Vector3.Zero();this._t2=BABYLON.Vector3.Zero();}BABYLON.Matrix.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix);this._prepareRowForTextureGeneration(0,0,0,this._t0);this._prepareRowForTextureGeneration(1.0,0,0,this._t1);this._prepareRowForTextureGeneration(0,1.0,0,this._t2);this._t1.subtractInPlace(this._t0);this._t2.subtractInPlace(this._t0);BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);this._cachedTextureMatrix.m[0]=this._t1.x;this._cachedTextureMatrix.m[1]=this._t1.y;this._cachedTextureMatrix.m[2]=this._t1.z;this._cachedTextureMatrix.m[4]=this._t2.x;this._cachedTextureMatrix.m[5]=this._t2.y;this._cachedTextureMatrix.m[6]=this._t2.z;this._cachedTextureMatrix.m[8]=this._t0.x;this._cachedTextureMatrix.m[9]=this._t0.y;this._cachedTextureMatrix.m[10]=this._t0.z;return this._cachedTextureMatrix;};BABYLON.Texture.prototype._computeReflectionTextureMatrix=function(){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale===this._cachedUScale&&this.vScale===this._cachedVScale&&this.coordinatesMode===this._cachedCoordinatesMode){return this._cachedTextureMatrix;}if(!this._cachedTextureMatrix){this._cachedTextureMatrix=BABYLON.Matrix.Zero();this._projectionModeMatrix=BABYLON.Matrix.Zero();}switch(this.coordinatesMode){case BABYLON.Texture.SPHERICAL_MODE:BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);this._cachedTextureMatrix[0]=-0.5*this.uScale;this._cachedTextureMatrix[5]=-0.5*this.vScale;this._cachedTextureMatrix[12]=0.5+this.uOffset;this._cachedTextureMatrix[13]=0.5+this.vOffset;break;case BABYLON.Texture.PLANAR_MODE:BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);this._cachedTextureMatrix[0]=this.uScale;this._cachedTextureMatrix[5]=this.vScale;this._cachedTextureMatrix[12]=this.uOffset;this._cachedTextureMatrix[13]=this.vOffset;break;case BABYLON.Texture.PROJECTION_MODE:BABYLON.Matrix.IdentityToRef(this._projectionModeMatrix);this._projectionModeMatrix.m[0]=0.5;this._projectionModeMatrix.m[5]=-0.5;this._projectionModeMatrix.m[10]=0.0;this._projectionModeMatrix.m[12]=0.5;this._projectionModeMatrix.m[13]=0.5;this._projectionModeMatrix.m[14]=1.0;this._projectionModeMatrix.m[15]=1.0;this._scene.getProjectionMatrix().multiplyToRef(this._projectionModeMatrix,this._cachedTextureMatrix);break;default:BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);break;}return this._cachedTextureMatrix;};BABYLON.Texture.prototype.clone=function(){var newTexture=new BABYLON.Texture(this._texture.url,this._scene,this._noMipmap,this._invertY);newTexture.hasAlpha=this.hasAlpha;newTexture.level=this.level;newTexture.uOffset=this.uOffset;newTexture.vOffset=this.vOffset;newTexture.uScale=this.uScale;newTexture.vScale=this.vScale;newTexture.uAng=this.uAng;newTexture.vAng=this.vAng;newTexture.wAng=this.wAng;newTexture.wrapU=this.wrapU;newTexture.wrapV=this.wrapV;newTexture.coordinatesIndex=this.coordinatesIndex;newTexture.coordinatesMode=this.coordinatesMode;return newTexture;};})();var BABYLON=BABYLON||{};(function(){BABYLON.CubeTexture=function(rootUrl,scene){this._scene=scene;this._scene.textures.push(this);this.name=rootUrl;this.url=rootUrl;this.hasAlpha=false;this.coordinatesMode=BABYLON.Texture.CUBIC_MODE;this._texture=this._getFromCache(rootUrl);if(!this._texture){if(!scene.useDelayedTextureLoading){this._texture=scene.getEngine().createCubeTexture(rootUrl,scene);}else{this.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;}}this.isCube=true;this._textureMatrix=BABYLON.Matrix.Identity();};BABYLON.CubeTexture.prototype=Object.create(BABYLON.BaseTexture.prototype);BABYLON.CubeTexture.prototype.delayLoad=function(){if(this.delayLoadState!=BABYLON.Engine.DELAYLOADSTATE_NOTLOADED){return;}this.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_LOADED;this._texture=this._getFromCache(this.url);if(!this._texture){this._texture=this._scene.getEngine().createCubeTexture(this.url,this._scene);}};BABYLON.CubeTexture.prototype._computeReflectionTextureMatrix=function(){return this._textureMatrix;};})();var BABYLON=BABYLON||{};(function(){BABYLON.RenderTargetTexture=function(name,size,scene,generateMipMaps){this._scene=scene;this._scene.textures.push(this);this.name=name;this._texture=scene.getEngine().createRenderTargetTexture(size,generateMipMaps);this.renderList=[];this._renderingManager=new BABYLON.RenderingManager(scene);};BABYLON.RenderTargetTexture.prototype=Object.create(BABYLON.Texture.prototype);BABYLON.RenderTargetTexture.prototype.renderParticles=true;BABYLON.RenderTargetTexture.prototype.renderSprites=false;BABYLON.RenderTargetTexture.prototype.isRenderTarget=true;BABYLON.RenderTargetTexture.prototype.coordinatesMode=BABYLON.Texture.PROJECTION_MODE;BABYLON.RenderTargetTexture.prototype.onBeforeRender=null;BABYLON.RenderTargetTexture.prototype.onAfterRender=null;BABYLON.RenderTargetTexture.prototype.resize=function(size,generateMipMaps){this.releaseInternalTexture();this._texture=this._scene.getEngine().createRenderTargetTexture(size,generateMipMaps);};BABYLON.RenderTargetTexture.prototype.render=function(){if(this.onBeforeRender){this.onBeforeRender();}var scene=this._scene;var engine=scene.getEngine();if(this._waitingRenderList){this.renderList=[];for(var index=0;index<this._waitingRenderList.length;index++){var id=this._waitingRenderList[index];this.renderList.push(this._scene.getMeshByID(id));}delete this._waitingRenderList;}if(!this.renderList||this.renderList.length==0){return;}engine.bindFramebuffer(this._texture);engine.clear(scene.clearColor,true,true);this._renderingManager.reset();for(var meshIndex=0;meshIndex<this.renderList.length;meshIndex++){var mesh=this.renderList[meshIndex];if(mesh.isEnabled()&&mesh.isVisible){for(var subIndex=0;subIndex<mesh.subMeshes.length;subIndex++){var subMesh=mesh.subMeshes[subIndex];scene._activeVertices+=subMesh.verticesCount;this._renderingManager.dispatch(subMesh);}}}this._renderingManager.render(this.customRenderFunction,this.renderList,this.renderParticles,this.renderSprites);engine.unBindFramebuffer(this._texture);if(this.onAfterRender){this.onAfterRender();}};BABYLON.RenderTargetTexture.prototype.clone=function(){var textureSize=this.getSize();var newTexture=new BABYLON.RenderTargetTexture(this.name,textureSize.width,this._scene,this._generateMipMaps);newTexture.hasAlpha=this.hasAlpha;newTexture.level=this.level;newTexture.coordinatesMode=this.coordinatesMode;newTexture.renderList=this.renderList.slice(0);return newTexture;};})();var BABYLON=BABYLON||{};(function(){BABYLON.MirrorTexture=function(name,size,scene,generateMipMaps){this._scene=scene;this._scene.textures.push(this);this.name=name;this._generateMipMaps=generateMipMaps;this._texture=scene.getEngine().createRenderTargetTexture(size,generateMipMaps);this.renderList=[];this._renderingManager=new BABYLON.RenderingManager(scene);this._transformMatrix=BABYLON.Matrix.Zero();this._mirrorMatrix=BABYLON.Matrix.Zero();};BABYLON.MirrorTexture.prototype=Object.create(BABYLON.RenderTargetTexture.prototype);BABYLON.MirrorTexture.prototype.mirrorPlane=new BABYLON.Plane(0,1,0,1);BABYLON.MirrorTexture.prototype.onBeforeRender=function(){var scene=this._scene;BABYLON.Matrix.ReflectionToRef(this.mirrorPlane,this._mirrorMatrix);this._savedViewMatrix=scene.getViewMatrix();this._mirrorMatrix.multiplyToRef(this._savedViewMatrix,this._transformMatrix);scene.setTransformMatrix(this._transformMatrix,scene.getProjectionMatrix());BABYLON.clipPlane=this.mirrorPlane;scene.getEngine().cullBackFaces=false;};BABYLON.MirrorTexture.prototype.onAfterRender=function(){var scene=this._scene;scene.setTransformMatrix(this._savedViewMatrix,scene.getProjectionMatrix());scene.getEngine().cullBackFaces=true;delete BABYLON.clipPlane;};BABYLON.MirrorTexture.prototype.clone=function(){var textureSize=this.getSize();var newTexture=new BABYLON.DynamicTexture(this.name,textureSize.width,this._scene,this._generateMipMaps);newTexture.hasAlpha=this.hasAlpha;newTexture.level=this.level;newTexture.mirrorPlane=this.mirrorPlane.clone();newTexture.renderList=this.renderList.slice(0);return newTexture;};})();var BABYLON=BABYLON||{};(function(){BABYLON.DynamicTexture=function(name,size,scene,generateMipMaps){this._scene=scene;this._scene.textures.push(this);this.name=name;this.wrapU=BABYLON.Texture.CLAMP_ADDRESSMODE;this.wrapV=BABYLON.Texture.CLAMP_ADDRESSMODE;this._generateMipMaps=generateMipMaps;this._texture=scene.getEngine().createDynamicTexture(size,generateMipMaps);var textureSize=this.getSize();this._canvas=document.createElement("canvas");this._canvas.width=textureSize.width;this._canvas.height=textureSize.height;this._context=this._canvas.getContext("2d");};BABYLON.DynamicTexture.prototype=Object.create(BABYLON.Texture.prototype);BABYLON.DynamicTexture.prototype.getContext=function(){return this._context;};BABYLON.DynamicTexture.prototype.update=function(invertY){this._scene.getEngine().updateDynamicTexture(this._texture,this._canvas,invertY===undefined?true:invertY);};BABYLON.DynamicTexture.prototype.drawText=function(text,x,y,font,color,clearColor,invertY){var size=this.getSize();if(clearColor){this._context.fillStyle=clearColor;this._context.fillRect(0,0,size.width,size.height);}this._context.font=font;if(x===null){var textSize=this._context.measureText(text);x=(size.width-textSize.width)/2;}this._context.fillStyle=color;this._context.fillText(text,x,y);this.update(invertY);};BABYLON.DynamicTexture.prototype.clone=function(){var textureSize=this.getSize();var newTexture=new BABYLON.DynamicTexture(this.name,textureSize.width,this._scene,this._generateMipMaps);newTexture.hasAlpha=this.hasAlpha;newTexture.level=this.level;newTexture.wrapU=this.wrapU;newTexture.wrapV=this.wrapV;return newTexture;};})();var BABYLON=BABYLON||{};(function(){BABYLON.VideoTexture=function(name,urls,size,scene,generateMipMaps){this._scene=scene;this._scene.textures.push(this);this.name=name;this.wrapU=BABYLON.Texture.WRAP_ADDRESSMODE;this.wrapV=BABYLON.Texture.WRAP_ADDRESSMODE;this._texture=scene.getEngine().createDynamicTexture(size,generateMipMaps);var textureSize=this.getSize();this.video=document.createElement("video");this.video.width=textureSize.width;this.video.height=textureSize.height;this.video.autoplay=false;this.video.loop=true;this.video.preload=true;this._autoLaunch=true;var that=this;this.video.addEventListener("canplaythrough",function(){if(that._texture){that._texture.isReady=true;}});urls.forEach(function(url){var source=document.createElement("source");source.src=url;that.video.appendChild(source);});this._lastUpdate=new Date();};BABYLON.VideoTexture.prototype=Object.create(BABYLON.Texture.prototype);BABYLON.VideoTexture.prototype._update=function(){if(this._autoLaunch){this._autoLaunch=false;this.video.play();}var now=new Date();if(now-this._lastUpdate<15){return false;}this._lastUpdate=now;this._scene.getEngine().updateVideoTexture(this._texture,this.video);return true;};})();var BABYLON=BABYLON||{};(function(){BABYLON.Effect=function(baseName,attributesNames,uniformsNames,samplers,engine,defines){this._engine=engine;this.name=baseName;this.defines=defines;this._uniformsNames=uniformsNames.concat(samplers);this._samplers=samplers;this._isReady=false;this._compilationError="";this._attributesNames=attributesNames;var that=this;if(BABYLON.Effect.ShadersStore[baseName+"VertexShader"]){this._prepareEffect(BABYLON.Effect.ShadersStore[baseName+"VertexShader"],BABYLON.Effect.ShadersStore[baseName+"PixelShader"],attributesNames,defines);}else{var shaderUrl;if(baseName[0]==="."){shaderUrl=baseName;}else{shaderUrl=BABYLON.Engine.ShadersRepository+baseName;}BABYLON.Tools.LoadFile(shaderUrl+".vertex.fx",function(vertexSourceCode){BABYLON.Tools.LoadFile(shaderUrl+".fragment.fx",function(fragmentSourceCode){that._prepareEffect(vertexSourceCode,fragmentSourceCode,attributesNames,defines);});});}this._valueCache=[];};BABYLON.Effect.prototype.isReady=function(){return this._isReady;};BABYLON.Effect.prototype.getProgram=function(){return this._program;};BABYLON.Effect.prototype.getAttributesNames=function(){return this._attributesNames;};BABYLON.Effect.prototype.getAttribute=function(index){return this._attributes[index];};BABYLON.Effect.prototype.getAttributesCount=function(){return this._attributes.length;};BABYLON.Effect.prototype.getUniformIndex=function(uniformName){return this._uniformsNames.indexOf(uniformName);};BABYLON.Effect.prototype.getUniform=function(uniformName){return this._uniforms[this._uniformsNames.indexOf(uniformName)];};BABYLON.Effect.prototype.getSamplers=function(){return this._samplers;};BABYLON.Effect.prototype.getCompilationError=function(){return this._compilationError;};BABYLON.Effect.prototype._prepareEffect=function(vertexSourceCode,fragmentSourceCode,attributesNames,defines){try{var engine=this._engine;this._program=engine.createShaderProgram(vertexSourceCode,fragmentSourceCode,defines);this._uniforms=engine.getUniforms(this._program,this._uniformsNames);this._attributes=engine.getAttributes(this._program,attributesNames);for(var index=0;index<this._samplers.length;index++){var sampler=this.getUniform(this._samplers[index]);if(sampler==null){this._samplers.splice(index,1);index--;}}engine.bindSamplers(this);this._isReady=true;}catch(e){this._compilationError=e.message;}};BABYLON.Effect.prototype.setTexture=function(channel,texture){this._engine.setTexture(this._samplers.indexOf(channel),texture);};BABYLON.Effect.prototype._cacheFloat2=function(uniformName,x,y){if(!this._valueCache[uniformName]){this._valueCache[uniformName]=[x,y];return;}this._valueCache[uniformName][0]=x;this._valueCache[uniformName][1]=y;};BABYLON.Effect.prototype._cacheFloat3=function(uniformName,x,y,z){if(!this._valueCache[uniformName]){this._valueCache[uniformName]=[x,y,z];return;}this._valueCache[uniformName][0]=x;this._valueCache[uniformName][1]=y;this._valueCache[uniformName][2]=z;};BABYLON.Effect.prototype._cacheFloat4=function(uniformName,x,y,z,w){if(!this._valueCache[uniformName]){this._valueCache[uniformName]=[x,y,z,w];return;}this._valueCache[uniformName][0]=x;this._valueCache[uniformName][1]=y;this._valueCache[uniformName][2]=z;this._valueCache[uniformName][3]=w;};BABYLON.Effect.prototype._cacheVector3=function(uniformName,vector){if(!this._valueCache[uniformName]){this._valueCache[uniformName]=[vector.x,vector.y,vector.z];return;}this._valueCache[uniformName][0]=vector.x;this._valueCache[uniformName][1]=vector.y;this._valueCache[uniformName][2]=vector.z;};BABYLON.Effect.prototype.setMatrices=function(uniformName,matrices){this._engine.setMatrices(this.getUniform(uniformName),matrices);};BABYLON.Effect.prototype.setMatrix=function(uniformName,matrix){this._engine.setMatrix(this.getUniform(uniformName),matrix);};BABYLON.Effect.prototype.setBool=function(uniformName,bool){if(this._valueCache[uniformName]&&this._valueCache[uniformName]===bool)return;this._valueCache[uniformName]=bool;this._engine.setBool(this.getUniform(uniformName),bool);};BABYLON.Effect.prototype.setVector3=function(uniformName,vector3){if(this._valueCache[uniformName]&&this._valueCache[uniformName][0]==vector3.x&&this._valueCache[uniformName][1]==vector3.y&&this._valueCache[uniformName][2]==vector3.z)return;this._cacheVector3(uniformName,vector3);this._engine.setVector3(this.getUniform(uniformName),vector3);};BABYLON.Effect.prototype.setFloat2=function(uniformName,x,y){if(this._valueCache[uniformName]&&this._valueCache[uniformName][0]==x&&this._valueCache[uniformName][1]==y)return;this._cacheFloat2(uniformName,x,y);this._engine.setFloat2(this.getUniform(uniformName),x,y);};BABYLON.Effect.prototype.setFloat3=function(uniformName,x,y,z){if(this._valueCache[uniformName]&&this._valueCache[uniformName][0]==x&&this._valueCache[uniformName][1]==y&&this._valueCache[uniformName][2]==z)return;this._cacheFloat3(uniformName,x,y,z);this._engine.setFloat3(this.getUniform(uniformName),x,y,z);};BABYLON.Effect.prototype.setFloat4=function(uniformName,x,y,z,w){if(this._valueCache[uniformName]&&this._valueCache[uniformName][0]==x&&this._valueCache[uniformName][1]==y&&this._valueCache[uniformName][2]==z&&this._valueCache[uniformName][3]==w)return;this._cacheFloat4(uniformName,x,y,z,w);this._engine.setFloat4(this.getUniform(uniformName),x,y,z,w);};BABYLON.Effect.prototype.setColor3=function(uniformName,color3){if(this._valueCache[uniformName]&&this._valueCache[uniformName][0]==color3.r&&this._valueCache[uniformName][1]==color3.g&&this._valueCache[uniformName][2]==color3.b)return;this._cacheFloat3(uniformName,color3.r,color3.g,color3.b);this._engine.setColor3(this.getUniform(uniformName),color3);};BABYLON.Effect.prototype.setColor4=function(uniformName,color3,alpha){if(this._valueCache[uniformName]&&this._valueCache[uniformName][0]==color3.r&&this._valueCache[uniformName][1]==color3.g&&this._valueCache[uniformName][2]==color3.b&&this._valueCache[uniformName][3]==alpha)return;this._cacheFloat4(uniformName,color3.r,color3.g,color3.b,alpha);this._engine.setColor4(this.getUniform(uniformName),color3,alpha);};BABYLON.Effect.ShadersStore={defaultPixelShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_PROJECTION	4.\n\n// Constants\nuniform vec3 vEyePosition;\nuniform vec3 vAmbientColor;\nuniform vec4 vDiffuseColor;\nuniform vec4 vSpecularColor;\nuniform vec3 vEmissiveColor;\n\n// Input\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec3 vColor;\n#endif\n\n// Lights\n#ifdef LIGHT0\nuniform vec4 vLightData0;\nuniform vec3 vLightDiffuse0;\nuniform vec3 vLightSpecular0;\n#ifdef SHADOW0\nvarying vec4 vPositionFromLight0;\nuniform sampler2D shadowSampler0;\n#endif\n#ifdef SPOTLIGHT0\nuniform vec4 vLightDirection0;\n#endif\n#ifdef HEMILIGHT0\nuniform vec3 vLightGround0;\n#endif\n#endif\n\n#ifdef LIGHT1\nuniform vec4 vLightData1;\nuniform vec3 vLightDiffuse1;\nuniform vec3 vLightSpecular1;\n#ifdef SHADOW1\nvarying vec4 vPositionFromLight1;\nuniform sampler2D shadowSampler1;\n#endif\n#ifdef SPOTLIGHT1\nuniform vec4 vLightDirection1;\n#endif\n#ifdef HEMILIGHT1\nuniform vec3 vLightGround1;\n#endif\n#endif\n\n#ifdef LIGHT2\nuniform vec4 vLightData2;\nuniform vec3 vLightDiffuse2;\nuniform vec3 vLightSpecular2;\n#ifdef SHADOW2\nvarying vec4 vPositionFromLight2;\nuniform sampler2D shadowSampler2;\n#endif\n#ifdef SPOTLIGHT2\nuniform vec4 vLightDirection2;\n#endif\n#ifdef HEMILIGHT2\nuniform vec3 vLightGround2;\n#endif\n#endif\n\n#ifdef LIGHT3\nuniform vec4 vLightData3;\nuniform vec3 vLightDiffuse3;\nuniform vec3 vLightSpecular3;\n#ifdef SHADOW3\nvarying vec4 vPositionFromLight3;\nuniform sampler2D shadowSampler3;\n#endif\n#ifdef SPOTLIGHT3\nuniform vec4 vLightDirection3;\n#endif\n#ifdef HEMILIGHT3\nuniform vec3 vLightGround3;\n#endif\n#endif\n\n// Samplers\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform sampler2D ambientSampler;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY	\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nvarying vec3 vReflectionUVW;\nuniform samplerCube reflectionCubeSampler;\nuniform sampler2D reflection2DSampler;\nuniform vec3 vReflectionInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform sampler2D emissiveSampler;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform sampler2D specularSampler;\n#endif\n\n// Shadows\n#ifdef SHADOWS\n\nfloat unpack(vec4 color)\n{\n	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);\n	return dot(color, bitShift);\n}\n\nfloat unpackHalf(vec2 color) \n{ \n	return color.x + (color.y / 255.0);\n}\n\nfloat computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float shadow = unpack(texture2D(shadowSampler, uv));\n\n	if (depth.z > shadow)\n	{\n		return 0.;\n	}\n	return 1.;\n}\n\n// Thanks to http://devmaster.net/\nfloat ChebychevInequality(vec2 moments, float t) \n{\n	if (t <= moments.x)\n	{\n		return 1.0;\n	}\n	\n	float variance = moments.y - (moments.x * moments.x); \n	variance = max(variance, 0.);\n\n	float d = t - moments.x; 	\n	return variance / (variance + d * d); \n}\n\nfloat computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	vec4 texel = texture2D(shadowSampler, uv);\n\n	vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));\n	return clamp(1.3 - ChebychevInequality(moments, depth.z), 0., 1.0);\n}\n#endif\n\n// Bump\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform sampler2D bumpSampler;\n\n// Thanks to http://www.thetenthplanet.de/archives/1180\nmat3 cotangent_frame(vec3 normal, vec3 p, vec2 uv)\n{\n	// get edge vectors of the pixel triangle\n	vec3 dp1 = dFdx(p);\n	vec3 dp2 = dFdy(p);\n	vec2 duv1 = dFdx(uv);\n	vec2 duv2 = dFdy(uv);\n\n	// solve the linear system\n	vec3 dp2perp = cross(dp2, normal);\n	vec3 dp1perp = cross(normal, dp1);\n	vec3 tangent = dp2perp * duv1.x + dp1perp * duv2.x;\n	vec3 binormal = dp2perp * duv1.y + dp1perp * duv2.y;\n\n	// construct a scale-invariant frame \n	float invmax = inversesqrt(max(dot(tangent, tangent), dot(binormal, binormal)));\n	return mat3(tangent * invmax, binormal * invmax, normal);\n}\n\nvec3 perturbNormal(vec3 viewDir)\n{\n	vec3 map = texture2D(bumpSampler, vBumpUV).xyz * vBumpInfos.y;\n	map = map * 255. / 127. - 128. / 127.;\n	mat3 TBN = cotangent_frame(vNormalW, -viewDir, vBumpUV);\n	return normalize(TBN * map);\n}\n#endif\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return clamp(fogCoeff, 0.0, 1.0);\n}\n#endif\n\n// Light Computing\nstruct lightingInfo\n{\n	vec3 diffuse;\n	vec3 specular;\n};\n\nlightingInfo computeLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor) {\n	lightingInfo result;\n\n	vec3 lightVectorW;\n	if (lightData.w == 0.)\n	{\n		lightVectorW = normalize(lightData.xyz - vPositionW);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// diffuse\n	float ndl = max(0., dot(vNormal, lightVectorW));\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightVectorW);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	result.diffuse = ndl * diffuseColor;\n	result.specular = specComp * specularColor;\n\n	return result;\n}\n\nlightingInfo computeSpotLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 lightDirection, vec3 diffuseColor, vec3 specularColor) {\n	lightingInfo result;\n\n	vec3 lightVectorW = normalize(lightData.xyz - vPositionW);\n\n	// diffuse\n	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));\n	float spotAtten = 0.0;\n\n	if (cosAngle >= lightDirection.w)\n	{\n		cosAngle = max(0., pow(cosAngle, lightData.w));\n		spotAtten = max(0., (cosAngle - lightDirection.w) / (1. - cosAngle));\n\n		// Diffuse\n		float ndl = max(0., dot(vNormal, -lightDirection.xyz));\n\n		// Specular\n		vec3 angleW = normalize(viewDirectionW - lightDirection.xyz);\n		float specComp = max(0., dot(vNormal, angleW));\n		specComp = pow(specComp, vSpecularColor.a);\n\n		result.diffuse = ndl * spotAtten * diffuseColor;\n		result.specular = specComp * specularColor * spotAtten;\n\n		return result;\n	}\n\n	result.diffuse = vec3(0.);\n	result.specular = vec3(0.);\n\n	return result;\n}\n\nlightingInfo computeHemisphericLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, vec3 groundColor) {\n	lightingInfo result;\n\n	// Diffuse\n	float ndl = dot(vNormal, lightData.xyz) * 0.5 + 0.5;\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightData.xyz);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	result.diffuse = mix(groundColor, diffuseColor, ndl);\n	result.specular = specComp * specularColor;\n\n	return result;\n}\n\nvoid main(void) {\n	// Clip plane\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n\n	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\n\n	// Base color\n	vec4 baseColor = vec4(1., 1., 1., 1.);\n	vec3 diffuseColor = vDiffuseColor.rgb;\n\n#ifdef VERTEXCOLOR\n	diffuseColor *= vColor;\n#endif\n\n#ifdef DIFFUSE\n	baseColor = texture2D(diffuseSampler, vDiffuseUV);\n\n#ifdef ALPHATEST\n	if (baseColor.a < 0.4)\n		discard;\n#endif\n\n	baseColor.rgb *= vDiffuseInfos.y;\n#endif\n\n	// Bump\n	vec3 normalW = vNormalW;\n\n#ifdef BUMP\n	normalW = perturbNormal(viewDirectionW);\n#endif\n\n	// Ambient color\n	vec3 baseAmbientColor = vec3(1., 1., 1.);\n\n#ifdef AMBIENT\n	baseAmbientColor = texture2D(ambientSampler, vAmbientUV).rgb * vAmbientInfos.y;\n#endif\n\n	// Lighting\n	vec3 diffuseBase = vec3(0., 0., 0.);\n	vec3 specularBase = vec3(0., 0., 0.);\n	float shadow = 1.;\n\n#ifdef LIGHT0\n#ifdef SPOTLIGHT0\n	lightingInfo info = computeSpotLighting(viewDirectionW, normalW, vLightData0, vLightDirection0, vLightDiffuse0, vLightSpecular0);\n#endif\n#ifdef HEMILIGHT0\n	lightingInfo info = computeHemisphericLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0, vLightSpecular0, vLightGround0);\n#endif\n#ifdef POINTDIRLIGHT0\n	lightingInfo info = computeLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0, vLightSpecular0);\n#endif\n#ifdef SHADOW0\n	#ifdef SHADOWVSM0\n		shadow = computeShadowWithVSM(vPositionFromLight0, shadowSampler0);\n	#else\n		shadow = computeShadow(vPositionFromLight0, shadowSampler0);\n	#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT1\n#ifdef SPOTLIGHT1\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData1, vLightDirection1, vLightDiffuse1, vLightSpecular1);\n#endif\n#ifdef HEMILIGHT1\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1, vLightSpecular1, vLightGround1);\n#endif\n#ifdef POINTDIRLIGHT1\n	info = computeLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1, vLightSpecular1);\n#endif\n#ifdef SHADOW1\n	#ifdef SHADOWVSM1\n		shadow = computeShadowWithVSM(vPositionFromLight1, shadowSampler1);\n	#else\n		shadow = computeShadow(vPositionFromLight1, shadowSampler1);\n	#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT2\n#ifdef SPOTLIGHT2\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData2, vLightDirection2, vLightDiffuse2, vLightSpecular2);\n#endif\n#ifdef HEMILIGHT2\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2, vLightSpecular2, vLightGround2);\n#endif\n#ifdef POINTDIRLIGHT2\n	info = computeLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2, vLightSpecular2);\n#endif\n#ifdef SHADOW2\n	#ifdef SHADOWVSM2\n		shadow = computeShadowWithVSM(vPositionFromLight2, shadowSampler2);\n	#else\n		shadow = computeShadow(vPositionFromLight2, shadowSampler2);\n	#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT3\n#ifdef SPOTLIGHT3\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData3, vLightDirection3, vLightDiffuse3, vLightSpecular3);\n#endif\n#ifdef HEMILIGHT3\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3, vLightSpecular3, vLightGround3);\n#endif\n#ifdef POINTDIRLIGHT3\n	info = computeLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3, vLightSpecular3);\n#endif\n#ifdef SHADOW3\n	#ifdef SHADOWVSM3\n		shadow = computeShadowWithVSM(vPositionFromLight3, shadowSampler3);\n	#else\n		shadow = computeShadow(vPositionFromLight3, shadowSampler3);\n	#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n	// Reflection\n	vec3 reflectionColor = vec3(0., 0., 0.);\n\n#ifdef REFLECTION\n	if (vReflectionInfos.z != 0.0)\n	{\n		reflectionColor = textureCube(reflectionCubeSampler, vReflectionUVW).rgb * vReflectionInfos.y;\n	}\n	else\n	{\n		vec2 coords = vReflectionUVW.xy;\n\n		if (vReflectionInfos.x == MAP_PROJECTION)\n		{\n			coords /= vReflectionUVW.z;\n		}\n\n		coords.y = 1.0 - coords.y;\n\n		reflectionColor = texture2D(reflection2DSampler, coords).rgb * vReflectionInfos.y;\n	}\n#endif\n\n	// Alpha\n	float alpha = vDiffuseColor.a;\n\n#ifdef OPACITY\n	vec3 opacityMap = texture2D(opacitySampler, vOpacityUV).rgb * vec3(0.3, 0.59, 0.11);\n	alpha *= (opacityMap.x + opacityMap.y + opacityMap.z)* vOpacityInfos.y;\n#endif\n\n	// Emissive\n	vec3 emissiveColor = vEmissiveColor;\n#ifdef EMISSIVE\n	emissiveColor += texture2D(emissiveSampler, vEmissiveUV).rgb * vEmissiveInfos.y;\n#endif\n\n	// Specular map\n	vec3 specularColor = vSpecularColor.rgb;\n#ifdef SPECULAR\n	specularColor = texture2D(specularSampler, vSpecularUV).rgb * vSpecularInfos.y;\n#endif\n\n	// Composition\n	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor + emissiveColor + vAmbientColor, 0.0, 1.0) * baseColor.rgb;\n	vec3 finalSpecular = specularBase * specularColor;\n\n	vec4 color = vec4(finalDiffuse * baseAmbientColor + finalSpecular + reflectionColor, alpha);\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	color.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = color;\n}",
defaultVertexShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_EXPLICIT	0.\n#define MAP_SPHERICAL	1.\n#define MAP_PLANAR		2.\n#define MAP_CUBIC		3.\n#define MAP_PROJECTION	4.\n#define MAP_SKYBOX		5.\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec3 color;\n#endif\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniforms\nuniform mat4 world;\nuniform mat4 view;\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform mat4 ambientMatrix;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nuniform vec3 vEyePosition;\nvarying vec3 vReflectionUVW;\nuniform vec3 vReflectionInfos;\nuniform mat4 reflectionMatrix;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform mat4 specularMatrix;\n#endif\n\n#ifdef BUMP\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\nuniform mat4 viewProjection;\n#else\nuniform mat4 worldViewProjection;\n#endif\n\n// Output\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec3 vColor;\n#endif\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nvarying float fClipDistance;\n#endif\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\n#ifdef SHADOWS\n#ifdef LIGHT0\nuniform mat4 lightMatrix0;\nvarying vec4 vPositionFromLight0;\n#endif\n#ifdef LIGHT1\nuniform mat4 lightMatrix1;\nvarying vec4 vPositionFromLight1;\n#endif\n#ifdef LIGHT2\nuniform mat4 lightMatrix2;\nvarying vec4 vPositionFromLight2;\n#endif\n#ifdef LIGHT3\nuniform mat4 lightMatrix3;\nvarying vec4 vPositionFromLight3;\n#endif\n#endif\n\n#ifdef REFLECTION\nvec3 computeReflectionCoords(float mode, vec4 worldPos, vec3 worldNormal)\n{\n	if (mode == MAP_SPHERICAL)\n	{\n		vec3 coords = vec3(view * vec4(worldNormal, 0.0));\n\n		return vec3(reflectionMatrix * vec4(coords, 1.0));\n	}\n	else if (mode == MAP_PLANAR)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = normalize(reflect(viewDir, worldNormal));\n\n		return vec3(reflectionMatrix * vec4(coords, 1));\n	}\n	else if (mode == MAP_CUBIC)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = reflect(viewDir, worldNormal);\n\n		return vec3(reflectionMatrix * vec4(coords, 0));\n	}\n	else if (mode == MAP_PROJECTION)\n	{\n		return vec3(reflectionMatrix * (view * worldPos));\n	}\n	else if (mode == MAP_SKYBOX)\n	{\n		return position;\n	}\n\n	return vec3(0, 0, 0);\n}\n#endif\n\nvoid main(void) {\n	mat4 finalWorld;\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n\n	finalWorld = world * (m0 + m1 + m2 + m3);\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#else\n	finalWorld = world;\n	gl_Position = worldViewProjection * vec4(position, 1.0);\n#endif\n\n	vec4 worldPos = finalWorld * vec4(position, 1.0);\n	vPositionW = vec3(worldPos);\n	vNormalW = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\n	// Texture coordinates\n#ifndef UV1\n	vec2 uv = vec2(0., 0.);\n#endif\n#ifndef UV2\n	vec2 uv2 = vec2(0., 0.);\n#endif\n\n#ifdef DIFFUSE\n	if (vDiffuseInfos.x == 0.)\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef AMBIENT\n	if (vAmbientInfos.x == 0.)\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef OPACITY\n	if (vOpacityInfos.x == 0.)\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef REFLECTION\n	vReflectionUVW = computeReflectionCoords(vReflectionInfos.x, vec4(vPositionW, 1.0), vNormalW);\n#endif\n\n#ifdef EMISSIVE\n	if (vEmissiveInfos.x == 0.)\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef SPECULAR\n	if (vSpecularInfos.x == 0.)\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef BUMP\n	if (vBumpInfos.x == 0.)\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n	// Clip plane\n#ifdef CLIPPLANE\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n\n	// Fog\n#ifdef FOG\n	fFogDistance = (view * worldPos).z;\n#endif\n\n	// Shadows\n#ifdef SHADOWS\n#ifdef LIGHT0\n	vPositionFromLight0 = lightMatrix0 * vec4(position, 1.0);\n#endif\n#ifdef LIGHT1\n	vPositionFromLight1 = lightMatrix1 * vec4(position, 1.0);\n#endif\n#ifdef LIGHT2\n	vPositionFromLight2 = lightMatrix2 * vec4(position, 1.0);\n#endif\n#ifdef LIGHT3\n	vPositionFromLight3 = lightMatrix3 * vec4(position, 1.0);\n#endif\n#endif\n\n	// Vertex color\n#ifdef VERTEXCOLOR\n	vColor = color;\n#endif\n}",
iedefaultPixelShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_PROJECTION	4.\n\n// Constants\nuniform vec3 vEyePosition;\nuniform vec3 vAmbientColor;\nuniform vec4 vDiffuseColor;\nuniform vec4 vSpecularColor;\nuniform vec3 vEmissiveColor;\n\n// Lights\n#ifdef LIGHT0\nuniform vec4 vLightData0;\nuniform vec3 vLightDiffuse0;\nuniform vec3 vLightSpecular0;\n#ifdef SHADOW0\nvarying vec4 vPositionFromLight0;\nuniform sampler2D shadowSampler0;\n#endif\n#endif\n\n//#ifdef LIGHT1\n//uniform vec4 vLightData1;\n//uniform vec3 vLightDiffuse1;\n//uniform vec3 vLightSpecular1;\n//#endif\n\n//#ifdef LIGHT2\n//uniform vec4 vLightData2;\n//uniform vec3 vLightDiffuse2;\n//uniform vec3 vLightSpecular2;\n//#endif\n\n// Samplers\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform sampler2D ambientSampler;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY	\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nvarying vec3 vReflectionUVW;\nuniform samplerCube reflectionCubeSampler;\nuniform sampler2D reflection2DSampler;\nuniform vec3 vReflectionInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform sampler2D emissiveSampler;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform sampler2D specularSampler;\n#endif\n\n// Input\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\n// Shadows\n#ifdef SHADOWS\n\nfloat unpack(vec4 color)\n{\n	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);\n	return dot(color, bitShift);\n}\n\nfloat unpackHalf(vec2 color)\n{\n	return color.x + (color.y / 255.0);\n}\n\n// Thanks to http://devmaster.net/\nfloat ChebychevInequality(vec2 moments, float t)\n{\n	if (t <= moments.x)\n	{\n		return 1.0;\n	}\n\n	float variance = moments.y - (moments.x * moments.x);\n	variance = max(variance, 0.);\n\n	float d = t - moments.x;\n	return variance / (variance + d * d);\n}\n\n#endif\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return clamp(fogCoeff, 0.0, 1.0);\n}\n\n#endif\n\nvec3 computeDiffuseLighting(vec3 vNormal, vec4 lightData, vec3 diffuseColor) {\n	vec3 lightVectorW;\n	if (lightData.w == 0.)\n	{\n		lightVectorW = normalize(lightData.xyz - vPositionW);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// diffuse\n	float ndl = max(0., dot(vNormal, lightVectorW));\n\n	return ndl * diffuseColor;\n}\n\nvec3 computeSpecularLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 specularColor) {\n	vec3 lightVectorW;\n	if (lightData.w == 0.)\n	{\n		lightVectorW = normalize(lightData.xyz - vPositionW);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightVectorW);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	return specComp * specularColor;\n}\n\nvoid main(void) {\n	// Clip plane\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n\n	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\n\n	// Base color\n	vec4 baseColor = vec4(1., 1., 1., 1.);\n	vec3 diffuseColor = vDiffuseColor.rgb;\n\n#ifdef DIFFUSE\n	baseColor = texture2D(diffuseSampler, vDiffuseUV);\n\n#ifdef ALPHATEST\n	if (baseColor.a < 0.4)\n		discard;\n#endif\n\n	baseColor.rgb *= vDiffuseInfos.y;\n#endif\n\n	// Bump\n	vec3 normalW = vNormalW;\n\n	// Ambient color\n	vec3 baseAmbientColor = vec3(1., 1., 1.);\n\n#ifdef AMBIENT\n	baseAmbientColor = texture2D(ambientSampler, vAmbientUV).rgb * vAmbientInfos.y;\n#endif\n\n	// Lighting\n	vec3 diffuseBase = vec3(0., 0., 0.);\n	vec3 specularBase = vec3(0., 0., 0.);\n	float shadow = 1.0;\n\n#ifdef LIGHT0\n	#ifdef SHADOW0\n		vec3 depth = vPositionFromLight0.xyz / vPositionFromLight0.w;\n		vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n	\n		if (uv.x >= 0. && uv.x <= 1.0 && uv.y >= 0. && uv.y <= 1.0)\n		{\n		#ifdef SHADOWVSM0\n			vec4 texel = texture2D(shadowSampler0, uv);\n\n			vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));\n			shadow = clamp(1.3 - ChebychevInequality(moments, depth.z), 0., 1.0);\n		#else\n			float shadowDepth = unpack(texture2D(shadowSampler0, uv));\n\n			if (depth.z > shadowDepth)\n			{\n				shadow = 0.;\n			}\n		#endif\n		}\n	#endif\n	diffuseBase += computeDiffuseLighting(normalW, vLightData0, vLightDiffuse0) * shadow;\n	specularBase += computeSpecularLighting(viewDirectionW, normalW, vLightData0, vLightSpecular0) * shadow;\n#endif\n//#ifdef LIGHT1\n//	diffuseBase += computeDiffuseLighting(normalW, vLightData1, vLightDiffuse1);\n//	specularBase += computeSpecularLighting(viewDirectionW, normalW, vLightData1, vLightSpecular1);\n//#endif\n//#ifdef LIGHT2\n//	diffuseBase += computeDiffuseLighting(normalW, vLightData2, vLightDiffuse2);\n//	specularBase += computeSpecularLighting(viewDirectionW, normalW, vLightData2, vLightSpecular2);\n//#endif\n\n\n	// Reflection\n	vec3 reflectionColor = vec3(0., 0., 0.);\n\n#ifdef REFLECTION\n	if (vReflectionInfos.z != 0.0)\n	{\n		reflectionColor = textureCube(reflectionCubeSampler, vReflectionUVW).rgb * vReflectionInfos.y;\n	}\n	else\n	{\n		vec2 coords = vReflectionUVW.xy;\n\n		if (vReflectionInfos.x == MAP_PROJECTION)\n		{\n			coords /= vReflectionUVW.z;\n		}\n\n		coords.y = 1.0 - coords.y;\n\n		reflectionColor = texture2D(reflection2DSampler, coords).rgb * vReflectionInfos.y;\n	}	\n#endif\n\n	// Alpha\n	float alpha = vDiffuseColor.a;\n\n#ifdef OPACITY\n	vec3 opacityMap = texture2D(opacitySampler, vOpacityUV).rgb * vec3(0.3, 0.59, 0.11);\n	alpha *= (opacityMap.x + opacityMap.y + opacityMap.z )* vOpacityInfos.y;\n#endif\n\n	// Emissive\n	vec3 emissiveColor = vEmissiveColor;\n#ifdef EMISSIVE\n	emissiveColor += texture2D(emissiveSampler, vEmissiveUV).rgb * vEmissiveInfos.y;\n#endif\n\n	// Specular map\n	vec3 specularColor = vSpecularColor.rgb;\n#ifdef SPECULAR\n	specularColor = texture2D(specularSampler, vSpecularUV).rgb * vSpecularInfos.y;	\n#endif\n\n	// Composition\n	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor + emissiveColor + vAmbientColor, 0.0, 1.0) * baseColor.rgb;\n	vec3 finalSpecular = specularBase * specularColor;\n\n	vec4 color = vec4(finalDiffuse * baseAmbientColor + finalSpecular + reflectionColor, alpha);\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	color.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = color;\n}",
iedefaultVertexShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_EXPLICIT	0.\n#define MAP_SPHERICAL	1.\n#define MAP_PLANAR		2.\n#define MAP_CUBIC		3.\n#define MAP_PROJECTION	4.\n#define MAP_SKYBOX		5.\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniforms\nuniform mat4 world;\nuniform mat4 view;\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform mat4 ambientMatrix;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nuniform vec3 vEyePosition;\nvarying vec3 vReflectionUVW;\n\nuniform vec3 vReflectionInfos;\nuniform mat4 reflectionMatrix;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform mat4 specularMatrix;\n#endif\n\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\nuniform mat4 viewProjection; \n#else\nuniform mat4 worldViewProjection;\n#endif\n\n// Output\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nvarying float fClipDistance;\n#endif\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\n#ifdef SHADOWS\n#ifdef LIGHT0\nuniform mat4 lightMatrix0;\nvarying vec4 vPositionFromLight0;\n#endif\n#endif\n\n#ifdef REFLECTION\nvec3 computeReflectionCoords(float mode, vec4 worldPos, vec3 worldNormal)\n{\n	if (mode == MAP_SPHERICAL)\n	{\n		vec3 coords = vec3(view * vec4(worldNormal, 0.0));\n\n		return vec3(reflectionMatrix * vec4(coords, 1.0));\n	}\n	else if (mode == MAP_PLANAR)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = normalize(reflect(viewDir, worldNormal));\n\n		return vec3(reflectionMatrix * vec4(coords, 1));\n	}\n	else if (mode == MAP_CUBIC)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = reflect(viewDir, worldNormal);\n\n		return vec3(reflectionMatrix * vec4(coords, 0));\n	}\n	else if (mode == MAP_PROJECTION)\n	{\n		return vec3(reflectionMatrix * (view * worldPos));\n	}\n	else if (mode == MAP_SKYBOX)\n	{\n		return position;\n	}\n\n	return vec3(0, 0, 0);\n}\n#endif\n\nvoid main(void) {\n	mat4 finalWorld;\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n\n	finalWorld = world * (m0 + m1 + m2);\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#else\n	finalWorld = world;\n	gl_Position = worldViewProjection * vec4(position, 1.0);\n#endif\n\n	vec4 worldPos = finalWorld * vec4(position, 1.0);\n	vPositionW = vec3(worldPos);\n	vNormalW = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\n	// Texture coordinates\n#ifndef UV1\n	vec2 uv = vec2(0., 0.);\n#endif\n#ifndef UV2\n	vec2 uv2 = vec2(0., 0.);\n#endif\n\n#ifdef DIFFUSE\n	if (vDiffuseInfos.x == 0.)\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef AMBIENT\n	if (vAmbientInfos.x == 0.)\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef OPACITY\n	if (vOpacityInfos.x == 0.)\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef REFLECTION\n	vReflectionUVW = computeReflectionCoords(vReflectionInfos.x, vec4(vPositionW, 1.0), vNormalW);\n#endif\n\n#ifdef EMISSIVE\n	if (vEmissiveInfos.x == 0.)\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef SPECULAR\n	if (vSpecularInfos.x == 0.)\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n	// Clip plane\n#ifdef CLIPPLANE\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n\n	// Fog\n#ifdef FOG\n	fFogDistance = (view * worldPos).z;\n#endif\n\n	// Shadows\n#ifdef SHADOWS\n#ifdef LIGHT0\n	vPositionFromLight0 = lightMatrix0 * vec4(position, 1.0);\n#endif\n#endif\n}",
layerPixelShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Color\nuniform vec4 color;\n\nvoid main(void) {\n	vec4 baseColor = texture2D(textureSampler, vUV);\n\n	gl_FragColor = baseColor * color;\n}",
layerVertexShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Uniforms\nuniform mat4 textureMatrix;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = vec2(textureMatrix * vec4(position * madd + madd, 1.0, 0.0));\n	gl_Position = vec4(position, 0.0, 1.0);\n}",
particlesPixelShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nvarying vec4 vColor;\nuniform vec4 textureMask;\nuniform sampler2D diffuseSampler;\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\nvoid main(void) {\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n	vec4 baseColor = texture2D(diffuseSampler, vUV);\n\n	gl_FragColor = (baseColor * textureMask + (vec4(1., 1., 1., 1.) - textureMask)) * vColor;\n}",
particlesVertexShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec4 color;\nattribute vec4 options;\n\n// Uniforms\nuniform mat4 view;\nuniform mat4 projection;\n\n// Output\nvarying vec2 vUV;\nvarying vec4 vColor;\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nuniform mat4 invView;\nvarying float fClipDistance;\n#endif\n\nvoid main(void) {	\n	vec3 viewPos = (view * vec4(position, 1.0)).xyz; \n	vec3 cornerPos;\n	float size = options.y;\n	float angle = options.x;\n	vec2 offset = options.zw;\n\n	cornerPos = vec3(offset.x - 0.5, offset.y  - 0.5, 0.) * size;\n\n	// Rotate\n	vec3 rotatedCorner;\n	rotatedCorner.x = cornerPos.x * cos(angle) - cornerPos.y * sin(angle);\n	rotatedCorner.y = cornerPos.x * sin(angle) + cornerPos.y * cos(angle);\n	rotatedCorner.z = 0.;\n\n	// Position\n	viewPos += rotatedCorner;\n	gl_Position = projection * vec4(viewPos, 1.0);   \n	\n	vColor = color;\n	vUV = offset;\n\n	// Clip plane\n#ifdef CLIPPLANE\n	vec4 worldPos = invView * vec4(viewPos, 1.0);\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n}",
shadowMapPixelShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvec4 pack(float depth)\n{\n	const vec4 bitOffset = vec4(255. * 255. * 255., 255. * 255., 255., 1.);\n	const vec4 bitMask = vec4(0., 1. / 255., 1. / 255., 1. / 255.);\n	\n	vec4 comp = fract(depth * bitOffset);\n	comp -= comp.xxyz * bitMask;\n	\n	return comp;\n}\n\n// Thanks to http://devmaster.net/\nvec2 packHalf(float depth) \n{ \n	const vec2 bitOffset = vec2(1.0 / 255., 0.);\n	vec2 color = vec2(depth, fract(depth * 255.));\n\n	return color - (color.yy * bitOffset);\n}\n\n\nvoid main(void)\n{\n#ifdef VSM\n	float moment1 = gl_FragCoord.z / gl_FragCoord.w; \n	float moment2 = moment1 * moment1;\n	gl_FragColor = vec4(packHalf(moment1), packHalf(moment2));\n#else\n	gl_FragColor = pack(gl_FragCoord.z / gl_FragCoord.w);\n#endif\n}",
shadowMapVertexShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attribute\nattribute vec3 position;\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniform\n#ifdef BONES\nuniform mat4 world;\nuniform mat4 mBones[BonesPerMesh];\nuniform mat4 viewProjection;\n#else\nuniform mat4 worldViewProjection;\n#endif\n\nvoid main(void)\n{\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n#ifdef IE\n	mat4 finalWorld = world * (m0 + m1 + m2);\n#else\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	mat4 finalWorld = world * (m0 + m1 + m2 + m3);\n#endif\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#else\n	gl_Position = worldViewProjection * vec4(position, 1.0);\n#endif\n}",
spritesPixelShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform bool alphaTest;\n\nvarying vec4 vColor;\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return min(1., max(0., fogCoeff));\n}\n#endif\n\n\nvoid main(void) {\n	vec4 baseColor = texture2D(diffuseSampler, vUV);\n\n	if (alphaTest) \n	{\n		if (baseColor.a < 0.95)\n			discard;\n	}\n\n	baseColor *= vColor;\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	baseColor.rgb = fog * baseColor.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = baseColor;\n}",
spritesVertexShader:"#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec4 options;\nattribute vec4 cellInfo;\nattribute vec4 color;\n\n// Uniforms\nuniform vec2 textureInfos;\nuniform mat4 view;\nuniform mat4 projection;\n\n// Output\nvarying vec2 vUV;\nvarying vec4 vColor;\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\nvoid main(void) {	\n	vec3 viewPos = (view * vec4(position, 1.0)).xyz; \n	vec3 cornerPos;\n	\n	float angle = options.x;\n	float size = options.y;\n	vec2 offset = options.zw;\n	vec2 uvScale = textureInfos.xy;\n\n	cornerPos = vec3(offset.x - 0.5, offset.y  - 0.5, 0.) * size;\n\n	// Rotate\n	vec3 rotatedCorner;\n	rotatedCorner.x = cornerPos.x * cos(angle) - cornerPos.y * sin(angle);\n	rotatedCorner.y = cornerPos.x * sin(angle) + cornerPos.y * cos(angle);\n	rotatedCorner.z = 0.;\n\n	// Position\n	viewPos += rotatedCorner;\n	gl_Position = projection * vec4(viewPos, 1.0);   \n\n	// Color\n	vColor = color;\n	\n	// Texture\n	vec2 uvOffset = vec2(abs(offset.x - cellInfo.x), 1.0 - abs(offset.y - cellInfo.y));\n\n	vUV = (uvOffset + cellInfo.zw) * uvScale;\n\n	// Fog\n#ifdef FOG\n	fFogDistance = viewPos.z;\n#endif\n}",
};})();var BABYLON=BABYLON||{};(function(){BABYLON.Material=function(name,scene){this.name=name;this.id=name;this._scene=scene;scene.materials.push(this);};BABYLON.Material.prototype.checkReadyOnEveryCall=true;BABYLON.Material.prototype.alpha=1.0;BABYLON.Material.prototype.wireframe=false;BABYLON.Material.prototype.backFaceCulling=true;BABYLON.Material.prototype._effect=null;BABYLON.Material.prototype.onDispose=null;BABYLON.Material.prototype.isReady=function(mesh){return true;};BABYLON.Material.prototype.getEffect=function(){return this._effect;};BABYLON.Material.prototype.needAlphaBlending=function(){return(this.alpha<1.0);};BABYLON.Material.prototype.needAlphaTesting=function(){return false;};BABYLON.Material.prototype._preBind=function(){var engine=this._scene.getEngine();engine.enableEffect(this._effect);engine.setState(this.backFaceCulling);};BABYLON.Material.prototype.bind=function(world,mesh){};BABYLON.Material.prototype.unbind=function(){};BABYLON.Material.prototype.baseDispose=function(){var index=this._scene.materials.indexOf(this);this._scene.materials.splice(index,1);if(this.onDispose){this.onDispose();}};BABYLON.Material.prototype.dispose=function(){this.baseDispose();};})();var BABYLON=BABYLON||{};(function(){BABYLON.StandardMaterial=function(name,scene){this.name=name;this.id=name;this._scene=scene;scene.materials.push(this);this.diffuseTexture=null;this.ambientTexture=null;this.opacityTexture=null;this.reflectionTexture=null;this.emissiveTexture=null;this.specularTexture=null;this.bumpTexture=null;this.ambientColor=new BABYLON.Color3(0,0,0);this.diffuseColor=new BABYLON.Color3(1,1,1);this.specularColor=new BABYLON.Color3(1,1,1);this.specularPower=64;this.emissiveColor=new BABYLON.Color3(0,0,0);this._cachedDefines=null;this._renderTargets=new BABYLON.Tools.SmartArray(16);this._worldViewProjectionMatrix=BABYLON.Matrix.Zero();this._lightMatrix=BABYLON.Matrix.Zero();this._globalAmbientColor=new BABYLON.Color3(0,0,0);this._baseColor=new BABYLON.Color3();this._scaledDiffuse=new BABYLON.Color3();this._scaledSpecular=new BABYLON.Color3();};BABYLON.StandardMaterial.prototype=Object.create(BABYLON.Material.prototype);BABYLON.StandardMaterial.prototype.needAlphaBlending=function(){return(this.alpha<1.0)||(this.opacityTexture!=null);};BABYLON.StandardMaterial.prototype.needAlphaTesting=function(){return this.diffuseTexture!=null&&this.diffuseTexture.hasAlpha;};BABYLON.StandardMaterial.prototype.isReady=function(mesh,required){if(!this.checkReadyOnEveryCall){if(this._renderId===this._scene.getRenderId()){return true;}}var engine=this._scene.getEngine();var defines=[];if(this.diffuseTexture){if(!this.diffuseTexture.isReady(required)){return false;}else{defines.push("#define DIFFUSE");}}if(this.ambientTexture){if(!this.ambientTexture.isReady(required)){return false;}else{defines.push("#define AMBIENT");}}if(this.opacityTexture){if(!this.opacityTexture.isReady(required)){return false;}else{defines.push("#define OPACITY");}}if(this.reflectionTexture){if(!this.reflectionTexture.isReady(required)){return false;}else{defines.push("#define REFLECTION");}}if(this.emissiveTexture){if(!this.emissiveTexture.isReady(required)){return false;}else{defines.push("#define EMISSIVE");}}if(this.specularTexture){if(!this.specularTexture.isReady(required)){return false;}else{defines.push("#define SPECULAR");}}if(this._scene.getEngine().getCaps().standardDerivatives&&this.bumpTexture){if(!this.bumpTexture.isReady(required)){return false;}else{defines.push("#define BUMP");}}if(BABYLON.clipPlane){defines.push("#define CLIPPLANE");}if(engine.getAlphaTesting()){defines.push("#define ALPHATEST");}if(this._scene.fogMode!==BABYLON.Scene.FOGMODE_NONE){defines.push("#define FOG");}var shadowsActivated=false;var lightIndex=0;for(var index=0;index<this._scene.lights.length;index++){var light=this._scene.lights[index];if(!light.isEnabled){continue;}defines.push("#define LIGHT"+lightIndex);if(light instanceof BABYLON.SpotLight){defines.push("#define SPOTLIGHT"+lightIndex);}else if(light instanceof BABYLON.HemisphericLight){defines.push("#define HEMILIGHT"+lightIndex);}else{defines.push("#define POINTDIRLIGHT"+lightIndex);}var shadowGenerator=light.getShadowGenerator();if(mesh&&mesh.receiveShadows&&shadowGenerator){defines.push("#define SHADOW"+lightIndex);if(!shadowsActivated){defines.push("#define SHADOWS");shadowsActivated=true;}if(shadowGenerator.useVarianceShadowMap){defines.push("#define SHADOWVSM"+lightIndex);}}lightIndex++;if(lightIndex==4)break;}var attribs=[BABYLON.VertexBuffer.PositionKind,BABYLON.VertexBuffer.NormalKind];if(mesh){if(mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)){attribs.push(BABYLON.VertexBuffer.UVKind);defines.push("#define UV1");}if(mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UV2Kind)){attribs.push(BABYLON.VertexBuffer.UV2Kind);defines.push("#define UV2");}if(mesh.isVerticesDataPresent(BABYLON.VertexBuffer.ColorKind)){attribs.push(BABYLON.VertexBuffer.ColorKind);defines.push("#define VERTEXCOLOR");}if(mesh.skeleton&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind)&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)){attribs.push(BABYLON.VertexBuffer.MatricesIndicesKind);attribs.push(BABYLON.VertexBuffer.MatricesWeightsKind);defines.push("#define BONES");defines.push("#define BonesPerMesh "+mesh.skeleton.bones.length);}}var join=defines.join("\n");if(this._cachedDefines!=join){this._cachedDefines=join;var shaderName="default";if(BABYLON.Tools.isIE()){shaderName="iedefault";}this._effect=this._scene.getEngine().createEffect(shaderName,attribs,["world","view","worldViewProjection","viewProjection","vEyePosition","vLightsType","vAmbientColor","vDiffuseColor","vSpecularColor","vEmissiveColor","vLightData0","vLightDiffuse0","vLightSpecular0","vLightDirection0","vLightGround0","lightMatrix0","vLightData1","vLightDiffuse1","vLightSpecular1","vLightDirection1","vLightGround1","lightMatrix1","vLightData2","vLightDiffuse2","vLightSpecular2","vLightDirection2","vLightGround2","lightMatrix2","vLightData3","vLightDiffuse3","vLightSpecular3","vLightDirection3","vLightGround3","lightMatrix3","vFogInfos","vFogColor","vDiffuseInfos","vAmbientInfos","vOpacityInfos","vReflectionInfos","vEmissiveInfos","vSpecularInfos","vBumpInfos","mBones","vClipPlane","diffuseMatrix","ambientMatrix","opacityMatrix","reflectionMatrix","emissiveMatrix","specularMatrix","bumpMatrix"],["diffuseSampler","ambientSampler","opacitySampler","reflectionCubeSampler","reflection2DSampler","emissiveSampler","specularSampler","bumpSampler","shadowSampler0","shadowSampler1","shadowSampler2","shadowSampler3"],join);}if(!this._effect.isReady()){return false;}this._renderId=this._scene.getRenderId();return true;};BABYLON.StandardMaterial.prototype.getRenderTargetTextures=function(){this._renderTargets.reset();if(this.reflectionTexture&&this.reflectionTexture.isRenderTarget){this._renderTargets.push(this.reflectionTexture);}return this._renderTargets;};BABYLON.StandardMaterial.prototype.unbind=function(){if(this.reflectionTexture&&this.reflectionTexture.isRenderTarget){this._effect.setTexture("reflection2DSampler",null);}};BABYLON.StandardMaterial.prototype.bind=function(world,mesh){this._baseColor.copyFrom(this.diffuseColor);this._effect.setMatrix("world",world);if(mesh.skeleton&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind)&&mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)){this._effect.setMatrix("viewProjection",this._scene.getTransformMatrix());this._effect.setMatrices("mBones",mesh.skeleton.getTransformMatrices());}else{world.multiplyToRef(this._scene.getTransformMatrix(),this._worldViewProjectionMatrix);this._effect.setMatrix("worldViewProjection",this._worldViewProjectionMatrix);}if(this.diffuseTexture){this._effect.setTexture("diffuseSampler",this.diffuseTexture);this._effect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level);this._effect.setMatrix("diffuseMatrix",this.diffuseTexture._computeTextureMatrix());this._baseColor.copyFromFloats(1,1,1);}if(this.ambientTexture){this._effect.setTexture("ambientSampler",this.ambientTexture);this._effect.setFloat2("vAmbientInfos",this.ambientTexture.coordinatesIndex,this.ambientTexture.level);this._effect.setMatrix("ambientMatrix",this.ambientTexture._computeTextureMatrix());}if(this.opacityTexture){this._effect.setTexture("opacitySampler",this.opacityTexture);this._effect.setFloat2("vOpacityInfos",this.opacityTexture.coordinatesIndex,this.opacityTexture.level);this._effect.setMatrix("opacityMatrix",this.opacityTexture._computeTextureMatrix());}if(this.reflectionTexture){if(this.reflectionTexture.isCube){this._effect.setTexture("reflectionCubeSampler",this.reflectionTexture);}else{this._effect.setTexture("reflection2DSampler",this.reflectionTexture);}this._effect.setMatrix("reflectionMatrix",this.reflectionTexture._computeReflectionTextureMatrix());this._effect.setFloat3("vReflectionInfos",this.reflectionTexture.coordinatesMode,this.reflectionTexture.level,this.reflectionTexture.isCube?1:0);}if(this.emissiveTexture){this._effect.setTexture("emissiveSampler",this.emissiveTexture);this._effect.setFloat2("vEmissiveInfos",this.emissiveTexture.coordinatesIndex,this.emissiveTexture.level);this._effect.setMatrix("emissiveMatrix",this.emissiveTexture._computeTextureMatrix());}if(this.specularTexture){this._effect.setTexture("specularSampler",this.specularTexture);this._effect.setFloat2("vSpecularInfos",this.specularTexture.coordinatesIndex,this.specularTexture.level);this._effect.setMatrix("specularMatrix",this.specularTexture._computeTextureMatrix());}if(this.bumpTexture&&this._scene.getEngine().getCaps().standardDerivatives){this._effect.setTexture("bumpSampler",this.bumpTexture);this._effect.setFloat2("vBumpInfos",this.bumpTexture.coordinatesIndex,this.bumpTexture.level);this._effect.setMatrix("bumpMatrix",this.bumpTexture._computeTextureMatrix());}this._scene.ambientColor.multiplyToRef(this.ambientColor,this._globalAmbientColor);this._effect.setVector3("vEyePosition",this._scene.activeCamera.position);this._effect.setColor3("vAmbientColor",this._globalAmbientColor);this._effect.setColor4("vDiffuseColor",this._baseColor,this.alpha*mesh.visibility);this._effect.setColor4("vSpecularColor",this.specularColor,this.specularPower);this._effect.setColor3("vEmissiveColor",this.emissiveColor);var lightIndex=0;for(var index=0;index<this._scene.lights.length;index++){var light=this._scene.lights[index];if(!light.isEnabled){continue;}if(light instanceof BABYLON.PointLight){this._effect.setFloat4("vLightData"+lightIndex,light.position.x,light.position.y,light.position.z,0);}else if(light instanceof BABYLON.DirectionalLight){this._effect.setFloat4("vLightData"+lightIndex,light.direction.x,light.direction.y,light.direction.z,1);}else if(light instanceof BABYLON.SpotLight){this._effect.setFloat4("vLightData"+lightIndex,light.position.x,light.position.y,light.position.z,light.exponent);var normalizeDirection=BABYLON.Vector3.Normalize(light.direction);this._effect.setFloat4("vLightDirection"+lightIndex,normalizeDirection.x,normalizeDirection.y,normalizeDirection.z,Math.cos(light.angle*0.5));}else if(light instanceof BABYLON.HemisphericLight){var normalizeDirection=BABYLON.Vector3.Normalize(light.direction);this._effect.setFloat4("vLightData"+lightIndex,normalizeDirection.x,normalizeDirection.y,normalizeDirection.z,0);this._effect.setColor3("vLightGround"+lightIndex,light.groundColor.scale(light.intensity));}light.diffuse.scaleToRef(light.intensity,this._scaledDiffuse);light.specular.scaleToRef(light.intensity,this._scaledSpecular);this._effect.setColor3("vLightDiffuse"+lightIndex,this._scaledDiffuse);this._effect.setColor3("vLightSpecular"+lightIndex,this._scaledSpecular);var shadowGenerator=light.getShadowGenerator();if(mesh.receiveShadows&&shadowGenerator){world.multiplyToRef(shadowGenerator.getTransformMatrix(),this._lightMatrix);this._effect.setMatrix("lightMatrix"+lightIndex,this._lightMatrix);this._effect.setTexture("shadowSampler"+lightIndex,shadowGenerator.getShadowMap());}lightIndex++;if(lightIndex==4)break;}if(BABYLON.clipPlane){this._effect.setFloat4("vClipPlane",BABYLON.clipPlane.normal.x,BABYLON.clipPlane.normal.y,BABYLON.clipPlane.normal.z,BABYLON.clipPlane.d);}if(this._scene.fogMode!==BABYLON.Scene.FOGMODE_NONE||this.reflectionTexture){this._effect.setMatrix("view",this._scene.getViewMatrix());}if(this._scene.fogMode!==BABYLON.Scene.FOGMODE_NONE){this._effect.setFloat4("vFogInfos",this._scene.fogMode,this._scene.fogStart,this._scene.fogEnd,this._scene.fogDensity);this._effect.setColor3("vFogColor",this._scene.fogColor);}};BABYLON.StandardMaterial.prototype.getAnimatables=function(){var results=[];if(this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0){results.push(this.diffuseTexture);}if(this.ambientTexture&&this.ambientTexture.animations&&this.ambientTexture.animations.length>0){results.push(this.ambientTexture);}if(this.opacityTexture&&this.opacityTexture.animations&&this.opacityTexture.animations.length>0){results.push(this.opacityTexture);}if(this.reflectionTexture&&this.reflectionTexture.animations&&this.reflectionTexture.animations.length>0){results.push(this.reflectionTexture);}if(this.emissiveTexture&&this.emissiveTexture.animations&&this.emissiveTexture.animations.length>0){results.push(this.emissiveTexture);}if(this.specularTexture&&this.specularTexture.animations&&this.specularTexture.animations.length>0){results.push(this.specularTexture);}if(this.bumpTexture&&this.bumpTexture.animations&&this.bumpTexture.animations.length>0){results.push(this.bumpTexture);}return results;};BABYLON.StandardMaterial.prototype.dispose=function(){if(this.diffuseTexture){this.diffuseTexture.dispose();}if(this.ambientTexture){this.ambientTexture.dispose();}if(this.opacityTexture){this.opacityTexture.dispose();}if(this.reflectionTexture){this.reflectionTexture.dispose();}if(this.emissiveTexture){this.emissiveTexture.dispose();}if(this.specularTexture){this.specularTexture.dispose();}if(this.bumpTexture){this.bumpTexture.dispose();}this.baseDispose();};BABYLON.StandardMaterial.prototype.clone=function(name){var newStandardMaterial=new BABYLON.StandardMaterial(name,this._scene);newStandardMaterial.checkReadyOnEveryCall=this.checkReadyOnEveryCall;newStandardMaterial.alpha=this.alpha;newStandardMaterial.wireframe=this.wireframe;newStandardMaterial.backFaceCulling=this.backFaceCulling;if(this.diffuseTexture&&this.diffuseTexture.clone){newStandardMaterial.diffuseTexture=this.diffuseTexture.clone();}if(this.ambientTexture&&this.ambientTexture.clone){newStandardMaterial.ambientTexture=this.ambientTexture.clone();}if(this.opacityTexture&&this.opacityTexture.clone){newStandardMaterial.opacityTexture=this.opacityTexture.clone();}if(this.reflectionTexture&&this.reflectionTexture.clone){newStandardMaterial.reflectionTexture=this.reflectionTexture.clone();}if(this.emissiveTexture&&this.emissiveTexture.clone){newStandardMaterial.emissiveTexture=this.emissiveTexture.clone();}if(this.specularTexture&&this.specularTexture.clone){newStandardMaterial.specularTexture=this.specularTexture.clone();}if(this.bumpTexture&&this.bumpTexture.clone){newStandardMaterial.bumpTexture=this.bumpTexture.clone();}newStandardMaterial.ambientColor=this.ambientColor.clone();newStandardMaterial.diffuseColor=this.diffuseColor.clone();newStandardMaterial.specularColor=this.specularColor.clone();newStandardMaterial.specularPower=this.specularPower;newStandardMaterial.emissiveColor=this.emissiveColor.clone();return newStandardMaterial;};})();var BABYLON=BABYLON||{};(function(){BABYLON.MultiMaterial=function(name,scene){this.name=name;this.id=name;this._scene=scene;scene.multiMaterials.push(this);this.subMaterials=[];};BABYLON.MultiMaterial.prototype.getSubMaterial=function(index){if(index<0||index>=this.subMaterials.length){return this._scene.defaultMaterial;}return this.subMaterials[index];};BABYLON.MultiMaterial.prototype.isReady=function(mesh){var result=true;for(var index=0;index<this.subMaterials.length;index++){var subMaterial=this.subMaterials[index];if(subMaterial){result&=this.subMaterials[index].isReady(mesh);}}return result;};})();var BABYLON=BABYLON||{};(function(){window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction;window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;BABYLON.Database=function(urlToScene){this.currentSceneUrl=BABYLON.Database.ReturnFullUrlLocation(urlToScene);this.db=null;this.enableSceneOffline=false;this.enableTexturesOffline=false;this.manifestVersionFound=0;this.mustUpdateRessources=false;this.hasReachedQuota=false;this.checkManifestFile();};BABYLON.Database.isUASupportingBlobStorage=true;function parseURL(url){var a=document.createElement('a');a.href=url;var fileName=url.substring(url.lastIndexOf("/")+1,url.length);var absLocation=url.substring(0,url.indexOf(fileName,0));return absLocation;};BABYLON.Database.ReturnFullUrlLocation=function(url){if(url.indexOf("http:/")===-1){return(parseURL(window.location.href)+url);}else{return url;}};BABYLON.Database.prototype.checkManifestFile=function(){var that=this;var manifestURL=this.currentSceneUrl+".manifest";var xhr=new XMLHttpRequest();xhr.open("GET",manifestURL,false);xhr.addEventListener("load",function(){if(xhr.status===200){try{manifestFile=JSON.parse(xhr.response);that.enableSceneOffline=manifestFile.enableSceneOffline;that.enableTexturesOffline=manifestFile.enableTexturesOffline;if(manifestFile.version&&!isNaN(parseInt(manifestFile.version))){that.manifestVersionFound=manifestFile.version;}}catch(ex){that.enableSceneOffline=false;that.enableTexturesOffline=false;}}else{that.enableSceneOffline=false;that.enableTexturesOffline=false;}},false);xhr.addEventListener("error",function(event){that.enableSceneOffline=false;that.enableTexturesOffline=false;},false);xhr.send();};BABYLON.Database.prototype.openAsync=function(successCallback,errorCallback){var that=this;if(!window.indexedDB||!(this.enableSceneOffline||this.enableTexturesOffline)){this.isSupported=false;if(errorCallback)errorCallback();}else{if(!this.db){this.hasReachedQuota=false;this.isSupported=true;var request=window.indexedDB.open("babylonjs",1.0);request.onerror=function(event){that.isSupported=false;if(errorCallback)errorCallback();};request.onblocked=function(event){console.log("IDB request blocked. Please reload the page.");if(errorCallback)errorCallback();};request.onsuccess=function(event){that.db=request.result;successCallback();};request.onupgradeneeded=function(event){that.db=event.target.result;var scenesStore=that.db.createObjectStore("scenes",{keyPath:"sceneUrl"});var versionsStore=that.db.createObjectStore("versions",{keyPath:"sceneUrl"});var texturesStore=that.db.createObjectStore("textures",{keyPath:"textureUrl"});};}else{if(successCallback)successCallback();}}};BABYLON.Database.prototype.loadImageFromDB=function(url,image){var that=this;var completeURL=BABYLON.Database.ReturnFullUrlLocation(url);var saveAndLoadImage=function(event){if(!that.hasReachedQuota&&that.db!==null){that._saveImageIntoDBAsync(completeURL,image);}else{image.src=url;}};if(!this.mustUpdateRessources){this._loadImageFromDBAsync(completeURL,image,saveAndLoadImage);}else{saveAndLoadImage();}};BABYLON.Database.prototype._loadImageFromDBAsync=function(url,image,notInDBCallback){if(this.isSupported&&this.db!==null){var texture;var transaction=this.db.transaction(["textures"]);transaction.onabort=function(event){image.src=url;};transaction.oncomplete=function(event){var blobTextureURL;if(texture){var URL=window.URL||window.webkitURL;blobTextureURL=URL.createObjectURL(texture.data,{oneTimeOnly:true});image.src=blobTextureURL;}else{notInDBCallback();}};var getRequest=transaction.objectStore("textures").get(url);getRequest.onsuccess=function(event){texture=event.target.result;};getRequest.onerror=function(event){console.log("Error loading texture "+url+" from DB.");image.src=url;};}else{console.log("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");image.src=url;}};BABYLON.Database.prototype._saveImageIntoDBAsync=function(url,image){if(this.isSupported){var generateBlobUrl=function(){var blobTextureURL;if(blob){var URL=window.URL||window.webkitURL;try{blobTextureURL=URL.createObjectURL(blob,{oneTimeOnly:true});}catch(ex){blobTextureURL=URL.createObjectURL(blob);}}image.src=blobTextureURL;};if(BABYLON.Database.isUASupportingBlobStorage){var that=this;var xhr=new XMLHttpRequest(),blob;xhr.open("GET",url,true);xhr.responseType="blob";xhr.addEventListener("load",function(){if(xhr.status===200){blob=xhr.response;var transaction=that.db.transaction(["textures"],"readwrite");transaction.onabort=function(event){try{if(event.srcElement.error.name==="QuotaExceededError"){that.hasReachedQuota=true;}}catch(ex){}generateBlobUrl();};transaction.oncomplete=function(event){generateBlobUrl();};var newTexture={};newTexture.textureUrl=url;newTexture.data=blob;try{var addRequest=transaction.objectStore("textures").put(newTexture);addRequest.onsuccess=function(event){console.log("");};addRequest.onerror=function(event){generateBlobUrl();};}catch(ex){if(ex.code===25){BABYLON.Database.isUASupportingBlobStorage=false;}image.src=url;}}else{image.src=url;}},false);xhr.addEventListener("error",function(event){console.log("Error in XHR request in BABYLON.Database.");image.src=url;},false);xhr.send();}else{image.src=url;}}else{console.log("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");image.src=url;}};BABYLON.Database.prototype._checkVersionFromDB=function(url,versionLoaded){var that=this;var updateVersion=function(event){that._saveVersionIntoDBAsync(url,versionLoaded);};this._loadVersionFromDBAsync(url,versionLoaded,updateVersion);};BABYLON.Database.prototype._loadVersionFromDBAsync=function(url,callback,updateInDBCallback){if(this.isSupported){var version;var that=this;var transaction=this.db.transaction(["versions"]);transaction.oncomplete=function(event){if(version){if(that.manifestVersionFound>version.data){that.mustUpdateRessources=true;updateInDBCallback();}else{callback(version.data);}}else{that.mustUpdateRessources=true;updateInDBCallback();}};transaction.onabort=function(event){callback(-1);};var getRequest=transaction.objectStore("versions").get(url);getRequest.onsuccess=function(event){version=event.target.result;};getRequest.onerror=function(event){console.log("Error loading version for scene "+url+" from DB.");callback(-1);};}else{console.log("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");callback(-1);}};BABYLON.Database.prototype._saveVersionIntoDBAsync=function(url,callback){if(this.isSupported&&!this.hasReachedQuota){var that=this;var transaction=this.db.transaction(["versions"],"readwrite");transaction.onabort=function(event){try{if(event.srcElement.error.name==="QuotaExceededError"){that.hasReachedQuota=true;}}catch(ex){}callback(-1);};transaction.oncomplete=function(event){callback(that.manifestVersionFound);};var newVersion={};newVersion.sceneUrl=url;newVersion.data=this.manifestVersionFound;try{var addRequest=transaction.objectStore("versions").put(newVersion);addRequest.onsuccess=function(event){console.log("");};addRequest.onerror=function(event){console.log("Error in DB add version request in BABYLON.Database.");};}catch(ex){callback(-1);}}else{callback(-1);}};BABYLON.Database.prototype.loadSceneFromDB=function(url,sceneLoaded,progressCallBack){var that=this;var completeUrl=BABYLON.Database.ReturnFullUrlLocation(url);var saveAndLoadScene=function(event){that._saveSceneIntoDBAsync(completeUrl,sceneLoaded,progressCallBack);};this._checkVersionFromDB(completeUrl,function(version){if(!that.mustUpdateRessources){that._loadSceneFromDBAsync(completeUrl,sceneLoaded,saveAndLoadScene);}else{that._saveSceneIntoDBAsync(completeUrl,sceneLoaded,progressCallBack);}});};BABYLON.Database.prototype._loadSceneFromDBAsync=function(url,callback,notInDBCallback){if(this.isSupported){var scene;var transaction=this.db.transaction(["scenes"]);transaction.oncomplete=function(event){if(scene){callback(scene.data);}else{notInDBCallback();}};transaction.onabort=function(event){notInDBCallback();};var getRequest=transaction.objectStore("scenes").get(url);getRequest.onsuccess=function(event){scene=event.target.result;};getRequest.onerror=function(event){console.log("Error loading scene "+url+" from DB.");notInDBCallback();};}else{console.log("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");callback();}};BABYLON.Database.prototype._saveSceneIntoDBAsync=function(url,callback,progressCallback){if(this.isSupported){var xhr=new XMLHttpRequest(),sceneText;var that=this;xhr.open("GET",url,true);xhr.onprogress=progressCallback;xhr.addEventListener("load",function(){if(xhr.status===200){sceneText=xhr.responseText;if(!that.hasReachedQuota){var transaction=that.db.transaction(["scenes"],"readwrite");transaction.onabort=function(event){try{if(event.srcElement.error.name==="QuotaExceededError"){that.hasReachedQuota=true;}}catch(ex){}callback(sceneText);};transaction.oncomplete=function(event){callback(sceneText);};var newScene={};newScene.sceneUrl=url;newScene.data=sceneText;newScene.version=that.manifestVersionFound;try{var addRequest=transaction.objectStore("scenes").put(newScene);addRequest.onsuccess=function(event){console.log("");};addRequest.onerror=function(event){console.log("Error in DB add scene request in BABYLON.Database.");};}catch(ex){callback(sceneText);}}else{callback(sceneText);}}else{callback();}},false);xhr.addEventListener("error",function(event){console.log("error on XHR request.");callback();},false);xhr.send();}else{console.log("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");callback();}};})();var BABYLON=BABYLON||{};(function(){var loadCubeTexture=function(rootUrl,parsedTexture,scene){var texture=new BABYLON.CubeTexture(rootUrl+parsedTexture.name,scene);texture.name=parsedTexture.name;texture.hasAlpha=parsedTexture.hasAlpha;texture.level=parsedTexture.level;texture.coordinatesMode=parsedTexture.coordinatesMode;return texture;};var loadTexture=function(rootUrl,parsedTexture,scene){if(!parsedTexture.name&&!parsedTexture.isRenderTarget){return null;}if(parsedTexture.isCube){return loadCubeTexture(rootUrl,parsedTexture,scene);}var texture;if(parsedTexture.mirrorPlane){texture=new BABYLON.MirrorTexture(parsedTexture.name,parsedTexture.renderTargetSize,scene);texture._waitingRenderList=parsedTexture.renderList;texture.mirrorPlane=BABYLON.Plane.FromArray(parsedTexture.mirrorPlane);}else if(parsedTexture.isRenderTarget){texture=new BABYLON.RenderTargetTexture(parsedTexture.name,parsedTexture.renderTargetSize,scene);texture._waitingRenderList=parsedTexture.renderList;}else{texture=new BABYLON.Texture(rootUrl+parsedTexture.name,scene);}texture.name=parsedTexture.name;texture.hasAlpha=parsedTexture.hasAlpha;texture.level=parsedTexture.level;texture.coordinatesIndex=parsedTexture.coordinatesIndex;texture.coordinatesMode=parsedTexture.coordinatesMode;texture.uOffset=parsedTexture.uOffset;texture.vOffset=parsedTexture.vOffset;texture.uScale=parsedTexture.uScale;texture.vScale=parsedTexture.vScale;texture.uAng=parsedTexture.uAng;texture.vAng=parsedTexture.vAng;texture.wAng=parsedTexture.wAng;texture.wrapU=parsedTexture.wrapU;texture.wrapV=parsedTexture.wrapV;if(parsedTexture.animations){for(var animationIndex=0;animationIndex<parsedTexture.animations.length;animationIndex++){var parsedAnimation=parsedTexture.animations[animationIndex];texture.animations.push(parseAnimation(parsedAnimation));}}return texture;};var parseSkeleton=function(parsedSkeleton,scene){var skeleton=new BABYLON.Skeleton(parsedSkeleton.name,parsedSkeleton.id,scene);for(var index=0;index<parsedSkeleton.bones.length;index++){var parsedBone=parsedSkeleton.bones[index];var parentBone=null;if(parsedBone.parentBoneIndex>-1){parentBone=skeleton.bones[parsedBone.parentBoneIndex];}var bone=new BABYLON.Bone(parsedBone.name,skeleton,parentBone,BABYLON.Matrix.FromArray(parsedBone.matrix));if(parsedBone.animation){bone.animations.push(parseAnimation(parsedBone.animation));}}return skeleton;};var parseMaterial=function(parsedMaterial,scene,rootUrl){var material;material=new BABYLON.StandardMaterial(parsedMaterial.name,scene);material.ambientColor=BABYLON.Color3.FromArray(parsedMaterial.ambient);material.diffuseColor=BABYLON.Color3.FromArray(parsedMaterial.diffuse);material.specularColor=BABYLON.Color3.FromArray(parsedMaterial.specular);material.specularPower=parsedMaterial.specularPower;material.emissiveColor=BABYLON.Color3.FromArray(parsedMaterial.emissive);material.alpha=parsedMaterial.alpha;material.id=parsedMaterial.id;material.backFaceCulling=parsedMaterial.backFaceCulling;if(parsedMaterial.diffuseTexture){material.diffuseTexture=loadTexture(rootUrl,parsedMaterial.diffuseTexture,scene);}if(parsedMaterial.ambientTexture){material.ambientTexture=loadTexture(rootUrl,parsedMaterial.ambientTexture,scene);}if(parsedMaterial.opacityTexture){material.opacityTexture=loadTexture(rootUrl,parsedMaterial.opacityTexture,scene);}if(parsedMaterial.reflectionTexture){material.reflectionTexture=loadTexture(rootUrl,parsedMaterial.reflectionTexture,scene);}if(parsedMaterial.emissiveTexture){material.emissiveTexture=loadTexture(rootUrl,parsedMaterial.emissiveTexture,scene);}if(parsedMaterial.specularTexture){material.specularTexture=loadTexture(rootUrl,parsedMaterial.specularTexture,scene);}if(parsedMaterial.bumpTexture){material.bumpTexture=loadTexture(rootUrl,parsedMaterial.bumpTexture,scene);}return material;};var parseMaterialById=function(id,parsedData,scene,rootUrl){for(var index=0;index<parsedData.materials.length;index++){var parsedMaterial=parsedData.materials[index];if(parsedMaterial.id===id){return parseMaterial(parsedMaterial,scene,rootUrl);}}return null;};var parseMultiMaterial=function(parsedMultiMaterial,scene){var multiMaterial=new BABYLON.MultiMaterial(parsedMultiMaterial.name,scene);multiMaterial.id=parsedMultiMaterial.id;for(var matIndex=0;matIndex<parsedMultiMaterial.materials.length;matIndex++){var subMatId=parsedMultiMaterial.materials[matIndex];if(subMatId){multiMaterial.subMaterials.push(scene.getMaterialByID(subMatId));}else{multiMaterial.subMaterials.push(null);}}return multiMaterial;};var parseParticleSystem=function(parsedParticleSystem,scene,rootUrl){var emitter=scene.getLastMeshByID(parsedParticleSystem.emitterId);var particleSystem=new BABYLON.ParticleSystem("particles#"+emitter.name,parsedParticleSystem.capacity,scene);if(parsedParticleSystem.textureName){particleSystem.particleTexture=new BABYLON.Texture(rootUrl+parsedParticleSystem.textureName,scene);}particleSystem.minAngularSpeed=parsedParticleSystem.minAngularSpeed;particleSystem.maxAngularSpeed=parsedParticleSystem.maxAngularSpeed;particleSystem.minSize=parsedParticleSystem.minSize;particleSystem.maxSize=parsedParticleSystem.maxSize;particleSystem.minLifeTime=parsedParticleSystem.minLifeTime;particleSystem.maxLifeTime=parsedParticleSystem.maxLifeTime;particleSystem.emitter=emitter;particleSystem.emitRate=parsedParticleSystem.emitRate;particleSystem.minEmitBox=BABYLON.Vector3.FromArray(parsedParticleSystem.minEmitBox);particleSystem.maxEmitBox=BABYLON.Vector3.FromArray(parsedParticleSystem.maxEmitBox);particleSystem.gravity=BABYLON.Vector3.FromArray(parsedParticleSystem.gravity);particleSystem.direction1=BABYLON.Vector3.FromArray(parsedParticleSystem.direction1);particleSystem.direction2=BABYLON.Vector3.FromArray(parsedParticleSystem.direction2);particleSystem.color1=BABYLON.Color4.FromArray(parsedParticleSystem.color1);particleSystem.color2=BABYLON.Color4.FromArray(parsedParticleSystem.color2);particleSystem.colorDead=BABYLON.Color4.FromArray(parsedParticleSystem.colorDead);particleSystem.updateSpeed=parsedParticleSystem.updateSpeed;particleSystem.targetStopDuration=parsedParticleSystem.targetStopFrame;particleSystem.textureMask=BABYLON.Color4.FromArray(parsedParticleSystem.textureMask);particleSystem.blendMode=parsedParticleSystem.blendMode;particleSystem.start();return particleSystem;};var parseShadowGenerator=function(parsedShadowGenerator,scene){var light=scene.getLightByID(parsedShadowGenerator.lightId);var shadowGenerator=new BABYLON.ShadowGenerator(parsedShadowGenerator.mapSize,light);for(var meshIndex=0;meshIndex<parsedShadowGenerator.renderList.length;meshIndex++){var mesh=scene.getMeshByID(parsedShadowGenerator.renderList[meshIndex]);shadowGenerator.getShadowMap().renderList.push(mesh);}shadowGenerator.useVarianceShadowMap=parsedShadowGenerator.useVarianceShadowMap;return shadowGenerator;};var parseAnimation=function(parsedAnimation){var animation=new BABYLON.Animation(parsedAnimation.name,parsedAnimation.property,parsedAnimation.framePerSecond,parsedAnimation.dataType,parsedAnimation.loopBehavior);var dataType=parsedAnimation.dataType;var keys=[];for(var index=0;index<parsedAnimation.keys.length;index++){var key=parsedAnimation.keys[index];var data;switch(dataType){case BABYLON.Animation.ANIMATIONTYPE_FLOAT:data=key.values[0];break;case BABYLON.Animation.ANIMATIONTYPE_QUATERNION:data=BABYLON.Quaternion.FromArray(key.values);break;case BABYLON.Animation.ANIMATIONTYPE_MATRIX:data=BABYLON.Matrix.FromArray(key.values);break;case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:default:data=BABYLON.Vector3.FromArray(key.values);break;}keys.push({frame:key.frame,value:data});}animation.setKeys(keys);return animation;};var parseLight=function(parsedLight,scene){var light;switch(parsedLight.type){case 0:light=new BABYLON.PointLight(parsedLight.name,BABYLON.Vector3.FromArray(parsedLight.position),scene);break;case 1:light=new BABYLON.DirectionalLight(parsedLight.name,BABYLON.Vector3.FromArray(parsedLight.direction),scene);light.position=BABYLON.Vector3.FromArray(parsedLight.position);break;case 2:light=new BABYLON.SpotLight(parsedLight.name,BABYLON.Vector3.FromArray(parsedLight.position),BABYLON.Vector3.FromArray(parsedLight.direction),parsedLight.angle,parsedLight.exponent,scene);break;case 3:light=new BABYLON.HemisphericLight(parsedLight.name,BABYLON.Vector3.FromArray(parsedLight.direction),scene);light.groundColor=BABYLON.Color3.FromArray(parsedLight.groundColor);break;}light.id=parsedLight.id;if(parsedLight.intensity){light.intensity=parsedLight.intensity;}light.diffuse=BABYLON.Color3.FromArray(parsedLight.diffuse);light.specular=BABYLON.Color3.FromArray(parsedLight.specular);};var parseMesh=function(parsedMesh,scene,rootUrl){var mesh=new BABYLON.Mesh(parsedMesh.name,scene);mesh.id=parsedMesh.id;mesh.position=BABYLON.Vector3.FromArray(parsedMesh.position);if(parsedMesh.rotation){mesh.rotation=BABYLON.Vector3.FromArray(parsedMesh.rotation);}else if(parsedMesh.rotationQuaternion){mesh.rotationQuaternion=BABYLON.Quaternion.FromArray(parsedMesh.rotationQuaternion);}mesh.scaling=BABYLON.Vector3.FromArray(parsedMesh.scaling);if(parsedMesh.localMatrix){mesh.setPivotMatrix(BABYLON.Matrix.FromArray(parsedMesh.localMatrix));}mesh.setEnabled(parsedMesh.isEnabled);mesh.isVisible=parsedMesh.isVisible;mesh.receiveShadows=parsedMesh.receiveShadows;mesh.billboardMode=parsedMesh.billboardMode;if(parsedMesh.visibility!==undefined){mesh.visibility=parsedMesh.visibility;}mesh.checkCollisions=parsedMesh.checkCollisions;if(parsedMesh.delayLoadingFile){mesh.delayLoadState=BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;mesh.delayLoadingFile=rootUrl+parsedMesh.delayLoadingFile;mesh._boundingInfo=new BABYLON.BoundingInfo(BABYLON.Vector3.FromArray(parsedMesh.boundingBoxMinimum),BABYLON.Vector3.FromArray(parsedMesh.boundingBoxMaximum));mesh._delayInfo=[];if(parsedMesh.hasUVs){mesh._delayInfo.push(BABYLON.VertexBuffer.UVKind);}if(parsedMesh.hasUVs2){mesh._delayInfo.push(BABYLON.VertexBuffer.UV2Kind);}if(parsedMesh.hasColors){mesh._delayInfo.push(BABYLON.VertexBuffer.ColorKind);}if(parsedMesh.hasMatricesIndices){mesh._delayInfo.push(BABYLON.VertexBuffer.MatricesIndicesKind);}if(parsedMesh.hasMatricesWeights){mesh._delayInfo.push(BABYLON.VertexBuffer.MatricesWeightsKind);}}else{BABYLON.SceneLoader._ImportGeometry(parsedMesh,mesh);}if(parsedMesh.parentId){mesh.parent=scene.getLastMeshByID(parsedMesh.parentId);}if(parsedMesh.materialId){mesh.setMaterialByID(parsedMesh.materialId);}else{mesh.material=null;}if(parsedMesh.skeletonId>-1){mesh.skeleton=scene.getLastSkeletonByID(parsedMesh.skeletonId);}if(parsedMesh.animations){for(var animationIndex=0;animationIndex<parsedMesh.animations.length;animationIndex++){var parsedAnimation=parsedMesh.animations[animationIndex];mesh.animations.push(parseAnimation(parsedAnimation));}}if(parsedMesh.autoAnimate){scene.beginAnimation(mesh,parsedMesh.autoAnimateFrom,parsedMesh.autoAnimateTo,parsedMesh.autoAnimateLoop,1.0);}return mesh;};var isDescendantOf=function(mesh,name,hierarchyIds){if(mesh.name===name){hierarchyIds.push(mesh.id);return true;}if(mesh.parentId&&hierarchyIds.indexOf(mesh.parentId)!==-1){hierarchyIds.push(mesh.id);return true;}return false;};BABYLON.SceneLoader={_ImportGeometry:function(parsedGeometry,mesh){if(parsedGeometry.positions&&parsedGeometry.normals&&parsedGeometry.indices){mesh.setVerticesData(parsedGeometry.positions,BABYLON.VertexBuffer.PositionKind,false);mesh.setVerticesData(parsedGeometry.normals,BABYLON.VertexBuffer.NormalKind,false);if(parsedGeometry.uvs){mesh.setVerticesData(parsedGeometry.uvs,BABYLON.VertexBuffer.UVKind,false);}if(parsedGeometry.uvs2){mesh.setVerticesData(parsedGeometry.uvs2,BABYLON.VertexBuffer.UV2Kind,false);}if(parsedGeometry.colors){mesh.setVerticesData(parsedGeometry.colors,BABYLON.VertexBuffer.ColorKind,false);}if(parsedGeometry.matricesIndices){var floatIndices=[];for(var i=0;i<parsedGeometry.matricesIndices.length;i++){var matricesIndex=parsedGeometry.matricesIndices[i];floatIndices.push(matricesIndex&0x000000FF);floatIndices.push((matricesIndex&0x0000FF00)>>8);floatIndices.push((matricesIndex&0x00FF0000)>>16);floatIndices.push(matricesIndex>>24);}mesh.setVerticesData(floatIndices,BABYLON.VertexBuffer.MatricesIndicesKind,false);}if(parsedGeometry.matricesWeights){mesh.setVerticesData(parsedGeometry.matricesWeights,BABYLON.VertexBuffer.MatricesWeightsKind,false);}mesh.setIndices(parsedGeometry.indices);}if(parsedGeometry.subMeshes){mesh.subMeshes=[];for(var subIndex=0;subIndex<parsedGeometry.subMeshes.length;subIndex++){var parsedSubMesh=parsedGeometry.subMeshes[subIndex];var subMesh=new BABYLON.SubMesh(parsedSubMesh.materialIndex,parsedSubMesh.verticesStart,parsedSubMesh.verticesCount,parsedSubMesh.indexStart,parsedSubMesh.indexCount,mesh);}}mesh.computeWorldMatrix(true);var scene=mesh.getScene();if(scene._selectionOctree){scene._selectionOctree.addMesh(mesh);}},ImportMesh:function(meshName,rootUrl,sceneFilename,scene,then,progressCallBack){var database=new BABYLON.Database(rootUrl+sceneFilename);scene.database=database;BABYLON.Tools.LoadFile(rootUrl+sceneFilename,function(data){var parsedData=JSON.parse(data);var meshes=[];var particleSystems=[];var skeletons=[];var loadedSkeletonsIds=[];var loadedMaterialsIds=[];var hierarchyIds=[];for(var index=0;index<parsedData.meshes.length;index++){var parsedMesh=parsedData.meshes[index];if(!meshName||isDescendantOf(parsedMesh,meshName,hierarchyIds)){if(parsedMesh.materialId){var materialFound=(loadedMaterialsIds.indexOf(parsedMesh.materialId)!==-1);if(!materialFound){for(var multimatIndex=0;multimatIndex<parsedData.multiMaterials.length;multimatIndex++){var parsedMultiMaterial=parsedData.multiMaterials[multimatIndex];if(parsedMultiMaterial.id==parsedMesh.materialId){for(var matIndex=0;matIndex<parsedMultiMaterial.materials.length;matIndex++){var subMatId=parsedMultiMaterial.materials[matIndex];loadedMaterialsIds.push(subMatId);parseMaterialById(subMatId,parsedData,scene,rootUrl);}loadedMaterialsIds.push(parsedMultiMaterial.id);parseMultiMaterial(parsedMultiMaterial,scene);materialFound=true;break;}}}if(!materialFound){loadedMaterialsIds.push(parsedMesh.materialId);parseMaterialById(parsedMesh.materialId,parsedData,scene,rootUrl);}}if(parsedMesh.skeletonId>-1&&scene.skeletons){var skeletonAlreadyLoaded=(loadedSkeletonsIds.indexOf(parsedMesh.skeletonId)>-1);if(!skeletonAlreadyLoaded){for(var skeletonIndex=0;skeletonIndex<parsedData.skeletons.length;skeletonIndex++){var parsedSkeleton=parsedData.skeletons[skeletonIndex];if(parsedSkeleton.id===parsedMesh.skeletonId){skeletons.push(parseSkeleton(parsedSkeleton,scene));loadedSkeletonsIds.push(parsedSkeleton.id);}}}}var mesh=parseMesh(parsedMesh,scene,rootUrl);meshes.push(mesh);}}if(parsedData.particleSystems){for(var index=0;index<parsedData.particleSystems.length;index++){var parsedParticleSystem=parsedData.particleSystems[index];if(hierarchyIds.indexOf(parsedParticleSystem.emitterId)!==-1){particleSystems.push(parseParticleSystem(parsedParticleSystem,scene,rootUrl));}}}if(then){then(meshes,particleSystems,skeletons);}},progressCallBack,database);},Load:function(rootUrl,sceneFilename,engine,then,progressCallBack){var database=new BABYLON.Database(rootUrl+sceneFilename);BABYLON.Tools.LoadFile(rootUrl+sceneFilename,function(data){var parsedData=JSON.parse(data);var scene=new BABYLON.Scene(engine);scene.database=database;scene.useDelayedTextureLoading=parsedData.useDelayedTextureLoading;scene.autoClear=parsedData.autoClear;scene.clearColor=BABYLON.Color3.FromArray(parsedData.clearColor);scene.ambientColor=BABYLON.Color3.FromArray(parsedData.ambientColor);scene.gravity=BABYLON.Vector3.FromArray(parsedData.gravity);if(parsedData.fogMode&&parsedData.fogMode!==0){scene.fogMode=parsedData.fogMode;scene.fogColor=BABYLON.Color3.FromArray(parsedData.fogColor);scene.fogStart=parsedData.fogStart;scene.fogEnd=parsedData.fogEnd;scene.fogDensity=parsedData.fogDensity;}for(var index=0;index<parsedData.lights.length;index++){var parsedLight=parsedData.lights[index];parseLight(parsedLight,scene);}for(var index=0;index<parsedData.cameras.length;index++){var parsedCamera=parsedData.cameras[index];var camera=new BABYLON.FreeCamera(parsedCamera.name,BABYLON.Vector3.FromArray(parsedCamera.position),scene);camera.id=parsedCamera.id;if(parsedCamera.target){camera.setTarget(BABYLON.Vector3.FromArray(parsedCamera.target));}else{camera.rotation=BABYLON.Vector3.FromArray(parsedCamera.rotation);}camera.fov=parsedCamera.fov;camera.minZ=parsedCamera.minZ;camera.maxZ=parsedCamera.maxZ;camera.speed=parsedCamera.speed;camera.inertia=parsedCamera.inertia;camera.checkCollisions=parsedCamera.checkCollisions;camera.applyGravity=parsedCamera.applyGravity;if(parsedCamera.ellipsoid){camera.ellipsoid=BABYLON.Vector3.FromArray(parsedCamera.ellipsoid);}}if(parsedData.activeCameraID){scene.activeCameraByID(parsedData.activeCameraID);}if(parsedData.materials){for(var index=0;index<parsedData.materials.length;index++){var parsedMaterial=parsedData.materials[index];parseMaterial(parsedMaterial,scene,rootUrl);}}if(parsedData.multiMaterials){for(var index=0;index<parsedData.multiMaterials.length;index++){var parsedMultiMaterial=parsedData.multiMaterials[index];parseMultiMaterial(parsedMultiMaterial,scene);}}if(parsedData.skeletons){for(var index=0;index<parsedData.skeletons.length;index++){var parsedSkeleton=parsedData.skeletons[index];parseSkeleton(parsedSkeleton,scene);}}for(var index=0;index<parsedData.meshes.length;index++){var parsedMesh=parsedData.meshes[index];parseMesh(parsedMesh,scene,rootUrl);}if(parsedData.particleSystems){for(var index=0;index<parsedData.particleSystems.length;index++){var parsedParticleSystem=parsedData.particleSystems[index];parseParticleSystem(parsedParticleSystem,scene,rootUrl);}}if(parsedData.shadowGenerators){for(var index=0;index<parsedData.shadowGenerators.length;index++){var parsedShadowGenerator=parsedData.shadowGenerators[index];parseShadowGenerator(parsedShadowGenerator,scene);}}if(then){then(scene);}},progressCallBack,database);}};})();var BABYLON=BABYLON||{};(function(){BABYLON.SpriteManager=function(name,imgUrl,capacity,cellSize,scene,epsilon){this.name=name;this._capacity=capacity;this.cellSize=cellSize;this._spriteTexture=new BABYLON.Texture(imgUrl,scene,true,false);this._spriteTexture.wrapU=BABYLON.Texture.CLAMP_ADDRESSMODE;this._spriteTexture.wrapV=BABYLON.Texture.CLAMP_ADDRESSMODE;this._epsilon=epsilon===undefined?0.01:epsilon;this._scene=scene;this._scene.spriteManagers.push(this);this._vertexDeclaration=[3,4,4,4];this._vertexStrideSize=15*4;this._vertexBuffer=scene.getEngine().createDynamicVertexBuffer(capacity*this._vertexStrideSize*4);var indices=[];var index=0;for(var count=0;count<capacity;count++){indices.push(index);indices.push(index+1);indices.push(index+2);indices.push(index);indices.push(index+2);indices.push(index+3);index+=4;}this._indexBuffer=scene.getEngine().createIndexBuffer(indices);this._vertices=new Float32Array(capacity*this._vertexStrideSize);this.sprites=[];this._effectBase=this._scene.getEngine().createEffect("sprites",["position","options","cellInfo","color"],["view","projection","textureInfos","alphaTest"],["diffuseSampler"],"");this._effectFog=this._scene.getEngine().createEffect("sprites",["position","options","cellInfo","color"],["view","projection","textureInfos","alphaTest","vFogInfos","vFogColor"],["diffuseSampler"],"#define FOG");};BABYLON.SpriteManager.prototype.renderingGroupId=0;BABYLON.SpriteManager.prototype.onDispose=null;BABYLON.SpriteManager.prototype._appendSpriteVertex=function(index,sprite,offsetX,offsetY,rowSize){var arrayOffset=index*15;if(offsetX==0)offsetX=this._epsilon;else if(offsetX==1)offsetX=1-this._epsilon;if(offsetY==0)offsetY=this._epsilon;else if(offsetY==1)offsetY=1-this._epsilon;this._vertices[arrayOffset]=sprite.position.x;this._vertices[arrayOffset+1]=sprite.position.y;this._vertices[arrayOffset+2]=sprite.position.z;this._vertices[arrayOffset+3]=sprite.angle;this._vertices[arrayOffset+4]=sprite.size;this._vertices[arrayOffset+5]=offsetX;this._vertices[arrayOffset+6]=offsetY;this._vertices[arrayOffset+7]=sprite.invertU?1:0;this._vertices[arrayOffset+8]=sprite.invertV?1:0;var offset=(sprite.cellIndex/rowSize)>>0;this._vertices[arrayOffset+9]=sprite.cellIndex-offset*rowSize;this._vertices[arrayOffset+10]=offset;this._vertices[arrayOffset+11]=sprite.color.r;this._vertices[arrayOffset+12]=sprite.color.g;this._vertices[arrayOffset+13]=sprite.color.b;this._vertices[arrayOffset+14]=sprite.color.a;};BABYLON.SpriteManager.prototype.render=function(){if(!this._effectBase.isReady()||!this._effectFog.isReady()||!this._spriteTexture||!this._spriteTexture.isReady())return 0;var engine=this._scene.getEngine();var baseSize=this._spriteTexture.getBaseSize();var deltaTime=BABYLON.Tools.GetDeltaTime();var max=Math.min(this._capacity,this.sprites.length);var rowSize=baseSize.width/this.cellSize;var offset=0;for(var index=0;index<max;index++){var sprite=this.sprites[index];if(!sprite){continue;}sprite._animate(deltaTime);this._appendSpriteVertex(offset++,sprite,0,0,rowSize);this._appendSpriteVertex(offset++,sprite,1,0,rowSize);this._appendSpriteVertex(offset++,sprite,1,1,rowSize);this._appendSpriteVertex(offset++,sprite,0,1,rowSize);}engine.updateDynamicVertexBuffer(this._vertexBuffer,this._vertices,max*this._vertexStrideSize);var effect=this._effectBase;if(this._scene.fogMode!==BABYLON.Scene.FOGMODE_NONE){effect=this._effectFog;}engine.enableEffect(effect);var viewMatrix=this._scene.getViewMatrix();effect.setTexture("diffuseSampler",this._spriteTexture);effect.setMatrix("view",viewMatrix);effect.setMatrix("projection",this._scene.getProjectionMatrix());effect.setFloat2("textureInfos",this.cellSize/baseSize.width,this.cellSize/baseSize.height);if(this._scene.fogMode!==BABYLON.Scene.FOGMODE_NONE){effect.setFloat4("vFogInfos",this._scene.fogMode,this._scene.fogStart,this._scene.fogEnd,this._scene.fogDensity);effect.setColor3("vFogColor",this._scene.fogColor);}engine.bindBuffers(this._vertexBuffer,this._indexBuffer,this._vertexDeclaration,this._vertexStrideSize,effect);effect.setBool("alphaTest",true);engine.setColorWrite(false);engine.draw(true,0,max*6);engine.setColorWrite(true);effect.setBool("alphaTest",false);engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);engine.draw(true,0,max*6);engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);};BABYLON.SpriteManager.prototype.dispose=function(){if(this._vertexBuffer){this._scene.getEngine()._releaseBuffer(this._vertexBuffer);this._vertexBuffer=null;}if(this._indexBuffer){this._scene.getEngine()._releaseBuffer(this._indexBuffer);this._indexBuffer=null;}if(this._spriteTexture){this._spriteTexture.dispose();this._spriteTexture=null;}var index=this._scene.spriteManagers.indexOf(this);this._scene.spriteManagers.splice(index,1);if(this.onDispose){this.onDispose();}};})();var BABYLON=BABYLON||{};(function(){BABYLON.Sprite=function(name,manager){this.name=name;this._manager=manager;this._manager.sprites.push(this);this.position=BABYLON.Vector3.Zero();this.color=new BABYLON.Color4(1.0,1.0,1.0,1.0);this._frameCount=0;};BABYLON.Sprite.prototype.position=null;BABYLON.Sprite.prototype.size=1.0;BABYLON.Sprite.prototype.angle=0;BABYLON.Sprite.prototype.cellIndex=0;BABYLON.Sprite.prototype.invertU=0;BABYLON.Sprite.prototype.invertV=0;BABYLON.Sprite.prototype.disposeWhenFinishedAnimating=false;BABYLON.Sprite.prototype._animationStarted=false;BABYLON.Sprite.prototype._loopAnimation=false;BABYLON.Sprite.prototype._fromIndex=false;BABYLON.Sprite.prototype._toIndex=false;BABYLON.Sprite.prototype._delay=false;BABYLON.Sprite.prototype._direction=1;BABYLON.Sprite.prototype.playAnimation=function(from,to,loop,delay){this._fromIndex=from;this._toIndex=to;this._loopAnimation=loop;this._delay=delay;this._animationStarted=true;this._direction=from<to?1:-1;this.cellIndex=from;this._time=0;};BABYLON.Sprite.prototype.stopAnimation=function(){this._animationStarted=false;};BABYLON.Sprite.prototype._animate=function(deltaTime){if(!this._animationStarted)return;this._time+=deltaTime;if(this._time>this._delay){this._time=this._time%this._delay;this.cellIndex+=this._direction;if(this.cellIndex==this._toIndex){if(this._loopAnimation){this.cellIndex=this._fromIndex;}else{this._animationStarted=false;if(this.disposeWhenFinishedAnimating){this.dispose();}}}}};BABYLON.Sprite.prototype.dispose=function(){for(var i=0;i<this._manager.sprites.length;i++){if(this._manager.sprites[i]==this){this._manager.sprites.splice(i,1);}}};})();var BABYLON=BABYLON||{};(function(){BABYLON.Layer=function(name,imgUrl,scene,isBackground,color){this.name=name;this.texture=imgUrl?new BABYLON.Texture(imgUrl,scene,true):null;this.isBackground=isBackground===undefined?true:isBackground;this.color=color===undefined?new BABYLON.Color4(1,1,1,1):color;this._scene=scene;this._scene.layers.push(this);var vertices=[];vertices.push(1,1);vertices.push(-1,1);vertices.push(-1,-1);vertices.push(1,-1);this._vertexDeclaration=[2];this._vertexStrideSize=2*4;this._vertexBuffer=scene.getEngine().createVertexBuffer(vertices);var indices=[];indices.push(0);indices.push(1);indices.push(2);indices.push(0);indices.push(2);indices.push(3);this._indexBuffer=scene.getEngine().createIndexBuffer(indices);this._effect=this._scene.getEngine().createEffect("layer",["position"],["textureMatrix","color"],["textureSampler"],"");};BABYLON.Layer.prototype.onDispose=null;BABYLON.Layer.prototype.render=function(){if(!this._effect.isReady()||!this.texture||!this.texture.isReady())return;var engine=this._scene.getEngine();engine.enableEffect(this._effect);engine.setState(false);this._effect.setTexture("textureSampler",this.texture);this._effect.setMatrix("textureMatrix",this.texture._computeTextureMatrix());this._effect.setFloat4("color",this.color.r,this.color.g,this.color.b,this.color.a);engine.bindBuffers(this._vertexBuffer,this._indexBuffer,this._vertexDeclaration,this._vertexStrideSize,this._effect);engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);engine.draw(true,0,6);engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);};BABYLON.Layer.prototype.dispose=function(){if(this._vertexBuffer){this._vertexBuffer=null;}if(this._indexBuffer){this._scene.getEngine()._releaseBuffer(this._indexBuffer);this._indexBuffer=null;}if(this.texture){this.texture.dispose();this.texture=null;}var index=this._scene.layers.indexOf(this);this._scene.layers.splice(index,1);if(this.onDispose){this.onDispose();}};})();var BABYLON=BABYLON||{};(function(){BABYLON.Particle=function(){this.position=BABYLON.Vector3.Zero();this.direction=BABYLON.Vector3.Zero();this.color=new BABYLON.Color4(0,0,0,0);this.colorStep=new BABYLON.Color4(0,0,0,0);};BABYLON.Particle.prototype.lifeTime=1.0;BABYLON.Particle.prototype.age=0;BABYLON.Particle.prototype.size=0;BABYLON.Particle.prototype.angle=0;BABYLON.Particle.prototype.angularSpeed=0;})();var BABYLON=BABYLON||{};(function(){var randomNumber=function(min,max){if(min==max){return(min);}var random=Math.random();return((random*(max-min))+min);};BABYLON.ParticleSystem=function(name,capacity,scene){this.name=name;this.id=name;this._capacity=capacity;this._scene=scene;scene.particleSystems.push(this);this.gravity=BABYLON.Vector3.Zero();this.direction1=new BABYLON.Vector3(0,1.0,0);this.direction2=new BABYLON.Vector3(0,1.0,0);this.minEmitBox=new BABYLON.Vector3(-0.5,-0.5,-0.5);this.maxEmitBox=new BABYLON.Vector3(0.5,0.5,0.5);this.color1=new BABYLON.Color4(1.0,1.0,1.0,1.0);this.color2=new BABYLON.Color4(1.0,1.0,1.0,1.0);this.colorDead=new BABYLON.Color4(0,0,0,1.0);this.textureMask=new BABYLON.Color4(1.0,1.0,1.0,1.0);this.particles=[];this._stockParticles=[];this._newPartsExcess=0;this._vertexDeclaration=[3,4,4];this._vertexStrideSize=11*4;this._vertexBuffer=scene.getEngine().createDynamicVertexBuffer(capacity*this._vertexStrideSize*4);var indices=[];var index=0;for(var count=0;count<capacity;count++){indices.push(index);indices.push(index+1);indices.push(index+2);indices.push(index);indices.push(index+2);indices.push(index+3);index+=4;}this._indexBuffer=scene.getEngine().createIndexBuffer(indices);this._vertices=new Float32Array(capacity*this._vertexStrideSize);this._scaledColorStep=new BABYLON.Color4(0,0,0,0);this._colorDiff=new BABYLON.Color4(0,0,0,0);this._scaledDirection=BABYLON.Vector3.Zero();this._scaledGravity=BABYLON.Vector3.Zero();};BABYLON.ParticleSystem.prototype.renderingGroupId=0;BABYLON.ParticleSystem.prototype.emitter=null;BABYLON.ParticleSystem.prototype.emitRate=10;BABYLON.ParticleSystem.prototype.manualEmitCount=-1;BABYLON.ParticleSystem.prototype.updateSpeed=0.01;BABYLON.ParticleSystem.prototype.targetStopDuration=0;BABYLON.ParticleSystem.prototype.disposeOnStop=false;BABYLON.ParticleSystem.prototype.minEmitPower=1;BABYLON.ParticleSystem.prototype.maxEmitPower=1;BABYLON.ParticleSystem.prototype.minLifeTime=1;BABYLON.ParticleSystem.prototype.maxLifeTime=1;BABYLON.ParticleSystem.prototype.minSize=1;BABYLON.ParticleSystem.prototype.maxSize=1;BABYLON.ParticleSystem.prototype.minAngularSpeed=0;BABYLON.ParticleSystem.prototype.maxAngularSpeed=0;BABYLON.ParticleSystem.prototype.particleTexture=null;BABYLON.ParticleSystem.prototype.onDispose=null;BABYLON.ParticleSystem.prototype.blendMode=BABYLON.ParticleSystem.BLENDMODE_ONEONE;BABYLON.ParticleSystem.prototype.isAlive=function(){return this._alive;};BABYLON.ParticleSystem.prototype.start=function(){this._started=true;this._stopped=false;this._actualFrame=0;};BABYLON.ParticleSystem.prototype.stop=function(){this._stopped=true;};BABYLON.ParticleSystem.prototype._appendParticleVertex=function(index,particle,offsetX,offsetY){var offset=index*11;this._vertices[offset]=particle.position.x;this._vertices[offset+1]=particle.position.y;this._vertices[offset+2]=particle.position.z;this._vertices[offset+3]=particle.color.r;this._vertices[offset+4]=particle.color.g;this._vertices[offset+5]=particle.color.b;this._vertices[offset+6]=particle.color.a;this._vertices[offset+7]=particle.angle;this._vertices[offset+8]=particle.size;this._vertices[offset+9]=offsetX;this._vertices[offset+10]=offsetY;};BABYLON.ParticleSystem.prototype._update=function(newParticles){this._alive=this.particles.length>0;for(var index=0;index<this.particles.length;index++){var particle=this.particles[index];particle.age+=this._scaledUpdateSpeed;if(particle.age>=particle.lifeTime){this._stockParticles.push(this.particles.splice(index,1)[0]);index--;continue;}else{particle.colorStep.scaleToRef(this._scaledUpdateSpeed,this._scaledColorStep);particle.color.addInPlace(this._scaledColorStep);if(particle.color.a<0)particle.color.a=0;particle.direction.scaleToRef(this._scaledUpdateSpeed,this._scaledDirection);particle.position.addInPlace(this._scaledDirection);particle.angle+=particle.angularSpeed*this._scaledUpdateSpeed;this.gravity.scaleToRef(this._scaledUpdateSpeed,this._scaledGravity);particle.direction.addInPlace(this._scaledGravity);}}var worldMatrix;if(this.emitter.position){worldMatrix=this.emitter.getWorldMatrix();}else{worldMatrix=BABYLON.Matrix.Translation(this.emitter.x,this.emitter.y,this.emitter.z);}for(var index=0;index<newParticles;index++){if(this.particles.length==this._capacity){break;}if(this._stockParticles.length!==0){particle=this._stockParticles.pop();particle.age=0;}else{particle=new BABYLON.Particle();}this.particles.push(particle);var emitPower=randomNumber(this.minEmitPower,this.maxEmitPower);var randX=randomNumber(this.direction1.x,this.direction2.x);var randY=randomNumber(this.direction1.y,this.direction2.y);var randZ=randomNumber(this.direction1.z,this.direction2.z);BABYLON.Vector3.TransformNormalFromFloatsToRef(randX*emitPower,randY*emitPower,randZ*emitPower,worldMatrix,particle.direction);particle.lifeTime=randomNumber(this.minLifeTime,this.maxLifeTime);particle.size=randomNumber(this.minSize,this.maxSize);particle.angularSpeed=randomNumber(this.minAngularSpeed,this.maxAngularSpeed);randX=randomNumber(this.minEmitBox.x,this.maxEmitBox.x);randY=randomNumber(this.minEmitBox.y,this.maxEmitBox.y);randZ=randomNumber(this.minEmitBox.z,this.maxEmitBox.z);BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(randX,randY,randZ,worldMatrix,particle.position);var step=randomNumber(0,1.0);BABYLON.Color4.LerpToRef(this.color1,this.color2,step,particle.color);this.colorDead.subtractToRef(particle.color,this._colorDiff);this._colorDiff.scaleToRef(1.0/particle.lifeTime,particle.colorStep);}};BABYLON.ParticleSystem.prototype._getEffect=function(){var defines=[];if(BABYLON.clipPlane){defines.push("#define CLIPPLANE");}var join=defines.join("\n");if(this._cachedDefines!=join){this._cachedDefines=join;this._effect=this._scene.getEngine().createEffect("particles",["position","color","options"],["invView","view","projection","vClipPlane","textureMask"],["diffuseSampler"],join);}return this._effect;};BABYLON.ParticleSystem.prototype.animate=function(){if(!this._started)return;var effect=this._getEffect();if(!this.emitter||!effect.isReady()||!this.particleTexture||!this.particleTexture.isReady())return;this._scaledUpdateSpeed=this.updateSpeed*this._scene.getAnimationRatio();var emitCout;if(this.manualEmitCount>-1){emitCout=this.manualEmitCount;this.manualEmitCount=0;}else{emitCout=this.emitRate;}var newParticles=((emitCout*this._scaledUpdateSpeed)>>0);this._newPartsExcess+=emitCout*this._scaledUpdateSpeed-newParticles;if(this._newPartsExcess>1.0){newParticles+=this._newPartsExcess>>0;this._newPartsExcess-=this._newPartsExcess>>0;}this._alive=false;if(!this._stopped){this._actualFrame+=this._scaledUpdateSpeed;if(this.targetStopDuration&&this._actualFrame>=this.targetStopDuration)this.stop();}else{newParticles=0;}this._update(newParticles);if(this._stopped){if(!this._alive){this._started=false;if(this.disposeOnStop){this._scene._toBeDisposed.push(this);}}}var offset=0;for(var index=0;index<this.particles.length;index++){var particle=this.particles[index];this._appendParticleVertex(offset++,particle,0,0);this._appendParticleVertex(offset++,particle,1,0);this._appendParticleVertex(offset++,particle,1,1);this._appendParticleVertex(offset++,particle,0,1);}var engine=this._scene.getEngine();engine.updateDynamicVertexBuffer(this._vertexBuffer,this._vertices,this.particles.length*this._vertexStrideSize);};BABYLON.ParticleSystem.prototype.render=function(){var effect=this._getEffect();if(!this.emitter||!effect.isReady()||!this.particleTexture||!this.particleTexture.isReady()||!this.particles.length)return 0;var engine=this._scene.getEngine();engine.enableEffect(effect);var viewMatrix=this._scene.getViewMatrix();effect.setTexture("diffuseSampler",this.particleTexture);effect.setMatrix("view",viewMatrix);effect.setMatrix("projection",this._scene.getProjectionMatrix());effect.setFloat4("textureMask",this.textureMask.r,this.textureMask.g,this.textureMask.b,this.textureMask.a);if(BABYLON.clipPlane){var invView=viewMatrix.clone();invView.invert();effect.setMatrix("invView",invView);effect.setFloat4("vClipPlane",BABYLON.clipPlane.normal.x,BABYLON.clipPlane.normal.y,BABYLON.clipPlane.normal.z,BABYLON.clipPlane.d);}engine.bindBuffers(this._vertexBuffer,this._indexBuffer,this._vertexDeclaration,this._vertexStrideSize,effect);if(this.blendMode===BABYLON.ParticleSystem.BLENDMODE_ONEONE){engine.setAlphaMode(BABYLON.Engine.ALPHA_ADD);}else{engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);}engine.draw(true,0,this.particles.length*6);engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);return this.particles.length;};BABYLON.ParticleSystem.prototype.dispose=function(){if(this._vertexBuffer){this._scene.getEngine()._releaseBuffer(this._vertexBuffer);this._vertexBuffer=null;}if(this._indexBuffer){this._scene.getEngine()._releaseBuffer(this._indexBuffer);this._indexBuffer=null;}if(this.particleTexture){this.particleTexture.dispose();this.particleTexture=null;}var index=this._scene.particleSystems.indexOf(this);this._scene.particleSystems.splice(index,1);if(this.onDispose){this.onDispose();}};BABYLON.ParticleSystem.prototype.clone=function(name,newEmitter){var result=new BABYLON.ParticleSystem(name,this._capacity,this._scene);BABYLON.Tools.DeepCopy(this,result,["particles"],["_vertexDeclaration","_vertexStrideSize"]);if(newEmitter===undefined){newEmitter=this.emitter;}result.emitter=newEmitter;if(this.particleTexture){result.particleTexture=new BABYLON.Texture(this.particleTexture.name,this._scene);}result.start();return result;};BABYLON.ParticleSystem.BLENDMODE_ONEONE=0;BABYLON.ParticleSystem.BLENDMODE_STANDARD=1;})();var BABYLON=BABYLON||{};(function(){BABYLON.Animation=function(name,targetProperty,framePerSecond,dataType,loopMode){this.name=name;this.targetProperty=targetProperty;this.targetPropertyPath=targetProperty.split(".");this.framePerSecond=framePerSecond;this.dataType=dataType;this.loopMode=loopMode===undefined?BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE:loopMode;this._keys=[];this._offsetsCache={};this._highLimitsCache={};};BABYLON.Animation.prototype.clone=function(){var clone=new BABYLON.Animation(this.name,this.targetPropertyPath.join("."),this.framePerSecond,this.dataType,this.loopMode);clone.setKeys(this._keys);return clone;};BABYLON.Animation.prototype.setKeys=function(values){this._keys=values.slice(0);this._offsetsCache={};this._highLimitsCache={};};BABYLON.Animation.prototype._interpolate=function(currentFrame,repeatCount,loopMode,offsetValue,highLimitValue){if(loopMode===BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT&&repeatCount>0){return highLimitValue.clone?highLimitValue.clone():highLimitValue;}for(var key=0;key<this._keys.length;key++){if(this._keys[key+1].frame>=currentFrame){var startValue=this._keys[key].value;var endValue=this._keys[key+1].value;var gradient=(currentFrame-this._keys[key].frame)/(this._keys[key+1].frame-this._keys[key].frame);switch(this.dataType){case BABYLON.Animation.ANIMATIONTYPE_FLOAT:switch(loopMode){case BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE:case BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT:return startValue+(endValue-startValue)*gradient;case BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE:return offsetValue*repeatCount+(startValue+(endValue-startValue)*gradient);}break;case BABYLON.Animation.ANIMATIONTYPE_QUATERNION:var quaternion=null;switch(loopMode){case BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE:case BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT:quaternion=BABYLON.Quaternion.Slerp(startValue,endValue,gradient);break;case BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE:quaternion=BABYLON.Quaternion.Slerp(startValue,endValue,gradient).add(offsetValue.scale(repeatCount));break;}return quaternion;case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:switch(loopMode){case BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE:case BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT:return BABYLON.Vector3.Lerp(startValue,endValue,gradient);case BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE:return BABYLON.Vector3.Lerp(startValue,endValue,gradient).add(offsetValue.scale(repeatCount));}case BABYLON.Animation.ANIMATIONTYPE_MATRIX:switch(loopMode){case BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE:case BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT:case BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE:return startValue;}default:break;}break;}}return this._keys[this._keys.length-1].value;};BABYLON.Animation.prototype.animate=function(target,delay,from,to,loop,speedRatio){if(!this.targetPropertyPath||this.targetPropertyPath.length<1){return false;}var returnValue=true;if(this._keys[0].frame!=0){var newKey={frame:0,value:this._keys[0].value};this._keys.splice(0,0,newKey);}if(from<this._keys[0].frame||from>this._keys[this._keys.length-1].frame){from=this._keys[0].frame;}if(to<this._keys[0].frame||to>this._keys[this._keys.length-1].frame){to=this._keys[this._keys.length-1].frame;}var range=to-from;var ratio=delay*(this.framePerSecond*speedRatio)/1000.0;if(ratio>range&&!loop){returnValue=false;}else{var offsetValue=0;var highLimitValue=0;if(this.loopMode!=BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE){var keyOffset=to.toString()+from.toString();if(!this._offsetsCache[keyOffset]){var fromValue=this._interpolate(from,0,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);var toValue=this._interpolate(to,0,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);switch(this.dataType){case BABYLON.Animation.ANIMATIONTYPE_FLOAT:this._offsetsCache[keyOffset]=toValue-fromValue;break;case BABYLON.Animation.ANIMATIONTYPE_QUATERNION:this._offsetsCache[keyOffset]=toValue.subtract(fromValue);break;case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:this._offsetsCache[keyOffset]=toValue.subtract(fromValue);default:break;}this._highLimitsCache[keyOffset]=toValue;}highLimitValue=this._highLimitsCache[keyOffset];offsetValue=this._offsetsCache[keyOffset];}}var repeatCount=(ratio/range)>>0;var currentFrame=returnValue?from+ratio%range:to;var currentValue=this._interpolate(currentFrame,repeatCount,this.loopMode,offsetValue,highLimitValue);if(this.targetPropertyPath.length>1){var property=target[this.targetPropertyPath[0]];for(var index=1;index<this.targetPropertyPath.length-1;index++){property=property[this.targetPropertyPath[index]];}property[this.targetPropertyPath[this.targetPropertyPath.length-1]]=currentValue;}else{target[this.targetPropertyPath[0]]=currentValue;}if(target.markAsDirty){target.markAsDirty(this.targetProperty);}return returnValue;};BABYLON.Animation.ANIMATIONTYPE_FLOAT=0;BABYLON.Animation.ANIMATIONTYPE_VECTOR3=1;BABYLON.Animation.ANIMATIONTYPE_QUATERNION=2;BABYLON.Animation.ANIMATIONTYPE_MATRIX=3;BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE=0;BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE=1;BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT=2;})();var BABYLON=BABYLON||{};(function(){BABYLON._Animatable=function(target,from,to,loop,speedRatio,onAnimationEnd){this.target=target;this.fromFrame=from;this.toFrame=to;this.loopAnimation=loop;this.speedRatio=speedRatio?speedRatio:1.0;this.onAnimationEnd=onAnimationEnd;};BABYLON._Animatable.prototype.target=null;BABYLON._Animatable.prototype.animationStarted=false;BABYLON._Animatable.prototype.loopAnimation=false;BABYLON._Animatable.prototype.fromFrame=0;BABYLON._Animatable.prototype.toFrame=100;BABYLON._Animatable.prototype.speedRatio=1.0;BABYLON._Animatable.prototype._animate=function(delay){if(!this._localDelayOffset){this._localDelayOffset=delay;}var running=false;var animations=this.target.animations;for(var index=0;index<animations.length;index++){var isRunning=animations[index].animate(this.target,delay-this._localDelayOffset,this.fromFrame,this.toFrame,this.loopAnimation,this.speedRatio);running=running||isRunning;}if(!running&&this.onAnimationEnd){this.onAnimationEnd();}return running;};})();var BABYLON=BABYLON||{};(function(){BABYLON.Octree=function(maxBlockCapacity){this.blocks=[];this._maxBlockCapacity=maxBlockCapacity||64;this._selection=new BABYLON.Tools.SmartArray(256);};BABYLON.Octree.prototype.update=function(worldMin,worldMax,meshes){BABYLON.Octree._CreateBlocks(worldMin,worldMax,meshes,this._maxBlockCapacity,this);};BABYLON.Octree.prototype.addMesh=function(mesh){for(var index=0;index<this.blocks.length;index++){var block=this.blocks[index];block.addMesh(mesh);}};BABYLON.Octree.prototype.select=function(frustumPlanes){this._selection.reset();for(var index=0;index<this.blocks.length;index++){var block=this.blocks[index];block.select(frustumPlanes,this._selection);}return this._selection;};BABYLON.Octree._CreateBlocks=function(worldMin,worldMax,meshes,maxBlockCapacity,target){target.blocks=[];var blockSize=new BABYLON.Vector3((worldMax.x-worldMin.x)/2,(worldMax.y-worldMin.y)/2,(worldMax.z-worldMin.z)/2);for(var x=0;x<2;x++){for(var y=0;y<2;y++){for(var z=0;z<2;z++){var localMin=worldMin.add(blockSize.multiplyByFloats(x,y,z));var localMax=worldMin.add(blockSize.multiplyByFloats(x+1,y+1,z+1));var block=new BABYLON.OctreeBlock(localMin,localMax,maxBlockCapacity);block.addEntries(meshes);target.blocks.push(block);}}}};})();var BABYLON=BABYLON||{};(function(){BABYLON.OctreeBlock=function(minPoint,maxPoint,capacity){this.subMeshes=[];this.meshes=[];this._capacity=capacity;this._minPoint=minPoint;this._maxPoint=maxPoint;this._boundingVectors=[];this._boundingVectors.push(minPoint.clone());this._boundingVectors.push(maxPoint.clone());this._boundingVectors.push(minPoint.clone());this._boundingVectors[2].x=maxPoint.x;this._boundingVectors.push(minPoint.clone());this._boundingVectors[3].y=maxPoint.y;this._boundingVectors.push(minPoint.clone());this._boundingVectors[4].z=maxPoint.z;this._boundingVectors.push(maxPoint.clone());this._boundingVectors[5].z=minPoint.z;this._boundingVectors.push(maxPoint.clone());this._boundingVectors[6].x=minPoint.x;this._boundingVectors.push(maxPoint.clone());this._boundingVectors[7].y=minPoint.y;};BABYLON.OctreeBlock.prototype.addMesh=function(mesh){if(this.blocks){for(var index=0;index<this.blocks.length;index++){var block=this.blocks[index];block.addMesh(mesh);}return;}if(mesh.getBoundingInfo().boundingBox.intersectsMinMax(this._minPoint,this._maxPoint)){var localMeshIndex=this.meshes.length;this.meshes.push(mesh);this.subMeshes[localMeshIndex]=[];for(var subIndex=0;subIndex<mesh.subMeshes.length;subIndex++){var subMesh=mesh.subMeshes[subIndex];if(mesh.subMeshes.length===1||subMesh.getBoundingInfo().boundingBox.intersectsMinMax(this._minPoint,this._maxPoint)){this.subMeshes[localMeshIndex].push(subMesh);}}}if(this.subMeshes.length>this._capacity){BABYLON.Octree._CreateBlocks(this._minPoint,this._maxPoint,this.meshes,this._capacity,this);}};BABYLON.OctreeBlock.prototype.addEntries=function(meshes){for(var index=0;index<meshes.length;index++){var mesh=meshes[index];this.addMesh(mesh);}};BABYLON.OctreeBlock.prototype.select=function(frustumPlanes,selection){if(this.blocks){for(var index=0;index<this.blocks.length;index++){var block=this.blocks[index];block.select(frustumPlanes,selection);}return;}if(BABYLON.BoundingBox.IsInFrustrum(this._boundingVectors,frustumPlanes)){selection.push(this);}};})();var BABYLON=BABYLON||{};(function(){BABYLON.Bone=function(name,skeleton,parentBone,matrix){this.name=name;this._skeleton=skeleton;this._matrix=matrix;this._baseMatrix=matrix;this._worldTransform=new BABYLON.Matrix();this._absoluteTransform=new BABYLON.Matrix();this._invertedAbsoluteTransform=new BABYLON.Matrix();this.children=[];this.animations=[];skeleton.bones.push(this);if(parentBone){this._parent=parentBone;parentBone.children.push(this);}else{this._parent=null;}this._updateDifferenceMatrix();};BABYLON.Bone.prototype.getParent=function(){return this._parent;};BABYLON.Bone.prototype.getLocalMatrix=function(){return this._matrix;};BABYLON.Bone.prototype.getAbsoluteMatrix=function(){var matrix=this._matrix.clone();var parent=this._parent;while(parent){matrix=matrix.multiply(parent.getLocalMatrix());parent=parent.getParent();}return matrix;};BABYLON.Bone.prototype.updateMatrix=function(matrix){this._matrix=matrix;this._skeleton._markAsDirty();this._updateDifferenceMatrix();};BABYLON.Bone.prototype._updateDifferenceMatrix=function(){if(this._parent){this._matrix.multiplyToRef(this._parent._absoluteTransform,this._absoluteTransform);}else{this._absoluteTransform.copyFrom(this._matrix);}this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform);for(var index=0;index<this.children.length;index++){this.children[index]._updateDifferenceMatrix();}};BABYLON.Bone.prototype.markAsDirty=function(){this._skeleton._markAsDirty();};})();var BABYLON=BABYLON||{};(function(){BABYLON.Skeleton=function(name,id,scene){this.id=id;this.name=name;this.bones=[];this._scene=scene;scene.skeletons.push(this);this._isDirty=true;};BABYLON.Skeleton.prototype.getTransformMatrices=function(){return this._transformMatrices;};BABYLON.Skeleton.prototype._markAsDirty=function(){this._isDirty=true;};BABYLON.Skeleton.prototype.prepare=function(){if(!this._isDirty){return;}if(!this._transformMatrices||this._transformMatrices.length!==16*this.bones.length){this._transformMatrices=new BABYLON.MatrixType(16*this.bones.length);}for(var index=0;index<this.bones.length;index++){var bone=this.bones[index];var parentBone=bone.getParent();if(parentBone){bone._matrix.multiplyToRef(parentBone._worldTransform,bone._worldTransform);}else{bone._worldTransform.copyFrom(bone._matrix);}bone._invertedAbsoluteTransform.multiplyToArray(bone._worldTransform,this._transformMatrices,index*16);}this._isDirty=false;};BABYLON.Skeleton.prototype.getAnimatables=function(){if(!this._animatables||this._animatables.length!=this.bones.length){this._animatables=[];for(var index=0;index<this.bones.length;index++){this._animatables.push(this.bones[index]);}}return this._animatables;};BABYLON.Skeleton.prototype.clone=function(name,id){var result=new BABYLON.Skeleton(name,id||name,this._scene);for(var index=0;index<this.bones.length;index++){var source=this.bones[index];var parentBone=null;if(source.getParent()){var parentIndex=this.bones.indexOf(source.getParent());parentBone=result.bones[parentIndex];}var bone=new BABYLON.Bone(source.name,result,parentBone,source._baseMatrix);BABYLON.Tools.DeepCopy(source.animations,bone.animations);}return result;};})();var BABYLON=BABYLON||{};(function(){BABYLON.PostProcess=function(){};})();var BABYLON=BABYLON||{};(function(){BABYLON.PostProcessManager=function(){this.postProcesses=[];};BABYLON.PostProcessManager.prototype._prepareFrame=function(){if(this.postProcesses.length===0){return;}};BABYLON.PostProcessManager.prototype._finalizeFrame=function(){if(this.postProcesses.length===0){return;}};})();(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=Object(this);var n=t.length>>>0;if(n===0){return-1}var r=0;if(arguments.length>0){r=Number(arguments[1]);if(r!=r){r=0}else if(r!=0&&r!=Infinity&&r!=-Infinity){r=(r>0||-1)*Math.floor(Math.abs(r))}}if(r>=n){return-1}var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++){if(i in t&&t[i]===e){return i}}return-1}}var e=["PointerDown","PointerUp","PointerMove","PointerOver","PointerOut","PointerCancel","PointerEnter","PointerLeave","pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","pointerenter","pointerleave"];var t="touch";var n="pen";var r="mouse";var i={};var s=function(e,i){var s;if(document.createEvent){s=document.createEvent("MouseEvents");s.initMouseEvent(i,true,true,window,1,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null)}else{s=document.createEventObject();s.screenX=e.screenX;s.screenY=e.screenY;s.clientX=e.clientX;s.clientY=e.clientY;s.ctrlKey=e.ctrlKey;s.altKey=e.altKey;s.shiftKey=e.shiftKey;s.metaKey=e.metaKey;s.button=e.button}if(s.offsetX===undefined){if(e.offsetX!==undefined){if(Object&&Object.defineProperty!==undefined){Object.defineProperty(s,"offsetX",{writable:true});Object.defineProperty(s,"offsetY",{writable:true})}s.offsetX=e.offsetX;s.offsetY=e.offsetY}else if(e.layerX!==undefined){s.offsetX=e.layerX-e.currentTarget.offsetLeft;s.offsetY=e.layerY-e.currentTarget.offsetTop}}if(e.isPrimary!==undefined)s.isPrimary=e.isPrimary;else s.isPrimary=true;if(e.pressure)s.pressure=e.pressure;else{var o=0;if(e.which!==undefined)o=e.which;else if(e.button!==undefined){o=e.button}s.pressure=o==0?0:.5}if(e.rotation)s.rotation=e.rotation;else s.rotation=0;if(e.hwTimestamp)s.hwTimestamp=e.hwTimestamp;else s.hwTimestamp=0;if(e.tiltX)s.tiltX=e.tiltX;else s.tiltX=0;if(e.tiltY)s.tiltY=e.tiltY;else s.tiltY=0;if(e.height)s.height=e.height;else s.height=0;if(e.width)s.width=e.width;else s.width=0;s.preventDefault=function(){if(e.preventDefault!==undefined)e.preventDefault()};if(s.stopPropagation!==undefined){var u=s.stopPropagation;s.stopPropagation=function(){if(e.stopPropagation!==undefined)e.stopPropagation();u.call(this)}}s.POINTER_TYPE_TOUCH=t;s.POINTER_TYPE_PEN=n;s.POINTER_TYPE_MOUSE=r;s.pointerId=e.pointerId;s.pointerType=e.pointerType;switch(s.pointerType){case 2:s.pointerType=s.POINTER_TYPE_TOUCH;break;case 3:s.pointerType=s.POINTER_TYPE_PEN;break;case 4:s.pointerType=s.POINTER_TYPE_MOUSE;break}if(e.currentTarget&&e.currentTarget.handjs_forcePreventDefault===true)s.preventDefault();if(e.target){e.target.dispatchEvent(s)}else{e.srcElement.fireEvent("on"+l(i),s)}};var o=function(e,t){e.pointerId=1;e.pointerType=r;s(e,t)};var u=function(e,n,r,i){var o=n.identifier+2;n.pointerId=o;n.pointerType=t;n.currentTarget=r;n.target=r;if(i.preventDefault!==undefined){n.preventDefault=function(){i.preventDefault()}}s(n,e)};var a=function(e,t,n,r){if(n.__handjsGlobalRegisteredEvents&&n.__handjsGlobalRegisteredEvents[e]){u(e,t,n,r)}};var f=function(e,t,n,r){if(e.preventManipulation)e.preventManipulation();for(var s=0;s<e.changedTouches.length;++s){var o=e.changedTouches[s];if(n){i[o.identifier]=o.target}if(r){a(t,o,i[o.identifier],e)}else{u(t,o,i[o.identifier],e)}}};var l=function(e){return e.toLowerCase().replace("pointer","mouse")};var c=function(t,n,r){var i;if(r==r.toLowerCase()){var s=e.indexOf(r)-e.length/2;i=n+e[s]}else{i=n+r}if(i===n+"PointerEnter"&&t["on"+n.toLowerCase()+"pointerenter"]===undefined){i=n+"PointerOver"}if(i===n+"PointerLeave"&&t["on"+n.toLowerCase()+"pointerleave"]===undefined){i=n+"PointerOut"}return i};var h=function(e,t,n,r){if(e.__handjsRegisteredEvents===undefined){e.__handjsRegisteredEvents=[]}if(r){if(e.__handjsRegisteredEvents[t]!==undefined){e.__handjsRegisteredEvents[t]++;return}e.__handjsRegisteredEvents[t]=1;e.addEventListener(t,n,false)}else{if(e.__handjsRegisteredEvents.indexOf(t)!==-1){e.__handjsRegisteredEvents[t]--;if(e.__handjsRegisteredEvents[t]!=0){return}}e.removeEventListener(t,n);e.__handjsRegisteredEvents[t]=0}};var p=function(e,t,n){if(e.onpointerdown!==undefined){return}if(e.onmspointerdown!==undefined){var r=c(e,"MS",t);h(e,r,function(e){s(e,t)},n);return}if(e.ontouchstart!==undefined){switch(t){case"pointermove":h(e,"touchmove",function(e){f(e,t)},n);break;case"pointercancel":h(e,"touchcancel",function(e){f(e,t)},n);break;case"pointerdown":case"pointerup":case"pointerout":case"pointerover":case"pointerleave":case"pointerenter":if(!e.__handjsGlobalRegisteredEvents){e.__handjsGlobalRegisteredEvents=[]}if(n){if(e.__handjsGlobalRegisteredEvents[t]!==undefined){e.__handjsGlobalRegisteredEvents[t]++;return}e.__handjsGlobalRegisteredEvents[t]=1}else{if(e.__handjsGlobalRegisteredEvents[t]!==undefined){e.__handjsGlobalRegisteredEvents[t]--;if(e.__handjsGlobalRegisteredEvents[t]<0){e.__handjsGlobalRegisteredEvents[t]=0}}}break}}switch(t){case"pointerdown":h(e,"mousedown",function(e){o(e,t)},n);break;case"pointermove":h(e,"mousemove",function(e){o(e,t)},n);break;case"pointerup":h(e,"mouseup",function(e){o(e,t)},n);break;case"pointerover":h(e,"mouseover",function(e){o(e,t)},n);break;case"pointerout":h(e,"mouseout",function(e){o(e,t)},n);break;case"pointerenter":if(e.onmouseenter===undefined){h(e,"mouseover",function(e){o(e,t)},n)}else{h(e,"mouseenter",function(e){o(e,t)},n)}break;case"pointerleave":if(e.onmouseleave===undefined){h(e,"mouseout",function(e){o(e,t)},n)}else{h(e,"mouseleave",function(e){o(e,t)},n)}break}};var d=function(t){var n=t.prototype?t.prototype.addEventListener:t.addEventListener;var r=function(t,r,i){if(e.indexOf(t)!=-1){p(this,t,true)}if(n===undefined){this.attachEvent("on"+l(t),r)}else{n.call(this,t,r,i)}};if(t.prototype){t.prototype.addEventListener=r}else{t.addEventListener=r}};var v=function(t){var n=t.prototype?t.prototype.removeEventListener:t.removeEventListener;var r=function(t,r,i){if(e.indexOf(t)!=-1){p(this,t,false)}if(n===undefined){this.detachEvent(l(t),r)}else{n.call(this,t,r,i)}};if(t.prototype){t.prototype.removeEventListener=r}else{t.removeEventListener=r}};d(HTMLElement);d(document);d(HTMLBodyElement);d(HTMLDivElement);d(HTMLImageElement);d(HTMLUListElement);d(HTMLAnchorElement);d(HTMLLIElement);d(HTMLTableElement);if(window.HTMLSpanElement){d(HTMLSpanElement)}if(window.HTMLCanvasElement){d(HTMLCanvasElement)}if(window.SVGElement){d(SVGElement)}v(HTMLElement);v(document);v(HTMLBodyElement);v(HTMLDivElement);v(HTMLImageElement);v(HTMLUListElement);v(HTMLAnchorElement);v(HTMLLIElement);v(HTMLTableElement);if(window.HTMLSpanElement){v(HTMLSpanElement)}if(window.HTMLCanvasElement){v(HTMLCanvasElement)}if(window.SVGElement){v(SVGElement)}if(window.ontouchstart!==undefined){window.addEventListener("touchstart",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];i[n.identifier]=n.target;a("pointerenter",n,n.target,e);a("pointerover",n,n.target,e);a("pointerdown",n,n.target,e)}});window.addEventListener("touchend",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];var r=i[n.identifier];a("pointerup",n,r,e);a("pointerout",n,r,e);a("pointerleave",n,r,e)}});window.addEventListener("touchmove",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];var r=document.elementFromPoint(n.clientX,n.clientY);var s=i[n.identifier];if(s===r){continue}if(s){a("pointerout",n,s,e);if(!s.contains(r)){a("pointerleave",n,s,e)}}if(r){a("pointerover",n,r,e);if(!r.contains(s)){a("pointerenter",n,r,e)}}i[n.identifier]=r}})}if(navigator.pointerEnabled===undefined){navigator.pointerEnabled=true;if(navigator.msPointerEnabled){navigator.maxTouchPoints=navigator.msMaxTouchPoints}}if(document.styleSheets&&document.addEventListener){document.addEventListener("DOMContentLoaded",function(){var e=function(e){return e.replace(/^\s+|\s+$/,"")};var t=function(t){var n=new RegExp(".+?{.*?}","m");var r=new RegExp(".+?{","m");while(t!=""){var i=n.exec(t);if(!i){break}var s=i[0];t=e(t.replace(s,""));var o=e(r.exec(s)[0].replace("{",""));if(s.replace(/\s/g,"").indexOf("touch-action:none")!=-1){var u=document.querySelectorAll(o);for(var a=0;a<u.length;a++){var f=u[a];if(f.style.msTouchAction!==undefined){f.style.msTouchAction="none"}else{f.handjs_forcePreventDefault=true}}}}};try{for(var n=0;n<document.styleSheets.length;n++){var r=document.styleSheets[n];if(r.href==undefined){continue}var i=new XMLHttpRequest;i.open("get",r.href,false);i.send();var s=i.responseText.replace(/(\n|\r)/g,"");t(s)}}catch(o){}var u=document.getElementsByTagName("style");for(var n=0;n<u.length;n++){var a=u[n];var f=e(a.innerHTML.replace(/(\n|\r)/g,""));t(f)}},false)}})()
BabylonMonkey_LoadMesh = function(handle, path, file, scene, target){
	BABYLON.SceneLoader.ImportMesh(handle, path, file, scene, function (newMeshes, particleSystems, skeletons) {
		target.p__loadedMesh(handle,newMeshes,particleSystems,skeletons);
	});
}

AnimationFrame = function(){
}

NAnimationFrame = function(frame, value){
	var result = new AnimationFrame();
	result.frame = frame;
	result.value = value;
	return result;
}
// HTML5 mojo runtime.
//
// Copyright 2011 Mark Sibly, all rights reserved.
// No warranty implied; use at your own risk.

//***** gxtkGraphics class *****

function gxtkGraphics(){
	this.game=BBHtml5Game.Html5Game();
	this.canvas=this.game.GetCanvas()
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	this.gl=null;
	this.gc=this.canvas.getContext( '2d' );
	this.tmpCanvas=null;
	this.r=255;
	this.b=255;
	this.g=255;
	this.white=true;
	this.color="rgb(255,255,255)"
	this.alpha=1;
	this.blend="source-over";
	this.ix=1;this.iy=0;
	this.jx=0;this.jy=1;
	this.tx=0;this.ty=0;
	this.tformed=false;
	this.scissorX=0;
	this.scissorY=0;
	this.scissorWidth=0;
	this.scissorHeight=0;
	this.clipped=false;
}

gxtkGraphics.prototype.BeginRender=function(){
	this.width=this.canvas.width;
	this.height=this.canvas.height;
	if( !this.gc ) return 0;
	this.gc.save();
	if( this.game.GetLoading() ) return 2;
	return 1;
}

gxtkGraphics.prototype.EndRender=function(){
	if( this.gc ) this.gc.restore();
}

gxtkGraphics.prototype.Width=function(){
	return this.width;
}

gxtkGraphics.prototype.Height=function(){
	return this.height;
}

gxtkGraphics.prototype.LoadSurface=function( path ){
	var game=this.game;

	var ty=game.GetMetaData( path,"type" );
	if( ty.indexOf( "image/" )!=0 ) return null;
	
	function onloadfun(){
		game.DecLoading();
	}
	
	game.IncLoading();

	var image=new Image();
	image.onload=onloadfun;
	image.meta_width=parseInt( game.GetMetaData( path,"width" ) );
	image.meta_height=parseInt( game.GetMetaData( path,"height" ) );
	image.src=game.PathToUrl( path );

	return new gxtkSurface( image,this );
}

gxtkGraphics.prototype.CreateSurface=function( width,height ){
	var canvas=document.createElement( 'canvas' );
	
	canvas.width=width;
	canvas.height=height;
	canvas.meta_width=width;
	canvas.meta_height=height;
	canvas.complete=true;
	
	var surface=new gxtkSurface( canvas,this );
	
	surface.gc=canvas.getContext( '2d' );
	
	return surface;
}

gxtkGraphics.prototype.SetAlpha=function( alpha ){
	this.alpha=alpha;
	this.gc.globalAlpha=alpha;
}

gxtkGraphics.prototype.SetColor=function( r,g,b ){
	this.r=r;
	this.g=g;
	this.b=b;
	this.white=(r==255 && g==255 && b==255);
	this.color="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;
}

gxtkGraphics.prototype.SetBlend=function( blend ){
	switch( blend ){
	case 1:
		this.blend="lighter";
		break;
	default:
		this.blend="source-over";
	}
	this.gc.globalCompositeOperation=this.blend;
}

gxtkGraphics.prototype.SetScissor=function( x,y,w,h ){
	this.scissorX=x;
	this.scissorY=y;
	this.scissorWidth=w;
	this.scissorHeight=h;
	this.clipped=(x!=0 || y!=0 || w!=this.canvas.width || h!=this.canvas.height);
	this.gc.restore();
	this.gc.save();
	if( this.clipped ){
		this.gc.beginPath();
		this.gc.rect( x,y,w,h );
		this.gc.clip();
		this.gc.closePath();
	}
	this.gc.fillStyle=this.color;
	this.gc.strokeStyle=this.color;	
	this.gc.globalAlpha=this.alpha;	
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.SetMatrix=function( ix,iy,jx,jy,tx,ty ){
	this.ix=ix;this.iy=iy;
	this.jx=jx;this.jy=jy;
	this.tx=tx;this.ty=ty;
	this.gc.setTransform( ix,iy,jx,jy,tx,ty );
	this.tformed=(ix!=1 || iy!=0 || jx!=0 || jy!=1 || tx!=0 || ty!=0);
}

gxtkGraphics.prototype.Cls=function( r,g,b ){
	if( this.tformed ) this.gc.setTransform( 1,0,0,1,0,0 );
	this.gc.fillStyle="rgb("+(r|0)+","+(g|0)+","+(b|0)+")";
	this.gc.globalAlpha=1;
	this.gc.globalCompositeOperation="source-over";
	this.gc.fillRect( 0,0,this.canvas.width,this.canvas.height );
	this.gc.fillStyle=this.color;
	this.gc.globalAlpha=this.alpha;
	this.gc.globalCompositeOperation=this.blend;
	if( this.tformed ) this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
}

gxtkGraphics.prototype.DrawPoint=function( x,y ){
	if( this.tformed ){
		var px=x;
		x=px * this.ix + y * this.jx + this.tx;
		y=px * this.iy + y * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
		this.gc.fillRect( x,y,1,1 );
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
		this.gc.fillRect( x,y,1,1 );
	}
}

gxtkGraphics.prototype.DrawRect=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
	this.gc.fillRect( x,y,w,h );
}

gxtkGraphics.prototype.DrawLine=function( x1,y1,x2,y2 ){
	if( this.tformed ){
		var x1_t=x1 * this.ix + y1 * this.jx + this.tx;
		var y1_t=x1 * this.iy + y1 * this.jy + this.ty;
		var x2_t=x2 * this.ix + y2 * this.jx + this.tx;
		var y2_t=x2 * this.iy + y2 * this.jy + this.ty;
		this.gc.setTransform( 1,0,0,1,0,0 );
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1_t,y1_t );
	  	this.gc.lineTo( x2_t,y2_t );
	  	this.gc.stroke();
	  	this.gc.closePath();
		this.gc.setTransform( this.ix,this.iy,this.jx,this.jy,this.tx,this.ty );
	}else{
	  	this.gc.beginPath();
	  	this.gc.moveTo( x1,y1 );
	  	this.gc.lineTo( x2,y2 );
	  	this.gc.stroke();
	  	this.gc.closePath();
	}
}

gxtkGraphics.prototype.DrawOval=function( x,y,w,h ){
	if( w<0 ){ x+=w;w=-w; }
	if( h<0 ){ y+=h;h=-h; }
	if( w<=0 || h<=0 ) return;
	//
  	var w2=w/2,h2=h/2;
	this.gc.save();
	this.gc.translate( x+w2,y+h2 );
	this.gc.scale( w2,h2 );
  	this.gc.beginPath();
	this.gc.arc( 0,0,1,0,Math.PI*2,false );
	this.gc.fill();
  	this.gc.closePath();
	this.gc.restore();
}

gxtkGraphics.prototype.DrawPoly=function( verts ){
	if( verts.length<2 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=2;i<verts.length;i+=2 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawPoly2=function( verts,surface,srx,srcy ){
	if( verts.length<4 ) return;
	this.gc.beginPath();
	this.gc.moveTo( verts[0],verts[1] );
	for( var i=4;i<verts.length;i+=4 ){
		this.gc.lineTo( verts[i],verts[i+1] );
	}
	this.gc.fill();
	this.gc.closePath();
}

gxtkGraphics.prototype.DrawSurface=function( surface,x,y ){
	if( !surface.image.complete ) return;
	
	if( this.white ){
		this.gc.drawImage( surface.image,x,y );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,0,0,surface.swidth,surface.sheight );
}

gxtkGraphics.prototype.DrawSurface2=function( surface,x,y,srcx,srcy,srcw,srch ){
	if( !surface.image.complete ) return;

	if( srcw<0 ){ srcx+=srcw;srcw=-srcw; }
	if( srch<0 ){ srcy+=srch;srch=-srch; }
	if( srcw<=0 || srch<=0 ) return;

	if( this.white ){
		this.gc.drawImage( surface.image,srcx,srcy,srcw,srch,x,y,srcw,srch );
		return;
	}
	
	this.DrawImageTinted( surface.image,x,y,srcx,srcy,srcw,srch  );
}

gxtkGraphics.prototype.DrawImageTinted=function( image,dx,dy,sx,sy,sw,sh ){

	if( !this.tmpCanvas ){
		this.tmpCanvas=document.createElement( "canvas" );
	}

	if( sw>this.tmpCanvas.width || sh>this.tmpCanvas.height ){
		this.tmpCanvas.width=Math.max( sw,this.tmpCanvas.width );
		this.tmpCanvas.height=Math.max( sh,this.tmpCanvas.height );
	}
	
	var tmpGC=this.tmpCanvas.getContext( "2d" );
	tmpGC.globalCompositeOperation="copy";
	
	tmpGC.drawImage( image,sx,sy,sw,sh,0,0,sw,sh );
	
	var imgData=tmpGC.getImageData( 0,0,sw,sh );
	
	var p=imgData.data,sz=sw*sh*4,i;
	
	for( i=0;i<sz;i+=4 ){
		p[i]=p[i]*this.r/255;
		p[i+1]=p[i+1]*this.g/255;
		p[i+2]=p[i+2]*this.b/255;
	}
	
	tmpGC.putImageData( imgData,0,0 );
	
	this.gc.drawImage( this.tmpCanvas,0,0,sw,sh,dx,dy,sw,sh );
}

gxtkGraphics.prototype.ReadPixels=function( pixels,x,y,width,height,offset,pitch ){

	var imgData=this.gc.getImageData( x,y,width,height );
	
	var p=imgData.data,i=0,j=offset,px,py;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			pixels[j++]=(p[i+3]<<24)|(p[i]<<16)|(p[i+1]<<8)|p[i+2];
			i+=4;
		}
		j+=pitch-width;
	}
}

gxtkGraphics.prototype.WritePixels2=function( surface,pixels,x,y,width,height,offset,pitch ){

	if( !surface.gc ){
		if( !surface.image.complete ) return;
		var canvas=document.createElement( "canvas" );
		canvas.width=surface.swidth;
		canvas.height=surface.sheight;
		surface.gc=canvas.getContext( "2d" );
		surface.gc.globalCompositeOperation="copy";
		surface.gc.drawImage( surface.image,0,0 );
		surface.image=canvas;
	}

	var imgData=surface.gc.createImageData( width,height );

	var p=imgData.data,i=0,j=offset,px,py,argb;
	
	for( py=0;py<height;++py ){
		for( px=0;px<width;++px ){
			argb=pixels[j++];
			p[i]=(argb>>16) & 0xff;
			p[i+1]=(argb>>8) & 0xff;
			p[i+2]=argb & 0xff;
			p[i+3]=(argb>>24) & 0xff;
			i+=4;
		}
		j+=pitch-width;
	}
	
	surface.gc.putImageData( imgData,x,y );
}

//***** gxtkSurface class *****

function gxtkSurface( image,graphics ){
	this.image=image;
	this.graphics=graphics;
	this.swidth=image.meta_width;
	this.sheight=image.meta_height;
}

//***** GXTK API *****

gxtkSurface.prototype.Discard=function(){
	if( this.image ){
		this.image=null;
	}
}

gxtkSurface.prototype.Width=function(){
	return this.swidth;
}

gxtkSurface.prototype.Height=function(){
	return this.sheight;
}

gxtkSurface.prototype.Loaded=function(){
	return this.image.complete;
}

gxtkSurface.prototype.OnUnsafeLoadComplete=function(){
	return true;
}

//***** gxtkChannel class *****
function gxtkChannel(){
	this.sample=null;
	this.audio=null;
	this.volume=1;
	this.pan=0;
	this.rate=1;
	this.flags=0;
	this.state=0;
}

//***** gxtkAudio class *****
function gxtkAudio(){
	this.game=BBHtml5Game.Html5Game();
	this.okay=typeof(Audio)!="undefined";
	this.music=null;
	this.channels=new Array(33);
	for( var i=0;i<33;++i ){
		this.channels[i]=new gxtkChannel();
		if( !this.okay ) this.channels[i].state=-1;
	}
}

gxtkAudio.prototype.Suspend=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==1 ){
			if( chan.audio.ended && !chan.audio.loop ){
				chan.state=0;
			}else{
				chan.audio.pause();
				chan.state=3;
			}
		}
	}
}

gxtkAudio.prototype.Resume=function(){
	var i;
	for( i=0;i<33;++i ){
		var chan=this.channels[i];
		if( chan.state==3 ){
			chan.audio.play();
			chan.state=1;
		}
	}
}

gxtkAudio.prototype.LoadSample=function( path ){
	if( !this.okay ) return null;

	var audio=new Audio( this.game.PathToUrl( path ) );
	if( !audio ) return null;
	
	return new gxtkSample( audio );
}

gxtkAudio.prototype.PlaySample=function( sample,channel,flags ){
	if( !this.okay ) return;
	
	var chan=this.channels[channel];

	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
	
	for( var i=0;i<33;++i ){
		var chan2=this.channels[i];
		if( chan2.state==1 && chan2.audio.ended && !chan2.audio.loop ) chan.state=0;
		if( chan2.state==0 && chan2.sample ){
			chan2.sample.FreeAudio( chan2.audio );
			chan2.sample=null;
			chan2.audio=null;
		}
	}

	var audio=sample.AllocAudio();
	if( !audio ) return;

	audio.loop=(flags&1)!=0;
	audio.volume=chan.volume;
	audio.play();

	chan.sample=sample;
	chan.audio=audio;
	chan.flags=flags;
	chan.state=1;
}

gxtkAudio.prototype.StopChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state>0 ){
		chan.audio.pause();
		chan.state=0;
	}
}

gxtkAudio.prototype.PauseChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==1 ){
		if( chan.audio.ended && !chan.audio.loop ){
			chan.state=0;
		}else{
			chan.audio.pause();
			chan.state=2;
		}
	}
}

gxtkAudio.prototype.ResumeChannel=function( channel ){
	var chan=this.channels[channel];
	
	if( chan.state==2 ){
		chan.audio.play();
		chan.state=1;
	}
}

gxtkAudio.prototype.ChannelState=function( channel ){
	var chan=this.channels[channel];
	if( chan.state==1 && chan.audio.ended && !chan.audio.loop ) chan.state=0;
	if( chan.state==3 ) return 1;
	return chan.state;
}

gxtkAudio.prototype.SetVolume=function( channel,volume ){
	var chan=this.channels[channel];
	if( chan.state>0 ) chan.audio.volume=volume;
	chan.volume=volume;
}

gxtkAudio.prototype.SetPan=function( channel,pan ){
	var chan=this.channels[channel];
	chan.pan=pan;
}

gxtkAudio.prototype.SetRate=function( channel,rate ){
	var chan=this.channels[channel];
	chan.rate=rate;
}

gxtkAudio.prototype.PlayMusic=function( path,flags ){
	this.StopMusic();
	
	this.music=this.LoadSample( path );
	if( !this.music ) return;
	
	this.PlaySample( this.music,32,flags );
}

gxtkAudio.prototype.StopMusic=function(){
	this.StopChannel( 32 );

	if( this.music ){
		this.music.Discard();
		this.music=null;
	}
}

gxtkAudio.prototype.PauseMusic=function(){
	this.PauseChannel( 32 );
}

gxtkAudio.prototype.ResumeMusic=function(){
	this.ResumeChannel( 32 );
}

gxtkAudio.prototype.MusicState=function(){
	return this.ChannelState( 32 );
}

gxtkAudio.prototype.SetMusicVolume=function( volume ){
	this.SetVolume( 32,volume );
}

//***** gxtkSample class *****

function gxtkSample( audio ){
	this.audio=audio;
	this.free=new Array();
	this.insts=new Array();
}

gxtkSample.prototype.FreeAudio=function( audio ){
	this.free.push( audio );
}

gxtkSample.prototype.AllocAudio=function(){
	var audio;
	while( this.free.length ){
		audio=this.free.pop();
		try{
			audio.currentTime=0;
			return audio;
		}catch( ex ){
			print( "AUDIO ERROR1!" );
		}
	}
	
	//Max out?
	if( this.insts.length==8 ) return null;
	
	audio=new Audio( this.audio.src );
	
	//yucky loop handler for firefox!
	//
	audio.addEventListener( 'ended',function(){
		if( this.loop ){
			try{
				this.currentTime=0;
				this.play();
			}catch( ex ){
				print( "AUDIO ERROR2!" );
			}
		}
	},false );

	this.insts.push( audio );
	return audio;
}

gxtkSample.prototype.Discard=function(){
}

function BBThread(){
	this.result=null;
	this.running=false;
}

BBThread.prototype.Start=function(){
	this.result=null;
	this.running=true;
	this.Run__UNSAFE__();
}

BBThread.prototype.IsRunning=function(){
	return this.running;
}

BBThread.prototype.Result=function(){
	return this.result;
}

BBThread.prototype.Run__UNSAFE__=function(){
	this.running=false;
}

function BBAsyncImageLoaderThread(){
	BBThread.call(this);
}

BBAsyncImageLoaderThread.prototype=extend_class( BBThread );

BBAsyncImageLoaderThread.prototype.Start=function(){

	var thread=this;

	var image=new Image();
	
	image.onload=function( e ){
		image.meta_width=image.width;
		image.meta_height=image.height;
		thread._surface=new gxtkSurface( image,thread._device )
		thread.running=false;
	}
	
	image.onerror=function( e ){
		thread._surface=null;
		thread.running=false;
	}
	
	thread.running=true;
	
	image.src=BBGame.Game().PathToUrl( thread._path );
}


function BBAsyncSoundLoaderThread(){
	BBThread.call(this);
}

BBAsyncSoundLoaderThread.prototype=extend_class( BBThread );

BBAsyncSoundLoaderThread.prototype.Start=function(){
	this._sample=this._device.LoadSample( this._path );
}
function c_App(){
	Object.call(this);
}
c_App.m_new=function(){
	if((bb_app__app)!=null){
		error("App has already been created");
	}
	bb_app__app=this;
	bb_app__delegate=c_GameDelegate.m_new.call(new c_GameDelegate);
	bb_app__game.SetDelegate(bb_app__delegate);
	return this;
}
c_App.prototype.p_OnCreate=function(){
	return 0;
}
c_App.prototype.p_OnSuspend=function(){
	return 0;
}
c_App.prototype.p_OnResume=function(){
	return 0;
}
c_App.prototype.p_OnUpdate=function(){
	return 0;
}
c_App.prototype.p_OnLoading=function(){
	return 0;
}
c_App.prototype.p_OnRender=function(){
	return 0;
}
c_App.prototype.p_OnClose=function(){
	bb_app_EndApp();
	return 0;
}
c_App.prototype.p_OnBack=function(){
	this.p_OnClose();
	return 0;
}
function c_BabylonGame(){
	c_App.call(this);
	this.m_Engine=null;
	this.m_Canvas3D=null;
	this.m_Canvas2D=null;
	this.m__state=null;
	this.m__states=c_StringMap2.m_new.call(new c_StringMap2);
	this.m_AutoResize=true;
	this.m_Width=.0;
	this.m_Height=.0;
}
c_BabylonGame.prototype=extend_class(c_App);
c_BabylonGame.prototype.p_State=function(){
	return this.m__state;
}
c_BabylonGame.prototype.p_State2=function(t_value){
	this.m__state=t_value;
	this.m__state.m_Game=this;
	if(!this.m__state.m_HasBeenPreloaded){
		this.m__state.m_Scene=new BABYLON.Scene(this.m_Engine);
		this.m__state.p_Preload();
		this.m__state.m_HasBeenPreloaded=true;
	}
}
c_BabylonGame.m_new=function(t_state,t_canvasName,t_antialias,t_updateRate){
	c_App.m_new.call(this);
	if(!BABYLON.Engine.isSupported()){
		error("Babylon Engine Not Supported!");
	}
	this.m_Canvas3D=document.getElementById(t_canvasName);
	this.m_Canvas2D=document.getElementById("GameCanvas");
	this.m_Engine=new BABYLON.Engine(this.m_Canvas3D,t_antialias);
	if((t_state)!=null){
		this.p_State2(t_state);
	}
	bb_app_SetUpdateRate(t_updateRate);
	return this;
}
c_BabylonGame.prototype.p_AddState=function(t_key,t_state){
	this.m__states.p_Add2(t_key,t_state);
	return 0;
}
c_BabylonGame.prototype.p_StateCount=function(){
	return this.m__states.p_Count();
}
c_BabylonGame.prototype.p_StartState=function(t_value,t_clearScene){
	this.p_State2(this.m__states.p_Get(t_value));
}
c_BabylonGame.prototype.p_OnUpdate=function(){
	if(!((this.m__state)!=null)){
		return 0;
	}
	if(!this.m__state.m_HasLoadUpdateRun || this.m__state.m_Importer.m_ToLoad>0){
		this.m__state.m_HasLoadUpdateRun=true;
		this.m__state.p_LoadUpdate();
		return 0;
	}
	if(!this.m__state.m_HasBeenCreated){
		this.m__state.p_Create();
		this.m__state.m_HasBeenCreated=true;
	}
	this.m__state.p_Update();
	return 0;
}
c_BabylonGame.prototype.p_OnRender=function(){
	BABYLON.Tools._MeasureFps();
	if(!((this.m__state)!=null)){
		return 0;
	}
	if(!this.m__state.m_HasLoadRenderRun || this.m__state.m_Importer.m_ToLoad>0){
		this.m__state.m_HasLoadRenderRun=true;
		this.m__state.p_LoadRender();
		return 0;
	}
	if(!this.m__state.m_HasBeenCreated){
		return 0;
	}
	if(this.m_AutoResize && ((this.m_Canvas2D.width)!=this.m_Width || (this.m_Canvas2D.height)!=this.m_Height)){
		debugStop();
		this.m_Width=(this.m_Canvas2D.width);
		this.m_Height=(this.m_Canvas2D.height);
		this.m_Canvas3D.width=((this.m_Width)|0);
		this.m_Canvas3D.height=((this.m_Height)|0);
		this.m_Engine.resize();
	}
	if((this.m__state.m_Scene)!=null){
		this.m__state.m_Scene.render();
	}
	this.m_Canvas2D.getContext("2d").clearRect(0,0,this.m_Canvas2D.width,this.m_Canvas2D.height);
	this.m__state.p_Render();
	return 0;
}
function c_BabylonState(){
	Object.call(this);
	this.m_Game=null;
	this.m_HasBeenPreloaded=false;
	this.m_Scene=null;
	this.m_Importer=null;
	this.m_HasLoadUpdateRun=false;
	this.m_HasBeenCreated=false;
	this.m_HasLoadRenderRun=false;
}
c_BabylonState.prototype.p_Preload=function(){
	return 0;
}
c_BabylonState.m_new=function(){
	this.m_Importer=c_BabylonImporter.m_new.call(new c_BabylonImporter,this);
	return this;
}
c_BabylonState.prototype.p_LoadUpdate=function(){
	return 0;
}
c_BabylonState.prototype.p_Create=function(){
	return 0;
}
c_BabylonState.prototype.p_Update=function(){
	return 0;
}
c_BabylonState.prototype.p_LoadRender=function(){
	return 0;
}
c_BabylonState.prototype.p_Render=function(){
	return 0;
}
var bb_app__app=null;
function c_GameDelegate(){
	BBGameDelegate.call(this);
	this.m__graphics=null;
	this.m__audio=null;
	this.m__input=null;
}
c_GameDelegate.prototype=extend_class(BBGameDelegate);
c_GameDelegate.m_new=function(){
	return this;
}
c_GameDelegate.prototype.StartGame=function(){
	this.m__graphics=(new gxtkGraphics);
	bb_graphics_SetGraphicsDevice(this.m__graphics);
	bb_graphics_SetFont(null,32);
	this.m__audio=(new gxtkAudio);
	bb_audio_SetAudioDevice(this.m__audio);
	this.m__input=c_InputDevice.m_new.call(new c_InputDevice);
	bb_input_SetInputDevice(this.m__input);
	bb_app__app.p_OnCreate();
}
c_GameDelegate.prototype.SuspendGame=function(){
	bb_app__app.p_OnSuspend();
	this.m__audio.Suspend();
}
c_GameDelegate.prototype.ResumeGame=function(){
	this.m__audio.Resume();
	bb_app__app.p_OnResume();
}
c_GameDelegate.prototype.UpdateGame=function(){
	this.m__input.p_BeginUpdate();
	bb_app__app.p_OnUpdate();
	this.m__input.p_EndUpdate();
}
c_GameDelegate.prototype.RenderGame=function(){
	var t_mode=this.m__graphics.BeginRender();
	if((t_mode)!=0){
		bb_graphics_BeginRender();
	}
	if(t_mode==2){
		bb_app__app.p_OnLoading();
	}else{
		bb_app__app.p_OnRender();
	}
	if((t_mode)!=0){
		bb_graphics_EndRender();
	}
	this.m__graphics.EndRender();
}
c_GameDelegate.prototype.KeyEvent=function(t_event,t_data){
	this.m__input.p_KeyEvent(t_event,t_data);
	if(t_event!=1){
		return;
	}
	var t_1=t_data;
	if(t_1==432){
		bb_app__app.p_OnClose();
	}else{
		if(t_1==416){
			bb_app__app.p_OnBack();
		}
	}
}
c_GameDelegate.prototype.MouseEvent=function(t_event,t_data,t_x,t_y){
	this.m__input.p_MouseEvent(t_event,t_data,t_x,t_y);
}
c_GameDelegate.prototype.TouchEvent=function(t_event,t_data,t_x,t_y){
	this.m__input.p_TouchEvent(t_event,t_data,t_x,t_y);
}
c_GameDelegate.prototype.MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	this.m__input.p_MotionEvent(t_event,t_data,t_x,t_y,t_z);
}
c_GameDelegate.prototype.DiscardGraphics=function(){
	this.m__graphics.DiscardGraphics();
}
var bb_app__delegate=null;
var bb_app__game=null;
var bb_app__updateRate=0;
function bb_app_SetUpdateRate(t_hertz){
	bb_app__updateRate=t_hertz;
	bb_app__game.SetUpdateRate(t_hertz);
	return 0;
}
var bb_samples_BGame=null;
function c_Sample(){
	c_BabylonState.call(this);
	this.m_Name="";
}
c_Sample.prototype=extend_class(c_BabylonState);
c_Sample.m_new=function(){
	c_BabylonState.m_new.call(this);
	return this;
}
c_Sample.prototype.p_Update=function(){
	if((bb_input_KeyHit(32))!=0){
		bb_samples_NextState();
	}
	return 0;
}
c_Sample.prototype.p_LoadRender=function(){
	bb_graphics_Cls(0.0,0.0,0.0);
	bb_graphics_DrawText("Loading",400.0,275.0,0.5,0.5);
	bb_graphics_DrawText(this.m_Name,400.0,300.0,0.5,0.5);
	bb_graphics_DrawText("State "+String(bb_samples_CurrentState+1)+" of "+String(bb_samples_BGame.p_StateCount()),400.0,325.0,0.5,0.5);
	return 0;
}
c_Sample.prototype.p_Render=function(){
	bb_graphics_DrawText(this.m_Name,0.0,0.0,0.0,0.0);
	bb_graphics_DrawText("State "+String(bb_samples_CurrentState+1)+" of "+String(bb_samples_BGame.p_StateCount()),0.0,16.0,0.0,0.0);
	bb_graphics_DrawText("Press space to cycle",0.0,32.0,0.0,0.0);
	return 0;
}
function c_Bones(){
	c_Sample.call(this);
}
c_Bones.prototype=extend_class(c_Sample);
c_Bones.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Bones.prototype.p_Preload=function(){
	this.m_Name="Bones";
	this.m_Importer.p_LoadMesh("Rabbit","Scenes/Rabbit/Rabbit.babylon");
	this.m_Importer.p_LoadMesh("him","Scenes/Dude/Dude.babylon");
	return 0;
}
c_Bones.prototype.p_Create=function(){
	var t_light=new BABYLON.DirectionalLight("dir01",new BABYLON.Vector3(0.0,-0.5,-1.0),this.m_Scene);
	var t_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,new BABYLON.Vector3(0.0,30.0,0.0),this.m_Scene);
	t_camera.setPosition(new BABYLON.Vector3(20.0,70.0,120.0));
	t_light.position=new BABYLON.Vector3(20.0,150.0,70.0);
	this.m_Scene.ambientColor=new BABYLON.Color3(0.3,0.3,0.3);
	var t_ground=BABYLON.Mesh.CreateGround("ground",1000.0,1000.0,1,this.m_Scene,false);
	var t_groundMaterial=new BABYLON.StandardMaterial("ground",this.m_Scene);
	t_groundMaterial.diffuseColor=new BABYLON.Color3(0.2,0.2,0.2);
	t_groundMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_ground.material=(t_groundMaterial);
	t_ground.receiveShadows=true;
	var t_shadowGenerator=new BABYLON.ShadowGenerator(1024.0,(t_light));
	var t_rabbit=this.m_Importer.m_Meshes.p_Get("Rabbit").m_Meshes[1];
	t_rabbit.scaling=new BABYLON.Vector3(0.4,0.4,0.4);
	t_shadowGenerator.getShadowMap().renderList.push(t_rabbit);
	var t_rabbit2=t_rabbit.clone("rabbit2",null,false);
	var t_rabbit3=t_rabbit.clone("rabbit2",null,false);
	t_shadowGenerator.getShadowMap().renderList.push(t_rabbit2);
	t_shadowGenerator.getShadowMap().renderList.push(t_rabbit3);
	t_rabbit2.position=new BABYLON.Vector3(-50.0,0.0,-20.0);
	t_rabbit2.skeleton=t_rabbit.skeleton.clone("clonedSkeleton");
	t_rabbit3.position=new BABYLON.Vector3(50.0,0.0,-20.0);
	t_rabbit3.skeleton=t_rabbit.skeleton.clone("clonedSkeleton2");
	this.m_Scene.beginAnimation((t_rabbit.skeleton),0,100,true,0.8,null);
	this.m_Scene.beginAnimation((t_rabbit2.skeleton),73,100,true,0.8,null);
	this.m_Scene.beginAnimation((t_rabbit3.skeleton),0,72,true,0.8,null);
	var t_dude=this.m_Importer.m_Meshes.p_Get("him").m_Meshes[0];
	for(var t_index=0;t_index<=this.m_Importer.m_Meshes.p_Get("him").m_Meshes.length-1;t_index=t_index+1){
	}
	t_dude.rotation.y=3.14159265;
	t_dude.position=new BABYLON.Vector3(0.0,0.0,-80.0);
	this.m_Scene.beginAnimation((this.m_Importer.m_Meshes.p_Get("him").m_Skeletons[0]),0,100,true,1.0,null);
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
function c_BabylonImporter(){
	Object.call(this);
	this.m_State=null;
	this.m_Meshes=c_StringMap.m_new.call(new c_StringMap);
	this.m_ToLoad=0;
	this.m_DefaultPath="data/";
}
c_BabylonImporter.prototype.p__loadedMesh=function(t_name,t_newMeshes,t_particleSystems,t_skeletons){
	if(t_name==""){
		return 0;
	}
	debugStop();
	var t_data=c_LoadedMeshData.m_new.call(new c_LoadedMeshData);
	t_data.m_Meshes=t_newMeshes;
	t_data.m_ParticleSystems=t_particleSystems;
	t_data.m_Skeletons=t_skeletons;
	this.m_Meshes.p_Add(t_name,t_data);
	this.m_ToLoad-=1;
	return 0;
}
c_BabylonImporter.m_new=function(t_state){
	this.m_State=t_state;
	this.p__loadedMesh("",new_object_array(0),new_object_array(0),new_object_array(0));
	return this;
}
c_BabylonImporter.m_new2=function(){
	return this;
}
c_BabylonImporter.prototype.p_LoadMesh=function(t_name,t_file){
	this.m_ToLoad+=1;
	var t_path="/";
	var t_fileparts=t_file.split("/");
	if(t_fileparts.length>0){
		t_path=t_fileparts.slice(0,t_fileparts.length-1).join("/")+"/";
		t_file=t_fileparts[t_fileparts.length-1];
	}
	BabylonMonkey_LoadMesh(t_name,this.m_DefaultPath+t_path,t_file,this.m_State.m_Scene,this);
	return 0;
}
function c_LoadedMeshData(){
	Object.call(this);
	this.m_Meshes=[];
	this.m_ParticleSystems=[];
	this.m_Skeletons=[];
}
c_LoadedMeshData.m_new=function(){
	return this;
}
function c_Map(){
	Object.call(this);
	this.m_root=null;
}
c_Map.m_new=function(){
	return this;
}
c_Map.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map.prototype.p_RotateLeft=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map.prototype.p_RotateRight=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map.prototype.p_InsertFixup=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map.prototype.p_Add=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return false;
			}
		}
	}
	t_node=c_Node.m_new.call(new c_Node,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map.prototype.p_FindNode=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
function c_StringMap(){
	c_Map.call(this);
}
c_StringMap.prototype=extend_class(c_Map);
c_StringMap.m_new=function(){
	c_Map.m_new.call(this);
	return this;
}
c_StringMap.prototype.p_Compare=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Node(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node.m_new2=function(){
	return this;
}
function c_Map2(){
	Object.call(this);
	this.m_root=null;
}
c_Map2.m_new=function(){
	return this;
}
c_Map2.prototype.p_Compare=function(t_lhs,t_rhs){
}
c_Map2.prototype.p_RotateLeft2=function(t_node){
	var t_child=t_node.m_right;
	t_node.m_right=t_child.m_left;
	if((t_child.m_left)!=null){
		t_child.m_left.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_left){
			t_node.m_parent.m_left=t_child;
		}else{
			t_node.m_parent.m_right=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_left=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map2.prototype.p_RotateRight2=function(t_node){
	var t_child=t_node.m_left;
	t_node.m_left=t_child.m_right;
	if((t_child.m_right)!=null){
		t_child.m_right.m_parent=t_node;
	}
	t_child.m_parent=t_node.m_parent;
	if((t_node.m_parent)!=null){
		if(t_node==t_node.m_parent.m_right){
			t_node.m_parent.m_right=t_child;
		}else{
			t_node.m_parent.m_left=t_child;
		}
	}else{
		this.m_root=t_child;
	}
	t_child.m_right=t_node;
	t_node.m_parent=t_child;
	return 0;
}
c_Map2.prototype.p_InsertFixup2=function(t_node){
	while(((t_node.m_parent)!=null) && t_node.m_parent.m_color==-1 && ((t_node.m_parent.m_parent)!=null)){
		if(t_node.m_parent==t_node.m_parent.m_parent.m_left){
			var t_uncle=t_node.m_parent.m_parent.m_right;
			if(((t_uncle)!=null) && t_uncle.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle.m_color=1;
				t_uncle.m_parent.m_color=-1;
				t_node=t_uncle.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_right){
					t_node=t_node.m_parent;
					this.p_RotateLeft2(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateRight2(t_node.m_parent.m_parent);
			}
		}else{
			var t_uncle2=t_node.m_parent.m_parent.m_left;
			if(((t_uncle2)!=null) && t_uncle2.m_color==-1){
				t_node.m_parent.m_color=1;
				t_uncle2.m_color=1;
				t_uncle2.m_parent.m_color=-1;
				t_node=t_uncle2.m_parent;
			}else{
				if(t_node==t_node.m_parent.m_left){
					t_node=t_node.m_parent;
					this.p_RotateRight2(t_node);
				}
				t_node.m_parent.m_color=1;
				t_node.m_parent.m_parent.m_color=-1;
				this.p_RotateLeft2(t_node.m_parent.m_parent);
			}
		}
	}
	this.m_root.m_color=1;
	return 0;
}
c_Map2.prototype.p_Add2=function(t_key,t_value){
	var t_node=this.m_root;
	var t_parent=null;
	var t_cmp=0;
	while((t_node)!=null){
		t_parent=t_node;
		t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return false;
			}
		}
	}
	t_node=c_Node2.m_new.call(new c_Node2,t_key,t_value,-1,t_parent);
	if((t_parent)!=null){
		if(t_cmp>0){
			t_parent.m_right=t_node;
		}else{
			t_parent.m_left=t_node;
		}
		this.p_InsertFixup2(t_node);
	}else{
		this.m_root=t_node;
	}
	return true;
}
c_Map2.prototype.p_Count=function(){
	if((this.m_root)!=null){
		return this.m_root.p_Count2(0);
	}
	return 0;
}
c_Map2.prototype.p_FindNode=function(t_key){
	var t_node=this.m_root;
	while((t_node)!=null){
		var t_cmp=this.p_Compare(t_key,t_node.m_key);
		if(t_cmp>0){
			t_node=t_node.m_right;
		}else{
			if(t_cmp<0){
				t_node=t_node.m_left;
			}else{
				return t_node;
			}
		}
	}
	return t_node;
}
c_Map2.prototype.p_Get=function(t_key){
	var t_node=this.p_FindNode(t_key);
	if((t_node)!=null){
		return t_node.m_value;
	}
	return null;
}
function c_StringMap2(){
	c_Map2.call(this);
}
c_StringMap2.prototype=extend_class(c_Map2);
c_StringMap2.m_new=function(){
	c_Map2.m_new.call(this);
	return this;
}
c_StringMap2.prototype.p_Compare=function(t_lhs,t_rhs){
	return string_compare(t_lhs,t_rhs);
}
function c_Node2(){
	Object.call(this);
	this.m_key="";
	this.m_right=null;
	this.m_left=null;
	this.m_value=null;
	this.m_color=0;
	this.m_parent=null;
}
c_Node2.m_new=function(t_key,t_value,t_color,t_parent){
	this.m_key=t_key;
	this.m_value=t_value;
	this.m_color=t_color;
	this.m_parent=t_parent;
	return this;
}
c_Node2.m_new2=function(){
	return this;
}
c_Node2.prototype.p_Count2=function(t_n){
	if((this.m_left)!=null){
		t_n=this.m_left.p_Count2(t_n);
	}
	if((this.m_right)!=null){
		t_n=this.m_right.p_Count2(t_n);
	}
	return t_n+1;
}
function c_Bumpmap(){
	c_Sample.call(this);
	this.m_sphere=null;
}
c_Bumpmap.prototype=extend_class(c_Sample);
c_Bumpmap.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Bumpmap.prototype.p_Preload=function(){
	this.m_Name="Bumpmap";
	return 0;
}
c_Bumpmap.prototype.p_Create=function(){
	var t_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	var t_light=new BABYLON.PointLight("Omni",new BABYLON.Vector3(20.0,100.0,2.0),this.m_Scene);
	this.m_sphere=BABYLON.Mesh.CreateSphere("Sphere",16,3.0,this.m_Scene);
	var t_material=new BABYLON.StandardMaterial("kosh",this.m_Scene);
	t_material.bumpTexture=new BABYLON.Texture("Data/normalMap.jpg",this.m_Scene,false,false);
	t_material.diffuseColor=new BABYLON.Color3(1.0,0.0,0.0);
	this.m_sphere.material=(t_material);
	t_camera.setPosition(new BABYLON.Vector3(-5.0,5.0,0.0));
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
c_Bumpmap.prototype.p_Update=function(){
	c_Sample.prototype.p_Update.call(this);
	this.m_sphere.rotation.y+=0.02;
	return 0;
}
function c_Charting(){
	c_Sample.call(this);
	this.m_scale=.0;
	this.m_operatingSystem_Series=c_List.m_new.call(new c_List);
	this.m_browsers_Series=c_List.m_new.call(new c_List);
	this.m_playgroundSize=0;
	this.m_shadowGenerator=null;
}
c_Charting.prototype=extend_class(c_Sample);
c_Charting.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Charting.prototype.p_Preload=function(){
	this.m_Name="Charting (I have no idea why this test fails so badly, will look into it later - E)";
	return 0;
}
c_Charting.prototype.p_createSeries=function(t_series){
	var t_margin=2.0;
	var t_offset=((this.m_playgroundSize/t_series.p_Count())|0)-t_margin;
	var t_x=((-this.m_playgroundSize/2)|0)+t_offset/2.0;
	var t_=t_series.p_ObjectEnumerator();
	while(t_.p_HasNext()){
		var t_data=t_.p_NextObject();
		var t_bar=BABYLON.Mesh.CreateBox(t_data.m_Label,1.0,this.m_Scene);
		t_bar.scaling=new BABYLON.Vector3(t_offset/2.0,0.0,t_offset/2.0);
		t_bar.position.x=t_x;
		t_bar.position.y=0.0;
		var t_animation=new BABYLON.Animation("anim","scaling",30.0,String(BABYLON.Animation.ANIMATIONTYPE_VECTOR3),0);
		t_animation.setKeys([NAnimationFrame(0,(new BABYLON.Vector3(t_offset/2.0,0.0,t_offset/2.0))),NAnimationFrame(100,(new BABYLON.Vector3(t_offset/2.0,(t_data.m_Value)*this.m_scale,t_offset/2.0)))]);
		t_bar.animations.push(t_animation);
		t_animation=new BABYLON.Animation("anim2","position.y",30.0,String(BABYLON.Animation.ANIMATIONTYPE_FLOAT),0);
		t_animation.setKeys([NAnimationFrame(0,0.0),NAnimationFrame(100,(t_data.m_Value)*this.m_scale/2.0)]);
		t_bar.animations.push(t_animation);
		this.m_Scene.beginAnimation((t_bar),0,100,false,2.0,null);
		t_bar.material=(new BABYLON.StandardMaterial(t_data.m_Label+"mat",this.m_Scene));
		object_downcast((t_bar.material),BABYLON.StandardMaterial).diffuseColor=t_data.m_Color;
		object_downcast((t_bar.material),BABYLON.StandardMaterial).emissiveColor=t_data.m_Color.scale(0.3);
		object_downcast((t_bar.material),BABYLON.StandardMaterial).specularColor=new BABYLON.Color3(0.0,0.0,0.0);
		this.m_shadowGenerator.getShadowMap().renderList.push(t_bar);
		var t_barLegend=BABYLON.Mesh.CreateGround(t_data.m_Label+"Legend",((this.m_playgroundSize/2)|0),t_offset*2.0,1,this.m_Scene,false);
		t_barLegend.position.x=t_x;
		t_barLegend.position.z=((-this.m_playgroundSize/4)|0);
		t_barLegend.rotation.y=1.5707963250000001;
		t_barLegend.material=(new BABYLON.StandardMaterial(t_data.m_Label+"LegendMat",this.m_Scene));
		var t_barLegendTexture=new BABYLON.DynamicTexture("dynamic texture",512,this.m_Scene,true);
		t_barLegendTexture.hasAlpha=true;
		object_downcast((t_barLegend.material),BABYLON.StandardMaterial).diffuseTexture=(t_barLegendTexture);
		object_downcast((t_barLegend.material),BABYLON.StandardMaterial).emissiveColor=new BABYLON.Color3(0.4,0.4,0.4);
		var t_size=t_barLegendTexture.getSize();
		t_barLegendTexture.drawText(t_data.m_Label+" ("+String(t_data.m_Value)+"%)",80.0,t_size.height/2.0+30.0,"bold 50px Segoe UI","white","transparent",false);
		t_x+=t_offset+t_margin;
	}
	return 0;
}
c_Charting.prototype.p_Create=function(){
	var t_light=new BABYLON.DirectionalLight("dir01",new BABYLON.Vector3(0.0,-0.5,1.0),this.m_Scene);
	var t_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	t_camera.setPosition(new BABYLON.Vector3(20.0,70.0,-100.0));
	t_light.position=new BABYLON.Vector3(0.0,25.0,-50.0);
	this.m_scale=0.6;
	this.m_operatingSystem_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Macintosh",12,new BABYLON.Color3(0.0,1.0,0.0)));
	this.m_operatingSystem_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Windows",77,new BABYLON.Color3(1.0,0.0,0.0)));
	this.m_operatingSystem_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Linux",4,new BABYLON.Color3(1.0,0.0,1.0)));
	this.m_operatingSystem_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"iOS",3,new BABYLON.Color3(1.0,1.0,0.0)));
	this.m_operatingSystem_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Android",2,new BABYLON.Color3(0.0,0.0,1.0)));
	this.m_operatingSystem_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Win Phone",1,new BABYLON.Color3(1.0,1.0,1.0)));
	this.m_browsers_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"IE",32,new BABYLON.Color3(0.0,0.0,1.0)));
	this.m_browsers_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Chrome",28,new BABYLON.Color3(1.0,0.0,0.0)));
	this.m_browsers_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Firefox",16,new BABYLON.Color3(1.0,0.0,1.0)));
	this.m_browsers_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Opera",14,new BABYLON.Color3(1.0,1.0,0.0)));
	this.m_browsers_Series.p_AddLast(c_Charting_ChartData.m_new.call(new c_Charting_ChartData,"Safari",10,new BABYLON.Color3(0.0,1.0,1.0)));
	this.m_playgroundSize=100;
	var t_background=BABYLON.Mesh.CreatePlane("background",(this.m_playgroundSize),this.m_Scene);
	t_background.material=(new BABYLON.StandardMaterial("background",this.m_Scene));
	t_background.scaling.y=0.5;
	t_background.position.z=((this.m_playgroundSize/2)|0)-0.5;
	t_background.position.y=((this.m_playgroundSize/4)|0);
	t_background.receiveShadows=true;
	var t_backgroundTexture=new BABYLON.DynamicTexture("dynamic texture",512,this.m_Scene,true);
	object_downcast((t_background.material),BABYLON.StandardMaterial).diffuseTexture=(t_backgroundTexture);
	object_downcast((t_background.material),BABYLON.StandardMaterial).specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_background.material.backFaceCulling=false;
	t_backgroundTexture.drawText("Eternalcoding",10.0,80.0,"bold 70px Segoe UI","white","#555555",false);
	t_backgroundTexture.drawText("- browsers statistics -",10.0,250.0,"35px Segoe UI","white","",false);
	var t_ground=BABYLON.Mesh.CreateGround("ground",(this.m_playgroundSize),(this.m_playgroundSize),1,this.m_Scene,false);
	var t_groundMaterial=new BABYLON.StandardMaterial("ground",this.m_Scene);
	t_groundMaterial.diffuseColor=new BABYLON.Color3(0.5,0.5,0.5);
	t_groundMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_ground.material=(t_groundMaterial);
	t_ground.receiveShadows=true;
	t_ground.position.y=-0.1;
	this.m_shadowGenerator=new BABYLON.ShadowGenerator(1024.0,(t_light));
	t_camera.lowerAlphaLimit=3.14159265;
	t_camera.upperAlphaLimit=6.2831853000000004;
	t_camera.lowerBetaLimit=0.1;
	t_camera.upperBetaLimit=1.55508836175;
	t_camera.lowerRadiusLimit=5.0;
	t_camera.upperRadiusLimit=150.0;
	this.p_createSeries(this.m_browsers_Series);
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
function c_Fog(){
	c_Sample.call(this);
	this.m_sphere0=null;
	this.m_sphere1=null;
	this.m_sphere2=null;
	this.m_alpha=.0;
}
c_Fog.prototype=extend_class(c_Sample);
c_Fog.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Fog.prototype.p_Preload=function(){
	this.m_Name="Fog";
	return 0;
}
c_Fog.prototype.p_Create=function(){
	var t_camera=new BABYLON.FreeCamera("Camera",new BABYLON.Vector3(0.0,0.0,-20.0),this.m_Scene);
	var t_light=new BABYLON.PointLight("Omni",new BABYLON.Vector3(20.0,100.0,2.0),this.m_Scene);
	this.m_sphere0=BABYLON.Mesh.CreateSphere("Sphere0",16,3.0,this.m_Scene);
	this.m_sphere1=BABYLON.Mesh.CreateSphere("Sphere1",16,3.0,this.m_Scene);
	this.m_sphere2=BABYLON.Mesh.CreateSphere("Sphere2",16,3.0,this.m_Scene);
	var t_material0=new BABYLON.StandardMaterial("mat0",this.m_Scene);
	t_material0.diffuseColor=new BABYLON.Color3(1.0,0.0,0.0);
	this.m_sphere0.material=(t_material0);
	this.m_sphere0.position=new BABYLON.Vector3(-10.0,0.0,0.0);
	var t_material1=new BABYLON.StandardMaterial("mat1",this.m_Scene);
	t_material1.diffuseColor=new BABYLON.Color3(1.0,1.0,0.0);
	this.m_sphere1.material=(t_material1);
	var t_material2=new BABYLON.StandardMaterial("mat2",this.m_Scene);
	t_material2.diffuseColor=new BABYLON.Color3(1.0,0.0,1.0);
	this.m_sphere2.material=(t_material2);
	this.m_sphere2.position=new BABYLON.Vector3(10.0,0.0,0.0);
	t_camera.setTarget(new BABYLON.Vector3(0.0,0.0,0.0));
	this.m_Scene.fogMode=BABYLON.Scene.FOGMODE_EXP;
	this.m_Scene.fogDensity=0.1;
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
c_Fog.prototype.p_Update=function(){
	this.m_sphere0.position.z=4.0*Math.cos(this.m_alpha);
	this.m_sphere1.position.z=4.0*Math.sin(this.m_alpha);
	this.m_sphere2.position.z=4.0*Math.cos(this.m_alpha);
	this.m_alpha+=0.1;
	c_Sample.prototype.p_Update.call(this);
	return 0;
}
function c_HeightMap(){
	c_Sample.call(this);
	this.m_camera=null;
}
c_HeightMap.prototype=extend_class(c_Sample);
c_HeightMap.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_HeightMap.prototype.p_Preload=function(){
	this.m_Name="HeightMap";
	return 0;
}
c_HeightMap.prototype.p_Create=function(){
	this.m_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	var t_sun=new BABYLON.PointLight("Omni0",new BABYLON.Vector3(60.0,100.0,10.0),this.m_Scene);
	this.m_camera.setPosition(new BABYLON.Vector3(-20.0,20.0,0.0));
	var t_skybox=BABYLON.Mesh.CreateBox("skyBox",100.0,this.m_Scene);
	var t_skyboxMaterial=new BABYLON.StandardMaterial("skyBox",this.m_Scene);
	t_skyboxMaterial.backFaceCulling=false;
	t_skyboxMaterial.reflectionTexture=(new BABYLON.CubeTexture("data/skybox/skybox",this.m_Scene));
	t_skyboxMaterial.reflectionTexture.coordinatesMode=(BABYLON.Texture.SKYBOX_MODE);
	t_skyboxMaterial.diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_skyboxMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_skybox.material=(t_skyboxMaterial);
	var t_ground=BABYLON.Mesh.CreateGroundFromHeightMap("ground","data/heightMap.png",100.0,100.0,100,0.0,10.0,this.m_Scene,false);
	var t_groundMaterial=new BABYLON.StandardMaterial("ground",this.m_Scene);
	t_groundMaterial.diffuseTexture=new BABYLON.Texture("data/ground.jpg",this.m_Scene,false,false);
	t_groundMaterial.diffuseTexture.uScale=6.0;
	t_groundMaterial.diffuseTexture.vScale=6.0;
	t_groundMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_ground.position.y=-2.05;
	t_ground.material=(t_groundMaterial);
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
c_HeightMap.prototype.p_Update=function(){
	if(this.m_camera.beta<0.1){
		this.m_camera.beta=0.1;
	}else{
		if(this.m_camera.beta>1.4137166925000002){
			this.m_camera.beta=1.4137166925000002;
		}
	}
	if(this.m_camera.radius>30.0){
		this.m_camera.radius=30.0;
	}
	if(this.m_camera.radius<5.0){
		this.m_camera.radius=5.0;
	}
	c_Sample.prototype.p_Update.call(this);
	return 0;
}
function c_Lights(){
	c_Sample.call(this);
	this.m_light0=null;
	this.m_light1=null;
	this.m_light2=null;
	this.m_lightSphere0=null;
	this.m_lightSphere1=null;
	this.m_lightSphere2=null;
	this.m_alpha=.0;
}
c_Lights.prototype=extend_class(c_Sample);
c_Lights.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Lights.prototype.p_Preload=function(){
	this.m_Name="Lights";
	return 0;
}
c_Lights.prototype.p_Create=function(){
	var t_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	this.m_light0=new BABYLON.PointLight("Omni0",new BABYLON.Vector3(0.0,10.0,0.0),this.m_Scene);
	this.m_light1=new BABYLON.PointLight("Omni1",new BABYLON.Vector3(0.0,-10.0,0.0),this.m_Scene);
	this.m_light2=new BABYLON.PointLight("Omni2",new BABYLON.Vector3(10.0,0.0,0.0),this.m_Scene);
	var t_light3=new BABYLON.DirectionalLight("Dir0",new BABYLON.Vector3(1.0,-1.0,0.0),this.m_Scene);
	var t_material=new BABYLON.StandardMaterial("kosh",this.m_Scene);
	var t_sphere=BABYLON.Mesh.CreateSphere("Sphere",16,3.0,this.m_Scene);
	t_camera.setPosition(new BABYLON.Vector3(-10.0,10.0,0.0));
	this.m_lightSphere0=BABYLON.Mesh.CreateSphere("Sphere0",16,0.5,this.m_Scene);
	this.m_lightSphere1=BABYLON.Mesh.CreateSphere("Sphere1",16,0.5,this.m_Scene);
	this.m_lightSphere2=BABYLON.Mesh.CreateSphere("Sphere2",16,0.5,this.m_Scene);
	this.m_lightSphere0.material=(new BABYLON.StandardMaterial("red",this.m_Scene));
	object_downcast((this.m_lightSphere0.material),BABYLON.StandardMaterial).diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	object_downcast((this.m_lightSphere0.material),BABYLON.StandardMaterial).specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	object_downcast((this.m_lightSphere0.material),BABYLON.StandardMaterial).emissiveColor=new BABYLON.Color3(1.0,0.0,0.0);
	this.m_lightSphere1.material=(new BABYLON.StandardMaterial("green",this.m_Scene));
	object_downcast((this.m_lightSphere1.material),BABYLON.StandardMaterial).diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	object_downcast((this.m_lightSphere1.material),BABYLON.StandardMaterial).specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	object_downcast((this.m_lightSphere1.material),BABYLON.StandardMaterial).emissiveColor=new BABYLON.Color3(0.0,1.0,0.0);
	this.m_lightSphere2.material=(new BABYLON.StandardMaterial("blue",this.m_Scene));
	object_downcast((this.m_lightSphere2.material),BABYLON.StandardMaterial).diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	object_downcast((this.m_lightSphere2.material),BABYLON.StandardMaterial).specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	object_downcast((this.m_lightSphere2.material),BABYLON.StandardMaterial).emissiveColor=new BABYLON.Color3(0.0,0.0,1.0);
	t_material.diffuseColor=new BABYLON.Color3(1.0,1.0,1.0);
	t_sphere.material=(t_material);
	this.m_light0.diffuse=new BABYLON.Color3(1.0,0.0,0.0);
	this.m_light0.specular=new BABYLON.Color3(1.0,0.0,0.0);
	this.m_light1.diffuse=new BABYLON.Color3(0.0,1.0,0.0);
	this.m_light1.specular=new BABYLON.Color3(0.0,1.0,0.0);
	this.m_light2.diffuse=new BABYLON.Color3(0.0,0.0,1.0);
	this.m_light2.specular=new BABYLON.Color3(0.0,0.0,1.0);
	t_light3.diffuse=new BABYLON.Color3(1.0,1.0,1.0);
	t_light3.specular=new BABYLON.Color3(1.0,1.0,1.0);
	var t_skybox=BABYLON.Mesh.CreateBox("skyBox",100.0,this.m_Scene);
	var t_skyboxMaterial=new BABYLON.StandardMaterial("skyBox",this.m_Scene);
	t_skyboxMaterial.backFaceCulling=false;
	t_skyboxMaterial.reflectionTexture=(new BABYLON.CubeTexture("data/skybox/skybox",this.m_Scene));
	t_skyboxMaterial.reflectionTexture.coordinatesMode=(BABYLON.Texture.SKYBOX_MODE);
	t_skyboxMaterial.diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_skyboxMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_skybox.material=(t_skyboxMaterial);
	var t_alpha=0;
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
c_Lights.prototype.p_Update=function(){
	this.m_light0.position=new BABYLON.Vector3(10.0*Math.sin(this.m_alpha),0.0,10.0*Math.cos(this.m_alpha));
	this.m_light1.position=new BABYLON.Vector3(10.0*Math.sin(this.m_alpha),0.0,-10.0*Math.cos(this.m_alpha));
	this.m_light2.position=new BABYLON.Vector3(10.0*Math.cos(this.m_alpha),0.0,10.0*Math.sin(this.m_alpha));
	this.m_lightSphere0.position=this.m_light0.position;
	this.m_lightSphere1.position=this.m_light1.position;
	this.m_lightSphere2.position=this.m_light2.position;
	this.m_alpha+=0.01;
	c_Sample.prototype.p_Update.call(this);
	return 0;
}
function c_MultiMat(){
	c_Sample.call(this);
}
c_MultiMat.prototype=extend_class(c_Sample);
c_MultiMat.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_MultiMat.prototype.p_Preload=function(){
	this.m_Name="Multi Material";
	return 0;
}
c_MultiMat.prototype.p_Create=function(){
	var t_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	var t_light=new BABYLON.PointLight("Omni",new BABYLON.Vector3(20.0,100.0,2.0),this.m_Scene);
	var t_material0=new BABYLON.StandardMaterial("mat0",this.m_Scene);
	t_material0.diffuseColor=new BABYLON.Color3(1.0,0.0,0.0);
	t_material0.bumpTexture=new BABYLON.Texture("Data/normalMap.jpg",this.m_Scene,false,false);
	var t_material1=new BABYLON.StandardMaterial("mat1",this.m_Scene);
	t_material1.diffuseColor=new BABYLON.Color3(0.0,0.0,1.0);
	var t_material2=new BABYLON.StandardMaterial("mat2",this.m_Scene);
	t_material2.emissiveColor=new BABYLON.Color3(0.4,0.0,0.4);
	var t_multimat=new BABYLON.MultiMaterial("multi",this.m_Scene);
	t_multimat.subMaterials.push(t_material0);
	t_multimat.subMaterials.push(t_material1);
	t_multimat.subMaterials.push(t_material2);
	var t_sphere=BABYLON.Mesh.CreateSphere("Sphere0",16,3.0,this.m_Scene);
	t_sphere.material=(t_multimat);
	t_sphere.subMeshes=[];
	var t_verticesCount=t_sphere.getTotalVertices();
	t_sphere.subMeshes.push(new BABYLON.SubMesh(0.0,0.0,(t_verticesCount),0.0,900.0,t_sphere));
	t_sphere.subMeshes.push(new BABYLON.SubMesh(1.0,0.0,(t_verticesCount),900.0,900.0,t_sphere));
	t_sphere.subMeshes.push(new BABYLON.SubMesh(2.0,0.0,(t_verticesCount),1800.0,2088.0,t_sphere));
	t_camera.setPosition(new BABYLON.Vector3(-3.0,3.0,0.0));
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
function c_Octree(){
	c_Sample.call(this);
}
c_Octree.prototype=extend_class(c_Sample);
c_Octree.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Octree.prototype.p_Preload=function(){
	this.m_Name="Octree";
	return 0;
}
c_Octree.prototype.p_Create=function(){
	var t_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	var t_light0=new BABYLON.PointLight("Omni0",new BABYLON.Vector3(0.0,10.0,0.0),this.m_Scene);
	var t_material=new BABYLON.StandardMaterial("kosh",this.m_Scene);
	var t_sphere=BABYLON.Mesh.CreateSphere("sphere0",16,1.0,this.m_Scene);
	t_camera.setPosition(new BABYLON.Vector3(-10.0,10.0,0.0));
	t_material.diffuseColor=new BABYLON.Color3(0.5,0.5,0.5);
	t_material.specularColor=new BABYLON.Color3(1.0,1.0,1.0);
	t_material.specularPower=32.0;
	t_material.checkReadyOnEveryCall=false;
	t_sphere.material=(t_material);
	this.m_Scene.fogMode=BABYLON.Scene.FOGMODE_EXP;
	this.m_Scene.fogDensity=0.05;
	var t_playgroundSize=50;
	for(var t_index=0;t_index<=7999;t_index=t_index+1){
		var t_clone=t_sphere.clone("sphere"+String(t_index+1),null,true);
		var t_scale=bb_random_Rnd()*0.8+0.6;
		t_clone.scaling=new BABYLON.Vector3(t_scale,t_scale,t_scale);
		t_clone.position=new BABYLON.Vector3(bb_random_Rnd()*2.0*(t_playgroundSize)-(t_playgroundSize),bb_random_Rnd()*2.0*(t_playgroundSize)-(t_playgroundSize),bb_random_Rnd()*2.0*(t_playgroundSize)-(t_playgroundSize));
	}
	t_sphere.setEnabled(false);
	this.m_Scene.createOrUpdateSelectionOctree();
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
function c_Shadows(){
	c_Sample.call(this);
	this.m_camera=null;
	this.m_torus=null;
	this.m_torus2=null;
}
c_Shadows.prototype=extend_class(c_Sample);
c_Shadows.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Shadows.prototype.p_Preload=function(){
	this.m_Name="Shadows";
	return 0;
}
c_Shadows.prototype.p_Create=function(){
	this.m_camera=new BABYLON.ArcRotateCamera("Camera",0.0,0.0,10.0,BABYLON.Vector3.Zero(),this.m_Scene);
	var t_light=new BABYLON.DirectionalLight("dir01",new BABYLON.Vector3(0.0,-1.0,-0.2),this.m_Scene);
	var t_light2=new BABYLON.DirectionalLight("dir02",new BABYLON.Vector3(-1.0,-2.0,-1.0),this.m_Scene);
	t_light.position=new BABYLON.Vector3(0.0,30.0,0.0);
	t_light2.position=new BABYLON.Vector3(10.0,20.0,10.0);
	t_light.intensity=0.6;
	t_light2.intensity=0.6;
	this.m_camera.setPosition(new BABYLON.Vector3(-20.0,20.0,0.0));
	var t_skybox=BABYLON.Mesh.CreateBox("skyBox",1000.0,this.m_Scene);
	var t_skyboxMaterial=new BABYLON.StandardMaterial("skyBox",this.m_Scene);
	t_skyboxMaterial.backFaceCulling=false;
	t_skyboxMaterial.reflectionTexture=(new BABYLON.CubeTexture("data/skybox/night",this.m_Scene));
	t_skyboxMaterial.reflectionTexture.coordinatesMode=(BABYLON.Texture.SKYBOX_MODE);
	t_skyboxMaterial.diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_skyboxMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_skybox.material=(t_skyboxMaterial);
	var t_ground=BABYLON.Mesh.CreateGround("ground",1000.0,1000.0,1,this.m_Scene,false);
	var t_groundMaterial=new BABYLON.StandardMaterial("ground",this.m_Scene);
	t_groundMaterial.diffuseTexture=new BABYLON.Texture("data/assets/grass.jpg",this.m_Scene,false,false);
	t_groundMaterial.diffuseTexture.uScale=60.0;
	t_groundMaterial.diffuseTexture.vScale=60.0;
	t_groundMaterial.diffuseColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_groundMaterial.specularColor=new BABYLON.Color3(0.0,0.0,0.0);
	t_ground.position.y=-2.05;
	t_ground.material=(t_groundMaterial);
	this.m_torus=BABYLON.Mesh.CreateTorus("torus",8.0,2.0,32.0,this.m_Scene,false);
	this.m_torus.position.y=6.0;
	this.m_torus2=BABYLON.Mesh.CreateTorus("torus2",4.0,1.0,32.0,this.m_Scene,false);
	this.m_torus2.position.y=6.0;
	var t_shadowGenerator=new BABYLON.ShadowGenerator(512.0,(t_light));
	t_shadowGenerator.getShadowMap().renderList.push(this.m_torus);
	t_shadowGenerator.getShadowMap().renderList.push(this.m_torus2);
	var t_shadowGenerator2=new BABYLON.ShadowGenerator(512.0,(t_light2));
	t_shadowGenerator2.getShadowMap().renderList.push(this.m_torus);
	t_shadowGenerator2.getShadowMap().renderList.push(this.m_torus2);
	t_shadowGenerator2.useVarianceShadowMap=false;
	t_ground.receiveShadows=true;
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
c_Shadows.prototype.p_Update=function(){
	if(this.m_camera.beta<0.1){
		this.m_camera.beta=0.1;
	}else{
		if(this.m_camera.beta>1.55508836175){
			this.m_camera.beta=1.55508836175;
		}
	}
	if(this.m_camera.radius>150.0){
		this.m_camera.radius=150.0;
	}
	if(this.m_camera.radius<5.0){
		this.m_camera.radius=5.0;
	}
	this.m_torus.rotation.x+=0.01;
	this.m_torus.rotation.z+=0.02;
	this.m_torus2.rotation.x+=0.02;
	this.m_torus2.rotation.y+=0.01;
	c_Sample.prototype.p_Update.call(this);
	return 0;
}
function c_Test(){
	c_Sample.call(this);
	this.m_material=null;
	this.m_material2=null;
	this.m_material3=null;
	this.m_box=null;
	this.m_cylinder=null;
	this.m_torus=null;
	this.m_sphere=null;
	this.m_plane=null;
	this.m_planeTexture=null;
	this.m_spriteManager=null;
	this.m_background0=null;
	this.m_spaceDek=null;
	this.m_spaceDek2=null;
	this.m_spaceDek3=null;
	this.m_alpha=.0;
	this.m_frameCount=0;
	this.m_reloop=0;
	this.m_startDate=0;
	this.m_count=0;
}
c_Test.prototype=extend_class(c_Sample);
c_Test.m_new=function(){
	c_Sample.m_new.call(this);
	return this;
}
c_Test.prototype.p_Preload=function(){
	this.m_Name="Big Test!";
	this.m_Importer.p_LoadMesh("Vaisseau","SpaceDek/SpaceDek.babylon");
	return 0;
}
c_Test.prototype.p_Create=function(){
	var t_camera2=new BABYLON.FreeCamera("Camera",new BABYLON.Vector3(0.0,0.0,-10.0),this.m_Scene);
	var t_light=new BABYLON.PointLight("Omni",new BABYLON.Vector3(20.0,100.0,2.0),this.m_Scene);
	this.m_material=new BABYLON.StandardMaterial("leaves",this.m_Scene);
	this.m_material2=new BABYLON.StandardMaterial("kosh transparent",this.m_Scene);
	this.m_material3=new BABYLON.StandardMaterial("kosh",this.m_Scene);
	var t_planeMaterial=new BABYLON.StandardMaterial("plane material",this.m_Scene);
	this.m_box=BABYLON.Mesh.CreateBox("Box",1.0,this.m_Scene);
	this.m_cylinder=BABYLON.Mesh.CreateCylinder("Cylinder",2.0,0.8,0.0,32.0,this.m_Scene,false);
	this.m_torus=BABYLON.Mesh.CreateTorus("Torus",1.0,0.5,16.0,this.m_Scene,false);
	this.m_sphere=BABYLON.Mesh.CreateSphere("Sphere",16,3.0,this.m_Scene);
	this.m_plane=BABYLON.Mesh.CreatePlane("plane",3.0,this.m_Scene);
	this.m_material.diffuseTexture=new BABYLON.Texture("data/Assets/Tree.png",this.m_Scene,false,false);
	this.m_material.diffuseTexture.hasAlpha=true;
	this.m_material.backFaceCulling=false;
	this.m_material2.diffuseTexture=new BABYLON.Texture("data/Assets/kosh.jpg",this.m_Scene,false,false);
	this.m_material2.alpha=0.5;
	this.m_material2.backFaceCulling=false;
	this.m_material3.diffuseTexture=new BABYLON.Texture("data/Assets/kosh.jpg",this.m_Scene,false,false);
	t_planeMaterial.backFaceCulling=false;
	this.m_planeTexture=new BABYLON.DynamicTexture("dynamic texture",512,this.m_Scene,true);
	this.m_planeTexture.hasAlpha=true;
	t_planeMaterial.diffuseTexture=(this.m_planeTexture);
	this.m_plane.billboardMode=(BABYLON.Mesh.BILLBOARDMODE_ALL);
	this.m_box.material=(this.m_material);
	this.m_cylinder.material=(this.m_material3);
	this.m_torus.material=(this.m_material2);
	this.m_sphere.material=(this.m_material);
	this.m_plane.material=(t_planeMaterial);
	this.m_cylinder.position.x=this.m_cylinder.position.x+13.0;
	this.m_torus.position.x=this.m_torus.position.x-3.0;
	this.m_torus.parent=this.m_sphere;
	this.m_sphere.position.z=3.0;
	this.m_plane.position=new BABYLON.Vector3(0.0,7.0,0.0);
	var t_particleSystem=new BABYLON.ParticleSystem("particles",4000.0,this.m_Scene);
	t_particleSystem.particleTexture=new BABYLON.Texture("data/Assets/Flare.png",this.m_Scene,false,false);
	t_particleSystem.minAngularSpeed=-0.5;
	t_particleSystem.maxAngularSpeed=0.5;
	t_particleSystem.minSize=0.5;
	t_particleSystem.maxSize=1.0;
	t_particleSystem.minLifeTime=0.5;
	t_particleSystem.maxLifeTime=1.0;
	t_particleSystem.emitter=(this.m_torus);
	t_particleSystem.emitRate=300.0;
	t_particleSystem.blendMode=BABYLON.ParticleSystem.BLENDMODE_ONEONE;
	t_particleSystem.minEmitBox=new BABYLON.Vector3(0.0,0.1,0.0);
	t_particleSystem.maxEmitBox=new BABYLON.Vector3(0.0,-0.1,0.0);
	t_particleSystem.gravity=new BABYLON.Vector3(0.0,-0.5,0.0);
	t_particleSystem.start();
	var t_mirror=BABYLON.Mesh.CreateBox("Mirror",1.0,this.m_Scene);
	t_mirror.scaling=new BABYLON.Vector3(100.0,0.01,100.0);
	t_mirror.material=(new BABYLON.StandardMaterial("mirror",this.m_Scene));
	object_downcast((t_mirror.material),BABYLON.StandardMaterial).diffuseColor=new BABYLON.Color3(0.4,0.4,0.4);
	var t_mTexture=new BABYLON.MirrorTexture("mirror",512,this.m_Scene,true);
	object_downcast((t_mirror.material),BABYLON.StandardMaterial).reflectionTexture=(t_mTexture);
	t_mTexture.mirrorPlane=new BABYLON.Plane(0.0,-1.0,0.0,-5.0);
	t_mTexture.renderList=[this.m_box,this.m_cylinder,this.m_torus,this.m_sphere];
	t_mTexture.level=0.5;
	t_mirror.position=new BABYLON.Vector3(0.0,-5.0,0.0);
	this.m_spriteManager=new BABYLON.SpriteManager("MonsterA","data/Assets/Player.png",500.0,64.0,this.m_Scene);
	for(var t_index=0;t_index<=499;t_index=t_index+1){
		var t_sprite=new BABYLON.Sprite("toto",this.m_spriteManager);
		t_sprite.position.y=-4.5;
		t_sprite.position.z=bb_random_Rnd()*20.0-10.0;
		t_sprite.position.x=bb_random_Rnd()*20.0-10.0;
		t_sprite.dir=((Math.floor(bb_random_Rnd()*2.0-1.0))|0);
		t_sprite.invertU=t_sprite.dir<0;
		t_sprite.playAnimation(0,9,true,100.0);
		t_sprite.color=new BABYLON.Color4(1.0,0.0,0.0,1.0);
	}
	this.m_background0=new BABYLON.Layer("back0","Data/Assets/Layer0_0.png",this.m_Scene);
	var t_background1=new BABYLON.Layer("back1","Data/Assets/Layer1_0.png",this.m_Scene);
	var t_foreground=new BABYLON.Layer("back0","Data/Assets/Layer2_0.png",this.m_Scene,true,new BABYLON.Color4(1.0,0.0,0.0,1.0));
	this.m_spaceDek=this.m_Importer.m_Meshes.p_Get("Vaisseau").m_Meshes[0];
	for(var t_index2=0;t_index2<=this.m_Importer.m_Meshes.p_Get("Vaisseau").m_Meshes.length-1;t_index2=t_index2+1){
		object_downcast((object_downcast((t_mirror.material),BABYLON.StandardMaterial).reflectionTexture),BABYLON.MirrorTexture).renderList.push(this.m_Importer.m_Meshes.p_Get("Vaisseau").m_Meshes[t_index2]);
	}
	this.m_spaceDek.position=new BABYLON.Vector3(0.0,20.0,0.0);
	this.m_spaceDek.scaling=new BABYLON.Vector3(0.3,0.3,0.3);
	this.m_spaceDek2=this.m_spaceDek.clone("Vaisseau 2",null,false);
	this.m_spaceDek2.position=new BABYLON.Vector3(40.0,20.0,0.0);
	this.m_spaceDek2.scaling=new BABYLON.Vector3(0.3,0.3,0.3);
	this.m_spaceDek3=this.m_spaceDek2.clone("Vaisseau 3",null,false);
	this.m_spaceDek3.position=new BABYLON.Vector3(-50.0,20.0,0.0);
	this.m_spaceDek3.scaling=new BABYLON.Vector3(0.3,0.3,0.3);
	object_downcast((object_downcast((t_mirror.material),BABYLON.StandardMaterial).reflectionTexture),BABYLON.MirrorTexture).renderList.push(this.m_spaceDek3);
	var t_children=this.m_spaceDek3.getDescendants();
	for(var t_index3=0;t_index3<=t_children.length-1;t_index3=t_index3+1){
		object_downcast((object_downcast((t_mirror.material),BABYLON.StandardMaterial).reflectionTexture),BABYLON.MirrorTexture).renderList.push(t_children[t_index3]);
	}
	this.m_spaceDek3.material=(object_downcast((this.m_spaceDek2.material),BABYLON.StandardMaterial).clone("Vaisseau 3 mat"));
	object_downcast((this.m_spaceDek3.material),BABYLON.StandardMaterial).emissiveColor=new BABYLON.Color3(1.0,0.0,0.0);
	this.m_Scene.beginAnimation((this.m_spaceDek3),0,100,true,1.0,null);
	this.m_Scene.activeCamera.attachControl(this.m_Game.m_Canvas2D);
	return 0;
}
c_Test.prototype.p_Update=function(){
	this.m_box.rotation.y+=0.01;
	this.m_cylinder.rotation.x+=0.01;
	this.m_sphere.rotation.y+=0.02;
	this.m_torus.rotation.z+=0.01;
	this.m_alpha+=0.01;
	if((this.m_spaceDek)!=null){
		this.m_spaceDek.rotation.y+=0.01;
	}
	if((this.m_spaceDek2)!=null){
		this.m_spaceDek2.rotation.y-=0.01;
	}
	if((this.m_spaceDek3)!=null){
		this.m_spaceDek3.rotation.y-=0.01;
	}
	if(this.m_torus.intersectsMesh(this.m_box,true)){
		this.m_material2.alpha=1.0;
		this.m_torus.scaling=new BABYLON.Vector3(2.0,2.0,2.0);
	}else{
		this.m_material2.alpha=0.5;
		this.m_torus.scaling=new BABYLON.Vector3(1.0,1.0,1.0);
	}
	this.m_frameCount+=1;
	if(this.m_frameCount>3){
		this.m_frameCount=0;
		this.m_reloop+=1;
		for(var t_index=0;t_index<=this.m_spriteManager.sprites.length-1;t_index=t_index+1){
			var t_sprite=this.m_spriteManager.sprites[t_index];
			t_sprite.position.x-=0.1*(t_sprite.dir);
			if(this.m_reloop>20){
				t_sprite.dir*=-1;
				t_sprite.invertU=!t_sprite.invertU;
			}
		}
		if(this.m_reloop>20){
			this.m_reloop=0;
		}
	}
	var t_diff=bb_app_Millisecs()-this.m_startDate;
	if(t_diff>200){
		this.m_startDate=bb_app_Millisecs();
		var t_textureContext=this.m_planeTexture.getContext();
		var t_size=this.m_planeTexture.getSize();
		var t_text=String(this.m_count);
		t_textureContext.clearRect(0,0,((t_size.width)|0),((t_size.height)|0));
		t_textureContext.font="bold 120px Calibri";
		var t_textSize=t_textureContext.measureText(t_text);
		t_textureContext.fillStyle="white";
		t_textureContext.fillText(t_text,(t_size.width-t_textSize.width)/2.0,(t_size.height-120.0)/2.0);
		this.m_planeTexture.update();
		this.m_count+=1;
	}
	this.m_background0.texture.uOffset+=0.001;
	c_Sample.prototype.p_Update.call(this);
	return 0;
}
var bb_samples_CurrentState=0;
function bb_samples_NextState(){
	bb_samples_CurrentState=(bb_samples_CurrentState+1) % bb_samples_BGame.p_StateCount();
	bb_samples_BGame.p_StartState(String(bb_samples_CurrentState),true);
	return 0;
}
function bbMain(){
	bb_samples_BGame=c_BabylonGame.m_new.call(new c_BabylonGame,null,"GameCanvas3D",true,60);
	bb_samples_BGame.p_AddState("0",(c_Bones.m_new.call(new c_Bones)));
	bb_samples_BGame.p_AddState("1",(c_Bumpmap.m_new.call(new c_Bumpmap)));
	bb_samples_BGame.p_AddState("2",(c_Charting.m_new.call(new c_Charting)));
	bb_samples_BGame.p_AddState("3",(c_Fog.m_new.call(new c_Fog)));
	bb_samples_BGame.p_AddState("4",(c_HeightMap.m_new.call(new c_HeightMap)));
	bb_samples_BGame.p_AddState("5",(c_Lights.m_new.call(new c_Lights)));
	bb_samples_BGame.p_AddState("6",(c_MultiMat.m_new.call(new c_MultiMat)));
	bb_samples_BGame.p_AddState("7",(c_Octree.m_new.call(new c_Octree)));
	bb_samples_BGame.p_AddState("8",(c_Shadows.m_new.call(new c_Shadows)));
	bb_samples_BGame.p_AddState("9",(c_Test.m_new.call(new c_Test)));
	bb_samples_CurrentState=bb_samples_BGame.p_StateCount()-2;
	bb_samples_NextState();
	return 0;
}
var bb_graphics_device=null;
function bb_graphics_SetGraphicsDevice(t_dev){
	bb_graphics_device=t_dev;
	return 0;
}
function c_Image(){
	Object.call(this);
	this.m_surface=null;
	this.m_width=0;
	this.m_height=0;
	this.m_frames=[];
	this.m_flags=0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_source=null;
}
c_Image.m_DefaultFlags=0;
c_Image.m_new=function(){
	return this;
}
c_Image.prototype.p_SetHandle=function(t_tx,t_ty){
	this.m_tx=t_tx;
	this.m_ty=t_ty;
	this.m_flags=this.m_flags&-2;
	return 0;
}
c_Image.prototype.p_ApplyFlags=function(t_iflags){
	this.m_flags=t_iflags;
	if((this.m_flags&2)!=0){
		var t_=this.m_frames;
		var t_2=0;
		while(t_2<t_.length){
			var t_f=t_[t_2];
			t_2=t_2+1;
			t_f.m_x+=1;
		}
		this.m_width-=2;
	}
	if((this.m_flags&4)!=0){
		var t_3=this.m_frames;
		var t_4=0;
		while(t_4<t_3.length){
			var t_f2=t_3[t_4];
			t_4=t_4+1;
			t_f2.m_y+=1;
		}
		this.m_height-=2;
	}
	if((this.m_flags&1)!=0){
		this.p_SetHandle((this.m_width)/2.0,(this.m_height)/2.0);
	}
	if(this.m_frames.length==1 && this.m_frames[0].m_x==0 && this.m_frames[0].m_y==0 && this.m_width==this.m_surface.Width() && this.m_height==this.m_surface.Height()){
		this.m_flags|=65536;
	}
	return 0;
}
c_Image.prototype.p_Init=function(t_surf,t_nframes,t_iflags){
	this.m_surface=t_surf;
	this.m_width=((this.m_surface.Width()/t_nframes)|0);
	this.m_height=this.m_surface.Height();
	this.m_frames=new_object_array(t_nframes);
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		this.m_frames[t_i]=c_Frame.m_new.call(new c_Frame,t_i*this.m_width,0);
	}
	this.p_ApplyFlags(t_iflags);
	return this;
}
c_Image.prototype.p_Grab=function(t_x,t_y,t_iwidth,t_iheight,t_nframes,t_iflags,t_source){
	this.m_source=t_source;
	this.m_surface=t_source.m_surface;
	this.m_width=t_iwidth;
	this.m_height=t_iheight;
	this.m_frames=new_object_array(t_nframes);
	var t_ix=t_x;
	var t_iy=t_y;
	for(var t_i=0;t_i<t_nframes;t_i=t_i+1){
		if(t_ix+this.m_width>t_source.m_width){
			t_ix=0;
			t_iy+=this.m_height;
		}
		if(t_ix+this.m_width>t_source.m_width || t_iy+this.m_height>t_source.m_height){
			error("Image frame outside surface");
		}
		this.m_frames[t_i]=c_Frame.m_new.call(new c_Frame,t_ix+t_source.m_frames[0].m_x,t_iy+t_source.m_frames[0].m_y);
		t_ix+=this.m_width;
	}
	this.p_ApplyFlags(t_iflags);
	return this;
}
c_Image.prototype.p_GrabImage=function(t_x,t_y,t_width,t_height,t_frames,t_flags){
	if(this.m_frames.length!=1){
		return null;
	}
	return (c_Image.m_new.call(new c_Image)).p_Grab(t_x,t_y,t_width,t_height,t_frames,t_flags,this);
}
c_Image.prototype.p_Width=function(){
	return this.m_width;
}
c_Image.prototype.p_Height=function(){
	return this.m_height;
}
c_Image.prototype.p_Frames=function(){
	return this.m_frames.length;
}
function c_GraphicsContext(){
	Object.call(this);
	this.m_defaultFont=null;
	this.m_font=null;
	this.m_firstChar=0;
	this.m_matrixSp=0;
	this.m_ix=1.0;
	this.m_iy=.0;
	this.m_jx=.0;
	this.m_jy=1.0;
	this.m_tx=.0;
	this.m_ty=.0;
	this.m_tformed=0;
	this.m_matDirty=0;
	this.m_color_r=.0;
	this.m_color_g=.0;
	this.m_color_b=.0;
	this.m_alpha=.0;
	this.m_blend=0;
	this.m_scissor_x=.0;
	this.m_scissor_y=.0;
	this.m_scissor_width=.0;
	this.m_scissor_height=.0;
	this.m_matrixStack=new_number_array(192);
}
c_GraphicsContext.m_new=function(){
	return this;
}
c_GraphicsContext.prototype.p_Validate=function(){
	if((this.m_matDirty)!=0){
		bb_graphics_renderDevice.SetMatrix(bb_graphics_context.m_ix,bb_graphics_context.m_iy,bb_graphics_context.m_jx,bb_graphics_context.m_jy,bb_graphics_context.m_tx,bb_graphics_context.m_ty);
		this.m_matDirty=0;
	}
	return 0;
}
var bb_graphics_context=null;
function bb_data_FixDataPath(t_path){
	var t_i=t_path.indexOf(":/",0);
	if(t_i!=-1 && t_path.indexOf("/",0)==t_i+1){
		return t_path;
	}
	if(string_startswith(t_path,"./") || string_startswith(t_path,"/")){
		return t_path;
	}
	return "monkey://data/"+t_path;
}
function c_Frame(){
	Object.call(this);
	this.m_x=0;
	this.m_y=0;
}
c_Frame.m_new=function(t_x,t_y){
	this.m_x=t_x;
	this.m_y=t_y;
	return this;
}
c_Frame.m_new2=function(){
	return this;
}
function bb_graphics_LoadImage(t_path,t_frameCount,t_flags){
	var t_surf=bb_graphics_device.LoadSurface(bb_data_FixDataPath(t_path));
	if((t_surf)!=null){
		return (c_Image.m_new.call(new c_Image)).p_Init(t_surf,t_frameCount,t_flags);
	}
	return null;
}
function bb_graphics_LoadImage2(t_path,t_frameWidth,t_frameHeight,t_frameCount,t_flags){
	var t_atlas=bb_graphics_LoadImage(t_path,1,0);
	if((t_atlas)!=null){
		return t_atlas.p_GrabImage(0,0,t_frameWidth,t_frameHeight,t_frameCount,t_flags);
	}
	return null;
}
function bb_graphics_SetFont(t_font,t_firstChar){
	if(!((t_font)!=null)){
		if(!((bb_graphics_context.m_defaultFont)!=null)){
			bb_graphics_context.m_defaultFont=bb_graphics_LoadImage("mojo_font.png",96,2);
		}
		t_font=bb_graphics_context.m_defaultFont;
		t_firstChar=32;
	}
	bb_graphics_context.m_font=t_font;
	bb_graphics_context.m_firstChar=t_firstChar;
	return 0;
}
var bb_audio_device=null;
function bb_audio_SetAudioDevice(t_dev){
	bb_audio_device=t_dev;
	return 0;
}
function c_InputDevice(){
	Object.call(this);
	this.m__joyStates=new_object_array(4);
	this.m__keyDown=new_bool_array(512);
	this.m__keyHitPut=0;
	this.m__keyHitQueue=new_number_array(33);
	this.m__keyHit=new_number_array(512);
	this.m__charGet=0;
	this.m__charPut=0;
	this.m__charQueue=new_number_array(32);
	this.m__mouseX=.0;
	this.m__mouseY=.0;
	this.m__touchX=new_number_array(32);
	this.m__touchY=new_number_array(32);
	this.m__accelX=.0;
	this.m__accelY=.0;
	this.m__accelZ=.0;
}
c_InputDevice.m_new=function(){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		this.m__joyStates[t_i]=c_JoyState.m_new.call(new c_JoyState);
	}
	return this;
}
c_InputDevice.prototype.p_PutKeyHit=function(t_key){
	if(this.m__keyHitPut==this.m__keyHitQueue.length){
		return;
	}
	this.m__keyHit[t_key]+=1;
	this.m__keyHitQueue[this.m__keyHitPut]=t_key;
	this.m__keyHitPut+=1;
}
c_InputDevice.prototype.p_BeginUpdate=function(){
	for(var t_i=0;t_i<4;t_i=t_i+1){
		var t_state=this.m__joyStates[t_i];
		if(!BBGame.Game().PollJoystick(t_i,t_state.m_joyx,t_state.m_joyy,t_state.m_joyz,t_state.m_buttons)){
			break;
		}
		for(var t_j=0;t_j<32;t_j=t_j+1){
			var t_key=256+t_i*32+t_j;
			if(t_state.m_buttons[t_j]){
				if(!this.m__keyDown[t_key]){
					this.m__keyDown[t_key]=true;
					this.p_PutKeyHit(t_key);
				}
			}else{
				this.m__keyDown[t_key]=false;
			}
		}
	}
}
c_InputDevice.prototype.p_EndUpdate=function(){
	for(var t_i=0;t_i<this.m__keyHitPut;t_i=t_i+1){
		this.m__keyHit[this.m__keyHitQueue[t_i]]=0;
	}
	this.m__keyHitPut=0;
	this.m__charGet=0;
	this.m__charPut=0;
}
c_InputDevice.prototype.p_KeyEvent=function(t_event,t_data){
	var t_1=t_event;
	if(t_1==1){
		if(!this.m__keyDown[t_data]){
			this.m__keyDown[t_data]=true;
			this.p_PutKeyHit(t_data);
			if(t_data==1){
				this.m__keyDown[384]=true;
				this.p_PutKeyHit(384);
			}else{
				if(t_data==384){
					this.m__keyDown[1]=true;
					this.p_PutKeyHit(1);
				}
			}
		}
	}else{
		if(t_1==2){
			if(this.m__keyDown[t_data]){
				this.m__keyDown[t_data]=false;
				if(t_data==1){
					this.m__keyDown[384]=false;
				}else{
					if(t_data==384){
						this.m__keyDown[1]=false;
					}
				}
			}
		}else{
			if(t_1==3){
				if(this.m__charPut<this.m__charQueue.length){
					this.m__charQueue[this.m__charPut]=t_data;
					this.m__charPut+=1;
				}
			}
		}
	}
}
c_InputDevice.prototype.p_MouseEvent=function(t_event,t_data,t_x,t_y){
	var t_2=t_event;
	if(t_2==4){
		this.p_KeyEvent(1,1+t_data);
	}else{
		if(t_2==5){
			this.p_KeyEvent(2,1+t_data);
			return;
		}else{
			if(t_2==6){
			}else{
				return;
			}
		}
	}
	this.m__mouseX=t_x;
	this.m__mouseY=t_y;
	this.m__touchX[0]=t_x;
	this.m__touchY[0]=t_y;
}
c_InputDevice.prototype.p_TouchEvent=function(t_event,t_data,t_x,t_y){
	var t_3=t_event;
	if(t_3==7){
		this.p_KeyEvent(1,384+t_data);
	}else{
		if(t_3==8){
			this.p_KeyEvent(2,384+t_data);
			return;
		}else{
			if(t_3==9){
			}else{
				return;
			}
		}
	}
	this.m__touchX[t_data]=t_x;
	this.m__touchY[t_data]=t_y;
	if(t_data==0){
		this.m__mouseX=t_x;
		this.m__mouseY=t_y;
	}
}
c_InputDevice.prototype.p_MotionEvent=function(t_event,t_data,t_x,t_y,t_z){
	var t_4=t_event;
	if(t_4==10){
	}else{
		return;
	}
	this.m__accelX=t_x;
	this.m__accelY=t_y;
	this.m__accelZ=t_z;
}
c_InputDevice.prototype.p_KeyHit=function(t_key){
	if(t_key>0 && t_key<512){
		return this.m__keyHit[t_key];
	}
	return 0;
}
function c_JoyState(){
	Object.call(this);
	this.m_joyx=new_number_array(2);
	this.m_joyy=new_number_array(2);
	this.m_joyz=new_number_array(2);
	this.m_buttons=new_bool_array(32);
}
c_JoyState.m_new=function(){
	return this;
}
var bb_input_device=null;
function bb_input_SetInputDevice(t_dev){
	bb_input_device=t_dev;
	return 0;
}
var bb_graphics_renderDevice=null;
function bb_graphics_SetMatrix(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	bb_graphics_context.m_ix=t_ix;
	bb_graphics_context.m_iy=t_iy;
	bb_graphics_context.m_jx=t_jx;
	bb_graphics_context.m_jy=t_jy;
	bb_graphics_context.m_tx=t_tx;
	bb_graphics_context.m_ty=t_ty;
	bb_graphics_context.m_tformed=((t_ix!=1.0 || t_iy!=0.0 || t_jx!=0.0 || t_jy!=1.0 || t_tx!=0.0 || t_ty!=0.0)?1:0);
	bb_graphics_context.m_matDirty=1;
	return 0;
}
function bb_graphics_SetMatrix2(t_m){
	bb_graphics_SetMatrix(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
function bb_graphics_SetColor(t_r,t_g,t_b){
	bb_graphics_context.m_color_r=t_r;
	bb_graphics_context.m_color_g=t_g;
	bb_graphics_context.m_color_b=t_b;
	bb_graphics_renderDevice.SetColor(t_r,t_g,t_b);
	return 0;
}
function bb_graphics_SetAlpha(t_alpha){
	bb_graphics_context.m_alpha=t_alpha;
	bb_graphics_renderDevice.SetAlpha(t_alpha);
	return 0;
}
function bb_graphics_SetBlend(t_blend){
	bb_graphics_context.m_blend=t_blend;
	bb_graphics_renderDevice.SetBlend(t_blend);
	return 0;
}
function bb_graphics_DeviceWidth(){
	return bb_graphics_device.Width();
}
function bb_graphics_DeviceHeight(){
	return bb_graphics_device.Height();
}
function bb_graphics_SetScissor(t_x,t_y,t_width,t_height){
	bb_graphics_context.m_scissor_x=t_x;
	bb_graphics_context.m_scissor_y=t_y;
	bb_graphics_context.m_scissor_width=t_width;
	bb_graphics_context.m_scissor_height=t_height;
	bb_graphics_renderDevice.SetScissor(((t_x)|0),((t_y)|0),((t_width)|0),((t_height)|0));
	return 0;
}
function bb_graphics_BeginRender(){
	bb_graphics_renderDevice=bb_graphics_device;
	bb_graphics_context.m_matrixSp=0;
	bb_graphics_SetMatrix(1.0,0.0,0.0,1.0,0.0,0.0);
	bb_graphics_SetColor(255.0,255.0,255.0);
	bb_graphics_SetAlpha(1.0);
	bb_graphics_SetBlend(0);
	bb_graphics_SetScissor(0.0,0.0,(bb_graphics_DeviceWidth()),(bb_graphics_DeviceHeight()));
	return 0;
}
function bb_graphics_EndRender(){
	bb_graphics_renderDevice=null;
	return 0;
}
function c_BBGameEvent(){
	Object.call(this);
}
function bb_app_EndApp(){
	error("");
	return 0;
}
function bb_input_KeyHit(t_key){
	return bb_input_device.p_KeyHit(t_key);
}
function bb_graphics_Cls(t_r,t_g,t_b){
	bb_graphics_renderDevice.Cls(t_r,t_g,t_b);
	return 0;
}
function bb_graphics_DrawImage(t_image,t_x,t_y,t_frame){
	var t_f=t_image.m_frames[t_frame];
	bb_graphics_context.p_Validate();
	if((t_image.m_flags&65536)!=0){
		bb_graphics_renderDevice.DrawSurface(t_image.m_surface,t_x-t_image.m_tx,t_y-t_image.m_ty);
	}else{
		bb_graphics_renderDevice.DrawSurface2(t_image.m_surface,t_x-t_image.m_tx,t_y-t_image.m_ty,t_f.m_x,t_f.m_y,t_image.m_width,t_image.m_height);
	}
	return 0;
}
function bb_graphics_PushMatrix(){
	var t_sp=bb_graphics_context.m_matrixSp;
	bb_graphics_context.m_matrixStack[t_sp+0]=bb_graphics_context.m_ix;
	bb_graphics_context.m_matrixStack[t_sp+1]=bb_graphics_context.m_iy;
	bb_graphics_context.m_matrixStack[t_sp+2]=bb_graphics_context.m_jx;
	bb_graphics_context.m_matrixStack[t_sp+3]=bb_graphics_context.m_jy;
	bb_graphics_context.m_matrixStack[t_sp+4]=bb_graphics_context.m_tx;
	bb_graphics_context.m_matrixStack[t_sp+5]=bb_graphics_context.m_ty;
	bb_graphics_context.m_matrixSp=t_sp+6;
	return 0;
}
function bb_graphics_Transform(t_ix,t_iy,t_jx,t_jy,t_tx,t_ty){
	var t_ix2=t_ix*bb_graphics_context.m_ix+t_iy*bb_graphics_context.m_jx;
	var t_iy2=t_ix*bb_graphics_context.m_iy+t_iy*bb_graphics_context.m_jy;
	var t_jx2=t_jx*bb_graphics_context.m_ix+t_jy*bb_graphics_context.m_jx;
	var t_jy2=t_jx*bb_graphics_context.m_iy+t_jy*bb_graphics_context.m_jy;
	var t_tx2=t_tx*bb_graphics_context.m_ix+t_ty*bb_graphics_context.m_jx+bb_graphics_context.m_tx;
	var t_ty2=t_tx*bb_graphics_context.m_iy+t_ty*bb_graphics_context.m_jy+bb_graphics_context.m_ty;
	bb_graphics_SetMatrix(t_ix2,t_iy2,t_jx2,t_jy2,t_tx2,t_ty2);
	return 0;
}
function bb_graphics_Transform2(t_m){
	bb_graphics_Transform(t_m[0],t_m[1],t_m[2],t_m[3],t_m[4],t_m[5]);
	return 0;
}
function bb_graphics_Translate(t_x,t_y){
	bb_graphics_Transform(1.0,0.0,0.0,1.0,t_x,t_y);
	return 0;
}
function bb_graphics_Rotate(t_angle){
	bb_graphics_Transform(Math.cos((t_angle)*D2R),-Math.sin((t_angle)*D2R),Math.sin((t_angle)*D2R),Math.cos((t_angle)*D2R),0.0,0.0);
	return 0;
}
function bb_graphics_Scale(t_x,t_y){
	bb_graphics_Transform(t_x,0.0,0.0,t_y,0.0,0.0);
	return 0;
}
function bb_graphics_PopMatrix(){
	var t_sp=bb_graphics_context.m_matrixSp-6;
	bb_graphics_SetMatrix(bb_graphics_context.m_matrixStack[t_sp+0],bb_graphics_context.m_matrixStack[t_sp+1],bb_graphics_context.m_matrixStack[t_sp+2],bb_graphics_context.m_matrixStack[t_sp+3],bb_graphics_context.m_matrixStack[t_sp+4],bb_graphics_context.m_matrixStack[t_sp+5]);
	bb_graphics_context.m_matrixSp=t_sp;
	return 0;
}
function bb_graphics_DrawImage2(t_image,t_x,t_y,t_rotation,t_scaleX,t_scaleY,t_frame){
	var t_f=t_image.m_frames[t_frame];
	bb_graphics_PushMatrix();
	bb_graphics_Translate(t_x,t_y);
	bb_graphics_Rotate(t_rotation);
	bb_graphics_Scale(t_scaleX,t_scaleY);
	bb_graphics_Translate(-t_image.m_tx,-t_image.m_ty);
	bb_graphics_context.p_Validate();
	if((t_image.m_flags&65536)!=0){
		bb_graphics_renderDevice.DrawSurface(t_image.m_surface,0.0,0.0);
	}else{
		bb_graphics_renderDevice.DrawSurface2(t_image.m_surface,0.0,0.0,t_f.m_x,t_f.m_y,t_image.m_width,t_image.m_height);
	}
	bb_graphics_PopMatrix();
	return 0;
}
function bb_graphics_DrawText(t_text,t_x,t_y,t_xalign,t_yalign){
	if(!((bb_graphics_context.m_font)!=null)){
		return 0;
	}
	var t_w=bb_graphics_context.m_font.p_Width();
	var t_h=bb_graphics_context.m_font.p_Height();
	t_x-=Math.floor((t_w*t_text.length)*t_xalign);
	t_y-=Math.floor((t_h)*t_yalign);
	for(var t_i=0;t_i<t_text.length;t_i=t_i+1){
		var t_ch=t_text.charCodeAt(t_i)-bb_graphics_context.m_firstChar;
		if(t_ch>=0 && t_ch<bb_graphics_context.m_font.p_Frames()){
			bb_graphics_DrawImage(bb_graphics_context.m_font,t_x+(t_i*t_w),t_y,t_ch);
		}
	}
	return 0;
}
function c_Charting_ChartData(){
	Object.call(this);
	this.m_Label="";
	this.m_Value=0;
	this.m_Color=null;
}
c_Charting_ChartData.m_new=function(t_label,t_value,t_color){
	this.m_Label=t_label;
	this.m_Value=t_value;
	this.m_Color=t_color;
	return this;
}
c_Charting_ChartData.m_new2=function(){
	return this;
}
function c_List(){
	Object.call(this);
	this.m__head=(c_HeadNode.m_new.call(new c_HeadNode));
}
c_List.m_new=function(){
	return this;
}
c_List.prototype.p_AddLast=function(t_data){
	return c_Node3.m_new.call(new c_Node3,this.m__head,this.m__head.m__pred,t_data);
}
c_List.m_new2=function(t_data){
	var t_=t_data;
	var t_2=0;
	while(t_2<t_.length){
		var t_t=t_[t_2];
		t_2=t_2+1;
		this.p_AddLast(t_t);
	}
	return this;
}
c_List.prototype.p_Count=function(){
	var t_n=0;
	var t_node=this.m__head.m__succ;
	while(t_node!=this.m__head){
		t_node=t_node.m__succ;
		t_n+=1;
	}
	return t_n;
}
c_List.prototype.p_ObjectEnumerator=function(){
	return c_Enumerator.m_new.call(new c_Enumerator,this);
}
function c_Node3(){
	Object.call(this);
	this.m__succ=null;
	this.m__pred=null;
	this.m__data=null;
}
c_Node3.m_new=function(t_succ,t_pred,t_data){
	this.m__succ=t_succ;
	this.m__pred=t_pred;
	this.m__succ.m__pred=this;
	this.m__pred.m__succ=this;
	this.m__data=t_data;
	return this;
}
c_Node3.m_new2=function(){
	return this;
}
function c_HeadNode(){
	c_Node3.call(this);
}
c_HeadNode.prototype=extend_class(c_Node3);
c_HeadNode.m_new=function(){
	c_Node3.m_new2.call(this);
	this.m__succ=(this);
	this.m__pred=(this);
	return this;
}
function c_Enumerator(){
	Object.call(this);
	this.m__list=null;
	this.m__curr=null;
}
c_Enumerator.m_new=function(t_list){
	this.m__list=t_list;
	this.m__curr=t_list.m__head.m__succ;
	return this;
}
c_Enumerator.m_new2=function(){
	return this;
}
c_Enumerator.prototype.p_HasNext=function(){
	while(this.m__curr.m__succ.m__pred!=this.m__curr){
		this.m__curr=this.m__curr.m__succ;
	}
	return this.m__curr!=this.m__list.m__head;
}
c_Enumerator.prototype.p_NextObject=function(){
	var t_data=this.m__curr.m__data;
	this.m__curr=this.m__curr.m__succ;
	return t_data;
}
var bb_random_Seed=0;
function bb_random_Rnd(){
	bb_random_Seed=bb_random_Seed*1664525+1013904223|0;
	return (bb_random_Seed>>8&16777215)/16777216.0;
}
function bb_random_Rnd2(t_low,t_high){
	return bb_random_Rnd3(t_high-t_low)+t_low;
}
function bb_random_Rnd3(t_range){
	return bb_random_Rnd()*t_range;
}
function bb_app_Millisecs(){
	return bb_app__game.Millisecs();
}
function bbInit(){
	bb_app__app=null;
	bb_app__delegate=null;
	bb_app__game=BBGame.Game();
	bb_app__updateRate=0;
	bb_samples_BGame=null;
	bb_samples_CurrentState=-1;
	bb_graphics_device=null;
	bb_graphics_context=c_GraphicsContext.m_new.call(new c_GraphicsContext);
	c_Image.m_DefaultFlags=0;
	bb_audio_device=null;
	bb_input_device=null;
	bb_graphics_renderDevice=null;
	bb_random_Seed=1234;
}
//${TRANSCODE_END}
