class ControleRemoto{
    constructor(tv){
this.tv = tv;
this.volume = 0;
    }

    aumentar(){
       return this.volume += 2;
    }
    abaixar(){
        this.volume -= 2;
    }

    getVolume() {
        return this.volume;
    }

    static somar (x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto("LG")
controle1.aumentar()
controle1.aumentar()
controle1.abaixar()
console.log(controle1.getVolume());
console.log(ControleRemoto.somar(10, 10));