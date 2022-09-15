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
    let homeImg = document.createElement("img")
    homeImg.src="../marcus.jpg"
    content.appendChild(homeImg)
    
}
function navBar(){
    const content = document.getElementById("content")
    let nav = document.createElement("nav")
    let home = document.createElement("div")
    let menu = document.createElement("div")
    let contact = document.createElement("div")
    home.classList.add("nav-item")
    home.setAttribute('data',"home")
    menu.classList.add("nav-item","hidden")
    menu.setAttribute("data","menu")
    contact.classList.add("nav-item","hidden")
    contact.setAttribute("data","contact")
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



(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoader)()
CreateEventListeners()



const clear = () =>{
    const content = document.getElementById("content")
     while(content.firstChild){
        content.removeChild(content.firstChild);
}
}

function CreateEventListeners(){
    let navItems = document.getElementsByClassName("nav-item")
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click",function(e){
            e.stopPropagation()
            CallFunction(navItems[i].getAttribute("data"))
            toogleOld()
            navItems[i].classList.toggle("hidden")
            CreateEventListeners()
        })
        
        
    }

}

function CallFunction(name){
    clear()
    ;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
    switch (name) {
        case "home":
            ;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoader)()
            break;
        case "contact":
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.contact)()
            break;
        case "menu":
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)()
            break;
    }
}

function toogleOld(){
    const items = document.getElementsByClassName("nav-item")
    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains("hidden")){
            items[i].classList.toggle("hidden")
        }
        
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDWjtBQUNOO0FBQzlCLHFEQUFNO0FBQ04sMERBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFNO0FBQ1Y7QUFDQTtBQUNBLFlBQVksMERBQVU7QUFDdEI7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkI7QUFDQTtBQUNBLFlBQVksOENBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCB0ZXh0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUm90dGVuIFRvbWF0b2VzXCIpXHJcbiAgICBhLmFwcGVuZENoaWxkKGxpbmspXHJcbiAgICBhLnRpdGxlID0gXCJSb3R0ZW4gVG9tYXRvZXNcIlxyXG4gICAgYS5ocmVmPVwiaHR0cHM6Ly93d3cucm90dGVudG9tYXRvZXMuY29tL3R2L3RoZV9iZWFyXCJcclxuICAgIGltZy5zcmM9XCIuLi9jb250YWN0LmpwZ1wiXHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW1nXCIpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IGluIHRvdWNoIHdpdGggdXMgZm9yIHJlc2VydmF0aW9ucyB2aWEgZW1haWw6IHRoZWJlYXJAdHZzaG93LmNvbVxcbllvdSBjYW4gQWxzbyBzZWUgc29tZSByZXZpZXdzIG9uIFwiXHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGEpXHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRleHRcIilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KVxyXG5cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgc25hY2tzID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgc25hY2tzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbGV0IHNuYWNrVGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgbGV0IG1lYWxUYWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBsZXQgbWVhbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBtZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBkZXNzZXJ0cyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IGRlc3NlcnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBsZXQgZGVzc2VydFRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKVxyXG4gICAgc25hY2tzSW1nLnNyYz1cIi4uL3NhbmR3aXRjaC5qcGdcIlxyXG4gICAgc25hY2tUYWdsaW5lLnRleHRDb250ZW50PSBcIlNuYWNrc1wiXHJcbiAgICBzbmFja3MuYXBwZW5kQ2hpbGQoc25hY2tzSW1nKVxyXG4gICAgc25hY2tzLmFwcGVuZENoaWxkKHNuYWNrVGFnbGluZSlcclxuICAgIHNuYWNrcy5pbm5lckhUTUwrPVwiXFxuVHJ5IG91dCBvdXIgdHJhZGl0aW9uYWwgc2FuZHdoaWNoIVwiXHJcbiAgICBtZWFsSW1nLnNyYz1cIi4uL3NwYWdoZXR0aS5qcGdcIlxyXG4gICAgbWVhbFRhZ2xpbmUudGV4dENvbnRlbnQ9XCJNZWFsc1wiXHJcbiAgICBtZWFscy5hcHBlbmRDaGlsZChtZWFsSW1nKVxyXG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQobWVhbFRhZ2xpbmUpXHJcbiAgICBtZWFscy5pbm5lckhUTUwrPVwiSGF2ZSBzb21lIG9mIG91ciBmYW1vdXMgc3BhZ2hldHRpIVwiXHJcbiAgICBkZXNzZXJ0SW1nLnNyYz1cIi4uL2RvbnV0cy5qcGdcIlxyXG4gICAgZGVzc2VydFRhZ2xpbmUudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCJcclxuICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRJbWcpXHJcbiAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0VGFnbGluZSlcclxuICAgIGRlc3NlcnRzLmlubmVySFRNTCs9XCJEb251dHMgbWFkZSBieSBvdXIgYm95IE1hcmN1cy5cIlxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNuYWNrcylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFscylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0cylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuXHJcblxyXG59IiwiZnVuY3Rpb24gcGFnZUxvYWRlcigpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICBsZXQgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIkEgeW91bmcgY2hlZiBmcm9tIHRoZSB3b3JsZCBvZiBmaW5lIGRpbmluZyBjb21lcyBob21lIHRvIENoaWNhZ28gdG8gcnVuIGhpcyBmYW1pbHkncyBJdGFsaWFuIGJlZWYgc2FuZHdpY2ggc2hvcCBhZnRlciB0aGUgc3VpY2lkZSBvZiBoaXMgb2xkZXIgYnJvdGhlciwgd2hvIGxlZnQgYmVoaW5kIGRlYnRzLCBhIGRpbGFwaWRhdGVkIGtpdGNoZW4sIGFuZCBhbiB1bnJ1bHkgc3RhZmYuXCJcclxuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJUaGUgYmVhciBjb21pbmcgb3V0IHNvb24hXCJcclxuICAgIHRleHRkaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIilcclxuICAgIHRleHRkaXYuYXBwZW5kQ2hpbGQocClcclxuICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0ZGl2KVxyXG4gICAgbGV0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBob21lSW1nLnNyYz1cIi4uL21hcmN1cy5qcGdcIlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lSW1nKVxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gbmF2QmFyKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIilcclxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdkYXRhJyxcImhvbWVcIilcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsXCJoaWRkZW5cIilcclxuICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiZGF0YVwiLFwibWVudVwiKVxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIixcImhpZGRlblwiKVxyXG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsXCJjb250YWN0XCIpXHJcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCJcclxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSlcclxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdilcclxuICAgIFxyXG59XHJcbmV4cG9ydHtwYWdlTG9hZGVyLG5hdkJhcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7cGFnZUxvYWRlcixuYXZCYXJ9IGZyb20gXCIuL3BhZ2UtbG9hZC5qc1wiXHJcbmltcG9ydCB7Y29udGFjdH0gZnJvbSBcIi4vY29udGFjdC5qc1wiXHJcbmltcG9ydCB7bWVudX0gZnJvbSBcIi4vbWVudS5qc1wiXHJcbm5hdkJhcigpXHJcbnBhZ2VMb2FkZXIoKVxyXG5DcmVhdGVFdmVudExpc3RlbmVycygpXHJcblxyXG5cclxuXHJcbmNvbnN0IGNsZWFyID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKXtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbn1cclxufVxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXYtaXRlbVwiKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5hdkl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIENhbGxGdW5jdGlvbihuYXZJdGVtc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpKVxyXG4gICAgICAgICAgICB0b29nbGVPbGQoKVxyXG4gICAgICAgICAgICBuYXZJdGVtc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXHJcbiAgICAgICAgICAgIENyZWF0ZUV2ZW50TGlzdGVuZXJzKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gQ2FsbEZ1bmN0aW9uKG5hbWUpe1xyXG4gICAgY2xlYXIoKVxyXG4gICAgbmF2QmFyKClcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJob21lXCI6XHJcbiAgICAgICAgICAgIHBhZ2VMb2FkZXIoKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxyXG4gICAgICAgICAgICBjb250YWN0KClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1lbnVcIjpcclxuICAgICAgICAgICAgbWVudSgpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b29nbGVPbGQoKXtcclxuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1pdGVtXCIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpe1xyXG4gICAgICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9