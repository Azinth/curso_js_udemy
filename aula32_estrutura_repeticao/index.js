for (let i = 0; i <= 5; i++) {
  // console.log(`linha ${i}`);
}

for (let i = 0; i <= 5; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(`${i} é ${par}`);
}

const frutas = ['abacaxi', 'banana', 'caju', 'damasco', 'uva'];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`,frutas[i]);
}

