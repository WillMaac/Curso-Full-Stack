function getTimeFromSeconds(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });

}

console.log(getTimeFromSeconds(10));


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
relogio.innerHTML = 'cliquei aqui';
});

pausar.addEventListener('click', function(event) {
alert('cliquei');
});

zerar.addEventListener('click',  function(event) {
    alert('cliquei');
});


