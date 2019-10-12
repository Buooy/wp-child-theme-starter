/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/analytics.js":
/*!************************************!*\
  !*** ./assets/src/js/analytics.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Analytics; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Analytics =
/*#__PURE__*/
function () {
  function Analytics() {
    _classCallCheck(this, Analytics);

    var _this = this;

    !function () {
      var analytics = window.analytics = window.analytics || [];
      if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");else {
        analytics.invoked = !0;
        analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];

        analytics.factory = function (t) {
          return function () {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };

        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }

        analytics.load = function (t, e) {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = !0;
          n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };

        analytics.SNIPPET_VERSION = "4.1.0";
        analytics.load("DaWaebKJmHckGSXUVsuWSd1BbT9xJ8qG");
        _this.analytics = analytics;

        _this.init();
      }
    }();
  }

  _createClass(Analytics, [{
    key: "init",
    value: function init() {
      //	Tracks the page
      this.analytics.page();
    }
  }]);

  return Analytics;
}();



/***/ }),

/***/ "./assets/src/js/bundle.js":
/*!*********************************!*\
  !*** ./assets/src/js/bundle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "./assets/src/js/analytics.js");

document.addEventListener("DOMContentLoaded", function () {
  new _analytics__WEBPACK_IMPORTED_MODULE_0__["default"]();
});

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./assets/src/js/bundle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaronstevensonlee/Local Sites/riverlife/app/public/wp-content/themes/wharrf-child/assets/src/js/bundle.js */"./assets/src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9hbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9idW5kbGUuanMiXSwibmFtZXMiOlsiQW5hbHl0aWNzIiwiX3RoaXMiLCJhbmFseXRpY3MiLCJ3aW5kb3ciLCJpbml0aWFsaXplIiwiaW52b2tlZCIsImNvbnNvbGUiLCJlcnJvciIsIm1ldGhvZHMiLCJmYWN0b3J5IiwidCIsImUiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsInVuc2hpZnQiLCJwdXNoIiwibGVuZ3RoIiwibG9hZCIsIm4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJhIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiX2xvYWRPcHRpb25zIiwiU05JUFBFVF9WRVJTSU9OIiwiaW5pdCIsInBhZ2UiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJC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QixTQUFMLENBQWVnQyxJQUFmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRjtBQUFBO0FBQUE7QUFFQVosUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBNkMsWUFBSTtBQUVoRCxNQUFJbkMsa0RBQUo7QUFFQSxDQUpELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljcyB7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdCFmdW5jdGlvbigpe3ZhciBhbmFseXRpY3M9d2luZG93LmFuYWx5dGljcz13aW5kb3cuYW5hbHl0aWNzfHxbXTtpZighYW5hbHl0aWNzLmluaXRpYWxpemUpaWYoYW5hbHl0aWNzLmludm9rZWQpd2luZG93LmNvbnNvbGUmJmNvbnNvbGUuZXJyb3ImJmNvbnNvbGUuZXJyb3IoXCJTZWdtZW50IHNuaXBwZXQgaW5jbHVkZWQgdHdpY2UuXCIpO2Vsc2V7YW5hbHl0aWNzLmludm9rZWQ9ITA7YW5hbHl0aWNzLm1ldGhvZHM9W1widHJhY2tTdWJtaXRcIixcInRyYWNrQ2xpY2tcIixcInRyYWNrTGlua1wiLFwidHJhY2tGb3JtXCIsXCJwYWdldmlld1wiLFwiaWRlbnRpZnlcIixcInJlc2V0XCIsXCJncm91cFwiLFwidHJhY2tcIixcInJlYWR5XCIsXCJhbGlhc1wiLFwiZGVidWdcIixcInBhZ2VcIixcIm9uY2VcIixcIm9mZlwiLFwib25cIl07YW5hbHl0aWNzLmZhY3Rvcnk9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtlLnVuc2hpZnQodCk7YW5hbHl0aWNzLnB1c2goZSk7cmV0dXJuIGFuYWx5dGljc319O2Zvcih2YXIgdD0wO3Q8YW5hbHl0aWNzLm1ldGhvZHMubGVuZ3RoO3QrKyl7dmFyIGU9YW5hbHl0aWNzLm1ldGhvZHNbdF07YW5hbHl0aWNzW2VdPWFuYWx5dGljcy5mYWN0b3J5KGUpfWFuYWx5dGljcy5sb2FkPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtuLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtuLmFzeW5jPSEwO24uc3JjPVwiaHR0cHM6Ly9jZG4uc2VnbWVudC5jb20vYW5hbHl0aWNzLmpzL3YxL1wiK3QrXCIvYW5hbHl0aWNzLm1pbi5qc1wiO3ZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobixhKTthbmFseXRpY3MuX2xvYWRPcHRpb25zPWV9O2FuYWx5dGljcy5TTklQUEVUX1ZFUlNJT049XCI0LjEuMFwiO1xuXHRcdFx0YW5hbHl0aWNzLmxvYWQoXCJEYVdhZWJLSm1IY2tHU1hVVnN1V1NkMUJiVDl4SjhxR1wiKTtcblx0XHRcdF90aGlzLmFuYWx5dGljcyA9IGFuYWx5dGljcztcblx0XHRcdF90aGlzLmluaXQoKTtcblx0XHR9fSgpO1xuXHR9XG5cblx0aW5pdCgpe1xuXHRcdC8vXHRUcmFja3MgdGhlIHBhZ2Vcblx0XHR0aGlzLmFuYWx5dGljcy5wYWdlKCk7XG5cdH1cblxufSIsImltcG9ydCBBbmFseXRpY3MgZnJvbSBcIi4vYW5hbHl0aWNzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9Pntcblx0XG5cdG5ldyBBbmFseXRpY3MoKTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==