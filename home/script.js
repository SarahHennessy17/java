$( document).ready(function(){

	console.log("testing testing 1 2 3");

$("h1").mouseenter(function(e){
  $('.bio').css('opacity',1);
});

$("h1").mouseout(function(e){
    $('.bio').css('opacity',0);
});

$(".link1").mouseenter(function(e){
  $('.movie').css('opacity',1);
});

$(".link1").mouseout(function(e){
    $('.movie').css('opacity',0);
});

$(".link2").mouseenter(function(e){
  $('.site').css('opacity',1);
});

$(".link2").mouseout(function(e){
    $('.site').css('opacity',0);
});

$(".link3").mouseenter(function(e){
  $('.game').css('opacity',1);
});

$(".link3").mouseout(function(e){
    $('.game').css('opacity',0);
});


});