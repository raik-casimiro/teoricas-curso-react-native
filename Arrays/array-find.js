const list = [
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Luiz',
        idade: 12, 
    },
    {
        nome: 'Joao',
        idade: 16, 
    },
    {
        nome: 'Ricardo',
        idade: 22,  
    },
    {
        nome: 'Maria',
        idade: 25, 
    },
    {
        nome: 'Gabriela',
        idade: 23, 
    },
];

// O find funciona para buscar o primeiro obj que corresponde a busca, diferente do filter, que irá trazer todos os objs que corresponderem
// Caso ele não ache nada, ele irá retorna undefined

const findListIdade = (obj) => obj.idade >= 18

console.log(list.find(findListIdade))