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

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"node-typescript\",\"version\":\"1.0.0\",\"description\":\"node app in typescript\",\"main\":\"index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"start\":\"webpack --progress --env.development\",\"start:prod\":\"webpack --progress\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/mnr5017/node-app-typescript.git\"},\"keywords\":[\"node\",\"typescript\"],\"author\":\"mark ryan\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/mnr5017/node-app-typescript/issues\"},\"homepage\":\"https://github.com/mnr5017/node-app-typescript#readme\",\"devDependencies\":{\"webpack\":\"^4.31.0\",\"webpack-cli\":\"^3.3.2\"}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlLmpzb24uanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/information-logger.js":
/*!***********************************!*\
  !*** ./src/information-logger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// src/information-logger.js\nconst os = __webpack_require__(/*! os */ \"os\");\nconst { name, version } = __webpack_require__(/*! ../package.json */ \"./package.json\")\n\nmodule.exports = {\n  logApplicationInformation: () =>\n    console.log({\n    \tapplication: {\n    \t\tname,\n    \t\tversion,\n    \t},\n    }),\n  logSystemInformation: () =>\n    console.log({\n    \tsystem: {\n    \t\tplatform: process.platform,\n    \t\tcpus: os.cpus().length,\n    \t},\n    }),\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mb3JtYXRpb24tbG9nZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZm9ybWF0aW9uLWxvZ2dlci5qcz9lMGE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9pbmZvcm1hdGlvbi1sb2dnZXIuanNcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ0FwcGxpY2F0aW9uSW5mb3JtYXRpb246ICgpID0+XG4gICAgY29uc29sZS5sb2coe1xuICAgIFx0YXBwbGljYXRpb246IHtcbiAgICBcdFx0bmFtZSxcbiAgICBcdFx0dmVyc2lvbixcbiAgICBcdH0sXG4gICAgfSksXG4gIGxvZ1N5c3RlbUluZm9ybWF0aW9uOiAoKSA9PlxuICAgIGNvbnNvbGUubG9nKHtcbiAgICBcdHN5c3RlbToge1xuICAgIFx0XHRwbGF0Zm9ybTogcHJvY2Vzcy5wbGF0Zm9ybSxcbiAgICBcdFx0Y3B1czogb3MuY3B1cygpLmxlbmd0aCxcbiAgICBcdH0sXG4gICAgfSksXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/information-logger.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// src/main.js\n\nconst informationLogger = __webpack_require__(/*! ./information-logger */ \"./src/information-logger.js\");\n\ninformationLogger.logApplicationInformation();\ninformationLogger.logSystemInformation();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL21haW4uanNcblxuY29uc3QgaW5mb3JtYXRpb25Mb2dnZXIgPSByZXF1aXJlKCcuL2luZm9ybWF0aW9uLWxvZ2dlcicpO1xuXG5pbmZvcm1hdGlvbkxvZ2dlci5sb2dBcHBsaWNhdGlvbkluZm9ybWF0aW9uKCk7XG5pbmZvcm1hdGlvbkxvZ2dlci5sb2dTeXN0ZW1JbmZvcm1hdGlvbigpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })

/******/ });