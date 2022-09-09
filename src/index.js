import {pageLoader,navBar} from "./page-load.js"
import {contact} from "./contact.js"
console.log("hello world")
navBar()
// pageLoader()
contact()

const clear = () =>{
    const content = document.getElementById("content")
    content.textContent= ""
}