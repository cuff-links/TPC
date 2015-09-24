'use strict';
var services = angular.module('services', []);


services.factory("BugzillaService",['$http', function($http){
    var factory = {};
    factory.getAssignedBugs = function(){
        return $http.get('https://bugzilla.mozilla.org/rest/bug?assigned_to=jdorlus@mozilla.com&include_fields=id,summary,status,resolution,product,component,blocks,depends_on');
    };
    factory.getCreatedBugs = function(){
        return $http.get('https://bugzilla.mozilla.org/rest/bug?creator=jdorlus@mozilla.com&include_fields=id,summary,status,resolution,product,component,blocks,depends_on');
    };
    return factory;
}]);
