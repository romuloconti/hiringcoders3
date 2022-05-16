console.log('bora')

function validaCPF(cpf) {
    // console.log(cpf.length)
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // % é o resto da divisao / ? pergunta de é verdade e : é o resultado falso

        // Validação do primeiro digito
        if(resultado != digitos.charAt(0)){
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(1)){
            return false;
        }

        console.log(
            digitos.toString().charAt(0) + ' é a primeira posição da variável soma');
        return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF');

    var cpf = document.getElementById('cpf_digitado').value;

    var resultdoValidacao = validaCPF(cpf);

    if (resultdoValidacao) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
}