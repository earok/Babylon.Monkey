Strict
Import babylon
Extern

Class RayTriangleIntersection
    Field hit:bool
    Field distance:float
    Field bu:float
    Field bv:float
End

Class IColor3
    Field r:Float
    Field g:Float
    Field b:Float
End

Class Size2D
   Field width:Float
   Field height:Float
End

Class Sphere
    Field center:Vector3
    Field radius:float
End

Function NRay:Ray(origin:Vector3, direction:Vector3) = "new BABYLON.Ray"
Class Ray = "BABYLON.Ray"
    
	Field origin:Vector3
    Field direction:Vector3

    Method intersectsBox:bool(box:BoundingBox)
    Method intersectsSphere:bool(sphere:Sphere)
    Method intersectsTriangle:RayTriangleIntersection(vertex0:Vector3, vertex1:Vector3, vertex2:Vector3)

    Function CreateNew:Ray(x:float, y:float, viewportWidth:float, viewportHeight:float, world:Matrix, view:Matrix, projection:Matrix)

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

Function NVector2:Vector2(x:float, y:float) = "new BABYLON.Vector2"
Class Vector2 = "BABYLON.Vector2"
        
	Field x:float
    Field y:float

    Method toString:string()

    Method add:Vector2(other:Vector2)
    Method subtract:Vector2(other:Vector2)
    Method negate:Vector2()
    Method scaleInPlace:Void(scale:float)
    Method scale:Vector2(scale:float)
    Method equals:Bool(other:Vector2)
    Method length:Float()
    Method lengthSquared:Float()
    Method normalize:Void()
    Method clone:Vector2()

        Function Zero:Vector2()
        Function CatmullRom:Vector2(value1:Vector2, value2:Vector2, value3:Vector2, value4:Vector2, amount:float)
        Function Clamp:Vector2(value:Vector2, min:Vector2, max:Vector2)
        Function Hermite:Vector2(value1:Vector2, tangent1:Vector2, value2:Vector2, tangent2:Vector2, amount:float)
        Function Lerp:Vector2(start:Vector2, EndVector:Vector2, amount:float)
        Function Dot:float(left:Vector2, right:Vector2)
        Function Normalize:Vector2(vector:Vector2)
        Function Minimize:Vector2(left:Vector2, right:Vector2)
        Function Maximize:Vector2(left:Vector2, right:Vector2)
        Function Transform:Vector2(vector:Vector2, transformation:float[])
        Function Distance:float(value1:Vector2, value2:Vector2)
        Function DistanceSquared:float(value1:Vector2, value2:Vector2)

End

Function NVector3:Vector3(x:Float, y:Float, z:Float) = "new BABYLON.Vector3"
Class Vector3 = "BABYLON.Vector3"

	Field x:Float
	Field y:Float
	Field z:float
	
    Method toString:string()

    Method addInPlace:Void(otherVector:Vector3)
    Method add:Vector3(other:Vector3)
    Method addToRef:Void(otherVector:Vector3, result:Vector3)
    Method suntractInPlace:Void(otherVector:Vector3)
    Method subtract:Vector3(other:Vector3)
    Method subtractToRef:Void(otherVector:Vector3, result:Vector3)
    Method subtractFromFloatsTo:Vector3(x:float, y:float, z:float)
    Method subtractFromFloatsToRef:Void(x:float, y:float, z:float, result:Vector3)
    Method negate:Vector3()
    Method scaleInPlace:Void(scale:float)
    Method scale:Vector3(scale:float)
    Method scaleToRef:Void(scale:float, result:Vector3)
    Method equals:bool(other:Vector3)
    Method equalsToFloats:bool(x:float, y:float, z:float)
    Method multiplyInPlace:Void(other:Vector3)
    Method multiply:Vector3(other:Vector3)
    Method multiplyToRef:Void(otherVector:Vector3, result:Vector3)
    Method multiplyByFloats:Vector3(x:float, y:float, z:float)
    Method divide:Vector3(other:Vector3)
    Method divideToRef:Void(otherVector:Vector3, result:Vector3)
    Method length:float()
    Method lengthSquared:float()
    Method normalize:Void()
    Method clone:Vector3()
    Method copyFrom:Void(source:Vector3)
    Method copyFromFloats:Void(x:float, y:float, z:float)

        Function FromArray:Vector3(arr:float[], offset:float)
        Function FromArrayToRef:Void(arr:float[], offset:float, result:Vector3)
        Function FromFloatsToRef:Void(x:float, y:float, z:float, result:Vector3)
        Function Zero:Vector3()
        Function Up:Vector3()
        Function TransformCoordinates:Vector3(vector:Vector3, transformation:Matrix)
        Function TransformCoordinatesToRef:Void(vector:Vector3, transformation:Matrix, result:Vector3)
        Function TransformCoordinatesFromFloatsToRef:Void(x:float, y:float, z:float, transformation:Matrix, result:Vector3)
        Function TransformNormal:Vector3(vector:Vector3, transformation:Matrix)
        Function TransformNormalToRef:Void(vector:Vector3, transformation:Matrix, result:Vector3)
        Function TransformNormalFromFloatsToRef:Void(x:float, y:float, z:float, transformation:Matrix, result:Vector3)

        Function CatmullRom:Vector3(value1:Vector3, value2:Vector3, value3:Vector3, value4:Vector3, amount:float)
        Function Clamp:Vector3(value:Vector3, min:Vector3, max:Vector3)
        Function Hermite:Vector3(value1:Vector3, tangent1:Vector3, value2:Vector3, tangent2:Vector3, amount:float)
        Function Lerp:Vector3(start:Vector3, EndVector:Vector3, amount:float)
        Function Dot:float(left:Vector3, right:Vector3)
        Function Cross:Vector3(left:Vector3, right:Vector3)
        Function CrossToRef:Void(left:Vector3, right:Vector3, result:Vector3)
        Function Normalize:Vector3(vector:Vector3)
        Function NormalizeToRef:Void(vector:Vector3, result:Vector3)
        Function Unproject:Vector3(source:Vector3, viewportWidth:float, viewportHeight:float, world:Matrix, view:Matrix, projection:Matrix)

        Function Minimize:Vector3(left:Vector3, right:Vector3)
        Function Maximize:Vector3(left:Vector3, right:Vector3)
        Function Distance:float(value1:Vector3, value2:Vector3)
        Function DistanceSquared:float(value1:Vector3, value2:Vector3)

End

Function NQuaternion:Quaternion(x:float, y:float, z:float, w:float) = "new BABYLON.Quaternion"
Class Quaternion = "BABYLON.Quaternion"

    Field x:float
    Field y:float
    Field z:float
    Field w:float

    Method toString:string()

    Method equals:bool(otherQuaternion:Quaternion)
    Method clone:Quaternion()
    Method copyFrom:Void(other:Quaternion)
    Method add:Quaternion(other:Quaternion)
    Method scale:Quaternion(factor:float)
    Method multiply:Quaternion(q1:Quaternion)
    Method multiplyToRef:Void(q1:Quaternion, result:Quaternion)
    Method length:float()
    Method normalize:Void()
    Method toEulerAngles:Vector3()
    Method toRotationMatrix:Void(result:Quaternion)

        Function FromArray:Quaternion(arr:float[], offset:float)
        Function RotationYawPitchRoll:Quaternion(yaw:float, pitch:float, roll:float)
        Function RotationYawPitchRollToRef:Void(yaw:float, pitch:float, roll:float, result:Quaternion)
        Function Slerp:Quaternion(left:Quaternion, right:Quaternion, amount:float)
		
End

Function NMatrix:Matrix() = "new BABYLON.Matrix"
Class Matrix = "BABYLON.Matrix"

	Field m:float[]

    Method isIdentity:bool()
    Method determinant:float()
    Method toArray:float[] ()
    Method invert:Void()
    Method invertToRef:Void(other:Matrix)
    Method setTranslations:Void(vector3:Vector3)
    Method multiply:Matrix(other:Matrix)
    Method copyFrom:Void(other:Matrix)
    Method multiplyToRef:Void(other:Matrix, result:Matrix)
    Method multiplyToArray:Void(other:Matrix, result:float[], offset:float)
    Method equals:bool(other:Matrix)
   Method clone:Matrix()

    Function FromArray:Matrix(arr:float[], offset:float)
    Function FromArrayToRef:Void(arr:float[], offset:float, result:Matrix)
    Function FromValues:Matrix(m11:float, m12:float, m13:float, m14:float, m21:float, m22:float, m23:float, m24:float, m31:float, m32:float, m33:float, m34:float, m41:float, m42:float, m43:float, m44:float)
    Function FromValuesToRef:Void(m11:float, m12:float, m13:float, m14:float, m21:float, m22:float, m23:float, m24:float, m31:float, m32:float, m33:float, m34:float, m41:float, m42:float, m43:float, m44:float, result:Matrix)
        Function Identity:Matrix()
        Function IdentityToRef:Void(result:Matrix)
        Function Zero:Matrix()
        Function RotationX:Matrix(angle:float)
        Function RotationXToRef:Void(angle:float, result:Matrix)
        Function RotationY:Matrix(angle:float)
        Function RotationYToRef:Void(angle:float, result:Matrix)
        Function RotationZ:Matrix(angle:float)
        Function RotationZToRef:Void(angle:float, result:Matrix)
        Function RotationAxis:Matrix(axis:Vector3, angle:float)
        Function RotationYawPitchRoll:Matrix(yaw:float, pitch:float, roll:float)
        Function Scaling:Matrix(scaleX:float, scaleY:float, scaleZ:float)
        Function ScalingToRef:Void(scaleX:float, scaleY:float, scaleZ:float, result:Matrix)
        Function Translation:Matrix(x:float, y:float, z:float)
        Function TranslationToRef:Void(x:float, y:float, z:float, result:Matrix)
        Function LookAtLH:Matrix(eye:Vector3, target:Vector3, up:Vector3)
        Function LookAtLHToRef:Void(eye:Vector3, target:Vector3, up:Vector3, result:Matrix)
        Function OrthoLH:Matrix(width:float, height:float, znear:float, zfar:float)
        Function OrthoOffCenterLH:Matrix(left:float, right:float, bottom:float, top:float, znear:float, zfar:float)
        Function OrthoOffCenterLHToRef:Void(left:float, right:float, bottom:float, top:float, znear:float, zfar:float, result:Matrix)
        Function PerspectiveLH:Matrix(width:float, height:float, znear:float, zfar:float)
        Function PerspectiveFovLH:Matrix(fov:float, aspect:float, znear:float, zfar:float)
        Function PerspectiveFovLHToRef:Void(fov:float, aspect:float, znear:float, zfar:float, result:Matrix)
        Function AffineTransformation:Matrix(scaling:float, rotationCenter:Vector3, rotation:Quaternion, translation:Vector3)
        Function GetFinalMatrix:Matrix(viewport:Size2D, world:Matrix, view:Matrix, projection:Matrix)
        Function Transpose:Matrix(matrix:Matrix)
        Function Reflection:Matrix(plane:Plane)
        Function ReflectionToRef:Void(plane:Plane, result:Matrix)
		
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

Function NFrustrum:Frustum(transform:Matrix) = "new BABYLON.Frustrum"
Class Frustum = "BABYLON.Frustrum"
	
        Field frustrumPlanes:Plane[]

        Function GetPlanes:Plane[] (transform:Matrix)
		
End