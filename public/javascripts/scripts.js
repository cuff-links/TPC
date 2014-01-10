/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
    $('#myTabs li a').click(function () {
        $(this).tab('show');
        return false;
    });
    $(document).on("scroll",function(e){
        if($(document).scrollTop()>100){
            $(".navbar").css('min-height','50px');
            $(".navbar-brand").css('padding','25px 15px');
            if ($(".navbar-nav > li > a").css("padding-top") == "50px" ){
                $(".navbar-nav > li > a").css("padding-top","25px");
                $(".navbar-nav > li > a").css("padding-bottom","25px");
            }

        } else{
            $('.navbar').css('min-height','125px');
            $(".navbar-brand").css('padding','50px 15px');
            if ($(".navbar-nav > li > a").css("padding-top") == "25px" ){
                $(".navbar-nav > li > a").css("padding-top","50px");
                $(".navbar-nav > li > a").css("padding-bottom","50px");
            }
        }

    });
});


