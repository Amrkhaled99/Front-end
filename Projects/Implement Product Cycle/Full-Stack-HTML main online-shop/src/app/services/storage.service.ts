import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // products: Product[] = [];
  cartProducts: CartLine[] = [];
  listArray:any[]=[];
  products:any[]=[];

  constructor() {}

  addProducts(product: Product, quantity: number) {
    //Add product to Localstorage as flat products (array of products not cartLines)
    this.listArray.push([{product:product,quantity:quantity}]);
    localStorage.setItem("ProductDetails",JSON.stringify(this.listArray));
 
  }

  getCartLines(): CartLine[] {
    //Convert Array of products into cart lines array and return it
    let serviceProduct = localStorage.getItem("ProductDetails")
    if(serviceProduct != null ){
      this.products = JSON.parse(serviceProduct);
     
      this.products.forEach(data => {         // data[0].quantity <--- *{Get product Quantity}*
         let cartItem: CartLine = {
          product: data[0].product[0].product,
          quantity: data[0].product[0].quantity,
          price:  data[0].product[0].price
        }
        this.cartProducts.push(cartItem);
    });
    return this.cartProducts
    }
    else{
    return [];
    }
  }
}
