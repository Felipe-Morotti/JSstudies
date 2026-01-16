const notas = [10, 6.5, 8, 7.5];

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}

//Média com o for:

let somaDasNotas = 0;
for(let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);

//Média com for...of:

for (let nota of notas) {
    somaDasNotas += nota;
}
//O resto permanece o mesmo.

//forEach:

notas.forEach(function (nota ) {
    somaDasNotas += nota;
});
//ETC
//O forEach é um método callback, que são funções que chamam outras funções dentro delas.
//Nesse caso, uma função é parâmetro de outro função.
//Lembrando de PF, isso seria uma função de alta ordem.