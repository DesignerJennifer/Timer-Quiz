// Timer
console.log(questions)

var maxTime = questions.length * 15;
var index = 0;
var count = 0;
//Timer start

function initializeGame() {
    document.getElementById("game").style = "display:none";
    document.getElementById("scoreBoard").style = "display:none";
    document.getElementById("instructions").style = "display:''";
}
//update display
initializeGame()

function gameStart() {
    document.getElementById("game").style = "display:''";
    document.getElementById("scoreBoard").style = "display:none";
    document.getElementById("instructions").style = "display:none";


    setInterval(function () {
        document.getElementById("timer").innerHTML = maxTime;
        maxTime--;

        if (count === 15) {
            index++
            count = 0
        }
        count++
        document.getElementById("question-title").innerHTML = questions[index].title

        document.getElementById("choices").innerHTML="";
        for (let i = 0; i < questions[index].choices.length; i++) {
            document.getElementById("choices").append(questions[index].choices[i])
            var br=document.createElement("br")
            document.getElementById("choices").appendChild(br)
            
        }
        if (maxTime === 0) {
        }
    }, 1000);


    //document.getElementById("startButton").addEventListener("click", timer);


}

document.querySelector("#startButton").addEventListener("click", function () {
    gameStart()
})

//if they're out of time, display score
function gameEnd() {
    if (count === 0) {
        document.getElementById("game").style = "display:none";
        document.getElementById("timeUp").style = "display:'Time's Up!'";
    }
}

gameEnd()

// display question 

//1 use question index to get question text

// 3 display buttons for answers using a for loop


    // YOUR CODE GOES HERE!!!


  // Function for displaying movie data


    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)


    // Looping through the array of movies


      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)

      // Adding a class

      // Added a data-attribute

      // Provided the initial button text
      // Added the button to the HTML

//     3a delete all buttons in the div where buttons go
//     3b make a for loop that iterates over the answers
//     3c Make a button for each answer
//     3d Connect the button to the answer function
//     3e Add the button to the div
