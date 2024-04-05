$(document).ready(function () {
  $('.anchor-right-blk .anchor-btn li a').on('click', function (e) {
      var href = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, '500');
  });

  $('.l-inner-blk ul li').click(function () {
    $('this').addClass('suncream-btn-active');
  });



  $('.categ-nav li a').on('click', function (e) {

    $href = $(this).attr("href").replace("#", "");

    $page = $(`.categ-product-item[id="${$href}"]`);

    $('html,body').animate({
        scrollTop:($page.offset().top)-70
    }, 1000);

    $(".categ-nav a").removeClass("categ-nav-active");
    $(this).addClass("categ-nav-active");

});
})