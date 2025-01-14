const numeros = [50, 80, 1, 2, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor){
if(valor % 2 !== 0){
     acumulador += valor;
    }
    return acumulador;
    
}, 0);
//console.log(total);

//Retorne a pessoa mais velha

const pessoas = [
    { nome: "Nataniel", idade: 20 },
    { nome: "Isa", idade: 18 },
    { nome: "Guss", idade: 26 },
    { nome: "Natasha", idade: 40 },
    { nome: "Samuel", idade: 62 },
    { nome: "Maria", idade: 55 },
  ];

  const maisVelha = pessoas.reduce(function(acumulador, valor){
if(acumulador.idade > valor.idade) return acumulador;
return valor;
  })

  console.log(maisVelha);
  