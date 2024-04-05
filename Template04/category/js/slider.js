$(document).ready(function() {
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
});