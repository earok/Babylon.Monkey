Strict
Import babylon
Extern

Class Babylon = "BABYLON"

    function loadCubeTexture: CubeTexture(rootUrl: string, parsedTexture: JSON, scene: Scene)
    Function loadTexture:Texture(rootUrl:string, parsedTexture:JSON, scene:Scene)
    Function parseSkeleton:Skeleton(parsedSkeleton:JSON, scene:Scene)
    Function parseMaterial:Material(parsedMaterial:JSON, scene:Scene, rootUrl:string)
    Function parseMaterialById:Material(id:number, parsedData:JSON, scene:Scene, rootUrl:string)
    Function parseMultiMaterial:MultiMaterial(parsedMultiMaterial:JSON, scene:Scene)
    Function parseParticleSystem:ParticleSystem(parsedParticleSystem:JSON, scene:Scene, rootUrl:string)
    Function parseShadowGenerator:ShadowGenerator(parsedShadowGenerator:JSON, scene:Scene)
    Function parseAnimation:Animation(parsedAnimation:JSON)
    Function parseLight:Light(parsedLight:JSON, scene:Scene)
    Function parseMesh:Mesh(parsedMesh:JSON, scene:Scene, rootUrl:string)
    Function isDescendantOf:bool(mesh:Mesh, name:string, hierarchyIds:int[])
	
End
	
Class SceneLoader = "BABYLON.SceneLoader"
    Method _ImportGeometry:Void(parsedGeometry:JSON, mesh:Mesh)
    Method ImportMesh:Void(meshName:string, rootUrl:string, sceneFilename:string, scene:Scene, thenFunction:CallbackFunction)
    Method Load:Void(rootUrl:string, sceneFilename:string, engine:Engine, thenFunction:CallbackFunction, progressCallback:CallbackFunction)
End