import {pageLoader,navBar} from "./page-load.js"
import {contact} from "./contact.js"
import {menu} from "./menu.js"
console.log("hello world")
navBar()
// pageLoader()
// contact()
menu()


const clear = () =>{
    const content = document.getElementById("content")
    content.textContent= ""
}