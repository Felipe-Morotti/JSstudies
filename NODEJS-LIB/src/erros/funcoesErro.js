export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        console.log('Arquivo não encontrado');
    } else {
        console.log('Erro na aplicação');
    }
}