$( document).ready(function(){

	var num = 1;

	//A list of variables based on the link we need with our num
	var url = "https://swapi.co/api/";
	var films = url + "films/" + num;
	var people = url + "people/" + num;
	var planets = url + "planets/"+ num;
	var species = url + "species/"+ num;
	var spaceships = url + "spaceships/"+ num;
	var vehicles = url + "vehicles/"+ num;

	// var wookie = people + "/?format=wookiee";

//Go check our API to see the films
$.getJSON(films, function(films) { 
	//set a variable to get the film title
	var movie = films["title"];
	//set a variable to get the film crawl
	var episode = films["episode_id"];
	//set a variable to get the film crawl
	var crawl = films["opening_crawl"];
	//set that movie
	$(".title").text(movie);
	//set that movie
	$(".number").text("Episode " + episode);
	//set that crawl
	$(".text").text(crawl);
});

//When we click the body do these things:
$("body").click(function(){
	//Increase the number
	num++;
	//Redefine what film we are looking at
	var films = url + "films/" + num;
	//Reset the number
	if (num >= 7){
		num = 1;
	}
	//Go back to the API for our new text
  $.getJSON(films, function(films) { 
	//set a variable to get the film title
	var movie = films["title"];
	//set a variable to get the film crawl
	var episode = films["episode_id"];
	//set a variable to get the film crawl
	var crawl = films["opening_crawl"];
	//set that movie
	$(".title").text(movie);
	//set that movie
	$(".number").text("Episode " + episode);
	//set that crawl
	$(".text").text(crawl);
	});
});


//Some stuff I didn't get to incorporate:
// $.getJSON(people, function(people) { 
// 	var name = people["name"];
// 	var personHeight = people["height"];
// 	var mass = people["mass"];
// 	var hair_color = people["hair_color"];
// 	var skin_color = people["skin_color"];
// 	var eye_color = people["eye_color"];
// 	var birth_year = people["birth_year"];
// 	var gender = people["gender"];
// 	var homeworld = people["homeworld"];
// 	console.log(name, personHeight, hair_color, skin_color, eye_color, gender);
// });





});