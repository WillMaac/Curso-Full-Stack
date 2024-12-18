function criaPessoa (nome,  sobrenome){
    return{nome, sobrenome};
}
    
let p1 = criaPessoa('Will', 'Maacc');

let p2 = {
    nome: 'Jhow',
    sobrenome: 'Maac'
}


console.log(p1);
console.log(p2);


    function criaMultiplicador(multiplicador){
        //multiplicador//
         return function(n) {
            return n * multiplicador;
        };
    }

    const duplica = criaMultiplicador(2);
    const triplica = criaMultiplicador(3);
    const quadriplica = criaMultiplicador(4);


    console.log(duplica(2));
    console.log(triplica(2));
    console.log(quadriplica(2));
    
    
    
