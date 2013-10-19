Strict
Import babylon
Extern

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