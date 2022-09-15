import marcus from "./marcus.jpg"
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
    homeImg.src = marcus
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
export{pageLoader,navBar}