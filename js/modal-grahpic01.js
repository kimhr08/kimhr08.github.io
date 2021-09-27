$(function () {
    let posY01;
    $(".bnt_close01").hide()
    $(".img-list").on("click", function (e) {
        let i = $(this).index();
        posY01 = $(window).scrollTop();
        $("html ,body").addClass("not_scroll");
        $(".modal-content").eq(i).slideDown();
        $(".body-wrap").css("top", -posY01);
        $(".bnt_close01").show()
    });

    $(".bnt_close01").on("click", function () {
        $("html,body").removeClass("not_scroll");
        $(".modal-content").slideUp(300);
        posY01 = $(window).scrollTop(posY01);
        $(this).hide()
    });
});

