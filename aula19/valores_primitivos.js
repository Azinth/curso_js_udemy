/* 

Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

ex:
let a = 'teste';
let b = a;
aqui a é uma referência para b, e b é uma cópia de a. Se mudar a o b não mudará.


Rreferencias (mutáveis) - object, array, function

ex: 
let a = [1, 2, 3];
let b = a;

aqui b é uma referência para a. Se houver mudança em a o b vai mudar também e vice-versa.

se quisesse 'copiar' o valor de a para b, usaria o comando: let b = [...a];

*/

