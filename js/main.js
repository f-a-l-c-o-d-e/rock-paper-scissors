// Create the function "getComputerChoice"
function getComputerChoice() {
    // Pick a random int number between 0 and 2 and save it in "choice"
    const choice = Math.round(Math.random() * 2)
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
    // In any other case
    } else {
        // Return "Error: choice is not an int number between 0 and 2"
        return "Error: choice is not an int number between 0 and 2"
    // End else
    }
// End the function
}

// Create the function getHumanChoice
function getHumanChoice() {
    // Store the user choice in "choice"
    let choice = prompt("Type your choice (rock, paper or scissors):")
    // If "choice" is not "rock", "paper" or "scissors" then
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        // Remake the choice and save it in "choice"
        choice = getHumanChoice()
    // End if
    }
    // Return "choice"
    return choice
// End the function
}