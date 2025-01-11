function Pessoa(nome, sobrenome){
this.nome = nome;
this.sobrenome = sobrenome;
this.metodo = function(){
    console.log(this.nome + ': sou um método');
    
};
}

const p1 = new Pessoa("Luiza", "Ana");
const p2 = new Pessoa("Maria", "Julia");

console.log(p1.nome);
p2.metodo();

