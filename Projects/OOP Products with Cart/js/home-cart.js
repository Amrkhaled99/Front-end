
class CartLine {
  items;

  constructor() {
    this.items = JSON.parse(localStorage.getItem("productsItem") || "[]");

  }

  decQuantity = (i) => {
    if (this.items[i].quantity > 1) this.items[i].quantity--;
    this.renderHTML();

  };
   incQuantity = (i) => { 
    this.items[i].quantity++;
   this.renderHTML();
  };
 
   removeItem = (i) => {
    this.items.splice(i, 1);  
    this.renderHTML();
  };

}



class Cart extends CartLine {

  constructor() {
    super();
  }



   getShipping = () => {
    return this.items.length * 10;
  };
  
   getSubTotal = () => {
    return this.items.map((p) => p.price * p.quantity).reduce((a, e) => (a += e),0);
  };
  
  
   renderHTML = () => {

      document.getElementById("products").innerHTML = "";
    
      this.items.forEach((p, i) => {
        document.getElementById("products").innerHTML += getProductHTMLRow(p, i);
      });
      document.getElementById("shipping").innerHTML = `$${this.getShipping()}`;
      document.getElementById("sub-total").innerHTML = `$${this.getSubTotal()}`;
      document.getElementById("total").innerHTML = `$${this.getShipping() + this.getSubTotal()}`;
      localStorage.setItem("productsItem", JSON.stringify(this.items));

    };
    
   
    

}


let cart =new Cart();
getProductHTMLRow = (p,i) => {
  return `
  <tr>
    <td class="align-middle"><img src="img/${
      p.pname
    }.jpg" alt="" style="width: 50px;"> ${p.pname}</td>
    <td class="align-middle">$${p.price}</td>
    <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
            <div class="input-group-btn">
                <button type="button" class="btn btn-sm btn-primary btn-minus" onclick="cart.decQuantity(${i})">
                <i class="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${
              p.quantity
            }">
            <div class="input-group-btn">
                <button type="button" class="btn btn-sm btn-primary btn-plus" onclick="cart.incQuantity(${i})">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td class="align-middle">$${p.price * p.quantity}</td>
    <td class="align-middle"><button class="btn btn-sm btn-danger" type="button" onclick="cart.removeItem(${i})"><i class="fa fa-times"></i></button></td>
</tr>`;

};
cart.renderHTML();




