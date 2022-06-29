// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

let min = 0;
let max = 10;

let rand = random(min, max);

while (rand !==9) {
  rand = random(min, max);
  console.log(rand);
}

//o do while executa pelo menos uma vez
do {
  
} while (condition);


