var bounce = [];


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
};


$(document).ready(function() {
  $("form#games").submit(function(event) {
    event.preventDefault();
    var outside = [];
    var number = $("input#number").val();
    //var result = ping(number);
    bounce.push(number);
    for (var i=0; i<bounce.length; i++) {
      var nub = ping(bounce[i]);
      outside.push(nub);
    }
    $(".ball").text('');
    for (var i=0; i<outside.length; i++) {
      $(".ball").append('<p>' + outside[i]) + '</p>';
    }
    // if (result) {
    //   $(".ball").text(result);
    // } else {
    //   $(".ball").text(number);
    // }

    $("#result").show();
  });
});
