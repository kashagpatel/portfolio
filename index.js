$(document).ready(function(){

$(".y").hide();

$(".slider1").bxSlider();

	auto: true;
  	autoControls: true;

$(".title1").click(function(){

$(".y").slideDown();

});

$(".y").rotate({bind:{
  click: function(){
    $(this).rotate({
      angle: 0,
      animateTo:45
      })
    }
  }
});



});



$(".quote1").hide();

$(".test").hover(function(){

  	$(".quote1").fadeOut();

});  	


