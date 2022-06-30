
// function fizzBuzz(num) {
//   if ((num%5===0) && (num%3===0)){
//     return 'FizzBuzz'
//   } else if (num%3===0 ) {
//   return 'Fizz'
//   } else if (num%5===0){
//   return 'Buz'
//   }
//   return num
// }

// function numZeroa100() {
//   for (let num = 0; num <= 100; num++) {
//     if ((num % 5 === 0) && (num % 3 === 0)) {
//       console.log('FizzBuzz')
//     } else if (num % 3 === 0) {
//       console.log('Fizz')
//     } else if (num % 5 === 0) {
//       console.log('Buz')
//     } else {
//       console.log(num)
//     }
//   }
  
// }
// console.log(numZeroa100())

//___________________________________________________________
//correção:

function fizzBuzz(n){
  if (typeof n !== 'number') return n;
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
}

for (let i = 0; i <=100; i++) {
  console.log(i, fizzBuzz(i));
  
}