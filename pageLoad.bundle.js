/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gcGFnZUxvYWRlcigpe1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICBsZXQgdGV4dGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIkEgeW91bmcgY2hlZiBmcm9tIHRoZSB3b3JsZCBvZiBmaW5lIGRpbmluZyBjb21lcyBob21lIHRvIENoaWNhZ28gdG8gcnVuIGhpcyBmYW1pbHkncyBJdGFsaWFuIGJlZWYgc2FuZHdpY2ggc2hvcCBhZnRlciB0aGUgc3VpY2lkZSBvZiBoaXMgb2xkZXIgYnJvdGhlciwgd2hvIGxlZnQgYmVoaW5kIGRlYnRzLCBhIGRpbGFwaWRhdGVkIGtpdGNoZW4sIGFuZCBhbiB1bnJ1bHkgc3RhZmYuXCJcclxuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJUaGUgYmVhciBjb21pbmcgb3V0IHNvb24hXCJcclxuICAgIHRleHRkaXYuY2xhc3NMaXN0LmFkZChcInRleHRcIilcclxuICAgIHRleHRkaXYuYXBwZW5kQ2hpbGQocClcclxuICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0ZGl2KVxyXG4gICAgbGV0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBob21lSW1nLnNyYz1cIi4uL21hcmN1cy5qcGdcIlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lSW1nKVxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gbmF2QmFyKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKVxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIilcclxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdkYXRhJyxcImhvbWVcIilcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsXCJoaWRkZW5cIilcclxuICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiZGF0YVwiLFwibWVudVwiKVxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIixcImhpZGRlblwiKVxyXG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsXCJjb250YWN0XCIpXHJcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCJcclxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSlcclxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdilcclxuICAgIFxyXG59XHJcbmV4cG9ydHtwYWdlTG9hZGVyLG5hdkJhcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=