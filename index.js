// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to handle the guess
function guessNumber() {
    // Get the user's guess
    const guess = parseInt(document.getElementById("guessInput").value);

    // Validate the guess
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    // Check if the guess is correct
    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number: ${randomNumber}.`);
    } else {
        // Provide a hint
        const message = guess < randomNumber ? "Too low! Try a higher number." : "Too high! Try a lower number.";
        setMessage(message);
    }
}

// Function to display messages
function setMessage(message) {
    document.getElementById("message").textContent = message;
}
