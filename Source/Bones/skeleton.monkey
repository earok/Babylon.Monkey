Strict
Import babylon
Extern

Function NSkeleton:Skeleton(name:string, id:int, scene:Scene) = "new BABYLON.Skeleton"
Class Skeleton = "BABYLON.Skeleton"

    Field id:int
    Field name:string
    Field bones:Bone[]
    Field _scene:Scene
    Field _isDirty:bool
    
    Method getTransformMatrices:Matrix[] ()
    Method prepare:Void()
    Method getAnimatables:Animation[] ()
	
	Method clone:Skeleton(name:string)
    Method clone:Skeleton(name:string, id:int)

End