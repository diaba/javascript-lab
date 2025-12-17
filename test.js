// A simple number guessing game in Javascript
// Handle the DOM prompt and alert functions
//console.log("Guess the number I'm thinking of between 1 and 100!");
//add click event listener to button with id submitGuess

// 1. Generate the random number ONCE when the page loads
let randomNumber = Math.floor(Math.random() * 100) + 1;
let messageElement = document.getElementById("message");

document.getElementById("submitGuess").addEventListener("click", function () {
  // 2. Get the current value from the input and convert to a number
  let userGuessInput = document.getElementById("guessInput");
  let userGuess = Number(userGuessInput.value);

  // 3. Use IF statements to compare the single guess
  if (userGuess < randomNumber) {
    messageElement.textContent = "Too low! Try again.";
  } else if (userGuess > randomNumber) {
    messageElement.textContent = "Too high! Try again.";
  } else if (userGuess === randomNumber) {
    messageElement.textContent =
      "Congratulations! You've guessed the correct number: " + randomNumber;

    // Optional: Reset the game after a win
    // randomNumber = Math.floor(Math.random() * 100) + 1;
  }
});
