'use strict';
var app = angular.module('TPC', [
    'ui.router',
    'ngMaterial',
    'controllers',
    'services' ,
    'directives'
    //'filters'
]);
app.config(function($stateProvider,$locationProvider,$mdThemingProvider){
    $stateProvider.
        state('/', {
            controller: 'MaterialController'
        }).
        state('/assigned',{
            templateUrl:'partials/assignedBugsPartial',
            controller: 'AssignedBugsController'
        }).
        state('/created', {
            templateUrl:'partials/createdBugsPartial',
            controller: 'CreatedBugsController'
        }).
        state('mozilla-work', {
            templateUrl:'partials/trelloPartial',
            controller: 'TrelloController'
        }).
        state('side-projects', {
            templateUrl: 'partials/githubPartial',
            controller: 'GithubController'
        });
    $locationProvider.html5Mode(true);
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
});