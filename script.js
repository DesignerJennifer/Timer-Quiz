// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time= 75;



//Timer
function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(countdown, 75000);
  
    // show starting time
    timerEl.textContent = time;
  
    getQuestion();
  }

  

