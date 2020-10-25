let time = 75;
let timerId;
let runningQuestionIndex = 0;
let timerEl = document.querySelector("#time");
let beginQuiz = document.querySelector("#quizCard");
let buttonStart = document.querySelector("#buttonStart");
let btnHigh = document.querySelector("#btnHighScore");
let buttonEl = document.querySelector("#buttons");;
let choicesEl = document.querySelector("#choices");
let questionEl = document.querySelector("#question");
let feedbackEl = document.querySelector("#feedback");

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
    // clear out old questions
    choicesEl.innerHTML = "";
    // filling in different choices
    newQ.choices.forEach(function(choice, i) {
        let choiceBtn = document.createElement("button")
        console.log(choiceBtn);
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = buttonClick;
        // displaying choices inside a button
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
        feedbackEl.textContent = "Correct!";
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

function endQuiz() {
    // timerEl.textContent = 0;
    clearInterval(timerId);

    showById("#saveScores");

    let finalScore = document.querySelector("#finalTime");
    finalScore.textContent = time;
    
    beginQuiz.setAttribute("class", "hide");
    
    showHighScores();
}

function showById(elementId) {
    let anEl = document.querySelector(elementId);
    anEl.removeAttribute("class");
}

function showHighScores() {
    let introScreen = document.querySelector("#introScreen");
    introScreen.setAttribute("class", "hide");
    showById("#highScores");
}

function showHomeScreen() {
    let introScreen = document.querySelector("#introScreen");
    introScreen.setAttribute("class", "homeScreenStyle");
    let highScoreEl = document.querySelector("#highScores");
    highScoreEl.setAttribute("class", "hide");
    let saveScoresEl = document.querySelector("#saveScores");
    saveScoresEl.setAttribute("class", "hide");

}

function displayScore() {
    let intEl = document.querySelector("#initials");
    // let hsEl = document.querySelector("#highScores");
    intEl.textContent.appendChild("#highScores"); 
}
buttonStart.onclick = begin;
btnHigh.onclick = showHighScores;
document.querySelector("#homeScreen").onclick = showHomeScreen;
document.querySelector("#submit").onclick = displayScore;