$(document).ready(function() {
    $('.app-menu').mouseenter(function() {
        $('.dropdown-menu').addClass('active');
    });

    $('.dropdown-item').mouseleave(function() {
        $('.dropdown-menu').removeClass('active');
    });
});
