Import samples

Class Charting_ChartData
	Field Label:String
	Field Value:Int
	Field Color:Color3
	Method New(label:String, value:Int, color:Color3)
		Label = label
		Value = value
		Color = color
	End
End

Class Charting Extends Sample
	
	Field operatingSystem_Series:= New List<Charting_ChartData>
	Field browsers_Series:= New List<Charting_ChartData>
	Field playgroundSize
	Field scale:float
	Field shadowGenerator:ShadowGenerator
	
	Method Preload()
		Name = "Charting (I have no idea why this test fails so badly, will look into it later - E)"
	End
	
	Method Create()
    	Local light:= NDirectionalLight("dir01", NVector3(0, -0.5, 1.0), Scene)
    	Local camera:= NArcRotateCamera("Camera", 0, 0, 10, Vector3.Zero(), Scene)
    	camera.setPosition(NVector3(20, 70, -100))
    	light.position = NVector3(0, 25, -50)
    
    	scale = 0.6
		operatingSystem_Series.AddLast(New Charting_ChartData("Macintosh", 12, NColor3(0, 1, 0)))
		operatingSystem_Series.AddLast(New Charting_ChartData("Windows", 77, NColor3(1, 0, 0)))
		operatingSystem_Series.AddLast(New Charting_ChartData("Linux", 4, NColor3(1, 0, 1)))
		operatingSystem_Series.AddLast(New Charting_ChartData("iOS", 3, NColor3(1, 1, 0)))
		operatingSystem_Series.AddLast(New Charting_ChartData("Android", 2, NColor3(0, 0, 1)))
		operatingSystem_Series.AddLast(New Charting_ChartData("Win Phone", 1, NColor3(1, 1, 1)))

		browsers_Series.AddLast(New Charting_ChartData("IE", 32, NColor3(0, 0, 1)))
		browsers_Series.AddLast(New Charting_ChartData("Chrome", 28, NColor3(1, 0, 0)))
		browsers_Series.AddLast(New Charting_ChartData("Firefox", 16, NColor3(1, 0, 1)))
		browsers_Series.AddLast(New Charting_ChartData("Opera", 14, NColor3(1, 1, 0)))
		browsers_Series.AddLast(New Charting_ChartData("Safari", 10, NColor3(0, 1, 1)))
		
    	playgroundSize = 100
		Local background:Mesh = Mesh.CreatePlane("background", playgroundSize, Scene)
   		background.material = NStandardMaterial("background", Scene)
    	background.scaling.y = 0.5
    	background.position.z = playgroundSize / 2 - 0.5
    	background.position.y = playgroundSize / 4
    	background.receiveShadows = True
    	Local backgroundTexture:= NDynamicTexture("dynamic texture", 512, Scene, True)
    	StandardMaterial(background.material).diffuseTexture = backgroundTexture
    	StandardMaterial(background.material).specularColor = NColor3(0, 0, 0)
    	background.material.backFaceCulling = False

    	backgroundTexture.drawText("Eternalcoding", 10, 80, "bold 70px Segoe UI", "white", "#555555")
    	backgroundTexture.drawText("- browsers statistics -", 10, 250, "35px Segoe UI", "white", "")
    	''background.material.reflectionTexture = NMirrorTexture("mirror", 1024, Scene, true)
    	''background.material.reflectionTexture.mirrorPlane = NPlane(0, 0, 1.0, -playgroundSize / 2 + 0.5)
    	''background.material.reflectionTexture.level = 0.5

    	Local ground:Mesh = Mesh.CreateGround("ground", playgroundSize, playgroundSize, 1, Scene, False)
    	Local groundMaterial:StandardMaterial = NStandardMaterial("ground", Scene)
    	groundMaterial.diffuseColor = NColor3(0.5, 0.5, 0.5)
    	groundMaterial.specularColor = NColor3(0, 0, 0)
    	ground.material = groundMaterial
    	ground.receiveShadows = True
    	ground.position.y = -0.1
    	'background.material.reflectionTexture.renderList.push(ground)
    
    	shadowGenerator = NShadowGenerator(1024, light)
		
    	camera.lowerAlphaLimit = PI;
    	camera.upperAlphaLimit = 2 * PI;
    	camera.lowerBetaLimit = 0.1;
    	camera.upperBetaLimit = (PI / 2) * 0.99;
    	camera.lowerRadiusLimit = 5;
   		camera.upperRadiusLimit = 150;
		
		createSeries(browsers_Series)
		
		Scene.activeCamera.attachControl(Game.Canvas2D)
		
	End
	
    Method createSeries(series:List<Charting_ChartData>)
        Local margin:Float = 2
        Local offset:Float = playgroundSize / (series.Count) - margin
        Local x:Float = -playgroundSize / 2 + offset / 2

		For Local data:= EachIn series

            Local bar:= Mesh.CreateBox(data.Label, 1.0, Scene)
            bar.scaling = NVector3(offset / 2.0, 0, offset / 2.0)
            bar.position.x = x
            bar.position.y = 0
            
            ' Animate a bit
         	Local animation:= NAnimation("anim", "scaling", 30, Animation.ANIMATIONTYPE_VECTOR3)
            animation.setKeys([NAnimationFrame(0, NVector3(offset / 2.0, 0, offset / 2.0)), NAnimationFrame(100, NVector3(offset / 2.0, data.Value * scale, offset / 2.0))])
            bar.animationsPush(animation)
            
            animation = NAnimation("anim2", "position.y", 30, Animation.ANIMATIONTYPE_FLOAT)
            animation.setKeys([NAnimationFrame(0, 0.0), NAnimationFrame(100, (data.Value * scale) / 2.0)])
			bar.animationsPush(animation)
            Scene.beginAnimation(bar, 0, 100, False, 2.0)

            ' Material
            bar.material = NStandardMaterial(data.Label + "mat", Scene)
            StandardMaterial(bar.material).diffuseColor = data.Color
            StandardMaterial(bar.material).emissiveColor = data.Color.scale(0.3)
            StandardMaterial(bar.material).specularColor = NColor3(0, 0, 0)

            ' Shadows
            shadowGenerator.getShadowMap().renderListPush(bar)
            
            ' Mirror
          '  background.material.reflectionTexture.renderList.push(bar);
            
            ' Legend
            Local barLegend:= Mesh.CreateGround(data.Label + "Legend", playgroundSize / 2, offset * 2, 1, Scene, False)
            barLegend.position.x = x
            barLegend.position.z = -playgroundSize / 4
            barLegend.rotation.y = PI / 2
            
            barLegend.material = NStandardMaterial(data.Label + "LegendMat", Scene)
            Local barLegendTexture:= NDynamicTexture("dynamic texture", 512, Scene, True)
            barLegendTexture.hasAlpha = true;
            StandardMaterial(barLegend.material).diffuseTexture = barLegendTexture
            StandardMaterial(barLegend.material).emissiveColor = NColor3(0.4, 0.4, 0.4)
            
            Local size:= barLegendTexture.getSize();
            barLegendTexture.drawText(data.Label + " (" + data.Value + "%)", 80, size.height / 2 + 30, "bold 50px Segoe UI", "white", "transparent");
         '   background.material.reflectionTexture.renderList.push(barLegend);
            
            ' Going next
            x += offset + margin;
		Next
			
    End

End