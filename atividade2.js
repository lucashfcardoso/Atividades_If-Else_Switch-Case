const leia = require ("readline-sync")

let num
num = leia.questionInt ("Digite um número: ")
let res
res = num % 2

if (res==0) {
    if (num > 0) {
        console.log("Este número é par e positivo")
    } else {
        console.log("Este número é par e negativo")
    }
} else if (res != 0) {
     if (num > 0) {
        console.log("Este número é impar e positivo")
     } else {
        console.log("Este número é ímpar e negativo")
     }
}