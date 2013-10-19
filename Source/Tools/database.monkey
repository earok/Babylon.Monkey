Strict
Import babylon
Extern


Function NDatabase:Database(urlToScene:Bool) = "new BABYLON.Database"
Class Database = "BABYLON.Database"

    Field currentSceneUrl:string
    Field db:Database
    Field enableSceneOffline:bool
    Field enableTexturesOffline:bool
    Field manifestVersionFound:number
    Field mustUpdateRessources:bool
    Field hasReachedQuota:bool

    Field isUASupportingBlobStorage:bool

    Method parseURL:string(url:string)
    Method ReturnFullUrlLocation:string(url:string)
    Method checkManifestFile:Void()
    Method openAsync:Void(successCallback:CallbackFunction, errorCallback:CallbackFunction)
    Method loadImageFromDB:Void(url:string, image:HTMLImageElement)
    Method _loadImageFromDBAsync:Void(url:string, image:HTMLImageElement, notInDBCallback:CallbackFunction)
    Method _saveImageIntoDBAsync:Void(url:string, image:HTMLImageElement)
    Method _checkVersionFromDB:Void(url:string, versionLoaded:number)
    Method _loadVersionFromDBAsync:Void(url:string, callback:CallbackFunction, updateInDBCallback:CallbackFunction)
    Method _saveVersionIntoDBAsync:Void(url:string, callback:CallbackFunction)
    Method loadSceneFromDB:Void(url:string, sceneLoaded:Scene, progressCallBack:CallbackFunction)
    Method _loadSceneFromDBAsync:Void(url:string, callback:CallbackFunction, notInDBCallback:CallbackFunction)
    Method _saveSceneFromDBAsync:Void(url:string, callback:CallbackFunction, progressCallback:CallbackFunction)
		
End