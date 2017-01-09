'use strict';

var app = angular.module('tpc_flask', [
    'ui.router',
    'ngMdIcons',
    'ngMaterial',
    'controllers',
    'services' ,
    'directives'
]);

app.config(['$stateProvider','$locationProvider', '$urlRouterProvider', '$interpolateProvider','$mdThemingProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider, $interpolateProvider, $mdThemingProvider){

        $stateProvider

        .state('home', {
            url: '/',
            templateUrl : 'static/partials/home.html',
            controller  : 'HomeController'
        })

        .state('home.about', {
            url: "about",
            templateUrl : 'static/partials/about.html',
            controller  : 'AboutController'
        })

        .state('home.skills', {
            url: "skills",
            templateUrl : 'static/partials/skills.html',
            controller  : 'SkillsController'
        })

        .state('home.work', {
            url: "work",
            templateUrl : 'static/partials/work.html'
        })

        .state('home.work.bugs', {
            url: "work/bugs",
            templateUrl : 'static/partials/work.bugs.html',
            controller  : 'BugzillaController'
        })

        .state('home.work.trello', {
            url: "work/trello",
            templateUrl : 'static/partials/work.trello.html',
            controller  : 'TrelloController'
        })

        .state('home.education', {
            url: "education",
            templateUrl : 'static/partials/education.html',
            controller  : 'EducationController'
        });

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
