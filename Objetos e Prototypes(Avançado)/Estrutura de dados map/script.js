const pessoas = [
    {id:3, nome: 'Guss'},
    {id:2, nome:'Maria'},    
    {id:1, nome:'Otavia'},    
];

/*const novasPessoas = {};
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);

