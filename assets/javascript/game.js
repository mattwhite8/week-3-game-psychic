var wins = 0;
var losses = 0;
var guessesLeft = 10;

var cpu = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


document.onkeyup = function(event) {
	
	function cpuGuess() {
		return cpu[Math.floor(Math.random() * cpu.length)];
	}

	var newCpuGuess = cpuGuess();

	var keystroke = event.key.toLowerCase();

	if (keystroke === newCpuGuess) {
		wins++;
	} else {
		losses++;
		guessesLeft--;
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guesses").innerHTML = guessesLeft;
	document.getElementById("yourGuesses").textContent += keystroke + " ";

	if (guessesLeft === 0) {
		alert("You lost the game!");
		location.reload();
	}

}