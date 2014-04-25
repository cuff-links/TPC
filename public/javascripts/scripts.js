/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
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
    $('#myTabs li a').click(function () {
        $(this).tab('show');
        return false;
    });
    $(document).on("scroll",function(){
         checkSize();
    });
    $(window).resize(function(){
        checkSize();
    });
});
function checkSize(){
    var navbarNavListItems = $('.navbar-nav > li > a');
    if(Modernizr.mq('screen and (min-width:992px)')) {
        $('#homeSlideShowWrapper').show();
        if($(document).scrollTop()>75){
            $(".navbar").css('min-height','50px');
            $(".navbar-brand").css('padding','25px 15px');
            navbarNavListItems.addClass('small');
            $('.navbar-brand').css('font-size','16pt');

        } else{
            $('.navbar').css('min-height','125px');
            $(".navbar-brand").css('padding','50px 15px');
            navbarNavListItems.removeClass('small');
            $('.navbar-brand').css('font-size','20pt');
        }
    }
    else{
        $('#homeSlideShowWrapper').hide();
        $(".navbar").css('min-height','50px');
        $(".navbar-brand").css('padding','25px 15px');
        $('.navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header').css('padding','5px 15px 5px 25px');
    }
}

