const leia = require ('readline-sync')

let palavra1
let palavra2
let palavra3

palavra1 = leia.question ("Digite a palavra 1 ")
palavra2 = leia.question ("Digite a palavra 2 ")
palavra3 = leia.question ("Digite a palavra 3 ")

if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("Águia")
        }
        else if (palavra3 === "onivoro") {
            console.log("Pomba")
        }

        } else if (palavra2 === "mamifero") {
            if (palavra3 === "onivoro") {
                console.log("Homem")
            } else if (palavra3 === "herbivoro") {
                console.log("Vaca")
            }
        }
}else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("Pulga")
           }   else if (palavra3 === "herbivoro") {
                console.log("Lagarta")
                }
            }
            } 
    else if (palavra2 === "anelideo") {
            if (palavra3 === "hematofago") {
            console.log("Sanguessuga")
        } else if (palavra3 === "onivoro") {
            console.log("Minhoca")
        }
    }