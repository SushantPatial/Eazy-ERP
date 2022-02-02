/*===== Client heading hover =====*/
$('.clients-heading').on('mouseenter', function() {
  $('.custom-cursor').css({
    'background-color': '#169be7',
    transform: 'translate(-35%, -35%) scale(3)'
  })
})
$('.clients-heading').on('mouseleave', function() {
  $('.custom-cursor').css({
    'background-color': 'transparent',
    transform: 'translate(-35%, -35%) scale(1)'
  })
})

/*===== Client logos hover =====*/
$('.client-logos').on('mouseenter', function() {
  $('.custom-cursor').css({
    transform: 'translate(-35%, -35%) scale(5)',
  })
})
$('.client-logos').on('mouseleave', function() {
  $('.custom-cursor').css({
    transform: 'translate(-35%, -35%) scale(1)'
  })
})

/*===== Mouse leave client section =====*/
$('.clients-section').on('mouseleave', function() {
  $('.custom-cursor').css({
    width: 0,
    height: 0
  })
})
$('.clients-section').on('mouseenter', function() {
  $('.custom-cursor').css({
    width: '50px',
    height: '50px'
  })
})

/*===== Custom cursor =====*/
$('document').ready(function() {
  var cursor = $(".custom-cursor");

  $('.clients-section').on('mousemove', function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    TweenLite.to(cursor, 0.3, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  })
})

/*
$('document').ready(function() {
  var cursor = $(".custom-cursor");
  var initCursor = false;

  $('main').on('mousemove', function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0.3, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  })

  $('main').on('mouseleave', function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  })
}) */