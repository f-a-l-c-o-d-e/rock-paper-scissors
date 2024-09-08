let humanScore = 0
let computerScore = 0
let currentRound = 0
let round = 5
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")


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

function playRound(humanChoice, computerChoice) {
    // Based on "humanChoice" and "computerChoice" return the winner as "Human", "Computer" or "No one"
    function getWinner (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "No one"
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                    (humanChoice === "paper" && computerChoice === "scissors") ||
                    (humanChoice === "scissors" && computerChoice === "rock")) {
            return "Computer"
        } else {
            return "Human"
        }
    }

    const winner = getWinner(humanChoice,computerChoice)

    // Based on "winner", "humanScore" and "computerScore" update "humanScore" and "computerScore"
    function updateScore (winner) {
        if (winner === "Human") {
            humanScore += 2
        } else if (winner === "Computer") {
            computerScore += 2
        } else {
            humanScore ++
            computerScore ++
        }
    }

    // Based on "winner" show specific elements
    function showWinner (winner) {
        const container = document.querySelector(".results")

        if (currentRound === 1) {
            const titleGame = document.createElement("h2")
            titleGame.textContent = `Game`
            titleGame.classList.add("game-title")
            container.appendChild(titleGame)

            const totalWin = document.createElement("p")
            totalWin.textContent = `Human ${humanScore} - ${computerScore} Computer`
            totalWin.classList.add("game-score")
            container.appendChild(totalWin)
        }

        const titleGame = document.querySelector(".game-title")

        const totalWin = document.querySelector(".game-score")
        totalWin.textContent = `Human ${humanScore} - ${computerScore} Computer`

        const title = document.createElement("h2")
        title.textContent = `Round ${currentRound}`
        container.insertBefore(title, titleGame)

        const weapon = document.createElement("h3")
        weapon.textContent = `Weapon`
        container.insertBefore(weapon, titleGame)

        const humanWeapon = document.createElement("p")
        humanWeapon.textContent = `Human: ${humanChoice}`
        container.insertBefore(humanWeapon, titleGame)

        const computerWeapon = document.createElement("p")
        computerWeapon.textContent = `Computer: ${computerChoice}`
        container.insertBefore(computerWeapon, titleGame)

        const winnerTitle = document.createElement("h3")
        winnerTitle.textContent = `Winner`
        container.insertBefore(winnerTitle, titleGame)

        const win = document.createElement("p")
        win.textContent = `${winner}`
        container.insertBefore(win, titleGame)
    }

    // Call "updateScore()" and "showWinner()" since they are called together a lot
    function updateScoreAndShowWinner (winner) {
        updateScore(winner)
        showWinner(winner)
    }

    updateScoreAndShowWinner(winner)
}


rock.addEventListener("click", () => {
    currentRound += 1
    if (currentRound <= round) {
        playRound("rock", getComputerChoice())
    }
    if (currentRound === round) {
        getWinnerAndShowWinner(humanScore, computerScore)
    }
})
paper.addEventListener("click", () => {
    currentRound += 1
    if (currentRound <= round) {
        playRound("paper", getComputerChoice())
    }
    if (currentRound === round) {
        getWinnerAndShowWinner(humanScore, computerScore)
    }
})
scissors.addEventListener("click", () => {
    currentRound += 1
    if (currentRound <= round) {
        playRound("scissors", getComputerChoice())
    }
    if (currentRound === round) {
        getWinnerAndShowWinner(humanScore, computerScore)
    }
})


// Based on "humanScore" and "computerScore" return the winner as "Human", "Computer" or "No one"
function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return "Human"    
    } else if (humanScore < computerScore) {
        return "Computer"
    } else {
        return "No one"    
    }
}

// Based on "winner" show a specific message
function showWinner (winner) {

    const container = document.querySelector(".results")
        
    const titleGame = document.createElement("h2")
    titleGame.textContent = `Winner`
    container.appendChild(titleGame)

    const totalWin = document.createElement("p")
    totalWin.textContent = `${winner}`
    container.appendChild(totalWin)
}

// Call "getWinner()" and "showWinner()" since they are called together a lot
function getWinnerAndShowWinner(humanScore, computerScore) {
    let winner = getWinner(humanScore, computerScore)
    showWinner(winner)
}