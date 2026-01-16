//Lembrar da atribuição por valor e da atribuição por referência.

//const notas = [7, 7, 8, 9];
//const novaListaNotas = [...notas, 10]; //... é o spread operator. Esse sim é um array totalmente novo.

//console.log(notas);
//console.log(novaListaNotas);

//Set para remover duplicatas em um array:

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const nomesAtualizados = new Set(nomes); //Criou-se um conjunto (set) que é array like, mas não tem acesso aos métodos
//de array, então agora é preciso transformar esse conjunto em array.

//const listaNomesAtualizados = [...nomesAtualizados];

//Colocando isso tudo em uma linha apenas:
const listaNomesAtualizados = [...new Set(nomes)];

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);

