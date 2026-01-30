import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for(let indice = 0; indice < 5; indice++){
    cores.push(leia.question("Digite uma Cor: "));
}

console.table(cores);
console.table(cores.sort());
