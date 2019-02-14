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
            if(numInput == '0') {numInput = ''}
            else {
              //If we hit anything other then =, just display it
                numInput += $(this).text();
                $('#window').text(numInput);
            } 
})

//When we hit the = button do these things:
$('.equal').click(function(){ 
    //Calculate the buttons we pressed
    numInput = eval(numInput);
    if(numInput == '='){
      numInput = '';
    }
      
    if(numInput>=10000 && numInput<=10000){
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

});












