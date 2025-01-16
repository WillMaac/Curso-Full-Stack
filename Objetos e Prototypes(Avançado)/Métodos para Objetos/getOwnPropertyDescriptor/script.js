// Serve para retorna as propriedades do Object.defineProperty

const produto = {
    nome: 'Caneca', preco: 2.0}

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});

console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));

console.log(produto);

