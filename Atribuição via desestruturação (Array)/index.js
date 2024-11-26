// Atribuição via desestruturação (Arrays)

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let[primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);

//A variável resto ficou com os números que sobraram do array do 2 adiante
console.log(resto);
