Strict
Import babylon
Extern


Class Tools = "BABYLON.Tools"

    Function ExtractMinAndMax:Object(positions:float[], start:float, count:float)
    Function GetPointerPrefix:string()
    Function QueueNewFrame:Void(func:CallbackFunction)
    Function RequestFullscreen:Void(element:HTMLElement)
    Function ExitFullscreen:Void()
    Global BaseUrl:string
    Function LoadImage:HTMLImageElement(url:string, onload:CallbackFunction, onerror:CallbackFunction, database:Database)
    Function LoadFile:Void(url:string, callback:CallbackFunction, progressCallback:CallbackFunction)
    Function isIE:Bool()
    Function WithinEpsilon:bool(a:float, b:float)
    Function cloneValue:Void(source:Object, destinationObject:Object)
    Function DeepCopy:Void(source:Object, destination:Object, doNotCopyList:string[], mustCopyList:string[])
    Global fpsRange:float
    Global previousFramesDuration:float[]
    Function GetFps:float()
    Function GetDeltaTime:float()
    Function _MeasureFps:Void()
	
	Function LoadDDSTexture:Float(gl:WebGLRenderingContext, ext:any, data:ArrayBuffer)
	
End

Function NSmartArray:SmartArray(capacity:float) = "new BABYLON.Tools.SmartArray"
Class SmartArray = "BABYLON.Tools.SmartArray"

    Field data:Object[]
    Field length:float

    Method push:Void(value:Object)
    Method pushNoDuplicate:Void(value:Object)
    Method reset:Void()
    Method concat:Void(arr:SmartArray)
    Method concatWithNoDuplicate:Void(arr:SmartArray)
    Method indexOf:float(value:Object)

End