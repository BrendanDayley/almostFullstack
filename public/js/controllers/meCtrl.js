'use strict';

app.controller('homeCtrl', ['$scope', 'networkService', function($scope, networkService) {

	var getName = function() {
		networkService.getName().then(function(data) {
			$scope.name = data;
		});
	};

	getName();

	var getLocation = function() {
		networkService.getLocation().then(function(data) {
			$scope.location = data;
		});
	};

	getLocation();

}]);