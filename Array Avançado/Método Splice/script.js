const nomes = ['Maria', 'João', 'Julia', 'Gaspar', 'Rose']

//Simulando Push
nomes.splice(nomes.length, 0, 'Guss');
console.log(nomes);

const removidos = nomes.splice(-2, 1)

console.log(removidos);



//Simulando pop
const removerOUltima = nomes.splice(-1, 1)
console.log(nomes, removerOUltima);

//Simulando shift
const removerOPrimeiro = nomes.splice(0, 1)
console.log(nomes,removerOPrimeiro);


