Strict
Import babylon
Extern

Function NPointLight:PointLight(name:String, position:Vector3, scene:Scene) = "new BABYLON.PointLight"
Class PointLight Extends Light = "BABYLON.PointLight"
	Field position:Vector3
    Field diffuse:Color3
    Field specular:Color3
    Field animations:Animation[]
End