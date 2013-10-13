Strict
Import babylon
Extern

Function NMaterial:Material(name:string, scene:Scene) = "new BABYLON.Material"
Class Material = "BABYLON.Material"

    Field name:string
    Field id:string

    Field checkReadyOnEveryCall:bool
    Field alpha:float
    Field wireframe:bool
    Field backFaceCulling:bool
    Field _effect:Effect

    Method onDispose:Void()
    Method isReady:bool()
    Method getEffect:Effect()
    Method needAlphaBlending:Bool()
    Method needAlphaTesting:Bool()

    Method _preBind:Void()
    Method bind:Void(world:Matrix, mesh:Mesh)
    Method unbind:Void()
    Method baseDispose:Void()

    Method dispose:Void()

End

Function NMultiMaterial:MultiMaterial(name:String, scene:Scene) = "new BABYLON.MultiMaterial"
Class MultiMaterial Extends Material = "BABYLON.MultiMaterial"

    Field subMaterials:Material[]
	Method subMaterialsPush:Void(value:Material) = "subMaterials.push"
	
    Method getSubMaterial:material(index:int)
		
End


Function NStandardMaterial:StandardMaterial(name:String, scene:Scene) = "new BABYLON.StandardMaterial"
Class StandardMaterial Extends Material = "BABYLON.StandardMaterial"

    Field diffuseTexture:Texture
    Field ambientTexture:Texture
    Field opacityTexture:Texture
    Field reflectionTexture:Texture
   	Field emissiveTexture:Texture
    Field specularTexture:Texture
    Field bumpTexture:Texture

    Field ambientColor:Color3
    Field diffuseColor:Color3
    Field specularColor:Color3
    Field specularPower:float
    Field emissiveColor:Color3

    Method getRenderTargetTextures:Texture[] ()
    Method getAnimatables:Texture[] ()
    Method clone:StandardMaterial(name:string)
	
End

Function NRenderTargetTexture:RenderTargetTexture(name:string, size:float, scene:Scene, generateMipMaps:bool) = "new RenderTargetTexture"
Class RenderTargetTexture Extends Texture = "BABYLON.RenderTargetTexture"

       Field renderList:Mesh[]
	   Method renderListPush:Void(value:Mesh) = "renderList.push"
	   
       Field isRenderTarget:bool
       Field coordinatesMode:int
       Field renderParticles:bool

	   Method _onBeforeRender:Void()
	   Method _onAfterRender:Void()
	   
       Method resize:Void(size:float, generateMipMaps:bool)
       Method render:Void()
	   
End

Function NBaseTexture:BaseTexture(url:string, scene:Scene) = "new BaseTexture"
Class BaseTexture = "BABYLON.BaseTexture"
	
    Field _scene:Scene
	Field delayLoadState:float
    Field hasAlpha:bool
    Field level:float
	
    Method onDispose:Void()
    Method getInternalTexture:BaseTexture()
    Method isReady:bool()
    Method getSize:Size2D()
    Method getBaseSize:int()
    Method _getFromCache:BaseTexture(url:string, noMipmap:bool)
    Method delayLoad:Void()
    Method releaseInternalTexture:Void()
    Method dispose:Void()

End

Function NCubeTexture:CubeTexture(rootUrl:string, scene:Scene) = "new BABYLON.CubeTexture"
Class CubeTexture Extends Texture
    Field isCube:bool
    Method _computeReflectionTextureMatrix:Matrix()
End

Function NDynamicTexture:DynamicTexture(name:string, size:int, scene:Scene, generateMipMaps:bool) = "new BABYLON.DynamicTexture"
Class DynamicTexture Extends Texture = "BABYLON.DynamicTexture"

    Method getContext:Context()
    Method drawText:Void(text:string, x:Float, y:Float, font:string, color:string, clearColor:string, invertY:bool = False)
    Method update:Void()
	
End

Function NMirrorTexture:MirrorTexture(name:string, size:Size2D, scene:Scene, generateMipMaps:bool) = "new BABYLON.MirrorTexture"
Function NMirrorTexture:MirrorTexture(name:string, size:int, scene:Scene, generateMipMaps:bool) = "new BABYLON.MirrorTexture"
Class MirrorTexture Extends RenderTargetTexture = "BABYLON.MirrorTexture"

    Field mirrorPlane:Plane

    Method onBeforeRender:Void()
    Method onAfterRender:Void()
	
End

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