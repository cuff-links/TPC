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
    $scope.menuItems = [
        {
            "name": "Home",
            "icon": "home",
            "target": "SomeTarget",
            "color": "powderblue"
        },
        {
            "name": "Work",
            "icon": "work",
            "target": "SomeTarget",
            "color": "tan"
        },
        {
            "name": "Projects",
            "icon": "build",
            "target": "SomeTarget",
            "color": "lightsalmon"
        },
        {
            "name" : "Skills",
            "icon" : "poll",
            "target" : "SomeTarget",
            "color" : "lightblue"
        },
        {
            "name": "Blog",
            "icon": "comment",
            "target": "SomeTarget",
            "color": "violet"
        },
        {
            "name": "About",
            "icon": "person_outline",
            "target": "SomeTarget",
            "color" : "lightgray"
        }
    ]
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
