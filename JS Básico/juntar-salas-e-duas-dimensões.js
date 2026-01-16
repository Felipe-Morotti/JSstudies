const sala1 = ['Felipe', 'Caroline'];
const sala2 = ['Paula', 'Aparecido'];

const salaUnificada = sala1.concat(sala2);
console.log(salaUnificada);


//duas dimensões.

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; //é uma matriz.
console.log(`a aluna da posição 1 da lista é: ${lista[0][1]}.
    a nota dessa aluna é: ${lista[1][1]}`);