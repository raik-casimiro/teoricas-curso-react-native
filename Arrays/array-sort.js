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

// O sort vai ordenar um vetor ou objeto com base nas regras definidas na função anonima passada pra ele

console.log(list)

const order =  (a, b) => {

    if(a.idade < b.idade) // se a for menor que b, ele sobe uma posição
        return -1;

    if(a.idade > b.idade) // se a for maior que b, ele desce uma posição
        return 1;

    return 0; // se a for igual a b, nada acontece

}

list.sort(order)

console.log(list)