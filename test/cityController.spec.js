;(function() {
  'use strict';

  // CityController Test
  describe('CityController Test', function () {
    var scope, httpBackend, http, createController;

    // Set up Angular App
    beforeEach(module('myApp'));

    // Inject dependencies
    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;

      // create instance of controller
      createController = function () {
        return $controller('CityController', {$scope : scope});
      };
    }));

    it('should Get cities', function () {
      httpBackend.expectGET('data.json').respond([{}, {}, {}]); // mock request expectation
      var controller = createController();
      httpBackend.flush();
    });

    it("should have cities", function () {
      httpBackend.when('GET', 'data.json').respond([{}, {}, {}]); // mock backend definition
      var controller = createController();
      httpBackend.flush();
      expect(scope.cities.length).toBeGreaterThan(0);
    });
  });
}());