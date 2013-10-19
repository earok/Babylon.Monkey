Strict
Import babylon
Extern

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