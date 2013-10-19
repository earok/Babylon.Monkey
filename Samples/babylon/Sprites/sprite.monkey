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