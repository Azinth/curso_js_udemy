let nome = ['Gabriel souza', 'Jacqueline Viana', 'Anderson Rodrigues'];

for (const i of nome) {
  console.log(i);
}

/* objeto não é iterável.

For Clássico  - geralmente com iteráveis (array ou string)
For In - lê os indices ou chaves do objeto (array, string ou objeto)
for of - retorna o valor em si (iteráveis, arrays ou strings)


for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
  
}

for (const key in nome) {
  console.log(nome[key]);   
}

*/