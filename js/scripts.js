var ping = function(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {
  $("form#games").submit(function(event) {
    event.preventDefault();
var number = $("input#number").val();
var result = ping(number);

  if (result) {
      $(".ball").text("ping");
    } else {
      $(".ball").text(number);
    }

    $("#result").show();


  });
});
