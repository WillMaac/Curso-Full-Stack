//Declaração de função(Function hoisting)//

falaOi();
function falaOi() {
    console.log('Oi');
}
    //First-class objects (Objetos de primeira classe)
    //Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
    
}
    
souUmDado();

const saudacao =() => {
    console.log('Olá, mundo!');
    
}
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(saudacao)


