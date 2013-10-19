Strict
Import babylon
Extern

Function NParticle:Particle() = "new BABYLON.Particle"
Class Particle = "BABYLON.Particle"
    
	Field position:Vector3
    Field direction:Vector3
    Field lifetime:float
    Field age:float
    Field size:float
    Field angle:float
    Field angularSpeed:float
    Field color:Color4
    Field colorStep:Color4

End