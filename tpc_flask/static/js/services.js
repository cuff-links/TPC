'use strict';
var services = angular.module('services', []);


services.factory("JsonService",['$http', function($http){
    var factory = {};
    factory.getBugs = function(url){
        return $http.get(url);
    };
    return factory;
}]);
