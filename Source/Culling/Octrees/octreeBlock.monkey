Strict
Import babylon
Extern

Function NOctreeBlock:OctreeBlock(minPoint:Vector3, maxPoint:Vector3, capacity:int) = "new BABYLON.OctreeBlock"
Class OctreeBlock = "BABYLON.OctreeBlock"
    
	Field subMeshes:Mesh[]
    Field meshes:Mesh[]
    Field _capacity:int
    Field _minPoint:Vector3
    Field _maxPoint:Vector3
    Field _boundingVector:Vector3[]

    Method addMesh:Void(mesh:Mesh)
    Method addEntries:Void(meshes:Mesh[])
    Method selec:Void(frustrumPlanes:Plane[], selection:Tools.SmartArray) = "selec"
		
End