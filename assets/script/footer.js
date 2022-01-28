$("#year").html(new Date().getFullYear());

/* Back to top */
$(window).on("scroll", function() {
  if ($(window).scrollTop() > 100) {
    $(".back-to-top").addClass('active');
  } else {
    $(".back-to-top").removeClass('active');
  }
})
