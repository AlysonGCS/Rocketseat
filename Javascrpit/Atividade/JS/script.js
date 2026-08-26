const amount = document.querySelector("#amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")


amount.addEventListener("input", (e) => {
    //console.log(amount.value)
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex,"")
})

//form.addEventListener("submit", (e) => {
//    e.preventDefault()
//})

form.onsubmit = (e) => {
    e.preventDefault()
    if (currency.value == "") {        
        currency.style.border = "1px solid red"
        alert("Selecione uma moeda para continuar")        
    } else {
        console.log(currency.value)
    }
}