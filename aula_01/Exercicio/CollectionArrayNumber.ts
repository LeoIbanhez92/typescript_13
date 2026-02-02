import leia = require("readline-sync");

let numero = [2,5,1,3,4,9,7,8,10,6];

//RECEBE O NÚMERO DO USUÁRIO E ARMAZENA ELE NA VARIÁVEL *NUMERODOUSUARIO
let numeroDoUsuario = leia.questionInt("Digite um numero: ");

//NO existe ARAMAZENA A POSIÇÃO QUE O NÚMERO DO USUÁRIO ESTÁ
const existe = numero.indexOf(numeroDoUsuario);

//NO IF FAZ A COMPARAÇÃO
if(existe !== -1){
    console.log(`O numero ${numeroDoUsuario} está localizado na posição: ${existe}`);
}else {
    console.log(`O número ${numeroDoUsuario} não foi encontrado!`);
}

