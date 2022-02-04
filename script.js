"use strict";
/////////////////////////////////////////////////////////////////////
// Elements
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");
const resetBtn = document.querySelector(".reset__btn");
const timer = document.querySelector(".timer");
const sessionCounter = document.querySelector(".session__counter");

let timerId;
let remainingTime;
let counter = 0;

/////////////////////////////////////////////////////////////////////
// Functions
const startTimer = function () {
  let time;

  if (remainingTime && timer.value.includes(":")) {
    time = remainingTime;
  } else {
    // time = +timer.value * 60;
    time = 3;
  }

  if (time === 0) {
    counter++;
    sessionCounter.insertAdjacentText("beforeend", counter);
  }

  if (isNaN(time)) return console.error("is not a number");

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
      counter++;
      sessionCounter.innerHTML = `Session counter: ${counter}`;
    }
  }, 1000);

  return timerId;
};

const convertTime = function () {
  // timer.value contains :
  // else remainingTime is timer.value
  remainingTime = timer.value;
  const [minutes, seconds] = remainingTime.split(":");
  const totalSeconds = minutes * 60 + +seconds;
  remainingTime = totalSeconds - 1; // -1 to handle second delay
};

/////////////////////////////////////////////////////////////////////
// Event Handlers

// Submit Button
startBtn.addEventListener("click", function () {
  timerId = startTimer();
  if (startBtn.value === "Resume") {
    startBtn.value = "Start";
  }
});

// Stop Button
stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
  convertTime();
  if (startBtn.value === "Start") {
    startBtn.value = "Resume";
  }
});

// Reset Button
resetBtn.addEventListener("click", function () {
  timer.value = 25;
});

// If stopped, change submit text to resume. When finished set as start.

// remove if(remainingTime) block.
// When pomodoro hits 0. Add a counter
