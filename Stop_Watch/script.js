const timerEL = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

// initializing variable.
let startTime = 0;
let elapsedTime = 0;
let timeInterval;

// adding functionalities for start button
// elapsed time (if an event starts at 16:40 and ends at 23:50, then the elapsed time can be determined as, Hours = 23 - 16 = 7, Minutes = 50 - 40 = 10. So, the elapsed time is 7 hours 10 minutes.)
//time interval(For example, say you wanted to measure the speed of a car over a journey taking an hour. You could divide the hour up into time intervals of ten minutes). 
// when the start button is already enabled we cannot press it again and we can press other buttons. 
// every 10 milliseconds , it will update elapsed time and the timer status.
function startTimer(){
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEL.textContent = formatTime(elapsedTime);
    }, 10);
    
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

// => counted time( millisecond, seconds, minutes, hours) based on elapsed time.
// => formatted time. if the seconds exists, second is greater than 9 then just return seconds otherwise, which means if the seconds is less then 9, add "0" before seconds, otherwise "00". this method is for milliseconds, minutes, hours.
function formatTime(elapsedTime){
    const milliseconds = Math.floor(((elapsedTime % 1000)) / 10);
    const seconds = Math.floor(elapsedTime % ( 1000 * 60 ) / 1000);
    const minutes = Math.floor((elapsedTime % ( 1000 * 60 * 60 ))/( 1000 * 60));
    const hours = Math.floor(elapsedTime /( 1000 * 60 * 60 ));  

        return(
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
            ":" +
            (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
            ":" +
            (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
            "." +
            (milliseconds > 9 ? milliseconds: "0" + milliseconds));

}

// adding functionalities for stop button
// clear time interval means the time will start from the beginning
// when the stop button is already enabled we cannot press it again. 
function stopTimer(){
    clearInterval(timeInterval);
    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

// adding functionalities for reset button

// when the start button is already enabled we cannot press it again. 
// when the reset button is pressed, elapsed time will be 0 and timer will set to 0. 
function resetTimer(){
    clearInterval(timeInterval); 

        elapsedTime = 0;
        timerEL.textContent = "00:00:00"; 

    startButtonEl.disabled = false;
    stopButtonEl.disabled = true;
}

// targeted each each button with it's function by eventlistener.
startButtonEl.addEventListener("click", startTimer)
stopButtonEl.addEventListener("click", stopTimer)
resetButtonEl.addEventListener("click", resetTimer)