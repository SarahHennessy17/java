$( document).ready(function(){

	// console.log("ready");
	var teamPick1 = 15;
	var teamCount = -1;
	var i = 0;
	var clicked = false;

///////////////// THE CARD SELECTION SCREEN ////////////////////////////////// 

	$(".frontcard").hide();
	$(".backcard").hide();
	$(".compareTo").hide();

	// do this funtion for all 30 mlb teams
	$(".card").each(function(index){
		//counter
		teamCount++;
		// Give each card an index
		$(this).attr('index_number', i++);
		//Give each card an index number based on their order
		$(this).css("z-index", index);
		//change the position of each subsequent card
			//var teamTop = index * -87;
			var teamTop = index * 9 + 9;
		//give it a z-index based on its place in the order
		$(this).css("top", teamTop + "vh");
		//add the team name
		$(this).append("<div class='pickTeam'>" + teamData[index]["teamName"] + "</div>");
		//Change Text Color
		$(this).css("color", teamData[index]['textColor']);
		//change the card color to the JSON color listed
		$(this).css("background-color", teamData[teamCount]['color1']);
		//change the border color to the JSON color listed
		$(this).css("border", "3vh solid" + teamData[teamCount]['color2']);
		//add corect name/logo
		$(this).append("<img src=" + teamData[teamCount]['logo'] + " class='logo'>");
	});

	//When I click the card run this function:
	$(".card").click(function(index) {
		//Check to see if the z-index has already been made to 100, change it back to 1
        if(clicked == true){
        	// what is this cards index number
        	var indexReset = parseInt($(this).attr('index_number'));
        	//Make all cards have a z-index of 1 (put in back)
        	$(this).css("z-index", indexReset);
        	//We did click
        	clicked = false;
        } else {
        	//The top of the clicked card
        	var cardTop = $(this).offset().top;
        	// console.log(cardTop);
        	//The index of the clicked card
        	var cardZ = $(this).attr('index_number');
        	//The NEW index of the clicked card
        	var newZ = parseInt(cardZ) + 7;
        	//Scroll to the top of this card
        	$('body').scrollTop(cardTop);
        	//Give it a new z-index
        	$(this).css("z-index", newZ);
        	// We did click
        	clicked=true;
        }
    });

	//Create true/false data for our logos
    $(".logo").data("clicks", !oddclick);
	var oddclick = $(".logo").data('clicks');

	//When I click "logo" sleect the team & check if it is 1st or 2nd
	 $('.logo').click(function() {
	  if (oddclick == true) {
	 	$(this).parent(".card").hide();
///////////////// SHOW ONE TEAM FRONT CARD ////////////////////////////////// 
	  	
	  	//The next one will be an even click!
	    oddclick = false;
		// reset teamPick1 to be the card you clicked
		var teamPick1 = $(this).parent().attr('index_number');
		//Which number from our array did we choose
			// 	console.log("team 1:", teamPick1);
		// Give each card an index
		$(".frontcard").attr('index_number', teamPick1);
		//SHOW THE FRONT CARD
		$(".frontcard").show();
		//HIDE THE SELECT
		$("#select").hide();
		//Change the team name
		$(".teamName").text(teamData[teamPick1]["teamName"]);
		//change the card color to the JSON color listed
		$(".frontcard").css("background-color", teamData[teamPick1]['color1']);
		//change the border color to the JSON color listed
		$(".frontcard").css("border", "3vh solid" + teamData[teamPick1]['color2']);
		//Change the team logo
		$(".smallLogo").attr("src", teamData[teamPick1]['logo']);
		//Change Text Color
		$(".teamName").css("color", teamData[teamPick1]['textColor']);
  		//Update the area
		$(".details").html(teamData[teamPick1]['details']);
		//Change Text Color
		$(".details").css("color", teamData[teamPick1]['textColor']);
		//Change Text Color
		$(".compare").css("color", teamData[teamPick1]['textColor']);
		//Change the team colors to the JSON color listed
		$("#caucasian").css("background-color", teamData[teamPick1]['color3']);
		$("#african").css("background-color", teamData[teamPick1]['color2']);
		$("#latino").css("background-color", teamData[teamPick1]['color1']);
		$("#asian").css("background-color", teamData[teamPick1]['color4']);
		$("#other").css("background-color", teamData[teamPick1]['color5']);
		//Change the team stats to the JSON number listed
		$("#caucasian").css("height", teamDemo[teamPick1]['white'] + "%");
		$("#african").css("height", teamDemo[teamPick1]['black'] + "%");
		$("#latino").css("height", teamDemo[teamPick1]['latino'] + "%");
		$("#asian").css("height", teamDemo[teamPick1]['asian'] + "%");
		$("#other").css("height", teamDemo[teamPick1]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".c_percent").text(teamDemo[teamPick1]['white'] + "%");
		$(".aa_percent").text(teamDemo[teamPick1]['black'] + "%");
		$(".l_percent").text(teamDemo[teamPick1]['latino'] + "%");
		$(".a_percent").text(teamDemo[teamPick1]['asian'] + "%");
		$(".o_percent").text(teamDemo[teamPick1]['other'] + "%");
			//Change Text Color for stats
			$(".c_tag").css("color", teamData[teamPick1]['text1']);
			//Change Text Color for stats
			$(".aa_tag").css("color", teamData[teamPick1]['text2']);
			//Change Text Color for stats
			$(".l_tag").css("color", teamData[teamPick1]['text3']);
			//Change Text Color for stats
			$(".a_tag").css("color", teamData[teamPick1]['text4']);
			//Change Text Color for stats
			$(".o_tag").css("color", teamData[teamPick1]['text5']);
			//Change % Color for stats
			$(".c_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick1]['text1']);
			//Change % Text Color for stats
			$(".aa_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick1]['text2']);
			//Change % Text Color for stats
			$(".l_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick1]['text3']);
			//Change % Text Color for stats
			$(".a_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick1]['text4']);
			//Change % Text Color for stats
			$(".o_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick1]['text5']);
		

		if(teamDemo[teamPick1]['black'] <= 9){
			$(".aa_percent").addClass("smaller_percent");
			$(".aa_tag").addClass("smaller_tag");
		} 
		if(teamDemo[teamPick1]['latino'] <= 9){
			$(".l_percent").addClass("smaller_percent");
			$(".l_tag").addClass("smaller_tag");
		} 
		if(teamDemo[teamPick1]['asian'] <= 9){
			$(".a_percent").addClass("smaller_percent");
			$(".a_tag").addClass("smaller_tag");
		}
		if(teamDemo[teamPick1]['other'] <= 9){
			$(".o_percent").addClass("smaller_percent");
			$(".o_tag").addClass("smaller_tag");
		}



		if(teamDemo[teamPick1]['black'] == 0){
			$("#african").hide();
			// console.log("hidden");
		}
		if(teamDemo[teamPick1]['latino'] == 0){
			$("#latino").hide();
			// console.log("hidden");
		}
		if(teamDemo[teamPick1]['asian'] == 0){
			$("#asian").hide();
			// console.log("hidden");
		}
		if(teamDemo[teamPick1]['other'] == 0){
			$("#other").hide();
			// console.log("hidden");
		}

	  } 
///////////////// COMPARE TWO FRONT CARDS ////////////////////////////////// 
	 
	  else {
	  	//The next one will be an even click!
	    oddclick = true;
	    // set teamPick2 to be the card you clicked
		var teamPick2 = $(this).parent().attr('index_number');
		//Which number from our array did we choose
			// console.log("team 2:", teamPick2);
		// create a new card 
  		$('.cardcompare').find('.frontcard').addClass('team2');
		// Give each card an index
		$(".cardcompare").find(".frontcard").attr('index_number', teamPick2);
		//SHOW THE FRONT CARD
		$(".frontcard").show();
		//HIDE THE SELECT
		$("#select").hide();
		//Hide the team details
		$(".details").hide();
		//Show the new card
		$(".cardcompare").show();
		//Hide the team name
		$(".teamName").hide();
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//Change the team name
			// $(".cardcompare").find(".teamName").text(teamData[teamPick2]["teamName"]);
		//change the card color to the JSON color listed
		$(".cardcompare").find(".frontcard").css("background-color", teamData[teamPick2]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").find(".frontcard").css("border", "3vh solid" + teamData[teamPick2]['color2']);
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", teamData[teamPick2]['logo']);
		//Change Text Color
		$(".cardcompare").find(".compare").css("color", teamData[teamPick2]['textColor']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", teamData[teamPick2]['color3']);
		$(".cardcompare").find("#african").css("background-color", teamData[teamPick2]['color2']);
		$(".cardcompare").find("#latino").css("background-color", teamData[teamPick2]['color1']);
		$(".cardcompare").find("#asian").css("background-color", teamData[teamPick2]['color4']);
		$(".cardcompare").find("#other").css("background-color", teamData[teamPick2]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", teamDemo[teamPick2]['white'] + "%");
		$(".cardcompare").find("#african").css("height", teamDemo[teamPick2]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", teamDemo[teamPick2]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", teamDemo[teamPick2]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", teamDemo[teamPick2]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(teamDemo[teamPick2]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(teamDemo[teamPick2]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(teamDemo[teamPick2]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(teamDemo[teamPick2]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(teamDemo[teamPick2]['other'] + "%");
			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", teamData[teamPick2]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", teamData[teamPick2]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", teamData[teamPick2]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", teamData[teamPick2]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", teamData[teamPick2]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick2]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick2]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick2]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick2]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + teamData[teamPick2]['text5']);
		
		if(teamDemo[teamPick2]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(teamDemo[teamPick2]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(teamDemo[teamPick2]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(teamDemo[teamPick2]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(teamDemo[teamPick2]['black'] == 0){
			$(".cardcompare").find("#african").hide();
			// console.log("hidden");
		} 
		if(teamDemo[teamPick2]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		} 
		if(teamDemo[teamPick2]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(teamDemo[teamPick2]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
	  }
	});

///////////////// THE FRONT CARD SCREEN //////////////////////////////////  

	//When I click the +
	$(".compare").click(function(index) {
		//Show the options
		$(".frontcard").hide();
		$(".cardcompare").hide();
		$(".compareTo").show();

		//create a new card 
  		$('.cardcompare').html($('.frontcard').clone().addClass('mlb'));
    });

    //When I click the + on the two card view screen
	$(".team2").find(".compare").click(function(index) {
		//Show the options
		$(".frontcard").hide();
		$(".cardcompare").hide();
		$(".compareTo").show();
		console.log("working")
    });

	//When I click the logo
	$(".smallLogo").click(function(index) {
		//You can flip
		$("#card").flip(true);
		// reset teamPick1 to be the card you clicked		
		var teamPick1 = $(".frontcard").attr('index_number');
		//Hide the front
		$(".frontcard").hide();
		//Show the back
		$(".backcard").show();
		//Change the team name
		$(".nameback").text(teamData[teamPick1]["teamName"]);
		//change the card color to the JSON color listed
		$(".backcard").css("background-color", "white");
		//change the border color to the JSON color listed
		$(".backcard").css("border", "3vh solid" + teamData[teamPick1]['color2']);
		//Change the team logo
		$(".medLogo").attr("src", teamData[teamPick1]['logo']);
		//Change the team stats number to the JSON number listed
		$("#caucasianPlayers").text(teamDemo[teamPick1]['white'] / 2.5);
		$("#AAPlayers").text(teamDemo[teamPick1]['black'] / 2.5);
		$("#latinoPlayers").text(teamDemo[teamPick1]['latino'] / 2.5);
		$("#asianPlayers").text(teamDemo[teamPick1]['asian'] / 2.5);
		$("#otherPlayers").text(teamDemo[teamPick1]['other'] / 2.5);
    });
	//find the logo of the compare team and give it a logoTwo class
	$(".cardcompare").parents(".team2").find(".smallLogo").addClass("logoTwo");

    $(".logoTwo").click(function(index) {
		// reset teamPick1 to be the card you clicked		
		var teamPick2 = $(".cardcompare").find(".team2").attr('index_number');
		//Hide the front
		$(".cardcompare").hide();
		//Hide the front
		$(".frontcard").hide();
		//Show the back
		$(".backcard").show();
		//Change the team name
		$(".nameback").text(teamData[teamPick2]["teamName"]);
		//change the card color to the JSON color listed
		$(".backcard").css("background-color", "white");
		//change the border color to the JSON color listed
		$(".backcard").css("border", "3vh solid" + teamData[teamPick2]['color2']);
		//Change the team logo
		$(".medLogo").attr("src", teamData[teamPick2]['logo']);
		//Change the team stats number to the JSON number listed
		$("#caucasianPlayers").text(teamDemo[teamPick2]['white'] / 2.5);
		$("#AAPlayers").text(teamDemo[teamPick2]['black'] / 2.5);
		$("#latinoPlayers").text(teamDemo[teamPick2]['latino'] / 2.5);
		$("#asianPlayers").text(teamDemo[teamPick2]['asian'] / 2.5);
		$("#otherPlayers").text(teamDemo[teamPick2]['other'] / 2.5);
    });

///////////////// THE BACK CARD SCREEN //////////////////////////////////  

	//When I click the logo
	$(".medLogo").click(function(index) {
		//You can flip
		$("#card").flip(false);
		//Hide the back
		$(".backcard").hide();
		//Show the front
		$(".frontcard").show();
		//Show the card we are comparing to
		$(".cardcompare").show();
    });

	//launch our card flipping effect
	$("#card").flip({
		trigger: 'manual'
	});

///////////////// THE "COMPARE TO" SCREEN ////////////////////////////////// 

    //When I click "MLB TEAM"
	$("#team").click(function(index) {
		//Show the options
		$("#select").show();
		$(".compareTo").hide();
    });

    //When I click "MLB"
	$("#mlb").click(function(index) {
		//show the card we are comparing to
		$(".frontcard").show();
		//hide the compare choices
		$(".compareTo").hide();
		//Show the card we are comparing to
		$(".cardcompare").show();
		//We can't add anymore MLB cards
		// $("#mlb").hide();
		$("#mlb").css("opacity","0");
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//We can't see details
		$(".cardcompare").find(".details").hide();
		//We can't see title
		$(".cardcompare").find(".teamName").hide();
  		//Change the team name
		$(".cardcompare").find(".teamName").text( mlbDemo[0]['name']);
		//change the card color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("background-color", mlbDemo[0]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("border", "3vh solid" +  mlbDemo[0]['color2']);
		//Make the text color white
		$(".cardcompare").children(".teamName").css("color", mlbDemo[0]['textColor']);
		//Change the %% text color
		$(".cardcompare").children(".stats").css("color", "black");
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", mlbDemo[0]['logo']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", mlbDemo[0]['color3']);
		$(".cardcompare").find("#african").css("background-color", mlbDemo[0]['color2']);
		$(".cardcompare").find("#latino").css("background-color", mlbDemo[0]['color1']);
		$(".cardcompare").find("#asian").css("background-color", mlbDemo[0]['color4']);
		$(".cardcompare").find("#other").css("background-color", mlbDemo[0]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", mlbDemo[0]['white'] + "%");
		$(".cardcompare").find("#african").css("height", mlbDemo[0]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", mlbDemo[0]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", mlbDemo[0]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", mlbDemo[0]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(mlbDemo[0]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(mlbDemo[0]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(mlbDemo[0]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(mlbDemo[0]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(mlbDemo[0]['other'] + "%");

			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", mlbDemo[0]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", mlbDemo[0]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", mlbDemo[0]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", mlbDemo[0]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", mlbDemo[0]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + mlbDemo[0]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + mlbDemo[0]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + mlbDemo[0]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + mlbDemo[0]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + mlbDemo[0]['text5']);
		
		if(mlbDemo[0]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(mlbDemo[0]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(mlbDemo[0]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(mlbDemo[0]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(mlbDemo[0]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		}
		if(mlbDemo[0]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(mlbDemo[0]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
    });

    //When I click "NHL"
	$("#nhl").click(function(index) {
		//show the card we are comparing to
		$(".frontcard").show();
		//hide the compare choices
		$(".compareTo").hide();
		//Show the card we are comparing to
		$(".cardcompare").show();
		//We can't add anymore nhl cards
		$("#nhl").css("opacity","0");
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//We can't see details
		$(".cardcompare").find(".details").hide();
		//We can't see title
		$(".cardcompare").find(".teamName").hide();
  		//Change the team name
		$(".cardcompare").find(".teamName").text( nhlDemo[0]['name']);
		//change the card color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("background-color", nhlDemo[0]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("border", "3vh solid" +  nhlDemo[0]['color2']);
		//Make the text color white
		$(".cardcompare").children(".teamName").css("color", nhlDemo[0]['textColor']);
		//Change the %% text color
		$(".cardcompare").children(".stats").css("color", "black");
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", nhlDemo[0]['logo']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", nhlDemo[0]['color3']);
		$(".cardcompare").find("#african").css("background-color", nhlDemo[0]['color2']);
		$(".cardcompare").find("#latino").css("background-color", nhlDemo[0]['color1']);
		$(".cardcompare").find("#asian").css("background-color", nhlDemo[0]['color4']);
		$(".cardcompare").find("#other").css("background-color", nhlDemo[0]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", nhlDemo[0]['white'] + "%");
		$(".cardcompare").find("#african").css("height", nhlDemo[0]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", nhlDemo[0]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", nhlDemo[0]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", nhlDemo[0]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(nhlDemo[0]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(nhlDemo[0]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(nhlDemo[0]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(nhlDemo[0]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(nhlDemo[0]['other'] + "%");

			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", nhlDemo[0]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", nhlDemo[0]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", nhlDemo[0]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", nhlDemo[0]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", nhlDemo[0]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + nhlDemo[0]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + nhlDemo[0]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + nhlDemo[0]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + nhlDemo[0]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + nhlDemo[0]['text5']);
		
		if(nhlDemo[0]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(nhlDemo[0]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(nhlDemo[0]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(nhlDemo[0]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(nhlDemo[0]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		}
		if(nhlDemo[0]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(nhlDemo[0]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
    });

    //When I click "NFL"
	$("#nfl").click(function(index) {
		//show the card we are comparing to
		$(".frontcard").show();
		//hide the compare choices
		$(".compareTo").hide();
		//Show the card we are comparing to
		$(".cardcompare").show();
		//We can't add anymore nfl cards
		$("#nfl").css("opacity","0");
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//We can't see details
		$(".cardcompare").find(".details").hide();
		//We can't see title
		$(".cardcompare").find(".teamName").hide();
  		//Change the team name
		$(".cardcompare").find(".teamName").text( nflDemo[0]['name']);
		//change the card color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("background-color", nflDemo[0]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("border", "3vh solid" +  nflDemo[0]['color2']);
		//Make the text color white
		$(".cardcompare").children(".teamName").css("color", nflDemo[0]['textColor']);
		//Change the %% text color
		$(".cardcompare").children(".stats").css("color", "black");
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", nflDemo[0]['logo']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", nflDemo[0]['color3']);
		$(".cardcompare").find("#african").css("background-color", nflDemo[0]['color2']);
		$(".cardcompare").find("#latino").css("background-color", nflDemo[0]['color1']);
		$(".cardcompare").find("#asian").css("background-color", nflDemo[0]['color4']);
		$(".cardcompare").find("#other").css("background-color", nflDemo[0]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", nflDemo[0]['white'] + "%");
		$(".cardcompare").find("#african").css("height", nflDemo[0]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", nflDemo[0]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", nflDemo[0]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", nflDemo[0]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(nflDemo[0]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(nflDemo[0]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(nflDemo[0]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(nflDemo[0]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(nflDemo[0]['other'] + "%");

			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", nflDemo[0]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", nflDemo[0]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", nflDemo[0]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", nflDemo[0]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", nflDemo[0]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + nflDemo[0]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + nflDemo[0]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + nflDemo[0]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + nflDemo[0]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + nflDemo[0]['text5']);
		
		if(nflDemo[0]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(nflDemo[0]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(nflDemo[0]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(nflDemo[0]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(nflDemo[0]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		}
		if(nflDemo[0]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(nflDemo[0]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
    });

    //When I click "NBA"
	$("#nba").click(function(index) {
		//show the card we are comparing to
		$(".frontcard").show();
		//hide the compare choices
		$(".compareTo").hide();
		//Show the card we are comparing to
		$(".cardcompare").show();
		//We can't add anymore nba cards
		$("#nba").css("opacity","0");
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//We can't see details
		$(".cardcompare").find(".details").hide();
		//We can't see title
		$(".cardcompare").find(".teamName").hide();
  		//Change the team name
		$(".cardcompare").find(".teamName").text( nbaDemo[0]['name']);
		//change the card color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("background-color", nbaDemo[0]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("border", "3vh solid" +  nbaDemo[0]['color2']);
		//Make the text color white
		$(".cardcompare").children(".teamName").css("color", nbaDemo[0]['textColor']);
		//Change the %% text color
		$(".cardcompare").children(".stats").css("color", "black");
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", nbaDemo[0]['logo']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", nbaDemo[0]['color3']);
		$(".cardcompare").find("#african").css("background-color", nbaDemo[0]['color2']);
		$(".cardcompare").find("#latino").css("background-color", nbaDemo[0]['color1']);
		$(".cardcompare").find("#asian").css("background-color", nbaDemo[0]['color4']);
		$(".cardcompare").find("#other").css("background-color", nbaDemo[0]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", nbaDemo[0]['white'] + "%");
		$(".cardcompare").find("#african").css("height", nbaDemo[0]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", nbaDemo[0]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", nbaDemo[0]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", nbaDemo[0]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(nbaDemo[0]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(nbaDemo[0]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(nbaDemo[0]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(nbaDemo[0]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(nbaDemo[0]['other'] + "%");

			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", nbaDemo[0]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", nbaDemo[0]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", nbaDemo[0]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", nbaDemo[0]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", nbaDemo[0]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + nbaDemo[0]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + nbaDemo[0]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + nbaDemo[0]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + nbaDemo[0]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + nbaDemo[0]['text5']);
		
		if(nbaDemo[0]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(nbaDemo[0]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(nbaDemo[0]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(nbaDemo[0]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(nbaDemo[0]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		}
		if(nbaDemo[0]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(nbaDemo[0]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
    });

    //When I click "USA"
	$("#usa").click(function(index) {
		//show the card we are comparing to
		$(".frontcard").show();
		//hide the compare choices
		$(".compareTo").hide();
		//Show the card we are comparing to
		$(".cardcompare").show();
		//We can't add anymore usa cards
		$("#usa").css("opacity","0");
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//We can't see details
		$(".cardcompare").find(".details").hide();
		//We can't see title
		$(".cardcompare").find(".teamName").hide();
  		//Change the team name
		$(".cardcompare").find(".teamName").text( usaDemo[0]['name']);
		//change the card color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("background-color", usaDemo[0]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("border", "3vh solid" +  usaDemo[0]['color2']);
		//Make the text color white
		$(".cardcompare").children(".teamName").css("color", usaDemo[0]['textColor']);
		//Change the %% text color
		$(".cardcompare").children(".stats").css("color", "black");
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", usaDemo[0]['logo']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", usaDemo[0]['color3']);
		$(".cardcompare").find("#african").css("background-color", usaDemo[0]['color2']);
		$(".cardcompare").find("#latino").css("background-color", usaDemo[0]['color1']);
		$(".cardcompare").find("#asian").css("background-color", usaDemo[0]['color4']);
		$(".cardcompare").find("#other").css("background-color", usaDemo[0]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", usaDemo[0]['white'] + "%");
		$(".cardcompare").find("#african").css("height", usaDemo[0]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", usaDemo[0]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", usaDemo[0]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", usaDemo[0]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(usaDemo[0]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(usaDemo[0]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(usaDemo[0]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(usaDemo[0]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(usaDemo[0]['other'] + "%");

			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", usaDemo[0]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", usaDemo[0]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", usaDemo[0]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", usaDemo[0]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", usaDemo[0]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text5']);
		
		if(usaDemo[0]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(usaDemo[0]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(usaDemo[0]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(usaDemo[0]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(usaDemo[0]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		}
		if(usaDemo[0]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(usaDemo[0]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
    });

    //When I click "USA City
	$("#city").click(function(index) {
		//show the card we are comparing to
		$(".frontcard").show();
		//hide the compare choices
		$(".compareTo").hide();
		//Show the card we are comparing to
		$(".cardcompare").show();
		//We can't add anymore usa - city cards
		$("#city").css("opacity","0");
		//Show us the + button
		$(".cardcompare").find(".compare").addClass("compareTwo");
				//When I click the + on the compare screen
			    $(".compareTwo").on('click', function(index) {
						//Show the options
						$(".frontcard").hide();
						$(".cardcompare").hide();
						$(".compareTo").show();
			    });
		//We can't see details
		$(".cardcompare").find(".details").hide();
		//We can't see title
		$(".cardcompare").find(".teamName").hide();
  		//Change the team name
		$(".cardcompare").find(".teamName").text( usaDemo[0]['name']);
		//change the card color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("background-color", usaDemo[0]['color1']);
		//change the border color to the JSON color listed
		$(".cardcompare").children(".frontcard").css("border", "3vh solid" +  usaDemo[0]['color2']);
		//Make the text color white
		$(".cardcompare").children(".teamName").css("color", usaDemo[0]['textColor']);
		//Change the %% text color
		$(".cardcompare").children(".stats").css("color", "black");
		//Change the team logo
		$(".cardcompare").find(".smallLogo").attr("src", usaDemo[0]['logo']);
		//Change the team colors to the JSON color listed
		$(".cardcompare").find("#caucasian").css("background-color", usaDemo[0]['color3']);
		$(".cardcompare").find("#african").css("background-color", usaDemo[0]['color2']);
		$(".cardcompare").find("#latino").css("background-color", usaDemo[0]['color1']);
		$(".cardcompare").find("#asian").css("background-color", usaDemo[0]['color4']);
		$(".cardcompare").find("#other").css("background-color", usaDemo[0]['color5']);
		//Change the team stats to the JSON number listed
		$(".cardcompare").find("#caucasian").css("height", usaDemo[0]['white'] + "%");
		$(".cardcompare").find("#african").css("height", usaDemo[0]['black'] + "%");
		$(".cardcompare").find("#latino").css("height", usaDemo[0]['latino'] + "%");
		$(".cardcompare").find("#asian").css("height", usaDemo[0]['asian'] + "%");
		$(".cardcompare").find("#other").css("height", usaDemo[0]['other'] + "%");
		//Change the team stats number to the JSON number listed
		$(".cardcompare").find(".c_percent").text(usaDemo[0]['white'] + "%");
		$(".cardcompare").find(".aa_percent").text(usaDemo[0]['black'] + "%");
		$(".cardcompare").find(".l_percent").text(usaDemo[0]['latino'] + "%");
		$(".cardcompare").find(".a_percent").text(usaDemo[0]['asian'] + "%");
		$(".cardcompare").find(".o_percent").text(usaDemo[0]['other'] + "%");

			//Change Text Color for stats
			$(".cardcompare").find(".c_tag").css("color", usaDemo[0]['text1']);
			//Change Text Color for stats
			$(".cardcompare").find(".aa_tag").css("color", usaDemo[0]['text2']);
			//Change Text Color for stats
			$(".cardcompare").find(".l_tag").css("color", usaDemo[0]['text3']);
			//Change Text Color for stats
			$(".cardcompare").find(".a_tag").css("color", usaDemo[0]['text4']);
			//Change Text Color for stats
			$(".cardcompare").find(".o_tag").css("color", usaDemo[0]['text5']);
			//Change % Color for stats
			$(".cardcompare").find(".c_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text1']);
			//Change % Text Color for stats
			$(".cardcompare").find(".aa_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text2']);
			//Change % Text Color for stats
			$(".cardcompare").find(".l_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text3']);
			//Change % Text Color for stats
			$(".cardcompare").find(".a_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text4']);
			//Change % Text Color for stats
			$(".cardcompare").find(".o_percent").css("-webkit-text-stroke", ".20vw " + usaDemo[0]['text5']);
		
		if(usaDemo[0]['black'] <= 9){
			$(".cardcompare").find(".aa_percent").addClass("smaller_percent");
			$(".cardcompare").find(".aa_tag").addClass("smaller_tag");
		} 
		if(usaDemo[0]['latino'] <= 9){
			$(".cardcompare").find(".l_percent").addClass("smaller_percent");
			$(".cardcompare").find(".l_tag").addClass("smaller_tag");
		} 
		if(usaDemo[0]['asian'] <= 9){
			$(".cardcompare").find(".a_percent").addClass("smaller_percent");
			$(".cardcompare").find(".a_tag").addClass("smaller_tag");
		}
		if(usaDemo[0]['other'] <= 9){
			$(".cardcompare").find(".o_percent").addClass("smaller_percent");
			$(".cardcompare").find(".o_tag").addClass("smaller_tag");
		}


		if(usaDemo[0]['latino'] == 0){
			$(".cardcompare").find("#latino").hide();
			// console.log("hidden");
		}
		if(usaDemo[0]['asian'] == 0){
			$(".cardcompare").find("#asian").hide();
			// console.log("hidden");
		}
		if(usaDemo[0]['other'] == 0){
			$(".cardcompare").find("#other").hide();
			// console.log("hidden");
		}
    });


});







