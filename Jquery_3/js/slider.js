$(document).ready(function () {

    $(".single-item").slick({
        dots: true
    });


    //multiple-item


    $('.multiple-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    //reponsive-item

    $('.responsive-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //variable-width
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true
    });


    //Adaptive Height 
    $('.adaptive-height').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    //Data Attribute Settings
    $('.data').slick();

    //Center Mode
    $('.center-mode').slick({
        centerMode: true,
        slidesToShow: 3,
    })

    //lazy loading
    $('.lazy-loading').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    //autoplay
    $('.auto-play').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
    });

    //fade
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    //add and remove
    $('.add-remove').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });
    var slideIndex = 1;

    $('.add-btn').on('click', function () {
        slideIndex++;
        $('.add-remove').slick('slickAdd', '<div><h3>' + slideIndex + '</h3></div>');
    });

    $('.remove-btn').on('click', function () {
        $('.add-remove').slick('slickRemove', slideIndex - 1);
        if (slideIndex !== 0) {
            slideIndex--;
        }
    });


    //filtering

    $('.filtering').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });

    var filtered = false;

    $('.filter-btn').on('click', function () {
        if (filtered === false) {
            $('.filtering').slick('slickFilter', ':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
        }
    });


    //destroy
    $(".destroy").slick({
        dots: true
    });

    $(".destroy-btn").click(function () {
        $('.destroy').slick('unslick');
    });

    //right ro left

    $('.right-left').slick({
        rtl: true
    });



    //thumbsnil_slider


    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});




