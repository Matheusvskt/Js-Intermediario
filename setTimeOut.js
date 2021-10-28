function mudarCor(){
    let h = document.getElementsByTagName("h1")[0]
    h.style.backgroundColor = "blue"
}

function mudarTexto(){

    let h = document.getElementsByTagName("h1")[0]

    h.innerHTML = "Novo titulo";

    setTimeout(mudarCor, 1000)
}