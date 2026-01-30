import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(5,4,3,6,7);

numeros.push(leia.questionInt("Digite um numero: "));

for(let numero of numeros){
    console.log(numero);
}

//VERIFICA SE O ELEMENTO EXISTE
console.log("O número 5 existe?", numeros.includes(5));

//VERIFICA O INDICE DO ELEMENTO
console.log("O indice do numero 7: ", numeros.indexOf(7));

//DELETAR ELEMENTO
numeros.splice(numeros.indexOf(7), 2);

console.table(numeros);