'use strict';
var services = angular.module('services', []);


services.service("PostService",function($http){
    this.getAllPosts = function(postGet){
        $http.get('/api/posts').success(
            function(data) {
                if(postGet){
                    postGet(data);
                }
            });
        }
    });

services.factory("RecentProjectService",function($http){
    return {
        getRecentProjects: function(){
            return $http.get('/api/recentprojects');
        }
    }
});