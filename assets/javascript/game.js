var wins = 0;
var losses = 0;
var guessesLeft = 10;

var cpu = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
			,"p","q","r","s","t","u","v","w","x","y","z"];

function cpuGuess() {
	return cpu[Math.floor(Math.random() * cpu.length)];
}

var newCpuGuess = cpuGuess();


document.onkeyup = function(event) {
	
	console.log(newCpuGuess);

	var keystroke = event.key.toLowerCase();

	if (keystroke === newCpuGuess) {
		wins++;
		newCpuGuess = cpuGuess();
		guessesLeft = 10;
		alert("You got it!");
		document.getElementById("yourGuesses").textContent = "";
	} else {
		guessesLeft--;
		document.getElementById("yourGuesses").textContent += keystroke + " ";
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guesses").innerHTML = guessesLeft;

	if (guessesLeft === 0) {
		alert("You lost the game! The answer was " + keystroke);
		losses++;
		guessesLeft = 10;
		document.getElementById("yourGuesses").textContent = "";
	}

	document.getElementById("losses").innerHTML = losses;

}