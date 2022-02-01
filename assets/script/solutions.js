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
  if ($(window).scrollTop() > 380 && $(window).scrollTop() < 1000) {
    $("#header").removeClass("header-scrolled");
  } else {
    $("#header").addClass("header-scrolled");
  }
})

/* Module timer */
function circle(n, name) {
  let bar = new ProgressBar.Circle('#' + name + ' .swiper-slide:nth-child(' + n + ') .circle-loader', {
    strokeWidth: 6,
    duration: 5000,
    color: '#fff',
    trailColor: '#cccccc80',
    trailWidth: 6,
    svgStyle: null
  });
  bar.animate(1);
}

for (let i = 0; i <= 4;) {
  let interval = setInterval(function() {
    if ($('#eazy-erp-lite .swiper-slide:nth-child('+ i +')').hasClass('swiper-slide-active')) {
      circle(i, 'eazy-erp-lite');
      clearInterval(interval);
    }
  }, 500)
  i++;
}

for (let i = 0; i <= 8;) {
  let interval = setInterval(function() {
    if ($('#eazy-erp-pro .swiper-slide:nth-child('+ i +')').hasClass('swiper-slide-active')) {
      circle(i, 'eazy-erp-pro');
      clearInterval(interval);
    }
  }, 500)
  i++;
}

for (let i = 0; i <= 8;) {
  let interval = setInterval(function() {
    if ($('#add-ons .swiper-slide:nth-child('+ i +')').hasClass('swiper-slide-active')) {
      circle(i, 'add-ons');
      clearInterval(interval);
    }
  }, 500)
  i++;
}

 
/*
function eazyErpLite() {
  setTimeout(function() {
    document.getElementById("eazy-erp-lite-btn").click();
  }, 600)
};
function eazyErpPro() {
  setTimeout(function() {
    document.getElementById("eazy-erp-pro-btn").click();
  }, 600)
};
function addOns() {
  setTimeout(function() {
    document.getElementById("add-ons-btn").click();
  }, 600)
};
*/
