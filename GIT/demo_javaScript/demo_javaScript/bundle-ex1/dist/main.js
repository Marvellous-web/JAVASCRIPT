/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/***/ (() => {

eval("\r\nconsole.log('hi');\r\n\r\nlet xhr = new XMLHttpRequest(); // creates object for XMLHttpRequest\r\n  xhr.open(\"GET\",\"http://localhost:3000/books\", true); // setting properties to created HTTP request\r\n  xhr.send();\r\n  console.log('readystate : ' + xhr.readyState); \r\n\r\n  xhr.onprogress = function(event) { \r\n      // event.loaded - how many bytes downloaded       \r\n      console.log(`Progress : ${event.loaded} bytes, ${xhr.readyState}`);\r\n  };\r\n\r\n  xhr.onload=function(){    // completed    \r\n      console.log(`Loaded:${xhr.status}, ${xhr.statusText}, ${xhr.response}, ${xhr.readyState}`);\r\n      //console.log(xhr.responseType); \r\n      document.getElementById('data').innerHTML=xhr.response;              \r\n  };\r\n\r\n  xhr.onerror = function() { // only triggers if the request couldn't be made at all\r\n      console.log(`Network Error`);        \r\n  };  \n\n//# sourceURL=webpack://bundle-ex1/./src/demo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/demo.js"]();
/******/ 	
/******/ })()
;