
    let pessoas = ['igor', 'josé', 'Marcos']

    function sortear(){

        let np = pessoas.length;

        let ns = Math.floor(Math.random() * np);

        document.getElementById("display").innerHTML = pessoas [ns]
    }