function f(){
    console.log("teste")
}

function f1(){
    console.log("teste aq")
}

window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0]

    h1.addEventListener("click", f1)
}