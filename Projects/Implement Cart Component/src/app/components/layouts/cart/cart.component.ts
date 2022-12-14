import { Component } from '@angular/core';
import { Cart } from 'src/app/classes/cart';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart;

  constructor(private storageService: StorageService) {
    this.cart = this.storageService.getCartLines();
  }

}
