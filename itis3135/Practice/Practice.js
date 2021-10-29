var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	var espresso = $("espresso");
	var cappuccino = $("cappuccino");

	// for click event add item to order and update total
	var total = 0;

	espresso.onclick = function() {
		$("order").innerHTML("$1.95 - Espresso - Delicious espresso. Wanna try it?");
		total = total + 1.95;
	}
	cappuccino.onclick = function() {
		$("order").innerHTML("$3.45 - Cappuccino - Delicious cappuccino!");
		total = total + 3.45;
	}

	// display order and total
	$("total").innerHTML("$"+total);
	
		
}; // end onload