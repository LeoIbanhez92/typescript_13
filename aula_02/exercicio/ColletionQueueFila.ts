import leia = require("readline-sync");
import Queue = require("../Queue");

const fila = new Queue<string>();
let opcao: number;

do {

    console.log("***************************************************");
    console.log("          1- Adicionar Cliente na Fila             ");
    console.log("          2- Listar Todos os Clientes              ");
    console.log("          3- Retirar Cliente da Fila               ");
    console.log("          0 - Sair                                 ");
    console.log("***************************************************");

    opcao = leia.questionInt("Digite uma opcao: ");

    switch (opcao) {
        case 1:
            fila.enqueue(leia.question("Digite o seu nome: "));
            break;

        case 2:
            console.log("\n***************************************************");
            console.log("               Clientes na Fila                      ");
            fila.printQueue();

            break;

        case 3:
            let clienteChamado = fila.dequeue();
            if (clienteChamado !== undefined) {
                console.log(`\nO Cliente ${clienteChamado} foi chamado.`);
            }

            break;

        case 0:
            console.log("\nAté outro dia !");

            break;
        default:
            console.log("ERRO: Entrada inválida !");
            
            break;

    }
} while (opcao !== 0)