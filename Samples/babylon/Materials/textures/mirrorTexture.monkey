Strict
Import babylon
Extern

Function NMirrorTexture:MirrorTexture(name:string, size:Size2D, scene:Scene, generateMipMaps:bool) = "new BABYLON.MirrorTexture"
Function NMirrorTexture:MirrorTexture(name:string, size:int, scene:Scene, generateMipMaps:bool) = "new BABYLON.MirrorTexture"
Class MirrorTexture Extends RenderTargetTexture = "BABYLON.MirrorTexture"

    Field mirrorPlane:Plane

    Method onBeforeRender:Void()
    Method onAfterRender:Void()
	
End