$(document).ready(function () {
    //Product
    $(".product-slide").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.cat-mv-sec .slick-dots li:first-child').addClass('dots-active');

    $('.cat-mv-sec .slick-dots li').click(function () {
        $('.cat-mv-sec .slick-dots li').removeClass('dots-active');
        $(this).addClass('dots-active');
    })

    //Anchor
    $('.anchor-sec .anchor-btn li:first-child').addClass('cat-active');
    $('.anchor-sec .anchor-btn li').click(function () {
        $('.anchor-sec .anchor-btn li').removeClass('cat-active');
        $(this).addClass('cat-active');
    })


    //Category
    $('.category-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        fade: true,
        //autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        infinite: true,
        speed: 1000,
    });
    //***********End Category Slider ***********
})