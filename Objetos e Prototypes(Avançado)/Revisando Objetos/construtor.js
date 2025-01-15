const pessoa = new Object()
pessoa.nome = 'Augusta';
pessoa.sobrenome = 'Silva';
pessoa.idade = 27;
pessoa.falarNome = function(){
    return (`Olá seu nome é ${this.nome} e seu sobrenome é ${this.sobrenome}`);
}

pessoa.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa.nome, pessoa.sobrenome);

pessoa.falarNome()
console.log(pessoa.getDataNascimento())



