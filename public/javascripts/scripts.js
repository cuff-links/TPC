/**
 * Created by jdorlus on 11/29/13.
 */
$(document).ready(function(){
    $('#myTabs li a').click(function (e) {
        var tabList = $(this);
        $(this).tab('show');
        console.log(tabList);
        tabList.parent().attr("class", "active");
    });
});

