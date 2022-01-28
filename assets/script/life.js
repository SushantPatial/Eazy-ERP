
$(document).ready(function() {
  let $grid = $('.portfolio-container').imagesLoaded( function() {
    $grid.isotope({
      itemSelector : '.portfolio-item', 
      filter: '.filter-awards',
      layoutMode : 'masonry',
      percentPosition: true
    });
  });
    
  $('#portfolio-flters').on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('#portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');
  });
})

/** Initiate portfolio lightbox **/
const portfolioLightbox1 = GLightbox({
  selector: '.diwali-19-lightbox'
});
const portfolioLightbox2 = GLightbox({
  selector: '.holi-19-lightbox'
});
const portfolioLightbox3 = GLightbox({
  selector: '.year-20-21-lightbox'
});
const portfolioLightbox4 = GLightbox({
  selector: '.year-18-19-lightbox'
});
const portfolioLightbox5 = GLightbox({
  selector: '.year-17-18-lightbox'
});
const portfolioLightbox6 = GLightbox({
  selector: '.hanuwantiya-lightbox'
});
const portfolioLightbox7 = GLightbox({
  selector: '.fortune-orange-lightbox'
});
const portfolioLightbox8 = GLightbox({
  selector: '.golden-tulip-lightbox'
});
const portfolioLightbox9 = GLightbox({
  selector: '.rishikesh-lightbox'
});

$(window).on('load', function() {
  $('.portfolio-container').isotope('reloadItems').isotope();
})

$('#year-20-21-toggler').on('click', function() {
  $('#year-20-21').toggle();
  $('#year-18-19').hide();
  $('#year-17-18').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#year-18-19-toggler').on('click', function() {
  $('#year-18-19').toggle();
  $('#year-20-21').hide();
  $('#year-17-18').hide();
  $('#year-18-19').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#year-17-18-toggler').on('click', function() {
  $('#year-17-18').toggle();
  $('#year-18-19').hide();
  $('#year-20-21').hide();
  $('#year-17-18').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})

$('#diwali-19-toggler').on('click', function() {
  $('#diwali-19').toggle();
  $('#holi-19').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#holi-19-toggler').on('click', function() {
  $('#holi-19').toggle();
  $('#diwali-19').hide();
  $('#holi-19').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#holi-19-toggler").one("click", function () {
  setTimeout(function() {
    $('#holi-19').removeClass('window-resize');
  }, 500)
});

$('#hanuwantiya-toggler').on('click', function() {
  $('#hanuwantiya').toggle();
  $('#fortune-orange').hide();
  $('#rishikesh').hide();
  $('#golden-tulip').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$('#fortune-orange-toggler').on('click', function() {
  $('#fortune-orange').toggle();
  $('#hanuwantiya').hide();
  $('#rishikesh').hide();
  $('#golden-tulip').hide();
  $('#fortune-orange').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#fortune-orange-toggler").one("click", function () {
  setTimeout(function() {
    $('#fortune-orange').removeClass('window-resize');
  }, 500)
});
$('#rishikesh-toggler').on('click', function() {
  $('#rishikesh').toggle();
  $('#fortune-orange').hide();
  $('#hanuwantiya').hide();
  $('#golden-tulip').hide();
  $('#rishikesh').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#rishikesh-toggler").one("click", function () {
  setTimeout(function() {
    $('#rishikesh').removeClass('window-resize');
  }, 500)
});
$('#golden-tulip-toggler').on('click', function() {
  $('#golden-tulip').toggle();
  $('#fortune-orange').hide();
  $('#rishikesh').hide();
  $('#hanuwantiya').hide();
  $('#golden-tulip').addClass('window-resize');
  $('.portfolio-container').isotope('reloadItems').isotope();
})
$("#golden-tulip-toggler").one("click", function () {
  setTimeout(function() {
    $('#golden-tulip').removeClass('window-resize');
  }, 500)
});


$(window).resize(function() {
  $('.masonry').addClass('window-resize');
  setTimeout(function() {
    $('.masonry').removeClass('window-resize');
  }, 500)
});

$('.masonry .fa-times').on('click', function() {
  $('.masonry').hide();
  $('.portfolio-container').isotope('reloadItems').isotope();
})



/* Particles JS */
particlesJS("particles-js-20", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})

particlesJS("particles-js-19", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})

particlesJS("particles-js-18", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})


particlesJS("particles-js-diwali-19", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})

particlesJS("particles-js-holi-19", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})


particlesJS("particles-js-hanuwantiya", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})

particlesJS("particles-js-fortune-orange", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})

particlesJS("particles-js-rishikesh", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})

particlesJS("particles-js-golden-tulip", {"particles":{"number":{"value":106,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":7455.866083024682,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false})