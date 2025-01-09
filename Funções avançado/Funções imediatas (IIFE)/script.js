// IIFE -> Immediately invoked function expression

(function(idade, peso, altura){
    const sobrenome =  'Maac';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome(){
        console.log(criaNome('Will'));
    }

    falaNome();
    console.log(idade, peso, altura); 
}) (26, 80, 1.60);

