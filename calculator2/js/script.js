$( document).ready(function(){

// Clear button reloads page
$("#clear").click(function(e){
  location.reload();
});

//Setting our base variable
var numInput = '0'; 
//Change the display to start with 0
 $('#window').text(numInput);
 
//Whenever we click a button class something happens
$('.button').click(function(){     
    		//Take away the zero once we start typing 
            if(numInput == '0') numInput = '';
            //When we hit the = button do these things:
            if($(this).text() == '=') {
            	//Calculate the buttons we pressed
            	numInput = eval(numInput);
            	//Display that number  
                $('#window').text(numInput);
                //Reset the Variable for next time
                numInput = '0';           
            } else {
            	//If we hit anything other then =, just display it
                numInput += $(this).text();
                $('#window').text(numInput);
            } 
})

//Calculate the equation when we press the keyboard
$('body').keydown(function(){   

  var keynum = event.keyCode;
  // console.log(keynum);

  if(keynum !== 13) {
    //Calculate the buttons we pressed
    numInput = eval(numInput);
    //Display that number  
    $('#window').text(numInput);
    //Reset the Variable for next time
    numInput = '0'; 
  } 

})


//NEEDS AN ERROR MESSAGE, not sure how to do this
// i think catch or try but I don't know how to use this?
           // else {
           //      var numInput = '0';
           //      $('#window').text("ERROR");
           //  }
});