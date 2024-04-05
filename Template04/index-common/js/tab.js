$(document).ready(function () {
    $('.tab-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    $('.tab-nav li').click(function () {
        $('.tab-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).attr('data-tab');
        $('#' + activeTab).fadeIn();
        return false;
    });
});
