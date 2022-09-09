/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
function contact(){
    const content = document.getElementById("content")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let text =document.createElement("div")
    let a = document.createElement("a")
    let link = document.createTextNode("Rotten Tomatoes")
    a.appendChild(link)
    a.title = "Rotten Tomatoes"
    a.href="https://www.rottentomatoes.com/tv/the_bear"
    img.src="../contact.jpg"
    img.classList.add("contact-img")
    div.appendChild(img)
    text.textContent = "Get in touch with us for reservations via email: thebear@tvshow.com\nYou can Also see some reviews on "
    text.appendChild(a)
    text.classList.add("contact-text")
    content.appendChild(div)
    content.appendChild(text)

}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": () => (/* binding */ navBar),
/* harmony export */   "pageLoader": () => (/* binding */ pageLoader)
/* harmony export */ });
function pageLoader(){
    const content = document.getElementById("content")
    let headline = document.createElement("h1")
    let textdiv = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = "A young chef from the world of fine dining comes home to Chicago to run his family's Italian beef sandwich shop after the suicide of his older brother, who left behind debts, a dilapidated kitchen, and an unruly staff."
    headline.textContent = "The bear coming out soon!"
    textdiv.classList.add("text")
    textdiv.appendChild(p)
   
    content.appendChild(headline)
    content.appendChild(textdiv)

}
function navBar(){
    const content = document.getElementById("content")
    let nav = document.createElement("nav")
    let home = document.createElement("div")
    let menu = document.createElement("div")
    let contact = document.createElement("div")
    home.classList.add("nav-item")
    menu.classList.add("nav-item")
    contact.classList.add("nav-item")
    home.textContent = "Home"
    menu.textContent = "Menu"
    contact.textContent = "Contact"
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)
    content.appendChild(nav)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");


console.log("hello world")
;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
// pageLoader()
;(0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.contact)()

const clear = () =>{
    const content = document.getElementById("content")
    content.textContent= ""
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ1o7QUFDcEM7QUFDQSxzREFBTTtBQUNOO0FBQ0EscURBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgdGV4dCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxyXG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlJvdHRlbiBUb21hdG9lc1wiKVxyXG4gICAgYS5hcHBlbmRDaGlsZChsaW5rKVxyXG4gICAgYS50aXRsZSA9IFwiUm90dGVuIFRvbWF0b2VzXCJcclxuICAgIGEuaHJlZj1cImh0dHBzOi8vd3d3LnJvdHRlbnRvbWF0b2VzLmNvbS90di90aGVfYmVhclwiXHJcbiAgICBpbWcuc3JjPVwiLi4vY29udGFjdC5qcGdcIlxyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWltZ1wiKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltZylcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkdldCBpbiB0b3VjaCB3aXRoIHVzIGZvciByZXNlcnZhdGlvbnMgdmlhIGVtYWlsOiB0aGViZWFyQHR2c2hvdy5jb21cXG5Zb3UgY2FuIEFsc28gc2VlIHNvbWUgcmV2aWV3cyBvbiBcIlxyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChhKVxyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dClcclxuXHJcbn0iLCJmdW5jdGlvbiBwYWdlTG9hZGVyKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICAgIGxldCB0ZXh0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiQSB5b3VuZyBjaGVmIGZyb20gdGhlIHdvcmxkIG9mIGZpbmUgZGluaW5nIGNvbWVzIGhvbWUgdG8gQ2hpY2FnbyB0byBydW4gaGlzIGZhbWlseSdzIEl0YWxpYW4gYmVlZiBzYW5kd2ljaCBzaG9wIGFmdGVyIHRoZSBzdWljaWRlIG9mIGhpcyBvbGRlciBicm90aGVyLCB3aG8gbGVmdCBiZWhpbmQgZGVidHMsIGEgZGlsYXBpZGF0ZWQga2l0Y2hlbiwgYW5kIGFuIHVucnVseSBzdGFmZi5cIlxyXG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIlRoZSBiZWFyIGNvbWluZyBvdXQgc29vbiFcIlxyXG4gICAgdGV4dGRpdi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKVxyXG4gICAgdGV4dGRpdi5hcHBlbmRDaGlsZChwKVxyXG4gICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRleHRkaXYpXHJcblxyXG59XHJcbmZ1bmN0aW9uIG5hdkJhcigpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIilcclxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKVxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIilcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxyXG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiXHJcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KVxyXG59XHJcbmV4cG9ydHtwYWdlTG9hZGVyLG5hdkJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFnZUxvYWRlcixuYXZCYXJ9IGZyb20gXCIuL3BhZ2UtbG9hZC5qc1wiXHJcbmltcG9ydCB7Y29udGFjdH0gZnJvbSBcIi4vY29udGFjdC5qc1wiXHJcbmNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIilcclxubmF2QmFyKClcclxuLy8gcGFnZUxvYWRlcigpXHJcbmNvbnRhY3QoKVxyXG5cclxuY29uc3QgY2xlYXIgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcclxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQ9IFwiXCJcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==