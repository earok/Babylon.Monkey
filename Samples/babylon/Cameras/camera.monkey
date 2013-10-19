Strict
Import babylon
Extern

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