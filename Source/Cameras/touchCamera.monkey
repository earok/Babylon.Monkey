Strict
Import babylon
Extern


Function NTouchCamera:TouchCamera(name:string, position:Vector3, scene:Scene) = "new BABYLON.TouchCamera"
Class TouchCamera Extends FreeCamera = "BABYLON.TouchCamera"

    Field _offsetX:float
    Field _offsetY:float
    Field _pointerCount:float
    Field _pointerPressed:int[]
    Field angularSensibility:float
    Field moveSensibility:float
	
End
    