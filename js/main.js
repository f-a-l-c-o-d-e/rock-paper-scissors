function getComputerChoice() {
    const choice = Math.round(Math.random() * 2)
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else if (choice === 2) {
        return "scissors"
    } else {
        return "Error: choice is not an int number between 0 and 2"
    }
}

function getHumanChoice() {
    let choice = prompt("Type your choice (rock, paper or scissors):")
    choice = choice.toLowerCase()
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = getHumanChoice()
    }
    return choice
}

// Based on "numberOfRound" initialize the game
function playGame(numberOfRound) {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
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

        const winner = getWinner(humanChoice,computerChoice)

        // Based on "winner", "humanScore" and "computerScore" update "humanScore" and "computerScore"
        function updateScore (winner) {
            if (winner === "human") {
                humanScore += 2
            } else if (winner === "computer") {
                computerScore += 2
            } else {
                humanScore ++
                computerScore ++
            }
        }

        // Based on "winner" show a specific message
        function showWinner (winner) {
            const winnerHuman = `You win! ${humanChoice} beats ${computerChoice}`
            const winnerComputer = `You lose! ${humanChoice} is beaten by ${computerChoice}`
            const winnerDraw = "It is a draw!"

            if (winner === "human") {
                console.log(winnerHuman)
            } else if (winner === "computer") {
                console.log(winnerComputer)
            } else {
                console.log(winnerDraw)
            }
        }

        // Call "updateScore()" and "showWinner()" since they are called together a lot
        function updateScoreAndShowWinner (winner) {
            updateScore(winner)
            showWinner(winner)
        }

        updateScoreAndShowWinner(winner)
    }

    // Make the number of rounds equal to "numberOfRound"
    for (let i = 1; i <= numberOfRound; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }

    // Based on "humanScore" and "computerScore" return the winner as "human", "computer" or "no one"
    function getWinner(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return "human"    
        } else if (humanScore < computerScore) {
            return "computer"
        } else {
            return "no one"    
        }
    }

    // Based on "winner" show a specific message
    function showWinner (winner) {
        const winnerHuman = `You win! Human ${humanScore} - ${computerScore} Computer`
        const winnerComputer = `You lose! Human ${humanScore} - ${computerScore} Computer`
        const winnerDraw = `It is a draw! Human ${humanScore} - ${computerScore} Computer`

        if (humanScore > computerScore) {
            console.log(winnerHuman)
        } else if (humanScore === computerScore) {
            console.log(winnerDraw)
        } else if (humanScore < computerScore) {
            console.log(winnerComputer)
        }
    }

    // Call "getWinner()" and "showWinner()" since they are called together a lot
    function getWinnerAndShowWinner(humanScore, computerScore) {
        let winner = getWinner(humanScore, computerScore)
        showWinner(winner)
    }

    getWinnerAndShowWinner(humanScore, computerScore)
}


playGame(1)