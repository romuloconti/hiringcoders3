const pessoa = {
    nome: 'Romulo',
    sobrenome: 'Conti',
    idade: '26',
    profissao: 'Administrador'
}

console.log(pessoa)

// se eu fosse receber esse valor de outro serviço ou via requisão
// modo antigo

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

// usando desestruct

let { nome, sobrenome, idade, profissao } = pessoa;

console.log (nome, sobrenome, idade, profissao)
