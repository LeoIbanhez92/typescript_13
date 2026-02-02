import leia = require("readline-sync");
import Stack = require("../Stack");


const fila = new Stack<string>();
let opcao: number;

do {

    console.log("***************************************************");
    console.log("          1- Adicionar Livro na Pilha              ");
    console.log("          2- Listar Todos os Livros                ");
    console.log("          3- Retirar Livro da Fila                 ");
    console.log("          0 - Sair                                 ");
    console.log("***************************************************");

    opcao = leia.questionInt("Digite uma opcao: ");

    switch (opcao) {
        case 1:
            fila.push(leia.question("Digite o nome do Livro: "));
            break;

        case 2:
            console.log("\n***************************************************");
            console.log("               Livro fora da Pilha                   ");
            fila.printStack();

            break;

        case 3:
            let livroRemovido = fila.pop();
            if (livroRemovido !== undefined) {
                console.log(`\nO Livro ${livroRemovido} foi Removido.`);
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