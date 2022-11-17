// VARIABLES

// container, top-container, content-container elements
// created and appended
// DO NOT DELETE
// todo: remove background
let containerEl = document.querySelector(".container");
let containerTopEl = document.createElement("div");
let containerContentEl = document.createElement("div");
containerEl.setAttribute("style", "width: 100%; height: 100%;");
containerTopEl.setAttribute("style", "width: 100%; height: 20%; background: green;");
containerContentEl.setAttribute("style", "width: 100%; height: 80%; background: blue; display: align-items: center; text-align: center;");
containerEl.append(containerTopEl);
containerEl.append(containerContentEl);
// END DO NOT DELETE ELEMENTS

// start page - homepage elements
let titleEl = document.createElement("h1");
let descriptionEl = document.createElement("h2");
let buttonEl = document.createElement("button");
containerContentEl.append(titleEl);
containerContentEl.append(descriptionEl);
containerContentEl.append(buttonEl);
// end homepage

// start quiz elements
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

// answer correct/wrong variables
let correctAnswer = "";
let answeredCorrect = 0;
let answeredWrong = 0;
let iteration = 0;
// end start quiz

// FUNCTIONS
function startPage() {
  titleEl.textContent = "Welcome to the Quiz!";
  descriptionEl.textContent = "Try to answer as many questions as you can within the time frame!";
  buttonEl.textContent = "Start";

  titleEl.setAttribute("style", "margin: 0; padding: 0;");
  descriptionEl.setAttribute("style", "margin: 0; padding: 0;");

  buttonEl.addEventListener("click", function (event) {
    event.preventDefault();
    titleEl.remove();
    descriptionEl.remove();
    buttonEl.remove();
    startQuiz();
  });
}

// issues with start quiz
function startQuiz() {
  resetQuestionButtons();
  populateQuestionButtons(questions[iteration]);
  appendQuestionButtons();
  //   if (iteration === questions.length || timer === 0) {
  if (iteration === questions.length) {
    console.log("done");
  }
}
function resetQuestionButtons() {
  questionOptionsArr.forEach((option) => {
    option.textContent = "";
    option.setAttribute("style", "margin: 0; padding: 0;");
    option.remove();
  });
}

function populateQuestionButtons(questionArr) {
  titleEl.textContent = questionArr.question;
  //   titleEl.setAttribute("style", "margin: 0; padding: 0;");
  containerContentEl.append(titleEl);

  correctAnswer = questionArr.correct;
  for (let i = 0; i < questionOptionsArr.length; i++) {
    questionOptionsArr[i].textContent = questionArr.choices[i];
    questionOptionsArr[i].addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.textContent === correctAnswer) {
        console.log("correct");
      } else {
        console.log("wrong");
      }
      iteration++;
      console.log(`iteration: ${iteration}`);
      console.log(event.target);
      startQuiz();
    });
  }

  //   correctAnswer = "";
  //   for (let i = 0; i < questionOptionsArr.length; i++) {
  //     questionOptionsArr[i].textContent = questionArr.choices[i];
  //     questionOptionsArr[i].addEventListener("click", function (event) {
  //       event.preventDefault();
  //       if (event.target.textContent === correctAnswer) {
  //         console.log("correct");
  //       } else {
  //         console.log("wrong");
  //       }
  //       iteration++;
  //       console.log(`iteration: ${iteration}`);
  //       startQuiz();
  //     });
  //   }
  //   correctAnswer = questionArr.correct;
}

function appendQuestionButtons() {
  questionOptionsArr.forEach((question) => {
    containerContentEl.append(question);
  });
}

// FUNCTION CALLS
startPage();
