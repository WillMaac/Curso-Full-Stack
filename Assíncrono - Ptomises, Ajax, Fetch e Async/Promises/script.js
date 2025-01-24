function rand(max, min){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(()=>{
resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
.then(response => {
    console.log(response);
    return esperaAi('Buscando dados da BASE', rand(1, 3));

})
.then(response=> {
    console.log(response);
    return esperaAi(3333, rand(1, 3));    
})
.then(response => {
    console.log(response); 
}).then(() => {
    console.log('Exibe dados na tela')
})
.catch(e=>{
    console.log('ERROR', e);
    
});