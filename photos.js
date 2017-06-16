$(document).ready(function(){
  
  $(".two").hide();

$(".one").click(function(){

  	$(".one").fadeOut();
  	$(".two").fadeIn();

});
   
$(".two").click(function(){

  	$(".two").fadeOut();
  	$(".one").fadeIn();

});

});