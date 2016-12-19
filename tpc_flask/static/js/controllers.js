'use strict';

app = angular.module('controllers', ['services','directives']);

app.controller('HomeController', ['$scope', function($scope) {
  $scope.message = 'Hello from HomeController';
}]);

app.controller('MaterialController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);

app.controller('AboutController', ['$scope',  function($scope) {
  $scope.message = 'Hello from AboutController';
}]);
