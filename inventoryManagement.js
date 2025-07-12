let products = [ "Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(newProduct) {
  products.push(newProduct);
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  } else {
    console.error("Invalid position");
  }
}

function removeLastProduct() {
  products.pop();
}


module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
