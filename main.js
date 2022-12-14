const question = document.querySelector(".problem")
const userForm=document.querySelector(".userForm")
const userField = document.querySelector(".userField")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")
const progressbar = document.querySelector(".progress_inner")
const endMessage = document.querySelector(".endMessage")
const startoverbutton = document.querySelector(".reset-button")
let state={
    score:0,
    wrongAnswers:0
}
getNewProblem()
function getNumber(max){
    return Math.floor(Math.random()*(max+1))
}

function getProblem(){
    return {
        firstNumber : getNumber(10),
        secondNumber : getNumber(10),
        operator : ['+','-','x'][getNumber(2)]
    }
}

function getNewProblem(){
    userField.value=""
        userField.focus()
    state.currentProblem = getProblem()
    question.innerHTML = `${state.currentProblem.firstNumber} ${state.currentProblem.operator} ${state.currentProblem.secondNumber}`
}

userForm.addEventListener("submit",checkAnswer)

function checkAnswer(e){
    e.preventDefault()
    let correctAnswer
    if(state.currentProblem.operator == '+') correctAnswer=state.currentProblem.firstNumber + state.currentProblem.secondNumber
    if(state.currentProblem.operator == '-') correctAnswer=state.currentProblem.firstNumber - state.currentProblem.secondNumber
    if(state.currentProblem.operator == 'x') correctAnswer=state.currentProblem.firstNumber * state.currentProblem.secondNumber

    if(parseInt(userField.value,10) === correctAnswer){
        state.score++
        pointsNeeded.textContent = 10 - state.score
        getNewProblem()
        userField.value=""
        userField.focus()
        renderProgressBar()
    }
    else{
        state.wrongAnswers++
        mistakesAllowed.textContent = state.wrongAnswers
        question.classList.add("animate-wrong")
        setTimeout(()=>question.classList.remove("animate-wrong"),451)
    }
    checkScores()
    
}

function checkScores(){
    if(state.score === 10)
    {   
        endMessage.textContent = "Congrats! You won."
        document.body.classList.add("overlay-is-open")
        
        setTimeout(()=>startoverbutton.focus(),331)
    }
    if(state.wrongAnswers === 2){
        endMessage.textContent = "Sorry. You lost."
        document.body.classList.add("overlay-is-open")
        setTimeout(()=>startoverbutton.focus(),331)
    }
}

startoverbutton.addEventListener("click",resetGame)

function resetGame(){
    document.body.classList.remove("overlay-is-open")
    getNewProblem()
    state.score=0
    state.wrongAnswers=0
    renderProgressBar()
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
}

function renderProgressBar(){
    progressbar.style.transform = `scaleX(${state.score / 10})`
}





