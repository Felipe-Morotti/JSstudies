const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); //Conversão de JSON para string, útil para comunicação entre partes de produção.
//console.log(stringEstudante);
//console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante); //Transformando a string em objeto.
console.log(objEstudante);
console.log(typeof objEstudante);