import { name as name2, lastName, add, Person } from './modulo1';

//Dessa forma importa tudo oque foi exportado no arquivo modulo.js
import * as MeuModulo from'./modulo1';

// A palavra "as"  muda o nome da constante importada name
const namee = 'Will';
p1 = new Person('Kalebe', 'De Souza')

console.log(name2, namee, lastName);
console.log(add(10, 10));
console.log(p1);
console.log(MeuModulo);




 