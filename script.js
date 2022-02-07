"use strict";
/////////////////////////////////////////////////////////////////////
// Elements
const sessionsContainer = document.querySelector(".sessions__container");
const sessionsTab = document.querySelectorAll(".sessions__tab");
const pomodoroBtn = document.querySelector(".pomodoro__btn");
const shortBtn = document.querySelector(".short__btn");
const longBtn = document.querySelector(".long__btn");
const startBtn = document.querySelector(".start__btn");
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
  SHORT_BREAK: "05:00",
  LONG_BREAK: "10:00",
};

const TIME = {
  POMODORO: 1500 - 1,
  SHORT_BREAK: 300 - 1,
  LONG_BREAK: 600 - 1,
};

let timerId;
let counter = 0;
let session = SESSIONS.POMODORO;
let time = TIME[session];
let started = false;

/////////////////////////////////////////////////////////////////////
// Functions
const startTimerInterval = function () {
  if (time === 0) {
    counter++;
    sessionCounter.insertAdjacentText("beforeend", counter);
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

function changeSession(newSession) {
  session = newSession;
  time = TIME[newSession];
  timer.innerHTML = TIME_STRING[newSession];
  started = false;
}

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

function resetTimer() {
  startBtn.innerHTML = "Start";
  clearInterval(timerId);
  changeSession(session);
}

/////////////////////////////////////////////////////////////////////
// Event Handlers

// Sessions Container
sessionsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".sessions__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  sessionsTab.forEach((t) => t.classList.remove("active"));

  // Active Tab
  clicked.classList.add("active");
});

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   // Guard clause
//   if (!clicked) return;

//   // Remove active classes
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));

//   // Active Tab
//   clicked.classList.add('operations__tab--active');

//   // Activate content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

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

// Start Button
startBtn.addEventListener("click", function () {
  if (started) {
    stopTimer();
  } else {
    startTimer();
  }
});

// Reset Button
resetBtn.addEventListener("click", function () {
  resetTimer();
});

// Remaining features
// - Connect to YouTube station
// - Active css class for Pomodoro, Short break or Long break when clicked

// Music that I downloaded
// YouTube music
