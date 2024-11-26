const pessoa = {nome: "Will", idade: 20, cidade: "Osasco"};

for(let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}