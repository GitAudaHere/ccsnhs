$(document).ready(function(){
    var duration = 150;

    /* Menu dropdown animation */
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").fadeOut(duration);
        $(this).find("div").stop(true, true).fadeIn(duration);
    }, function(){
        $(this).find("div").fadeOut(duration);
        $(".dropdown").stop(true, true).animate({color: "#FFFFFF"}, duration);
        $(".dropdown").stop(true, true).css({paddingBottom: "10px"});
        $(".dropdown").stop(true, true).css({borderBottomWidth: "0px"});
    });

    /* Menu item highlight animation */
    $(".dropdown").hover(function(){
        $(this).animate({color: "#42C5F4"}, duration);
        $(this).css({paddingBottom: "30px"});
        $(this).css({borderBottomWidth: "2px"});
    }, function(){
        if($(".dropdown-content:hover").length == 0)
        {
            $(this).stop(true, false).animate({color: "#FFFFFF"}, duration);
            $(this).stop(true, false).css({paddingBottom: "10px"});
            $(this).stop(true, false).css({borderBottomWidth: "0px"});
        }
    });

    /* Fades the hamburger menu in and out */
    var hamburger_open = false;
    $("#hamburger").click(function(){
        if(hamburger_open == false){
            $("#hamburger-menu").fadeIn(duration);
            hamburger_open = true;
        } else {
            $("#hamburger-menu").fadeOut(duration);
            hamburger_open = false;
        }
    })

    /* Bylaws animation */
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

    /* Back-to-top button fading */
    window.onscroll = function() {scroll()};

    function scroll() {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#top-button, #back-to-top-btn").fadeIn(duration * 2);
        } else {
            $("#top-button, #back-to-top-btn").fadeOut(duration / 1.5);
        }
    }

    /* Back-to-top button scrolling */
    $("#top-button, #back-to-top-btn").click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /* 
    $("button").hover(function(){
        $(this).stop(true, true).animate({borderBottomWidth: "4px"}, duration / 2);
    }, function(){
        $(this).stop(true, true).animate({borderBottomWidth: "0px"}, duration / 2);
    });
    */


    // Bylaws Article animation
    $(".article-dropdown").click(function(){
        if ($(this).siblings(".bylaws-article").css("display") == "none")
        {
            $(this).siblings(".bylaws-article").css({display: "inline-block"});
        }
        else {
            $(this).siblings(".bylaws-article").css({display: "none"});
        }
    });
});
