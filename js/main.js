let humanScore = 0
let computerScore = 0
let currentRound = 0
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
            humanScore ++
        } else if (winner === "Computer") {
            computerScore ++
        }
    }

    // Based on "winner" show specific elements
    function showWinner (winner) {
        const container = document.querySelector(".results")

        if (currentRound === 1) {
            const containerScores = document.createElement("div")
            containerScores.classList.add("rounds")
            container.appendChild(containerScores)

            const scoresTitle = document.createElement("h2")
            scoresTitle.textContent = "Rounds"
            scoresTitle.classList.add("rounds-title")
            containerScores.appendChild(scoresTitle)

            const containerGame = document.createElement("div")
            containerGame.classList.add("game")
            container.appendChild(containerGame)

            const titleGame = document.createElement("h2")
            titleGame.textContent = `Game`
            titleGame.classList.add("game-title")
            containerGame.appendChild(titleGame)

            const scoreGame = document.createElement("h3")
            scoreGame.textContent = `Score`
            scoreGame.classList.add("game-scoreTitle")
            containerGame.appendChild(scoreGame)


            const totalWin = document.createElement("p")
            totalWin.textContent = `Human ${humanScore} - ${computerScore} Computer`
            totalWin.classList.add("game-score")
            containerGame.appendChild(totalWin)
        }

        const containerScores = document.querySelector(".rounds")

        const totalWin = document.querySelector(".game-score")
        totalWin.textContent = `Human ${humanScore} - ${computerScore} Computer`

        const containerRound = document.createElement("div")
        containerRound.classList.add("round")
        containerScores.appendChild(containerRound)

        const title = document.createElement("h3")
        title.textContent = `Round ${currentRound}`
        title.classList.add("round-title")
        containerRound.appendChild(title)

        const weapon = document.createElement("h4")
        weapon.textContent = `Weapon`
        weapon.classList.add("round-weaponTitle")
        containerRound.appendChild(weapon)

        const humanWeapon = document.createElement("p")
        humanWeapon.textContent = `Human: ${humanChoice}`
        humanWeapon.classList.add("round-humanWeapon")
        containerRound.appendChild(humanWeapon)

        const computerWeapon = document.createElement("p")
        computerWeapon.textContent = `Computer: ${computerChoice}`
        computerWeapon.classList.add("round-computerWeapon")
        containerRound.appendChild(computerWeapon)

        const winnerTitle = document.createElement("h4")
        winnerTitle.textContent = `Winner`
        winnerTitle.classList.add("round-winnerTitle")
        containerRound.appendChild(winnerTitle)

        const win = document.createElement("p")
        win.textContent = `${winner}`
        win.classList.add("round-winner")
        containerRound.appendChild(win)
    }

    // Call "updateScore()" and "showWinner()" since they are called together a lot
    function updateScoreAndShowWinner (winner) {
        updateScore(winner)
        showWinner(winner)
    }

    updateScoreAndShowWinner(winner)
}

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

    const containerGame = document.querySelector(".game")
        
    const titleGame = document.createElement("h3")
    titleGame.textContent = `Winner`
    titleGame.classList.add("game-winnerTitle")
    containerGame.appendChild(titleGame)

    const totalWin = document.createElement("p")
    totalWin.textContent = `${winner}`
    totalWin.classList.add("game-winner")
    containerGame.appendChild(totalWin)
}

// Call "getWinner()" and "showWinner()" since they are called together a lot
function getWinnerAndShowWinner(humanScore, computerScore) {
    let winner = getWinner(humanScore, computerScore)
    showWinner(winner)
}

function restartGame() {
    const body = document.querySelector("body")
    const restart = document.createElement("button")
    restart.textContent = "Restart the game"
    body.appendChild(restart)
    body.removeChild(rock)
    body.removeChild(paper)
    body.removeChild(scissors)
    restart.addEventListener("click", () => {
        humanScore = 0
        computerScore = 0
        currentRound = 0
        const results = document.querySelector(".results")
        const rounds = document.querySelector(".rounds")
        const game = document.querySelector(".game")
        results.removeChild(rounds)
        results.removeChild(game)
        body.appendChild(rock)
        body.appendChild(paper)
        body.appendChild(scissors)
        body.removeChild(restart)
    })
}




rock.addEventListener("click", () => {
    currentRound += 1
    if (humanScore < 5 && computerScore < 5) {
        playRound("rock", getComputerChoice())
    }
    if (humanScore === 5 || computerScore === 5) {
        getWinnerAndShowWinner(humanScore, computerScore)
        restartGame()
    }
})
paper.addEventListener("click", () => {
    currentRound += 1
    if (humanScore < 5 && computerScore < 5) {
        playRound("paper", getComputerChoice())
    }
    if (humanScore === 5 || computerScore === 5) {
        getWinnerAndShowWinner(humanScore, computerScore)
        restartGame()
    }
})
scissors.addEventListener("click", () => {
    currentRound += 1
    if (humanScore < 5 && computerScore < 5) {
        playRound("scissors", getComputerChoice())
    }
    if (humanScore === 5 || computerScore === 5) {
        getWinnerAndShowWinner(humanScore, computerScore)
        restartGame()
    }
})