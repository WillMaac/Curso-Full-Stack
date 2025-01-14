//Retorne os números maiores do que 10

const numeros = [50, 80, 1, 2, 5, 8, 7, 11, 15, 22, 27];

let filtrados = numeros.filter( valor => valor > 10);

//console.log(filtrados);



//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne pessoas cuja nome termina com a



const pessoas = [
  { nome: "Nataniel", idade: 20 },
  { nome: "Isa", idade: 18 },
  { nome: "Guss", idade: 26 },
  { nome: "Natasha", idade: 40 },
  { nome: "Samuel", idade: 62 },
  { nome: "Maria", idade: 55 },
];

let pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);

let pessoasMais50 = pessoas.filter(obj => obj.idade >= 50)

let nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);



