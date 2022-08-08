
// check divisibility from 1 to certine limit => 1 to 15 all number
function fizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzBuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

// only check is input divisibility and validate input
// const output = FizzBuzz3(false);
// console.log(output);

function FizzBuzz3(input) {
  if (!input) return NaN;
  if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  return input;
}



// check divisibility 1 to certine limit => 1 to 115 all the number
function fizzBuzz2(limit) {

  for (let i = 0; i <= limit; i++) {
    let output = "";

    if (i % 3 === 0) output += 'fizz';
    if (i % 5 === 0) output += 'buzz';

    if (output === "") output = i;

    console.log(output);
  }

}

// fizzBuzz2(115);


for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('foobar');
  }
  else if (i % 3 === 0) {
    console.log('foo');
  }
  else if (i % 5 === 0) {
    console.log('bar');
  }
  else {
    console.log(i);
  }
}



