function mostrarHora(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    const timer = setInterval(function() {
        segundos++;
    hora.innerHTML = mostrarHora(segundos);
}, 1000);
}

const hora = document.getElementById('hora')
const iniciar = document.getElementById('iniciar')
const relogio = document.getElementById('relogio')
let segundos = 0;


iniciar.addEventListener('click', function(event){
 iniciaRelogio();
 
})

iniciar.addEventListener('click', function(event){
    iniciaRelogio();
    
   })


