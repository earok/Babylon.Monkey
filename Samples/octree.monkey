Import samples

Class Octree Extends Sample
	
	Method Preload()
		Name = "Octree"
	End
	
	Method Create()
		
    Local camera:= NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
    Local light0:= NPointLight("Omni0", NVector3(0, 10, 0), Scene)
    Local material:= NStandardMaterial("kosh", Scene)
    Local sphere:= Mesh.CreateSphere("sphere0", 16, 1, Scene)

    camera.setPosition(NVector3(-10, 10, 0))
    
    ' Sphere material
    material.diffuseColor = NColor3(0.5, 0.5, 0.5)
    material.specularColor = NColor3(1.0, 1.0, 1.0)
    material.specularPower = 32
    material.checkReadyOnEveryCall = false
    sphere.material = material
    
    ' Fog
    Scene.fogMode = Scene.FOGMODE_EXP
    Scene.fogDensity = 0.05
    
    ' Clone spheres
    local playgroundSize = 50
    For Local index = 0 To 7999
        Local clone:= sphere.clone("sphere" + (index + 1), Null, True)
        Local scale:= Rnd * 0.8 + 0.6
        clone.scaling = NVector3(scale, scale, scale)
        clone.position = NVector3(Rnd * 2 * playgroundSize - playgroundSize, Rnd * 2 * playgroundSize - playgroundSize, Rnd * 2 * playgroundSize - playgroundSize)
    Next
	
    sphere.setEnabled(false)
    Scene.createOrUpdateSelectionOctree()
	
	Scene.activeCamera.attachControl(Game.Canvas2D)
		
	End

End