let num1 = 9.42323;
let num2 = 9.42323;

let num1_int = Math.floor(num1); //arredonda pra baixo
let num1_int2 = Math.ceil(num2); //arredonda pra cima

console.log(num1_int);
console.log(num1_int2);

//em JS dá pra dividir por zero e dá verdadero, mas retorna Infinity

let num1_round = Math.round(num1); //arredonda pra o maix próximo

console.log(num1_round);

// const aleatorio = Math.random() * (10 - 5) + 5; //gera um número aleatório entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //gera um número aleatório entre 5 e 10 arredondado.



console.log(Math.max(1,3,5,49,321,1,2,3,54,8,))
console.log(aleatorio)