const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const numero of numeros) {
  if (numero === 3) {
    continue;
  }
  console.log(numero); // 1, 2, 4, 5, 6, 7, 8

  if (numero === 8) {
    console.log('Encontrei o 8! Saindo do loop!');
    break;
  }
}

