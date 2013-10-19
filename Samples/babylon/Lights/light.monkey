Strict
Import babylon
Extern

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