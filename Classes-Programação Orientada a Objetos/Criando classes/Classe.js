class Carro{

    constructor(nome, modelo, ano){

        this.nome = nome;
        this.modelo = modelo;
        this.ano = ano;

    }

    andando(){
        console.log(`${this.nome} começou a andar`);
        
    }
}

const c1 = new Carro("Bmw", "SUV de luxo ", 2019)
const c2 = new Carro("Golf Gti", "Volkswagen", 2013)
console.log(c1.nome);
console.log(c2.nome);
c2.andando ();
c1.andando();


//Com function construtora

function Carro2(nome, modelo, ano){
    this.nome = nome;
    this.modelo = modelo;
    this.ano = ano;
}
Carro2.prototype.acelerando = (function (){
    console.log(`${this.nome} está acelerando`);
    
})
const carro1 = new Carro2("Ferrari", "250 GTO", 1964 )
const carro2 =  new Carro2("BMW ", "X7", 2025)

console.log(carro1.nome);
console.log(carro2.nome);

carro1.acelerando();
carro2.acelerando();

