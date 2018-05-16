$(document).ready(function(){
    var animationSpeed = 150;

    /* Menu dropdown animation */
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").fadeOut(animationSpeed);
        $(this).find("div").fadeIn(animationSpeed);
    }, function(){
        $(this).find("div").fadeOut(animationSpeed);
        $(".dropdown").animate({color: "#FFFFFF"}, animationSpeed);
        $(".dropdown").css({paddingBottom: "10px"}, animationSpeed);
        $(".dropdown").css({borderBottomWidth: "0px"}, animationSpeed);
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

    /*
     Drop down bylaws 
    var bylaws_open = false;
    $("#bylaws-dropdown").click(function(){
        if (bylaws_open == false){
            $(this).slideDown(animationSpeed * 2);
            bylaws_open = true;
        }
        else{
            $(this).slideUp(animationSpeed * 2);
            bylaws_open = false;
            $(this).css({height: "100px"});
            $(this).css({background: "#42c5f4"});
        }
    });
    */
});