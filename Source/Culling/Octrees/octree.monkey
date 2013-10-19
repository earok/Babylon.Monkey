Strict
Import babylon
Extern

Function NOctree:Octree(maxBlockCapacity:int) = "new BABYLON.Octree"
Class Octree = "BABYLON.Octree"

    Field blocks:OctreeBlock[]
    Field _maxBlockCapacity:Float
    Field _selection:Tools.SmartArray

    Method update:Void(worldMin:Vector3, worldMax:Vector3, meshes:Mesh[])
    Method addMesh:Void(mesh:Mesh)
    Method selec:Void(frustrumPlanes:Plane[]) = "select"

    Function _CreateBlocks:Void(worldMin:Vector3, worldMax:Vector3, meshes:Mesh[], maxBlockCapacity:number, target:OctreeBlock)
	
End