// const container = document.querySelector('.container')
// const mostrarTela = document.querySelector('.mostrarTela')

// const diaSemana = new Date();

// function getDiaTexto(diaSemana){
// let diaSemanaText = diaSemana.getDay();
// switch (diaSemanaText) {
//   case 0:
//     diaSemanaText = 'Domingo';
//     break;
//   case 1:
//     diaSemanaText = 'Segunda';
//     break;
//   case 2:
//     diaSemanaText = 'Terça';
//     break;
//   case 3:
//     diaSemanaText = 'Quarta';
//     break;
//   case 4:
//     diaSemanaText = 'Quinta';
//     break;
//   case 5:
//     diaSemanaText = 'Sexta';
//     break;
//   case 6:
//     diaSemanaText = 'Sábado';
//     break;
//   default:
//     diaSemanaText = 'Dia inválido';
//     break;
// } // fim switch
// return diaSemanaText;
    // ao invés de usar o switch, use:
    // const diaSemanaText = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    // return diaSemanaText[diaSemana.getDay()];
// }

// function getDiaMes(diaSemana){
//   let diaSemanaText = zeroEsquerda(diaSemana.getDate());
//   return diaSemanaText;
// }

// function getNomeMes(diaSemana){
//   let diaMes = diaSemana.getMonth();
//   let nomeMes = '';
//   switch (diaMes) {
//     case 0:
//       nomeMes = 'Janeiro';
//       break;
//     case 1:
//       nomeMes = 'Fevereiro';
//       break;
//     case 2:
//       nomeMes = 'Março';
//       break;
//     case 3:
//       nomeMes = 'Abril';
//       break;
//     case 4:
//       nomeMes = 'Maio';
//       break;
//     case 5:
//       nomeMes = 'Junho';
//       break;
//     case 6:
//       nomeMes = 'Julho';
//       break;
//     case 7:
//       nomeMes = 'Agosto';
//       break;
//     case 8:
//       nomeMes = 'Setembro';
//       break;
//     case 9:
//       nomeMes = 'Outubro';
//       break;
//     case 10:
//       nomeMes = 'Novembro';
//       break;
//     case 11:
//       nomeMes = 'Dezembro';
//       break;
//     default:
//       nomeMes = 'Mês inválido';
//       break;
//   } // fim switch
//   return nomeMes;
// }

// function getAno(diaSemana){
//   let diaAno = diaSemana.getFullYear();
//   return diaAno;
// }

// function zeroEsquerda(numero) {
//   return numero < 10 ? '0' + numero : numero;
// }

// function getHours(diaSemana){
//   let diaHora = zeroEsquerda(diaSemana.getHours());
//   let diaMinuto = zeroEsquerda(diaSemana.getMinutes());

//   return `${diaHora}:${diaMinuto}`;
// }

// mostrarTela.innerHTML = `<h1>${getDiaTexto(diaSemana)}-feira, ${getDiaMes(diaSemana)} de ${getNomeMes(diaSemana)} de ${getAno(diaSemana)}<br/></h1>
// <h1>${getHours(diaSemana)}</h1>`;

//correção

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

