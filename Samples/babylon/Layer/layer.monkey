 Strict
 Import babylon
 Extern
 
 Function NLayer:Layer(name:string, imgUrl:string, scene:Scene) = "new BABYLON.Layer"
 Function NLayer:Layer(name:string, imgUrl:string, scene:Scene, isBackground:bool) = "new BABYLON.Layer"
 Function NLayer:Layer(name:string, imgUrl:string, scene:Scene, isBackground:bool, color:Color4) = "new BABYLON.Layer"
Class Layer = "BABYLON.Layer"

    Field name:string
    Field texture:Texture
    Field isBackground:bool
    Field color:Color4
    Field _scene:Scene
    Field vertices:int[]
    Field indicies:int[]
    Field _indexBuffer:IndexBuffer
    Field _effect:Effect
	
    Method onDispose:Void()
    Method render:Void()
    Method dispose:Void()
		
End