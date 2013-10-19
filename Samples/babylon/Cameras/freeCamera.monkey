Strict
Import babylon
Extern

Function NFreeCamera:FreeCamera(name:string, position:Vector3, scene:Scene) = "new BABYLON.FreeCamera"
Class FreeCamera Extends Camera = "BABYLON.FreeCamera"

    Field cameraDirection:Vector3
    Field cameraRotation:Vector2
    Field rotation:Vector3
    Field ellipsoid:Vector3
    Field _keys:float[]
    Field keysUp:float[]
    Field keysDown:float[]
    Field keysLeft:float[]
    Field keysRight:float[]
    Field _collider:Collider
    Field _needsMoveForGravity:boolean
    Field animations:Animation[]

    Field speed:float
    Field checkCollisions:boolean
    Field applyGravity:boolean

    Method _computeLocalCameraSpeed:float()
    Method setTarget:Void(target:Vector3)
    Method _collideWithWorld:Void(velocity:Vector3)
    Method _checkInputs:Void()
	
End