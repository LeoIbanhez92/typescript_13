const numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

const numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

const estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

const estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

const estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

//TODOS MAP

// console.log("\n Multiplicar todos os elementos por 3: ");

// const numeroMultiplicadosPor3 = numerosOrdenados.map(numero => numero * 3);

// console.dir(numeroMultiplicadosPor3);

//TODOS FILTER

// console.log("\n Listar todos os Estados que possuem a palavra Rio");

// const estadosRio = estados.filter(estado => estado.toUpperCase().includes("Rio"));

// console.dir(estadosRio);


// console.log("\n Listar todos os Estados que terminam com a palavra Sul");

// const estadosTerminamSul = estados.filter(estado => estado.toUpperCase().endsWith("SUL"));

// console.dir(estadosTerminamSul);

//TODOS REDUCE

// console.log("\n Listar todos os Estados sem repetições");

// const estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], estado) => {
//     if(acumulador.indexOf(estado) === -1)
//         acumulador.push(estado)

//     return acumulador;
// }, []);

// console.log(estadosSemRepeticoes);


//TODOS FIND

// console.log("\n Encontrar o primeiro número maior que 9");

// const numeroMaior9 = numerosRepetidos.find(numero => numero > 9);

// console.log(numeroMaior9);

// const indiceNumeroMaior9 = numerosRepetidos.findIndex(numero => numero > 9);

// console.log(indiceNumeroMaior9);

//TODOS SPREAD OPERATOR

console.log("\n Combinar 2 Arrays");

const arrayCombinado: number[] = [...numerosOrdenados, ...numerosDesordenados];

console.log(arrayCombinado);
