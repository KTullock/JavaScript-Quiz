var startTimer = document.querySelector("#start-timer")
var timerEl = document.querySelector(".timer");

var secondsLeft = 60;

startTimer.addEventListener("click", function setTimer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Timer 00:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
})

setTimer();
