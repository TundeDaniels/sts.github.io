let count = 0
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let saveEl = document.querySelector('.save-el')
let triSumEl = document.getElementById("TriSum-el")
let sedSumEl = document.getElementById("sedSum-el")
let suvSumEl = document.getElementById("suvSum-el")
let pickSumEl = document.getElementById("pickSum-el")
let vanSumEl = document.getElementById("vanSum-el")


document.querySelector(".tri-btn").addEventListener("click", () => {
    count = count + 1
    document.querySelector(".tri-num").innerHTML = count

});


document.querySelector(".sedan-btn").addEventListener("click", () => {
    count1 = count1 + 1
    document.querySelector(".sedan-num").innerHTML = count1

});

document.querySelector(".suv-btn").addEventListener("click", () => {
    count2 = count2 + 1
    document.querySelector(".suv-num").innerHTML = count2
});

document.querySelector(".pick-btn").addEventListener("click", () => {
    count3 = count3 + 1
    document.querySelector(".pick-num").innerHTML = count3

});

document.querySelector(".van-btn").addEventListener("click", () => {
    count4 = count4 + 1
    document.querySelector(".van-num").innerHTML = count4

});


saveEl.addEventListener('click', () => {
    triSumEl.textContent += " " + count
    sedSumEl.textContent += " " + count1
    suvSumEl.textContent += " " + count2
    pickSumEl.textContent += " " + count3
    vanSumEl.textContent += " " + count4


    document.querySelector(".tri-num").innerHTML = 0
    document.querySelector(".sedan-num").innerHTML = 0
    document.querySelector(".suv-num").innerHTML = 0
    document.querySelector(".pick-num").innerHTML = 0
    document.querySelector(".van-num").textContent = 0

    count = 0
    count1 = 0
    count2 = 0
    count3 = 0
    count4 = 0
})

