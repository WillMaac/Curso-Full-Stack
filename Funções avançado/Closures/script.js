const retornaFuncao = (nome) =>{
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Will');
const funcao2 = retornaFuncao('Maac');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

