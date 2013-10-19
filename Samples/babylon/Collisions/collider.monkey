Strict
Import babylon
Extern


Class CollisionResponse
    Field position:Vector3
    Field velocity:Vector3
End

Function NCollider:Collider() = "new BABYLON.Collider"
Class Collider = "BABYLON.Collider"
  
    Field radius:Vector3
    Field retry:float

    Field basePointWorld:Vector3
    Field velocityWorld:Vector3
    Field normalizedVelocity:Vector3

    Method _initialize:Void(source:Vector3, dir:Vector3, e:float)
    Method _checkPontInTriangle:bool(point:Vector3, pa:Vector3, pb:Vector3, pc:Vector3, n:Vector3)
    Method intersectBoxAASphere:bool(boxMin:Vector3, boxMax:Vector3, sphereCenter:Vector3, sphereRadius:float)
    Method getLowestRoot:Object(a:float, b:float, c:float, maxR:float)
    Method _canDoCollision:bool(sphereCenter:Vector3, sphereRadius:float, vecMin:Vector3, vecMax:Vector3)
    Method _testTriangle:Void(subMesh:SubMesh, p1:Vector3, p2:Vector3, p3:Vector3)
    Method _collide:Void(subMesh:SubMesh, pts:VertexBuffer, indices:IndexBuffer, indexStart:float, indexEnd:float, decal:float)
    Method _getResponse:CollisionResponse(pos:Vector3, vel:Vector3)
    
End