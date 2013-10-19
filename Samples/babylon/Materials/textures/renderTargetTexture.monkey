Strict
Import babylon
extern

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