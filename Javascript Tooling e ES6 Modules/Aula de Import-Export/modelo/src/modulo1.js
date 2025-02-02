//Exportando recursos individuais
const name = 'Mayk';
const lastName = 'Maac';
const age = 24;

function add(x, y){
    return x + y;
}

export class Person{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

export{ name, lastName, age, add };