Strict
Import babylon
Extern

Function NArcRotateCamera:ArcRotateCamera(name:string, alpha:float, beta:float, radius:float, target:Vector3, scene:Scene) = "new BABYLON.ArcRotateCamera"
Class ArcRotateCamera Extends Camera = "BABYLON.ArcRotateCamera"

	Field alpha:float
    Field beta:float
    Field radius:float
    Field target:Vector3

    Field _keys:float[]
    Field keysUp:float[]
    Field keysDown:float[]
    Field keysLeft:float[]
    Field keysRight:float[]
    Field _viewMatrix:Matrix

    Field inertialAlphaOffset:float
    Field interialBetaOffset:float
    Field lowerAlphaLimit:float
    Field upperAlphaLimit:float
    Field lowerBetaLimit:float
    Field upperBetaLimit:float
    Field lowerRadiusLimit:float
    Field upperRadiusLimit:float
    Method setPosition:Void(position:Vector3)
	
End

Function NCamera:Camera(name:string, position:Vector3, scene:Scene) = "new BABYLON.Camera"
Class Camera = "BABYLON.Camera"

	Field name:string
    Field id:string
    Field position:Vector3
    Field _scene:Scene

    Global PERSPECTIVE_CAMERA:int
    Global ORTHOGRAPHIC_CAMERA:int

    Field fov:float
    Field orthoLeft:float
    Field orthoRight:float
    Field orthoBottom:float
    Field orthoTop:float
    Field minZ:float
    Field maxZ:float
    Field intertia:float
    Field mode:int

    Method attachControl:Void(canvas:Canvas)
    Method detachControl:Void(canvas:Canvas)
    Method _update:Void()
    Method getViewMatrix:Void()
    Method getProjectionMatrix:Matrix()

End

Function NFreeCamera:FreeCamera(name:string, position:Vector3, scene:Scene) = "new BABYLON.FreeCamera"
Class FreeCamera Extends Camera

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