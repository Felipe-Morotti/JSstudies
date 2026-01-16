const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JS",
    bolsista: true,
    telefones: ['5511999998', '55119999993']
}

for (let chave in estudante) {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}