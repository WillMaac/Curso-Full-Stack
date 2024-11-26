const verdadeira = true;

//Let escopo de bloco {...bloco}
///Var só tem escopo de função
let name = "Will"; // Criada

var name2 = "Wl"; // Criada


if(verdadeira) {
    let name = "Carlos"; // Criada
    
    if(verdadeira){
        var name2 = "Lucas"; // Redeclarada
        let name = "Outra coisa";
        console.log(name, name2);
        
    }
    
}




