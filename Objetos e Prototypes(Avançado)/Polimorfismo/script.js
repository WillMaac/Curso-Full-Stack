//Superclass

function Conta(agencia, conta, saldo){
this.agencia = agencia;
this.conta = conta;
this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
if(valor > this.saldo ){
    console.log(`Saldo insuficiente: ${this.saldo}`);

 return;
}  

this.saldo -= valor;
this.verSaldo();

};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`);
    
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite )){
        console.log(`Saldo insuficiente: ${this.saldo}`);
    
     return;
    }  
    
    this.saldo -= valor;
    this.verSaldo();
    
    };

    function CP(agencia, conta, saldo,){
        Conta.call(this, agencia, conta, saldo);
    }
    
    CP.prototype = Object.create(Conta.prototype);
    CP.prototype.constructor = CP;
    

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10)
contaCorrente.sacar(110)
contaCorrente.sacar(1)

console.log();


const cp = new CP(12, 33, 0);
contaCorrente.depositar(10)
contaCorrente.sacar(110)
contaCorrente.sacar(1)

console.log();


const conta1 = new Conta(11, 22,  10)
conta1.depositar(11);
conta1.depositar(11);
conta1.sacar(30);
conta1.sacar(2);
conta1.sacar(0.01);

console.log();



