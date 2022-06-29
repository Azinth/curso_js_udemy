const number = Number(prompt('Digite um número: '));
const numeroDigitado = document.getElementById('numero_digitado');
const texto = document.getElementById('texto');

numeroDigitado.innerHTML = number;
texto.innerHTML =  `
  <p>Raiz quadrada: <strong>${number**0.5}</strong></p><br/>
  <p>é NaN: <strong>${isNaN(number)}</strong></p><br/>
  <p>Arredondado para baixo: <strong>${Math.floor(number)}</strong></p><br/>
  <p>Arredondado para cima: <strong>${Math.ceil(number)}</strong></p><br/>
  <p>com duas casas decimais: <strong>${number.toFixed(2)}</strong></p><br/>`;