// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
"use strict"; /////////////////////////////////////////////////////////////////////
// Elements

var sessionsContainer = document.querySelector(".container__sessions");
var controlsContainer = document.querySelector(".container__controls");
var sessionsTab = document.querySelectorAll(".btn--sessions");
var pomodoroBtn = document.querySelector(".btn--pomodoro");
var shortBtn = document.querySelector(".btn--short");
var longBtn = document.querySelector(".btn--long");
var startBtn = document.querySelector(".btn--start");
var resetBtn = document.querySelector(".btn--reset");
var timer = document.querySelector(".timer");
var sessionCounter = document.querySelector(".session__counter");
var previousBtn = document.querySelector(".btn--previousVideo");
var nextVideoBtn = document.querySelector(".btn--nextVideo");
var audioElement = document.querySelector(".audioElement");
var mainElement = document.querySelector(".app"); // enums

var SESSIONS = {
  POMODORO: "POMODORO",
  SHORT_BREAK: "SHORT_BREAK",
  LONG_BREAK: "LONG_BREAK"
};
var TIME_STRING = {
  POMODORO: "25:00",
  SHORT_BREAK: "05:00",
  LONG_BREAK: "10:00"
};
var TIME = {
  POMODORO: 1500 - 1,
  SHORT_BREAK: 300 - 1,
  LONG_BREAK: 600 - 1
};
var timerId;
var counter = 0;
var session = SESSIONS.POMODORO;
var time = TIME[session];
var started = false; /////////////////////////////////////////////////////////////////////
// Functions For Timer

var startTimerInterval = function startTimerInterval() {
  var timerId = setInterval(function () {
    var mins = String(Math.trunc(time / 60)).padStart(2, 0);
    var secs = String(time % 60).padStart(2, 0);

    if (secs === 0 && mins > 0) {
      mins--;
      secs--;
    } else {
      time--;
    }

    timer.innerHTML = "".concat(mins, ":").concat(secs);
    console.log(mins, secs, time);

    if (time === -1 && session === "POMODORO") {
      clearInterval(timerId);
      alarm();
      stopVideo();
      counter++;
      sessionCounter.innerHTML = "Session counter: ".concat(counter);
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
  startBtn.innerHTML = "play_arrow";
}

function startTimer() {
  started = true;
  startBtn.innerHTML = "pause";
  timerId = startTimerInterval(); // SET TIME TO 10 SECONDS TEST
  // time = 10;
}

function stopTimer() {
  started = false;
  startBtn.innerHTML = "play_arrow";
  clearInterval(timerId);
}

function resetTimer() {
  startBtn.innerHTML = "play_arrow";
  clearInterval(timerId);
  changeSession(session);
} /////////////////////////////////////////////////////////////////////
// Event Handlers
// Sessions Container


sessionsContainer.addEventListener("click", function (e) {
  e.stopPropagation();
  var clicked = e.target.closest(".btn--sessions"); // Guard clause

  if (!clicked) return; // Remove active classes

  sessionsTab.forEach(function (t) {
    return t.classList.remove("active");
  }); // Active Tab

  clicked.classList.add("active");
}); // Pomodoro Button

pomodoroBtn.addEventListener("click", function () {
  changeSession(SESSIONS.POMODORO);
  clearInterval(timerId);
}); // Short Break Button

shortBtn.addEventListener("click", function () {
  changeSession(SESSIONS.SHORT_BREAK);
  clearInterval(timerId);
}); // Long Break Button

longBtn.addEventListener("click", function () {
  changeSession(SESSIONS.LONG_BREAK);
  clearInterval(timerId);
}); // Controls Container

controlsContainer.addEventListener("click", function (e) {
  e.stopPropagation();
}); // Start Button

startBtn.addEventListener("click", function () {
  started ? (stopTimer(), stopVideo()) : (startTimer(), playVideo(), setVolume());
}); // Reset Button

resetBtn.addEventListener("click", function () {
  resetTimer();
  stopVideo();
  resetAlarm();
}); // Previous Video Button

previousBtn.addEventListener("click", function () {
  previousVideo();
}); // Next Video Button

nextVideoBtn.addEventListener("click", function () {
  nextVideo();
});
mainElement.addEventListener("click", function (e) {
  changeBackground();
}); /////////////////////////////////////////////////////////////////////
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
} // PLAYER FUNCTION NOT IN USE
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
} /////////////////////////////////////////////////////////////////////
// Functions For Background


var count = 1;

function changeBackground() {
  // let backgroundNumber = Math.trunc(Math.random() * 4);
  var backgroundNumber = count % 25;
  count++;
  mainElement.style.backgroundImage = "url(../dist/background".concat(backgroundNumber, ".gif)");
} /////////////////////////////////////////////////////////////////////
// YouTube Script
// 1. This code loads the IFrame Player API code asynchronously.


var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // 2. This function creates an <iframe> (and YouTube player)
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
} // Features
// Don't repeat background
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "27198" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map