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

// O Reduce é parecido com o map, ele irá converter o vetor inteiro para um outro tipo de vetor ou algum outro objeto que for especificado
//
// Neste exemplo, será criado uma lista que usa como key, o nome dos individuos na lista, dessa forma é possivel pegar a informação de um individuo especifico pela sua key
// sem precisar rodar um find, ou filter para encontra-lo primeiro.
//
/*

    O Reduce recebe dois parametros, a função, e o inicio do acumulador, ou seja, o estado inicial do acumuludor.

    A função do reduce, também recebe dois parametros, o acumulador, e o objeto a ser iterado.

    A cada rodada do reduce, ele vai adicionar um valor ao acumulador, então é importante no return do reduce, passar também o acumulador, como no exemplo abaixo.
    Pois o acumulador vai segurar a informação dos objetos já iterados, e adicionar o novo objeto no return

*/

criarListTratada = (acc, obj) => {

    console.log(acc) // Aqui vai mostrar o passo a passo do reduce, a cada iteração ele vai adicionar um objeto vindo da list que está sendo iterada

    return {
        ...acc,
        [obj.nome]: {
            idade: obj.idade
        }
    }

}

const pessoas = list.reduce(criarListTratada, {})

//Exemplo pegando a idade de um individuo pela sua key
console.log('Idade José: ', pessoas.Jose.idade)


// Exemplo de um reduce trabalhando como um map
//
// Trabalhar dessa forma não faz muito sentido, visto que o reduce é muito mais complexo que um map para ser usado dessa forma
//
const pessoasArr = list.reduce( (acc, obj) => { 
    
    acc.push(obj.idade)
    return acc;

}, [])

console.log('Pessoas Arr: ', pessoasArr)