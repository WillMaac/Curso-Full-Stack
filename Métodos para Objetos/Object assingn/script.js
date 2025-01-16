const produto = {
    nome: 'Caneca', preco: 2.0}
    const produtos = Object.assign( {}, produto,  {Estoque: 100});

//let celular = {...produto};

produtos.nome = 'Celular';
produtos.preco = 1000.00;


console.log(produto);
console.log(produtos);

