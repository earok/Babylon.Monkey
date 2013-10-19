Strict
Import babylon
Extern

Function NSubMesh:SubMesh(materialIndex:float, verticesStart:float, verticesCount:float, indexStart:float, indexCount:float, mesh:Mesh) = "new BABYLON.SubMesh"
Class SubMesh = "new BABYLON.SubMesh"
	
        Field materialIndex:int
        Field verticesStart:int
        Field verticesCount:int
        Field indexStart:int
        Field indexCount:int

        Method getBoundingInfo:BoundingInfo()
        Method getMaterial:Material()
        Method refreshBoundingInfo:Void()
        Method updateBoundingInfo:Void(world:Matrix, scale:Vector3)
        Method isInFrustrum:bool(frustumPlanes:Plane[])
        Method render:Void()
        Method getLinesIndexBuffer:IndexBuffer(indices:float[], engine:Engine)
        Method canIntersects:bool(ray:Ray)
        Method intersects:MeshRayHitTest(ray:Ray, positions:Vector3[], indices:float[])
        Method clone:SubMesh(newMesh:Mesh)

        Function CreateFromIndices:SubMesh(materialIndex:float, startIndex:float, indexCount:float, mesh:Mesh)
		
End