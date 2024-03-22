const leia = require ('readline-sync')

console.log ("Código do Cargo - Cargo - Reajuste")
console.log ("1 - Gerente - 10%")
console.log ("2 - Vendedor - 7%")
console.log ("3 - Supervisor - 9%")
console.log ("4 - Motorista - 6%")
console.log ("5 - Estoquista - 5%")
console.log ("6 - Técnico de TI - 8%")

let nome
nome = leia.question ("Digite o nome do colaborador: ")
let codigo
codigo = leia.questionInt ("Digite o código do cargo do colaborador: ")
let salario
salario = leia.questionFloat("Digite o salário: ")

switch (codigo) {
    case 1: 
        console.log("Nome do colaborador: " , nome)
        console.log("Cargo: ")
        console.log("Novo salário: " , (salario + (0.10 * salario))) 
        break; 
    case 2: 
        console.log("Nome do colaborador: " , nome)
        console.log("Cargo: ")
        console.log("Novo salário: " , (salario + (0.7 * salario))) 
        break; 
    case 3: 
        console.log("Nome do colaborador: " , nome)
        console.log("Cargo: ")
        console.log("Novo salário: " , (salario + (0.9 * salario))) 
        break; 
    case 4: 
        console.log("Nome do colaborador: " , nome)
        console.log("Cargo: ")
        console.log("Novo salário: " , (salario + (0.6 * salario))) 
        break; 
    case 5: 
        console.log("Nome do colaborador: " , nome)
        console.log("Cargo: ")
        console.log("Novo salário: " , (salario + (0.5 * salario))) 
        break; 
    case 6: 
        console.log("Nome do colaborador: " , nome)
        console.log("Cargo: ")
        console.log("Novo salário: " , (salario + (0.8 * salario))) 
        break; 
        default:
        console.log("Algum valor está incorreto")
}