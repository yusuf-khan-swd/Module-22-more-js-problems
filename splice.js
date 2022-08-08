
const first = [1, 2, 3, 4, 5, 6, 7, 8];
const partial = first.splice(2, 3, 'a', 'b');
console.log(partial);
console.log(first);