Import samples

Class Test Extends Sample

	Field box:Mesh
	Field cylinder:Mesh
	Field torus:Mesh
	Field sphere:Mesh
	Field plane:Mesh
	
	Field spaceDek:Mesh
	Field spaceDek2:Mesh
	Field spaceDek3:Mesh
	
	Field material:StandardMaterial
	Field material2:StandardMaterial
	Field material3:StandardMaterial
	
	Field planeTexture:DynamicTexture
	
	Field spriteManager:SpriteManager
	
	Field background0:Layer
	
	Field frameCount:int
	Field alpha:float
	Field reloop:int
	Field startDate:int
	Field count:int
	
	Method Preload()
		Name = "Big Test!"
		Importer.LoadMesh("Vaisseau", "SpaceDek/SpaceDek.babylon")
	End
	
	
	Method Create()
		
    Local camera2:= NFreeCamera("Camera", NVector3(0, 0, -10), Scene)
    Local light:= NPointLight("Omni", NVector3(20, 100, 2), Scene)
    material = NStandardMaterial("leaves", Scene)
    material2 = NStandardMaterial("kosh transparent", Scene)
    material3 = NStandardMaterial("kosh", Scene)
    Local planeMaterial:= NStandardMaterial("plane material", Scene)
    box = Mesh.CreateBox("Box", 1.0, Scene)
    cylinder = Mesh.CreateCylinder("Cylinder", 2, 0.8, 0, 32, Scene)
    torus = Mesh.CreateTorus("Torus", 1.0, 0.5, 16, Scene)
    sphere = Mesh.CreateSphere("Sphere", 16, 3, Scene)
    plane = Mesh.CreatePlane("plane", 3, Scene)

    'material.diffuseColor = NColor3(0, 0, 1)
    material.diffuseTexture = NTexture("data/Assets/Tree.png", Scene)
    material.diffuseTexture.hasAlpha = true
    material.backFaceCulling = false
    material2.diffuseTexture = NTexture("data/Assets/kosh.jpg", Scene)
    material2.alpha = 0.5
    material2.backFaceCulling = false
    material3.diffuseTexture = NTexture("data/Assets/kosh.jpg", Scene)
    planeMaterial.backFaceCulling = false
    planeTexture = NDynamicTexture("dynamic texture", 512, Scene, True)
    planeTexture.hasAlpha = true
    planeMaterial.diffuseTexture = planeTexture
    plane.billboardMode = Mesh.BILLBOARDMODE_ALL

    box.material = material
    cylinder.material = material3
    torus.material = material2
    sphere.material = material
    plane.material = planeMaterial
    cylinder.position.x += 13
    torus.position.x -= 3
    torus.parent = sphere
    sphere.position.z = 3
    plane.position = NVector3(0, 7, 0)

    ' Particles
    Local particleSystem:= NParticleSystem("particles", 4000, Scene)
    particleSystem.particleTexture = NTexture("data/Assets/Flare.png", Scene)
    particleSystem.minAngularSpeed = -0.5
    particleSystem.maxAngularSpeed = 0.5
    particleSystem.minSize = 0.5
    particleSystem.maxSize = 1.0
    particleSystem.minLifeTime = 0.5
    particleSystem.maxLifeTime = 1.0
    particleSystem.emitter = torus
    particleSystem.emitRate = 300
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE
    particleSystem.minEmitBox = NVector3(0, 0.1, 0)
    particleSystem.maxEmitBox = NVector3(0, -0.1, 0)
    particleSystem.gravity = NVector3(0, -0.5, 0)
    particleSystem.start()

    ' Mirror
    Local mirror:= Mesh.CreateBox("Mirror", 1.0, Scene)
    mirror.scaling = NVector3(100.0, 0.01, 100.0)
    mirror.material = NStandardMaterial("mirror", Scene)
    StandardMaterial(mirror.material).diffuseColor = NColor3(0.4, 0.4, 0.4)
	Local mTexture:= NMirrorTexture("mirror", 512, Scene, True)
    StandardMaterial(mirror.material).reflectionTexture = mTexture
    mTexture.mirrorPlane = NPlane(0, -1.0, 0, -5.0)
    mTexture.renderList =[box, cylinder, torus, sphere]
	mTexture.level = 0.5
    mirror.position = NVector3(0, -5.0, 0)
    

	
    ' Sprites
    spriteManager = NSpriteManager("MonsterA", "data/Assets/Player.png", 500, 64, Scene)
    For Local index = 0 To 499
        Local sprite:= NSprite("toto", spriteManager)
        sprite.position.y = -4.5
        sprite.position.z = Rnd * 20 - 10
        sprite.position.x = Rnd * 20 - 10
        sprite.dir = Floor(Rnd() * 2 - 1)
        sprite.invertU = (sprite.dir < 0)

        sprite.playAnimation(0, 9, True, 100)

        sprite.color = NColor4(1, 0, 0, 1)
    Next
	

    ' Backgrounds
   	 background0 = NLayer("back0", "Data/Assets/Layer0_0.png", Scene)
    Local background1:= NLayer("back1", "Data/Assets/Layer1_0.png", Scene)
    Local foreground:= NLayer("back0", "Data/Assets/Layer2_0.png", Scene, True, NColor4(1, 0, 0, 1))


	
    ' Import
    spaceDek = Importer.Meshes.Get("Vaisseau").Meshes[0]
    For Local index = 0 To Importer.Meshes.Get("Vaisseau").Meshes.Length - 1
        MirrorTexture(StandardMaterial(mirror.material).reflectionTexture).renderListPush(Importer.Meshes.Get("Vaisseau").Meshes[index])
    Next

    spaceDek.position = NVector3(0, 20, 0)
    spaceDek.scaling = NVector3(0.3, 0.3, 0.3)


        spaceDek2 = spaceDek.clone("Vaisseau 2")

        spaceDek2.position = NVector3(40, 20, 0)
        spaceDek2.scaling = NVector3(0.3, 0.3, 0.3)

        ' Clone
        spaceDek3 = spaceDek2.clone("Vaisseau 3")
        spaceDek3.position = NVector3(-50, 20, 0)
        spaceDek3.scaling = NVector3(0.3, 0.3, 0.3)
        MirrorTexture(StandardMaterial(mirror.material).reflectionTexture).renderListPush(spaceDek3)
        Local children:= spaceDek3.getDescendants()
        For Local index = 0 To children.Length - 1
            MirrorTexture(StandardMaterial(mirror.material).reflectionTexture).renderListPush(children[index])
        Next

        spaceDek3.material = StandardMaterial(spaceDek2.material).clone("Vaisseau 3 mat")
        
        StandardMaterial(spaceDek3.material).emissiveColor = NColor3(1.0, 0, 0)

        Scene.beginAnimation(spaceDek3, 0, 100, True, 1.0)

	Scene.activeCamera.attachControl(Game.Canvas2D)

		
	End

	Method Update()

        box.rotation.y += 0.01
        cylinder.rotation.x += 0.01
        sphere.rotation.y += 0.02
        '  box3.scaling.y = 1 + Math.cos(alpha)
        torus.rotation.z += 0.01
        alpha += 0.01

        If (spaceDek)
            spaceDek.rotation.y += 0.01
        EndIf

        If (spaceDek2)
            spaceDek2.rotation.y -= 0.01
        EndIf

        If (spaceDek3)
            spaceDek3.rotation.y -= 0.01
        EndIf
        
        If (torus.intersectsMesh(box, True))
            material2.alpha = 1
            torus.scaling = NVector3(2, 2, 2)
        Else
            material2.alpha = 0.5
            torus.scaling = NVector3(1, 1, 1)
        EndIf

        ' Sprites
        frameCount += 1
        If frameCount > 3
            frameCount = 0
            reloop += 1
            For Local index = 0 To spriteManager.sprites.Length - 1
                Local sprite:= spriteManager.sprites[index]
                sprite.position.x -= 0.1 * sprite.dir

                If (reloop > 20)
                    sprite.dir *= -1
                    sprite.invertU = not sprite.invertU
                EndIf
            Next

            If (reloop > 20)
                reloop = 0
            EndIf
        EndIf
        
        ' Update dynamic texture
        Local diff = Millisecs - startDate' (NDate() - startDate)
        
        If (diff > 200)
		
            startDate = Millisecs'NDate()

            Local textureContext:= planeTexture.getContext()
            Local size:= planeTexture.getSize()
            Local text:String= count

            textureContext.clearRect(0, 0, size.width, size.height)

            textureContext.font = "bold 120px Calibri"
            local textSize := textureContext.measureText(text)
            textureContext.fillStyle = "white"
            textureContext.fillText(text, (size.width - textSize.width) / 2, (size.height - 120) / 2)

            planeTexture.update()

            count += 1
        EndIf
        
        ' Background
       background0.texture.uOffset += 0.001
		
		Super.Update()
	End
	
End