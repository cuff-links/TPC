/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
    var controller = $.superscrollorama({
        playoutAnimations: true,
        reverse: true
    });
    controller.addTween('#softwareBlackSmith',
        TweenMax.from($('#softwareBlackSmith'), .5, {css:{opacity:0}}));
    checkSize();
    alignText();
    jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
    $('.royalSlider').royalSlider({
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

