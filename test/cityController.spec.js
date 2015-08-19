;(function() {
	'use strict';

	// CityController Test
	describe('CityController Test', function(){
		var scope, httpBackend, http, createController;

		// Set up Angular App
		beforeEach(module('myApp'));

		// Inject dependencies
        beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
            scope = $rootScope.$new();
            // Set up the mock http service responses
            httpBackend = $httpBackend;

            // create instance of controller
            createController = function () {
            	return $controller('CityController', {$scope : scope});
            };
        }));
 		
        it('should Get cities', function () {
        	httpBackend.expectGET('data.json').respond([{}, {}, {}]); // request expectation
            var controller = createController();
            httpBackend.flush();
        });
    	
        it("should have 3 cities", function () {
            httpBackend.when('GET', 'data.json').respond([{}, {}, {}]); // Backend definition
	    	var controller = createController();
            httpBackend.flush();
            expect(scope.cities.length).toBe(3);
        });

	});
}());
