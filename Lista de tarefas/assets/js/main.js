const inputTarefa = document.getElementById("input-tarefa");
const botao = document.getElementById("btn");
const tarefas = document.querySelector("#tarefas");

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;  
        criaTarefa(inputTarefa.value);
}    
});

function limparInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
const botaoApagar = document.createElement('button');
botaoApagar.innerText = "Apagar";
//botaoApagar.classList.add('apagar');
botaoApagar.setAttribute('class', 'apagar');
botaoApagar.setAttribute('title', 'apagar esta tarefa');
li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limparInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

botao.addEventListener('click', function() {
    if(!inputTarefa.value) return;  
    criaTarefa(inputTarefa.value)     
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
const liTarefas = tarefas.querySelectorAll('li');
const listaDeTarefas = [];

for (let tarefa of liTarefas){
let tarefaTexto = tarefa.innerText;
tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
listaDeTarefas.push(tarefaTexto);

}
const tarefasJSON = JSON.stringify(listaDeTarefas)
localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = Json.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionarTarefasSalvas();

