//Congela o objeto

const produto = {
    nome: 'Caneca', preco: 2.0}
    Object.freeze(produto)

    produto.nome = 'Caderno'
    produto.preco = 10

    console.log(produto);
    
    //Se eu tentar alterar qualquer coisa no objeto não vai funcionar