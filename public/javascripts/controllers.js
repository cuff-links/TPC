'use strict';
var module = angular.module('controllers', ['services','directives']);


//module.controller('RecentProjectsController', ['$scope', 'RecentProjectService',
//    function($scope, RecentProjectService){
//        RecentProjectService.getRecentProjects()
//            .success(function(data){
//                $scope.recentProjects = data.recentProjects;
//            })
//            .error(function(data) {
//                console.log('Error: ' + data);
//            });
//    }
//]);

module.controller('MaterialController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);

module.controller('AssignedBugsController', ['$scope', 'BugzillaService', function($scope, BugzillaService){
        BugzillaService.getAssignedBugs()
            .then(function(result) {
                $scope.assignedBugs = result
            });
    }]);

module.controller('CreatedBugsController', ['$scope', 'BugzillaService', function($scope, BugzillaService){
        BugzillaService.getCreatedBugs()
            .then(function(result){
                $scope.createdBugs = result;
            });
    }]);
