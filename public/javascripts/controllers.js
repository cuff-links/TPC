'use strict';
var module = angular.module('controllers', ['services']);

module.controller('IndexController', ['$scope', '$http',
    function($scope, $http){
        $http.get('/api/posts').
        success(function(data, status, headers, config) {
            $scope.posts = data.posts;
        });
    }
]);

module.controller('TestController2', ['$scope', 'TestService2',
    function($scope, TestService2){

    }
]);
