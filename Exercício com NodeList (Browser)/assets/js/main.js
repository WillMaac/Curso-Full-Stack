const  paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

for(let p of ps){
    console.log(p);
    
}

const estilo = getComputedStyle(document.body);
const backgroundColor = estilo.backgroundColor;
console.log(backgroundColor); 


for(let p of ps){
    
p.style.backgroundColor = backgroundColor;
p.style.color = "#fff"
    
    }