window.echo = function(successCallback, errorCallback) {
	cordova.exec(successCallback,
				 errorCallback,
				 "Echo",
				 "echo",
				 ["echo argument"]);
}
