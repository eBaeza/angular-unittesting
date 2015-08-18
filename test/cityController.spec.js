'use strict';
// CityController Test
describe('CityController Test', function() {
	beforeEach(module('myApp')); // Set up Angular app

	var scope, http, httpBackend, controller;

	describe('- Get JSON test', function() {
		beforeEach(inject(function ($rootScope, $http, $httpBackend, $controller) {
			scope = $rootScope.$new(); // Angular scope
			http = $http; // Angular http
			httpBackend = $httpBackend;
			controller = $controller;
			// Set up service response
			$httpBackend.when('GET', 'app/data.json').respond([{}, {}, {}]); 
		}));

		it('should GET cities', function() {
			httpBackend.expectGET('app/data.json');
			// create controller
			controller('CityController', { 
				$scope: scope,
				$http: http
			});
			httpBackend.flush();
		});
	});
});