const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JS",
    bolsista: true,
    telefones: ['5511999998', '55119999993'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false //this é referencia ao objeto atual.
    }
}

console.log(estudante.estaAprovado(7));

//Observação importante: não é bom usar arrow function quando this. está sendo usado.