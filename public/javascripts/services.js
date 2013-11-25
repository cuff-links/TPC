'use strict';
var services = angular.module('services', []);


services.service("PostService",function($http){
    this.get = function(postGet){
        $http.get('/api/posts')
            .success(function(data) {
              if(postGet){
                  postGet(data);
              }
            });
    }
});