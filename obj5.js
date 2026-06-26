/*6. Function Parameter Destructuring

Write a function that receives:

const product = {
  id: 1,
  details: {
    name: "Laptop",
    price: 75000
  }
};

Output:

Laptop costs ₹75000

Directly destructure inside parameters.*/

const product = {
  id: 1,
  details: {
    name: "Laptop",
    price: 75000
  }
};
console.log(product)

function products(product){
    console.log(product.details.name+" cost is "+product.details.price)
}
products(product)


function productsd({id,details:{name,price}}){
    console.log(name+" cost is "+price)
}
productsd(product)


