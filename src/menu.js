export function menu(){
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