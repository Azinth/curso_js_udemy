
const pessoa = {
  nome: 'João',
  idade: 20,
  sobrenome: 'Silva',
};

const chave = 'nome';

console.log(pessoa[chave]);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

console.log('----------------------------');


const frutas = ['pera', 'maçã', 'uva', 'banana', 'abacaxi'];

//for in lê os indices ou chaves do objeto
for (const i in frutas) {
  console.log(frutas[i]);
}

// for (let i = 0; i < array.length; i++) {
//   console.log(frutas[i]);
// }
