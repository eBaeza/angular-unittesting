;(function() {
	'use strict';

	var app = angular.module('myApp', []);

	// city controller
	app.controller('CityController', function CityController($scope, $http) {
		// get data json
		$http.get('data.json').success(function (data) {
			$scope.cities = data;
		});
	});
}());