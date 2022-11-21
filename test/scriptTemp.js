// VARIABLES

// container, top-container, content-container elements
// created and appended
// DO NOT DELETE
// todo: remove background
let containerEl = document.querySelector(".container");
let containerTopEl = document.createElement("div");
let containerContentEl = document.createElement("div");
let viewHighScoresEl = document.createElement("a");
let timeClockEl = document.createElement("p");
let seconds = 30;

containerEl.setAttribute("style", "width: 80%; height: 50vh; display: flex; flex-direction: column; border: 1px solid black;");
containerTopEl.setAttribute("style", "width: 100%; height: 20%; display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-around; align-items: center; gap: 5vw; border-bottom: 1px solid black");
containerContentEl.setAttribute("style", "margin: auto; width: 80%; height: fit-content; display: align-items: center; text-align: center; display: flex; flex-direction: column; padding-bottom: 5vw;");
viewHighScoresEl.setAttribute("style", "margin: 1vw;");
timeClockEl.setAttribute("style", "margin: 1vw");

viewHighScoresEl.addEventListener("click", function () {
  let scoresDiv = document.createElement("div");
  scoresDiv.remove();
  displayScores();
});

viewHighScoresEl.textContent = "View Highscores";
timeClockEl.textContent = `Timer: ${seconds}`;
containerTopEl.append(viewHighScoresEl, timeClockEl);
containerEl.append(containerTopEl, containerContentEl);

// END DO NOT DELETE ELEMENTS

// start page - homepage elements
let titleEl = document.createElement("p");
let descriptionEl = document.createElement("p");
let buttonEl = document.createElement("button");
titleEl.setAttribute("style", "margin-top: 5vh; padding: 0; font-size: 2rem;");
descriptionEl.setAttribute("style", "margin-top: 5vh; padding: 0;");
buttonEl.setAttribute("style", "margin-top: 5vh;");
containerContentEl.append(titleEl);
containerContentEl.append(descriptionEl);
containerContentEl.append(buttonEl);
// end homepage

// start quiz elements
let correctAnswer = "";
let myScore = 0;
let answeredWrong = 0;
let iteration = 0;
// create array of questions
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

// create question elemenet
let questionTitleEl = document.createElement("h1");
// create buttons elements
let questionOption1El = document.createElement("button");
let questionOption2El = document.createElement("button");
let questionOption3El = document.createElement("button");
let questionOption4El = document.createElement("button");
let questionOptionsArr = [questionOption1El, questionOption2El, questionOption3El, questionOption4El];
let questionOptionContainerEl = document.createElement("div");
let formEl = document.createElement("form");
let textBoxEl = document.createElement("input");
let textBoxBtnEl = document.createElement("button");
textBoxBtnEl.setAttribute("type", "submit");

questionOption1El.setAttribute("style", "margin: 0; padding: 0; width: 12vw; font-size: 1rem;");
questionOption2El.setAttribute("style", "margin: 0; padding: 0; width: 12vw;");
questionOption3El.setAttribute("style", "margin: 0; padding: 0; width: 12vw;");
questionOption4El.setAttribute("style", "margin: 0; padding: 0; width: 12vw;");
formEl.setAttribute("style", "width: 100%; height: 30px; border: display: flex; flex-direction: column;");
textBoxEl.setAttribute("style", "width: 100%; text-align: center; margin-bottom: 2vw;");
textBoxEl.setAttribute("placeholder", "your initials");
textBoxBtnEl.setAttribute("style", "width: 100;");
textBoxBtnEl.textContent = "Save";

// testing local storage
// event listener
let keyName = "scores";
textBoxBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  highScoresArr.push([textBoxEl.value, myScore]);

  if (localStorage.getItem(keyName) === null) {
    localStorage.setItem(keyName, JSON.stringify([]));
  }
  let localStorageObj = JSON.parse(localStorage.getItem(keyName));
  localStorageObj.push([textBoxEl.value, myScore]);
  localStorage.setItem(keyName, JSON.stringify(localStorageObj));

  formEl.remove();
  displayScores();
});

// print function
function print(x) {
  console.log(x);
}

formEl.append(textBoxEl, textBoxBtnEl);

questionOptionContainerEl.setAttribute("style", "width: 80%; height: 60%; margin: auto; display: flex; justify-content: center; gap: 5vw; flex-wrap: wrap;");
questionOptionContainerEl.append(questionOption1El, questionOption2El, questionOption3El, questionOption4El);
// end start quiz

// scores array
let highScoresArr = [];
// end scores array

// timer elements
let timeInterval = "";
// end timer elements

function displayScores() {
  // if containerContentEl contains scoresDiv - return
  titleEl.textContent = "Scores";
  let scoresDiv = document.createElement("div");
  let tableEl = document.createElement("tbody");

  scoresDiv.setAttribute("style", "border: 1px solid black; width: 100%; height: 100px");
  scoresDiv.setAttribute("id", "scoreDiv");
  scoresDiv.append(tableEl);
  containerContentEl.append(scoresDiv);
  descriptionEl.textContent = "";
  //   console.log(`scoreDiv: ${document.querySelector("#scoreDiv")}`);

  let tempArr = JSON.parse(localStorage.getItem(keyName));
  if (tempArr.length === 0) {
    alert("no scores");
  } else {
    tempArr.sort();
    for (let i = 0; i < tempArr.length; i++) {
      for (let j = 1; j < tempArr.length; j++) {
        if (tempArr[j - 1][1] < tempArr[j][1]) {
          let temp = tempArr[j];
          tempArr[j] = tempArr[j - 1];
          tempArr[j - 1] = temp;
        }
      }
    }
    print(tempArr);

    let arrLength = tempArr.length;
    if (tempArr.length > 5) {
      arrLength = 5;
    }
    let tableRowMainEl = document.createElement("tr");
    let NameEl = document.createElement("td");
    let ScoreEl = document.createElement("td");
    NameEl.textContent = "Name";
    ScoreEl.textContent = "Score";
    tableRowMainEl.append(NameEl, ScoreEl);
    scoresDiv.append(tableRowMainEl);

    for (let i = 0; i <= arrLength; i++) {
      if (i === arrLength && arrLength == 5) {
        return;
      }

      let tableRowEl = document.createElement("tr");
      let tNameEl = document.createElement("td");
      let tScoreEl = document.createElement("td");
      tNameEl.textContent = tempArr[i][0];
      tScoreEl.textContent = tempArr[i][1];
      tableRowEl.append(tNameEl, tScoreEl);
      scoresDiv.append(tableRowEl);
    }
  }
  //   console.log(`scoreDiv after: ${document.querySelector("#scoreDiv")}`);
}

// FUNCTIONS
function startPage() {
  titleEl.textContent = "Welcome to the Quiz!";
  descriptionEl.textContent = "Try to answer as many questions as you can within the time frame!";
  buttonEl.textContent = "Start";

  buttonEl.addEventListener("click", function (event) {
    event.preventDefault();
    titleEl.textContent = "";
    // descriptionEl.textContent = "";
    descriptionEl.remove();
    buttonEl.remove();
    timer();
    startQuiz();
  });
}

function startQuiz() {
  if (iteration === questions.length) {
    seconds = 1;
    endQuiz();
    return;
  }
  titleEl.textContent = questions[iteration].question;
  correctAnswer = questions[iteration].correct;
  //   displayResultEl.textContent = "";
  addQuestions();
  if (iteration === 0) {
    containerContentEl.append(questionOptionContainerEl);
    // containerContentEl.append(displayResultEl);
  }
}

function addQuestions() {
  for (let i = 0; i < questionOptionsArr.length; i++) {
    questionOptionsArr[i].textContent = questions[iteration].choices[i];
  }
}

// adds question to page and stores the correct answer
function addQuestion(questionArr) {}

function resetIteration() {
  iteration = 0;
}

function endQuiz() {
  questionOptionContainerEl.remove();
  titleEl.textContent = `your score: ${myScore}`;
  descriptionEl.textContent = "";
  containerContentEl.append(formEl);
}

function timer() {
  timeInterval = setInterval(function () {
    seconds--;
    timeClockEl.textContent = `Timer: ${seconds}`;
    if (seconds <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}
// end start quiz functions

// event listeners
questionOption1El.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    alert("correct");
    myScore++;
  } else {
    alert("wrong");
    seconds -= 3;
  }
  iteration++;
  startQuiz();
});
questionOption2El.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    alert("correct answer");
    myScore++;
  } else {
    alert("wrong answer");
    seconds -= 3;
  }
  iteration++;
  startQuiz();
});
questionOption3El.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    alert("correct answer");
    myScore++;
  } else {
    alert("wrong answer");
    seconds -= 3;
  }
  iteration++;
  startQuiz();
});
questionOption4El.addEventListener("click", function (event) {
  if (event.target.textContent === correctAnswer) {
    alert("correct answer");
    myScore++;
  } else {
    alert("wrong answer");
    seconds -= 3;
  }
  iteration++;
  startQuiz();
});
// end event listeners

// FUNCTION CALLS
startPage();

// testing();
function testing() {}
