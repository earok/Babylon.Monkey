Strict
Import babylon
Extern

Function NEffect:Effect(baseName:string, attributesNames:string[], uniformsNames:string[], samplers:WebGLUniformLocation[], engine:Engine, defines:string) = "new BABYLON.Effect"
Class Effect = "BABYLON.Effect"
    Field name:string
    Field defines:string

    Method isReady:bool()
    Method getProgram:WebGLProgram()
    Method getAttribute:string(index:float)
    Method getAttributesNames:string()
    Method getAttributesCount:int()
    Method getUniformIndex:int(uniformName:string)
    Method getUniform:string(uniformName:string)
    Method getSamplers:WebGLUniformLocation[] ()
    Method getCompilationError:string()

    Method _prepareEffect:Void(vertexSourceCode:string, fragmentSourceCode:string, attributeNames:string[], defines:string)
    Method setTexture:Void(channel:string, texture:Texture)
    Method setMatrices:Void(uniformName:string, matrices:Matrix[])
    Method setMatrix:Void(uniformName:string, matrix:Matrix)
    Method setBool:Void(uniformName:string, val:boolean)
    Method setVector3:Void(uniformName:string, val:Vector3)
    Method setFloat2:Void(uniformName:string, x:float, y:float)
    Method setFloat3:Void(uniformName:string, x:float, y:float, z:float)
    Method setFloat4:Void(uniformName:string, x:float, y:float, z:float, w:float)
    Method setColor3:Void(uniformName:string, color:Color3)
   Method setColor4:Void(uniformName:string, color:Color4)

        Global ShadersStore:Object
		
End