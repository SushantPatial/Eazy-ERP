  /* Animation on scroll */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: false
    });
  });

$("#product").change(function() {
  $("select option:selected").each(function() {
    $("#product").css("color", "#222");
  });
});

$("#state").change(function() {
  $("select option:selected").each(function() {
    $("#state").css("color", "#222");
  });
});