//Retorne as pessoas que tem o nome com 6 letras

const pessoas = [
    { nome: "Nataniel", idade: 20 },
    { nome: "Isa", idade: 18 },
    { nome: "Guss", idade: 26 },
    { nome: "Natasha", idade: 40 },
    { nome: "Samuel", idade: 62 },
    { nome: "Maria", idade: 55 },
  ];
  
  let pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);

  console.log(pessoasComNomeGrande);
  