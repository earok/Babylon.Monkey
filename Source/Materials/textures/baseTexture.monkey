Strict
Import babylon
Extern

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