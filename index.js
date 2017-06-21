$(document).ready(function(){

$(".y").hide();

$(".slider1").bxSlider();

	auto: true;
  	autoControls: true;

setTimeout(function(){
	$(".y").slideDown(1000)
		.rotate({
      	angle: 0,
      	animateTo:15
      	})
	}, 5000);

$(".y").rotate({bind:{
  click: function(){
    $(this).rotate({
      angle: 0,
      animateTo:375
      })
    }
  }
});



});



$(".quote1").hide();

$(".test").hover(function(){

  	$(".quote1").fadeOut();

});  	
