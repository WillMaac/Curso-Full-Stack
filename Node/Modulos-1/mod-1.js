const name = 'Carlos';
const lastName = 'Souza';

const sayName = () => (`Meu nome é ${name} ${lastName}`);

exports.name = name;
exports.lastName = lastName;
this.age = 25;
exports.sayName = sayName;
console.log(exports);


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

exports.Person = Person;