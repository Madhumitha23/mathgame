const questionField = document.querySelector(".question");
const userAnswer = document.querySelector(".userField");
const userForm = document.querySelector(".userForm");
// const choice1 = document.getElementById("choice1");
// const choice2 = document.getElementById("choice2");
// const choice3 = document.getElementById("choice3");
// const choice4 = document.getElementById("choice4");
const numberOfCorrectAnswers = document.querySelector(".correctAnswers");
const progressbar = document.querySelector(".progress_inner")
 const checkAnswer = document.querySelector(".checkAnswer")
// choice1.addEventListener("click",validateAnswer);
// choice2.addEventListener("click",validateAnswer);
// choice3.addEventListener("click",validateAnswer);
// choice4.addEventListener("click",validateAnswer);
checkAnswer.addEventListener("click",validateAnswer);
userForm.addEventListener("submit",validateAnswer);
const easyQuestions =[
    {question:'1 + 1 = ',choices:[2,3,4,5],answer:2},
    {question:'2 + 2 = ',choices:[5,4,6,8],answer:4},
    {question:'5 + 7 = ',choices:[12,13,14,15],answer:12},
    {question:'4 + 5 = ',choices:[2,3,9,5],answer:9},
    {question:'5 + 8 = ',choices:[12,13,14,15],answer:13},
    {question:'6 + 5 = ',choices:[1,12,14,11],answer:11},
    {question:'6 + 3 = ',choices:[8,9,3,12],answer:9},
    {question:'4 + 4 = ',choices:[11,7,10,8],answer:8},
    {question:'4 + 8 = ',choices:[15,14,12,10],answer:12},
    {question:'10 + 1 = ',choices:[9,11,13,10],answer:11},
    {question:'6 + 6 = ',choices:[15,13,12,14],answer:12},
    {question:'9 + 5 = ',choices:[16,4,14,12],answer:14},
    {question:'7 + 6 = ',choices:[11,1,15,13],answer:13},
    {question:'4 + 11 = ',choices:[7,13,16,15],answer:15},
    {question:'12 + 4 = ',choices:[10,16,12,11],answer:16},
    {question:'8 + 8 = ',choices:[11,10,20,16],answer:16},
    {question:'7 + 9 = ',choices:[18,11,16,17],answer:16},
    {question:'9 + 3 = ',choices:[21,13,12,18],answer:12},
    {question:'8 + 7 = ',choices:[12,15,7,8],answer:15},
    {question:'4 + 6 = ',choices:[11,13,7,10],answer:10},
];
let questionNumber = 0;
let correctAnswers =0;
let randomNumber;
getNewQuestion();

function getNewQuestion()
{
    userAnswer.value=""
    userAnswer.focus();
    questionNumber++;    
    randomNumber = Math.floor(Math.random()*20);
    questionField.innerHTML = `${easyQuestions[randomNumber].question}`   
    // choice1.innerText = `${easyQuestions[randomNumber].choices[0]}` 
    // choice2.innerText = `${easyQuestions[randomNumber].choices[1]}` 
    // choice3.innerText = `${easyQuestions[randomNumber].choices[2]}` 
    // choice4.innerText = `${easyQuestions[randomNumber].choices[3]}` 
}

function validateAnswer(e)
{   
    e.preventDefault();
    if(questionNumber <= 20)
    {
        console.log(userAnswer.value)
        if(userAnswer.value == `${easyQuestions[randomNumber].answer}`)
        { 
            if(questionNumber==20)
            {
                displayAnswerStatus('gameover');  
                resetGame();
            }
            else
            {
                displayAnswerStatus('correct');    
                correctAnswers++;  
                numberOfCorrectAnswers.innerHTML = correctAnswers; 
                renderProgressBar();
                getNewQuestion();
            }
        }
        else
        {
            displayAnswerStatus('wrong');    
            //alert('Incorrect answer');
        }
    }
    
    
}
function renderProgressBar(){
    progressbar.style.transform = `scaleX(${correctAnswers / 20})`
}
function resetGame(){  
    questionNumber = 0;  
    getNewQuestion()
    correctAnswers=0   
    numberOfCorrectAnswers.innerHTML = correctAnswers;  
    renderProgressBar()    
}
function displayAnswerStatus(status){
    console.log(status)
    if(status === 'correct')
    {
        document.querySelector(".answerStatus").textContent = "\u2713";
        document.querySelector(".answerStatus").style.color = 'green';
        document.querySelector(".message").textContent = "Well Done!";
        document.querySelector(".message").style.color = 'green';
    }
    else if(status=='wrong')
    {
        document.querySelector(".answerStatus").textContent = "\u274c"
        document.querySelector(".answerStatus").style.color = 'red';
        document.querySelector(".message").textContent = "Please try again!";
        document.querySelector(".message").style.color = 'red';
    }
    else{
        document.querySelector(".answerStatus").textContent = "\u270C";
        document.querySelector(".answerStatus").style.color = 'green';
        document.querySelector(".message").textContent = "Good Job!";
        
    }
    document.body.classList.add("overlay-is-open")
     setTimeout(()=>document.body.classList.remove("overlay-is-open"),1000)   
        
}
function gameOver(){
    document.querySelector(".answerStatus").textContent = "\u2713";
    document.querySelector(".gameOver").style.color = 'green';
}

