const pessoas = {
    Jose: { idade: 13 },
    Luiz: { idade: 12 },
    Joao: { idade: 16 },
    Ricardo: { idade: 22 },
    Maria: { idade: 25 },
    Gabriela: { idade: 23 }
};
 
// O object.keys, retorna um vetor contendo todas as keys de um objeto
// Com ele, podemos recriar um vetor baseado no objeto de pessoas acima, revertendo um reduce nesse caso

// Gerando um vetor de keys
//
const keys = Object.keys(pessoas);

// Recriando a lista com base no objeto de keys e no objeto de pessoas
//

const recriaListFunc = (key) => {
    
    return {
        nome: key,
        idade: pessoas[key].idade
    }
}

const recriaList = keys.map(recriaListFunc)

console.log(keys)
console.log(recriaList)