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
    const products: Product[] = this.getProducts();
    for (let i = 0; i < quantity; i++) {
      products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCartLines(): CartLine[] {
    //Convert Array of products into cart lines array and return it
    const products: Product[] = this.getProducts();
    const cartLines: CartLine[] = [];
    products.forEach((p) => {
      const oldProduct = cartLines.findIndex((x) => x.product._id === p._id);
      if (oldProduct >= 0) {
        cartLines[oldProduct].quantity += 1;
      } else {
        cartLines.push({
          price: p.price,
          product: p,
          quantity: 1,
        });
      }
    });
    return cartLines;
  }


  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  } 

}



