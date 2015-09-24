function checkSize(){
    var navbarNavListItems = $('.navbar-nav > li > a');
    if(Modernizr.mq('screen and (min-width:992px)')) {
        $('#homeSlideShowWrapper').show();
        if($(document).scrollTop()>75){
            $(".navbar").css('min-height','40px');
            $(".navbar-brand").css('padding','25px 15px');
            navbarNavListItems.addClass('small');
            navbarNavListItems.css('font-size','11pt');
            $('#navbarLogo').css('width', '105px').css('height','40px');

        } else{
            $('.navbar').css('min-height','100px');
            $(".navbar-brand").css('padding','50px 15px');
            navbarNavListItems.removeClass('small');
            navbarNavListItems.css('font-size','11pt');
            $('#navbarLogo').css('width', '177px').css('height','65px');
        }
    }
    else{
        $('#homeSlideShowWrapper').hide();
        $(".navbar").css('min-height','50px');
        $(".navbar-brand").css('padding','25px 15px');
        $('.navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header').css('padding','5px 15px 5px 25px');
        $('#navbarLogo').css('width', '105px').css('height','40px');
    }
}
