const list = [
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Luiz',
        idade: 12
    },
    {
        nome: 'Joao',
        idade: 16
    },
    {
        nome: 'Ricardo',
        idade: 22
    },
    {
        nome: 'Maria',
        idade: 25
    },
    {
        nome: 'Gabriela',
        idade: 23
    },
];

// O some, vai iterar um vetor procurando o que você passou como caracteristica, caso ele encontre a caracteristica buscada em qualquer indice, ele ira retornar true, caso não, false
//
// O every, também vai iterar um vetor procurando o que você passou como caracteristica, porém para ele retornar true
// todos os objetos tem que passar pela caracteristica, no exemplo abaixo, ele só vai retorna true, se todo os objetos baterem com a verificação

const listSome = (obj) => obj.idade > 18
const listEvery = (obj) => obj.idade > 18

const resultSome = list.some(listSome)
const resultEvery = list.every(listEvery)

console.log(resultSome)
console.log(resultEvery)