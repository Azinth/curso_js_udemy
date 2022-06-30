function relogiogGlobal(){
  function criaHoradosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {timeZone: 'UTC'});
  }
  
  const cronometro = document.querySelector('.cronometro');
  let segundos = 0;
  let timer;
  
  function iniciaCronometro(){
    timer = setInterval(function(){
      segundos++;
      cronometro.innerHTML = criaHoradosSegundos(segundos);
    }, 1000);
  }
  
  document.addEventListener('click', function(event){
    const elemente = event.target;
    if (elemente.classList.contains('iniciar')) {
      clearInterval(timer);
      cronometro.classList.remove('pausado');
      iniciaCronometro();
    }
    if (elemente.classList.contains('parar')) {
      cronometro.classList.add('pausado');
      clearInterval(timer);
    }
    if (elemente.classList.contains('zerar')) {
      clearInterval(timer);
      cronometro.classList.remove('pausado');
      segundos = 0;
      cronometro.innerHTML = criaHoradosSegundos(segundos);
    }
  });
};
relogiogGlobal();


// parar.addEventListener('click', function (event) {
  //   alert('cliquei no pausar');
// });
// zerar.addEventListener('click', function (event) {
  //   alert('cliquei no zerar');
  // });


  // function iniciarCronometro() {
  //   let tempo = 0;
  //   let intervalo = setInterval(() => {
  //     tempo++;
  //     cronometro.textContent = tempo;
  //   }, 1000);
  
  // // }
  
  // const pararCronometro = () => {
  //   clearInterval(intervalo);
  
  // };
  
  // const zerarCronometro = () => {
  //   cronometro.textContent = '00' + ':' + '00' + ':' + '00';
  // }
  
  // const iniciarCronometro = () => {
  //   let tempo = 00;
  //   let intervalo = setInterval(() => {
  //     tempo++;
  //     cronometro.textContent = '00' + ':' + '00' + ':' + tempo;
  //   }, 1000);
  
  // }