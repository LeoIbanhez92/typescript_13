import leia = require("readline-sync");

const cores: Set<string> = new Set<string>();
cores.add("Azul");
cores.add("Amarelo");
cores.add("Preto");
cores.add("Roxo");
cores.add("Verde");

console.table(cores);

//VERIFICA SE O ELEMENTO EXISTE
console.log("O cor Verde existe", cores.has("verde"));


//DELETAR ELEMENTO
cores.delete("Azul");

console.table(cores);

for(let cor of cores){
    console.log(cor);
}