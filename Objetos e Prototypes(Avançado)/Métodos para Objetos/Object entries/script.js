/* Usado para converter um objeto em uma lista de pares chave-valor no formato de um array */

const produto = {
    nome: 'Caneca', preco: 2.0, estoque: 100}

    for(let entry of Object.entries(produto)){
        console.log(entry);
        
    }
    