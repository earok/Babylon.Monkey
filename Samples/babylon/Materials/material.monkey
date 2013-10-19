Strict
Import babylon
Extern

Function NMaterial:Material(name:string, scene:Scene) = "new BABYLON.Material"
Class Material = "BABYLON.Material"

    Field name:string
    Field id:string

    Field checkReadyOnEveryCall:bool
    Field alpha:float
    Field wireframe:bool
    Field backFaceCulling:bool
    Field _effect:Effect

    Method onDispose:Void()
    Method isReady:bool()
    Method getEffect:Effect()
    Method needAlphaBlending:Bool()
    Method needAlphaTesting:Bool()

    Method _preBind:Void()
    Method bind:Void(world:Matrix, mesh:Mesh)
    Method unbind:Void()
    Method baseDispose:Void()

    Method dispose:Void()

End