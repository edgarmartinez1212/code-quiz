// variables
let highScoresBtnEl = document.querySelector("#highScoresBtn");
let timerEl = document.querySelector("#timer");

let homePageEl = document.querySelector("#homePage");
let homePageBtnEl = document.querySelector("#homePageBtn");

let quizStartPageEl = document.querySelector("#quizStartPage");
let quizCompletePageEL = document.querySelector("#quizCompletePage");
let highScoresPageEl = document.querySelector("#highScoresPage");

// quiz start variabels
let questionsDivEl = document.querySelector("#questionsDiv").setAttribute("class", "flex flex-col gap-2");
let questionBtn1 = document.querySelector("#questionBtn1");
let questionBtn2 = document.querySelector("#questionBtn2");
let questionBtn3 = document.querySelector("#questionBtn3");
let questionBtn4 = document.querySelector("#questionBtn4");
let questionBtnElArr = [questionBtn1, questionBtn2, questionBtn3, questionBtn4];
let correctAnswer = "";
let score = 0;
let iteration = 0;
let timer = "";
let endQuizFlag = false;
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
let seconds = 30;
let questionTitleEl = document.querySelector("#questionTitle");
let questionResultEl = document.querySelector("#questionResult");

// quizComplete variables

let userScoreEl = document.querySelector("#userScore");
let formSaveNameEl = document.querySelector("#formSaveName");
let formInputEl = document.querySelector("#formInput");
let formBtnEl = document.querySelector("#formBtn");
let keyName = "scores";

// displayScores variables
let highScore1El = document.querySelector("#highScore1");
let highScore2El = document.querySelector("#highScore2");
let highScore3El = document.querySelector("#highScore3");
let highScore4El = document.querySelector("#highScore4");
let highScore5El = document.querySelector("#highScore5");
let highScoreElArr = [highScore1El, highScore2El, highScore3El, highScore4El, highScore5El];
let highScoresHomeBtnEl = document.querySelector("#highScoresHomeBtn");

// functions
function resetVariables() {
  seconds = 30;
  score = 0;
  iteration = 0;
  timer = "";
  endQuizFlag = false;
  questionResultEl.textContent = "";
  timerEl.textContent = `Timer: 0`;
  clearInterval(timeInterval);
  quizStartPageEl.setAttribute("class", "hidden");
  quizCompletePageEL.setAttribute("class", "hidden");
  highScoresPageEl.setAttribute("class", "hidden");
}
function startQuiz() {
  if (iteration === 0) {
    questionBtnListeners();
    startTimer();
  } else if (iteration >= questions.length) {
    endQuiz();
    // need to handle this
  }
  if (seconds != 0) {
    populateQuiz();
  }
}
function startTimer() {
  timeInterval = setInterval(function () {
    seconds--;
    timerEl.textContent = `Timer: ${seconds}`;
    if (seconds <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}
function questionBtnListeners() {
  for (let i = 0; i < questionBtnElArr.length; i++) {
    // questionBtnElArr[i].setAttribute("class", "font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700  w-full");
    questionBtnElArr[i].addEventListener("click", function (event) {
      if (event.target.textContent === correctAnswer) {
        questionResultEl.textContent = `correct: ${correctAnswer}`;
        score++;
      } else {
        questionResultEl.textContent = `wrong: ${event.target.textContent}`;
        seconds -= 3;
      }
      iteration++;
      startQuiz();
    });
  }
}
function populateQuiz() {
  questionTitleEl.textContent = questions[iteration].question;
  correctAnswer = questions[iteration].correct;
  for (let i = 0; i < questions[iteration].choices.length; i++) {
    questionBtnElArr[i].textContent = questions[iteration].choices[i];
  }
}
function endQuiz() {
  if (!endQuizFlag) {
    seconds = 0;
    timerEl.textContent = `Timer: 0`;
    endQuizFlag = true;
  }
  quizComplete();
}

function quizComplete() {
  displayQuizComplete();
  userScoreEl.textContent = `Final Score: ${score}`;
}
function displayQuizComplete() {
  quizStartPageEl.setAttribute("class", "hidden");
  quizCompletePageEL.removeAttribute("class", "hidden");
}

function displayHighScores() {
  highScoresPageEl.removeAttribute("class", "hidden");

  let tempArr = JSON.parse(localStorage.getItem(keyName));
  if (tempArr.length > 0) {
    // sorting array correctly!
    // sortArray(tempArr);
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

    // getting array length
    let arrLength = tempArr.length;
    if (arrLength > 5) {
      arrLength = 5;
    }

    for (let i = 0; i < arrLength; i++) {
      highScoreElArr[i].textContent = `${tempArr[i][0]} scored: ${tempArr[i][1]}`;
    }
  }
}
function sortArray(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1][1] < arr[j][1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
}

// event listeners
homePageBtnEl.addEventListener("click", function () {
  homePageEl.setAttribute("class", "hidden");
  quizStartPageEl.removeAttribute("class", "hidden");
  startQuiz();
});

formBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (localStorage.getItem(keyName) === null) {
    localStorage.setItem(keyName, JSON.stringify([]));
  }
  let localStorageObj = JSON.parse(localStorage.getItem(keyName));
  localStorageObj.push([formInputEl.value, score]);
  localStorage.setItem(keyName, JSON.stringify(localStorageObj));

  quizCompletePageEL.setAttribute("class", "hidden");
  displayHighScores();
});

highScoresHomeBtnEl.addEventListener("click", function () {
  highScoresPageEl.setAttribute("class", "hidden");
  homePageEl.removeAttribute("class", "hidden");
  //   resetVariables();
  window.location.reload();
});

highScoresBtnEl.addEventListener("click", function () {
  resetVariables();
  homePageEl.setAttribute("class", "hidden");
  highScoresPageEl.removeAttribute("class", "hidden");
  displayHighScores();
});

// function calls
