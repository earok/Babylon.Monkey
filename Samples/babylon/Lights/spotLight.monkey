Strict
Import babylon
Extern

Function NSpotLight:SpotLight(name:string, position:Vector3, direction:Vector3, angle:float, exponsent:float, scene:Scene) = "new BABYLON.SpotLight"
Class SpotLight = "BABYLON.Spotlight"
    Field position:Vector3
    Field direction:Vector3
    Field angle:float
    Field exponent:float
    Field diffuse:Color3
    Field specular:Color3
    Field animations:Animation[]
End