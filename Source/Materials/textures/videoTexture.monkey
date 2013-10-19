Strict
Import babylon
Extern

Function NVideoTexture:VideoTexture(name:string, urls:string[], size:Size2D, scene:Scene, generateMipMaps:bool) = "new BABYLON.VideoTexture"
Class VideoTexture Extends Texture = "BABYLON.VideoTexture"

    Field textureSize:Size2D

End