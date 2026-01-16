const estudante = 'Felipe';
const estaAprovado = true;

if (estaAprovado) {
    console.log('parabéns, boas festas');
} else {
    console.log('REPROVADO, boas festas');
}

if (estudante === 'Felipe') {
    console.log(`Olá, ${estudante}`);
} else {
    console.log('Quem é você?');
}

//JS é uma linguagem dinamicamente tipada! Isso significa que 1) o tipo de dado contiddo na variável é avaliado
//no momento da execução do código e 20 uma mesma variável pode ter diferentes tipos de dados (nos casos de let e var).

//includes() é útil para verificar se uma string está contida em outra. '...'.includes('...') -> retorna booleano.