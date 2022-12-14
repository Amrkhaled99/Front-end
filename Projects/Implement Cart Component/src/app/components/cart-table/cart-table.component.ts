import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/classes/cart';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {
  @Input() cart: Cart = {} as Cart;

  constructor(private storageService:StorageService){

  }

  // @Input() cartLines: CartLine[] = [];
  // @Output() limitAlert = new EventEmitter<string>();
}