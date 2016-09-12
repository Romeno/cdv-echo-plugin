
window.echo = function(successCallback, errorCallback) {
	cordova.exec(successCallback,
				 errorCallback,
				 "service",
				 "action",
				 ["firstArgument", "secondArgument", 42, false]);	
}
