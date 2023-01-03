let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("ul");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("on-toggle");
    nav.classList.toggle("on-toggle");
})
