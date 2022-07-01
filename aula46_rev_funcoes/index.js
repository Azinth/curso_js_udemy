//formas de funções:

// declaração de função (Function hoisting)
function falaOi() {
  console.log('oi');
}

// First-Class Objects
// Function expression
const soUmDado = function () {
  console.log('so um dado');
}
soUmDado();

function executaFuncao(func) {
  func();
}

// Arrow Function
const executaFuncaoArrow = (func) => {
  console.log('arrow function');
}
executaFuncaoArrow()

// Dentro de um objeto
const obj = {
  falaOi: function () {
    console.log('oi');
  }
}

obj.falaOi();

// a função não precisa estar com argumento para funcionar, ma se for passado algum parametro ele vai ignorar e vai executar da mesma forma, armazenando o parametro na variavel "arguments"

function funcao() {
  console.log(arguments)
}
funcao('valor', 'valor2', 1, 2, 3); //[Arguments] { '0': 'valor', '1': 'valor2', '2': 1, '3': 2, '4': 3 }

//é interessante pq ele pode somar os argumentos e retornar o resultado
function somaArgumentos() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somaArgumentos(1, 2, 3, 4, 5)); //15

//posso atribuir valores padrões a um parametro
function somaAeB(a, b = 2) {
  console.log(a + b);
}
somaAeB(1); //3
//____________________________________________

//console.log é diferente de return em uma função. 

//funções de call back - são funções que são executadas quando uma ação ocorre:

function f1() {
  console.log('f1');
}
function f2() {
  console.log('f2');
}
function f3() {
  console.log('f3');
}

f1();
f2();
f3();
