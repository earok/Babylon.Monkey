Import samples

Class Bumpmap Extends Sample
	
	Field sphere:Mesh

	Method Preload()
		Name = "Bumpmap"
	End
	
	Method Create()
	
	    Local camera:= NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
	    Local light:= NPointLight("Omni", NVector3(20, 100, 2), Scene)
	    sphere = Mesh.CreateSphere("Sphere", 16, 3, Scene)
	    Local material:= NStandardMaterial("kosh", Scene)
		
		'Todo - move texture loading into impoter
	    material.bumpTexture = NTexture("data/normalMap.jpg", Scene)
	    material.diffuseColor = NColor3(1, 0, 0)
    
	    sphere.material = material
    
	    camera.setPosition(NVector3(-5, 5, 0))
        
		Scene.activeCamera.attachControl(Game.Canvas2D)
		
	End
	
	Method Update()
		Super.Update()
		sphere.rotation.y += 0.02
	End

End