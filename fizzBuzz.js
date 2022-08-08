
// for (let i = 1; i <= 30; i++) {
//   let output = "";

//   if (i % 3 === 0) output += "Fizz";
//   if (i % 5 === 0) output += "Buzz";

//   if (output === "") output = i;

//   console.log(output);
// }



function fizzBuzz(input) {
  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 === 0)
    return 'Buzz';
  return input;
}

for (let i = 0; i <= 30; i++)
  console.log(fizzBuzz(i));