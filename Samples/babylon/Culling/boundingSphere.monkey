Strict
Import babylon
Extern

Function NBoundingSphere:BoundingSphere(minimum:Vector3, maximum:Vector3) = "new BABYLON.BoundingSphere"
Class BoundingSphere = "BABYLON.BoundingSphere"
    Field minimum:Vector3
    Field maximum:Vector3
    Field center:Vector3
    Field radius:float
    Field distance:float
    Field centerWorld:Vector3

    Method _update:Void(world:Matrix, scale:float)
    Method isInFrustrum:bool(frustrumPlanes:Plane[])
    Method intersectsPoint:bool(point:Vector3)

        Function intersects:bool(sphere0:BoundingSphere, sphere1:BoundingSphere)
End