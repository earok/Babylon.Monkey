Strict
Import babylon
Extern

Function NHemisphericLight:HemisphericLight(name:string, direction:Vector3, scene:Scene) = "new BABYLON.HemisphericLight"
Class HemisphericLight = "BABYLON.HemisphericLight"
    
	Field direction:Vector3
    Field diffuse:Color3
    Field specular:Color3
    Field groundColor:Color3
    Field animations:Animation[]

    Method getShadowGenerator:Void()
	
End