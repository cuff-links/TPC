'use strict';

var app = angular.module('tpc_flask', [
    'ngRoute',
    'ngMaterial',
    'controllers',
    'services' ,
    'directives'
]);

app.config(['$routeProvider','$locationProvider', '$interpolateProvider','$mdThemingProvider',
    function($routeProvider, $locationProvider, $interpolateProvider, $mdThemingProvider){
        $routeProvider
        .when('/', {
            templateUrl : 'static/partials/home.html',
            controller  : 'HomeController'
        })

        .when('/about', {
            templateUrl : 'static/partials/about.html',
            controller  : 'AboutController'
        })

        .otherwise({redirectTo: '/'});

        $interpolateProvider.startSymbol('{a');
        $interpolateProvider.endSymbol('a}');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $mdThemingProvider.theme('default').primaryPalette('teal', {
            'default': '500'
        });
}]);
