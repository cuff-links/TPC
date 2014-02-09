/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
    $('#myTabs li a').click(function () {
        $(this).tab('show');
        return false;
    });
    $(document).on("scroll",function(e){
         checkSize();
    });
    $(window).resize(function(){
        checkSize();
    });
    function checkSize(){
        var navbarNavListItems = $('.navbar-nav > li > a');
        if(Modernizr.mq('screen and (min-width:768px)')) {
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
            $(".navbar").css('min-height','50px');
            $(".navbar-brand").css('padding','25px 15px');
            $('.navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header').css('padding','5px 15px 5px 25px');
        }
    }
});


