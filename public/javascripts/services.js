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

services.service("ProjectService",function($http){
    this.getAllProjects = function(projectGet){
        $http.get('/api/projects').success(
            function(data){
                if(projectGet){
                    projectGet(data)
                }
            });
        }
    });