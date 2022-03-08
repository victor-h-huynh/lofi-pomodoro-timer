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
const previousBtn = document.querySelector(".previousVideo__btn");
const nextVideoBtn = document.querySelector(".nextVideo__btn");
const audioElement = document.querySelector(".audioElement");
const mainElement = document.querySelector(".app");

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
// Functions For Timer
const startTimerInterval = function () {
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
    if (time === -1 && session === "POMODORO") {
      clearInterval(timerId);
      alarm();
      stopVideo();
      counter++;
      sessionCounter.innerHTML = `Session counter: ${counter}`;
    }

    if (time === -1) {
      clearInterval(timerId);
    }
  }, 1000);

  return timerId;
};

function changeSession(newSession) {
  session = newSession;
  time = TIME[newSession];
  timer.innerHTML = TIME_STRING[newSession];
  started = false;
  startBtn.innerHTML = "Start";
}

function startTimer() {
  started = true;
  startBtn.innerHTML = "Stop";
  timerId = startTimerInterval();
  // SET TIME TO 10 SECONDS TEST
  // time = 10;
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
  started
    ? (stopTimer(), stopVideo())
    : (startTimer(), playVideo(), setVolume());
});

// Reset Button
resetBtn.addEventListener("click", function () {
  resetTimer();
  stopVideo();
  resetAlarm();
});

// Previous Video Button
previousBtn.addEventListener("click", function () {
  previousVideo();
});

// Next Video Button
nextVideoBtn.addEventListener("click", function () {
  nextVideo();
});

mainElement.addEventListener("click", function () {
  changeBackground();
});

/////////////////////////////////////////////////////////////////////
// Functions For YouTube

// 3. The API will call this function when the video player is ready.
function onPlayerReady() {
  player.loadPlaylist(["kgx4WGK0oNU", "-5KAN9_CzSA", "l7TxwBhtTUY"]);
}

function pauseVideo() {
  player.pauseVideo();
}

function playVideo() {
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}

function setVolume() {
  player.setVolume(10);
}

function previousVideo() {
  player.previousVideo();
}

function nextVideo() {
  player.nextVideo();
}

// PLAYER FUNCTION NOT IN USE
// function getPlayerState() {
//   return player.getPlayerState();
// }

/////////////////////////////////////////////////////////////////////
// Functions For Alarm

function alarm() {
  audioElement.volume = 0.05;
  audioElement.play();
}

function resetAlarm() {
  audioElement.currentTime = 0;
  audioElement.pause();
}

/////////////////////////////////////////////////////////////////////
// Functions For Background

let count = 1;
function changeBackground() {
  // let backgroundNumber = Math.trunc(Math.random() * 4);
  let backgroundNumber = count % 16;
  count++;
  mainElement.style.backgroundImage = `url(background${backgroundNumber}.gif)`;
}

/////////////////////////////////////////////////////////////////////
// YouTube Script

// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "kgx4WGK0oNU",
    playerVars: {
      playsinline: 1,
      rel: 0,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Features
// Don't repeat background
