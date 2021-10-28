var numero = 0;

var interval;
function atualizarText() {

    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML += "" + numero;
    numero++;

}

function iniciar() {


    interval = setInterval(atualizarText, 3000);

}

function parar() {

    clearInterval(interval);

}