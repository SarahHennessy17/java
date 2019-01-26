$( document).ready(function(){

	console.log("testing");


$("h1").mouseenter(function(e){
  // $(".bio").removeClass("hide");
  $('.bio').css('opacity',1);
});

$("h1").mouseout(function(e){
	// $(".bio").addClass("hide");
    $('.bio').css('opacity',0);
	});


});