import leia = require("readline-sync");

const numero: Set<number> = new Set<number>([1,12,4,5,7,22,8,9,14,55]);

//RECEBE O NÚMERO DO USUÁRIO E ARMAZENA ELE NA VARIÁVEL *NUMERODOUSUARIO
let numeroDoUsuario = leia.questionInt("Digite um numero: ");

//NO existe ARAMAZENA A POSIÇÃO QUE O NÚMERO DO USUÁRIO ESTÁ
const existe = numero.has(numeroDoUsuario);

//NO IF FAZ A COMPARÇÃO
if(existe){
    console.log(`O número ${numeroDoUsuario} foi encontrado`);
}else {
    console.log(`O número ${numeroDoUsuario} não foi encontrado!`);
}