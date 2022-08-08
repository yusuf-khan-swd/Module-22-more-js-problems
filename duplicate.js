
const array = ['a', 'b', 'c', 'a', 'b', 'd'];

function filterDuplicate(array) {
  let result = [];
  for (let element of array) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  console.log(result);
}

// removeDuplicate(array);



const names = ['abul', 'babul', 'cabul', 'dadul', 'ebul', 'babul', 'kabul', 'cabul', 'abul', 'gabul'];

function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
