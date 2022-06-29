const pessoa1 = {
  nome : 'Gabriel',
  sobrenome : 'Viana',
  idade : 26,

  fala(){
    console.log(`${this.nome} ${this.sobrenome} está dizendo 'Olá'`)
  }
}

console.log(pessoa1.nome);
pessoa1.fala();


function criePessoa (nome, sobrenome, idade){
  return {
    nome: nome, //não precisa colocar o nome duas vezes se o nome for o mesmo.
    sobrenome: sobrenome,
    idade: idade,
  }
}

const pessoa2 = criePessoa('Gabriel', 'Viana', 26);
const pessoa3 = criePessoa('João', 'Silva', 20);
const pessoa4 = criePessoa('Maria', 'Santos', 18);

console.log(pessoa2.nome, pessoa3.sobrenome, pessoa4.idade)