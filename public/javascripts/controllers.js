'use strict';
var module = angular.module('controllers', ['services']);

module.controller('IndexController', ['$scope', 'ProjectService',
    function($scope, ProjectService){
        var projectGet = function(data){
            $scope.projects = data.projects;
        };
        ProjectService.getAllProjects(projectGet);
    }
]);

module.controller('TestController2', ['$scope', 'TestService2',
    function($scope, TestService2){

    }
]);
