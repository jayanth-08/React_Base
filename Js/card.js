let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("ul");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("on-toggle");
    nav.classList.toggle("on-toggle");
})


// let cart_Burger = document.querySelector(".cart-burger");
// let nav_Cart = document.querySelector(".nav-cart");

// cart_Burger.addEventListener("click", ()=>{
//     cart_Burger.classList.toggle("on-cart");
//     nav_Cart.classList.toggle("on-cart");
// })