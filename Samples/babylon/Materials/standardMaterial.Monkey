Strict
Import babylon
Extern

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