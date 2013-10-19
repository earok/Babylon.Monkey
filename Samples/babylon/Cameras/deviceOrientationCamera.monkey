Strict
Import babylon
Extern

Function NDeviceOrientationCamera:DeviceOrientationCamera(name:string, position:Vector3, scene:Scene) = "new BABYLON.DeviceOrientationCamera"
 Class DeviceOrientationCamera Extends FreeCamera = "BABYLON.DeviceOrientationCamera"
 
        Field angularSensibility:float
        Field moveSensibility:float

        Field _offsetX:float
        Field _offsetY:float
        Field _orientationGamma:float
        Field _orientationBeta:float
        Field _initialOrientationGamma:float
        Field _initialOrientationBeta:float
		
End
