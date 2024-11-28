/* Faça uma função chamada Paissagem que recebe dois argumantos, largura e altura de uma imagaem (number).
Retorne true se a imagem estiver no modo paisagem. */

const paisagem = (height, width) =>{

 return height > width ? "A imagem está no modo paisagem" : "A imagem não está no modo paisagem";
}

console.log(paisagem(1920, 1080));
