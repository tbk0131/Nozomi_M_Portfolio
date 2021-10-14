'use strict';



// タイトル　タイプライター
const typewriter = (param) => {

  let el = document.querySelector(param.el);
  let speed = param.speed;
  let string = param.string.split("");
  string.forEach((char, index) => {
    setTimeout(() => {
      el.textContent += char;
    }, speed * index);
  });
};
typewriter({
  el: "#main-visual-title",
  string: "Nozomi Miura", //文字列
  speed: 160
});


ScrollReveal().reveal('.section__title,.steampunk', {
  duration: 1000, // アニメーション
  viewFactor: 0.4, //実行
  reset: true,
});


// スクロールリンク
$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({
    scrollTop: pos
  }, 1100);
  return false;
});



// ヘッダー制御
var headerH = $("#header").outerHeight(true);

function FixedAnime() {
  //ヘッダーの高さを取得
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    $('#header').addClass('HeightMin');
    $('.gnavi').addClass('HeightMin');
  } else {
    $('#header').removeClass('HeightMin');
    $('.gnavi').removeClass('HeightMin');
  }
}


$(window).scroll(function () {
  FixedAnime();
});


$(window).on('load', function () {
  FixedAnime();
});



$('#g-navi li a').click(function () {
  var headerVal = $("#header").outerHeight(true);


  var scroll = $(window).scrollTop();
  var adjust = 0;
  if (scroll <= headerVal) {
    adjust = 70;
  }

  var elmHash = $(this).attr('href'); //hrefを取得
  var pos = $(elmHash).offset().top - headerVal - adjust;

  $('body,html').animate({
    scrollTop: pos
  }, 1500);
  return false;
});



// レスポンシブナブ
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
  $(".openbtn1").removeClass('active');
  $("#g-nav").removeClass('panelactive');
});