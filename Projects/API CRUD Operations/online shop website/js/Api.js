const getAllProduct = async()=>{
  const request = fetch("http://localhost:5000/api/products/getFeatured/")
  let response = await request;
  let products = await response.json();
  return products;
}


try{
  getAllProduct();
}
catch (error) {
  console.log(error);
}



getAllProduct().then((data)=> {data.data.forEach(product => {
 
 
  document.getElementById("featured-products").innerHTML+=
   ` <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
   <div class="product-item bg-light mb-4">
       <div class="product-img position-relative overflow-hidden">
           <img class="img-fluid w-100" src="${product.image}" alt="">
           <div class="product-action">
               <a class="btn btn-outline-dark btn-square" href="#" onclick="addSingleProduct({id:${product._id},Pname:${product.name},price:${product.price}})"><i class="fa fa-shopping-cart"></i></a>
               <a class="btn btn-outline-dark btn-square" href="#" onclick="alertDisplay()"><i class="far fa-heart"></i></a>
               <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
               <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-search"></i></a>
           </div>
       </div>
       <div class="text-center py-4">
           <a class="h6 text-decoration-none text-truncate" href="">${product.name}</a>
           <div class="d-flex align-items-center justify-content-center mt-2">
               <h5>${product.price}</h5><h6 class="text-muted ml-2"><del>>${product.price-(product.discount*product.price)}</del></h6>
           </div>
           <div class="d-flex align-items-center justify-content-center mb-1">
               <small class="fa fa-star text-primary mr-1"></small>
               <small class="fa fa-star text-primary mr-1"></small>
               <small class="fa fa-star text-primary mr-1"></small>
               <small class="fa fa-star text-primary mr-1"></small>
               <small class="fa fa-star text-primary mr-1"></small>
               <small>(${product.rating_count})</small>
           </div>
       </div>
   </div>
</div>
`


})
});


