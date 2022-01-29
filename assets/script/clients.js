$('.clients-section').bind('mousemove', function(e) {
    $('.cursor').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

$('.clients-section .client-logos').hover(function() {
  $('.cursor').css({
    transition: '0.1s',
  })
  setTimeout(function() {
    $('.cursor').css({
      transition: '0s',
    })
  }, 100);
});

$('.clients-section .clients-heading').hover(function() {
  $('.cursor').css({
    transition: '0.1s',
  })
  setTimeout(function() {
    $('.cursor').css({
      transition: '0s',
    })
  }, 100);
});
