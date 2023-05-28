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

/* IMPORTANTE

    Apesar de ser póssivel passar a função anonima direto para as funções de lista, isso não é recomendado, visto que caso ocorra um erro
    o console do navegador não irá identifica-lo corretamente, já que a função é anonima, ou seja, não tem nome.

    Por isso é importante criar a função do lado de fora como uma constante e depois passar essa constante para o iterador, como feito no exemplo com o convertOjb.

*/

// O map executa uma função anonima que recebe o conteudo do proprio vetor, nele você pode retornar um pedaço do objeto, assim, convertendo ele
//
console.log(list.map( (obj) => obj.nome) ) // Converte todos os objetos somente para um vetor de nome
console.log(list.map( (obj) => obj.idade) ) // Converte todos os objetos somente para um vetor de idade
console.log(list.map( (obj) => obj) ) // Retorna o próprio objeto

// Exemplo criando um objeto diferente com base na lista de objetos

// Declaração de função anonima
//
const convertObj = (obj) => {

    return { 
        ...obj, // Spread do objeto, assim não é necessário passar todo o conteudo do objeto linha a linha
        idade_nome: `${obj.nome} + ${obj.idade}` 
    }
    
}

// Exemplo utilizando a função anonima, para melhor leitura
console.log(list.map( convertObj ))