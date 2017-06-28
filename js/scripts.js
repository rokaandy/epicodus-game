var ping = function(number) {
  if (number % 15 === 0) {
    return 'pingpong';
  } else if (number % 3 === 0) {
    return 'ping';
  } else if (number % 5 === 0) {
    return 'pong';
  } else {
    return number;
  }
}


$(document).ready(function() {
  $("form#games").submit(function(event) {
    event.preventDefault();
    
    var number = $("input#number").val();
    $(".ball").text('');
    for (var i=1; i<=number; i++) {
      $(".ball").append('<p>' + ping(i) + '</p>');
    }
    $("#result").show();
  });
});
