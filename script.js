$(document).ready(function(){
    var duration = 150;

    /* Menu dropdown animation */
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").fadeOut(duration);
        $(this).find("div").stop(true, true).fadeIn(duration);
    }, function(){
        $(this).find("div").fadeOut(duration);
        $(".dropdown").stop(true, true).animate({color: "#FFFFFF"}, duration);
        $(".dropdown").stop(true, true).css({paddingBottom: "10px"}, duration);
        $(".dropdown").stop(true, true).css({borderBottomWidth: "0px"}, duration);
    });

    /* Menu item highlight animation */
    $(".dropdown").hover(function(){
        $(this).animate({color: "#42c5f4"}, duration);
        $(this).css({paddingBottom: "30px"}, duration);
        $(this).css({borderBottomWidth: "2px"}, duration);
    }, function(){
        if($(".dropdown-content:hover").length == 0)
        {
            $(this).stop(true, false).animate({color: "#FFFFFF"}, duration);
            $(this).stop(true, false).css({paddingBottom: "10px"}, duration);
            $(this).stop(true, false).css({borderBottomWidth: "0px"}, duration);
        }
    });

    var bylaws_open = false;
    $("#bylaws-dropdown-btn").click(function(){
        if (bylaws_open == false){
            $("#bylaws").stop(true, false).slideDown(duration * 10);
            bylaws_open = true;
        }
        else{
            $("#bylaws").stop(true, false).slideUp(duration * 10);
            bylaws_open = false;
        }
    });

    window.onscroll = function() {scroll()};

    function scroll() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#top-button").fadeIn(duration);
        } else {
            $("#top-button").fadeOut(duration / 1.5);
        }
    }

    function backToTop() {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    }

    $("#top-button").click(function(){
        backToTop();
    });
});
