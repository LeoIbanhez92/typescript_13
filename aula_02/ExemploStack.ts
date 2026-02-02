import leia = require("readline-sync");
import { Stack } from "./Stack";
;



const pilha = new Stack<string>();

pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");
//pilha.push(leia.question("Digite um nome: "));

pilha.printStack();

console.log("\n");

pilha.pop();

pilha.printStack();

console.log("Tamanho da pilha: ", pilha.count());

console.log("O Erick esta na dila ?: ", pilha.contains("Erick"));