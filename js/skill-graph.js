'use strict';




const navigator = document.querySelector(".navigator");
const headerHeight = navigator.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    navigator.setAttribute("style", "background: #fffa;");
  } else {

    navigator.setAttribute("style", "background: transparent;");
  }
});

function goTop(){
  document.documentElement.scrollTop = 0;
}

(()=>navigator)();



$(function () {
  function animated_contents() {
    $(".chart1").easyPieChart({
      barColor: '#4689ea' ,
      trackColor:'#ccc' ,
      scaleColor: 'transparent' ,
      lineCap: 'butt',
      lineWidth: 10 ,
      size: 100,
      animate: 1000,
      rotate:0,
      onStart: $.noop,
      onStop: $.noop
    });
    $(".chart2").easyPieChart({
      barColor: '#4689ea' ,
      trackColor:'#ccc' ,
      scaleColor: 'transparent' ,
      lineCap: 'butt',
      lineWidth: 10 ,
      size: 100,
      animate: 1000,
      rotate:0,
      onStart: $.noop,
      onStop: $.noop
    });
    $(".chart3").easyPieChart({
      barColor: '#4689ea' ,
      trackColor:'#ccc' ,
      scaleColor: 'transparent' ,
      lineCap: 'butt',
      lineWidth: 10 ,
      size: 100,
      animate: 1000,
      rotate:0,
      onStart: $.noop,
      onStop: $.noop
    });
    $(".chart4").easyPieChart({
      barColor: '#4689ea' ,
      trackColor:'#ccc' ,
      scaleColor: 'transparent' ,
      lineCap: 'butt',
      lineWidth: 10 ,
      size: 100,
      animate: 1000,
      rotate:0,
      onStart: $.noop,
      onStop: $.noop
    });
    $(".chart5").easyPieChart({
      barColor: '#4689ea' ,
      trackColor:'#ccc' ,
      scaleColor: 'transparent' ,
      lineCap: 'butt',
      lineWidth: 10 ,
      size: 100,
      animate: 1000,
      rotate:0,
      onStart: $.noop,
      onStop: $.noop
    });
  }

  function scrollEvent() {
    let hT = $('#skill').offset().top,
      hH = $('#skill').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    if (wS >= (hT + hH - wH - 600)) {
      animated_contents();
    }
  }
  window.addEventListener("scroll", scrollEvent);
});