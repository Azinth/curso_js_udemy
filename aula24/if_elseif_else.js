
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

    // hora = parseInt(prompt("Digite a hora atual: "));
    function recebeEventoForm (evento) {
      evento.preventDefault();
      const hora = form.querySelector('.hora');
  
      //sempre que precisar do input colocar o .value
      
  
      const horaDigitada = hora.value;
      if (horaDigitada < 0 && horaDigitada <=24 && horaDigitada != undefined && horaDigitada != null && horaDigitada != '' && horaDigitada != NaN){
        alert(`Hora Digitada: ${hora.value} horas. Essa hora não existe!`);
      }else if ((horaDigitada >=12) && (horaDigitada <18)){
        resultado.innerHTML = `<p>Hora Digitada: ${hora.value} horas. Boa tarde!<br/></p>
      `;
      } else if ((horaDigitada >=18) && (horaDigitada <=24)){
        resultado.innerHTML = `<p>Hora Digitada: ${hora.value} horas. Boa Noite!<br/></p>`;
  
      } else if ((horaDigitada >= 0) && (horaDigitada <12)) {
        resultado.innerHTML = `<p>Hora Digitada: ${hora.value} horas. Bom dia!<br/></p>`;
      } else {
        alert('Hora inválida');
      }
  }
  form.addEventListener('submit', recebeEventoForm)

