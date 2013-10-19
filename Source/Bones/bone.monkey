Strict
Import babylon
Extern

Function NBone:Bone(name:string, skeleton:Skeleton, parentBone:Bone, matrix:Matrix) = "new BABYLON.Bone"
Class Bone = "BABYLON.Bone"
	
    Field name:string
    Field _skeleton:Skeleton
    Field _matrix:Matrix
    Field _baseMatrix:Matrix
    Field _worldTransform:Matrix
    Field _absoluteTransform:Matrix
    Field _invertedAbsoluteTransform:Matrix
    Field children:Bone[]
    Field animation:Animation[]

    Method getParent:Bone()
    Method getLocalMatrix:Matrix()
    Method getAbsoluteMatrix:Matrix()
    Method _updateDifferenceMatrix:Void()
    Method updateMatrix:Void(matrix:Matrix)
    Method markAsDirty:Void()

End