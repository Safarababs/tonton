$(document).ready((function() {
    $(".accordion").click((function() {
        $(this).toggleClass("active")
    }
    )),
    $("#menu-bar").click((function() {
        $(this).toggleClass("fa-times"),
        $(".navbar").toggleClass("nav-toggle")
    }
    )),
    $("#share").click((function() {
        $(this).toggleClass("share-active")
    }
    )),
    $(window).on("load scroll", (function() {
        $(".fa-bars").removeClass("fa-times"),
        $(".navbar").removeClass("nav-toggle"),
        $("#share").removeClass("share-active")
    }
    )),
    $(".controls li").click((function() {
        let o = $(this).attr("data-filter");
        "all" == o ? $(".books .box").show(400) : ($(".books .box").not("." + o).hide(200),
        $(".books .box").filter("." + o).show(400)),
        $(this).addClass("button-active")
    }
    ))
}
))

