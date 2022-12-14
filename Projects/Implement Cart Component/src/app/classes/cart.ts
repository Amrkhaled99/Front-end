import { StorageService } from "../services/storage.service";
import { CartLine } from "./cart-line";

export class Cart {
    private storageService: StorageService;

    cartLines: CartLine[];

    constructor(cartLines: CartLine[]) {
        this.cartLines = cartLines;
        this.storageService = new StorageService();
      }
    
      getTotal(): number {
        return this.getShipping() + this.getSubTotal();
      }
      getSubTotal(): number {
        return this.cartLines
          .map((x) => x.price * x.quantity)
          .reduce((a, v) => (a += v), 0);
      }
      getShipping(): number {
        return (
          this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
        );
      }
      
      decQuantity(i: number) {
        if (this.cartLines[i].quantity > 1) this.cartLines[i].quantity -= 1;
        this.storageService.save(this.cartLines);
      }
      
      incQuantity(i: number) {
        this.cartLines[i].quantity += 1;
        this.storageService.save(this.cartLines);
      }
      
     
      remove(i: number) {
        this.cartLines.splice(i, 1);
        this.storageService.save(this.cartLines);
      }
      

    
    }
