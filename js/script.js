/*  --------------------------------------
*         Table of Content
*  --------------------------------------
*  01. counterUp
*  02. venobox
*  03. Testimonial left slider
*  04. Testimonial right slider
*  05. sticky-menu
*  06. smooth scroll
*  07. scroll to top
*  --------------------------------------
*  -------------------------------------- */

jQuery(document).ready(function($){
  'use strict';
  
  /* --------------------------------------------
    ------------- 01. counterUp ---------------
  ----------------------------------------------- */
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
  /* --------------------------------------------
    ------------- 02. venobox ---------------
  ----------------------------------------------- */
  $('.venobox').venobox(); 
  var mixer = mixitup('.contain');
  /* --------------------------------------------
    ------------- 03. Testimonial left slider ---------------
  ----------------------------------------------- */

  $('.active-testi').slick({
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.active-test',
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  /* --------------------------------------------
    ------------- 04. Testimonial right slider ---------------
  ----------------------------------------------- */
  $('.active-test').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.active-testi',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* --------------------------------------------
    ------------- 05. sticky-menu ---------------
  ----------------------------------------------- */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
        $(".sticky").removeClass("scroll-header");
        $(".sticky").addClass("scroll-header1");
    } else {
        $(".sticky").addClass("scroll-header");
        $(".sticky").removeClass("scroll-header1");
    }
  });
  /* --------------------------------------------
    ------------- 06. smooth scroll ---------------
  ----------------------------------------------- */
  var scroll = new SmoothScroll('a[href*="#"]');

  
  /* --------------------------------------------
    ------------- 06. scroll to top ---------------
  ----------------------------------------------- */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


});
      