let count = 0,
  quantity,
  vQuantity = 0;
  let price;
function add_Product() {
  let Pname,
    item,
    total = 0;
  Pname = document.getElementById("ed_pname").value;
  price = document.getElementById("ed_price").value;
  quantity = document.getElementById("ed_quantity").value;



  if (Pname.length != 0 && price.length != 0 && quantity.length != 0) {
    
    if  ( isNumeric(price)&& isNumeric(quantity)) {
      var table = document.getElementById("Product_table");
      var row = table.insertRow();
      var cell = row.insertCell();

      row.style.backgroundColor = "white";
      row.style.color = "black";

      cell.innerHTML = Pname;

      cell = row.insertCell();
      cell.innerHTML = `EGP ${price}`;

      cell = row.insertCell();

      cell.innerHTML = `<div class="">
      <button class="btn btn-plus-minus" onclick="increaseQ(${Number(
        quantity
      )})"><i class="text-white fa-solid fa-minus"></i></button>
      <div class="btn text-center text-muted p-2" style="background-color::#adb5bd"> ${quantity} </div>        
      <button class="btn btn-plus-minus"  onclick="decreaseQ(${Number(
        quantity
      )})"><i class="text-white fa-solid fa-plus"></i></button>
      </div>`;

      cell = row.insertCell();
      cell.innerHTML = `EGP ${price * quantity}`;

      cell = row.insertCell();

      cell.innerHTML = `<button class="btn btn-danger" onclick="remove_Product(${item})"><i class="text-white fa-solid fa-xmark"></i></button>`;
    } else {
      alert("Only Numbers Allowed");
    }
  }
   else {
    alert("please fill in the required information");
  }

}

function increaseQ(q) {
  q++;
}

function remove_Product(item) {
  var table = document.getElementById("Product_table");
  var row = table.deleteRow(item);
}




function isNumeric(value) {
  return /^-?\d+$/.test(value);
}