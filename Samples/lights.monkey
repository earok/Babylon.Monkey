Import samples

Class Lights Extends Sample

	Field alpha:float

	Field light0:PointLight
	Field light1:PointLight
	Field light2:PointLight
	
	Field lightSphere0:Mesh
	Field lightSphere1:Mesh
	Field lightSphere2:Mesh
	
	Method Preload()
	
		Name = "Lights"
		
	End
	
	Method Create()

    	Local camera:= NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
    	light0 = NPointLight("Omni0", NVector3(0, 10, 0), Scene)
    	light1 = NPointLight("Omni1", NVector3(0, -10, 0), Scene)
    	light2 = NPointLight("Omni2", NVector3(10, 0, 0), Scene)
    	Local light3:= NDirectionalLight("Dir0", NVector3(1, -1, 0), Scene)
    	Local material:= NStandardMaterial("kosh", Scene)
    	Local sphere:= Mesh.CreateSphere("Sphere", 16, 3, Scene)

    	camera.setPosition(NVector3(-10, 10, 0))
    
    	' Creating light sphere
    	lightSphere0 = Mesh.CreateSphere("Sphere0", 16, 0.5, Scene)
    	lightSphere1 = Mesh.CreateSphere("Sphere1", 16, 0.5, Scene)
   		lightSphere2 = Mesh.CreateSphere("Sphere2", 16, 0.5, Scene)
    
    	lightSphere0.material = NStandardMaterial("red", Scene)
    	StandardMaterial(lightSphere0.material).diffuseColor = NColor3(0, 0, 0)
    	StandardMaterial(lightSphere0.material).specularColor = NColor3(0, 0, 0)
    	StandardMaterial(lightSphere0.material).emissiveColor = NColor3(1, 0, 0)

    	lightSphere1.material = NStandardMaterial("green", Scene)
    	StandardMaterial(lightSphere1.material).diffuseColor = NColor3(0, 0, 0)
   		StandardMaterial(lightSphere1.material).specularColor = NColor3(0, 0, 0)
   		StandardMaterial(lightSphere1.material).emissiveColor = NColor3(0, 1, 0)

  		lightSphere2.material = NStandardMaterial("blue", Scene)
   		StandardMaterial(lightSphere2.material).diffuseColor = NColor3(0, 0, 0)
   		StandardMaterial(lightSphere2.material).specularColor = NColor3(0, 0, 0)
	    StandardMaterial(lightSphere2.material).emissiveColor = NColor3(0, 0, 1)

 	   ' Sphere material
	    material.diffuseColor = NColor3(1, 1, 1)
 		sphere.material = material

 	   ' Lights colors
 	   light0.diffuse = NColor3(1, 0, 0)
 	   light0.specular = NColor3(1, 0, 0)
    
 	   light1.diffuse = NColor3(0, 1, 0)
 	   light1.specular = NColor3(0, 1, 0)
    
 	   light2.diffuse = NColor3(0, 0, 1)
 	   light2.specular = NColor3(0, 0, 1)
    
 	   light3.diffuse = NColor3(1, 1, 1)
 	   light3.specular = NColor3(1, 1, 1)
   	 
   	 ' Skybox
   	Local skybox:= Mesh.CreateBox("skyBox", 100.0, Scene)
  	  Local skyboxMaterial:= NStandardMaterial("skyBox", Scene)
  	  skyboxMaterial.backFaceCulling = False
  	  skyboxMaterial.reflectionTexture = NCubeTexture("data/skybox/skybox", Scene)
  	  skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
  	  skyboxMaterial.diffuseColor = NColor3(0, 0, 0)
  	  skyboxMaterial.specularColor = NColor3(0, 0, 0)
  	  skybox.material = skyboxMaterial

  	  ' Animations
  	  Local alpha = 0
	  
	  Scene.activeCamera.attachControl(Game.Canvas2D)
	End

	Method Update()
	
        light0.position = NVector3(10 * Sinr(alpha), 0, 10 * Cosr(alpha))
        light1.position = NVector3(10 * Sinr(alpha), 0, -10 * Cosr(alpha))
        light2.position = NVector3(10 * Cosr(alpha), 0, 10 * Sinr(alpha))

        lightSphere0.position = light0.position
        lightSphere1.position = light1.position
        lightSphere2.position = light2.position

        alpha += 0.01;	
	
		Super.Update()
	End
	
End