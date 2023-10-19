// Variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables to hold time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timer status
let timerInterval = null;
let timerStatus = "stopped";


// Stopwatch function - increments timer

function stopWatch() {

  seconds++;
  //Reset the variable to 0 and increment the next
  if(seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if(minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //Include leading zero if seconds/minutes/hours is only one digit
  if(seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if(minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if(hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  // Display increment in browser
  let displayTimer = document.getElementById('timer').innerText = 
  leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;

}


startStopBtn.addEventListener("click", function() {
  //
  if(timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById('startStopBtn').innerHTML = `<i
    class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = `<i
    class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
})

resetBtn.addEventListener("click", function() {

  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById('timer').innerHTML = "00:00:00";
})