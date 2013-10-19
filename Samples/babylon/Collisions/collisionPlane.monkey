Strict
Import babylon
Extern

Function NCollisionPlane:CollisionPlane(origin:Vector3, normal:Vector3) = "new BABYLON.CollisionPlane"
Class CollisionPlane = "BABYLON.CollisionPlane"
    
	Field normal:Vector3
    Field origin:Vector3
    Field equation:float[]

    Method isFrontFactingTo:bool(direction:Vector3, epsilon:number)
    Method signedDistanceTo:Float(point:Vector3)

    Function CreateFromPoints:CollisionPlane(p1:Vector3, p2:Vector3, p3:Vector3)
	
End