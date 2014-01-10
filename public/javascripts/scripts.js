/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
    $('#myTabs li a').click(function () {
        $(this).tab('show');
        return false;
    });
    $(document).on("scroll",function(e){
        $("header").toggleClass('smallbar',$(document).scrollTop()>1);
    });
});


