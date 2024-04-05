$(document).ready(function () {
  //TRAVEL HOOD
  $('.trending-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    variableWidth: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});