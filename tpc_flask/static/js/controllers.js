'use strict';

app = angular.module('controllers', ['services', 'directives']);

app.controller('HomeController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

}]);


app.controller('BugzillaController', ['$scope', 'JsonService', function ($scope, JsonService) {
    var bugInfo = [
        {
            "bugType": 'assigned',
            "url": 'https://bugzilla.mozilla.org/rest/bug?assigned_to=jdorlus@mozilla.com&include_fields=id,summary,status,resolution,product,component,blocks,depends_on'
        },
        {
            "bugType": "created",
            "url" : "https://bugzilla.mozilla.org/rest/bug?creator=jdorlus@mozilla.com&include_fields=id,summary,status,resolution,product,component,blocks,depends_on"
        }
    ];
    //bugInfo[bugType]
    JsonService.getBugs()
        .then(function (result) {
            $scope.bugs = result;
        });
}]);

app.controller('AboutController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

}]);

app.controller('SkillsController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

}]);

app.controller('EducationController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

}]);

app.controller('TrelloController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

}]);

app.controller('MaterialController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.menu = [
            {
                link : 'home',
                title: 'Dashboard',
                icon: 'dashboard',
                color: '#add8e6'
            },
            {
                link : 'home.work',
                title: 'Work',
                icon: 'work',
                color: 'brown'
            },
            {
                link : 'home.skills',
                title: 'Skills',
                icon: 'laptop_mac',
                color: 'gray'
            },
            {
                link : 'home.education',
                title: 'Education',
                icon: 'school',
                color: 'green'
            },
            {
                link : 'home.about',
                title: 'About',
                icon: 'phone_iphone',
                color: 'orange'
            }
          ];
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

}]);
