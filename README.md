Leonardo Ibanhez
leoibanhez
Disponível

Este é o começo do canal #🖥typescript. 
Rafael Queiróz — 30/01/2026 08:04
@Participantes  Bom dia Turma JavaScript 13!

Seguem os conteúdos da 1ª Live Code sobre TypeScript (30/01/2026 - Sexta-Feira) :

Collections (Coleções)

Introdução ao TypeScript: https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/10p01.md
https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/10p02.md

Entrada de Dados no TypeScript: https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/11.md

Collections: https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/12.md 
GitHub
cookbook_javascript/01_javascript/10p01.md at main · conteudoGener...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
cookbook_javascript/01_javascript/10p01.md at main · conteudoGener...
GitHub
cookbook_javascript/01_javascript/10p02.md at main · conteudoGener...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
GitHub
cookbook_javascript/01_javascript/11.md at main · conteudoGenerati...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
GitHub
cookbook_javascript/01_javascript/12.md at main · conteudoGenerati...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
cookbook_javascript/01_javascript/12.md at main · conteudoGenerati...
Rafael Queiróz — 30/01/2026 13:31
@Participantes Segue o Repositório com o conteúdo de TypeScript: https://github.com/LeoIbanhez92/typescript_13

O Repositório de  JavaScript já está atualizado.

Criem um repositório exclusivo para o TypeScript para não misturar com o conteúdo de JavaScript.
GitHub
GitHub - LeoIbanhez92/typescript_tjs13
Contribute to LeoIbanhez92/typescript_tjs13 development by creating an account on GitHub.
GitHub - LeoIbanhez92/typescript_tjs13
Rafael Queiróz — 02/02/2026 08:21
@Participantes  Bom dia Turma JavaScript 13!

Seguem os conteúdos da 2ª Live Code sobre TypeScript (02/02/2026 - Segunda-Feira) :

Estrutura de Dados:
https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/13.md
GitHub
cookbook_javascript/01_javascript/13.md at main · conteudoGenerati...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
cookbook_javascript/01_javascript/13.md at main · conteudoGenerati...
João Pedro — 02/02/2026 10:33
interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }

   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }

   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }

   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }

   count(): number {
      let len = this.QueueData.length;
      return len;
   }

   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }

   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }

   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   clear(): void {
      this.QueueData.length = 0;
   }

}
Márcia T. Fogaça — 02/02/2026 10:46
interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}
 
 class Queue<Type> implements queueInterface<Type> {
 
   private QueueData: Array<Type> = [];
 
   constructor() { }
 
   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }
 
   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }
 
   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }
 
   count(): number {
      let len = this.QueueData.length;
      return len;
   }
 
   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }
 
   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }
 
   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }
 
   clear(): void {
      this.QueueData.length = 0;
   }
 
}
export   =  Queue
Leonardo Ibanhez — 02/02/2026 11:10
interface stackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printStack(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
 }
 
 export class Stack<Type> implements stackInterface<Type> {
 
    private StackData: Array<Type> = [];
 
    constructor() { }
 
    isEmpty(): boolean {
       let result = this.StackData.length <= 0;
       return result;
    }
 
    push(dataItem: Type): void {
       this.StackData.push(dataItem);
    }
 
    pop(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.StackData.pop();
          return element;
       }
    }
 
    count(): number {
       let len = this.StackData.length;
       return len;
    }
 
    printStack(): void {
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {
          console.log(this.StackData[i]);
       }
    }
 
    peek(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.StackData[this.StackData.length - 1];
          return element;
       }
    }
 
    contains(dataItem: Type): boolean {
       if (this.StackData.includes(dataItem)) {
          return true;
       } else {
          return false;
       }
    }
 
    clear(): void {
       this.StackData.length = 0;
    }
 
 }
Rafael Queiróz — 02/02/2026 14:22
@Participantes  🚨 ATENÇÃO!  🚨


Pessoal eu corrigi o arquivo tsconfig.json e agora está funcionando a importação. Inclusive eu atualizei todos os arquivos da Live Code de sexta e de hoje.

Copiem o conteúdo do arquivo tsconfig.json do repositório https://github.com/LeoIbanhez92/typescript_13 e colem no tsconfig.json do repositório local na máquina de vocês.

Depois atualizem as importações, inclusive do readline-sync.

Conforme prometido, encaminhei os exemplos da LinkedList e da Árvore Binária.

Qualquer dúvida, é só chamar! 
GitHub
GitHub - LeoIbanhez92/typescript_tjs13
Contribute to LeoIbanhez92/typescript_tjs13 development by creating an account on GitHub.
GitHub - LeoIbanhez92/typescript_tjs13
Erick Santana

 — 02/02/2026 14:25
@Rafael Queiróz Você pode explicar as mudanças que você fez quando a gente voltar as 16h?
Rafael Queiróz — 02/02/2026 14:29
Posso!
Rafael Queiróz — 02/02/2026 14:47
De qualquer forma coloquei os comentários em Português no tsconfig e adicionei no README o que cada opção ativa faz .
Matheus Moura Bastos — 02/02/2026 14:55
@Rafael Queiróz Não entendi muito bem
É pra substituir todo o conteúdo do nosso atual tscongi.json pelo que você colocou no repositório ou acrescentar?
É pra ficar quase tudo como comentário mesmo? (Exceto as partes que explicam cada função)
Erick Santana

 — 02/02/2026 15:47
Algumas bibliotecas, como essa do readlinesync você vai dar o nome que você quiser para elas (como já fazíamos nos imports)... ou pode importar a função diretamente.

exemplo:
⁨⁨⁨⁨⁨⁨⁨⁨⁨⁨⁨
import  leia from "readline-sync";
 // importa todas as funções do readline com o nome de leia... e usamos como aprendemos leia.question();
⁩⁩⁩⁩⁩⁩⁩⁩⁩⁩⁩
mas com essa nova configuração, você pode importar só as funções que voce vai usar:

⁨⁨⁨⁨⁨⁨⁨⁨⁨⁨⁨
import  {question} from "readline-sync"; 
// importa só a question, nao o pacote completo do readline

import  {question, questionInt} from "readline-sync"; 
// importa só as duas funções, nao o pacote completo do readline
⁩⁩⁩⁩⁩⁩⁩⁩⁩⁩⁩

Ai nessa ultima, na hora de usar você digita:

⁨⁨⁨⁨⁨⁨⁨⁨
const escolha = question("Digite sua escolha");
⁩⁩⁩⁩⁩⁩⁩⁩

E no caso dos export:

⁨⁨⁨
export default class Queue  [...]
// Se você exportar assim... voce pode importar assim:
import Queue from "../Queue"
⁩⁩⁩

⁨⁨⁨
export class Queue  [...]
// Já se você não exportar como default o import deve ser feito assim:
import { Queue } from "../Queue"
⁩⁩⁩ 
Rafael Queiróz — Ontem às 07:58
@Participantes   Bom dia - Turma JavaScript 13!

Seguem os conteúdos da 3ª Live Code sobre TypeScript (03/02/2026 - Terça-Feira) :

Funções:

https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/14.md

Projeto Conta Bancária:

https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/pr01.md
https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/pr02.md
GitHub
cookbook_javascript/01_javascript/14.md at main · conteudoGenerati...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
cookbook_javascript/01_javascript/14.md at main · conteudoGenerati...
GitHub
cookbook_javascript/01_javascript/pr01.md at main · conteudoGenera...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
cookbook_javascript/01_javascript/pr01.md at main · conteudoGenera...
GitHub
cookbook_javascript/01_javascript/pr02.md at main · conteudoGenera...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
cookbook_javascript/01_javascript/pr02.md at main · conteudoGenera...
Juliana Barreto — Ontem às 11:20
@Rafael Queiróz manda o readme do projeto, por favor
Rafael Queiróz — Ontem às 13:35
@Participantes e @Juliana Barreto

Seguem os modelos de README do Repositório TypeScript (modelo_readme_b1_type.md) e do Projeto Conta Bancária (modelo_readme_cb_type.md). 
# Projeto Conta Bancária - TypeScript & POO

## Simulador Educacional de Sistema Bancário | Portfólio Profissional

<br />

modelo_readme_cb_type.md
7 KB
# Bootcamp JavaScript Full Stack - Generation Brasil

<br />

<div align="center">
	<img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>

modelo_readme_b1_type.md
5 KB
Rafael Queiróz — 07:54
@Participantes  Bom dia - Turma JavaScript 13!

Seguem os conteúdos da 4ª Live Code sobre TypeScript (04/02/2026 - Quarta-Feira) :

POO - Programação Orientada a Objetos:

https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/15.md

Extensão - TypeScript Toolbox: https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter

Projeto Conta Bancária:

https://github.com/conteudoGeneration/cookbook_javascript/blob/main/01_javascript/pr03.md
GitHub
cookbook_javascript/01_javascript/15.md at main · conteudoGenerati...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
TypeScript Toolbox - Visual Studio Marketplace
Extension for Visual Studio Code - Add and Optimize Imports, Generate Getters / Setters and Constructors
Imagem
GitHub
cookbook_javascript/01_javascript/pr03.md at main · conteudoGenera...
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
Contribute to conteudoGeneration/cookbook_javascript development by creating an account on GitHub.
﻿
# Bootcamp JavaScript Full Stack - Generation Brasil

<br />

<div align="center">
	<img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/github/languages/top/LeoIbanhez92/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/LeoIbanhez92/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/LeoIbanhez92/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/LeoIbanhez92/typescript_tjs13?style=flat-square" />
    <br />
  <img src="https://img.shields.io/github/issues/LeoIbanhez92/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/LeoIbanhez92/typescript_tjs13?style=flat-square" />
     <img src="https://img.shields.io/badge/bootcamp-Generation Brasil-orange?style=flat-square)"/>


</div>


------

<br />

## 1. Sobre o Repositório



Este repositório reúne os **exercícios práticos desenvolvidos durante o Bootcamp JavaScript Full Stack** da [Generation Brasil](https://brazil.generation.org/).

O conteúdo abrange desde os **fundamentos da linguagem TypeScript**, até os conceitos essenciais para lógica de programação e desenvolvimento moderno, incluindo:

- Manipulação de coleções e arrays
- Estruturas de dados
- Funções e **Arrow Functions** (programação funcional)
- Programação Orientada a Objetos (POO)
- Tratamento de erros e exceções

Os exemplos foram desenvolvidos com base nas aulas ao vivo (*Live Codes*) e em exercícios práticos voltados para **situações do dia a dia**, permitindo aplicar **todos os conceitos aprendidos em JavaScript de forma estruturada e tipada com TypeScript**, fortalecendo o raciocínio lógico e as boas práticas de desenvolvimento.

<br />

## 2. Conteúdo Programático

| Aula    | Tema                                    | Descrição                                                   |
| ------- | --------------------------------------- | ----------------------------------------------------------- |
| Aula 01 | Introdução ao TypeScript e Collections  | Conceitos básicos de TypeScript, tipagem e uso de coleções. |
| Aula 02 | Estruturas de Dados                     | Uso de estruturas para organizar e manipular dados.         |
| Aula 03 | Funções                                 | Criação e tipagem de funções reutilizáveis.                 |
| Aula 04 | Programação Orientada a Objetos         | Herança e Polimorfismo.                                     |
| Aula 05 | Programação Orientada a Objetos         | Classes Abstratas e Interfaces.                             |
| Aula 06 | Tratamento de Exceções                  | Captura e tratamento de erros com try/catch.                |
| Aula 07 | Programação Funcional (Arrow Functions) | Uso de arrow functions e conceitos funcionais.              |

<br />

## Estrutura do Repositório



```
/
├── aula_01/
├── aula02/
├── aula03/
├── aula04/
├── aula05/
├── aula06/
├── aula07/
└── README.md
```

Cada pasta contém os exemplos e exercícios desenvolvidos na respectiva aula. 

<br />

## Requisitos



Para executar os exemplos localmente, você precisará de:

- [Node.js](https://nodejs.org/) **versão 20 ou superior**
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) ou editor similar

<br />

## Como Executar os Exemplos



1. Clone o repositório

```bash
git clone https://github.com/LeoIbanhez92/javascript_tjs13.git
```

2. Abra a pasta do projeto no **Visual Studio Code**
3. No terminal, execute o comando abaixo:

```bash
npm install
```

4. Navegue até a pasta do exercício desejado
5. Execute o arquivo TypeScript com o comando:

```bash
ts-node nome_do_arquivo.ts
```

### Exemplo:

```bash
ts-node HelloWorld.ts
```

<br />

## Contribuições



Este repositório possui fins educacionais, mas contribuições são muito bem-vindas. Você pode contribuir de várias formas:

- Abrindo uma **issue**
- Enviando um **pull request**
- Sugerindo melhorias no conteúdo ou na organização
- Compartilhando com pessoas que estão aprendendo **JavaScript**

<br />

## Licença



Este projeto está licenciado sob a licença **MIT**. Sinta-se livre para estudar, modificar e reutilizar o código.

<br />

##  Contato



Desenvolvido por [**Leonardo**](https://github.com/LeoIbanhez92)
Para dúvidas, sugestões ou colaborações, utilize as **issues do GitHub** ou entre em contato diretamente pelo perfil.