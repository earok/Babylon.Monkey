Strict
Import babylon
Extern

Function NParticleSystem:ParticleSystem(name:string, capacity:float, scene:Scene) = "new BABYLON.ParticleSystem"
Class ParticleSystem = "BABYLON.ParticleSystem"

        field name:string
        Field id:string

        Field gravity:Vector3
        Field direction1:Vector3
        Field direction2:Vector3
        Field minEmitBox:Vector3
        Field maxEmitBox:Vector3
        Field color1:Color4
        Field color2:Color4
        Field colorDead:Color4
        Field deadAlpha:float
        Field textureMask:Color4

        Field particles:Particle[]
        Field indices:float[]

        Field renderingGroupId:float
        Field emitter:object ' needs update
        Field emitRate:float
        Field manualEmitCount:float
        Field updateSpeed:float
        Field targetStopDuration:float
        Field disposeOnStop:bool

        Field minEmitPower:float
        Field maxEmitPower:float

        Field minLifeTime:float
        Field maxLifeTime:float

        Field minSize:float
        Field maxSize:float
        Field minAngularSpeed:float
        Field maxAngularSpeed:float

        Field particleTexture:Texture

        Method onDispose:Void()

        Field blendMode:int

        Method isAlive:bool()
        Method start:Void()
        Method stop:Void()
        Method animate:Void()
        Method render:float()
        Method dispose:Void()
        Method clone:ParticleSystem(name:string, newEmitter:object) ' needs update (newEmitter)

        Global BLENDMODE_ONEONE:int
        Global BLENDMODE_STANDARD:int

End