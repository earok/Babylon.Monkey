Strict
Import babylon
Extern

Class ScenePickResult
    Global hit:bool
    Global distance:float
    Global pickedMesh:Mesh
    Global pickedPoint:Vector3
End

Function NScene:Scene(engine:Engine) = "new BABYLON.Scene"
Class Scene = "BABYLON.Scene"
	
    Field autoClear:bool
    Field clearColor:Color3
    Field ambientColor:Color3

    Field fogMode:int
    Field fogColor:Color3
    Field fogDensity:float
    Field fogStart:float
    Field fogEnd:float

    Field lights:Light[]
    Field cameras:Camera[]
    Field activeCamera:Camera
    Field meshes:Mesh[]
    Field materials:Material[]
    Field multiMaterials:MultiMaterial[]
    Field defaultMaterial:StandardMaterial
    Field textures:Texture[]
    Field particlesEnabled:bool
    Field particleSystems:ParticleSystem[]
    Field spriteManagers:SpriteManager[]
    Field layers:Layer[]
    Field skeletons:Skeleton[]
    Field collisionsEnabled:bool
    Field gravity:Vector3
    Field postProcessManager:PostProcessManager

    Method getEngine:Engine()
    Method getTotalVertices:int()
    Method getActiveVertices:int()
    Method getActiveParticles:int()
    Method getLastFrameDuration:Float()
    Method getEvaluateActiveMeshesDuration:Float()
    Method getRenderTargetsDuration:Float()
    Method getRenderDuration:Float()
    Method getParticlesDuration:Float()
    Method getSpritesDuration:Float()
    Method getAnimationRatio:Float()
    Field getRenderId:int

    Method isReady:bool()
    Method registerBeforeRender:Void(func:CallbackFunction)
    Method unregisterBeforeRender:Void(func:CallbackFunction)
    Method executeWhenReady:Void(func:CallbackFunction)
    Method getWaitingItemsCount:float()

    Method beginAnimation:Void(target:object, from:int, toFrame:int, loop:bool, speedRatio:float, onAnimationEnd:CallbackFunction = Null)
    Method stopAnimation:Void(target:object)

    Method getViewMatrix:Matrix()
    Method getProjectionMatrix:Matrix()
    Method getTransformMatrix:Matrix()
    Method setTransformMatrix:Void(view:Matrix, projection:Matrix)
    Method activeCameraByID:Void(id:float)
    Method getMaterialByID:Material(id:float)
    Method getLightByID:Light(id:float)
    Method getMeshByID:Mesh(id:float)
    Method getLastMeshByID:Mesh(id:float)
    Method getMeshByName:Mesh(name:string)
    Method isActiveMesh:bool(mesh:Mesh)
    Method getLastSkeletonByID:Skeleton(id:float)
    Method getSkeletonByID:Skeleton(id:float)
    Method getSkeletonByName:Skeleton(name:string)

    Method _evaluateActiveMeshes:Void()
'    Method _localRender:Void(opaqueSubMeshes, alphaTestSubMeshes, transparentSubMeshes, activeMeshes)
    Method render:Void()
    Method dispose:Void()
    Method _getNewPosition:Vector3(position:Vector3, velocity:Vector3, collider:Sphere, maximumRetries:float)
    Method _collideWithWorld:Vector3(position:Vector3, velocity:Vector3, collider:Sphere, maximumRetries:float)

    Method createOrUpdateSelectionOctree:Void()
    Method createPickingRay:Ray(x:float, y:float, world:Matrix)
    Method pick:ScenePickResult(x:float, y:float)

    Global FOGMODE_NONE:int
    Global FOGMODE_EXP:int
    Global FOGMODE_EXP2:int
    Global FOGMODE_LINEAR:int
	
End