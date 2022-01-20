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