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
var number = parseInt($("input#number").val());
var result = ping(number);

$(".ping").text(number);

    $("#result").show();
  });
});
