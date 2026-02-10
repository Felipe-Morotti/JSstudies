import { writeFileSync, appendFileSync, existsSync } from "fs";
import { createInterface } from "readline";

const readline = createInterface({  //Configuração da entrada e saída do usuário no terminal.
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = (mensagem) => new Promise((resolve) => readline.question(mensagem, resolve));

class Pessoa {
    constructor(nome = "", numero = "", email = "") {
        this.nome = nome;
        this.numero = numero;
        this.email = email;
    }
    salvarCSV() {
        const conteudo = `${this.nome},${this.numero},${this.email}\n`;

        if (existsSync("./contacts.csv")) {
            try {
                appendFileSync("./contacts.csv", conteudo);
                console.log(`${this.nome} Salvo!`);
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                writeFileSync("./contacts.csv", conteudo);
                console.log(`${this.nome} Salvo!`);
            } catch (error) {
                console.log(error)
            }
        }
    }
}

const startApp = async () => {
    let deveContinuar = true;
    while (deveContinuar) {
        const nome = await readLineAsync("Nome de Contato: ");
        const numero = await readLineAsync("Número de Contato: ");
        const email = await readLineAsync("Email de Contato: ");

        const pessoa = new Pessoa(nome, numero, email);
        pessoa.salvarCSV();

        const resposta = await readLineAsync("Continuar? [y/n]: ");
        deveContinuar = resposta.toLowerCase() === "y";
    }
    readline.close();
}

startApp();