
const array = [
  { name: 'a', price: 100 },
  { name: 'b', price: 200 },
  { name: 'c', price: 300 },
  { name: 'd', price: 40 },
  { name: 'e', price: 500 },
];

function checkLowestObjectInArray(array) {

  let lowestObject = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].price < lowestObject.price) {
      lowestObject = array[i];
    }
  }

  return lowestObject;
}

// console.log(checkLowestObjectInArray(array));



const phones = [
  { name: 'Samsung', camera: 12, storage: 64, price: 45999, color: 'silver' },
  { name: 'iphone', camera: 12, storage: 64, price: 89999, color: 'gold' },
  { name: 'Walton', camera: 15, storage: 64, price: 21000, color: 'black' },
  { name: 'Xiaomi', camera: 18, storage: 64, price: 34000, color: 'silver' },
  { name: 'Vivo', camera: 18, storage: 128, price: 30000, color: 'blue' },
  { name: 'Oppo', camera: 35, storage: 128, price: 35000, color: 'silver' },
  { name: 'Realme', camera: 25, storage: 128, price: 29000, color: 'silver' },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.camera > cheapest.camera) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);