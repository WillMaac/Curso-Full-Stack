function* geradora1 (){
    
    yield "valor 1";

    yield "valor 2";

    yield "valor 3";
    
}

function*gerador2(){
    let i = 0;

    while(true){
        yield i;

        i++
    }
}

function*gerador3(){
    yield 0;
    yield 1;
    yield 2;
}

function*gerador4(){
    yield*gerador3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4();

function*gerador5(){
    yield function(){
        console.log('Vim do y1');
    
    };

    return function(){
        console.log('Vim do return')
    }

    yield function() {
        console.log("Vim do y2");
        
    };
}

const g5 = gerador5();
const func1 = g5.next().value
const func2 = g5.next().value

func1();
func2()
