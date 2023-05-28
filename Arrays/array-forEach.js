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

// Exemplo usando o for, que é 'ruim' dentro do js, visto que existem opções melhores
//
// for(let i = 0; i < list.length; i++){
//     console.log(list[i]);
// }

// Mesmo exemplo de cima, porém utilizando o forEach dos vetores do js
//
// O forEach recebe uma função anonima que vai trata o conteudo de cada indice da lista
// nele é possivel fazer qualquer alteração dentro da lista, assim como no for
// porém de forma mais dinamica e muito mais simples, sem precisar depende do indice criado pelo for
//
list.forEach( (obj) => {

    console.log(obj)

});

// Exemplo criando elementos dentro do forEach
//
let soma = 0;

const somaIdade = (obj) => {
    soma += obj.idade;
};

list.forEach(somaIdade);

console.log('Soma idade: ',soma)