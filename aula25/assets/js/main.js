function meuEscopo () {

  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  function recebeEventoForm (evento) {
    evento.preventDefault();
    const peso = form.querySelector('.peso');
    const pesoDigitado = parseFloat(peso.value);
    const altura = form.querySelector('.altura');
    const alturaDigitada = parseFloat(altura.value);

    
    // if (alturaDigitada != undefined && alturaDigitada != null && alturaDigitada != '' && alturaDigitada != NaN){
    //   const imc = pesoDigitado / (alturaDigitada * alturaDigitada);
    //   // resultado.innerHTML = `<p>IMC: ${imc}<br/></p>`;
    //   alert(`IMC: ${imc}`);
    // } else {
      
    // }

    if (alturaDigitada != undefined && alturaDigitada != null && alturaDigitada != '' && alturaDigitada != NaN){
      if (pesoDigitado != undefined && pesoDigitado != null && pesoDigitado != '' && pesoDigitado != NaN){
        const imc = pesoDigitado / (alturaDigitada * alturaDigitada);
        resultado.innerHTML += `<p>IMC: ${imc}<br/></p>`;
      } else {
        alert('Peso inválido');
      }




    }











  }
  form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();