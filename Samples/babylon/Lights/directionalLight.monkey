Strict
Import babylon
Extern

Function NDirectionalLight:DirectionalLight(name:string, direction:Vector3, scene:Scene) = "new BABYLON.DirectionalLight"
Class DirectionalLight Extends Light = "BABYLON.DirectionalLight"

    Field direction:Vector3
    Field animations:Animation[]
    Field position:Vector3
    Field diffuse:Color3
    Field specular:Color3

End