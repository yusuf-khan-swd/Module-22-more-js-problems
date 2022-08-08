
const string = '';
const number = 1;
const boolean = true;
const object = {};
const array = [10, 20, 30];
function add() { }

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof object);
console.log(Array.isArray(array));
console.log(typeof add);

console.log("");

console.log(array.includes(40));
console.log(array.includes(20));

if (array.indexOf(40) !== -1)
  console.log(true);
else
  console.log(false);


console.log("");

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);