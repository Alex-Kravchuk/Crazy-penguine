// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"21c8X":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
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
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
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
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "stopFalling", function () {
  return stopFalling;
});
_parcelHelpers.export(exports, "movePipesID", function () {
  return movePipesID;
});
_parcelHelpers.export(exports, "addingPipesID", function () {
  return addingPipesID;
});
var _move_penguin = require("./move_penguin");
var _main_screen = require('./main_screen');
var _move_tubeField = require('./move_tube-field');
require("/src/styles/main_screen.scss");
let startBtn = document.querySelector('.start');
let screen = document.querySelector('.main__screen-start');
let stopFalling;
let movePipesID;
let addingPipesID;
startBtn.addEventListener('click', () => {
  screen.classList.add('hidden');
  _move_tubeField.addTube();
  setTimeout(() => {
    _main_screen.removeMainScreen();
  }, 500);
  movePipesID = setInterval(() => {
    _move_tubeField.moveTube();
  }, 100);
  addingPipesID = setInterval(() => {
    _move_tubeField.addTube();
  }, 3400);
  stopFalling = setInterval(_move_penguin.fallingPenguin, 60);
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  screen.classList.add('hidden');
  _move_tubeField.addTube();
  setTimeout(_main_screen.removeMainScreen, 500);
  movePipesID = setInterval(() => {
    _move_tubeField.moveTube();
  }, 100);
  addingPipesID = setInterval(() => {
    _move_tubeField.addTube();
  }, 3400);
  stopFalling = setInterval(_move_penguin.fallingPenguin, 60);
});

},{"./move_penguin":"1JDcf","./main_screen":"1uIm9","./move_tube-field":"5VBTq","/src/styles/main_screen.scss":"7MPVj","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"1JDcf":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "fallingPenguin", function () {
  return fallingPenguin;
});
_parcelHelpers.export(exports, "penguinField", function () {
  return penguinField;
});
_parcelHelpers.export(exports, "pinguenMove", function () {
  return pinguenMove;
});
_parcelHelpers.export(exports, "pinguenNotMove", function () {
  return pinguenNotMove;
});
_parcelHelpers.export(exports, "loss", function () {
  return loss;
});
_parcelHelpers.export(exports, "penguinImg", function () {
  return penguinImg;
});
_parcelHelpers.export(exports, "addEventListeners", function () {
  return addEventListeners;
});
_parcelHelpers.export(exports, "deleteAllEventListener", function () {
  return deleteAllEventListener;
});
var _main_screen = require('./main_screen');
var _game_over = require('./game_over');
var _indexJs = require('./index.js');
var _pause_game = require('./pause_game');
var _sounds_for_game = require('./sounds_for_game');
var _urlSrcImgPing_movePng = require('url:/src/img/ping_move.png');
var _urlSrcImgPing_movePngDefault = _parcelHelpers.interopDefault(_urlSrcImgPing_movePng);
var _urlSrcImgPing_normalPng = require('url:/src/img/ping_normal.png');
var _urlSrcImgPing_normalPngDefault = _parcelHelpers.interopDefault(_urlSrcImgPing_normalPng);
let penguinImg = document.getElementById('pinguen');
let penguinField = document.querySelector('.game__character');
let position = 50;
let incline = 0;
let keystroke = false;
let loss = false;
addEventListeners();
function fallingPenguin(moveUp = false, restart) {
  if (_main_screen.gameScreen.hidden) return;
  if (checkBorders()) {
    clearInterval(_indexJs.stopFalling);
    clearInterval(_game_over.stopFallingForRestartID);
    clearInterval(_pause_game.resumeGameID);
    _game_over.gameOver();
    deleteAllEventListener();
    // resetting the starting position
    position = 50;
    if (restart) return;
    return;
  }
  if (moveUp) {
    position -= 4;
    incline += 10;
    penguinField.style.top = position + '%';
    penguinImg.style.transform = `rotate(-${incline}deg)`;
  } else {
    // leveling the penguin
    if (incline = !0) incline--;
    penguinField.style.top = ++position + '%';
    penguinImg.style.transform = `rotate(${incline}deg)`;
  }
}
function checkBorders() {
  let chords = penguinField.getBoundingClientRect();
  if (chords.bottom > document.documentElement.clientHeight) {
    loss = true;
    return loss;
  }
  loss = false;
  return loss;
}
function pinguenMove(e) {
  // console.log(penguinMove.default );
  if (_pause_game.pause) return;
  if (e.target.parentElement.id == 'pause') return;
  if (_main_screen.gameScreen.hidden) return;
  if (!keystroke) {
    keystroke = true;
  } else {
    return;
  }
  if (e.key == ' ' || e.type == 'touchstart') {
    penguinImg.src = _urlSrcImgPing_movePngDefault.default;
    _sounds_for_game.makeSomeNoise('wings');
    fallingPenguin(true);
  } else {
    return;
  }
}
function pinguenNotMove(e) {
  if (_pause_game.pause) return;
  if (e.target.parentElement.id == 'pause') return;
  if (_main_screen.gameScreen.hidden) return;
  if (e.key == ' ' || e.type == 'touchend') {
    penguinImg.src = _urlSrcImgPing_normalPngDefault.default;
    keystroke = false;
  } else {
    return;
  }
}
function deleteAllEventListener() {
  document.removeEventListener('keydown', pinguenMove);
  document.removeEventListener('keyup', pinguenMove);
  document.removeEventListener('touchstart', pinguenMove);
  document.removeEventListener('touchend', pinguenNotMove);
}
function addEventListeners() {
  document.addEventListener('keydown', pinguenMove);
  document.addEventListener('keyup', pinguenNotMove);
  document.addEventListener('touchstart', pinguenMove);
  document.addEventListener('touchend', pinguenNotMove);
}

},{"./main_screen":"1uIm9","./game_over":"3IVat","./index.js":"3L8AI","./pause_game":"1fh66","./sounds_for_game":"7JZKd","url:/src/img/ping_move.png":"vrpFV","url:/src/img/ping_normal.png":"3xDZC","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"1uIm9":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "gameScreen", function () {
  return gameScreen;
});
_parcelHelpers.export(exports, "removeMainScreen", function () {
  return removeMainScreen;
});
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
function moveClouds() {
  let cloud1Width = cloud1.offsetWidth;
  let cloud2Width = cloud2.offsetWidth;
  let cloud1Chords = cloud1.getBoundingClientRect();
  let cloud2Chords = cloud2.getBoundingClientRect();
  if (document.documentElement.clientWidth < cloud1Chords.x) {
    cloud1.style.left = -cloud1Width + 'px';
    cloud1Chords = cloud1.getBoundingClientRect();
  }
  if (cloud2Chords.x + cloud2Width < 0) {
    cloud2.style.left = document.documentElement.clientWidth + 'px';
    cloud2Chords = cloud2.getBoundingClientRect();
  }
  cloud1.style.left = cloud1Chords.x + 1 + 'px';
  cloud2.style.left = cloud2Chords.x - 1.5 + 'px';
}
setInterval(moveClouds, 50);
// hide mainScreen
let screen = document.querySelector('.main__screen-start');
let startBtn = document.querySelector('.start');
let gameScreen = document.querySelector('.game__screen');
startBtn.addEventListener('pointerdown', () => {
  startBtn.classList.add('start-click');
});
startBtn.addEventListener('pointerup', () => {
  startBtn.classList.remove('start-click');
});
function removeMainScreen() {
  screen.remove();
  gameScreen.hidden = false;
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"SsztI":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"3IVat":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "gameOver", function () {
  return gameOver;
});
_parcelHelpers.export(exports, "stopFallingForRestartID", function () {
  return stopFallingForRestartID;
});
_parcelHelpers.export(exports, "restartMovePipesID", function () {
  return restartMovePipesID;
});
_parcelHelpers.export(exports, "restartAddingPipesID", function () {
  return restartAddingPipesID;
});
_parcelHelpers.export(exports, "impactCheck", function () {
  return impactCheck;
});
var _index = require('./index');
var _main_screen = require('./main_screen');
var _move_penguin = require('./move_penguin');
var _move_tubeField = require('./move_tube-field');
var _pause_game = require('./pause_game');
var _sounds_for_game = require('./sounds_for_game');
let stopFallingForRestartID;
let restartMovePipesID;
let restartAddingPipesID;
let restartMove = true;
let score = document.getElementById('score');
function gameOver() {
  if (checkGameOverScreen() == 1) return;
  _main_screen.gameScreen.insertAdjacentHTML('beforeend', `<div class="game__over-screen">
	<div class="game__over-message">
		<div class="game__over-text">
			Game Over
		</div>
		<div class="game__over-rebut">
			<i class="fas fa-redo-alt" id = "restart"></i>
		</div>
	</div>
</div>`);
  _sounds_for_game.makeSomeNoise('fall');
  // stop all intervals
  clearInterval(_index.movePipesID);
  clearInterval(_index.addingPipesID);
  clearInterval(_pause_game.resumeMovePipesFieldID);
  clearInterval(_pause_game.resumeAddingPipesOnFieldID);
  clearInterval(restartMovePipesID);
  clearInterval(restartAddingPipesID);
  let gameOverScreen = document.querySelector('.game__over-screen');
  let restart = document.getElementById('restart');
  let pipesField = document.querySelector('.game__tube-field');
  restart.addEventListener('click', () => {
    clearInterval(_index.stopFalling);
    restartMove = true;
    // clear pipe field
    pipesField.innerHTML = '';
    score.innerHTML = 0;
    if (stopFallingForRestartID) {
      clearInterval(stopFallingForRestartID);
      clearInterval(restartAddingPipesID);
      clearInterval(restartMovePipesID);
      clearInterval(_pause_game.resumeMovePipesFieldID);
      clearInterval(_pause_game.resumeAddingPipesOnFieldID);
    } else if (_pause_game.resumeGameID) {
      clearInterval(_pause_game.resumeGameID);
    }
    gameOverScreen.classList.add('game__over-screen-hidden');
    setTimeout(() => {
      gameOverScreen.remove();
    }, 1000);
    // resetting the starting position
    _move_penguin.penguinField.style.top = 50 + '%';
    _move_penguin.addEventListeners();
    stopFallingForRestartID = setInterval(() => {
      _move_penguin.fallingPenguin(null, true);
    }, 60);
    restartAddingPipesID = setInterval(() => {
      _move_tubeField.addTube();
    }, 3400);
    restartMovePipesID = setInterval(() => {
      _move_tubeField.moveTube(restartMove);
      restartMove = false;
    }, 100);
    return;
  });
}
let checkGameOverScreen = () => {
  let check = 0;
  let arr = Array.from(_main_screen.gameScreen.children);
  arr.filter(item => {
    if (item.classList.contains('game__over-screen')) check++;
  });
  return check;
};
function impactCheck(pipe) {
  if (_main_screen.gameScreen.hidden) return;
  // coords of penguine
  let coords = _move_penguin.penguinImg.getBoundingClientRect();
  let centerCoordsYHead = coords.y + _move_penguin.penguinImg.offsetHeight / 2;
  let centerCoordsXHead = coords.x + _move_penguin.penguinImg.offsetWidth;
  let centerCoordsYBody = coords.y + _move_penguin.penguinImg.offsetHeight / 2;
  let centerCoordsXBody = coords.x + _move_penguin.penguinImg.offsetWidth / 2;
  // coords of pipe
  let topPipeCoords = pipe.firstElementChild.getBoundingClientRect();
  let bottomPipeCoords = pipe.lastElementChild.getBoundingClientRect();
  let pipeWidth = pipe.offsetWidth;
  let topPipeHeight = pipe.offsetHeight;
  let bottomPipeHeight = pipe.offsetHeight;
  let rangeXbottomPipe = bottomPipeCoords.x + pipeWidth;
  let rangeYbottomPipe = bottomPipeCoords.y + bottomPipeHeight;
  let rangeXtopPipe = topPipeCoords.x + pipeWidth;
  let rangeYtopPipe = topPipeCoords.y + topPipeHeight;
  let checkTopPipe = rangeCheck('X', 'top') && rangeCheck('Y', 'top');
  let checkBottomPipe = rangeCheck('X', 'bottom') && rangeCheck('Y', 'bottom');
  if (checkBottomPipe || checkTopPipe) {
    _sounds_for_game.makeSomeNoise('fall');
    gameOver(true);
    _move_penguin.deleteAllEventListener();
  }
  function rangeCheck(axis, side) {
    if (side == 'bottom') {
      if (axis == 'X') {
        let checkHead = centerCoordsXHead > bottomPipeCoords.x && centerCoordsXHead < rangeXbottomPipe;
        let checkBody = centerCoordsXBody > bottomPipeCoords.x && centerCoordsXBody < rangeXbottomPipe;
        return checkHead || checkBody;
      }
      if (axis == 'Y') {
        let checkHead = centerCoordsYHead > bottomPipeCoords.y && centerCoordsYHead < rangeYbottomPipe;
        let checkBody = centerCoordsYBody > bottomPipeCoords.y && centerCoordsYBody < rangeYbottomPipe;
        return checkHead || checkBody;
      }
    }
    if (side == 'top') {
      if (axis == 'X') {
        let checkHead = centerCoordsXHead > topPipeCoords.x && centerCoordsXHead < rangeXtopPipe;
        let checkBody = centerCoordsXBody > topPipeCoords.x && centerCoordsXBody < rangeXtopPipe;
        return checkHead || checkBody;
      }
      if (axis == 'Y') {
        let checkHead = centerCoordsYHead < topPipeCoords.bottom && centerCoordsYHead < rangeYtopPipe;
        let checkBody = centerCoordsYBody < topPipeCoords.bottom && centerCoordsYBody < rangeYtopPipe;
        return checkHead || checkBody;
      }
    }
  }
}

},{"./index":"3L8AI","./main_screen":"1uIm9","./move_penguin":"1JDcf","./move_tube-field":"5VBTq","./pause_game":"1fh66","./sounds_for_game":"7JZKd","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"5VBTq":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "addTube", function () {
  return addTube;
});
_parcelHelpers.export(exports, "moveTube", function () {
  return moveTube;
});
_parcelHelpers.export(exports, "tubeField", function () {
  return tubeField;
});
var _game_over = require('./game_over');
var _scoring = require('./scoring');
var _urlSrcImgTubePng = require("url:/src/img/tube.png");
var _urlSrcImgTubePngDefault = _parcelHelpers.interopDefault(_urlSrcImgTubePng);
let tubeField = document.querySelector('.game__tube-field');
let position = 1;
let constValue = 60;
let bias = 0;
function moveTube(restart) {
  let pipesField = document.querySelector('.game__tube-field');
  let checkpoints = Array.from(pipesField.children);
  // такий костиль шо я в ахуї
  if (bias) {
    for (let i = 0; i < bias; i++) {
      checkpoints.unshift(undefined);
    }
  }
  if (restart) {
    position = -20;
    bias = 0;
  }
  checkpoints.filter((item, index) => {
    if (item) {
      item.style.right = position - constValue * index + '%';
      let chords = item.getBoundingClientRect();
      let checkBorder = chords.left + item.offsetWidth;
      _game_over.impactCheck(item);
      _scoring.checkPipePassed(item);
      if (checkBorder < 0) {
        item.remove();
        bias++;
      }
    }
  });
  if (checkpoints.length >= 1) {
    position++;
  }
}
function addTube() {
  let screenHeight = document.documentElement.clientHeight;
  let penguinSize = document.getElementById('pinguen').offsetHeight + 150;
  let totalHeightOfPipes = screenHeight - penguinSize;
  let heightTopTube = totalHeightOfPipes * Math.random();
  let heightBottomTube = totalHeightOfPipes - heightTopTube;
  let children = document.querySelector('.game__tube-field').children;
  if (children.length > 3) return;
  tubeField.insertAdjacentHTML('beforeend', `<div class="game__tube-checkpoint">
  <div class="game__tube-up">
	  <img src="${_urlSrcImgTubePngDefault.default}" alt="" style="height:${heightTopTube}px">
  </div>
  <div class="game__tube-down">
	  <img src="${_urlSrcImgTubePngDefault.default}" alt="" style="height:${heightBottomTube}px">
  </div>
</div>`);
}

},{"./game_over":"3IVat","./scoring":"7lGqJ","url:/src/img/tube.png":"1GTWC","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"7lGqJ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "checkPipePassed", function () {
  return checkPipePassed;
});
var _sounds_for_game = require('./sounds_for_game');
let previousItem = null;
let score = document.getElementById('score');
function checkPipePassed(item) {
  if (item == previousItem) return;
  let penguinCoords = document.getElementById('pinguen').getBoundingClientRect();
  let itemCoords = item.getBoundingClientRect();
  let itemWidth = item.offsetWidth;
  if (itemCoords.x + itemWidth < penguinCoords.x) {
    pluseOnePoint();
    _sounds_for_game.playPluseScoreSound();
    previousItem = item;
  }
}
function pluseOnePoint() {
  let value = +score.innerHTML;
  score.innerHTML = ++value;
}

},{"./sounds_for_game":"7JZKd","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"7JZKd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "makeSomeNoise", function () {
  return makeSomeNoise;
});
_parcelHelpers.export(exports, "playPluseScoreSound", function () {
  return playPluseScoreSound;
});
var _urlSrcSoundsFlutteringItsWingsMp = require('url:/src/sounds/fluttering-its-wings.mp3');
var _urlSrcSoundsFlutteringItsWingsMpDefault = _parcelHelpers.interopDefault(_urlSrcSoundsFlutteringItsWingsMp);
var _urlSrcSoundsFallMp = require('url:/src/sounds/fall.mp3');
var _urlSrcSoundsFallMpDefault = _parcelHelpers.interopDefault(_urlSrcSoundsFallMp);
let scoreAudio = document.getElementById('scoreAudio');
let player = new Audio();
player.volume = .4;
let sounds = {
  wings: _urlSrcSoundsFlutteringItsWingsMpDefault.default,
  fall: _urlSrcSoundsFallMpDefault.default
};
function makeSomeNoise(type) {
  let link = sounds[type];
  playSound(link);
}
function playSound(link) {
  player.src = link;
  player.play();
}
function playPluseScoreSound() {
  scoreAudio.play();
}

},{"url:/src/sounds/fluttering-its-wings.mp3":"3lHlt","url:/src/sounds/fall.mp3":"4WWvU","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"3lHlt":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "fluttering-its-wings.5be13fa7.mp3"
},{"./bundle-url":"6lXl1"}],"6lXl1":[function(require,module,exports) {
"use strict";

/* globals document:readonly */
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.


function getOrigin(url) {
  let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);

  if (!matches) {
    throw new Error('Origin not found');
  }

  return matches[0];
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;
},{}],"4WWvU":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "fall.04d66613.mp3"
},{"./bundle-url":"6lXl1"}],"1GTWC":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "tube.1c57baa0.png"
},{"./bundle-url":"6lXl1"}],"1fh66":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "gamePaused", function () {
  return gamePaused;
});
_parcelHelpers.export(exports, "resumeGameID", function () {
  return resumeGameID;
});
_parcelHelpers.export(exports, "pause", function () {
  return pause;
});
_parcelHelpers.export(exports, "resumeAddingPipesOnFieldID", function () {
  return resumeAddingPipesOnFieldID;
});
_parcelHelpers.export(exports, "resumeMovePipesFieldID", function () {
  return resumeMovePipesFieldID;
});
var _game_over = require('./game_over');
var _index = require('./index');
var _move_penguin = require('./move_penguin');
var _main_screen = require('./main_screen');
var _move_tubeField = require('./move_tube-field');
let resumeGameID;
let resumeMovePipesFieldID;
let resumeAddingPipesOnFieldID;
let blinkingPauseMessageID;
let pause = false;
let pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', gamePaused);
document.addEventListener('keydown', e => {
  if (e.key == 'Escape') gamePaused();
});
function gamePaused() {
  if (_move_penguin.loss) return;
  let pauseIcon = '<i class="fas fa-pause"></i>';
  let playIcon = '<i class="fas fa-play"></i>';
  let inner = pauseBtn.firstElementChild.outerHTML;
  if (inner == pauseIcon) {
    pauseBtn.innerHTML = playIcon;
    clearInterval(_index.stopFalling);
    clearInterval(resumeGameID);
    clearInterval(_game_over.stopFallingForRestartID);
    clearInterval(_index.movePipesID);
    clearInterval(_index.addingPipesID);
    clearInterval(resumeMovePipesFieldID);
    clearInterval(resumeAddingPipesOnFieldID);
    clearInterval(_game_over.restartMovePipesID);
    clearInterval(_game_over.restartAddingPipesID);
    pause = true;
    gamePausedMessage();
  }
  if (inner == playIcon) {
    pauseBtn.innerHTML = pauseIcon;
    resumeGameID = setInterval(() => {
      _move_penguin.fallingPenguin();
    }, 60);
    resumeMovePipesFieldID = setInterval(() => {
      _move_tubeField.moveTube();
    }, 100);
    resumeAddingPipesOnFieldID = setInterval(() => {
      _move_tubeField.addTube();
    }, 3400);
    pause = false;
    removePausedMessage();
  }
}
function gamePausedMessage() {
  if (_move_penguin.loss) return;
  _main_screen.gameScreen.insertAdjacentHTML('beforeend', `<div class="game__pause-message">
	Game paused
</div>`);
  let message = document.querySelector('.game__pause-message') ?? null;
  blinkingPauseMessageID = setInterval(() => {
    if (message) {
      message.classList.toggle('game__pause-message-hidden');
    }
  }, 1000);
}
function removePausedMessage() {
  let arr = Array.from(_main_screen.gameScreen.children);
  arr.filter(item => {
    let check = item.classList.contains('game__pause-message');
    if (check) {
      item.remove();
      clearInterval(blinkingPauseMessageID);
    }
  });
}

},{"./game_over":"3IVat","./index":"3L8AI","./move_penguin":"1JDcf","./main_screen":"1uIm9","./move_tube-field":"5VBTq","@parcel/transformer-js/lib/esmodule-helpers.js":"SsztI"}],"vrpFV":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "ping_move.08ccecda.png"
},{"./bundle-url":"6lXl1"}],"3xDZC":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "ping_normal.5cde25c9.png"
},{"./bundle-url":"6lXl1"}],"7MPVj":[function() {},{}]},["21c8X","3L8AI"], "3L8AI", "parcelRequiree47f")

//# sourceMappingURL=index.2142d36c.js.map
