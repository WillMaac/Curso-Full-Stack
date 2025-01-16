function criarProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

let p2 = criarProduto('Computador')
p2.nome = 'Celular';

console.log(p2);
console.log(p2.nome);
