$(function () {
  $(".tab_content01").hide();
  $(".tab_content01").eq(0).show();
  $(".tabs01 a").click(function () {
    $("ul.tabs01 span").removeClass("active");
    $(this).children("span").addClass("active");
    $(".tab_content01").hide();
    let tabid = $(this).attr("href");
    $(tabid).fadeIn(200);
  });

  $(".tab_content02").hide();
  $(".tab_content02").eq(0).show();
  $(".tabs02 a").click(function () {
    $("ul.tabs02 span").removeClass("active");
    $(this).children("span").addClass("active");
    $(".tab_content02").hide();
    let tabid = $(this).attr("href");
    $(tabid).fadeIn(200);
  })
});

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function () {
        window.location.hash = hash;
      });
    }
  });
});

$("#leftBtn").click(function(){
  $("#rolling").stop().animate({left:"+=370px"},300,function(){
    $("#rolling").prepend($("#rolling>:last-child"));
    $("#rolling").css("left","-370px");
  });

});
$("#rightBtn").click(function(){
  $("#rolling").stop().animate({left:"-=200px"},300,function(){
    $("#rolling").append($("#rolling>:first-child"));
    $("#rolling").css("left","-370px");
  });
});

