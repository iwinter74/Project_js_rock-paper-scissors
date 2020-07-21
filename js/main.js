let five = document.getElementById("five")
let ten = document.getElementById("ten")
let fifteen = document.getElementById("fifteen")
let twenty = document.getElementById("twenty")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let feedback = document.getElementById("feedback")
let count = document.getElementById("count")
let rounds
let randonNumber
let randomSign
let counter = 0
let container = document.getElementById("container")
let countContainer = document.getElementById("count-container")
let play = document.getElementById("play")
let points = document.getElementById("points")
let userPoints = document.getElementById("user-points")
let compPoints = document.getElementById("comp-points")
let userScore = 0
let compScore = 0

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getRandomSign() {
    randomNumber = getRandomNumber();
    console.log(randomNumber)
    if (randomNumber == 1) {
        randomSign = "rock"
    } else if (randomNumber == 2) {
        randomSign = "paper"
    }
    else {
        randomSign = "scissors"
    }
    console.log(randomSign)
}

countContainer.style.display = "none"
points.style.display = "none"

function getRound() {
    console.log("rounds working")
    if (five.checked) {
        rounds = 5
    } else if (ten.checked) {
        rounds = 10
    }
    else if (fifteen.checked) {
        rounds = 15
    }
    else {
        rounds = 20
    }
    console.log(rounds)
}

getRound()

function compareRock() {
    countContainer.style.display = "block"
    container.style.display = "none"
    play.style.display = "none"
    feedback.style.display = "block"
    points.style.display = "block"
    getRandomSign()
    if (counter + 1 <= rounds) {
        if (randomSign == "rock") {
            feedback.innerHTML = `Ìt is a draw. You both chose ${randomSign}`
        } else if (randomSign == "paper") {
            feedback.innerHTML = `Paper (user) beats ${randomSign} (comp)`
            userScore++
            userPoints.innerHTML = userScore
        } else {
            feedback.innerHTML = `${randomSign} (comp) beats scissors (user)`
            compScore++
            compPoints.innerHTML = compScore
        }

        if ((counter + 1 == rounds) && (userScore > compScore)) {
            feedback.innerHTML = `The user wins`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return

        } else if ((counter + 1 == rounds) && (userScore < compScore)) {
            feedback.innerHTML = `The computer wins`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return
        } else if ((counter + 1 == rounds) && (userScore == compScore)) {
            feedback.innerHTML = `It is a draw`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return
        }
        counter++
        count.innerHTML = `${counter}/${rounds}`
    }
    console.log({ rounds })
    console.log({ counter })
}

function comparePaper() {

    countContainer.style.display = "block"
    container.style.display = "none"
    play.style.display = "none"
    feedback.style.display = "block"
    points.style.display = "block"
    getRandomSign()
    if (counter + 1 <= rounds) {
        if (randomSign == "paper") {
            feedback.innerHTML = `Ìt is a draw. You both chose ${randomSign}`
        } else if (randomSign == "rock") {
            feedback.innerHTML = `Paper (user) beats ${randomSign} (comp)`
            userScore++
            userPoints.innerHTML = userScore
        } else {
            feedback.innerHTML = `${randomSign} (comp) beats paper (user)`
            compScore++
            compPoints.innerHTML = compScore
        }
        
        if ((counter + 1 == rounds) && (userScore > compScore)) {
            feedback.innerHTML = `The user wins`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return

        } else if ((counter + 1 == rounds) && (userScore < compScore)) {
            feedback.innerHTML = `The computer wins`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return
        }else if ((counter + 1 == rounds) && (userScore == compScore)) {
            feedback.innerHTML = `It is a draw`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return
        }
        counter++
        count.innerHTML = `${counter}/${rounds}`
    }
    console.log({ rounds })
    console.log({ counter })

}
function compareScissors() {
    countContainer.style.display = "block"
    container.style.display = "none"
    play.style.display = "none"
    feedback.style.display = "block"
    points.style.display = "block"
    getRandomSign()
    if (counter + 1 <= rounds) {
        if (randomSign == "scissors") {
            feedback.innerHTML = `Ìt is a draw. You both chose ${randomSign}`
        } else if (randomSign == "rock") {
            feedback.innerHTML = `${randomSign} (comp) beats scissors (user)`
            compScore++
            compPoints.innerHTML = compScore + 1
        } else {
            feedback.innerHTML = `Scissors (user) beats ${randomSign} (comp)`
            userScore++
            userPoints.innerHTML = userScore + 1
        }

        if ((counter + 1 == rounds) && (userScore > compScore)) {
            feedback.innerHTML = `The user wins`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return

        } else if ((counter + 1 == rounds) && (userScore < compScore)) {
            feedback.innerHTML = `The computer wins`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return
        }else if ((counter + 1 == rounds) && (userScore == compScore)) {
            feedback.innerHTML = `It is a draw`
            five.disabled = true
            ten.disabled = true
            fifteen.disabled = true
            twenty.disabled= true
            return
        }
        counter++
        count.innerHTML = `${counter}/${rounds}`
    }
    console.log({ rounds })
    console.log({ counter })
}

function restart() {
    countContainer.style.display = "none"
    points.style.display = "none"
    container.style.display = "block"
    play.style.display = "block"
    feedback.style.display = "none"
    counter = 0
    userScore = 0
    compScore = 0
    five.disabled = false
    ten.disabled = false
    fifteen.disabled = false
    twenty.disabled= false
    getRound()

}