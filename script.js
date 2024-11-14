let ul = document.querySelector("ul");
let icon = document.querySelector(".menu-toggle");

icon.addEventListener("click",()=>{
     ul.classList.toggle("showNav");

     if(ul.className == "showNav"){
      document.querySelector("#bar").className = "fa-solid fa-xmark"
}else {
    document.querySelector("#bar").className = "fa-solid fa-bars"
    
}
})


{/* <i class="fa-solid fa-xmark"></i> */}