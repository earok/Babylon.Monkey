Import samples

Class MultiMat Extends Sample
	
	Method Preload()
	
		Name = "Multi Material"
	
	End
	
	Method Create()
		
		Local camera:= NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
    	Local light:= NPointLight("Omni", NVector3(20, 100, 2), Scene)

    	Local material0:= NStandardMaterial("mat0", Scene)
    	material0.diffuseColor = NColor3(1, 0, 0)
    	material0.bumpTexture = NTexture("Data/normalMap.jpg", Scene)
    
    	Local material1:= NStandardMaterial("mat1", Scene)
    	material1.diffuseColor = NColor3(0, 0, 1)
    
    	Local material2:= NStandardMaterial("mat2", Scene)
    	material2.emissiveColor = NColor3(0.4, 0, 0.4)

    	Local multimat:= NMultiMaterial("multi", Scene)
    	multimat.subMaterialsPush(material0)
    	multimat.subMaterialsPush(material1)
    	multimat.subMaterialsPush(material2)

    	Local sphere:= Mesh.CreateSphere("Sphere0", 16, 3, Scene)
    	sphere.material = multimat

    	sphere.subMeshes =[]
    	Local verticesCount = sphere.getTotalVertices()
    
    	sphere.subMeshesPush(NSubMesh(0, 0, verticesCount, 0, 900, sphere))
    	sphere.subMeshesPush(NSubMesh(1, 0, verticesCount, 900, 900, sphere))
    	sphere.subMeshesPush(NSubMesh(2, 0, verticesCount, 1800, 2088, sphere))

    	camera.setPosition(NVector3(-3, 3, 0))
		
		Scene.activeCamera.attachControl(Game.Canvas2D)
		
	End

End