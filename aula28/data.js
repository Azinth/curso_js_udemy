//função construtora começa com letra maiúscula

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date 
// const tresHoras = 60 60 3 1000;
// const umDia 60 60 24 1000;
// const data = new Date(0+ tresHoras umDia); // 01/01/1970 Timestamp unix ou época unix 
// const data = new Date(2019, 3); // a, m, d, h, M, s, ms
// const data = new Date(); // tipo de data mais comum


function zeroEsquerda(numero) {
  return numero < 10 ? '0' + numero : numero;
}

// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth()+1)
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) //0 domingo...6 sábado
// console.log(data.toString());

function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth()+1);
  const ano = zeroEsquerda(data.getFullYear()+1);
  const hora = zeroEsquerda(data.getHours()+1);
  const minuto = zeroEsquerda(data.getMinutes()+1);
  const segnudo = zeroEsquerda(data.getSeconds()+1);

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segnudo}`;


}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
