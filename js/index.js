$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.email').click(
  function(){
    console.log("Next Button Pressed");
    $('.email-section').addClass("fold-up");
    $('.name-section').removeClass("folded");
  }
);

$('.name').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-user').addClass("next");
    } else {
      $('.icon-user').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.name').click(
  function(){
    console.log("Next Button Pressed");
    $('.name-section').addClass("fold-up");
    $('.college-section').removeClass("folded");
  }
);

$('.college').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-building').addClass("next");
    } else {
      $('.icon-building').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.college').click(
  function(){
    console.log("Next Button Pressed");
    $('.college-section').addClass("fold-up");
    $('.number-section').removeClass("folded");
  }
);

$('.number').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-mobile-phone').addClass("next");
    } else {
      $('.icon-mobile-phone').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.number').click(
  function(){
    console.log("Next Button Pressed");
    $('.number-section').addClass("fold-up");
    $('.events-section').removeClass("folded");
  }
);
$('.events').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-trophy').addClass("next");
    } else {
      $('.icon-trophy').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.number').click(
  function(){
    console.log("Next Button Pressed");
    $('.events-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);
