$(document).ready(function(){
    var animationSpeed = 150;

    /* Menu dropdown animation */
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").fadeOut(animationSpeed);
        $(this).find("div").stop(true, true).fadeIn(animationSpeed);
    }, function(){
        $(this).find("div").fadeOut(animationSpeed);
        $(".dropdown").stop(true, true).animate({color: "#FFFFFF"}, animationSpeed);
        $(".dropdown").stop(true, true).css({paddingBottom: "10px"}, animationSpeed);
        $(".dropdown").stop(true, true).css({borderBottomWidth: "0px"}, animationSpeed);
    });

    /* Menu item highlight animation */
    $(".dropdown").hover(function(){
        $(this).animate({color: "#42c5f4"}, animationSpeed);
        $(this).css({paddingBottom: "30px"}, animationSpeed);
        $(this).css({borderBottomWidth: "2px"}, animationSpeed);
    }, function(){
        if($(".dropdown-content:hover").length == 0)
        {
            $(this).stop(true, false).animate({color: "#FFFFFF"}, animationSpeed);
            $(this).stop(true, false).css({paddingBottom: "10px"}, animationSpeed);
            $(this).stop(true, false).css({borderBottomWidth: "0px"}, animationSpeed);
        }
    });

    var bylaws_open = false;
    $("#bylaws-dropdown-btn").click(function(){
        if (bylaws_open == false){
            $("#bylaws").stop(true, false).slideDown(animationSpeed * 10);
            bylaws_open = true;
        }
        else{
            $("#bylaws").stop(true, false).slideUp(animationSpeed * 10);
            bylaws_open = false;
        }
    });
});