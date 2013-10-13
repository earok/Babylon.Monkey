Strict
Import mojo
Extern

 Class IColor3
    Field r:Float
    Field g:Float
    Field b:Float
End

Class Size2D
   Field width:Float
   Field height:Float
End

Function NColor3:Color3(initialR:Float, initialG:Float, initialB:Float) = "new BABYLON.Color3"
Class Color3 Extends IColor3 = "BABYLON.Color3"
	Field r:Float
    Field g:Float
    Field b:Float

    Method equals:bool(otherColor:Color3)
    Method equals:bool(otherColor:Color4)
    Method toString:string()
    Method clone:Color3()

    Method multiply:Color3(otherColor:Color3)
    Method mutilplyToRef:Void(otherColor:Color3, result:Color3)
    Method scale:Color3(scale:float)
    Method scaleToRef:Void(scale:float, result:Color3)
    Method copyFrom:Void(source:Color3)
    Method copyFromFloats:Void(r:float, g:float, b:float)
        
    Function FromArray:Color3(arr:Float[])
	
End

Function NColor4:Color4(initialR:Float, initialG:Float, initialB:Float, initialA:FLoat) = "new BABYLON.Color4"
Class Color4 Extends IColor3 = "BABYLON.Color4"
      Field r:float
       field g: float
     Field b:float
      Field a:float
	  
     Method addInPlace:Void(right:Color4)
     Method add:Color4(right:Color4)
     Method subtract:Color4(right:Color4)
     Method subtractToRef:Void(right:Color4, result:Color4)
     Method scale:Color4(factor:float)
     Method scale:Void(factor:float, result:Color4)

     Method toString:string()
     Method clone:Color4()

        Function Lerp:Color4(left:float, right:float, amount:float)
        Function FromArray:Color4(arr:float[])

End

Class Matrix = "BABYLON.Matrix"
	
End

Function NPlane:Plane(a:float, b:float, c:float, d:float) = "new BABYLON.Plane"
Class Plane = "BABYLON.Plane"

    Field normal:Vector3
    Field d:float

    Method normalize:Void()
    Method transform:Plane(transformation:Matrix)
    Method dotCoordinate:Float(point:Vector3)
    Method copyFromPoints:Void(point1:Vector3, point2:Vector3, point3:Vector3)
    Method isFrontFacingTo:bool(direction:Vector3, epsilon:Vector3)
    Method signedDistanceTo:Float(point:Vector3)

        Function FromArray:Plane(arr:Float[])
        Function FromPoints:Plane(point1:Vector3, point2:Vector3, point3:Vector3)
        Function FromPositionAndNormal:Plane(origin:Vector3, normal:Vector2)
        Function SignedDistanceToPlaneFromPositionAndNormal:Float(origin:Vector3, normal:Vector3, point:Float)
		
End

Function NVector3:Vector3(x:Float, y:Float, z:Float) = "new BABYLON.Vector3"
Class Vector3 = "BABYLON.Vector3"

	Field x:Float
	Field y:Float
	Field z:float
	
	Function Zero:Vector3()

End

Class Tools = "BABYLON.Tools"
	Function _MeasureFps:Void()
End