'use strict';
var app = angular.module('TPCv4', [
    'ngRoute',
    'controllers',
    //'filters',
    'services'//,
    //'directives'
]);
app.config(function($routeProvider,$locationProvider){
        $routeProvider.
            when('/',{
                templateUrl:'partials/indexPartial',
                controller: 'TestController1'
            }).
            when('/manage', {
                templateUrl:'partials/managePartial',
                controller: 'TestController2'
            })
    });