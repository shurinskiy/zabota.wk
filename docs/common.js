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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks.js":
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9qcy9ibG9ja3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/blocks.js\n");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks.js */ \"./src/js/blocks.js\");\n/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* Polyfills */\n(function (e) {\n  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;\n  e.closest = e.closest || function closest(selector) {\n    if (!this) return null;\n    if (this.matches(selector)) return this;\n    if (!this.parentElement) {\n      return null;\n    } else return this.parentElement.closest(selector);\n  };\n})(Element.prototype);\n(function (e) {\n  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;\n  !matches ? e.matches = e.matchesSelector = function matches(selector) {\n    var matches = document.querySelectorAll(selector);\n    var th = this;\n    return Array.prototype.some.call(matches, function (e) {\n      return e === th;\n    });\n  } : e.matches = e.matchesSelector = matches;\n})(Element.prototype);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzPzQ0MGEiXSwibmFtZXMiOlsiZSIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1hdGNoZXNTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoIiwiQXJyYXkiLCJzb21lIiwiY2FsbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQXFCOztBQUVyQjtBQUNDLFdBQVNBLENBQUMsRUFBRTtFQUNaQSxDQUFDLENBQUNDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDQyxPQUFPLElBQUlELENBQUMsQ0FBQ0Usa0JBQWtCLElBQUlGLENBQUMsQ0FBQ0csaUJBQWlCLElBQUlILENBQUMsQ0FBQ0ksZ0JBQWdCLElBQUlKLENBQUMsQ0FBQ0sscUJBQXFCO0VBQ3JITCxDQUFDLENBQUNNLE9BQU8sR0FBR04sQ0FBQyxDQUFDTSxPQUFPLElBQUksU0FBU0EsT0FBTyxDQUFDQyxRQUFRLEVBQUU7SUFDbkQsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLElBQUk7SUFDdEIsSUFBSSxJQUFJLENBQUNOLE9BQU8sQ0FBQ00sUUFBUSxDQUFDLEVBQUUsT0FBTyxJQUFJO0lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUNDLGFBQWEsRUFBRTtNQUFDLE9BQU8sSUFBSTtJQUFBLENBQUMsTUFDaEMsT0FBTyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0YsT0FBTyxDQUFDQyxRQUFRLENBQUM7RUFDakQsQ0FBQztBQUNILENBQUMsRUFBQ0UsT0FBTyxDQUFDQyxTQUFTLENBQUM7QUFFcEIsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFDWixJQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0MsT0FBTyxJQUFJRCxDQUFDLENBQUNXLGVBQWUsSUFBSVgsQ0FBQyxDQUFDSyxxQkFBcUIsSUFBSUwsQ0FBQyxDQUFDRSxrQkFBa0IsSUFBSUYsQ0FBQyxDQUFDRyxpQkFBaUIsSUFBSUgsQ0FBQyxDQUFDSSxnQkFBZ0I7RUFDNUksQ0FBQ0gsT0FBTyxHQUFJRCxDQUFDLENBQUNDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDVyxlQUFlLEdBQUcsU0FBU1YsT0FBTyxDQUFDTSxRQUFRLEVBQUU7SUFDdEUsSUFBSU4sT0FBTyxHQUFHVyxRQUFRLENBQUNDLGdCQUFnQixDQUFDTixRQUFRLENBQUM7SUFDakQsSUFBSU8sRUFBRSxHQUFHLElBQUk7SUFDYixPQUFPQyxLQUFLLENBQUNMLFNBQVMsQ0FBQ00sSUFBSSxDQUFDQyxJQUFJLENBQUNoQixPQUFPLEVBQUUsVUFBU0QsQ0FBQyxFQUFFO01BQ3JELE9BQU9BLENBQUMsS0FBS2MsRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDSCxDQUFDLEdBQUtkLENBQUMsQ0FBQ0MsT0FBTyxHQUFHRCxDQUFDLENBQUNXLGVBQWUsR0FBR1YsT0FBUTtBQUMvQyxDQUFDLEVBQUVRLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbW1vbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYmxvY2tzLmpzXCI7XHJcblxyXG4vKiBQb2x5ZmlsbHMgKi9cclxuKGZ1bmN0aW9uKGUpIHtcclxuXHRlLm1hdGNoZXMgPSBlLm1hdGNoZXMgfHwgZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZS5tc01hdGNoZXNTZWxlY3RvciB8fCBlLm9NYXRjaGVzU2VsZWN0b3IgfHwgZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblx0ZS5jbG9zZXN0ID0gZS5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHRcdGlmICghdGhpcykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge3JldHVybiBudWxsfVxyXG5cdFx0XHRlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcclxuXHRcdH07XHJcbn0oRWxlbWVudC5wcm90b3R5cGUpKTtcclxuXHJcbihmdW5jdGlvbihlKSB7XHJcblx0dmFyIG1hdGNoZXMgPSBlLm1hdGNoZXMgfHwgZS5tYXRjaGVzU2VsZWN0b3IgfHwgZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZS5tc01hdGNoZXNTZWxlY3RvciB8fCBlLm9NYXRjaGVzU2VsZWN0b3I7XHJcblx0IW1hdGNoZXMgPyAoZS5tYXRjaGVzID0gZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XHJcblx0XHRsZXQgbWF0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdFx0bGV0IHRoID0gdGhpcztcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKG1hdGNoZXMsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0cmV0dXJuIGUgPT09IHRoO1xyXG5cdFx0fSk7XHJcblx0fSkgOiAoZS5tYXRjaGVzID0gZS5tYXRjaGVzU2VsZWN0b3IgPSBtYXRjaGVzKTtcclxufSkoRWxlbWVudC5wcm90b3R5cGUpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ })

/******/ });