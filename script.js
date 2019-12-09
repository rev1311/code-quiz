var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var gameOverEl = document.getElementById("gameOver");
var timer = document.getElementById("timerDisplay");
var timer2 = document.getElementById("timerDisplay2");
var currentScore = document.getElementById("currentScore");

var questions = [
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Catonating Style Source", "Cant Style Shhhh"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Catonating Style Source", "Cant Style Shhhh"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Catonating Style Source", "Cant Style Shhhh"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Catonating Style Source", "Cant Style Shhhh"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Catonating Style Source", "Cant Style Shhhh"],
    correct: "Cascading Style Sheets"
  },

];

var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function  renderQuestion() {
  var q = questions[runningQuestionIndex];
  question.innerHTML = "<p>"+q.question+"</p>";
  choiceA.innerHTML = "<button>"+q.choices[0]+"</button>";
  choiceB.innerHTML = "<button>"+q.choices[1]+"</button>";
  choiceC.innerHTML = "<button>"+q.choices[2]+"</button>";
}

runningQuestionIndex = 0;
renderQuestion()

// runningQuestionIndex++;
// renderQuestion()


var secondsLeft = 5;
    // if(secondsLeft < 100){secondsLeft = "0" + secondsLeft;}
    // if(secondsLeft < 10){secondsLeft = "00" + secondsLeft;}
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;



    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      
      timer.textContent = secondsLeft;
      timer2.textContent = secondsLeft;
    }

  }, 1000);
}

function sendMessage() {
  timer.textContent = "000";
  timer2.textContent = "000";
  
  quiz.style.display="none";
  gameOverEl.style.display="block";
}


// //Start as many timers as you want

// var start1 = document.getElementById('timer1');
// var start2 = document.getElementById('timer2');

// start1.onclick = function() {
//     countdown('countdown1', 0, 15);
// }

// start2.onclick = function() {
//     countdown('countdown2', 0, 10);
// }

 

start.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    quiz.style.display="block";
    start.style.display="none";
    setTime();
  }
});