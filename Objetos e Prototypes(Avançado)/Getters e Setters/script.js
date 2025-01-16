function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
       // value: estoque,
        //writable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },

        set: function(valor){
            estoquePrivado = valor;
            if(typeof valor !== 'number'){
               throw new TypeError('Mensagem')
            }
        }
    });
}

const p1 = new Produto ('Camiseta', 20, 20);
p1.estoque = 'O valor que eu quero';
//console.log(p1);
console.log(p1.estoque);





