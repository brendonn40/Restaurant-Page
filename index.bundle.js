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
    menu.classList.add("nav-item")
    menu.setAttribute("data","menu")
    contact.classList.add("nav-item")
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



console.log("hello world")
;(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.navBar)()
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
// function ChangeActive(nodelist,index){
    
//     for (let i = 0; i < nodelist.length; i++) {
//         nodelist[i].classlist.remove("active")
        
//     }
//     nodelist[index].classlist.add("active")
// }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDWjtBQUNOO0FBQzlCO0FBQ0Esc0RBQU07QUFDTiwwREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0E7QUFDQSxZQUFZLDBEQUFVO0FBQ3RCO0FBQ0E7QUFDQSxZQUFZLG9EQUFPO0FBQ25CO0FBQ0E7QUFDQSxZQUFZLDhDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCB0ZXh0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUm90dGVuIFRvbWF0b2VzXCIpXHJcbiAgICBhLmFwcGVuZENoaWxkKGxpbmspXHJcbiAgICBhLnRpdGxlID0gXCJSb3R0ZW4gVG9tYXRvZXNcIlxyXG4gICAgYS5ocmVmPVwiaHR0cHM6Ly93d3cucm90dGVudG9tYXRvZXMuY29tL3R2L3RoZV9iZWFyXCJcclxuICAgIGltZy5zcmM9XCIuLi9jb250YWN0LmpwZ1wiXHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW1nXCIpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IGluIHRvdWNoIHdpdGggdXMgZm9yIHJlc2VydmF0aW9ucyB2aWEgZW1haWw6IHRoZWJlYXJAdHZzaG93LmNvbVxcbllvdSBjYW4gQWxzbyBzZWUgc29tZSByZXZpZXdzIG9uIFwiXHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGEpXHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRleHRcIilcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KVxyXG5cclxufSIsImV4cG9ydCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgc25hY2tzID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgc25hY2tzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbGV0IHNuYWNrVGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgbGV0IG1lYWxUYWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXHJcbiAgICBsZXQgbWVhbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBtZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBkZXNzZXJ0cyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IGRlc3NlcnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBsZXQgZGVzc2VydFRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKVxyXG4gICAgc25hY2tzSW1nLnNyYz1cIi4uL3NhbmR3aXRjaC5qcGdcIlxyXG4gICAgc25hY2tUYWdsaW5lLnRleHRDb250ZW50PSBcIlNuYWNrc1wiXHJcbiAgICBzbmFja3MuYXBwZW5kQ2hpbGQoc25hY2tzSW1nKVxyXG4gICAgc25hY2tzLmFwcGVuZENoaWxkKHNuYWNrVGFnbGluZSlcclxuICAgIHNuYWNrcy5pbm5lckhUTUwrPVwiXFxuVHJ5IG91dCBvdXIgdHJhZGl0aW9uYWwgc2FuZHdoaWNoIVwiXHJcbiAgICBtZWFsSW1nLnNyYz1cIi4uL3NwYWdoZXR0aS5qcGdcIlxyXG4gICAgbWVhbFRhZ2xpbmUudGV4dENvbnRlbnQ9XCJNZWFsc1wiXHJcbiAgICBtZWFscy5hcHBlbmRDaGlsZChtZWFsSW1nKVxyXG4gICAgbWVhbHMuYXBwZW5kQ2hpbGQobWVhbFRhZ2xpbmUpXHJcbiAgICBtZWFscy5pbm5lckhUTUwrPVwiSGF2ZSBzb21lIG9mIG91ciBmYW1vdXMgc3BhZ2hldHRpIVwiXHJcbiAgICBkZXNzZXJ0SW1nLnNyYz1cIi4uL2RvbnV0cy5qcGdcIlxyXG4gICAgZGVzc2VydFRhZ2xpbmUudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCJcclxuICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRJbWcpXHJcbiAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0VGFnbGluZSlcclxuICAgIGRlc3NlcnRzLmlubmVySFRNTCs9XCJEb251dHMgbWFkZSBieSBvdXIgYm95IE1hcmN1cy5cIlxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNuYWNrcylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFscylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0cylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuXHJcblxyXG59IiwiZnVuY3Rpb24gcGFnZUxvYWRlcigpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICBsZXQgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIkEgeW91bmcgY2hlZiBmcm9tIHRoZSB3b3JsZCBvZiBmaW5lIGRpbmluZyBjb21lcyBob21lIHRvIENoaWNhZ28gdG8gcnVuIGhpcyBmYW1pbHkncyBJdGFsaWFuIGJlZWYgc2FuZHdpY2ggc2hvcCBhZnRlciB0aGUgc3VpY2lkZSBvZiBoaXMgb2xkZXIgYnJvdGhlciwgd2hvIGxlZnQgYmVoaW5kIGRlYnRzLCBhIGRpbGFwaWRhdGVkIGtpdGNoZW4sIGFuZCBhbiB1bnJ1bHkgc3RhZmYuXCJcclxuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJUaGUgYmVhciBjb21pbmcgb3V0IHNvb24hXCJcclxuICAgIHRleHRkaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIilcclxuICAgIHRleHRkaXYuYXBwZW5kQ2hpbGQocClcclxuICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0ZGl2KVxyXG4gICAgbGV0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBob21lSW1nLnNyYz1cIi4uL21hcmN1cy5qcGdcIlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lSW1nKVxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gbmF2QmFyKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIilcclxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdkYXRhJyxcImhvbWVcIilcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpXHJcbiAgICBtZW51LnNldEF0dHJpYnV0ZShcImRhdGFcIixcIm1lbnVcIilcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpXHJcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImRhdGFcIixcImNvbnRhY3RcIilcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxyXG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiXHJcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KVxyXG4gICAgXHJcbn1cclxuZXhwb3J0e3BhZ2VMb2FkZXIsbmF2QmFyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtwYWdlTG9hZGVyLG5hdkJhcn0gZnJvbSBcIi4vcGFnZS1sb2FkLmpzXCJcclxuaW1wb3J0IHtjb250YWN0fSBmcm9tIFwiLi9jb250YWN0LmpzXCJcclxuaW1wb3J0IHttZW51fSBmcm9tIFwiLi9tZW51LmpzXCJcclxuY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKVxyXG5uYXZCYXIoKVxyXG5wYWdlTG9hZGVyKClcclxuQ3JlYXRlRXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuXHJcblxyXG5jb25zdCBjbGVhciA9ICgpID0+e1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCl7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG59XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZUV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2LWl0ZW1cIilcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuYXZJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICBDYWxsRnVuY3Rpb24obmF2SXRlbXNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSlcclxuICAgICAgICAgICAgQ3JlYXRlRXZlbnRMaXN0ZW5lcnMoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBDYWxsRnVuY3Rpb24obmFtZSl7XHJcbiAgICBjbGVhcigpXHJcbiAgICBuYXZCYXIoKVxyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcImhvbWVcIjpcclxuICAgICAgICAgICAgcGFnZUxvYWRlcigpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjb250YWN0XCI6XHJcbiAgICAgICAgICAgIGNvbnRhY3QoKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibWVudVwiOlxyXG4gICAgICAgICAgICBtZW51KClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuLy8gZnVuY3Rpb24gQ2hhbmdlQWN0aXZlKG5vZGVsaXN0LGluZGV4KXtcclxuICAgIFxyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlbGlzdC5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIG5vZGVsaXN0W2ldLmNsYXNzbGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gICAgIG5vZGVsaXN0W2luZGV4XS5jbGFzc2xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=