$(document).ready(function () {

    $(".menu-btn").on("click", function () {
        $(".menu-btn").toggleClass("active-btn");
        $(".gnav").toggleClass("active-gnav");
        
    });
})