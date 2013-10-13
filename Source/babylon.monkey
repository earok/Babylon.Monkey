Import "babylon.1.5.2.js"
Import "hand.minified-1.1.1.js"
Import "babylon_monkey.js"
Import mojo

Import babylonanimations
Import babylonbones
Import babyloncamera
Import babylonengine
Import babylonlayer
Import babylonlights
Import babylonmaterials
Import babylonmesh
Import babylonparticles
Import babylonscene
Import babylonsprites
Import babylontools

Class BabylonGame Extends App
	
	'Fields
	Private
	Field _state:BabylonState
	Field _states:StringMap<BabylonState> = New StringMap<BabylonState>
	Public
	
	'Do you want Babylon to automatically resize to match the 2D canvas? If so, set to yes
	Field AutoResize:Bool = True
	Field Width:Float
	Field Height:Float
	
	Field Engine:Engine
	Field Canvas3D:Canvas
	Field Canvas2D:Canvas
	
	'Properties
	Method State:BabylonState()
		Return _state
	End
	
	'Set state
	Method State:Void(value:BabylonState)
		_state = value
		_state.Game = Self
		If Not _state.HasBeenPreloaded
			_state.Scene = NScene(Engine)
			_state.Preload()
			_state.HasBeenPreloaded = True
		EndIf
		
	End
	
	Method StartState:Void(value:String, clearScene:bool)
		State = _states.Get(value)
	End
	
	Method AddState(key:String, state:BabylonState)
		_states.Add(key, state)
	End
	
	Method StateCount:int()
		Return _states.Count()
	End
	
	Method New(state:BabylonState = Null, canvasName:string = "GameCanvas3D", antialias:Bool = True, updateRate:int = 60)
	
		If Not Engine.isSupported()
			Error("Babylon Engine Not Supported!")
		End
	
		Canvas3D = GetCanvas(canvasName)
		Canvas2D = GetCanvas("GameCanvas")
		Engine = NEngine(Canvas3D, antialias)
		
		If (state) State = state
		SetUpdateRate updateRate
		
	End
	
	Method OnUpdate()
		
		If Not _state Return
	
		'Not loaded yet
		If ( not _state.HasLoadUpdateRun or _state.Importer.ToLoad > 0)
			_state.HasLoadUpdateRun = True
			_state.LoadUpdate()
			Return
		EndIf
	
		If not _state.HasBeenCreated
			_state.Create()
			_state.HasBeenCreated = True
		EndIf
		
		_state.Update()
	
	End
	
	Method OnRender()
	
		Tools._MeasureFps()
	
		If Not _state Return
	
		'Not loaded yet
		If ( not _state.HasLoadRenderRun or _state.Importer.ToLoad > 0)
			_state.HasLoadRenderRun = True
			_state.LoadRender()
			Return
		EndIf	
	
		If Not _state.HasBeenCreated Return
		
		'Update the Canvas size
		If AutoResize And (Canvas2D.width <> Width or Canvas2D.height <> Height)
			DebugStop
			Width = Canvas2D.width
			Height = Canvas2D.height
			Canvas3D.width = Width
			Canvas3D.height = Height
			Engine.resize()
		EndIf
				
		If _state.Scene _state.Scene.render()
		
		Canvas2D.getContext("2d").clearRect(0, 0, Canvas2D.width, Canvas2D.height)
		_state.Render()
		
	End

End

Class BabylonState
	
	Field HasBeenPreloaded:Bool = False
	Field HasBeenCreated:Bool = False
	Field HasLoadUpdateRun:Bool = False
	Field HasLoadRenderRun:Bool = False
	Field Game:BabylonGame
	Field Importer:BabylonImporter
	Field Scene:Scene
	
	Method New()
		Importer = New BabylonImporter(Self)
	End
	
	Method Preload()
		
	End
	
	Method LoadUpdate()
		
	End
	
	Method LoadRender()
		
	End
	
	Method Create()
		
	End	
	
	Method Update()
		
	End
	
	'For rendering 2D stuff after the 3D world has been rendered
	Method Render()
		
	End

End

Class BabylonImporter

	Field Meshes:= New StringMap<LoadedMeshData>

	Field DefaultPath:String = "data/"
	Field State:BabylonState
	Field ToLoad:int
	
	Method New(state:BabylonState)
		State = state
		_loadedMesh("")
	End

	Method IsLoaded:Bool()
		Return ToLoad = 0
	End
	
	Method LoadMesh(name:String, file:String)
		ToLoad += 1
		Local path:String = "/"
		Local fileparts:= file.Split("/")
		If (fileparts.Length > 0)
			path = ("/").Join(fileparts[ .. fileparts.Length - 1]) + "/"
			file = fileparts[fileparts.Length - 1]
		EndIf		
		BabylonMonkey_LoadMesh(name, DefaultPath + path, file, State.Scene, Self)
	End
	
	Private
	Method _loadedMesh(name:string, newMeshes:Mesh[] = New Mesh[0], particleSystems:ParticleSystem[] = New ParticleSystem[0], skeletons:Skeleton[] = New Skeleton[0])
		If (name = "") Return
		DebugStop
		Local data:= New LoadedMeshData
		data.Meshes = newMeshes
		data.ParticleSystems = particleSystems
		data.Skeletons = skeletons
		Meshes.Add(name, data)
		ToLoad -= 1
	End
	

End

Class LoadedMeshData
	
	Field Meshes:Mesh[]
	Field ParticleSystems:ParticleSystem[]
	Field Skeletons:Skeleton[]

End

'Extern stuff
Extern

Function BabylonMonkey_LoadMesh(handle:String, path:String, file:String, scene:Scene, target:BabylonImporter)

Class CallbackFunction
	
End

Class Canvas
	Field width
	Field height
	Method getContext:Context(type:String)
End

Class Context

	Field fillStyle:string
	Field font:string

	Method clearRect:Void(x:Int, y:int, width:Int, height:Int)
	Method fillText:Void(text:String, width:Float, height:Float)
	Method measureText:Size2D(text:String)
	
End

Function GetCanvas:Canvas(elementName:String) = "document.getElementById"