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

// Create the function "getHumanChoice"
function getHumanChoice() {
    // Store the user choice in "choice"
    let choice = prompt("Type your choice (rock, paper or scissors):")
    // Transform "choice" to lower case
    choice = choice.toLowerCase()
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

// Create the function "playGame"
function playGame() {
    // Create "humanScore" variable and set it to 0
    let humanScore = 0
    // Create "computerScore" variable and set it to 0
    let computerScore = 0
    // Create the function "playRound", which takes two parameters: "humanChoice", "computerChoice"
    function playRound(humanChoice, computerChoice) {
        // Create "winner" variable and set it to ""
        let winner = ""
        // Create "winnerHuman" variable and set it to "You win! ${humanChoice} beats ${computerChoice}"
        const winnerHuman = `You win! ${humanChoice} beats ${computerChoice}`
        // Create "winnerComputer" variable and set it to "You lose! ${computerChoice} beats ${humanChoice}"
        const winnerComputer = `You lose! ${computerChoice} beats ${humanChoice}`
        // Create "winnerDraw" variable and set it to "It is a draw!"
        const winnerDraw = "It is a draw!"

        // Based on "humanChoice" and "computerChoice" return the winner as "human", "computer" or "no one"
        function getWinner (humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                return "no one"
            } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                       (humanChoice === "paper" && computerChoice === "scissors") ||
                       (humanChoice === "scissors" && computerChoice === "rock")) {
                return "computer"
            } else {
                return "human"
            }
        }

        winner = getWinner(humanChoice,computerChoice)

        // If "winner" is "human" then
        if (winner === "human") {
            // Print on the console "winnerHuman"
            console.log(winnerHuman)
            // Increase "humanScore" by 2
            humanScore += 2
        // If instead "winner" is "computer" then
        } else if (winner === "computer") {
            // Print on the console "winnerComputer"
            console.log(winnerComputer)
            // Increase "computerScore"
            computerScore += 2
        // If instead "winner" is "draw" then
        } else {
            // Print on the console "winnerDraw"
            console.log(winnerDraw)
            // Increase "humanScore" by 1
            humanScore ++
            // Increase "computerScore" by 1
            computerScore ++
        // End else
        }
    // End function
    }
    // Make the game last 5 rounds
    playRound(getHumanChoice(),getComputerChoice())
    // If "humanScore" is higher than "computerScore" then
    if (humanScore > computerScore) {
        // Print on the console "You win! Human ${humanScore} - ${computerScore} Computer"
        console.log(`You win! Human ${humanScore} - ${computerScore} Computer`)
    // If instead "humanScore" is equal to "computerScore" then
    } else if (humanScore === computerScore) {
        // Print on the console "It is a draw! Human ${humanScore} - ${computerScore} Computer"
        console.log(`It is a draw! Human ${humanScore} - ${computerScore} Computer`)
    // If instead "humanScore" is lower than "computerScore" then
    } else if (humanScore < computerScore) {
        // Print on the console "You lose! Human ${humanScore} - ${computerScore} Computer"
        console.log(`You lose! Human ${humanScore} - ${computerScore} Computer`)
    // End else if
    }
// End function
}

playGame()