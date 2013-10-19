Strict
Import babylon
Extern

Function N_Animatable:_Animatable(target:Object, from:int, toFrame:int, loop:bool, speedRatio:float, onAnimationEnd:CallbackFunction) = "new BABYLON._Animatable"
Class _Animatable = "BABYLON._Animatable"

    Field target:Object
    Field fromFrame:float
    Field toFrame:float
    Field loopAnimation:boolean
    Field animationStartDate:Date
    Field speedRatio:float
    Field onAnimationEnd:CallbackFunction

    Field animationStarted:bool

    Method _animate:Bool(delay:float)
	
End