Strict
Import babylon
Extern

Function NBoundingInfo:BoundingInfo(minimum:Vector3, maximum:Vector3) = "new BABYLON.BoundingInfo"
Class BoundingInfo = "BABYLON.BoundingInfo"

    Field boundingBox:BoundingBox
    Field boundingSphere:BoundingSphere

    Method _update:Void(world:Matrix, scale:float)

    Method extentsOverlap:bool(min0:Object, max0:Object, min1:Object, max:Object1)
    Method computeBoxExtents:Object(axis:Vector3, box:BoundingBox)
    Method axisOverlap:bool(axis:Vector3, box0:BoundingBox, box1:BoundingBox)
    Method isInFrustrum:bool(frustrumPlanes:Plane[])
    Method _checkCollision:bool(collider:Collider)
    Method intersectsPoint:bool(point:Vector3)
    Method intersects:bool(boundingInfo:BoundingInfo, precise:bool)

End