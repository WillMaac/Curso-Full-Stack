const texto = "programar é divertido";
const vogais = "aeiouáéíóúàèìòùâêîôûãõ";
let resultado = "";

for (const letra of texto) {
    if (vogais.includes(letra)) {
        resultado += letra;
    }
}

console.log(`Vogais encontradas: ${resultado}`);
// Saída:
// Vogais encontradas: oaaéiiio
