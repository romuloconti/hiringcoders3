const cpf = 'Meu CPF é 123.668.477-00';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(cpf.match(regex));