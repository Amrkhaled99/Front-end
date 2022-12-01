const renderHTML = () => {
  document.getElementById("products").innerHTML = "";
  productsList.forEach((p, i) => {
    document.getElementById("products").innerHTML += getProductHTMLRow(p, i);
  });
  document.getElementById("shipping").innerHTML = `$${getShipping()}`;
  document.getElementById("sub-total").innerHTML = `$${getSubTotal()}`;
  document.getElementById("total").innerHTML = `$${getTotal()}`;
};

const removeItem = (i) => {
  productsList.splice(i, 1);
  updateLocalStorage(productsList);

  renderHTML();
};


const decQuantity = (i) => {
  if (productsList[i].quantity > 1) productsList[i].quantity--;
  updateLocalStorage(productsList);
  renderHTML();
};
const incQuantity = (i) => { 
   productsList[i].quantity++;
   window.localStorage.setItem('tabs', 1)
   updateLocalStorage(productsList);
  renderHTML();
};


const updateLocalStorage=(products)=>{
  localStorage.setItem("productsItem", JSON.stringify(products));
}


const getShipping = () => {
  return productsList.length * 10;
};

const getSubTotal = () => {
  return productsList.map((p) => p.price * p.quantity).reduce((a, e) => (a += e));
};

const getTotal = () => getShipping() + getSubTotal();
 

const getProductHTMLRow = (p,i) => {
  return `
  <tr>
    <td class="align-middle"><img src="img/${
      p.Pname
    }.jpg" alt="" style="width: 50px;"> ${p.Pname}</td>
    <td class="align-middle">$${p.price}</td>
    <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
            <div class="input-group-btn">
                <button type="button" class="btn btn-sm btn-primary btn-minus" onclick="decQuantity(${i})">
                <i class="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${
              p.quantity
            }">
            <div class="input-group-btn">
                <button type="button" class="btn btn-sm btn-primary btn-plus" onclick="incQuantity(${i})">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td class="align-middle">$${p.price * p.quantity}</td>
    <td class="align-middle"><button class="btn btn-sm btn-danger" type="button" onclick="removeItem(${i})"><i class="fa fa-times"></i></button></td>
</tr>`;
};


const productsList = JSON.parse(localStorage.getItem("productsItem") || "[]");
renderHTML();