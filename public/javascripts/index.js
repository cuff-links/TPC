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
        t1.from($('#imgMeanStack'),.5,{css:{opacity:'0', x: -200},ease:"Power1.easeOut"})
            .from($('#imgServerSide'),.5,{css:{opacity:'0', y: -200},ease:"Power1.easeOut"})
            .from($('#imgEtc'),.5,{css:{opacity:'0', x: 200},ease:"Power1.easeOut"}));
    checkSize();
    alignText();
    jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

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

