let currentLevel = document.querySelector(".currentLevel").textContent;
const questionField = document.querySelector(".question");
const userAnswer = document.querySelector(".userField");
const userForm = document.querySelector(".userForm");
const numberOfCorrectAnswers = document.querySelector(".correctAnswers");
const progressbar = document.querySelector(".progress_inner")
 const checkAnswer = document.querySelector(".checkAnswer")
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
let questionForLevel1={
    firstNumber:0,
    secondNumber:0,
    thirdnumber:0,
    fourthNumber:0
}
let questionHavingTwoNumbers={
    firstNumber:0,
    secondNumber:0
}
const tens =[10,20,30,40,50,60,70,80,90,100];
getNewQuestion();

function getNewQuestion()
{   
    userAnswer.value=""
    userAnswer.focus();    
    if(currentLevel == '1')
    {
        document.querySelector(".pageHeader").textContent="Add more than two numbers";
        questionForLevel1.firstNumber = getRandomNumbers(1,10);
        questionForLevel1.secondNumber = getRandomNumbers(1,10);
        questionForLevel1.thirdnumber = getRandomNumbers(1,5);
        questionForLevel1.fourthNumber = getRandomNumbers(1,5);
        questionField.innerHTML = `${questionForLevel1.firstNumber} + ${questionForLevel1.secondNumber} + ${questionForLevel1.thirdnumber} + ${questionForLevel1.fourthNumber} = `;
    } 
    else if(currentLevel == '2')  
    {        
        questionHavingTwoNumbers.firstNumber = getRandomNumbers(10,100);
        questionHavingTwoNumbers.secondNumber = getRandomNumbers(1,10);
        questionField.innerHTML = `${questionHavingTwoNumbers.firstNumber} + ${questionHavingTwoNumbers.secondNumber} = `;
    } 
    else if(currentLevel == '3')  
    {        
        questionHavingTwoNumbers.firstNumber = getRandomNumbers(10,100);
        questionHavingTwoNumbers.secondNumber = tens[getRandomNumbers(1,10)];
        questionField.innerHTML = `${questionHavingTwoNumbers.firstNumber} + ${questionHavingTwoNumbers.secondNumber} = `;
    }
    else if(currentLevel == '4') {
       let firstnumber = getRandomNumbers(10,100);
       let secondnumber=getRandomNumbers(10,100);
       
       console.log(firstnumber)
       
       console.log(secondnumber)
       questionHavingTwoNumbers.firstNumber =firstnumber; 
       if(((firstnumber%10)+(secondnumber%10))<9)
       {
               
        questionHavingTwoNumbers.secondNumber = secondnumber;
       }
       else{
        let numberToBeDeducted = 9-(firstnumber%10);
        
        questionHavingTwoNumbers.secondNumber = secondnumber-(secondnumber%10)+numberToBeDeducted;
       }
        questionField.innerHTML = `${questionHavingTwoNumbers.firstNumber} + ${questionHavingTwoNumbers.secondNumber} = `;
        document.querySelector(".currentLevel").textContent = currentLevel;
    }
    else if(currentLevel == '4') {

    }
    else{

    }
    questionNumber++;        
}

function getRandomNumbers(min,max)
{
    min = Math.ceil(min);
    max = Math.floor(max);    
    return Math.floor(Math.random() * (max - min) + min); 
}

function validateAnswer(e)
{   
    e.preventDefault();
    if(currentLevel == 1)
    {
        if(userAnswer.value == questionForLevel1.firstNumber + questionForLevel1.secondNumber + questionForLevel1.thirdnumber + questionForLevel1.fourthNumber)
        {
            correctAnswers++; 
            renderProgressBar();
            if(questionNumber==10)
            {                
                displayAnswerStatus('goToNextLevel'); 
            }
            else
            {
                displayAnswerStatus('correct');               
                numberOfCorrectAnswers.innerHTML = correctAnswers;            
                
            }
            getNewQuestion();            
        }   
        else
        {
            displayAnswerStatus('wrong'); 
        }     
    } 
    else if(currentLevel == 2 || currentLevel == 3 || currentLevel==4)   
    {        
        if(userAnswer.value == questionHavingTwoNumbers.firstNumber + questionHavingTwoNumbers.secondNumber)
        {
            correctAnswers++; 
            renderProgressBar();
            if(questionNumber==10)
            {                
                displayAnswerStatus('goToNextLevel'); 
            }
            else
            {
                displayAnswerStatus('correct');               
                numberOfCorrectAnswers.innerHTML = correctAnswers;            
                
            }
            getNewQuestion();
        }
        else{
            displayAnswerStatus('wrong'); 
        }
        //displayAnswerStatus("tbd")

    }
    else{

    }
}

function renderProgressBar(){
    progressbar.style.transform = `scaleX(${correctAnswers / 10})`
}

function resetGame(){  
    questionNumber = 0;  
    getNewQuestion()
    correctAnswers=0   
    numberOfCorrectAnswers.innerHTML = correctAnswers;  
    renderProgressBar()    
}
function displayAnswerStatus(status){
    
    if(status === 'correct')
    {
        document.querySelector(".answerStatus").textContent = "\u2713";
        document.querySelector(".answerStatus").style.color = 'green';
        document.querySelector(".message").textContent = "Well Done Nishi!";
        document.querySelector(".message").style.color = 'green';
        document.body.classList.add("overlay-is-open")
     setTimeout(()=>document.body.classList.remove("overlay-is-open"),1000)   
    }
    else if(status=='wrong')
    {
        document.querySelector(".answerStatus").textContent = "\u274c"
        document.querySelector(".answerStatus").style.color = 'red';
        document.querySelector(".message").textContent = "Nishitha, Please try again!";
        document.querySelector(".message").style.color = 'red';
        document.body.classList.add("overlay-is-open")
     setTimeout(()=>document.body.classList.remove("overlay-is-open"),1000)   
    }
    else if(status=='tbd')
    {
        document.querySelector(".answerStatus").textContent = "\u2713";
        document.querySelector(".answerStatus").style.color = 'green';
        document.querySelector(".message").textContent = "Under construction. Please wait";
        document.querySelector(".message").style.color = 'green';
        document.body.classList.add("overlay-is-open")
     setTimeout(()=>document.body.classList.remove("overlay-is-open"),1000)   
    }
    else{
        document.querySelector(".answerStatus").textContent = "\u270C";
        document.querySelector(".answerStatus").style.color = 'green';
        document.querySelector(".message").textContent = "Good Job Nishu!!!"; 
        document.body.classList.add("overlay-is-open")
     setTimeout(()=>document.body.classList.remove("overlay-is-open"),3000)   
        gotToNextLevel();      
    }
    
        
}


function gotToNextLevel(){
    currentLevel++;
    switch(currentLevel)
    {
        case 2:
        {
            document.querySelector(".pageHeader").textContent="Adding 2-digit numbers and ones";
            document.querySelector(".currentLevel").textContent = currentLevel;
            break;
        }
        case 3:
        {
            document.querySelector(".pageHeader").textContent="Adding 2-digit numbers and tens";
            document.querySelector(".currentLevel").textContent = currentLevel;
            break;
        }
        case 4:
        {
            document.querySelector(".pageHeader").textContent="Adding 2-digit numbers";
            document.querySelector(".currentLevel").textContent = currentLevel;
            break;
        }
        default:
        {
            break;
        }
    }
    resetGame();
}

