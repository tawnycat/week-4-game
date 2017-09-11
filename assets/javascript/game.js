// Set up variables needed

var minNumberScore = 19;
var maxNumberScore = 120;
var winCounter = 0;
var lossCounter = 0;
var currentScore = 0;
var minNumberCrystal = 1;
var maxNumberCrystal = 12;
var randomNumber;

// Random generate the number you need to match

function randomNumberGenerator(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

// Function that starts a new game, to be called later

function startTheGame() {

	randomNumber = randomNumberGenerator(minNumberScore, maxNumberScore);

	// Set up wins and losses boxes and display them with the random number

	$("#random-number").text(randomNumber);
	$("#win-counter").text("WINS: " + winCounter);
	$("#loss-counter").text("LOSSES: " + lossCounter)
	$("#current-score").text("CURRENT SCORE: " + currentScore);

	// Sets crystal value using the function below

	crystalGenerator("#blue-crystal");
	crystalGenerator("#green-crystal");
	crystalGenerator("#pink-crystal");
	crystalGenerator("#yellow-crystal");

}

// Function called earlier that sets the value for each crystal

function crystalGenerator(id) {

	$(id).attr("data-crystalvalue", randomNumberGenerator(minNumberCrystal, maxNumberCrystal));

}

// On load function to load everything at the start

$(document).ready(function() {

	startTheGame();

	$(".crystal").on("click", function() {

	// Add random number from clicked crystal to current score

	var crystalValue = $(this).attr("data-crystalvalue");
	crystalValue = parseInt(crystalValue);

	currentScore += crystalValue;

	$("#current-score").text("TOTAL SCORE: " + currentScore);

	// End game and restart if score is matched or goes over the random number
	// Add win or loss to the counter

	if (randomNumber === currentScore) {

		winCounter++

		currentScore = 0;

		startTheGame();

	}

	if (currentScore > randomNumber) {

		lossCounter++

		currentScore = 0;

		startTheGame();

	}

});

});





