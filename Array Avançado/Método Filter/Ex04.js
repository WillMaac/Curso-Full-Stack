//Retorne pessoas cuja nome termina com a

const pessoas = [
    { nome: "Nataniel", idade: 20 },
    { nome: "Isa", idade: 18 },
    { nome: "Guss", idade: 26 },
    { nome: "Natasha", idade: 40 },
    { nome: "Samuel", idade: 62 },
    { nome: "Maria", idade: 55 },
  ];

  let nomeTerminaComA = pessoas.filter(obj => obj.nome.endsWith('a'))
  console.log(nomeTerminaComA);
  