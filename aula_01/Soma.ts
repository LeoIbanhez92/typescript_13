import leia = require("readline-sync");

let numero1: number , numero2: number;

numero1 = leia.questionFloat("Digite o primeiro nemero: ");
numero2 = leia.questionFloat("Digite o segundo nemero: ");

console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
