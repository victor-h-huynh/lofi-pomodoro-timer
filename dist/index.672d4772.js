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
const backgroundElement = document.querySelector(".background");
// enums
const SESSIONS = {
    POMODORO: "POMODORO",
    SHORT_BREAK: "SHORT_BREAK",
    LONG_BREAK: "LONG_BREAK"
};
const TIME_STRING = {
    POMODORO: "25:00",
    SHORT_BREAK: "05:00",
    LONG_BREAK: "10:00"
};
const TIME = {
    POMODORO: 1499,
    SHORT_BREAK: 299,
    LONG_BREAK: 599
};
let timerId;
let counter = 0;
let session = SESSIONS.POMODORO;
let time = TIME[session];
let started = false;
/////////////////////////////////////////////////////////////////////
// Functions
const startTimerInterval = function() {
    const timerId1 = setInterval(()=>{
        let mins = String(Math.trunc(time / 60)).padStart(2, 0);
        let secs = String(time % 60).padStart(2, 0);
        if (secs === 0 && mins > 0) {
            mins--;
            secs--;
        } else time--;
        timer.innerHTML = `${mins}:${secs}`;
        console.log(mins, secs, time);
        if (time === -1 && session === "POMODORO") {
            clearInterval(timerId1);
            alarm();
            stopVideo();
            counter++;
            sessionCounter.innerHTML = `Session counter: ${counter}`;
        }
        if (time === -1) clearInterval(timerId1);
    }, 1000);
    return timerId1;
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
    // TESTING PURPOSE SET TIME ON START
    time = 5;
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
sessionsContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".sessions__tab");
    // Guard clause
    if (!clicked) return;
    // Remove active classes
    sessionsTab.forEach((t)=>t.classList.remove("active")
    );
    // Active Tab
    clicked.classList.add("active");
});
// Pomodoro Button
pomodoroBtn.addEventListener("click", function() {
    changeSession(SESSIONS.POMODORO);
    clearInterval(timerId);
});
// Short Break Button
shortBtn.addEventListener("click", function() {
    changeSession(SESSIONS.SHORT_BREAK);
    clearInterval(timerId);
});
// Long Break Button
longBtn.addEventListener("click", function() {
    changeSession(SESSIONS.LONG_BREAK);
    clearInterval(timerId);
});
// Start Button
startBtn.addEventListener("click", function() {
    started ? (stopTimer(), stopVideo()) : (startTimer(), playVideo(), setVolume());
});
// Reset Button
resetBtn.addEventListener("click", function() {
    resetTimer();
    stopVideo();
    resetAlarm();
});
// Previous Video Button
previousBtn.addEventListener("click", function() {
    previousVideo();
});
// Next Video Button
nextVideoBtn.addEventListener("click", function() {
    nextVideo();
});
backgroundElement.addEventListener("click", function() {
    changeBackground();
});
/////////////////////////////////////////////////////////////////////
// YouTube Script
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "kgx4WGK0oNU",
        playerVars: {
            playsinline: 1,
            rel: 0
        },
        events: {
            onReady: onPlayerReady
        }
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
    player.loadPlaylist([
        "kgx4WGK0oNU",
        "bM0Iw7PPoU4",
        "l7TxwBhtTUY"
    ]);
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
/////// TO REMOVE
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
/////// REMOVE ABOVE
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
function getPlayerState() {
    return player.getPlayerState();
}
function previousVideo() {
    player.previousVideo();
}
function nextVideo() {
    player.nextVideo();
// setVolume();
}
function alarm() {
    audioElement.volume = 0.05;
    audioElement.play();
}
function resetAlarm() {
    audioElement.currentTime = 0;
    audioElement.pause();
}
function changeBackground() {
    console.log(backgroundElement);
    console.log(backgroundElement.src);
} // Features
 // Gify background

//# sourceMappingURL=index.672d4772.js.map
