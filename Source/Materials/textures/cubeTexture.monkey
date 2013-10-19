Strict
Import babylon
Extern

Function NCubeTexture:CubeTexture(rootUrl:string, scene:Scene) = "new BABYLON.CubeTexture"
Class CubeTexture Extends Texture = "BABYLON.CubeTexture"
    Field isCube:bool
    Method _computeReflectionTextureMatrix:Matrix()
End