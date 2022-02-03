"use strict";
/////////////////////////////////////////////////////////////////////
// Elements
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");
const resetBtn = document.querySelector(".reset__btn");
const timer = document.querySelector(".timer");

let timerId;
let remainingTime;

/////////////////////////////////////////////////////////////////////
// Functions
const startTimer = function () {
  // let time = 10;
  let time = +timer.value * 60; // in minutes
  if (!Number.isInteger(time)) return console.error("is not a number");

  if (remainingTime) {
    time = remainingTime;
    console.log(time);
  }

  const timerId = setInterval(() => {
    let mins = String(Math.trunc(time / 60)).padStart(2, 0);
    let secs = String(time % 60).padStart(2, 0);

    if (secs === 0 && mins > 0) {
      mins--;
      secs--;
    } else {
      time--;
    }
    timer.value = `${mins}:${secs}`;
    console.log(mins, secs, time);
    if (time === -1) {
      clearInterval(timerId);
    }
  }, 1000);

  return timerId;
};

/////////////////////////////////////////////////////////////////////
// Event Handlers

// Submit Button
startBtn.addEventListener("click", function () {
  timerId = startTimer();
});

// Stop Button
stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
  remainingTime = timer.value;
  const [minutes, seconds] = remainingTime.split(":");
  const totalSeconds = minutes * 60 + +seconds;
  remainingTime = totalSeconds;
  console.log(typeof remainingTime);
});

// Make conversion into a function. Utility function. String version of time to seconds
// If stopped, change submit text to resume. When finished set as start.
// Might run into an issue with conversion. Different when restarting resuming
// remove if(remainingTime) block.
// ResetButton to 25minutes
// When pomodoro hits 0. Add a counter
