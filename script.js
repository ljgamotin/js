
function sumPrimes(n) {

  let sum = 0

  let array = [0, 0]

  let i

  for ( i = 2; i < n; i++) {
    array.push(i);
  }

  for (i = 2; i < n; i++) {
    if (array[i] !== 0) {
      for (let setNum = (2 * i); setNum < n; setNum += i) {
        if (array[setNum] % i === 0) {
        array[setNum] = 0
        }
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    sum= sum + array[i]
  }

  return sum;

}
console.log(sumPrimes(2e6));
