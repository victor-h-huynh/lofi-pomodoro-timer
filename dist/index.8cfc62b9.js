// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"66NjM":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
"use strict";
// import "youtube-background";
const youtube_background = require("youtube-background");
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
const youtube = document.querySelector(".youtube");
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
    started ? stopTimer() : startTimer();
    // new VideoBackgrounds("[data-vbg]").youtube_background();
    console.log(new VideoBackgrounds("[data-vbg]").youtube_background());
});
// Reset Button
resetBtn.addEventListener("click", function() {
    resetTimer();
}); // Remaining features
 // - Connect to YouTube station
 // Music that I downloaded
 // YouTube music

},{"youtube-background":"5uDsK"}],"5uDsK":[function(require,module,exports) {
/**
 * jquery.youtube-background v1.0.14 | Nikola Stamatovic <@stamat> | MIT
 */ (function() {
    function hasClass(element, className) {
        if (element.classList) return element.classList.contains(className);
        return new RegExp('\\b' + className + '\\b').test(element.className);
    }
    function addClass(element, classNames) {
        if (element.classList) {
            const classes = classNames.split(' ');
            for(var i = 0; i < classes.length; i++){
                const el_class = classes[i];
                element.classList.add(el_class);
            }
            return;
        }
        if (!hasClass(element, className)) element.className += ' ' + className;
    }
    function removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
            return;
        }
        element.className = element.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
    }
    function isMobile() {
        let is_mobile = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) is_mobile = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return is_mobile;
    }
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    function parseResolutionString(res) {
        const pts = res.split(/\s?:\s?/i);
        const DEFAULT_RESOLUTION = 16 / 9;
        if (pts.length < 2) return DEFAULT_RESOLUTION;
        const w = parseInt(pts[0], 10);
        const h = parseInt(pts[1], 10);
        if (isNaN(w) || isNaN(h)) return DEFAULT_RESOLUTION;
        return w / h;
    }
    function parseProperties(params, defaults, element, attr_prefix) {
        let res_params = {
        };
        if (!params) res_params = defaults;
        else {
            for(let k in defaults)if (!params.hasOwnProperty(k)) //load in defaults if the param hasn't been set
            res_params[k] = defaults[k];
        }
        if (!element) return res_params;
        // load params from data attributes
        for(let k in res_params){
            let data;
            if (attr_prefix instanceof Array) for(var i = 0; i < attr_prefix.length; i++){
                const temp_data = element.getAttribute(attr_prefix[i] + k);
                if (temp_data) {
                    data = temp_data;
                    break;
                }
            }
            else data = element.getAttribute(attr_prefix + k);
            if (data !== undefined && data !== null) {
                data = data === 'false' ? false : data;
                data = /^\d+$/.test(data) ? parseInt(data, 10) : data;
                data = /^\d+\.\d+$/.test(data) ? parseFloat(data) : data;
                res_params[k] = data;
            }
        }
        return res_params;
    }
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    function YoutubeBackground(elem, params, id, uid) {
        this.is_mobile = isMobile();
        this.element = elem;
        this.ytid = id;
        this.uid = uid;
        this.player = null;
        this.buttons = {
        };
        this.state = {
        };
        this.state.play = false;
        this.state.mute = false;
        this.params = {
        };
        const DEFAULTS = {
            'pause': false,
            'play-button': false,
            'mute-button': false,
            'autoplay': true,
            'muted': true,
            'loop': true,
            'mobile': false,
            'load-background': true,
            'resolution': '16:9',
            'onStatusChange': function() {
            },
            'inline-styles': true,
            'fit-box': false,
            'offset': 200,
            'start-at': 0,
            'end-at': 0,
            'poster': null
        };
        this.__init__ = function() {
            if (!this.ytid) return;
            this.params = parseProperties(params, DEFAULTS, this.element, [
                'data-ytbg-',
                'data-vbg-'
            ]);
            //pause deprecated
            if (this.params.pause) this.params['play-button'] = this.params.pause;
            this.params.resolution_mod = parseResolutionString(this.params.resolution);
            this.state.playing = this.params.autoplay;
            this.state.muted = this.params.muted;
            this.buildHTML();
            this.injectPlayer();
            if (this.params['play-button']) this.generateActionButton({
                name: 'play',
                className: 'play-toggle',
                innerHtml: '<i class="fa"></i>',
                initialState: false,
                stateClassName: 'paused',
                condition_parameter: 'autoplay',
                stateChildClassNames: [
                    'fa-pause-circle',
                    'fa-play-circle'
                ],
                actions: [
                    'play',
                    'pause'
                ]
            });
            if (this.params['mute-button']) this.generateActionButton({
                name: 'mute',
                className: 'mute-toggle',
                innerHtml: '<i class="fa"></i>',
                initialState: true,
                stateClassName: 'muted',
                condition_parameter: 'muted',
                stateChildClassNames: [
                    'fa-volume-up',
                    'fa-volume-mute'
                ],
                actions: [
                    'unmute',
                    'mute'
                ]
            });
        };
        this.__init__();
    }
    YoutubeBackground.prototype.initYTPlayer = function() {
        const self = this;
        if (window.hasOwnProperty('YT')) this.player = new YT.Player(this.uid, {
            events: {
                'onReady': function(event) {
                    self.onVideoPlayerReady(event);
                },
                'onStateChange': function(event) {
                    self.onVideoStateChange(event);
                },
                'onError': function(event) {
                //console.error('player_api', event);
                }
            }
        });
    };
    YoutubeBackground.prototype.seekTo = function(seconds) {
        if (seconds > 0) this.player.seekTo(seconds, true);
    };
    YoutubeBackground.prototype.onVideoPlayerReady = function(event) {
        if (this.params.autoplay) {
            this.seekTo(this.params['start-at']);
            this.player.playVideo();
        }
    };
    YoutubeBackground.prototype.onVideoStateChange = function(event) {
        if (event.data === 0 && this.params.loop) {
            this.seekTo(this.params['start-at']);
            this.player.playVideo();
        }
        if (event.data === -1 && this.params.autoplay) {
            this.seekTo(this.params['start-at']);
            this.player.playVideo();
            this.element.dispatchEvent(new CustomEvent('video-background-play', {
                bubbles: true,
                detail: this
            }));
        }
        if (event.data === 1) this.iframe.style.opacity = 1;
        this.params["onStatusChange"](event);
    };
    YoutubeBackground.prototype.injectPlayer = function() {
        this.iframe = document.createElement('iframe');
        this.iframe.setAttribute('frameborder', 0);
        this.iframe.setAttribute('allow', 'autoplay; mute');
        let src = `https://www.youtube.com/embed/${this.ytid}?&enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0`;
        if (this.params.muted) src += '&mute=1';
        if (this.params.autoplay) src += '&autoplay=1';
        if (this.params.loop) src += '&loop=1';
        if (this.params['end-at'] > 0) src += `&end=${this.params['end-at']}`;
        this.iframe.src = src;
        if (this.uid) this.iframe.id = this.uid;
        if (this.params['inline-styles']) {
            this.iframe.style.top = '50%';
            this.iframe.style.left = '50%';
            this.iframe.style.transform = 'translateX(-50%) translateY(-50%)';
            this.iframe.style.position = 'absolute';
            this.iframe.style.opacity = 0;
        }
        this.element.appendChild(this.iframe);
        if (this.params['fit-box']) {
            this.iframe.style.width = '100%';
            this.iframe.style.height = '100%';
        } else {
            const self = this;
            //TODO❗️: maybe a spacer or at least add requestAnimationFrame
            function onResize() {
                const h = self.iframe.parentNode.offsetHeight + self.params.offset; // since showinfo is deprecated and ignored after September 25, 2018. we add +200 to hide it in the overflow
                const w = self.iframe.parentNode.offsetWidth + self.params.offset;
                const res = self.params.resolution_mod;
                if (res > w / h) {
                    self.iframe.style.width = h * res + 'px';
                    self.iframe.style.height = h + 'px';
                } else {
                    self.iframe.style.width = w + 'px';
                    self.iframe.style.height = w / res + 'px';
                }
            }
            if (window.hasOwnProperty('ResizeObserver')) {
                const resize_observer = new ResizeObserver(()=>{
                    window.requestAnimationFrame(onResize);
                });
                resize_observer.observe(this.element);
            } else window.addEventListener('resize', ()=>{
                window.requestAnimationFrame(onResize);
            });
            onResize();
        }
    };
    YoutubeBackground.prototype.buildHTML = function() {
        const parent = this.element.parentNode;
        // wrap
        addClass(this.element, 'youtube-background video-background');
        //set css rules
        const wrapper_styles = {
            "height": "100%",
            "width": "100%",
            "z-index": "0",
            "position": "absolute",
            "overflow": "hidden",
            "top": 0,
            "left": 0,
            "bottom": 0,
            "right": 0
        };
        if (!this.params['mute-button']) wrapper_styles["pointer-events"] = "none"; // avoid right mouse click popup menu
        if (this.params['load-background'] || this.params['poster']) {
            if (this.params['load-background']) wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/' + this.ytid + '/maxresdefault.jpg)';
            if (this.params['poster']) wrapper_styles['background-image'] = this.params['poster'];
            wrapper_styles['background-size'] = 'cover';
            wrapper_styles['background-repeat'] = 'no-repeat';
            wrapper_styles['background-position'] = 'center';
        }
        if (this.params['inline-styles']) {
            for(let property in wrapper_styles)this.element.style[property] = wrapper_styles[property];
            if (![
                'absolute',
                'fixed',
                'relative',
                'sticky'
            ].indexOf(parent.style.position)) parent.style.position = 'relative';
        }
        if (this.is_mobile && !this.params.mobile) return this.element;
        // set play/mute controls wrap
        if (this.params['play-button'] || this.params['mute-button']) {
            const controls = document.createElement('div');
            controls.className = 'video-background-controls';
            controls.style.position = 'absolute';
            controls.style.top = '10px';
            controls.style.right = '10px';
            controls.style['z-index'] = 2;
            this.controls_element = controls;
            parent.appendChild(controls);
        }
        return this.element;
    };
    YoutubeBackground.prototype.play = function() {
        //TODO: solve this with ARIA toggle states. P.S. warning repetitive code!!!
        if (this.buttons.hasOwnProperty('play')) {
            const btn_obj = this.buttons.play;
            removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            if (this.params['start-at'] && this.player.getCurrentTime() < this.params['start-at']) this.seekTo(this.params['start-at']);
            this.player.playVideo();
            this.element.dispatchEvent(new CustomEvent('video-background-play', {
                bubbles: true,
                detail: this
            }));
        }
    };
    YoutubeBackground.prototype.pause = function() {
        //TODO: solve this with ARIA toggle states
        if (this.buttons.hasOwnProperty('play')) {
            const btn_obj = this.buttons.play;
            addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            this.player.pauseVideo();
            this.element.dispatchEvent(new CustomEvent('video-background-pause', {
                bubbles: true,
                detail: this
            }));
        }
    };
    YoutubeBackground.prototype.unmute = function() {
        //TODO: solve this with ARIA toggle states
        if (this.buttons.hasOwnProperty('mute')) {
            const btn_obj = this.buttons.mute;
            removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            this.player.unMute();
            this.element.dispatchEvent(new CustomEvent('video-background-unmute', {
                bubbles: true,
                detail: this
            }));
        }
    };
    YoutubeBackground.prototype.mute = function() {
        //TODO: solve this with ARIA toggle states
        if (this.buttons.hasOwnProperty('mute')) {
            const btn_obj = this.buttons.mute;
            addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            this.player.mute();
            this.element.dispatchEvent(new CustomEvent('video-background-mute', {
                bubbles: true,
                detail: this
            }));
        }
    };
    //TODO: refactor states to be equal for all buttons
    YoutubeBackground.prototype.generateActionButton = function(obj) {
        const btn = document.createElement('button');
        btn.className = obj.className;
        btn.innerHTML = obj.innerHtml;
        addClass(btn.firstChild, obj.stateChildClassNames[0]);
        //TODO: solve this with ARIA toggle states
        if (this.params[obj.condition_parameter] === obj.initialState) {
            addClass(btn, obj.stateClassName);
            removeClass(btn.firstChild, obj.stateChildClassNames[0]);
            addClass(btn.firstChild, obj.stateChildClassNames[1]);
        }
        const self = this;
        btn.addEventListener('click', function(e) {
            if (hasClass(this, obj.stateClassName)) {
                self.state[obj.name] = false;
                self[obj.actions[0]]();
            } else {
                self.state[obj.name] = true;
                self[obj.actions[1]]();
            }
        });
        this.buttons[obj.name] = {
            element: btn,
            button_properties: obj
        };
        this.controls_element.appendChild(btn);
    };
    function VimeoBackground(elem, params, id, uid) {
        this.is_mobile = isMobile();
        this.element = elem;
        this.vid = id;
        this.uid = uid;
        this.player = null;
        this.buttons = {
        };
        this.state = {
        };
        this.state.play = false;
        this.state.mute = false;
        this.params = {
        };
        const DEFAULTS = {
            //    'pause': false, //deprecated
            //    'play-button': false,
            //    'mute-button': false,
            'autoplay': true,
            'muted': true,
            'loop': true,
            'mobile': false,
            //    'load-background': true,
            'resolution': '16:9',
            'inline-styles': true,
            'fit-box': false,
            'offset': 200,
            'start-at': 0,
            'poster': null
        };
        this.__init__ = function() {
            if (!this.vid) return;
            this.params = parseProperties(params, DEFAULTS, this.element, [
                'data-ytbg-',
                'data-vbg-'
            ]);
            //pause deprecated
            if (this.params.pause) this.params['play-button'] = this.params.pause;
            this.params.resolution_mod = parseResolutionString(this.params.resolution);
            this.state.playing = this.params.autoplay;
            this.state.muted = this.params.muted;
            this.buildHTML();
            this.injectPlayer();
        };
        this.__init__();
    }
    VimeoBackground.prototype.injectPlayer = function() {
        this.iframe = document.createElement('iframe');
        this.iframe.setAttribute('frameborder', 0);
        this.iframe.setAttribute('allow', [
            'autoplay; mute'
        ]);
        let src = 'https://player.vimeo.com/video/' + this.vid + '?background=1&controls=0';
        if (this.params.muted) src += '&muted=1';
        if (this.params.autoplay) src += '&autoplay=1';
        if (this.params.loop) src += '&loop=1&autopause=0';
        //WARN❗️ this is a hash not a query param
        if (this.params['start-at']) src += '#t=' + this.params['start-at'] + 's';
        this.iframe.src = src;
        if (this.uid) this.iframe.id = this.uid;
        if (this.params['load-background'] || this.params['poster']) {
            //if (this.params['load-background']) wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.ytid+'/maxresdefault.jpg)';
            if (this.params['poster']) wrapper_styles['background-image'] = this.params['poster'];
            wrapper_styles['background-size'] = 'cover';
            wrapper_styles['background-repeat'] = 'no-repeat';
            wrapper_styles['background-position'] = 'center';
        }
        if (this.params['inline-styles']) {
            this.iframe.style.top = '50%';
            this.iframe.style.left = '50%';
            this.iframe.style.transform = 'translateX(-50%) translateY(-50%)';
            this.iframe.style.position = 'absolute';
            this.iframe.style.opacity = 1;
        }
        this.element.appendChild(this.iframe);
        if (this.params['fit-box']) {
            this.iframe.style.width = '100%';
            this.iframe.style.height = '100%';
        } else {
            const self = this;
            const onResize = function() {
                const h = self.iframe.parentNode.offsetHeight + self.params.offset; // since showinfo is deprecated and ignored after September 25, 2018. we add +200 to hide it in the overflow
                const w = self.iframe.parentNode.offsetWidth + self.params.offset;
                const res = self.params.resolution_mod;
                if (res > w / h) {
                    self.iframe.style.width = h * res + 'px';
                    self.iframe.style.height = h + 'px';
                } else {
                    self.iframe.style.width = w + 'px';
                    self.iframe.style.height = w / res + 'px';
                }
            };
            if (window.hasOwnProperty('ResizeObserver')) {
                const resize_observer = new ResizeObserver(()=>{
                    window.requestAnimationFrame(onResize);
                });
                resize_observer.observe(this.element);
            } else window.addEventListener('resize', ()=>{
                window.requestAnimationFrame(onResize);
            });
            onResize();
        }
    };
    VimeoBackground.prototype.buildHTML = function() {
        const parent = this.element.parentNode;
        // wrap
        addClass(this.element, 'youtube-background');
        //set css rules
        const wrapper_styles = {
            "height": "100%",
            "width": "100%",
            "z-index": "0",
            "position": "absolute",
            "overflow": "hidden",
            "top": 0,
            "left": 0,
            "bottom": 0,
            "right": 0
        };
        if (this.params['load-background'] || this.params['poster']) {
            //if (this.params['load-background']) wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.ytid+'/maxresdefault.jpg)';
            if (this.params['poster']) wrapper_styles['background-image'] = this.params['poster'];
            wrapper_styles['background-size'] = 'cover';
            wrapper_styles['background-repeat'] = 'no-repeat';
            wrapper_styles['background-position'] = 'center';
        }
        if (!this.params['mute-button']) wrapper_styles["pointer-events"] = "none"; // avoid right mouse click popup menu
        if (this.params['load-background']) {
            //TODO: wrapper_styles['background-image'] = 'url(https://img.youtube.com/vi/'+this.vid+'/maxresdefault.jpg)';
            wrapper_styles['background-size'] = 'cover';
            wrapper_styles['background-repeat'] = 'no-repeat';
            wrapper_styles['background-position'] = 'center';
        }
        if (this.params['inline-styles']) {
            for(let property in wrapper_styles)this.element.style[property] = wrapper_styles[property];
            if (![
                'absolute',
                'fixed',
                'relative',
                'sticky'
            ].indexOf(parent.style.position)) parent.style.position = 'relative';
        }
        return this.element;
    };
    function VideoBackground(elem, params, vid_data, uid) {
        this.is_mobile = isMobile();
        this.element = elem;
        this.link = vid_data.link;
        this.ext = vid_data.id;
        this.uid = uid;
        this.player = null;
        this.buttons = {
        };
        this.state = {
        };
        this.state.play = false;
        this.state.mute = false;
        this.params = {
        };
        const MIME_MAP = {
            'ogv': 'video/ogg',
            'ogm': 'video/ogg',
            'ogg': 'video/ogg',
            'avi': 'video/avi',
            'mp4': 'video/mp4',
            'webm': 'video/webm'
        };
        const DEFAULTS = {
            'pause': false,
            'play-button': false,
            'mute-button': false,
            'autoplay': true,
            'muted': true,
            'loop': true,
            'mobile': false,
            'resolution': '16:9',
            'inline-styles': true,
            'fit-box': false,
            'offset': 200,
            //    'start-at': 0,
            //    'end-at': 0,
            'poster': null
        };
        this.__init__ = function() {
            if (!this.link || !this.ext) return;
            this.mime = MIME_MAP[this.ext.toLowerCase()];
            this.params = parseProperties(params, DEFAULTS, this.element, [
                'data-ytbg-',
                'data-vbg-'
            ]);
            //pause deprecated
            if (this.params.pause) this.params['play-button'] = this.params.pause;
            this.params.resolution_mod = parseResolutionString(this.params.resolution);
            this.state.playing = this.params.autoplay;
            this.state.muted = this.params.muted;
            this.buildHTML();
            this.injectPlayer();
            if (this.params['play-button']) this.generateActionButton({
                name: 'play',
                className: 'play-toggle',
                innerHtml: '<i class="fa"></i>',
                initialState: false,
                stateClassName: 'paused',
                condition_parameter: 'autoplay',
                stateChildClassNames: [
                    'fa-pause-circle',
                    'fa-play-circle'
                ],
                actions: [
                    'play',
                    'pause'
                ]
            });
            if (this.params['mute-button']) this.generateActionButton({
                name: 'mute',
                className: 'mute-toggle',
                innerHtml: '<i class="fa"></i>',
                initialState: true,
                stateClassName: 'muted',
                condition_parameter: 'muted',
                stateChildClassNames: [
                    'fa-volume-up',
                    'fa-volume-mute'
                ],
                actions: [
                    'unmute',
                    'mute'
                ]
            });
        };
        this.__init__();
    }
    VideoBackground.prototype.seekTo = function(seconds) {
        if (this.player.hasOwnProperty('fastSeek')) {
            this.player.fastSeek(seconds);
            return;
        }
        this.player.currentTime = seconds;
    };
    VideoBackground.prototype.injectPlayer = function() {
        this.player = document.createElement('video');
        this.player.muted = this.params.muted;
        this.player.autoplay = this.params.autoplay;
        this.player.loop = this.params.loop;
        this.player.playsinline = true;
        this.player.setAttribute('id', this.uid);
        if (this.params['inline-styles']) {
            this.player.style.top = '50%';
            this.player.style.left = '50%';
            this.player.style.transform = 'translateX(-50%) translateY(-50%)';
            this.player.style.position = 'absolute';
            this.player.style.opacity = 0;
            this.player.addEventListener('canplay', (e)=>{
                e.target.style.opacity = 1;
            });
        }
        const self = this;
        /*
    this.player.addEventListener('canplay', (e) => {
      if (self.params['start-at'] && self.params.autoplay) {
        self.seekTo(self.params['start-at']);
      }
    });

    this.player.addEventListener('canplaythrough', (e) => {
      if (self.params['end-at'] > 0) {
      self.player.addEventListener('timeupdate', (e) => {
        if (self.params['end-at'] >= self.player.currentTime) {
          self.seekTo(self.params['start-at']);
        }
      });
    }
    });
    */ const source = document.createElement('source');
        source.setAttribute('src', this.link);
        source.setAttribute('type', this.mime);
        this.player.appendChild(source);
        this.element.appendChild(this.player);
        if (this.params['fit-box']) {
            this.player.style.width = '100%';
            this.player.style.height = '100%';
        } else {
            //TODO❗️: maybe a spacer or at least add requestAnimationFrame
            function onResize() {
                const h = self.player.parentNode.offsetHeight + self.params.offset; // since showinfo is deprecated and ignored after September 25, 2018. we add +200 to hide it in the overflow
                const w = self.player.parentNode.offsetWidth + self.params.offset;
                const res = self.params.resolution_mod;
                if (res > w / h) {
                    self.player.style.width = h * res + 'px';
                    self.player.style.height = h + 'px';
                } else {
                    self.player.style.width = w + 'px';
                    self.player.style.height = w / res + 'px';
                }
            }
            if (window.hasOwnProperty('ResizeObserver')) {
                const resize_observer = new ResizeObserver(()=>{
                    window.requestAnimationFrame(onResize);
                });
                resize_observer.observe(this.element);
            } else window.addEventListener('resize', ()=>{
                window.requestAnimationFrame(onResize);
            });
            onResize();
        }
    };
    VideoBackground.prototype.buildHTML = function() {
        const parent = this.element.parentNode;
        // wrap
        addClass(this.element, 'video-background');
        //set css rules
        const wrapper_styles = {
            "height": "100%",
            "width": "100%",
            "z-index": "0",
            "position": "absolute",
            "overflow": "hidden",
            "top": 0,
            "left": 0,
            "bottom": 0,
            "right": 0
        };
        if (!this.params['mute-button']) wrapper_styles["pointer-events"] = "none"; // avoid right mouse click popup menu
        if (this.params['load-background'] || this.params['poster']) {
            if (this.params['poster']) wrapper_styles['background-image'] = `url('${this.params['poster']}')`;
            wrapper_styles['background-size'] = 'cover';
            wrapper_styles['background-repeat'] = 'no-repeat';
            wrapper_styles['background-position'] = 'center';
        }
        if (this.params['inline-styles']) {
            for(let property in wrapper_styles)this.element.style[property] = wrapper_styles[property];
            if (![
                'absolute',
                'fixed',
                'relative',
                'sticky'
            ].indexOf(parent.style.position)) parent.style.position = 'relative';
        }
        if (this.is_mobile && !this.params.mobile) return this.element;
        // set play/mute controls wrap
        if (this.params['play-button'] || this.params['mute-button']) {
            const controls = document.createElement('div');
            controls.className = 'video-background-controls';
            controls.style.position = 'absolute';
            controls.style.top = '10px';
            controls.style.right = '10px';
            controls.style['z-index'] = 2;
            this.controls_element = controls;
            parent.appendChild(controls);
        }
        return this.element;
    };
    VideoBackground.prototype.play = function() {
        //TODO: solve this with ARIA toggle states. P.S. warning repetitive code!!!
        if (this.buttons.hasOwnProperty('play')) {
            const btn_obj = this.buttons.play;
            removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            /* if (this.params['start-at'] && this.player.currentTime < this.params['start-at'] ) {
        this.seekTo(this.params['start-at']);
      } */ this.player.play();
            this.element.dispatchEvent(new CustomEvent('video-background-play', {
                bubbles: true,
                detail: this
            }));
        }
    };
    VideoBackground.prototype.pause = function() {
        //TODO: solve this with ARIA toggle states
        if (this.buttons.hasOwnProperty('play')) {
            const btn_obj = this.buttons.play;
            addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            this.player.pause();
            this.element.dispatchEvent(new CustomEvent('video-background-pause', {
                bubbles: true,
                detail: this
            }));
        }
    };
    VideoBackground.prototype.unmute = function() {
        //TODO: solve this with ARIA toggle states
        if (this.buttons.hasOwnProperty('mute')) {
            const btn_obj = this.buttons.mute;
            removeClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            this.player.muted = false;
            this.element.dispatchEvent(new CustomEvent('video-background-unmute', {
                bubbles: true,
                detail: this
            }));
        }
    };
    VideoBackground.prototype.mute = function() {
        //TODO: solve this with ARIA toggle states
        if (this.buttons.hasOwnProperty('mute')) {
            const btn_obj = this.buttons.mute;
            addClass(btn_obj.element, btn_obj.button_properties.stateClassName);
            removeClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[0]);
            addClass(btn_obj.element.firstChild, btn_obj.button_properties.stateChildClassNames[1]);
        }
        if (this.player) {
            this.player.muted = true;
            this.element.dispatchEvent(new CustomEvent('video-background-mute', {
                bubbles: true,
                detail: this
            }));
        }
    };
    //TODO: refactor states to be equal for all buttons
    VideoBackground.prototype.generateActionButton = function(obj) {
        const btn = document.createElement('button');
        btn.className = obj.className;
        btn.innerHTML = obj.innerHtml;
        addClass(btn.firstChild, obj.stateChildClassNames[0]);
        //TODO: solve this with ARIA toggle states
        if (this.params[obj.condition_parameter] === obj.initialState) {
            addClass(btn, obj.stateClassName);
            removeClass(btn.firstChild, obj.stateChildClassNames[0]);
            addClass(btn.firstChild, obj.stateChildClassNames[1]);
        }
        const self = this;
        btn.addEventListener('click', function(e) {
            if (hasClass(this, obj.stateClassName)) {
                self.state[obj.name] = false;
                self[obj.actions[0]]();
            } else {
                self.state[obj.name] = true;
                self[obj.actions[1]]();
            }
        });
        this.buttons[obj.name] = {
            element: btn,
            button_properties: obj
        };
        this.controls_element.appendChild(btn);
    };
    function VideoBackgrounds(selector, params) {
        this.elements = selector;
        if (typeof selector === 'string') this.elements = document.querySelectorAll(selector);
        this.index = {
        };
        this.re = {
        };
        this.re.YOUTUBE = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
        this.re.VIMEO = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i;
        this.re.VIDEO = /\/[^\/]+\.(mp4|ogg|ogv|ogm|webm|avi)\s?$/i;
        this.__init__ = function() {
            for(let i = 0; i < this.elements.length; i++){
                const element = this.elements[i];
                const link = element.getAttribute('data-youtube') || element.getAttribute('data-vbg');
                const vid_data = this.getVidID(link);
                if (!vid_data) continue;
                const uid = this.generateUID(vid_data.id);
                if (!uid) continue;
                switch(vid_data.type){
                    case 'YOUTUBE':
                        const yb = new YoutubeBackground(element, params, vid_data.id, uid);
                        this.index[uid] = yb;
                        break;
                    case 'VIMEO':
                        const vm = new VimeoBackground(element, params, vid_data.id, uid);
                        this.index[uid] = vm;
                        break;
                    case 'VIDEO':
                        const vid = new VideoBackground(element, params, vid_data, uid);
                        this.index[uid] = vid;
                        break;
                }
            }
            this.initYTPlayers();
        };
        this.__init__();
    }
    VideoBackgrounds.prototype.getVidID = function(link) {
        if (link !== undefined && link !== null) for(let k in this.re){
            const pts = link.match(this.re[k]);
            if (pts && pts.length) {
                this.re[k].lastIndex = 0;
                return {
                    id: pts[1],
                    type: k,
                    regex_pts: pts,
                    link: link
                };
            }
        }
        return null;
    };
    VideoBackgrounds.prototype.generateUID = function(pref) {
        //index the instance
        let uid = pref + '-' + getRandomIntInclusive(0, 9999);
        while(this.index.hasOwnProperty(uid))uid = pref + '-' + getRandomIntInclusive(0, 9999);
        return uid;
    };
    VideoBackgrounds.prototype.pauseVideos = function() {
        for(let k in this.index)this.index[k].pause();
    };
    VideoBackgrounds.prototype.playVideos = function() {
        for(let k in this.index)this.index[k].play();
    };
    VideoBackgrounds.prototype.initYTPlayers = function(callback) {
        const self = this;
        window.onYouTubeIframeAPIReady = function() {
            for(let k in self.index)if (self.index[k] instanceof YoutubeBackground) self.index[k].initYTPlayer();
            if (callback) setTimeout(callback, 100);
        };
        if (window.hasOwnProperty('YT') && window.YT.loaded) window.onYouTubeIframeAPIReady();
    };
    if (typeof jQuery == 'function') (function($) {
        $.fn.youtube_background = function(params) {
            const $this = $(this);
            new VideoBackgrounds(this, params);
            return $this;
        };
    })(jQuery);
    window.VideoBackgrounds = VideoBackgrounds;
})();

},{}]},["66NjM","6rimH"], "6rimH", "parcelRequire905d")

//# sourceMappingURL=index.8cfc62b9.js.map
