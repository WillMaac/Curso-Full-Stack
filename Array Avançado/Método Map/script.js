const numeros = [50, 80, 1, 2, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    { nome: "Nataniel", idade: 20 },
    { nome: "Isa", idade: 18 },
    { nome: "Guss", idade: 26 },
    { nome: "Natasha", idade: 40 },
    { nome: "Samuel", idade: 62 },
    { nome: "Maria", idade: 55 },
  ];

let nomes = pessoas.map(obj => obj.nome);

let numerosEmDobro = numeros.map( valor => valor * 2);

const idades = pessoas.map(obj => ({idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});






console.log(nomes);
console.log(comIds);
console.log(numerosEmDobro);
console.log(idades);

