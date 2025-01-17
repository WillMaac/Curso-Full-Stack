//Construtora -> molde (classe)
function Pessoa (name, Surname){
    this.name = name;
    this.Surname = Surname;
    // this.fullName = () => this.name + 'Original ' + this.Surname;
}

Pessoa.prototype.fullName = () =>  this.name + ' ' + this.Surname;


//instância
const pessoa1 = new Pessoa('Guss', 'M.')
const pessoa2 = new Pessoa ('Otavia', 'C.')


console.dir(pessoa1);
console.dir(pessoa2);

