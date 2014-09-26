'use strict';
var module = angular.module('controllers', ['services','directives']);

module.controller('IndexController', ['$scope', 'ProjectService',
    function($scope, ProjectService){
        var projectGet = function(data){
            $scope.projects = data.projects;
            var categories = [];
            categories = getUniqueJsonTrait(data.projects, categories);
            $scope.categories = categories;
        };
        ProjectService.getAllProjects(projectGet);
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
            typeName = json[i].projectType.name
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