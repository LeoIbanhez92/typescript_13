import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for(let indice = 0; indice < 10; indice++){
    numeros.add(leia.questionInt("Digite 10 numeros: "))
}

for(let numero of numeros){
    console.log(numero);
}