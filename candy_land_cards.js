function draw_new_card() {
	console.log("Drawing new card");
	num_steps_in_card = getRndInteger(1,2);
	color_of_card = getRandomCardContent();
	if ( num_steps_in_card === 1 ) {
		console.log("Drawing single card");
		update_cards_in_window(color_of_card);
	} else if ( num_steps_in_card === 2 ) {
		console.log("Drawing double card");
		update_cards_in_window(color_of_card, color_of_card);
	} else {
		console.log("Drawing non-standard card: " + num_steps_in_card)
	}
}

function getRandomCardContent() {
	var colorArray = ['blue','green','red','yellow','image-test'];
	var color = colorArray[Math.floor(Math.random() * colorArray.length)];
	console.log("Color is: " + color );
	return color;
}

function getRndInteger(min, max) {
 	var integer = Math.floor(Math.random() * (max - min + 1) ) + min;
	console.log("Random Integer: " + integer );
	return integer;
}

function update_cards_in_window(top_content, bottom_content) {
	if ( top_content    === undefined ) top_content    = "white";
	if ( bottom_content === undefined ) bottom_content = "white";

	console.log("Top:    " + top_content);
	console.log("Bottom: " + bottom_content);

	if ( top_content.match("^image-") ) {
		bottom_content = "white";
		document.getElementById("top-card").style.backgroundColor = "white";
		document.getElementById("top-card").style.backgroundImage = "url('" + top_content.replace("image-","") + ".png')";
		document.getElementById("top-card").style.backgroundSize = "contain";
		document.getElementById("top-card").style.backgroundRepeat = "no-repeat";
		document.getElementById("top-card").style.backgroundPosition = "center center";
	} else {
		document.getElementById("top-card").style.backgroundColor = top_content;
		document.getElementById("top-card").style.backgroundImage = "none";
	}
	document.getElementById("bottom-card").style.backgroundColor = bottom_content;
}

// var body = document.getElementById('body');
// if(body.addeventlistener)
//   body.addeventlistener("click", draw_new_card, false);
// else
//   body.attachevent("onclick", draw_new_card);
