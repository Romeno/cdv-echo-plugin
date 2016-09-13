var argscheck = require('cordova/argscheck'),
	utils = require('cordova/utils'),
	exec = require('cordova/exec'),
	channel = require('cordova/channel');
	
module.exports = function(successCallback, errorCallback) {
	exec(successCallback, errorCallback, "Echo", "echo", ["dsdsdsdsds"]);
};