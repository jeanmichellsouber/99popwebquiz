"use strict";

/* jQuery anchor link */
$(function () {
  $('a[href^="#"]').on('click', function (event) {
    var href = $(this).attr('href'),
        target = $(href == '#' || href == '' ? 'html' : href),
        position = target.offset().top;
    $('body, html').animate({
      scrollTop: position
    }, 250, 'swing');
    event.preventDefault();
  });
});
/* Check for device type */

var detectDeviceType = function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
};
/* Check if element is visible */


var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
  var partiallyVisible = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var _el$getBoundingClient = el.getBoundingClientRect();

  var top = _el$getBoundingClient.top;
  var left = _el$getBoundingClient.left;
  var bottom = _el$getBoundingClient.bottom;
  var right = _el$getBoundingClient.right;
  var _window = window;
  var innerHeight = _window.innerHeight;
  var innerWidth = _window.innerWidth;
  return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
/* Example of GSAP Timeline lite */


$(document).ready(function () {
  var tl = new TimelineLite();
  var htmlAndBody = $('html, body');
  tl.to(htmlAndBody, .1, {
    overflowY: "hidden"
  });
  tl.staggerFrom($('.animate'), .7, {
    y: -200,
    autoAlpha: 0
  }, 0.3);
  tl.staggerFrom($('.including'), .3, {
    x: -400,
    autoAlpha: 0
  });
  tl.staggerFrom($('.avatar'), 0.6, {
    scale: 0,
    autoAlpha: 0,
    ease: Sine.easeOut
  });
  tl.staggerFromTo($('.row.second div'), .5, {
    y: 400,
    autoAlpha: 0
  }, {
    y: 0,
    autoAlpha: 1
  }, 0.3);
  tl.to(htmlAndBody, .1, {
    overflowY: "auto"
  });
  $('.toggleNext').click(function () {
    $(this).next().stop().slideToggle(300); // $('.toggleNext').removeClass('disabled');
    // $('.toggleNext').not(this).addClass('disabled');

    return false;
  });
}); // VUEJS LOGIC

var app = new Vue({
  el: '#pop99quiz',
  data: {
    perguntas: [0, 0, 0],
    resultado: [0, 0, 0],
    busca: [false, false]
  },
  mounted: function mounted() {
    this.slides();
  },
  methods: {
    slides: function slides() {
      var swiperresultado = new Swiper('.swiper-resultado', {
        slidesPerView: 1 // autoHeight: true,

      }).on('transitionEnd', function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        $('.tab-resultado').removeClass('selecionado');
        $('.tab-resultado:eq(' + this.activeIndex + ')').addClass('selecionado');
      });
      var swiperprogramacao = new Swiper('.swiper-programacao', {
        slidesPerView: 1 // autoHeight: true,

      }).on('transitionEnd', function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        $('.tab-programacao').removeClass('selecionado');
        $('.tab-programacao:eq(' + this.activeIndex + ')').addClass('selecionado');
      });
      var swiperlocal = new Swiper('.swiper-local', {
        slidesPerView: 1 // autoHeight: true,

      }).on('transitionEnd', function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        $('.tab-local').removeClass('selecionado');
        $('.tab-local:eq(' + this.activeIndex + ')').addClass('selecionado');
      });
      var swipergeral = new Swiper('.swiper-geral', {
        slidesPerView: 1,
        autoHeight: true,
        simulateTouch: false,
        draggable: false,
        noSwiping: true,
        allowTouchMove: false
      }).on('transitionEnd', function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    },
    gotoslide: function gotoslide(whichslide, index) {
      var mySwiper = document.querySelector(whichslide).swiper;
      mySwiper.slideTo(index);
    },
    gotoslides: function gotoslides(whichslide, index, whichslide2, index2) {
      var mySwiper = document.querySelector(whichslide).swiper;
      mySwiper.slideTo(index);
      setTimeout(function () {
        var mySwiper = document.querySelector(whichslide2).swiper;
        mySwiper.slideTo(index2);
      }, 500);
    },
    scrollup: function scrollup(num) {
      var vl = parseInt(app.perguntas[num]);
      app.resultado[vl] += 1;
      setTimeout(function () {
        window.scrollTo({
          top: 1000,
          left: 0,
          behavior: 'smooth'
        });
      }, 300);
    }
  }
});