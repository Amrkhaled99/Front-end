
const addSingleProduct = (product) => {

 let productsItem; 
productsItem=new Product(product.id,product.Pname,product.price);

setLocalStorage(productsItem);

}



const setLocalStorage = (product) => {

  const products = JSON.parse(localStorage.getItem("productsItem") || "[]");
  const oldProductIndex = products.findIndex((x) => x.id === product.id);
  if (oldProductIndex >= 0) {
    products[oldProductIndex].quantity += 1;
  } else {
    products.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("productsItem", JSON.stringify(products));
};




 class Product {
  id;
  pname;
  price;
  constructor(id, pname, price) {
    this.id=id;
    this.pname = pname;
    this.price = price;
  }
}


