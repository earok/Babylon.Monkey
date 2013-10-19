Strict
Import babylon
extern

Class WebGLProgram
End
Class WebGLShader
End
Class WebGLUniformLocation
End
Class WebGLRenderingContext
End
Class VertexBuffer
End
Class IndexBuffer
End

Class Capabilities = "BABYLON.Capabilities"
	Field maxTexturesImageUnits:int
    Field maxTextureSize:int
    Field maxCubemapTextureSize:int
    Field maxRenderTextureSize:int
End

Function NEngine:Engine(canvas:Canvas, antialias:Bool) = "new BABYLON.Engine"
Class Engine = "BABYLON.Engine"
	
    Field forceWireframe:bool
    Field cullBackFaces:bool
    Field scenes:Scene[]
    Field isPointerLock:bool

    Method getAspectRatio:float()
    Method getRenderWidth:float()
    Method getRenderHeight:float()
    Method getRenderingCanvas:Canvas()
    Method setHardwareScalingLevel:Void(level:float)
    Method getLoadedTexturesCache:Texture[] ()
    Method getCaps:Capabilities()

    Method stopRenderLoop:Void()
    Method runRenderLoop:Void(renderFunction:CallbackFunction)

    Method switchFullscreen:Void(element:Canvas)
    Method clear:Void(color:IColor3, backBuffer:bool, depthStencil:bool)

    Method beginFrame:Void()
    Method endFrame:Void()
    Method resize:Void()
    Method bindFramebuffer:Void(texture:Texture)
    Method unBindFramebuffer:Void(texture:Texture)
    Method flushFramebuffer:Void()
    Method restoreDefaultFramebuffer:Void()

    Method createVertexBuffer:VertexBuffer(vertices:float[])
    Method createVertexBuffer:VertexBuffer(vertices:ArrayBuffer)
    Method createVertexBuffer:VertexBuffer(vertices:ArrayBufferView)
    Method createDynamicVertexBuffer:VertexBuffer(capacity:float)
    Method updateDynamicVertexBuffer:Void(vertexBuffer:VertexBuffer, vertices:float[])
    Method updateDynamicVertexBuffer:Void(vertexBuffer:VertexBuffer, vertices:ArrayBuffer)
    Method updateDynamicVertexBuffer:Void(vertexBuffer:VertexBuffer, vertices:ArrayBufferView)
    Method createIndexBuffer:IndexBuffer(indices:int, is32Bits:bool)
    Method bindBuffers:Void(vb:VertexBuffer, ib:IndexBuffer, vdecl:float[], strideSize:float, effect:Effect)
    Method bindMultiBuffers:Void(vertexBuffers:VertexBuffer[], indexBuffer:IndexBuffer, effect:Effect)
    Method _releaseBuffer:Void(vb:VertexBuffer)
    Method draw:Void(useTriangles:bool, indexStart:float, indexCount:float)
    Method createEffect:Effect(baseName:string, attributesNames:string, uniformsNames:string[], samplers:WebGLUniformLocation[], defines:string)
    Method createShaderProgram:WebGLProgram(vertexCode:string, fragmentCode:string, defines:string)
    Method getUniforms:WebGLUniformLocation[] (shaderProgram:WebGLProgram, uniformsNames:string[])
    Method getAttributes:float[] (shaderProgram:WebGLProgram, attributesNames:string[])
    Method enableEffect:Void(effect:Effect)
    Method setMatrices:Void(uniform:string, matrices:Matrix[])
    Method setMatrix:Void(uniform:string, matrix:Matrix)
    Method setVector2:Void(uniform:string, x:float, y:float)
    Method setVector3:Void(uniform:string, v:Vector3)
    Method setFloat2:Void(uniform:string, x:float, y:float)
    Method setFloat3:Void(uniform:string, x:float, y:float, z:float)
    Method setBool:Void(uniform:string, val:bool)
    Method setFloat4:Void(uniform:string, x:float, y:float, z:float, w:float)
    Method setColor3:Void(uniform:string, color:Color3)
    Method setColor4:Void(uniform:string, color:Color3, alpha:float)
    Method setState:Void(cullingMode:float)
    Method setDepthBuffer:Void(enable:bool)
    Method setDepthWrite:Void(enable:bool)
    Method setColorWrite:Void(enable:bool)
    Method setAlphaMode:Void(mode:float)
    Method setAlphaTesting:Void(enable:bool)
    Method getAlphaTesting:bool()
    Method wipeCaches:Void()
    Method getExponantOfTwo:float(value:float, max:float)
    Method createTexture:Texture(url:string, noMipmap:bool, invertY:bool, scene:Scene)
    Method createDynamicTexture:Texture(size:float, noMipmap:bool)
    Method updateDynamicTexture:Void(texture:Texture, canvas:HTMLCanvasElement, invertY:bool)
    Method updateVideoTexture:Void(texture:Texture, video:HTMLVideoElement)
    Method createRenderTargetTexture:Texture(size:float, generateMipMaps:bool)
    Method createCubeTexture:Texture(rootUrl:string, scene:Scene)
    Method _releaseTexture:Void(tex:Texture)
    Method bindSamplers:Void(effect:Effect)
    Method setTexture:Void(channel:float, texture:Texture)
    Method dispose:Void()

        Global shadersRepository:string

        Global ALPHA_DISABLE:float
        Global ALPHA_ADD:float
        Global ALPHA_COMBINE:float

        Global DELAYLOADSTATE_NONE:float
        Global DELAYLOADSTATE_LOADED:float
        Global DELAYLOADSTATE_LOADING:float
        Global DELAYLOADSTATE_NOTLOADED:float

        Global epsilon:float
        Global collisionEpsilon:float

        Function isSupported:bool()
    
End