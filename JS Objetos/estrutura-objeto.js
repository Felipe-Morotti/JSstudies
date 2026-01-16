const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JS"
}

//console.log(estudante.nome); // Uma maneira de acessar objetos.

//Método interessante: .substring(inicio, fim) pega uma parte da string desejada.

//Outra maneira de acessar objetos: com colchetes.

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));