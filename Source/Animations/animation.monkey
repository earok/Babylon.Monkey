Strict
Import babylon

Extern
Function NAnimationFrame:AnimationFrame(frame:Int, value:float)
Function NAnimationFrame:AnimationFrame(frame:Int, value:Object)

Class AnimationFrame
	Field frame:Int
	Field value:Object
End

Function NAnimation:Animation(name:string, targetProperty:string, framePerSecond:float, dataType:string, loopMode:int = 0) = "new BABYLON.Animation"
Class Animation = "BABYLON.Animation"

    Field name:string
    Field targetProperty:string
    Field targetPropertyPath:string[]
    Field framePerSecond:float
    Field dataType:string
    Field loopMode:float
    Field _keys:int[]
    Field _offsetCache:Object
    Field _highLimitsCache:Object
	
    Method clone:Animation()
    Method setKeys:Void(values:AnimationFrame[])
    Method _interpolate:Void(currentFrame:float, repeatCount:float, loopMode:float, offsetValue:float, highLimitValue:float)
    Method animate:Bool(target:Object, delay:float, from:int, ToFrame:int, loop:bool, speedRatio:float)
        
        Global ANIMATIONTYPE_FLOAT:int
        Global ANIMATIONTYPE_VECTOR3:int
        Global ANIMATIONTYPE_QUATERNION:int
        Global ANIMATIONTYPE_MATRIX:int

        Global ANIMATIONLOOPMODE_RELATIVE:int
        Global ANIMATIONLOOPMODE_CYCLE:int
        Global ANIMATIONLOOPMODE_CONSTANT:int
		
End