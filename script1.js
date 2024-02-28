let data = [
     {
          Q : "Q : JS is used for?",
          a : "Frontend",
          b : "Animation",
          c : "Dynamically update content",
          d : "Backend",
          ans : "ans1",
     },

     {
          Q : "Q : Fullform of JS ?",
          a : "JavaScript",
          b : "JavaScience",
          c : "JavaS",
          d : "JavaSecure",
          ans : "ans1",
     },
     {
          Q : "Q : Who developed JS ?",
          a : "Santa",
          b : "brenden Eich",
          c : "george",
          d : "Neck",
          ans : "ans2",
     },

     {
          Q : "Q : When JS  developed?",
          a : "1995",
          b : "1990",
          c : "1999",
          d : "1892",
          ans : "ans1",
     },
     {
          Q : "Q : What does JavaScript primarily add to a web page?",
          a : "Style",
          b : "Interactivity",
          c : "Structure",
          d : "Images",
          ans : "ans2",
     },
     {
          Q : "Q : What is the correct way to declare a variable in JavaScript?",
          a : " let myVar = 10;",
          b : "var myVar = 10;",
          c : "const myVar = 10;",
          d : "all of the above",
          ans : "ans4",
     },
 
     {
          Q : "Q : Which of the following is a falsy value in JavaScript?",
          a : "false",
          b : "undefined",
          c : "0",
          d : "all of the above",
          ans : "ans4",
     },
 
     {
          Q : "Q : What is the purpose of the document.getElementById() method in JavaScript?",
          a : "To get the value of an input element",
          b : "To change the page's title",
          c : "To get an element by its ID",
          d : "To add a new HTML element",
          ans : "ans3",
     },
     {
          Q : "Q : Which operator is used for equality without type coercion in JavaScript?",
          a : "===",
          b : "==",
          c : "=",
          d : "!==",
          ans : "ans1",
     },
     
     {
          Q : "Q : What is the correct way to comment a single line in JavaScript?",
          a : "// This is a comment",
          b : "/* This is a comment */",
          c : "<!-- This is a comment -->",
          d : "% This is a comment %",
          ans : "ans1",
     }
]

function loadQuestion(){
    var randQIndex = Math.floor(Math.random() * data.length);
    var randQ = data[randQIndex];
    document.getElementById('qns').innerHTML = randQ.Q;
}

window.onload = function(){
    loadQuestion();
} 


let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let countOfQuestion = document.querySelector(".number-of-question");

let timeElement = document.getElementById("timer");
let answers = document.querySelectorAll(".options");

let num = 0;
let score = 0;
let totalQuestions = data.length;
let timeLeft = 10; // Initial time left in seconds

function displayQuestion() {
    let currentQuestion = data[num];
    question.innerHTML = currentQuestion.Q;
    option1.innerHTML = currentQuestion.a;
    option2.innerHTML = currentQuestion.b;
    option3.innerHTML = currentQuestion.c;
    option4.innerHTML = currentQuestion.d;
}

function startTimer() {
    timeLeft = 10; // Reset timer to 10 seconds for each question
    updateTimerDisplay();
    let timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            num++;
            if (num < totalQuestions) {
                displayQuestion();
                startTimer();
            } else {
                endQuiz();
            }
        }
    }, 5000);
}

function updateTimerDisplay() {
    timeElement.textContent = `Time Left: ${timeLeft} sec`;
}

function checkAnswer() {
    let checkedAns = null;
    answers.forEach((option) => {
        if (option.checked) {
            checkedAns = option.id;
        }
    });
    return checkedAns;
}

function disSelect(){
     answers.forEach((curElements)=>{
          curElements.checked= false;
     })
}


function next() {
    let checkedAns = checkAnswer();
    if (checkedAns === data[num].ans) {
        score++;
    }
    disSelect()
    num++;
    if (num < totalQuestions) {
        displayQuestion();
        countOfQuestion.textContent = `${num + 1} of ${totalQuestions} Questions`; // Update question count
        startTimer();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    let myScore = document.querySelector(".myScore");
    myScore.innerHTML = `You Scored ${score}/${totalQuestions} <br/> <br/>
    <button onClick = "location.reload()" > Play Again </button>`;
    document.getElementById("next").style.display = "none";
    document.querySelector(".btn").style.backgroundColor = "lightBlue";
}
// Start the quiz
displayQuestion();
startTimer();

