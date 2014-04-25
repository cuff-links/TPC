/**
 * Created with JetBrains WebStorm.
 * User: jdorlus
 * Date: 10/26/13
 * Time: 12:30 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var module = angular.module('directives', []);

module.directive('ngIsotope', function(){
   return{
       restrict: "A"
   }
});
