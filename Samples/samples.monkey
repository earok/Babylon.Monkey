Import babylon
Import bones
Import bumpmap
Import charting
Import fog
Import heightmap
Import lights
Import multimat
Import octree
Import shadows
Import test

Global BGame:BabylonGame
Global CurrentState = -1

Function Main()
	
	BGame = New BabylonGame()
	BGame.AddState("0", New Bones())
	BGame.AddState("1", New Bumpmap())
	BGame.AddState("2", New Charting())
	BGame.AddState("3", New Fog())
	BGame.AddState("4", New HeightMap())
	BGame.AddState("5", New Lights())
	BGame.AddState("6", New MultiMat())
	BGame.AddState("7", New OctreeTest())
	BGame.AddState("8", New Shadows())
	BGame.AddState("9", New Test())
	CurrentState = BGame.StateCount - 2
	NextState()
	
	
End

Function NextState()
	CurrentState = (CurrentState + 1) Mod BGame.StateCount
	BGame.StartState(CurrentState, True)
End

Class Sample Extends BabylonState
	
	Field Name:String
	
	Method Update()
		If KeyHit(KEY_SPACE)
			NextState
		EndIf
	End
	
	Method LoadRender()
		Cls
		DrawText("Loading", 400, 275, 0.5, 0.5)
		DrawText(Name, 400, 300, 0.5, 0.5)
		DrawText("State " + (CurrentState + 1) + " of " + BGame.StateCount, 400, 325, 0.5, 0.5)
	End
	
	Method Render()
		DrawText(Name, 0, 0, 0, 0)
		DrawText("State " + (CurrentState+1) + " of " + BGame.StateCount, 0, 16, 0, 0)
		DrawText("Press space to cycle", 0, 32, 0, 0)
	End

End