class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + "já está ligado."); 
            return;
            }
            this.ligado = true;
        }
        
            desligar(){
                if(!this.ligado){
                    console.log(this.nome + "já está desligado");
                    return;
                }
                }
            }
        

    class Smartphone extends DispositivoEletronico{
        constructor(nome, cor, modelo){
            super(nome)
            this.cor = cor;
            this.modelo;
        }
    }
            
    class Tablet extends DispositivoEletronico{
        constructor(nome, temWifi){
            super(nome)
            this.temWifi = temWifi;
        }

        ligar(){
            console.log("Você alterou o método ligar");    
        }

        apresentacao(){
            console.log(`Olá eu sou o ${this.nome}`);
            
        }
    }
    


const s1 = new Smartphone("Iphone", "Preto", "16")
console.log(s1);

const t1 = new Tablet("Ipad", true)
console.log(t1);
t1.apresentacao();
t1.ligar()


