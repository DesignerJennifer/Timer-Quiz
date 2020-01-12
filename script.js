// Timer
var timer = function() {
    var sec = 75;
    setInterval(function() {
      document.getElementById("timer").innerHTML = sec;
      sec--;
      if (sec == 00) {
      }
    }, 1000);
  }

  document.getElementById("startButton").addEventListener("click", timer);












// 3 if they're out of time, display score