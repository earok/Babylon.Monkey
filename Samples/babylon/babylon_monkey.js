
BabylonMonkey_LoadMesh = function(handle, path, file, scene, target){
	BABYLON.SceneLoader.ImportMesh(handle, path, file, scene, function (newMeshes, particleSystems, skeletons) {
		target.p__loadedMesh(handle,newMeshes,particleSystems,skeletons);
	});
}

AnimationFrame = function(){
}

NAnimationFrame = function(frame, value){
	var result = new AnimationFrame();
	result.frame = frame;
	result.value = value;
	return result;
}