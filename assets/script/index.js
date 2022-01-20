(function() {
  "use strict";

  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        $("#header .logo img").attr("src", "assets/media/logo-white.png");
      } else {
        selectHeader.classList.remove('header-scrolled');
        $("#header .logo img").attr("src", "assets/media/logo.png");
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
});


/* Clients slider */
new Swiper('.clients-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 5,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 120
    }
  }
});