// Dropdown menu sliding
$(document).ready(function(){
    var speed = 250;
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").slideUp(speed);
        $(this).find("div").slideDown(speed);

    }, function() {
        $(this).find("div").slideUp(speed);
    });
});