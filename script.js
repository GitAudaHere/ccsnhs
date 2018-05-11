// Dropdown menu sliding
$(document).ready(function(){
    $(".dropdown-menu").hover(function(){
        $(this).siblings().find("div").slideUp(300);
        $(this).find("div").slideDown(300);
    }, function() {
        $(this).find("div").slideUp(300);
    });
});