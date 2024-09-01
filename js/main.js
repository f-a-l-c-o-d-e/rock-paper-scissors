// Create the function "getComputerChoice"
function getComputerChoice() {
    // Pick a random int number between 0 and 2 and save it in "choice"
    choice = Math.round(Math.random() * 2)
    // If "choice" is 0 then
    if (choice === 0) {
        // Return "rock"
        return "rock"
    // If instead "choice" is 1 then
    } else if (choice === 1) {
        // Return "paper"
        return "paper"
    // If instead "choice" is 2 then
    } else if (choice === 2) {
        // Return "scissors"
        return "scissors"
    // In any other cases
    } else {
        // Return "Error: choice is not an int number between 0 and 2"
        return "Error: choice is not an int number between 0 and 2"
    // End else
    }
// End the function
}