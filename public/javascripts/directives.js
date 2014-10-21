/**
 * Created with JetBrains WebStorm.
 * User: jdorlus
 * Date: 10/26/13
 * Time: 12:30 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';
var module = angular.module('directives', []);

module.directive('royalSlider', ['$timeout',function($timeout){
    return {
        restrict: 'E',
        templateUrl: "partials/indexPartial",
        scope:{
            recentProjects: '='
        },
        link: function(scope, element, attrs){
            console.log("From angular directive" +scope.recentProjects);
            function render(){
                scope.slider = angular.element(element.children()[0]).royalSlider({
                    arrowsNav: true,
                    arrowsNavAutoHide: false,
                    controlNavigation: 'bullets',
                    controlNavigationSpacing: 0,
                    imageScaleMode: 'fit-if-smaller',
                    imageAlignCenter: false,
                    sliderDrag: false,
                    autoPlay: {
                        enabled: true,
                        stopAtAction: true,
                        delay: 5000,
                        pauseOnHover: true
                    },
                    navigateByClick: false,
                    loop: true,
                    controlsInside: true,
                    allowCSS3: true,
                    usePreloader: true,
                    transitionSpeed: 600,
                    transitionType: "fade" ,
                    fadeTransition: true
                });
                jQuery('.rsNav, .rsArrow').appendTo('.slider-controls');
            }
            $timeout(render,0);
        }
    }
}]);