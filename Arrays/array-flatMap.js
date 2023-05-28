const list = [
    {
        nome: 'Jose',
        idade: 13,
        cartoes: ['3244', '4321']
    },
    {
        nome: 'Luiz',
        idade: 12,
        cartoes: ['2312', '3421']
    },
    {
        nome: 'Joao',
        idade: 16,
        cartoes: ['3245', '4554']
    },
    {
        nome: 'Ricardo',
        idade: 22,
        cartoes: ['6346', '6432']
    },
    {
        nome: 'Maria',
        idade: 25,
        cartoes: ['1254', '1976']
    },
    {
        nome: 'Gabriela',
        idade: 23,
        cartoes: ['4236', '9874']
    },
];

// O flatMap, vai gerar um vetor unico vindo de varios vetores. Funciona mais ou menos como o map, porém ao inves de no caso abaixo ele gerar um vetor de vetores, ele vai gerar um unico vetor com varias posições

const cartoesMap = list.map( (obj) => obj.cartoes )
const cartoesFlatMap = list.flatMap( (obj) => obj.cartoes )

console.log(cartoesMap)
console.log(cartoesFlatMap)