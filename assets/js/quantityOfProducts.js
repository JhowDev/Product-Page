function incrementQuantityOfProducts() {
  let state = Number(quantityOfProducts.innerHTML);

  if (state < 20) {
    state += 1;
    quantityOfProducts.innerHTML = state;
  }
}

function decrementQuantityOfProducts() {
  let state = Number(quantityOfProducts.innerHTML);

  if (state > 1) {
    state -= 1;
    quantityOfProducts.innerHTML = state;
  }
}
