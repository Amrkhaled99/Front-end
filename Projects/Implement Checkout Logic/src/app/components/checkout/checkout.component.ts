import { Component } from '@angular/core';
import { Cart } from 'src/app/classes/cart';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartLine } from '../../classes/cart-line';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {

  cart: Cart;
  order:any;
  Order_data:any;
  constructor(private authService: AuthService,private storageService: StorageService) {
    this.cart = storageService.getCartLines();

  }


  CheckoutForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.pattern('[- +()0-9]+')]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required,Validators.pattern('[- +()0-9]+')],),
    subtotal: new FormControl(Number(localStorage.getItem("subTotal"))),
    shipping: new FormControl(Number(localStorage.getItem("shipping"))),
    total: new FormControl(Number(localStorage.getItem("total"))),

    user_id: new FormControl(JSON.parse(localStorage.getItem('loginData') || '')._id),
    order_date: new FormControl(new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate()),
  });


   getDetial(){
    this.cart.cartLines.map((p) => {
      return {
        product_id: p.product._id,
        price: p.price,
        qty: p.quantity,
      };
    });

  }

  onSubmit() {
    if (this.CheckoutForm.valid) {
       
     this.order= this.cart.cartLines.map((p) => {
      return {
        product: p.product,
        price: p.price,
        qty: p.quantity,
      };
    });

   }


     this.Order_data = {
      shipping_info: {
        first_name:this.CheckoutForm.value.firstName,
        last_name:this.CheckoutForm.value.lastName,
        email: this.CheckoutForm.value.email,
        mobile_num:this.CheckoutForm.value.phone,
        address1: this.CheckoutForm.value.address1,
        address2: this.CheckoutForm.value.address2,
        country: this.CheckoutForm.value.country,
        city: this.CheckoutForm.value.city,
        state:this.CheckoutForm.value.State,
        zip_code: this.CheckoutForm.value.zip,
      },
      _id: "6346ac23bb862e01fe4b653",
      sub_total_price: this.cart.getSubTotal(),
      shipping: this.cart.getShipping(),
      total_price: this.cart.getTotal(),
      user_id: this.CheckoutForm.value.user_id,
      order_date:this.CheckoutForm.value.order_date,
      order_details: this.order,
    };

    this.authService.sendCheckOut(this.Order_data,this.authService.getToken()).subscribe({
      next(data:any){
        
      }
    })

  }



}
