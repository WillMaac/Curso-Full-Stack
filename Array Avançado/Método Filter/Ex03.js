//Retorne as pessoas com mais de 50 anos

const pessoas = [
    { nome: "Nataniel", idade: 20 },
    { nome: "Isa", idade: 18 },
    { nome: "Guss", idade: 26 },
    { nome: "Natasha", idade: 40 },
    { nome: "Samuel", idade: 62 },
    { nome: "Maria", idade: 55 },
  ];

  let maior50Anos = pessoas.filter(obj => obj.idade >= 50 );

  console.log(maior50Anos);
  
