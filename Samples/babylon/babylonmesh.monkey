Strict
Import babylon
Extern

Class MeshRayHitTest
	Field hit:bool
	Field distance:float
End

Function NMesh:Mesh(name:string, vertexDeclaration:int[], scene:Scene) = "new BABYLON.Mesh"
Class Mesh = "BABYLON.Mesh"
	
    Field name:string
    Field id:string

    Field position:Vector3
    Field rotation:Vector3
    Field scaling:Vector3
    Field rotationQuaternion:Quaternion
    Field subMeshes:SubMesh[]
	Method subMeshesPush:Void(value:SubMesh) = "subMeshes.push"
    Field animations:Animation[]
	Method animationsPush:Void(value:Animation) = "animations.push"

    Global BILLBOARDMODE_NONE:int
    Global BILLBOARDMODE_X:int
    Global BILLBOARDMODE_Y:int
    Global BILLBOARDMODE_Z:int
    Global BILLBOARDMODE_ALL:int

    Field delayLoadState:bool
    Field material:Material
    Field parent:Mesh
    Field _isReady:bool
    Field _isEnabled:bool
    Field isVisible:bool
    Field isPickable:bool
    Field visibility:Float
    Field billboardMode:Float
    Field checkCollisions:bool
    Field receiveShadows:bool

    Field isDisposed:bool
    Method onDispose:Void()
    Field skeleton:Skeleton
    Field renderingGroupId:int

    Method getBoundingInfo:BoundingInfo()
    Method getScene:Scene()
    Method getWorldMatrix:Matrix()
    Method getTotalVertices:int()
    Method getVerticesData:Object[] (kind:string)
    Method isVerticesDataPresent:bool(kind:string)
    Method getTotalIndicies:int()
    Method getIndices:Int[] ()
    Method getVertexStrideSize:int()
    Method _needToSynchronizeChildren:bool()
    Method setPivotMatrix:Void(matrix:Matrix)
    Method getPivotMatrix:Matrix()
    Method isSynchronized:bool()
    Method isReady:Bool()
    Method isEnabled:bool()
    Method setEnabled:Void(value:bool)
    Method isAnimated:bool()
    Method markAsDirty:Void(Prop:string)
    Method refreshBoudningInfo:Void()
    Method computeWorldMatrix:Matrix()
    Method _createGlobalSubMesh:SubMesh()
    Method subdivide:Void(count:float)
    Method setVerticesData:Void(data:object[], kind:string, updatable:bool=false)
    Method updateVerticesData:Void(kind:string, data:object[])
    Method setIndices:Void(indices:float[])
    Method bindAndDraw:Void(subMesh:SubMesh, effect:Effect, wireframe:bool)
    Method registerBeforeRender:Void(func:CallbackFunction)
    Method unregisterBeforeRender:Void(func:CallbackFunction)
    Method render:Void(subMesh:SubMesh)
    Method isDescendantOf:bool(ancestor:Mesh)
    Method getDescendants:Mesh[] ()
    Method getEmittedParticleSystems:ParticleSystem[] ()
    Method getHierarchyEmittedParticleSystems:ParticleSystem[] ()
    Method getChildren:Mesh[]()
    Method isInFrustrum:bool(frustumPlanes:Plane[])
    Method setMaterialByID:Void(id:string)
    Method getAnimatables:Material()
    Method setLocalTranslation:Void(vector3:Vector3)
    Method getLocalTranslation:Vector3()
    Method bakeTransformIntoVertices:Void(transform:Matrix)

     Method intersectsMesh:bool(mesh:Mesh, precise:bool)
     Method intersectsPoint:bool(point:Vector3)
     Method intersects:MeshRayHitTest(ray:Ray)
     Method clone:Mesh(name:string, newParent:Mesh = Null, doNotCloneChildren:bool = False)

    Method dispose:Void()

    Function CreateBox:Mesh(name:string, size:float, scene:Scene)
    Function CreateCylinder:Mesh(name:string, height:float, diameterTop:float, diameterBottom:float, tessellation:float, scene:Scene, updatable:bool=false)
    Function CreateTorus:Mesh(name:string, diameter:float, thickness:float, tessellation:float, scene:Scene, updatable:bool=false)
    Function CreateSphere:Mesh(name:string, segments:int, diameter:float, scene:Scene)
    Function CreatePlane:Mesh(name:string, size:float, scene:Scene)
    Function CreateGround:Mesh(name:string, width:float, height:float, subdivisions:int, scene:Scene, updatable:bool=false)
    Function CreateGroundFromHeightMap:Mesh(name:string, url:string, width:float, height:float, subdivisions:int, minHeight:float, maxHeight:float, scene:Scene, updatable:bool=false)
    Function ComputeNormal:Void(positions:float[], normals:float[], indices:float[])
	
End

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