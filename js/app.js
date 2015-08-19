$(document).ready(function() {
  introFade();
  playGame();
  $(document).keydown(function(x) {
  if (x.keyCode == 88) {
    $('.ryu-action').hide();
    $('.ryu-cool').show();
  }
})
  .keyup(function(x) {
    if (x.keyCode == 88) {
      $('.ryu-action').hide();
      $('.ryu-still').show();
    }
  });
});

function introFade() {
  $('.text1').fadeIn(2000,function() {
    $('.text2').fadeIn(2000,function() {
      $('.text3').fadeIn(2000);
    });
  });
}

function playGame() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left':'1115px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '615px');
      });
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
});
}



function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }