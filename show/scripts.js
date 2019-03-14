$( document).ready(function(){

	var bgImages = ["imgs/game1.png","imgs/game2.png","imgs/game3.png","imgs/game4.png"];
	var count = bgImages.length;
	var ticker = 0;
	var time = 0;

	//Slideshow click start

	$("#cat1").click(function() {
        $('#screensaver').css("background-image", "url(imgs/game1.png)");
        $("#screensaver").css("opacity", 1);
    });

    $("#cat2").click(function() {
        $('#screensaver').css("background-image", "url(imgs/game2.png)");
        $("#screensaver").css("opacity", 1);
    });

    $("#cat3").click(function() {
        $('#screensaver').css("background-image", "url(imgs/game3.png)");
        $("#screensaver").css("opacity", 1);
    });

    $("#cat4").click(function() {
        $('#screensaver').css("background-image", "url(imgs/game4.png)");
        $("#screensaver").css("opacity", 1);
    });

    $("#screensaver").click(function() {
        window.open('https://sarahhennessy1.github.io/collection/board.html', '_blank' 
);
    });


  	//Slideshow auto start

	function screensaver() {
		var url = "url(" + bgImages[ticker] + ")";
		$('#screensaver').css("background-image", url);
		// $('#ticker').text((ticker + 1) + "/" + count);

		ticker += 1;
		if (ticker > count - 1) {
			ticker = 0;
		}
	}

	setInterval(function() {
        screensaver()
    }, 5000);

    $(document).mousemove(function() {
        time = 0;
        ticker = 0;
        $("#screensaver").css("opacity", 0)
        $("#ticker").css("opacity", 0)
    })

    setInterval(function() {
        time += 1;
        if (time > 2) {
            $("#screensaver").css("opacity", 1)
            $("#ticker").css("opacity", 1)
        }
    }, 1000);
});












