let message = document.querySelector(".message");
function handleSignUp(e){
    e.preventDefault();
    let fname = e.target.fname.value;
    let lname = e.target.lname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let number = e.target.number.value;
    let month = e.target.month.value;
    let day = e.target.day.value;
    let zipcode = e.target.zipcode.value;

   if(fname.length>0 && lname.length>0 && email.length>0 && password.length>0 && number.length>0){
   let arr = JSON.parse(localStorage.getItem("data")) || [];
   let obj = {
       firstName : fname,
       lastName : lname,
       email : email,
       password : password,
       number : number,
       month : month,
       day : day,
       zipcode : zipcode
   }

   arr.push(obj);
  localStorage.setItem("data",JSON.stringify(arr));
  window.location.href = "../signIn/index.html";
   }
   else{
      message.innerHTML = `<h5>Please Fill the All Required Fields</h5>`
      message.style.color = "red";
   }
}
