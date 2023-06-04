$(document).ready(function() {
  $('#shakeButton').click(function() {
    $('#shopButton').addClass('shake');

    // Remove the shake class after the animation completes
    setTimeout(function() {
      $('#shakeButton').removeClass('shake');
    }, 500);
  });
});

