$( document).ready(function(){

	var peopleCounter = 2;
	var emojiCounter = 2;
	var emojiMood = ["../emojis/lick.png","../emojis/love.png","../emojis/laugh.png","../emojis/cry.png","../emojis/gross.png","../emojis/fear.png","../emojis/sleep.png","../emojis/adventure.png","../emojis/think.png","../emojis/big.png","../emojis/dark.png","../emojis/family.png","../emojis/alien.png","../emojis/cool.png","../emojis/cold.png"];
	const emojiLength = emojiMood.length;
	var myPrice = $('.myPrice');

//Whenever we click + attach more people
$('#add').click(function(){ 
	//pick a Face
	var url = emojiMood[emojiCounter];  
 	//attach more people
	$('#people').append("<img src=" + url + " class='face'>");
	addDishes();	
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

//Add more people
function addDishes(){
	$('.face').last().after("<input type='text' class='myPrice hide' placeholder='$'><button class='addMore hide none'>+</button>");
}

//Add more money boxes
// $('.addMore').click(function(){ 
// 	$(this).after("<input type='text' class='myPrice bonus'><button class='addMore bonus'>+</button>");
// 	console.log("heloooo");
// })

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
	$('#party').addClass("none");
	//Let's add prices
	$('.myPrice').removeClass("hide");
	$('#prices').removeClass("none");	
	//Let's add MORE prices
	// $('.addMore').removeClass("hide");	
})

$('#prices').click(function(){ 
	//THE PRICE INPUT
	$('#input').removeClass("hide");
	//THE PRICE INPUT
	$('#prices').addClass("none");
	//No more changing prices
	$('.myPrice').attr('readonly', true);	
	getTax();
})

//Suggest a Tip
$('#suggestTip').click(function(){ 
	tipGive();
})

//equal sign gets us total
$('#splitIt').click(function(){ 
	splitTime();
})

function getTax(){
	//get the bill total
	var billPrice = 0;
    $(".myPrice").each(function(){
        billPrice += +$(this).val();
    });
	//get the tax
	var tax = billPrice * .08875 ;
	var suggestTax = Math.round(tax);
	//suggest the tax
	$('#taxPrice').val(suggestTax);
}

function tipGive(){
	//Get our bill
	var billPrice = 0;
    $(".myPrice").each(function(){
        billPrice += +$(this).val();
    });
	//Get the tax
	var taxAmount = Number($('#taxPrice').val());
	//add tax and tip
	var ourTotal = billPrice + taxAmount;
	//calculate the tip
	var tip = ourTotal * .18;
	// Round Tip
	var totalTip = Math.round(tip);
	//Show Tip Section
	$('#tip').removeClass("hide");
	//suggest the tip
	$('#tipPrice').val(totalTip)
	//Make room for the tip
	$("#bill").css("height", "15vh");
}

function splitTime(){
	//Make room for total
	$("#bill").css("height", "22vh");
	//Show Total
	$('.total').removeClass("hide");
	//Get the tax + tip Price
	var taxPrice = Number($('#taxPrice').val());
	var tipPrice = Number($('#tipPrice').val());
	//Split the tax/tip
	var splitAmount = tipPrice + taxPrice;
	var splitIt = splitAmount/peopleCounter;
	var totalAmount = Number(splitIt);
	// var totalAmount = splitIt.toFixed(2);

	//how much does everyone need to add to their total
	$('.total').val(totalAmount);
	$('.total').text("Everybody add $" + totalAmount + " to your total");

    $(".myPrice").each(function(){
    	var thisAmount = 0;
        thisAmount = Number($(this).val());
        $(this).val(thisAmount + totalAmount);
        console.log(thisAmount + totalAmount);
    });

}

//Calculate the equation when we press the keyboard
$('#input').keydown(function(){   

  var keynum = event.keyCode;

  if(keynum == 13) {
   tipGive();
  } 

})

//Calculate the equation when we press the keyboard
$('#tipPrice').keydown(function(){   

  var keynum = event.keyCode;

  if(keynum == 13) {
   splitTime();
  } 

})

});




