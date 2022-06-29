const form = document.querySelector('.form')
const container = document.querySelector('.container')
const resultado = document.querySelector('.resultado')

function recebeEventoForm(evento) {
  evento.preventDefault()
  const peso = form.querySelector('.peso')
  const pesoDigitado = parseFloat(peso.value)
  const altura = form.querySelector('.altura')
  const alturaDigitada = parseFloat(altura.value)
  const imc = (pesoDigitado / (alturaDigitada * alturaDigitada)).toFixed(1)

  if (pesoDigitado === 0 || alturaDigitada === 0 || isNaN(imc) || imc === Infinity || imc === -Infinity || imc === 'NaN' || pesoDigitado === 'NaN' || alturaDigitada === 'NaN' || pesoDigitado === Infinity || alturaDigitada === Infinity || pesoDigitado === -Infinity || alturaDigitada === -Infinity || pesoDigitado === null || alturaDigitada === null) {
    alert('Preencha todos os campos')

  } else if (imc < 10 ) {
    alert('Preencha os campos corretamente')
  } else if (imc <= 18.5) {
    resultado.innerHTML = `<div class="resultadoVermelho"><p>Seu IMC é ${imc}: Abaixo do peso</p></div>`
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `<div class="resultadoVerde"><p>Seu IMC é ${imc}: Peso ideal</p></div>`
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `<div class="resultadoAmarelo"><p>Seu IMC é ${imc}: Sobrepeso</p></div>`
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `<div class="resultadoVermelho"><p>Seu IMC é ${imc}: Obesidade grau I</p></div>`
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `<div class="resultadoVermelho"><p>Seu IMC é ${imc}: Obesidade grau II</p></div>`
  } else if (imc >= 40) {
    resultado.innerHTML = `<div class="resultadoVermelho"><p>Seu IMC é ${imc}: Obesidade grau III</p></div>`
  }
}
form.addEventListener('submit', recebeEventoForm)
