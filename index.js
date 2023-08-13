const form = document.querySelector("form");
const work1 = document.querySelector(".container");
const work2 = document.querySelector(".container1");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    work1.classList.add("hide");
    work2.classList.remove("hide");
});

const close = document.querySelector("#page");
close.addEventListener("click" , (e) => {
    e.preventDefault();
    work1.classList.remove("hide");
    work2.classList.add("hide");
});