'use strict';
var module = angular.module('controllers', ['services','directives']);


module.controller('RecentProjectsController', ['$scope', 'RecentProjectService',
    function($scope, RecentProjectService){
        RecentProjectService.getRecentProjects()
            .success(function(data){
                $scope.recentProjects = data.recentProjects;
//                console.log(data.recentProjects);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }
]);

module.controller('BlogController', ['$scope', 'PostService',
    function($scope, PostService){

    }
]);