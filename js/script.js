$(function () {
  "use strict";
  // banner slider js
  $('.banner').slick({
    dots: true,
    infinite: true,
    speed: 800,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  }).slickAnimation();

  // work item popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

  // fixed menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.sticky-top').addClass('shadow-lg').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-lg').css('top', '-100px');
    }
  });

  // sister concerns slider js
  $('.product-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  })

  $(document).ready(function () {
    $(window).on('scroll', function () {
      // Check if the section is in the viewport
      if (isElementInViewport('#count-section')) {
        // Run countTo plugin
        $('.timer').countTo(); // Replace '.count-number' with your appropriate selector
        // Unbind the scroll event to prevent multiple executions
        $(window).off('scroll');
      }
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
      var rect = $(element)[0].getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });

  // event calender js
  $('.calendar').pignoseCalendar();


  // product detils image change js
  $(document).ready(function () {
    $('.zoom-child-image img').click(function () {
      let image = $(this).attr('src');
      $('.big-side-image img').attr('src', image)
    })

    $('.zoom-child-image').on('click', function () {
      $('.zoom-child-image.active').removeClass('active');
      $(this).addClass('active');
    })
  })

  // nice select
  $(document).ready(function () {
    $('select').niceSelect();
  })

  // gallery popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

  // video gallery popup js
  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // NiceSelect.bind(document.getElementById("#a-select"));
  // Animation on scroll
  // window.addEventListener('load', () => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false
  //   })
  // });
});