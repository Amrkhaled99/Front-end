const addSingleProduct = (product) => {

  // alert("work");
  const products = JSON.parse(localStorage.getItem("productsItem") || "[]");
  const oldProductIndex = products.findIndex((x) => x.id === product.id);
  if (oldProductIndex >= 0) {
    products[oldProductIndex].quantity += 1;
  } else {
    products.push({ ...product, quantity: 1 });
  }

  
  // products.push({ ...product, quantity: 1 });

  localStorage.setItem("productsItem", JSON.stringify(products));
};


