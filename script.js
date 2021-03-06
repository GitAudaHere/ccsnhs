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
    $(".dropdown-menu").hover(function(){
        $(this).children(".dropdown").animate({color: "#42C5F4"}, duration);
        $(this).children(".dropdown").css({paddingBottom: "30px"});
        $(this).children(".dropdown").css({borderBottomWidth: "2px"});
    }, function(){/*
        if($(".dropdown-content:hover").length == 0)
        {*/
        $(this).children(".dropdown").stop(true, false).animate({color: "#FFFFFF"}, duration);
        $(this).children(".dropdown").stop(true, false).css({paddingBottom: "10px"});
        $(this).children(".dropdown").stop(true, false).css({borderBottomWidth: "0px"});
        //}
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
            $(this).find(".dropdown-icon").html("expand_less");
            $("#bylaws").stop(true, false).slideDown(duration * 2);
            $("#bylaws-expand-all-btn").stop(true, false).fadeIn(duration * 2);
            bylaws_open = true;
        }
        else{
            $(this).find(".dropdown-icon").html("expand_more");
            $("#bylaws").stop(true, false).slideUp(duration * 2);
            $("#bylaws-expand-all-btn").stop(true, false).fadeOut(duration * 2);
            bylaws_open = false;
        }
    });

    /* Back-to-top-btn fading on scroll-down */
    window.onscroll = function() {scroll2()};

    /* Fade in */
    // Set display to none if using this.
    function scroll() {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#back-to-top-btn").fadeIn(duration * 2);
        } else {
            $("#back-to-top-btn").fadeOut(duration / 1.5);
        }
    }

    /* Slide in from right */
    // Set display to block if using this.
    function scroll2() {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#btt-btn").stop(true, false).animate({marginRight: "10vw"}, duration * 3);
        } else {
            $("#btt-btn").stop(true, false).animate({marginRight: "-10vw"}, duration * 3);
        }
    }

    /* Sets the opacity on load */
    $("#btt-btn").css({opacity: "0.9"});

    /* Sets the btn's display to none so that it doesn't display on load */
    $("#btt-btn").css({display: "block"});
    /* Back-to-top-btn fading in and out on hover */
    $("#btt-btn").hover(function(){
        $(this).animate({opacity: 1}, duration)
    }, function(){
        $(this).animate({opacity: 0.90}, duration)
    });

    /* Back-to-top button scrolling */
    $("#btt-btn").click(function(){
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Bylaws Article animation
    $(".article-dropdown").click(function(){
        if ($(this).siblings(".bylaws-article").css("display") == "none")
        {
            $(this).find(".dropdown-icon").html("expand_less");
            $(this).siblings(".bylaws-article").slideDown(duration);
        }
        else
        {
            $(this).find(".dropdown-icon").html("expand_more");
            $(this).siblings(".bylaws-article").slideUp(duration);
        }
    });

    // Expand All Button Handler
    var expanded = false;
    $("#bylaws-expand-all-btn").click(function(){
        if (expanded)
        {
            $("#bylaws").children(".bylaws-article-wrapper").children(".bylaws-article").slideUp(duration * 2);
            $("#bylaws").children(".bylaws-article-wrapper").children(".article-dropdown").find(".dropdown-icon").html("expand_more");
            $(this).text("Expand All");
            expanded = false;
        }
        else
        {
            $("#bylaws").children(".bylaws-article-wrapper").children(".article-dropdown").find(".dropdown-icon").html("expand_less");
            $("#bylaws").children(".bylaws-article-wrapper").children(".bylaws-article").slideDown(duration * 2);
            $(this).text("Collapse All");
            expanded = true;
        }
    });

    /* Meeting dropdown */
    $(".meeting-dropdown-btn").click(function(){
        if ($(this).siblings(".meeting-info").css("display") == "none")
        {
            $(this).find(".dropdown-icon").html("expand_less");
            $(this).siblings(".meeting-info").slideDown(duration);
        }
        else
        {
            $(this).find(".dropdown-icon").html("expand_more");
            $(this).siblings(".meeting-info").slideUp(duration);
        }
    });

    $(".question-btn").click(function(){
        if ($(this).siblings(".answer").css("display") == "none")
        {
            $(this).siblings(".answer").stop(true, false).slideDown(duration / 2);
            $(this).find(".dropdown-icon").html("expand_less");
        }
        else
        {
            $(this).siblings(".answer").stop(true, false).slideUp(duration / 2);
            $(this).find(".dropdown-icon").html("expand_more");
        }
    });
});
