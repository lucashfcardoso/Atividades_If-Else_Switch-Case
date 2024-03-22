const leia = require ('readline-sync')

console.log ("Código do Produto - Produto - Preço Unitário")
console.log("1 - Cachorro Quente - 10 reais")
console.log("2 - X-Salada - 15 reais")
console.log("3 - X-Bacon - 18 reais")
console.log("4 - Baurú - 12 reais")
console.log("5 - Refrigerante - 08 reais")
console.log("6 - Suco - 13 reais")

let codigo
codigo = leia.questionInt ("Digite o código correspondente ao seu pedido: ")
let quantidade
quantidade = leia.questionInt ("Digite a quantidade do seu pedido: ")

switch (codigo) {
    case 1:
        console.log("Seu pedido é deu" , (10 * quantidade) , "reais!" )
        break;
    case 2:
        console.log("Seu pedido é deu" , (15 * quantidade) , "reais!" )
        break;
    case 3:
        console.log("Seu pedido é deu" , (18 * quantidade) , "reais!" )
        break;
    case 4:
        console.log("Seu pedido é deu" , (12 * quantidade) , "reais!" )
        break;
    case 5:
        console.log("Seu pedido é deu" , (8 * quantidade) , "reais!" )
        break;
    case 6:
        console.log("Seu pedido é deu" , (13 * quantidade) , "reais!" )
        break;
    default:
        console.log("Digite um valor válido!")
}