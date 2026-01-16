const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JS"
}

estudante.telefone = '55119999999'; //Adicionei ao objeto. Isso também serve para alterar um valor que já existe no objeto.
console.log(estudante.telefone);

//Também pode-se deletar uma propriedade do objeto com DELETE.
//Exemplo: delete objPersonagem.aliado ou
//delete objPersonagem['aliado'].