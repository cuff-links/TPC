'use strict';
var module = angular.module('controllers', ['services']);

module.controller('IndexController', ['$scope', 'PostService',
    function($scope, PostService){
        var postGet = function(data){
            $scope.posts = data.posts;
            console.log($scope.posts);
        }
        PostService.get(postGet);
    }
]);

module.controller('TestController2', ['$scope', 'TestService2',
    function($scope, TestService2){

    }
]);
