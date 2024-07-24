/////////// Header
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".menu")
const dropHamburger = document.querySelector(".dropdown-hamburger")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    dropHamburger.classList.add("active")
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))


dropHamburger.addEventListener("click", function () {
    dropHamburger.classList.remove("active")
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")


})



// button up element
const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
})



/////////////////////////////// price buttons 
let btns = document.getElementsByClassName("btn")
console.log(btns.length);

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    });
}









//////////// CAR WASH PRICES

const priceList = document.querySelector(".priceList")



function price() {
    priceList.innerHTML = document.getElementById("sedanPrices").innerHTML
}


window.onload = price()





let sedanEl = document.getElementById("sedans")
sedanEl.addEventListener("click", function () {
    priceList.innerHTML = document.getElementById("sedanPrices").innerHTML
});


let coupeEl = document.getElementById("coupes")
coupeEl.addEventListener("click", function () {
    priceList.innerHTML = document.getElementById("coupePrices").innerHTML

});

let suvEl = document.getElementById("SUVs")
suvEl.addEventListener("click", function () {
    priceList.innerHTML = document.getElementById("suvPrices").innerHTML
});

let pickupEl = document.getElementById("pickups")
pickupEl.addEventListener("click", function () {
    priceList.innerHTML = document.getElementById("pickupPrices").innerHTML
});

let vansEl = document.getElementById("vans")
vansEl.addEventListener("click", function () {
    priceList.innerHTML = document.getElementById("vanPrices").innerHTML
});








// ////////////////////////// carousel
// const track = document.querySelector('.carousel_track-container');
// const slides = Array.from(track.children);
// console.log(slides);
// ////when i click right, move slides to the right
// ////when i click left, move slides left
// ////when i click the nav indicators, move to that slide




///////CONTACT FORM/////////////////////////////////////////////////////////////////////////////////////////







///////////////////////////////// COUNTING ROOM  /////////////////////////////////////////////////////////////
