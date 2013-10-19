Strict
Import babylon
Extern

Function NDynamicTexture:DynamicTexture(name:string, size:int, scene:Scene, generateMipMaps:bool) = "new BABYLON.DynamicTexture"
Class DynamicTexture Extends Texture = "BABYLON.DynamicTexture"

    Method getContext:Context()
    Method drawText:Void(text:string, x:Float, y:Float, font:string, color:string, clearColor:string, invertY:bool = False)
    Method update:Void()
	
End