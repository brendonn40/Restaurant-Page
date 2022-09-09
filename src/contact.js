export function contact(){
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