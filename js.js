$(document).ready(function() {

    var score = 0;
    var secondsLeft = 5;
    // question objects 
    var questions = [
        {
          question: "What does CSS stand for?1",
          choices: ["Cascading Style Sheets", "Concatenated Style Source", "Cant Style Shhhh"],
          correct: "#choiceA"
        },
        {
          question: "Which symbol screams jQuery?2",
          choices: ["$", "&", "%"],
          correct: "#choiceA"
        },
        {
          question: "How do you iterate over an array?3",
          choices: ["if else", "for loop", "function"],
          correct: "#choiceB"
        },
        {
          question: "React is a ____?4",
          choices: ["Javascript Library", "Javascript Framework", "Bootstrap Framework"],
          correct: "#choiceB"
        },
        {
          question: "This quiz was ____?5",
          choices: ["Easy to answer", "Hard to code", "All of the above"],
          correct: "#choiceC"
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
        $("#choiceA").text(q.choices[0]);
        $("#choiceB").text(q.choices[1]);
        $("#choiceC").text(q.choices[2]);
    }
    
    // if last question is answered, triggers game over
    function endState() {
      if ( questions[qIndex] >= lastQuestion) {
        sendMessage();
        $("#fnlScore").text(`Final Score: ${score}`);
      } else {
        return
      }
    }

   // onclick choice selected, evaluate correct, render next question
   $("#choiceA").on("click", function() {
       var i = questions[qIndex].correct
       if ("#choiceA" === i){
           score++;
           $("#score").text(score);

       } else {
           secondsLeft--;
       };
       qIndex++;
       endState();
       renderQuestion();
   });

   $("#choiceB").on("click", function() {
       var i = questions[qIndex].correct
       if ("#choiceB" === i){
           score++;
           $("#score").text(score);

       } else {
           secondsLeft--;
       }; 
       qIndex++;
       endState();
       renderQuestion();
   });

   $("#choiceC").on("click", function() {
       var i = questions[qIndex].correct
       if ("#choiceC" === i){
           score++;
           $("#score").text(score);

       } else {
           secondsLeft--;
       }; 
       qIndex++;
       endState();
       renderQuestion();
   });






});