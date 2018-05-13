$(document).ready(function(){
    var animationSpeed = 250;

    /* Menu dropdown animation */
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").slideUp(animationSpeed);
        $(this).find("div").slideDown(animationSpeed);
    }, function(){
        $(this).find("div").slideUp(animationSpeed);
    });

    /* Menu item highlight animation */
    $(".dropdown").hover(function(){
        $(this).animate({color: "#42c5f4"}, animationSpeed);
        $(this).css({paddingBottom: "30px"}, animationSpeed);
        $(this).css({borderBottomWidth: "2px"}, animationSpeed);
    }, function(){
        $(this).animate({color: "#FFFFFF"}, animationSpeed);
        $(this).css({paddingBottom: "10px"}, animationSpeed);
        $(this).css({borderBottomWidth: "0px"}, animationSpeed);
    });
});