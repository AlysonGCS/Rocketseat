let teste1 = document.querySelector(".guest span");

console.log(teste1);

teste1.textContent = "Alyson"

const input = document.querySelector("#name")
input.classList.add("input-error")
input.classList.remove("input-error")
input.classList.toggle("input-error")

const button = document.querySelector("button")
button.style.backgroundColor = "green"


const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Rodrigo"
newGuest.append(guestName)
console.log(newGuest)

guests.prepend(newGuest)
guests.append(newGuest)

newGuest.classList.add("guest")


//input.setAttribute("disabled", true)
//input.setAttribute("type", "file")

window.addEventListener("load", () => {
    console.log("A página foi carregada!")
})

addEventListener("click", (ev) => {
    console.log(ev)
})