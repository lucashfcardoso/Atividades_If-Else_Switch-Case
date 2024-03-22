const leia = require("readline-sync")

let nome
let idade
let primeira

nome = leia.question("Digite seu nome: ")
idade = leia.questionInt("Digite sua idade: ")
primeira = leia.keyInYNStrict ("É a sua primeira doação de sangue? y para sim e n para não")

if (idade >= 18 && idade < 60) {
    console.log(nome + " está apto para doar sangue! ")
} else if (idade >= 60 && idade <= 69) {
    if (primeira == true) {
        console.log(nome + " não está apto para doar sangue! ")
    } else {
        console.log(nome + " está apto para doar sangue! ")
    }
} else {
    console.log(nome + " não está apto para doar sangue! ")
}