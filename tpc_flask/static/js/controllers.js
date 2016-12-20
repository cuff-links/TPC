'use strict';

app = angular.module('controllers', ['services','directives']);

app.controller('HomeController', ['$scope', 'JsonService', function($scope, JsonService) {
  JsonService.getAssignedBugs()
            .then(function(result) {
                $scope.assignedBugs = result
            });
}]);

app.controller('MaterialController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);
