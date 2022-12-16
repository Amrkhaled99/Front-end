import { Injectable } from '@angular/core';
import { Product } from "../classes/product";
import { Cart } from '../classes/cart';
import { CartLine } from '../classes/cart-line';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  likedProducts:Product[]=[];

  constructor() {}

  getProductsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  addProducts(product: Product, quantity: number) {
    const products: Product[] = this.getProductsFromLocalStorage();
    for (let i = 0; i < quantity; i++) {
      products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCartLines(): Cart {
    const products = this.getProductsFromLocalStorage();
    const cartLines: CartLine[] = [];
    products.forEach((p:any) => {
      const ix = cartLines.findIndex((x) => x.product._id === p._id);
      if (ix >= 0) {
        cartLines[ix].quantity += 1;
      } else {
        cartLines.push({
          price: p.price,
          product: p,
          quantity: 1,
        });
      }
    });
    return  new Cart(cartLines);
  }


  save(cartLines: CartLine[]) {
    const products: Product[] = [];
    cartLines.forEach((c) => {
      for (let i = 0; i < c.quantity; i++) {
        products.push(c.product);
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  getQuantity(): number {
    const products = this.getProductsFromLocalStorage();
    return products?.length || 0;
  }


  
  addLikedToLocalStorge(product: Product): void {
    this.likedProducts.push(product);
    localStorage.setItem("likedProducts", String(this.likedProducts.length))
  }
  public getLikedToLocalStorge(): Number {

    return  Number(localStorage.getItem("likedProducts"));
  }
}
