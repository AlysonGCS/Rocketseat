const ul = document.querySelector("ul")

function showAlerta(){
    alert("Teste")
    console.log("Teste")
}

ul.addEventListener("scroll", showAlerta())