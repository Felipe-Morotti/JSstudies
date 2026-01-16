const estudantes = require('./estudantes.json');

function buscaInfo(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInfo(estudantes, 'nome', 'Juliet');

const telefoneEstudante = buscaInfo(estudantes, 'telefone', '1198123183');

console.log(estudanteEncontrado);

console.log(telefoneEstudante);