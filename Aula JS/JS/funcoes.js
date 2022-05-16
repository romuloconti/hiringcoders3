function soma(operadorA, operadorB) {
    var resulC = operadorA + operadorB;
    return resulC;
}

var resultadoDaSoma = soma(1, 2);
var resultadoNovoDaSoma = soma(10, 66);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);


function olaGama(nome) {
    console.log('Ola Gama, voce é o ' + nome);
}

olaGama('Romulo');