/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
    checkSize();
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
            $(".navbar").css('min-height','40px');
            $(".navbar-brand").css('padding','25px 15px');
            navbarNavListItems.addClass('small');
            navbarNavListItems.css('font-size','10pt');
//            $('#navbarLogo').css('width', '136px').css('height','50px');
            $('#navbarLogo').css('width', '105px').css('height','40px');

        } else{
            $('.navbar').css('min-height','100px');
            $(".navbar-brand").css('padding','50px 15px');
            navbarNavListItems.removeClass('small');
            navbarNavListItems.css('font-size','12pt');
            $('#navbarLogo').css('width', '177px').css('height','65px');
//            $('#navbarLogo').css('width', '240px').css('height','80px');
        }
    }
    else{
        $('#homeSlideShowWrapper').hide();
        $(".navbar").css('min-height','50px');
        $(".navbar-brand").css('padding','25px 15px');
        $('.navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header').css('padding','5px 15px 5px 25px');
    }
}

