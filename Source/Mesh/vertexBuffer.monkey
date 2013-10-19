Strict
Import babylon
Extern

Function NVertexBuffer:VertexBuffer(mesh:Mesh, data:object[], kind:string, updatable:bool) = "new BABYLON.VertexBuffer"
Class VertexBuffer = "BABYLON.VertexBuffer"

    Method isUpdatable:bool()
    Method getData:Object[] ()
    Method getStrideSize:Float()
    Method update:Void(data:object[])
    Method dispose:Void()

    Field PositionKind:string
    Field NormalKind:string
    Field UVKind:string
    Field UV2Kind:string
    Field ColorKind:string
    Field MatricesIndicesKind:string
    Field MatricesWeightsKind:string
	
End