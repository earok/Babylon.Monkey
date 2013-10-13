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

Function NLight:Light(name:string, scene:Scene) = "new BABYLON.Light"
Class Light = "BABYLON.Light"
        
		Field name:string
        Field id:string

        Field intensity:float
        Field isEnabled:bool

        Method getScene:Scene()
        Method getShadowGenerator:ShadowGenerator()
        Method dispose:Void()
		
End

Function NPointLight:PointLight(name:String, position:Vector3, scene:Scene) = "new BABYLON.PointLight"
Class PointLight Extends Light = "BABYLON.PointLight"
	Field position:Vector3
    Field diffuse:Color3
    Field specular:Color3
    Field animations:Animation[]
End

Function NShadowGenerator:ShadowGenerator(mapsize:Float, light:Light) = "new BABYLON.ShadowGenerator"
Class ShadowGenerator = "BABYLON.ShadowGenerator"

        Field _light:Light
        Field _scene:Scene

        Field _shadowMap:RenderTargetTexture


        Method renderSubMesh:Void(subMesh:Mesh)

        Field useVarianceShadowMap:bool

        Method isReady:Bool(mesh:Mesh)
        Method getShadowMap:RenderTargetTexture()
        Method getLight:Light()
        Method getTransformMatrix:Matrix()
        Method dispose:Void()

End