Strict
Import babylon
Extern

Function NSprite:Sprite(name:string, manager:SpriteManager) = "new BABYLON.Sprite"
Class Sprite = "BABYLON.Sprite"

        Field name:string
        Field color:Color4

        Field position:Vector3
        Field size:float
        Field angle:float
        Field cellIndex:float
        Field invertU:bool
        Field invertV:bool
        Field disposeWhenFinishedAnimating:bool
		
		'Not in typescript class - Erik
		Field dir:int

        Method playAnimation:Void(fromIndex:int, toIndex:int, loop:bool, delay:float)
        Method stopAnimation:Void()
        Method dispose:Void()
		 
End

Function NSpriteManager:SpriteManager(name:string, imgUrl:string, capacity:float, cellSize:float, scene:Scene) = "new BABYLON.SpriteManager"
Function NSpriteManager:SpriteManager(name:string, imgUrl:string, capacity:float, cellSize:float, scene:Scene, epsilon:float) = "new BABYLON.SpriteManager"
Class SpriteManager = "BABYLON.SpriteManager"

     Field name:string
     Field cellSize:float

     Field indicies:float[]
     Field index:float
     Field sprites:Sprite[]

     Method onDispose:Void()

     Method render:Void()
    Method dispose:Void()

End