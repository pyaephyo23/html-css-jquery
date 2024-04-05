$(document).ready(function () {
    $('.categ-nav li a').on('click', function (e) {

        $href = $(this).attr("href").replace("#", "");

        $page = $(`.categ-product-item[id="${$href}"]`);

        $('html,body').animate({
            scrollTop:($page.offset().top)-70
        }, 1000);

        $(".categ-nav a").removeClass("categ-nav-active");
        $(this).addClass("categ-nav-active");

    });
});