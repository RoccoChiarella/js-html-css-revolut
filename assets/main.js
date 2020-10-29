$(document).ready(function() {
    $('.dropdown-item').mouseenter(function() {
        $(this).children('.dropdown-menu').addClass('active');
    });

    $('.dropdown-item').mouseleave(function() {
        $(this).children('.dropdown-menu').removeClass('active');
    });
});
