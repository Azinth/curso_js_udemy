// function saudacao(nome){
//     console.log(`Olá, ${nome}!`);
//     return 123
// }

function saudacao(nome){

  return `Olá, ${nome}!`
}


const variavel = saudacao('Gabriel');
console.log(variavel);

function soma(x, y){
  return x + y;
}

function soma2(x = 1, y = 1){  //se não passar nenhum valor, o valor padrão é 1
  return x + y;
}

//o return encerra a execução da função e retorna o valor

// é possível criar funcção na declaração de uma variável
const raiz = function (n){
  return n ** 0.5;
}

// arrow function

const raiz2 = n => n ** 0.5;  //pode ser usada assim quando só tem uma linha de código
const raiz3 = (n) => { //usa parenteses no parametro quando tem mais de um.
  return n ** 0.5;
 } 

console.log(raiz2(9));