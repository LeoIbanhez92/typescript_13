import leia = require("readline-sync");

const participantes: Map<number,string> = new Map<number,string>();

participantes.set(1 , "Ana");
participantes.set(2 , "Samuel");
participantes.set(3 , "Leonardo");
participantes.set(4 , "Camila");

// let matricula =leia.questionInt("Digite o numero da matricula: ");
// let nome = leia.question("Digite o nome do participante: ");

// participantes.set(matricula, nome);

//DESESTRUTURAÇÃO
for(let[matricula, nome] of participantes){
    console.log(`Matrícula: ${matricula} - Nome: ${nome}`);

    //PROCURA UM ELEMENTO PELA CHAVE
    console.log("Existe a matricula 2?", participantes.has(2));
    
    //PROCURAR UM ELEMENTO PELO VALOR
    console.log("Existe a participante Ana?", Array.from(participantes.values()).includes("Ana"));
}


//AMOSTRA SOMENTE A MATRICULA
for (let matricula of participantes.keys()){
    console.log(matricula);
}

console.log("Qual o nome do aluno com a matricula 3? ", participantes.get(3));

participantes.delete(3);

console.table(participantes);