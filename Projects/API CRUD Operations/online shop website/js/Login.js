
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const _email = document.getElementById('_email').value;
const _password = document.getElementById('_password').value;

  
signInButton.addEventListener('click', () => {
//  alert("ww");
  // container.classList.add("right-panel-active");
  userLogin(_email,_password);

});



const userLogin=async(_email,_password)=>{
  
  let res = await fetch("http://localhost:5000/api/users/login", {
       method: "POST",
       headers: {
        'x-access-token': 'Bearer <token>',
          'Content-Type': 'application/json'
    },
       body: JSON.stringify({
         email:_email,
         password: _password
      } ),
  })
  .then(async(res) => {
    let data = await res.json();
    localStorage.setItem("x-access-token",data.token);
    localStorage.setItem("userID", data._id);
    alert("You have successfully logged in.");
    
   window.location = "index.html";
  })
  .catch((err) => {
    // alert("login Failed!")
    console.log(err);
  })
  
      }
  
