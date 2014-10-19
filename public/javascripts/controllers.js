'use strict';
var module = angular.module('controllers', ['services']);


module.controller('RecentProjectsController', ['$scope', 'RecentProjectService',
    function($scope, RecentProjectService){
        RecentProjectService.getRecentProjects()
            .success(function(data){
                $scope.recentProjects = data.recentProjects;
                console.log(data.recentProjects);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }
]);

module.controller('BlogController', ['$scope', 'PostService',
    function($scope, PostService){

    }
]);

function getUniqueJsonTrait(json, resultSet) {
    var resultTypeName , typeName;
    for (var i in json) {
        if(resultSet.length === 0){
            resultSet[0] = json[i].projectType.name;
        }
        for(var j = 0; j < resultSet.length; j++)
        {
            typeName = json[i].projectType.name;
            resultTypeName = resultSet[j];
            if(!checkIfExistsInArray(resultSet,typeName)){
                resultSet[resultSet.length] = json[i].projectType.name;
            }
        }
    }
    return resultSet;
}
function checkIfExistsInArray(array,stringToCheck){
    for(var i in array){
        if (array[i] === stringToCheck){
            return true;
        }
    }
    return false;
}