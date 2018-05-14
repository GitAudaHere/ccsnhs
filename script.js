$(document).ready(function(){
    var animationSpeed = 250;

    /* Menu dropdown animation */
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").fadeOut(animationSpeed);
        $(this).find("div").fadeIn(animationSpeed);
    }, function(){
        $(this).find("div").fadeOut(animationSpeed);
    });

    /* Menu item highlight animation */
    $(".dropdown").hover(function(){
        $(this).animate({color: "#42c5f4"}, animationSpeed);
        $(this).css({paddingBottom: "30px"}, animationSpeed);
        $(this).css({borderBottomWidth: "2px"}, animationSpeed);
    }, function(){
        if($(".dropdown-content:hover").length == 0)
        {
            $(this).animate({color: "#FFFFFF"}, animationSpeed);
            $(this).css({paddingBottom: "10px"}, animationSpeed);
            $(this).css({borderBottomWidth: "0px"}, animationSpeed);
        }
    });
});