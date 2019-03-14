$( document).ready(function(){

	//play video on hover
	$('video').mouseenter(function(){ 
		//play the video
		$(this)[0].play();
	})

	//pause video when mouse leaves
	$('video').mouseleave(function(){ 
		//pause the video
		$(this)[0].pause();
	})

	//On scroll launch scroll function
	$(window).scroll(function(){
  		scrollIt();
	})
	

// a function for when we scroll
function scrollIt(){

	//a shortcut to all of our videos
	var video = $('video');
	//the height of the page
    var docHeight = document.documentElement.offsetHeight;

    //get the stats for each video
	$("video").each(function(){
		// This video + width + height
		var object = $(this);
		var w = object.width();
		var h = object.height();
		//the position of this video on the page
		var positionTop = $('video').offset().top;
		//math to get a percent for our scale
    	var scrolled = window.scrollY / ( w - window.innerHeight);
		// our percent set up as a scale for css
    	var transformValue = 'scale('+(1 - scrolled )+')';

    	//other things i thought I might need but didn't
    	var scrollTop = $(document).scrollTop();
    	var videoPosition = object.position().top;

    		// if the scale is too small stop scaling start scrolling:
        	if(transformValue <= 'scale(.7)'){
        		// console.log("if");
        		$(this).attr('style', 'transform: translateY(0vh) scale(.7);');
        	}
        	//if the postion of the video is below 315 then change the size of the video
        	else if(positionTop <= 315){
        		$(this).attr('style', 'transform: translateY(0vh) '+ transformValue);
        		$(".project").hide();
        	}
		}
	);
}






});









