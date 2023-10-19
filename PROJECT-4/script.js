// Variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables to hold time values

let seconds = 0;
let minutes = 0;
let hours = 0;

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

  // Display increment in browser
  let displayTimer = document.getElementById('timer').innerText = 
  hours + ':' + minutes + ':' + seconds;

}

window.setInterval(stopWatch, 1000)