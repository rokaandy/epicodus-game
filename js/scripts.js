var ping = function(number) {
    if (number % 15 === 0) {
    return 'pingpong';
  } else if (number % 3 === 0) {
    return 'ping';
  } else if (number % 5 === 0) {
    return 'pong';
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
      $(".ball").text(result);
    } else {
      $(".ball").text(number);
    }

    $("#result").show();
  });
});
