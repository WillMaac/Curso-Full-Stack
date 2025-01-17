function Produto (name, value) {
this.name = name;
this.value = value;
}

Produto.prototype.discount = function (percentual) { this.value = this.value - (this.value * (percentual / 100));
};

Produto.prototype.increase = function (percentual) { this.value = this.value + (this.value * (percentual / 100));
};

const p1 = new Produto ('Celular', 1000.00);

const p2 = {
    name : 'Caneca',
    value: 20
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.increase (10)
p1.increase (10)

const p3 = Object.create(Produto.prototype);
p3.value = 113;
p3.increase(10)
console.log(p3);




