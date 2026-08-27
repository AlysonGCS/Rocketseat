const amount = document.querySelector("#amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

const USD = 5.12
const EUR = 5.57
const GBP = 6.09


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
        //console.log(currency.value)
        currency.style.border = "1px solid #4a5dcd"
        switch(currency.value){
            case "USD":
                convertCurrency(amount.value,USD,"US$")
                break
            case "EUR":
                convertCurrency(amount.value,EUR,"€")    
                break
            case "GBP":
                convertCurrency(amount.value,GBP,"£")    
                break   
        }                 
    }
}

function convertCurrency(amount,price,simbol){
    try{
        description.textContent = `${simbol} 1 = ${formatCurrencyBRL(price)}`
        
        let total = amount * price

        total = formatCurrencyBRL(total)

        result.textContent = `${String(total).replace("R$","")} Reais`
        
        footer.classList.add("show-result")
    } catch (error){
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("PT-BR",{
        style: "currency",
        currency: "BRL"
    })
}