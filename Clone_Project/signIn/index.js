let message = document.querySelector(".error-message");
let surfMode = document.querySelector(".surfMode");
let data = JSON.parse(localStorage.getItem("data")) || [];
  let flag = false;

function handleSignIn(e){
    e.preventDefault();

   let email = e.target.email.value;
   let password = e.target.password.value;

   data.forEach((element,idx)=> {
        if(element.email === email && element.password=== password){
            flag = true;
        }
        else{
            flag = false;
        }
   });

   if(flag){
      alert("Login successful!")
      localStorage.setItem("temp-data",JSON.stringify(data))
      window.location.href = "../HomePage/index.html"
   }
   else{
      message.innerHTML = `<h5>There is an error with your email and/or password. Passwords are 6 to 12 <br> characters long. Please try again or click 'Forgot Password?</h5>`
      message.style.color = "red"
   }

}
surfMode.addEventListener("click",function(){
    localStorage.removeItem("temp-data");
    window.location.href = "../HomePage/index.html";
})