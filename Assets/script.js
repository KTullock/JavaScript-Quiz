var timerEl = document.querySelector(".timer")
var startTimer = document.querySelector(".start-timer")
var start = document.querySelector("#start")
var Q1 = document.querySelector("#Q1");
var Q2 = document.querySelector("#Q2");
var Q3 = document.querySelector("#Q3");
var finished = document.querySelector("#finished")
var initials = document.querySelector("#initials")
var leaderboard = document.querySelector("#leaderboard")
var goBack = document.querySelector("#return")
var userFinishedScore = document.querySelector("#finished_score")
var scoresList = document.querySelector("#scores-list")
var score = 0
var secondsLeft = 30

//Sets the quiz timer
function beginTimer() {
    secondsLeft = 30;
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent= "Timer 00: " + secondsLeft;

//When the timer runs out, it will jump to the finished page
    if (secondsLeft === 0){
        clearInterval(timerInterval);
        finishedScore();
        
    }
}, 1000);
//Begins the quiz by going to the first question
questionOne();
//Stops the timer when question 3 is answered
    Q3.addEventListener("click", function(){
        clearInterval(timerInterval);
    })
}

//Creates and stores the user's score to the leaderboard
function appendScore(){
    var userInitials = initials.value;
    var userScore = score;
    var userSave = userInitials + ": " + userScore
    var newSave = document.createElement("li");
    scoresList.append(newSave);
    newSave.textContent = userSave;
}



//Displays the scores on the leaderboard
function displayScores(){
    finished.setAttribute("style", "display: none");
    leaderboard.setAttribute("style", "display: block");


}
  //If back button is pressed, it will take you back to the beginning screen
    goBack.addEventListener("click", function(event){
        event.preventDefault();
        initials.value = "";
        score = 0;
        leaderboard.setAttribute("style", "display: none");
        start.setAttribute("style", "display: flex");

    })

//After the quiz, the user can enter their initials to save their score
function finishedScore() {

    Q1.setAttribute("style", "display: none");
    Q2.setAttribute("style", "display: none");
    Q3.setAttribute("style", "display: none");

    finished.setAttribute("style", "display: block");
    userFinishedScore.textContent = ("Score:" + score);
    setTimeout(() => {finished.children[5].textContent = ""}, 2000);
}
//When "submit" is clicked, the user's initials and score is saved and appended to the leaderboard
    submit.addEventListener("click", function(event){
        event.preventDefault();

        appendScore();
        displayScores();
        return;
    });


//Displays question 3 to the user
function questionThree() {
    Q2.setAttribute("style", "display: none;")

    Q3.setAttribute("style", "display: flex;");
    setTimeout(() => {Q3.children[5].textContent = ""}, 2000);
}
//If the correct answer is clicked it will add 5 to the score, if not it will subtract 10 from the time
    Q3.addEventListener("click", function(event){
        event.stopPropagation();
        var answerThree = event.target;
        if (answerThree.matches(".Q3-right")) {
            score += 10;
            finished.children[5].textContent = "That's right!";
            finishedScore();
            return;
        } else {
            secondsLeft -= 5;
            finished.children[5].textContent = "Sorry, wrong answer."
            finishedScore();
            return;
        }
    }); 

//Displays question 2 to the user
function questionTwo() {
    Q1.setAttribute("style", "display: none;");

    Q2.setAttribute("style", "display: flex;");
    setTimeout(() => {Q2.children[5].textContent = ""}, 2000);
}
//If the user selects the right answer, 10 points will be added to their score.
//If they select a wrong answer, 5 seconds will be subtracted from the timer.
    Q2.addEventListener("click", function(event){
        event.stopPropagation();
        var answerTwo = event.target;
        if (answerTwo.matches(".Q2-right")) {
            score += 10;
            Q3.children[5].textContent = "That's right!";
            questionThree();
            return;
        } else {
            secondsLeft -= 5;
            Q3.children[5].textContent = "Sorry, wrong answer."
            questionThree();
            return;
        }
    });   

//Displays question 1 to the user
function questionOne() {

start.setAttribute("style", "display: none;")

Q1.setAttribute("style", "display: flex;");

}
//If the user selects the right answer, 10 points will be added to their score.
//If they select a wrong answer, 5 seconds will be subtracted from the timer.
Q1.addEventListener("click", function(event) {
    event.stopPropagation();
    var answerOne = event.target;

    if (answerOne.matches(".Q1-right")) {
        score += 10; 
        Q2.children[5].textContent = "That's right!"
        questionTwo();
        return;
    } else {
        secondsLeft -= 5;
        Q2.children[5].textContent = "Sorry, wrong answer.";
        questionTwo();
        return;
    }
});



//The quiz and timer begins when the user clicks the "Start Quiz!" button.
startTimer.addEventListener("click", beginTimer)