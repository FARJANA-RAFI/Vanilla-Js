const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// initialized the variable.
let interval; 
let timeLeft = 1500;

// counted minutes and seconds.formatted time based on these. 
// here used two new method one was toString() which allowed to convert time into string.then padStart() to add 0 both for minutes and seconds in at the beginning if it  does not have two digit.
function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

// this function is for setting time interval. once start button is clicked, time will start deceasing from backward. meanwhile will continue updating timer as we called update-timer afterwards 
// also included an alert when time is close to 0. again update the timer.
function startTimer(){
    interval = setInterval(() =>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert ("Break Time!:D");
            timeLeft = 10;
            updateTimer();
        }
    }, 1000)
}
// clear the time interval and stop the timer where we stop. start from there again
function stopTimer(){
    clearInterval(interval);
}

// clear the time interval. start from set time and update from timer.
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();

}

// triggered the button and added eventlistener to them and call the related function as we click.
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);