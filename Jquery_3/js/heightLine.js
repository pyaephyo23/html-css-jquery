$(document).ready(function () {


    /*heightLine*/

    $(".box01 > div").heightLine();
    fontSizeCheck: true

    /*maxWidth minWidth*/

    $(".box02 > div").heightLine({
        maxWidth: 900,
        minWidth: 650
    });

    //destory

    $(".destroy-btn").click(function () {
        $(".box01 > div").heightLine("destroy");
    });

    //refresh

    $(".refresh-btn").click(function () {
        $(".box01 > div").heightLine("refresh");
    });


});