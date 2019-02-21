$( document).ready(function(){

	var peopleCounter = 2;
	var emojiCounter = 2;
	var emojiMood = ["emojis/cry.png","emojis/laugh.png","emojis/gross.png","emojis/fear.png","emojis/sleep.png","emojis/love.png","emojis/adventure.png","emojis/think.png","emojis/big.png","emojis/dark.png","emojis/family.png","emojis/alien.png","emojis/lick.png","emojis/cool.png","emojis/cold.png"];

// Give the people Faces
function faceOff(){

var url = emojiMood[peopleCounter];

		$(".face").attr("src", url);
		

}

//Whenever we click + attach more people
$('#add').click(function(){ 
	//pick a Face
	var url = emojiMood[peopleCounter];  
 	//attach more people
	$('#people').append("<img src=" + url + " class='face'>");	
	//Now you can remove people
	$('#minus').removeClass("hide");
	//And Add to our people count
	peopleCounter++;
	emojiCounter++;
	// if(emojiCounter > emojiMood.length){
	// 	emojiCounter = 0;
	// }
})

//Whenever we click - remove people
$('#minus').click(function(){   
	//remove a person but THIS IS REMOVING ALL OF THEM VISUALLY
	// $(".person").remove();
	$('.face').last().remove();
	//And Subtract from our people count
	peopleCounter--;
	emojiCounter--;
	//If you only have two people you can't delete any
	if(peopleCounter == 2){
		$('#minus').addClass("hide");
	}
})

//When we click bill we finalize people count
$('#bill').click(function(){     
	//No more adding people
	$('#add').addClass("hide");	    
	//No more adding people
	$('#bill').addClass("hide");	
	//No more remove people
	$('#minus').addClass("hide");
	//No more remove people
	$('#party').addClass("hide");
	//THE PRICE INPUT
	$('#input').removeClass("hide");
})

//Suggest a Tip
$('#suggestTip').click(function(){ 

	//Get the Bill Price
	var billPrice = $('#billPrice').val();

	//calculate the tip
	var tip = billPrice * .15;

	//Show Tip Section
	$('#tip').removeClass("hide");

	//suggest the tip
	$('#tipPrice').val(tip)
})

//When we click bill we finalize people count
$('#splitIt').click(function(){ 

	//Show Total
	$('.total').removeClass("hide");

	//Get the Bill + tip Price
	var billPrice = Number($('#billPrice').val());
	var tipPrice = Number($('#tipPrice').val());

	//Calculate the Bill + tip Price
	var total = billPrice + tipPrice;

	//Calculate the Bill + tip Price each
	var totalEach = total/peopleCounter;
	Math.round(totalEach);

	//Tell us about it
	$('.total').text("Everybody Pay: " + totalEach)
	
})



});







