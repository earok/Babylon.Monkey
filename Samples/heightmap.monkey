Import samples

Class HeightMap Extends Sample
	
	Field camera:ArcRotateCamera

	Method Preload()
	
		Name = "HeightMap"
	
	End
	
	Method Create()
		
    	camera = NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
    	Local sun:= NPointLight("Omni0", NVector3(60, 100, 10), Scene)

		camera.setPosition(NVector3(-20, 20, 0))
    
	    Local skybox:= Mesh.CreateBox("skyBox", 100.0, Scene)
    	Local skyboxMaterial:= NStandardMaterial("skyBox", Scene)
    	skyboxMaterial.backFaceCulling = False
    	skyboxMaterial.reflectionTexture = NCubeTexture("data/skybox/skybox", Scene)
    	skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    	skyboxMaterial.diffuseColor = NColor3(0, 0, 0)
    	skyboxMaterial.specularColor = NColor3(0, 0, 0)
    	skybox.material = skyboxMaterial
    
    	' Ground
    	Local ground:= Mesh.CreateGroundFromHeightMap("ground", "data/heightMap.png", 100, 100, 100, 0, 10, Scene, False)
   	 	Local groundMaterial:= NStandardMaterial("ground", Scene)
    	groundMaterial.diffuseTexture = NTexture("data/ground.jpg", Scene)
    	groundMaterial.diffuseTexture.uScale = 6
    	groundMaterial.diffuseTexture.vScale = 6
    	groundMaterial.specularColor = NColor3(0, 0, 0)
    	ground.position.y = -2.05
    	ground.material = groundMaterial
		
		Scene.activeCamera.attachControl(Game.Canvas2D)
	
	End
	
	Method Update()
		
		If (camera.beta < 0.1)
            camera.beta = 0.1
        Else If (camera.beta > (PI / 2.0) * 0.9)
            camera.beta = (PI / 2.0) * 0.9
		EndIf
		
        If (camera.radius > 30) camera.radius = 30

        If (camera.radius < 5) camera.radius = 5
		
		Super.Update()
		
	End

End