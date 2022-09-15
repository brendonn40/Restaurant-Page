import {pageLoader,navBar} from "./page-load.js"
import {contact} from "./contact.js"
import {menu} from "./menu.js"
navBar()
pageLoader()
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
    navBar()
    switch (name) {
        case "home":
            pageLoader()
            break;
        case "contact":
            contact()
            break;
        case "menu":
            menu()
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