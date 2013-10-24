var app = angular.module('TPCv4', []);

app.run(function($rootScope){
    $rootScope.name = "Ari Lerner";
});

app.controller("MyController", function($scope){
    $scope.person = { name: "Ari Lerner" };
    var updateClock = function(){
        $scope.clock = new Date();
    };
    var timer = setInterval(function(){
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});