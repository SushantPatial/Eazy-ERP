let lite = ['Store', 'Sales', 'Purchase', 'Quality', 'Tally Integration'];
let swiper_lite = new Swiper('.swiper-lite', {
  direction: "vertical",
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '"> <span>' + (lite[index]) + '</span></p>';
    },
  },
});

let pro = ['Store', 'Sales', 'Purchase', 'Advance Quality', 'Tally Integration', 'Production (WIP)', 'GST Register', 'Job Work (O/S & I/S)', 'MRP - I'];
let swiper_pro = new Swiper('.swiper-pro', {
  direction: "vertical",
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '"> <span>' + (pro[index]) + '</span></p>';
    },
  },
});

let addons = ['Fixed Asset Management', 'Plant Maintenance', 'Barcode', 'CRM', 'Rack Management', 'Web Report (Mobile App)', 'Customer Order App', 'Scheme Management', 'Payroll', 'Cloud Hosting'];
let swiper_addons = new Swiper('.swiper-addons', {
  direction: "vertical",
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '"> <span>' + (addons[index]) + '</span></p>';
    },
  },
});

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 550 && $(window).scrollTop() < 1000) {
    $("#header").removeClass("header-scrolled");
  } else {
    $("#header").addClass("header-scrolled");
  }
})