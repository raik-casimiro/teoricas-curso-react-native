const list = [
    {
        nome: 'Jose',
        idade: 13,
        exibir: true
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

// O filter serve para filtrar valores dentro de um vetor, exemplo: Quero retornar da lista acima, somente quem tem idade acima de 18. O exemplo de código abaixo faz exatamente isso.

// Filtro de flag para exibir

const filterListExibir = (obj) => !!obj.exibir // As duas exclamações, servem para converter undefined para false. Uma exclamação converteria para true.
 
console.log(list.filter(filterListExibir));

// Filtro por idade

const filterListIdade = (obj) => obj.idade >= 18
 
console.log(list.filter(filterListIdade));