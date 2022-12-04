import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },

  { path: 'cart', component: CartComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },

];



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CheckoutComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )]
 ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
