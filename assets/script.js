let time = 75;
let timerId;
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let timerEl = document.querySelector("#time");
let beginQuiz = document.querySelector("#quizCard");
let buttonStart = document.querySelector("#buttonStart");
let buttonEl = document.querySelector("#buttons");;
let choicesEl = document.querySelector(".choices");
let questionEl = document.querySelector("#question");
let feedbackEl = document.querySelector(".feedback");

function begin() {
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
    newQ.choices.forEach(function(choice, i) {
        let choiceBtn = document.createElement("button")
        console.log(choiceBtn);
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        // displaying choices inside a button
        choiceBtn.onclick = buttonClick;
        choicesEl.appendChild(choiceBtn);        
    });
}

function buttonClick() {
    if(this.value !== questions[runningQuestionIndex].correct) {

        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "YES!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    runningQuestionIndex++;

    if (runningQuestionIndex === questions.length) {
        endQuiz();
    } else {
        renderQuestions();
    }
}

buttonStart.onclick = begin;