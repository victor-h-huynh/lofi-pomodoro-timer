"use strict";
/////////////////////////////////////////////////////////////////////
// Elements
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");
const resetBtn = document.querySelector(".reset__btn");
const timer = document.querySelector(".timer");

let timerId;

/////////////////////////////////////////////////////////////////////
// Functions
const startTimer = function () {
  let time = 3;

  const timerId = setInterval(() => {
    let mins = String(Math.trunc(time / 60)).padStart(2, 0);
    let secs = String(time % 60).padStart(2, 0);

    if (secs === 0 && mins > 0) {
      mins--;
      secs--;
    } else {
      time--;
    }
    timer.innerHTML = `${mins}:${secs}`;
    console.log(mins, secs, time);
    if (time === -1) {
      clearInterval(timerId);
    }
  }, 1000);

  return timerId;
};

/////////////////////////////////////////////////////////////////////
// Event Handlers

// Start Button
startBtn.addEventListener("click", function () {
  timerId = startTimer();
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});
