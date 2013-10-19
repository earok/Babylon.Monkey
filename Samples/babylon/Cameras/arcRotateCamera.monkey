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