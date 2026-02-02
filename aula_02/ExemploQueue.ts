import leia = require("readline-sync");

import Queue = require("./Queue");

const fila = new Queue<string>();

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");
fila.enqueue(leia.question("Digite um nome: "));

fila.printQueue();

console.log("\n");

fila.dequeue();

fila.printQueue();

console.log("Tamanho da fila: ", fila.count());

console.log("O Erick esta na dila ?: ", fila.contains("Erick"));