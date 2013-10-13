Import samples

Class Bones Extends Sample
	
	Method Preload()
		Name = "Bones"
		Importer.LoadMesh("Rabbit", "Scenes/Rabbit/Rabbit.babylon")
		Importer.LoadMesh("him", "Scenes/Dude/Dude.babylon")
	End

	Method Create()
	
    	Local light:= NDirectionalLight("dir01", NVector3(0, -0.5, -1.0), Scene)
    	Local camera:= NArcRotateCamera("Camera", 0, 0, 10, NVector3(0, 30, 0), Scene)
	    camera.setPosition(NVector3(20, 70, 120))
		light.position = NVector3(20, 150, 70)
		Scene.ambientColor = NColor3(0.3, 0.3, 0.3)

		'Ground	
		Local ground:= Mesh.CreateGround("ground", 1000, 1000, 1, Scene, False);
    	Local groundMaterial:= NStandardMaterial("ground", Scene)
    	groundMaterial.diffuseColor = NColor3(0.2, 0.2, 0.2)
		groundMaterial.specularColor = NColor3(0, 0, 0)
		ground.material = groundMaterial
		ground.receiveShadows = True
		
		'Shadows
    	Local shadowGenerator:= NShadowGenerator(1024, light)

		Local rabbit:Mesh = Importer.Meshes.Get("Rabbit").Meshes[1]
		rabbit.scaling = NVector3(0.4, 0.4, 0.4)
		shadowGenerator.getShadowMap().renderListPush(rabbit)

        Local rabbit2:= rabbit.clone("rabbit2")
        Local rabbit3:= rabbit.clone("rabbit2")

        shadowGenerator.getShadowMap().renderListPush(rabbit2)
        shadowGenerator.getShadowMap().renderListPush(rabbit3)

        rabbit2.position = NVector3(-50, 0, -20);
        rabbit2.skeleton = rabbit.skeleton.clone("clonedSkeleton")

        rabbit3.position = NVector3(50, 0, -20);
        rabbit3.skeleton = rabbit.skeleton.clone("clonedSkeleton2")

        Scene.beginAnimation(rabbit.skeleton, 0, 100, True, 0.8)
        Scene.beginAnimation(rabbit2.skeleton, 73, 100, True, 0.8);
        Scene.beginAnimation(rabbit3.skeleton, 0, 72, True, 0.8);
		
		Local dude:Mesh = Importer.Meshes.Get("him").Meshes[0]
		For Local index = 0 To Importer.Meshes.Get("him").Meshes.Length - 1
'			shadowGenerator.getShadowMap().renderList.push(Importer.Meshes.Get("him").Meshes[index])
		Next
		
		dude.rotation.y = PI
		dude.position = NVector3(0, 0, -80);
		Scene.beginAnimation(Importer.Meshes.Get("him").Skeletons[0], 0, 100, True, 1.0)
		
		Scene.activeCamera.attachControl(Game.Canvas2D)

	End

End