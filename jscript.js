$(document).ready(function() {

var score = 0;
var secondsLeft = 50;
// question objects 
var questions = [
    {
      question: "What does CSS stand for?1",
      choices: ["Cascading Style Sheets", "Catonating Style Source", "Cant Style Shhhh"],
      correct: "a"
    },
    {
      question: "Jquery is recognized by which symbol?2",
      choices: ["$", "&", "%"],
      correct: "a"
    },
    {
      question: "How do you iterate over an array?3",
      choices: ["if else", "for loop", "function"],
      correct: "b"
    },
    {
      question: "React is a ____?4",
      choices: ["Javascript Library", "Javascript Framework", "Bootstrap Framework"],
      correct: "b"
    },
    {
      question: "This quiz was ____?5",
      choices: ["Easy to answer", "Hard to code", "All of the above"],
      correct: "c"
    },
  
  ];


//start button onclick, hides button, displays quiz card, sets first question, starts timer, zeroes score
$("#start").on("click", function () {
    $("#start").hide();
    $("#quiz").show();
    
    renderQuestion();
    setTime();
    $("#score").text(score);
});


//timer setup, start, & end instructions
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    $("#timerDisplay").text(secondsLeft);
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// end of timer messages, hides quiz card, shows game over text
function sendMessage() {
  $("#timerDisplay").text("0");
  $("#quiz").hide();
  $("#gameOver").show();
}


// render questions, choices
var qIndex = 0;
var lastQuestion = questions.length - 1;
   
function  renderQuestion() {
    var q = questions[qIndex];
    $("#question").text(q.question);
    
    // generate choices and html elements for choices
    var choiceIndex = ["a", "b", "c"];
    for ( var i = 0; i < choiceIndex.length; i++) {
        var choiceBtn = $("<button>").addClass("choice-button").attr("id", choiceIndex[i]).text(q.choices[i]);
            $("#question").append(choiceBtn);

    // on click choice, compare answers, score add or time deduct
    $(".choice-button").on("click", function() {
        checkAnswer();
        if(qIndex < lastQuestion) {
        qIndex++;
        renderQuestion()
        }
    });
    }  
}

// check answers
function checkAnswer() {
    if (questions[qIndex].correct == $(".choice-button").attr("id")) {
        console.log("yes");
        score++;
    } else {
        secondsLeft = secondsLeft - 5;
    }
}



// local storage final scores, sort by highest, add initials

    });