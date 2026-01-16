function exibeInfosEstudante(nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`;
}

console.log(exibeInfosEstudante('Felipe', 10));

//Esse jeito de declarar função tem hoisting, o que quer dizer que
//o JS coloca ela no topo, lendo ela antes do restante do código.
//Isso não acontece com a expressão de função: const ... = function ... (São funções anônimas)


//Arrow functions(anônimas também):

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 || faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

console.log(exibeNome('Felipe'));