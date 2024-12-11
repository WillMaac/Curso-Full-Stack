const funcaoArrow = () =>{
    console.log('Sou uma arrow function');   
}

funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando');    
    }
}
obj.falar();

const obj2 = {
    soma: function(x, y){
     return x + y;
    }
}

console.log(obj2.soma(10, 10));
