
let name = document.getElementById("name");
let point = document.getElementById("points");
let signout = document.querySelector(".signout");
let signIn  = document.querySelector(".sign-in");
let community = document.querySelector(".community")
let store = document.querySelector(".stores-services");
let loved = document.querySelector(".recently-loved");
let basket = document.querySelector(".basket");

let windowPop = document.querySelector(".window-card");
let signmodal = document.querySelector(".sign-in-modal");
let comModal = document.querySelector(".community-header");
let storeModal = document.querySelector(".store-and-services");
let recentModal = document.querySelector(".recent-loved-modal");
let basketModal = document.querySelector(".basket-modal");


let closemodal = document.querySelector(".close");
let closerecent = document.querySelector(".close-loved");
let closesign = document.querySelector(".close-signIn");
let closeCommunity = document.querySelector(".close-community");
let closeStore = document.querySelector(".close-store");
let closebasket = document.querySelector(".close-basket");
let data = JSON.parse(localStorage.getItem("temp-data")) || [];

data.forEach(element => {
    if(data.length>0){
        name.textContent = `Hi, ${element.firstName}`;
        point.innerHTML = `<img src="https://www.sephora.com/img/ufe/bi/logo-insider.svg"/> 0 pts`
        localStorage.setItem("temp-data",JSON.stringify(data));
     }
});

 //      window onload Modal functionality

 closemodal.addEventListener("click",function(){
     windowPop.style.display = "none";
})

//      sign-in Modal functionality

 closesign.addEventListener("click",function(){
     signmodal.style.visibility = "hidden";
 })
 signIn.addEventListener("mouseenter",function(){
     signmodal.style.visibility = "visible";
     if(signmodal.style.visibility === "visible"){
          storeModal.style.visibility = "hidden";
          comModal.style.visibility = "hidden";
          basketModal.style.visibility = "hidden"
          recentModal.style.visibility = "hidden"
     }
})

//      recently loved Modal functionality

closerecent.addEventListener("click",function(){
     recentModal.style.visibility = "hidden";
 })
 loved.addEventListener("mouseenter",function(){
     recentModal.style.visibility = "visible";
     if(recentModal.style.visibility === "visible"){
          storeModal.style.visibility = "hidden";
          comModal.style.visibility = "hidden";
          signmodal.style.visibility = "hidden";
          basketModal.style.visibility = "hidden"
     }
})

//      service-store Modal functionality

closeStore.addEventListener("click",function(){
     storeModal.style.visibility = "hidden";
 })

 store.addEventListener("mouseenter",function(){
     storeModal.style.visibility = "visible";
     if(storeModal.style.visibility === "visible"){
          comModal.style.visibility = "hidden";
          signmodal.style.visibility = "hidden";
          basketModal.style.visibility = "hidden"
     }
})


//      community Modal functionality

community.addEventListener("mouseenter",function(){
      comModal.style.visibility = "visible";
      if(comModal.style.visibility = "visible"){
          signmodal.style.visibility = "hidden";
          storeModal.style.visibility = "hidden";
          basketModal.style.visibility = "hidden"
      }
})
closeCommunity.addEventListener("click",function(){
     comModal.style.visibility = "hidden";
 })

 //     basket Modal functionality

 closebasket.addEventListener("click",function(){
     basketModal.style.visibility = "hidden";
 })
 basket.addEventListener("mouseenter",function(){
     basketModal.style.visibility = "visible";
     if(basketModal.style.visibility === "visible"){
          storeModal.style.visibility = "hidden";
          comModal.style.visibility = "hidden";
          signmodal.style.visibility = "hidden";
          recentModal.style.visibility = "hidden";

     }
})

     //   sign-out functionality

signout.addEventListener("click",function() {
     if(data.length>0){
        localStorage.removeItem("temp-data");
        window.location.href = "../signIn/index.html";
     }
})





