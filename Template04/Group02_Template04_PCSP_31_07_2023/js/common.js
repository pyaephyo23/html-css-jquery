$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.gnav').toggleClass('is-show');
    });



    $(window).resize(function() {
        
        var windowWidth = $(window).width();

        if (windowWidth <= 767.9) {
    
            $(window).scroll(function () {
    
                var contentTopPosition = $('.top-mv-sec').offset().top;
                var scrollPosition = $(window).scrollTop();
    
                if (scrollPosition >= contentTopPosition) {
                    $('.top-header-inner').css({
                        'position': 'fixed',
                        'top': '20px'
                    });
    
                } else {
                    $('.top-header-inner').css({
                        'position': 'relative',
                        'top': '0'
                    });
                    $
                }
            });
        }

        else {
            location.reload();
        }
    });





});



