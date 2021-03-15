$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".slp_navbar").css({ "position": "fixed", "top": 0 })
        } else {
            $(".slp_navbar").css({ "position": "relative" })
        }
    });
});