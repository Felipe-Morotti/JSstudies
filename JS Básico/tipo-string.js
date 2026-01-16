const estudante = "Felipe";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Feliṕe diz: "nosso lema é estudar bastante!"`;

console.log(cumprimento);
console.log(citacao);

console.log(`o estudante chama ${estudante}`); // template string

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);