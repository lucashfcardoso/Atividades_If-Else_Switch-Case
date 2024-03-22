const leia = require ('readline-sync')

console.log("Código - Operação")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

let num1
let num2
let codigo
num1 = leia.questionFloat ("Digie o primeiro número: ")
num2 = leia.questionFloat ("Digie o segundo número: ")
codigo = leia.questionInt ("Digite o código referente ao operador: ")

switch (codigo) {
    case 1:
        console.log(num1 , "+" , num2 , "=" , (num1+num2))
        break;
    case 2:
        console.log(num1 , "-" , num2 , "= " , (num1-num2))
        break;
    case 3:
        console.log(num1 , "x" , num2 , "=" , (num1*num2))
        break;
    case 4:
        console.log(num1 , "/" , num2 , "=" , (num1/num2))
        break;
    default:
        console.log("Digite um número válido!")
}