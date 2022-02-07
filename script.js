"use strict";
/////////////////////////////////////////////////////////////////////
// Elements
const pomodoroBtn = document.querySelector(".pomodoro__btn");
const shortBtn = document.querySelector(".short__btn");
const longBtn = document.querySelector(".long__btn");
const startBtn = document.querySelector(".start__btn");
const stopBtn = document.querySelector(".stop__btn");
const resetBtn = document.querySelector(".reset__btn");
const timer = document.querySelector(".timer");
const sessionCounter = document.querySelector(".session__counter");

// enums
const SESSIONS = {
  POMODORO: "POMODORO",
  SHORT_BREAK: "SHORT_BREAK",
  LONG_BREAK: "LONG_BREAK",
};

const TIME_STRING = {
  POMODORO: "25:00",
  SHORT_BREAK: "5:00",
  LONG_BREAK: "10:00",
};

const TIME = {
  POMODORO: 1500 - 1,
  SHORT_BREAK: 300 - 1,
  LONG_BREAK: 600 - 1,
};

let timerId;
// let remainingTime;
let counter = 0;
let session = SESSIONS.POMODORO;
let time = TIME[session];
let started = false;

/////////////////////////////////////////////////////////////////////
// Functions
const startTimerInterval = function () {
  // let time;
  console.log(time);

  // if (remainingTime && timer.value.includes(":")) {
  //   time = remainingTime;
  // } else {
  //   time = +timer.value * 60;
  //   // time = 3;
  // }

  if (time === 0) {
    counter++;
    sessionCounter.insertAdjacentText("beforeend", counter);
  }

  // if (isNaN(time)) return console.error("is not a number");
  // if (timer.value > 25) return console.error("Max 25");
  // console.log(timer.value);

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
      counter++;
      sessionCounter.innerHTML = `Session counter: ${counter}`;
    }
  }, 1000);

  return timerId;
};

// const convertTime = function () {
//   remainingTime = timer.value;
//   const [minutes, seconds] = remainingTime.split(":");
//   const totalSeconds = minutes * 60 + +seconds;
//   remainingTime = totalSeconds - 1; // -1 to handle second delay
// };

/////////////////////////////////////////////////////////////////////
// Event Handlers

function changeSession(newSession) {
  session = newSession;
  time = TIME[newSession];
  timer.innerHTML = TIME_STRING[newSession];
  started = false;
}

// Pomodoro Button
pomodoroBtn.addEventListener("click", function () {
  changeSession(SESSIONS.POMODORO);
  clearInterval(timerId);
});

// Short Break Button
shortBtn.addEventListener("click", function () {
  changeSession(SESSIONS.SHORT_BREAK);
  clearInterval(timerId);
});

// Long Break Button
longBtn.addEventListener("click", function () {
  changeSession(SESSIONS.LONG_BREAK);
  clearInterval(timerId);
});

function startTimer() {
  started = true;
  startBtn.innerHTML = "Stop";
  timerId = startTimerInterval();
}

function stopTimer() {
  started = false;
  startBtn.innerHTML = "Start";
  clearInterval(timerId);
}

// Start Button
startBtn.addEventListener("click", function () {
  if (started) {
    stopTimer();
  } else {
    startTimer();
  }
});

function resetTimer() {
  startBtn.innerHTML = "Start";
  clearInterval(timerId);
  changeSession(session);
}

// Reset Button
resetBtn.addEventListener("click", function () {
  resetTimer();
});

// Remaining features
// - Change button text to resume, only if countdown begun else stays as "Stop"
// - Spamming start should not increase interval
// - Clicking result, then clicking start should be a new timer, not the old timer
// - Connect to YouTube station
// - Active css class for Pomodoro, Short break or Long break when clicked

// Music that I downloaded
// YouTube music
