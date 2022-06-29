const elementos = [
  {tag: 'p', texto: 'Texto 1'},
  {tag: 'div', texto: 'Texto 2'},
  {tag: 'section', texto: 'Texto 3'},
  {tag: 'footer', texto: 'Texto 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  const elemento = elementos[i];
  const tag = document.createElement(elemento.tag);
  tag.innerText = elemento.texto;
  div.appendChild(tag);
}

// for (let i = 0; i < elementos.length; i++) {
//   const {tag, texto} = elementos[i];
//   const tagCriada = document.createElement(tag);
//   const textoCriado = document.createTextNode(texto);
//   tagCriada.appendChild(textoCriado);
//   div.appendChild(tagCriada);
// }

container.appendChild(div);