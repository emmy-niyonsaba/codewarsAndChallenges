// Using ES6:

// - Calculate the total value of each product.
// - Return an array containing the product name and total value.
// - Find the product with the highest total value.
// - Calculate the grand total of all products.

/// Solution

const products = [
  { name: "Laptop", price: 1200, quantity: 2 },
  { name: "Mouse", price: 25, quantity: 5 },
  { name: "Keyboard", price: 75, quantity: 3 },
];

const myFunction = (prod) => {
  const totalValues = prod.map((e) => ({
    productname: e.name,
    value: e.price * e.quantity,
  }));
  const priceArry = prod.map((e) => e.price * e.quantity);
  const high = Math.max(...priceArry);
  const grandTotal = priceArry.reduce((a, b) => a + b);
  return {
    TotalVlues: totalValues,
    highValuesProduct: high,
    grandTotal: grandTotal,
  };
};

console.log(myFunction(products));
