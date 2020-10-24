let time = 75;
let timerId;
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

let timerEl = document.querySelector("#time");
let beginQuiz = document.querySelector("#quizCard");
let buttonStart = document.querySelector("#buttonStart");
let buttonA = document.querySelector("#buttonA");
let buttonB = document.querySelector("#buttonB");
let buttonC = document.querySelector("#buttonC");
let buttonD = document.querySelector("#buttonD");
let choiceA = document.querySelector("#choiceA");
let choiceB = document.querySelector("#choiceB");
let choiceC = document.querySelector("#choiceC");
let choiceD = document.querySelector("#choiceD");
let questionEl = document.querySelector("#question");

function begin () {
    // hide intro screen
    let introScreen = document.querySelector("#introScreen");
    introScreen.setAttribute("class", "hide");
    // remove display:none from questions
    beginQuiz.removeAttribute("class");
    // begin the countdown
    timerId = setInterval(startCountDown, 1000);
    console.log(timerId);
    // show starting time
    timerEl.textContent = time;
    renderQuestions();
}

function startCountDown() {
    // counting timer down from 75
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        clearInterval(timerId);
    }
}

function renderQuestions() {
    // get current question object from the array "questions"
    let newQ = questions[runningQuestionIndex];
    let newQuestion = document.querySelector("#question");
    // displaying the current question
    newQuestion.textContent = newQ.title;
    // filling in different choices
    let newChoiceA = document.querySelector("#choiceA");
    newChoiceA.textContent = newQ.choiceA;
   
    let newChoiceB = document.querySelector("#choiceB");
    newChoiceB.textContent = newQ.choiceB;
   
    let newChoiceC = document.querySelector("#choiceC");
    newChoiceC.textContent = newQ.choiceC;
   
    let newChoiceD = document.querySelector("#choiceD");
    newChoiceD.textContent = newQ.choiceD;
    




}
buttonStart.onclick = begin;