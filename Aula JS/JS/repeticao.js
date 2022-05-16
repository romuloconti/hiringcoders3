/*// FOR

var numeroSorteado = 10;

var tabuada = 7;

//FOR ( Declarar numero inicial; Perguntar; Incremento 
//A variável i está sendo usada apenas dentro desse FOR
for (var i = 0; i <= 10; i++) {
   console.log("Valor de " + tabuada + " x " + i + " = " + tabuada * i);
}

for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log("seu numero doidao")
        break; // esse break não é indicado de usar
    };
} */


// WHILE


var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

// ! vai inverter o valor da minha variável achou
while (!achou) {
    possivelValor += 1; //+= 1 é a mesma coisa de possivelValor = possivelValor + 1
    if(numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log('Possivel valor nao encontrado ao numero sorteado ' + possivelValor);
    }
}