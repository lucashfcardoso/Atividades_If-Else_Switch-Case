const leia = require('readline-sync')

let a
let b
let c

a = leia.questionInt ("Digite o primeiro numero: ")
b = leia.questionInt ("Digite o segundo numero: ")
c = leia.questionInt ("Digite o terceiro numero: ")

if (a +b < c) {
    console.log ("A soma de A + B é menor que C")
} 
else if (a + b > c) {
    console.log ("A soma de A + B é maior que C ")
}
else if (a + b == c) {
    console.log ("A soma de A + B é igual a C")
}
