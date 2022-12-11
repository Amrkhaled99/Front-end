
const userLogin=async(_email,_password)=>{
  
    fetch ('http://localhost:5000/api/users/login/', {
       method: "POST",
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
       body: JSON.stringify({
         email:_email,
         password: _password
      } ),
  })
    .then((response) => response.json())
    .then((result) => {
      if(result.message === "SUCCESS"){
        alert("You are logged in.");
        this.goToMain();
       } else {
           alert("Please check your login information.");
          }
        });
  
      }
  
  

      
      userLogin("ramymibrahim@yahoo.com","123456");
