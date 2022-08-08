
// Practice Problem 2

/** first try
 function isPrimeNumber(number) {
  for (let i = 2; i < number.length; i++) {
    if (number % i !== 0) {
      return 'its prime'
    }
  }
}

console.log(isPrimeNumber(5));
 */


/** second try
 
function isPrimeNumber(number) {
  let output = "";
  for (let i = 2; i < number.length; i++) {
    if (number % i !== 0) {
      output += 'its prime'
    }
  }
  return output;
}

console.log(isPrimeNumber(3));
 */


/** third try
 
function isPrimeNumber(number) {
  for (let i = 2; i < number.length; i++) {
    if (number % i !== 0) {
      return number;
    }
  }
}

console.log(isPrimeNumber(5));
 */

/** fourth try
 
 function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log('Not a prime Number');
    } else {
      console.log('Prime number');
    }
  }
}

isPrimeNumber(4);
 */


/** fifth try
 function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'Not a prime Number';
    } else {
      return 'A prime number';
    }
  }
}

console.log(isPrimeNumber(6));
 */


/** sixth try 
 function isPrimeNumber(number) {
  for (let i = 0; i <= number; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return 'not a prime';
      } else {
        return 'a prime';
      }
    }
  }
}

console.log(isPrimeNumber(15));

 */


function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(15));

function showPrimes(limit) {
  for (let i = 0; i <= limit; i++) {
    if (isPrime(i)) console.log(i);
  }
}

showPrimes(15);