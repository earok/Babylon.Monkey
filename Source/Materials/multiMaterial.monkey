Strict
Import babylon
Extern

Function NMultiMaterial:MultiMaterial(name:String, scene:Scene) = "new BABYLON.MultiMaterial"
Class MultiMaterial Extends Material = "BABYLON.MultiMaterial"

    Field subMaterials:Material[]
	Method subMaterialsPush:Void(value:Material) = "subMaterials.push"
	
    Method getSubMaterial:material(index:int)
		
End