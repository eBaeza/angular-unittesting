;(function() {
	'use strict';

	var app = angular.module('app.cityController', []);

	// city controller
	app.controller('CityController', function CityController($scope, $http) {

		// cities array
		$scope.cities = null;

		// se consume json
		$http.get('data.json').success(function (data){
			$scope.cities = data;
		});
	});
}());