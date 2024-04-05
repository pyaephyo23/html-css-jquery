$(document).ready(function () {
    $('.menu-toggle').click(function () {
        var topVal = 0;
        if ($(this).hasClass('open')) {
            topVal = -600;
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');

        }
        $('.gnav').stop().animate({
            top: topVal
        }, 200);
    });
});