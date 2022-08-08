
const shopingCart = [
  { name: 'shoe', price: 1200 },
  { name: 'shirt', price: 2200 },
  { name: 'pant', price: 3700 },
  { name: 'belt', price: 600 }
];

function calculateShopingCost(array) {
  let totalCost = 0;
  for (let i = 0; i < array.length; i++) {
    totalCost += array[i].price
  }
  return totalCost;
}

// console.log(calculateShopingCost(shopingCart));




function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price
  }
  return sum;
}

const expense = totalCost(shopingCart);
console.log('Total expense today : ', expense);