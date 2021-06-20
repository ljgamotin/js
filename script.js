
function sumPrimes(n) {

  let sum = 0

  //array of prime numbers to add
  let array = [0, 0]

  let i
  // assume that all values of 2 are prime numbers
  for ( i = 2; i < n; i++) {
    array.push(i);
  }

  // go through each index between 2 and n
  for (i = 2; i < n; i++) {
    //numbers that not yet removed will be set to 0
    if (array[i] !== 0) {
      //removed all the multiples in the array and set to 0
      for (let setNum = (2 * i); setNum < n; setNum += i) {
        if (array[setNum] % i === 0) {
        array[setNum] = 0
        }
      }
    }
  }
  // adding all the values in the array that are not set to 0
  for (let i = 0; i < array.length; i++) {
    sum= sum + array[i]
  }

  return sum;

}
console.log(sumPrimes(2e6));
