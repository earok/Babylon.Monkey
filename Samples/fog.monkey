Import samples

Class Fog Extends Sample
	
	Field sphere0:Mesh
	Field sphere1:Mesh
	Field sphere2:Mesh
	Field alpha:float

	Method Preload()
		Name = "Fog"
	End
	
	Method Create()
	
    	Local camera:= NFreeCamera("Camera", NVector3(0, 0, -20), Scene)
	    Local light:= NPointLight("Omni", NVector3(20, 100, 2), Scene)
    	sphere0 = Mesh.CreateSphere("Sphere0", 16, 3, Scene)
    	sphere1 = Mesh.CreateSphere("Sphere1", 16, 3, Scene)
    	sphere2 = Mesh.CreateSphere("Sphere2", 16, 3, Scene)

	    Local material0:= NStandardMaterial("mat0", Scene)
	    material0.diffuseColor = NColor3(1, 0, 0)
	    sphere0.material = material0
	    sphere0.position = NVector3(-10, 0, 0)

    	Local material1:= NStandardMaterial("mat1", Scene)
    	material1.diffuseColor = NColor3(1, 1, 0)
    	sphere1.material = material1

    	Local material2:= NStandardMaterial("mat2", Scene)
    	material2.diffuseColor = NColor3(1, 0, 1)
    	sphere2.material = material2
    	sphere2.position = NVector3(10, 0, 0)
    
    	camera.setTarget(NVector3(0, 0, 0))
    
'    ' Fog
 	   	Scene.fogMode = Scene.FOGMODE_EXP
    	Scene.fogDensity = 0.1
		
		Scene.activeCamera.attachControl(Game.Canvas2D)
			
	End
	
	Method Update()
	
        sphere0.position.z = 4 * Cosr(alpha)
        sphere1.position.z = 4 * Sinr(alpha)
        sphere2.position.z = 4 * Cosr(alpha)
        alpha += 0.1
		Super.Update()
		
	End

End