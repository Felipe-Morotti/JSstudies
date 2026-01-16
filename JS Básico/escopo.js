let estudante;

if (1 > 0) {
    estudante = 'Felipe';
    console.log(estudante);
}

// Para o JS, uma variável sem var ou let ou const é na verdade um var, então os dois estudantes são variáveis diferentes, isso se dá pelo escopo da variável
console.log(estudante);

// Uma let ou const dentro de um bloco como o bloco if é restrita ao bloco, seu escopo é apenas o bloco. Já uma var, mesmo dentro de um bloco, é acessível fora dele.