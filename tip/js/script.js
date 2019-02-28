$( document).ready(function(){

	var peopleCounter = 2;
	var emojiCounter = 2;
	var emojiMood = ["emojis/lick.png","emojis/love.png","emojis/laugh.png","emojis/cry.png","emojis/gross.png","emojis/fear.png","emojis/sleep.png","emojis/adventure.png","emojis/think.png","emojis/big.png","emojis/dark.png","emojis/family.png","emojis/alien.png","emojis/cool.png","emojis/cold.png"];
	const emojiLength = emojiMood.length;

//If we choose to split the check evenly
$('.split').click(function(){    
	//Take away our options
	$('#option').addClass("hide");		
	//Take away our backdrop
	$('.back').addClass("hide");
})

//Whenever we click + attach more people
$('#add').click(function(){ 
	//pick a Face
	var url = emojiMood[emojiCounter];  
 	//attach more people
	$('#people').append("<img src=" + url + " class='face'>");
	//Scroll with emojis
   	$(document).scrollTop($(document).height());
	//Now you can remove people
	$('#minus').removeClass("hide");
	//And Add to our people count
	peopleCounter++;
	emojiCounter++;
	//Tell us how many people we've got
	$('#party').html("Party Size: " + peopleCounter)
	//reset our face count when we run out of faces
	if(emojiCounter > emojiLength - 1){
		emojiCounter = 0;
	}
})

//Whenever we click - remove people
$('#minus').click(function(){   
	//remove a person but THIS IS REMOVING ALL OF THEM VISUALLY
	// $(".person").remove();
	$('.face').last().remove();
	//And Subtract from our people count
	peopleCounter--;
	emojiCounter--;
	//Tell us how many people we've got
	$('#party').html("Party Size: " + peopleCounter)
	//If you only have two people you can't delete any
	if(peopleCounter == 2){
		$('#minus').addClass("hide");
	}
})

//When we click bill we finalize people count
$('#party').click(function(){     
	//No more adding people
	$('#add').addClass("hide");		
	//No more remove people
	$('#minus').addClass("hide");
	//No more changing party size
	$('#party').addClass("hide");
	//THE PRICE INPUT
	$('#input').removeClass("hide");
})

//Suggest a Tip
$('#suggestTip').click(function(){ 
	tipGive();
})

function tipGive(){
	//Get the Bill Price
	var billPrice = $('#billPrice').val();
	//calculate the tip
	var tip = billPrice * .18;
	// Round Tip
	var totalTip = Math.round(tip);
	//Show Tip Section
	$('#tip').removeClass("hide");
	//suggest the tip
	$('#tipPrice').val(totalTip)
	//Make room for the tip
	$("#bill").css("height", "15vh");
}

//When we click bill we finalize people count
$('#splitIt').click(function(){ 
	splitTime();
})

function splitTime(){
	//Show Total
	$('.total').removeClass("hide");
	//Get the Bill + tip Price
	var billPrice = Number($('#billPrice').val());
	var tipPrice = Number($('#tipPrice').val());
	//Calculate the Bill + tip Price
	var total = billPrice + tipPrice;
	//Calculate the Bill + tip Price each
	var totalCalc = total/peopleCounter;
	// Round Number Total
	var totalEach = Math.round(totalCalc);
	//Make room for total
	$("#bill").css("height", "22vh");
	//Tell us about it
	$('.total').text("Everybody Pay: $" + totalEach);
	
}

//Calculate the equation when we press the keyboard
$('#bill').keydown(function(){   

  var keynum = event.keyCode;

  if(keynum == 13) {
   tipGive();
   splitTime();
  } 
  
})




});