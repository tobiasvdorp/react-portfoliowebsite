$(document).ready(function () {
  $(".gallery li:lt(4)").show();
  $(".less").hide();
  var items = 9;
  var shown = 4;
  $(".more").click(function () {
    $(".less").show();
    shown = $(".gallery li:visible").length + 3;
    if (shown < items) {
      $(".gallery li:lt(" + shown + ")").show(100);
    } else {
      $(".gallery li:lt(" + items + ")").show(100);
      $(".more").hide();
    }
  });

  $(".less").click(function () {
    $(".gallery li").not(":lt(3)").hide(200);
    $(".more").show();
    $(".less").hide();
  });
});
