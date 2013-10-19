Strict
Import babylon
Extern

Function NTexture:Texture(url:string, scene:Scene, noMipmap:bool = False, invertY:bool = False) = "new BABYLON.Texture"
Class Texture Extends BaseTexture = "BABYLON.Texture"
	
    Field name:string
   	Field url:string
    Field animations:Animation[]

    Global EXPLICIT_MODE:int
    Global SPHERICAL_MODE:int
    Global PLANAR_MODE:int
    Global CUBIC_MODE:int
    Global PROJECTION_MODE:int
    Global SKYBOX_MODE:Int

    Global CLAMP_ADDRESSMODE:Int
    Global WRAP_ADDRESSMODE:Int
    Global MIRROR_ADDRESSMODE:Int

    Field uOffset:float
    Field vOffset:float
    Field uScale:float
    Field vScale:float
    Field uAng:float
    Field vAng:float
    Field wAng:float
    Field wrapU:float
    Field wrapV:float
    Field coordinatesIndex:float
    Field coordinatesMode:float

    Method _prepareRowForTextureGeneration:Vector3(t:Vector3)
    Method _computeTextureMatrix:Matrix()
    Method _computeReflectionTextureMatrix:Matrix()
    Method clone:Texture()

End