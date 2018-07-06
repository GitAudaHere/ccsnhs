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

    /* Back-to-top-btn fading on scroll-down */
    window.onscroll = function() {scroll()};

    function scroll() {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#back-to-top-btn").fadeIn(duration * 2);
        } else {
            $("#back-to-top-btn").fadeOut(duration / 1.5);
        }
    }

    /* Sets the opacity on load */
    $("#back-to-top-btn").css({opacity: "0.90"});

    /* Sets the btn's display to none so that it doesn't display on load */
    $("#back-to-top-btn").css({display: "none"});
    
    /* Back-to-top-btn fading in on hover */
    $("#back-to-top-btn").hover(function(){
        $("#back-to-top-btn").animate({opacity: 1}, duration)
    }, function(){
        $("#back-to-top-btn").animate({opacity: 0.90}, duration)
    });

    /* Back-to-top button scrolling */
    $("#back-to-top-btn").click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Bylaws Article animation
    $(".article-dropdown").click(function(){
        if ($(this).siblings(".bylaws-article").css("display") == "none")
        {
            $(this).siblings(".bylaws-article").slideDown(duration / 2);
        }
        else
        {
            $(this).siblings(".bylaws-article").slideUp(duration / 2);
        }
    });

    // Expand All Button Handler
    var expanded = false;
    $("#bylaws-expand-all-btn").click(function(){
        if (expanded)
        {
            $("#bylaws").children(".bylaws-article-wrapper").children(".bylaws-article").slideUp(duration * 2);
            $("#bylaws").slideUp(duration * 2);
            expanded = false;
        }
        else
        {
            $("#bylaws").slideDown(duration * 2);
            $("#bylaws").children(".bylaws-article-wrapper").children(".bylaws-article").slideDown(duration * 2);
            expanded = true;
        }
    });
});
