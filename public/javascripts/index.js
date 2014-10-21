/**
 * Created by jdorlus on 11/29/13.
 */
//$(document).ready(function(){
angular.element(document).ready(function(){
    var t1 = new TimelineLite();
    var controller = $.superscrollorama({
        playoutAnimations: true,
        reverse: true
    });
    controller.addTween('#testCentricHeader',
        TweenMax.fromTo($('#testCentricHeader'), .5, {x:-1000},{x:0}));
    controller.addTween('#testCentricCode1',
    t1.from('#testCentricCode1',.5, {scale:.5, autoAlpha: 0})
        .from('#testCentricCode2',.5, {scale:.5, autoAlpha: 0})
        .from('#testCentricCode3',.5, {scale:.5, autoAlpha: 0}));
    controller.addTween('#nTierDevelopmentHeader',
        TweenMax.from($('#nTierDevelopmentHeader'), .25, {css:{opacity:0}}));
    controller.addTween('#nTierDevelopmentHeader',
        t1.from($('#imgMeanStack'),.5,{y:-10000, ease:"Power1.easeOut"})
            .from($('#imgServerSide'),.5,{y:10000, ease:"Power1.easeOut"})
            .from($('#imgEtc'),.5,{x:10000, ease:"Power1.easeOut"}));
    checkSize();
    alignText();
    jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
//    $('.royalSlider').royalSlider({
//        arrowsNav: true,
//        arrowsNavAutoHide: false,
//        controlNavigation: 'bullets',
//        controlNavigationSpacing: 0,
//        imageScaleMode: 'fit-if-smaller',
//        imageAlignCenter: false,
//        sliderDrag: false,
//        autoPlay: {
//            enabled: true,
//            stopAtAction: true,
//            delay: 5000,
//            pauseOnHover: true
//        },
//        navigateByClick: false,
//        loop: true,
//        controlsInside: true,
//        allowCSS3: true,
//        usePreloader: true,
//        transitionSpeed: 600,
//        transitionType: "fade" ,
//        fadeTransition: true
//    });

    $('#myTabs li a').click(function() {
        $(this).tab('show');
        return false;
    });
    $(document).on("scroll",function(){
         checkSize();
    });
    $(window).resize(function(){
        checkSize();
        alignText();
    });
});

function alignText(){
    if(Modernizr.mq('screen and (min-width:992px)')) {
        $('#indexIntro').css('text-align','left');
    }else{
        $('#indexIntro').css('text-align','center');
    }
}

