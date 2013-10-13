Import samples

Class Shadows Extends Sample
	
	Field camera:ArcRotateCamera
	Field torus:Mesh
	Field torus2:Mesh

	Method Preload()
		Name = "Shadows"
	End
	
	Method Create()
		
    camera = NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
    Local light:= NDirectionalLight("dir01", NVector3(0, -1, -0.2), Scene)
    Local light2:= NDirectionalLight("dir02", NVector3(-1, -2, -1), Scene)
    light.position = NVector3(0, 30, 0)
    light2.position = NVector3(10, 20, 10)

    light.intensity = 0.6
    light2.intensity = 0.6

    camera.setPosition(NVector3(-20, 20, 0))
    
    ' Skybox
    Local skybox:= Mesh.CreateBox("skyBox", 1000.0, Scene)
    Local skyboxMaterial:= NStandardMaterial("skyBox", Scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = NCubeTexture("data/skybox/night", Scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
    skyboxMaterial.diffuseColor = NColor3(0, 0, 0)
    skyboxMaterial.specularColor = NColor3(0, 0, 0)
    skybox.material = skyboxMaterial

    ' Ground
    Local ground:= Mesh.CreateGround("ground", 1000, 1000, 1, Scene, False)
    Local groundMaterial:= NStandardMaterial("ground", Scene)
    groundMaterial.diffuseTexture = NTexture("data/assets/grass.jpg", Scene)
    groundMaterial.diffuseTexture.uScale = 60
    groundMaterial.diffuseTexture.vScale = 60
    groundMaterial.diffuseColor = NColor3(0, 0, 0)
    groundMaterial.specularColor = NColor3(0, 0, 0)
    ground.position.y = -2.05
    ground.material = groundMaterial
    
    ' Torus
    torus = Mesh.CreateTorus("torus", 8, 2, 32, Scene, False)
    torus.position.y = 6.0
    torus2 = Mesh.CreateTorus("torus2", 4, 1, 32, Scene, False)
    torus2.position.y = 6.0
    
    ' Shadows
    Local shadowGenerator:= NShadowGenerator(512, light)
    shadowGenerator.getShadowMap().renderListPush(torus)
    shadowGenerator.getShadowMap().renderListPush(torus2)
    
    Local shadowGenerator2:= NShadowGenerator(512, light2)
    shadowGenerator2.getShadowMap().renderListPush(torus)
    shadowGenerator2.getShadowMap().renderListPush(torus2)
    shadowGenerator2.useVarianceShadowMap = false

    ground.receiveShadows = True
	
		Scene.activeCamera.attachControl(Game.Canvas2D)
	
	End
	
	Method Update()
	
		        If (camera.beta < 0.1)
            camera.beta = 0.1
        Else If (camera.beta > (PI / 2.0) * 0.99)
            camera.beta = (PI / 2.0) * 0.99
		EndIf

        If (camera.radius > 150) camera.radius = 150

        If (camera.radius < 5) camera.radius = 5
			
        torus.rotation.x += 0.01
        torus.rotation.z += 0.02
        torus2.rotation.x += 0.02
        torus2.rotation.y += 0.01
		
		Super.Update()		
			
	End
	
End