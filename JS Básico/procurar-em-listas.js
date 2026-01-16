const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');

//Observaçõa importante: desestruturação de listas.
//Funcionaria da mesma maneira se eu escrevesse: const [alunos, medias] = lista; com alterações subsequentes no código.
//Dessa maneira, o JS distribui os valores dentro de lista em cada elemento do array, alunos e medias.