// //atribuição via desetruturação:
// rest operator: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuição_restante
// spread operator: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
//________________________________________________________________________


// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// const [primeiro, segundo,... resto] = numeros;
// console.log(primeiro, segundo);
// console.log(resto);

//______________________________________________________________________
// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A


// let letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//______________________________________________________________________

// /// indices:          0          1          2
// ///                0  1  2    0  1  2    0  1  2
// const numeros1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(numeros1[1][2]);  //6

//______________________________________________________________________
// em objetos:

const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Viana',
  idade: 26,
  endereco: {
    rua: 'Rua dos Bobos',
    numero: 123,
  }
}
//atribuição via desetruturação:

const { nome, sobrenome, idade } = pessoa;

console.log(nome, sobrenome ,idade); 


