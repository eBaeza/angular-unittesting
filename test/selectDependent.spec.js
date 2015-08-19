;(function() {
  'use strict';

  var citiesArray = [
    {
      "name": "Ciudad de México",
      "branchs": [
        {
          "name": "Casa matriz",
          "tel": "53284791"
        },
        {
          "name": "Suc. Arboledas",
          "tel": "55203418"
        }
      ]
    },
    {
      "name": "Guadalajara, Jalisco",
      "branchs": [
        {
          "name": "Centro",
          "tel": "28437654"
        }
      ]
    }
  ];

  var selectCity = '<select name="cities" ng-model="selectedCity" ng-options="city as city.name for city in cities"><option value="">---Select a city---</option></select>';

  var selectBranch = '<select name="branchs" ng-model="selectedBranch" ng-options="branch as branch.name for branch in selectedCity.branchs"><option value="">---Select a branch---</option></select>';

  describe('Select Dependent', function () {
    var $compile, $scope, elSelectCity, elSelectBranch;

    // Load Angular App
    beforeEach(module('myApp'));

    // inject compile and roote
    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_;
      $scope.cities = citiesArray;
    }));

    // compile directives
    beforeEach(function () {
      elSelectCity = $compile(selectCity)($scope);
      elSelectBranch = $compile(selectBranch)($scope);
    });

    describe('initialisation', function () {
      it('Select cities should have more than 1 options', function () {
        var options = elSelectCity.find('option');
        expect(options.length).toBeGreaterThan(1);
      });


      it('Select branch should not have options', function () {
        var options = elSelectBranch.find('option');
        expect(options.length).toBe(1);
      });
    });

    describe('when selected a city', function () {
      // select an option and update all watchers
      beforeEach(function () {
        $scope.selectedCity = $scope.cities[1];
        $scope.$apply();
      });

      it('city should be Guadalajara, Jalisco', function () {
        expect($scope.selectedCity.name).toBe('Guadalajara, Jalisco');
      });

      it('Select branch should have more than 1 options', function () {
        var options = elSelectBranch.find('option');
        expect(options.length).toBeGreaterThan(1);
      });
    });

  });
}());