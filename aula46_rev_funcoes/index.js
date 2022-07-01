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



