let a = {
    nome: "matheus",
    idade: "22"
}

let b = JSON.stringify(a)

let a2 = '{"nome:""matheus", "nota": 8.5}';

let b2 = JSON.parse(a2)

console.log(a)
console.log(b)

console.log(a2)
console.log(b2)

console.log(b2.nota)
