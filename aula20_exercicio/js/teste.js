function meuEscopo () {

  const form = document.querySelector('.form');
  
  let contador = 1;
  
  function recebeEventoForm (evento) { 
    evento.preventDefault(); 
    console.log('Form não foi enviado');
  
  }
  
  form.addEventListener('submit', recebeEventoForm); }
  
  meuEscopo();