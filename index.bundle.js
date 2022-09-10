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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu(){
    const content = document.getElementById("content")
    let snacks =document.createElement("div")
    let snacksImg = document.createElement("img")
    let snackTagline = document.createElement("h2")
    let mealTagline = document.createElement("h2")
    let mealImg = document.createElement("img")
    let meals = document.createElement("div")
    let desserts =document.createElement("div")
    let dessertImg = document.createElement("img")
    let dessertTagline = document.createElement("h2")
    let container = document.createElement("div")
    container.classList.add("container")
    snacksImg.src="../sandwitch.jpg"
    snackTagline.textContent= "Snacks"
    snacks.appendChild(snacksImg)
    snacks.appendChild(snackTagline)
    snacks.innerHTML+="\nTry out our traditional sandwhich!"
    mealImg.src="../spaghetti.jpg"
    mealTagline.textContent="Meals"
    meals.appendChild(mealImg)
    meals.appendChild(mealTagline)
    meals.innerHTML+="Have some of our famous spaghetti!"
    dessertImg.src="../donuts.jpg"
    dessertTagline.textContent = "Desserts"
    desserts.appendChild(dessertImg)
    desserts.appendChild(dessertTagline)
    desserts.innerHTML+="Donuts made by our boy Marcus."
    container.appendChild(snacks)
    container.appendChild(meals)
    container.appendChild(desserts)
    content.appendChild(container)



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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



console.log("hello world")
;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
// pageLoader()
// contact()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)()


const clear = () =>{
    const content = document.getElementById("content")
    content.textContent= ""
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ1o7QUFDTjtBQUM5QjtBQUNBLHNEQUFNO0FBQ047QUFDQTtBQUNBLCtDQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgdGV4dCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxyXG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlJvdHRlbiBUb21hdG9lc1wiKVxyXG4gICAgYS5hcHBlbmRDaGlsZChsaW5rKVxyXG4gICAgYS50aXRsZSA9IFwiUm90dGVuIFRvbWF0b2VzXCJcclxuICAgIGEuaHJlZj1cImh0dHBzOi8vd3d3LnJvdHRlbnRvbWF0b2VzLmNvbS90di90aGVfYmVhclwiXHJcbiAgICBpbWcuc3JjPVwiLi4vY29udGFjdC5qcGdcIlxyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWltZ1wiKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltZylcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkdldCBpbiB0b3VjaCB3aXRoIHVzIGZvciByZXNlcnZhdGlvbnMgdmlhIGVtYWlsOiB0aGViZWFyQHR2c2hvdy5jb21cXG5Zb3UgY2FuIEFsc28gc2VlIHNvbWUgcmV2aWV3cyBvbiBcIlxyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChhKVxyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0XCIpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dClcclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IHNuYWNrcyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IHNuYWNrc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBzbmFja1RhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgIGxldCBtZWFsVGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgbGV0IG1lYWxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBsZXQgbWVhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgZGVzc2VydHMgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBkZXNzZXJ0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbGV0IGRlc3NlcnRUYWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcclxuICAgIHNuYWNrc0ltZy5zcmM9XCIuLi9zYW5kd2l0Y2guanBnXCJcclxuICAgIHNuYWNrVGFnbGluZS50ZXh0Q29udGVudD0gXCJTbmFja3NcIlxyXG4gICAgc25hY2tzLmFwcGVuZENoaWxkKHNuYWNrc0ltZylcclxuICAgIHNuYWNrcy5hcHBlbmRDaGlsZChzbmFja1RhZ2xpbmUpXHJcbiAgICBzbmFja3MuaW5uZXJIVE1MKz1cIlxcblRyeSBvdXQgb3VyIHRyYWRpdGlvbmFsIHNhbmR3aGljaCFcIlxyXG4gICAgbWVhbEltZy5zcmM9XCIuLi9zcGFnaGV0dGkuanBnXCJcclxuICAgIG1lYWxUYWdsaW5lLnRleHRDb250ZW50PVwiTWVhbHNcIlxyXG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQobWVhbEltZylcclxuICAgIG1lYWxzLmFwcGVuZENoaWxkKG1lYWxUYWdsaW5lKVxyXG4gICAgbWVhbHMuaW5uZXJIVE1MKz1cIkhhdmUgc29tZSBvZiBvdXIgZmFtb3VzIHNwYWdoZXR0aSFcIlxyXG4gICAgZGVzc2VydEltZy5zcmM9XCIuLi9kb251dHMuanBnXCJcclxuICAgIGRlc3NlcnRUYWdsaW5lLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiXHJcbiAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0SW1nKVxyXG4gICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydFRhZ2xpbmUpXHJcbiAgICBkZXNzZXJ0cy5pbm5lckhUTUwrPVwiRG9udXRzIG1hZGUgYnkgb3VyIGJveSBNYXJjdXMuXCJcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzbmFja3MpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbHMpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydHMpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuXHJcblxyXG5cclxufSIsImZ1bmN0aW9uIHBhZ2VMb2FkZXIoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcclxuICAgIGxldCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgbGV0IHRleHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJBIHlvdW5nIGNoZWYgZnJvbSB0aGUgd29ybGQgb2YgZmluZSBkaW5pbmcgY29tZXMgaG9tZSB0byBDaGljYWdvIHRvIHJ1biBoaXMgZmFtaWx5J3MgSXRhbGlhbiBiZWVmIHNhbmR3aWNoIHNob3AgYWZ0ZXIgdGhlIHN1aWNpZGUgb2YgaGlzIG9sZGVyIGJyb3RoZXIsIHdobyBsZWZ0IGJlaGluZCBkZWJ0cywgYSBkaWxhcGlkYXRlZCBraXRjaGVuLCBhbmQgYW4gdW5ydWx5IHN0YWZmLlwiXHJcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiVGhlIGJlYXIgY29taW5nIG91dCBzb29uIVwiXHJcbiAgICB0ZXh0ZGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpXHJcbiAgICB0ZXh0ZGl2LmFwcGVuZENoaWxkKHApXHJcbiAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZSlcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dGRpdilcclxuXHJcbn1cclxuZnVuY3Rpb24gbmF2QmFyKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIilcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpXHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKVxyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiXHJcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCJcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpXHJcbn1cclxuZXhwb3J0e3BhZ2VMb2FkZXIsbmF2QmFyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYWdlTG9hZGVyLG5hdkJhcn0gZnJvbSBcIi4vcGFnZS1sb2FkLmpzXCJcclxuaW1wb3J0IHtjb250YWN0fSBmcm9tIFwiLi9jb250YWN0LmpzXCJcclxuaW1wb3J0IHttZW51fSBmcm9tIFwiLi9tZW51LmpzXCJcclxuY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKVxyXG5uYXZCYXIoKVxyXG4vLyBwYWdlTG9hZGVyKClcclxuLy8gY29udGFjdCgpXHJcbm1lbnUoKVxyXG5cclxuXHJcbmNvbnN0IGNsZWFyID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBjb250ZW50LnRleHRDb250ZW50PSBcIlwiXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=