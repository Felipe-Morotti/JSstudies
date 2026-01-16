const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JS",
    bolsista: true,
    telefones: ['5511999998', '55119999993'],
    enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
    }]
}

//endereço é uma lista de objetos

estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
})

console.log(estudante.enderecos);