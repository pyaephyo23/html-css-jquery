$(document).ready(function () {

    $('.gnav a').click(function (e) {
        var target = $(this).attr('href');
        var offset = $(target).offset().top;

        $('html, body').animate({
            scrollTop: offset
        }, 800);
    });
    
});