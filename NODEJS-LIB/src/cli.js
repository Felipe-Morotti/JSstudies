import fs from 'fs'; //File System para poder interagir com arquivos.
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(chalk.red('erro: favor inserir caminho de origem e destino'))
            program.help();
            return
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('texto processado com sucesso'));

        } catch (erro) {
            console.log('ocorreu um erro no processamento', erro);
        }
    })

program.parse();

//const caminhoArquivo = process.argv;//Permite que eu passe instruções para o terminal e que elas vão para um array.

function processaArquivo(texto, destino) {

    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch(erro) {
            trataErros(erro);
        }
    })
}


// Tipos de códigos importantes de serem destacados.

// Código síncrono é como ser comunicar com rádios, uma pessoa não pode falar
// enquanto a outra fala, o sistema não permite, não chegará voz do outro lado.
// Ou seja, é quando uma operação do programa trava o restante. Por exemplo,
// o programa ter que esperar uma strig gigante ser processada para que ele continue,
// e é só isso que o programa está fazendo.
// Código assíncrono é como se comunicar por mensagens de celular, uma pessoa pode mandar,
// quantas mensagens quiser, em qualquer ordem, e isso não proíbe a outra pessoa de mandar
// mensagens também, à medida que quiser. Ou seja, quando há uma requisição em um código
// assíncrono, o programa não para enquanto espera uma resposta, diferentement do código síncrono.
// EXEMPLOS DE CÓDIGO ASSÍNCRONO: Leitura/Manipulação de arquivos em disco. Comunicação entre cliente e servidor.
// Operações em bancos de dados.

// PROMESSAS: Encapsula operações assíncronas.
// Estados da promessa: pending, fulfilled e rejected.

// ASYNC, AWAIT. 
// ASYNC e AWAIT são usadas para indicar para o interpretador que nesse trecho do código
// há uma operação assíncrona.

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    } catch (erro) {
        throw erro;

    }
}

// THEN pode ser utilizado no lugar da dupla ASYNC E AWAIT. Como mostrado abaixo:

//function criaESalvaArquivo(listaPalavras, endereco) {
//    const arquivoNovo = `${endereco}/resultado.txt`;
//    const textoPalavras = JSON.stringify(listaPalavras);
//    fs.promises.writeFile(arquivoNovo, textoPalavras)
//    .then(() => { //O then se responsabiliza por entregar o final da promessa
//        console.log('arquivo criado');
//    })
//    .catch((erro) => {
//        throw erro;
//    })
//    .finally(() => console.log('operação finalizada'))    
//}