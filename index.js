// create an event listener for a click on the "roll" button
// link the random number to one of the according images from the img file.
// do this for both players
// create an "if" statement for all 3 possible outcomes
// if player one wins, display "player 1 wins" and vice versa
// create a display for a tie
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var score1 = randomNumber1;
  var score2 = randomNumber2;

  // Update Player 1's dice
  document.getElementById("img1").src = `./images/dice${randomNumber1}.png`;

  // Update Player 2's dice
  document.getElementById("img2").src = `./images/dice${randomNumber2}.png`;

  if (score1 > score2) {
    document.getElementById("h1").innerHTML = "Player 1 Wins!";
  } else if (score1 < score2) {
    document.getElementById("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.getElementById("h1").innerHTML = "No one dies!";
  }
}

document.getElementById("button").addEventListener("click", rollDice);
