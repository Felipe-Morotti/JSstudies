const notas = [10, 9.5, 8, 7, 6];

//const notasAtualizadas = notas.map(function (nota) {
//    return ++nota;
//})

//O mesmo conceito, mas agora callback com arrow function:

//const notasAtualizadas = notas.map((nota) => ++nota >= 10 ? 10 : nota++)

//console.log(notasAtualizadas);

//Padronizar listas:

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesPadronizados);

