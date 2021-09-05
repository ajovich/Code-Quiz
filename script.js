var currentTime = document.querySelector(".currentTime");
var startTimeButton = document.querySelector(".startTimeButton");
var questionsDiv = document.querySelector(".questionsDiv");
var container = document.querySelector(".container");

// Declaring variables
var score = 0;
var questionIndex = 0;

// An array of code quiz questions
var questions = [
    {
        question: "Which is NOT a programming language?",
        choices: [
            "html",
            "JavaScript",
            "Python",
            "C++",
        ],
        answer: "html"
    },
    {
        question: "What data types are supported by JavaScript?",
        choices: [
            "Boolean",
            "String",
            "Number",
            "All of the above",
        ],
        answer: "All of the above"
    },
    {
        question: "What is the definition of undefined?",
        choices: [
            "A variable that has been declared, but has not yet been assigned a value",
            "An object",
            "An assigned value",
        ],
        answer: "A variable that has been declared, but has not yet been assigned a value"
    },
    {
        question: "Is JavaScript a case-sensitive language?",
        choices: [
            "Yes",
            "No",
            "Unsure",
        ],
        answer: "Yes"
    },
];

// Function init is called when the page loads
function init() {
    getCorrect();
};

// The startQuiz function is called when user clicks the start button
function startQuiz() {
    isCorrect = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  };

// The isCorrect function is called when the correct condition is met
function isCorrect() {
    wordBlank.textContent = "You are correct!";
    correctCounter++
    startButton.disabled = false;
    setCorrect()
  };

// The quizComplete function is called when timer reaches 0
function quizComplete() {
    wordBlank.textContent = "All done!";
    winCounter++
    startButton.disabled = false;
    setWins();
  };

// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  };

// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  };

  // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();