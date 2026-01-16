//const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
//const medias = [7, 4.5, 8, 7.5];

//const reprovados = alunos.filter((_, indice)=> {
//    return medias[indice] < 7;
//});

//console.log(reprovados);

//Reduce agora:

const sala1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const sala2 = [6, 5, 8, 9, 5, 6];
const sala3 = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calculaMedia(sala1));
console.log(calculaMedia(sala2));
console.log(calculaMedia(sala3));