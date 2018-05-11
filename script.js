// Dropdown menu sliding
$(document).ready(function(){
    var slideSpeed = 250;
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").slideUp(slideSpeed);
        $(this).find("div").slideDown(slideSpeed);
    }, function() {
        $(this).find("div").slideUp(slideSpeed);
    });
});