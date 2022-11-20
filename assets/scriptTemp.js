let containerTestEl = document.querySelector(".test");
containerTestEl.setAttribute("style", "width: 100%; height: 100%; text-align: center;");
startPage();

function startPage() {
  let titleEl = document.createElement("h1");
  titleEl.textContent = "Welcome to my Quiz";
  containerTestEl.append(titleEl);

  let descriptionEl = document.createElement("h2");
  descriptionEl.textContent = "Try to answer as many questions as you can within the time frame!";
  containerTestEl.append(descriptionEl);

  let startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  containerTestEl.append(startBtn);
  startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    quizStart();
  });
}

let containerEl = document.querySelector(".homepage-desc");
// let pageTopEl = document.querySelector(".page-top");

// view highscore a tag
let viewHighScoreEl = document.querySelector(".view-highscores-a");

// view highscore a tag event listener
// viewHighScoreEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event);
// });

// timer on screen
// let seconds = 10;
// let timerEl = document.querySelector(".timer-p");
// timerEl.textContent = `Timer: ${seconds}`;

// function startTimer() {
//   let timer = setInterval(function () {
//     seconds--;
//     timerEl.textContent = `Timer: ${seconds}`;
//     if (seconds === 0) {
//       clearInterval(timer);
//       console.log("times up");
//     }
//   }, 1000);
// }

// submit button starts timer and calls startTimer()
// let submitEl = document.querySelector(".startBtn");
// submitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   startTimer();
// });

// let containerEl = document.querySelector(".container");
let highscore = 0;

// array of question objects
let questions = [
  {
    question: "How many bones are there in the human body?",
    choices: ["206", "208", "200", "204"],
    correct: "206",
  },
  {
    question: "What is the rarest M&M color?",
    choices: ["Red", "Purple", "Brown", "Orange"],
    correct: "Brown",
  },
  {
    question: "Where were the Declaration of Independence, the Constitution, and the Bill of Rights stored during World War II?",
    choices: ["Area 51", "Fort Knox", "Iron Mountain", "Air Force One"],
    correct: "Fort Knox",
  },
  {
    question: "Which country consumes the most chocolate per capita?",
    choices: ["Germany", "Switzerland", "Sweden", "Ireland"],
    correct: "Switzerland",
  },
  {
    question: "What was the first toy to be advertised on television?",
    choices: ["Mr. Potato Head", "Slinky", "Pet Rock", "Yo-Yo"],
    correct: "Mr. Potato Head",
  },
];
let questionChoiceOption1El = document.createElement("button");
let questionChoiceOption2El = document.createElement("button");
let questionChoiceOption3El = document.createElement("button");
let questionChoiceOption4El = document.createElement("button");
let questionChoiceOptionsArr = [questionChoiceOption1El, questionChoiceOption2El, questionChoiceOption3El, questionChoiceOption4El];
let correctAnswer = "";

questionChoiceOption1El.addEventListener("click", validateSelection);
questionChoiceOption2El.addEventListener("click", validateSelection);
questionChoiceOption3El.addEventListener("click", validateSelection);
questionChoiceOption4El.addEventListener("click", validateSelection);

let answeredCorrect = 0;
let answeredWrong = 0;

function validateSelection(event) {
  if (event.target.textContent === correctAnswer) {
    event.target.setAttribute("style", "border: 3px solid green;");
    answeredCorrect++;
    console.log("answered correctly!");
  } else {
    event.target.setAttribute("style", "border: 3px solid red;");
    answeredWrong++;
    console.log("answered wrong!");
  }
  console.log(event);
  console.log(event.target.textContent);
}

for (let i = 0; i < questions.length; i++) {}

// give answers data-sets of correct or incorrect
// timer
// quiz starts inside timer
// if timer reaches 0 before quiz is answered-ends quiz
// if quiz ends before timer reaches 0-hold score
function quizStart() {
  //   for (let i = 0; i < containerTestEl.childElementCount; i++) {
  //     containerTestEl.removeChild();
  //     console.log(containerTestEl);
  //   }
  console.log(containerTestEl.childElementCount);

  //   let quizStartEl = containerEl;
  //   console.log("in quizStart()");
  //   console.log(`starting score: ${highscore}`);
  // let quizStartEl = document.querySelector(".quiz-start");

  let questionEl = document.createElement("h1");
  questionEl.textContent = questions[0].question;
  questionEl.setAttribute("style", "color: black;");
  containerTestEl.append(questionEl);
  console.log("test");

  //   let buttonDiv = document.createElement("div");
  //   buttonDiv.setAttribute("style", "width: 100px; height: 100 px;");
  //   buttonDiv.setAttribute("style", "border: 5px solid black;");
  //   containerTestEl.append(buttonDiv);
  //   containerTestEl.append(questionChoiceOption1El, questionChoiceOption2El, questionChoiceOption3El, questionChoiceOption4El);
  //   populateButtons(questions[0], buttonDiv);
}
// quizStart();

function emptyContainer(container) {}

function quizOver() {}

function highScorePage() {}

// ---------------------------------- attempt 2 ----------------------------------


