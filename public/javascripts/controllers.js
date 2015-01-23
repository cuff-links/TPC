'use strict';
var module = angular.module('controllers', ['services','directives']);


module.controller('RecentProjectsController', ['$scope', 'RecentProjectService',
    function($scope, RecentProjectService){
        RecentProjectService.getRecentProjects()
            .success(function(data){
                $scope.recentProjects = data.recentProjects;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }
]);
