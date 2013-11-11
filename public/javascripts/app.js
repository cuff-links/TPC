'use strict';
var app = angular.module('TPCv4', [
    'ngRoute',
    'controllers',
    //'filters',
    'services'//,
    //'directives'
]);
app.config(function($routeProvider){
        $routeProvider.
            when('/',{
                templateUrl:'partials/indexPartial',
                controller: 'TestController1'
            }).
            when('/manage', {
                templateUrl:'',
                controller: ''
            })
    });