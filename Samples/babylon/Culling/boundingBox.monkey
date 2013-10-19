Strict
Import babylon
Extern


Function NBoundingBox:BoundingBox(minimum:Vector3, maximum:Vector3) = "new BABYLON.BoundingBox"
Class BoundingBox = "BABYLON.BoundingBox"

    Field minimum:Vector3
    Field maximum:Vector3
    Field vectors:Vector3[]
    Field center:Vector3
    Field extend:Vector3 = "extends"
    Field directions:Vector3[]
    Field vectorsWorld:Vector3[]
    Field minimumWorld:Vector3
    Field maximumWorld:Vector3

    Method _update:Void(world:Matrix)
    Method isInFrustrum:bool(frustrumPlanes:Plane[])
    Method intersectsPoint:bool(point:Vector3)
    Method intersectsSphere:bool(sphere:Sphere)
    Method intersectsMinMax:bool(min:Vector3, max:Vector3)
    Method IsInFrustrum:bool(boundingVectors:Vector3[], frustrumPlanes:Plane[])

    Function intersects:bool(box0:BoundingBox, box1:BoundingBox)
End
