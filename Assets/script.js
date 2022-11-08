var startTimer = document.querySelector("#start-timer");
var timerEl = document.querySelector(".timer");
var Q3 = document.querySelector("#Q3");
var Q2 = document.querySelector("#Q2");
var Q1 = document.querySelector("#Q1");
var initials = document.querySelector("#initials");
var userFinishedScore = document.querySelector("#finished-score");
var scoresList = document.querySelector("scores-list");
var finished = document.querySelectors("#finished");
var leaderboard = document.querySelector("#leaderboard");
var goBack = document.querySelector("#return");
var start = document.querySelector("#start")
var secondsLeft = 30;
var score = 0;

function beginTimer() {
    secondsLeft = 30;
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Timer 00:" + secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        finishedScore()
    }
}, 1000);

questionOne();

Q3.addEventListener("click", function(){
    clearInterval(timerInterval);
})

}

function appendScore() {                                                                                                                                                                                                                                                                
    var userInitials = initials.value;
    var userScore = score;
    var userSave = userInitials + ": " + userScore;
    var newSave = document.createElement("li");
    scoresList.append(newSave);
    newSave.textContent = userSave;
}

function displayScores() {
    finished.setAttribute("style", "display: none");
    leaderboard.setAttribute("style", "display: block");
}

goBack.addEventListener("click", function(event){
    event.preventDefault();
    initials.value = "";
    score = 0;
    leaderboard.setAttribute("style", "display: none");
    start.setAttribute("style", "display: flex");
})

function finishedScore(event) {
    //event.preventDefault();

    Q1.setAttribute("style", "display: none");
    Q2.setAttribute("style", "display: none");
    Q3.setAttribute("style", "display: none");

    finished.setAttribue("style", "display: block");

    userFinishedScore.textContent = ("Score: " + score);

    setTimeout(() => {finished.children[5].textContent = ""}, 1500);

}
submit.addEventListener("click", function(event){
    event.preventDefault();
    appendScore();
    displayScores();
    return;
});

function questionThree() {
    Q2.setAttribute("style", "display: none");
    Q3.setAttribute("style", "display: flex");
    setTimeout(() => {Q3.children[5].textContent = ""}, 1500);
}

Q3.addEventListener("click", function(event){
    event.stopPropagation();
    var answerThree = event.target;

    if (answerThree.matches(".Q3-right")) {
        score += 10;
        finished.children[5].textContent = "That's right!"
        finishedScore();
        return;
    }else {
        secondsLeft -= 5;
        finished.children[5].textContent = "Sorry, wrong anwser."
        finishedScore();
        return
    }
});

function questionTwo() {
    Q1.setAttribute("style", "display: none");
    Q2.setAttribute("style", "display: flex");
    setTimeout(() => {Q2.children[5].textContent = ""}, 1500);
}

Q2.addEventListener("click", function(event){
    event.stopPropagation();
    var answerTwo = event.target;

    if (answerTwo.matches(".Q2-right")) {
        score += 10;
        Q3.children[5].textContent = "That's right!"
        questionThree();
        return;
    }else {
        secondsLeft -= 5;
        Q3.children[5].textContent = "Sorry, wrong anwser."
        questionThree();
        return
    }
});

function questionOne() {
    start.setAttribute("style", "display: none");
    Q1.setAttribute("style", "display: flex");
}

Q1.addEventListener("click", function(event){
    event.stopPropagation();
    var answerTwo = event.target;

    if (answerTwo.matches(".Q2-right")) {
        score += 10;
        Q2.children[5].textContent = "That's right!"
        questionTwo();
        return;
    }else {
        secondsLeft -= 5;
        Q2.children[5].textContent = "Sorry, wrong anwser."
        questionTwo();
        return
    }
});

startTimer.addEventListener("click", beginTimer);