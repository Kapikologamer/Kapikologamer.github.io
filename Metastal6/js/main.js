let btn = document.querySelector(".menu");
let navbar = document.querySelector(".navbar.container");
let links = document.querySelector(".hlinks");
let logo = document.querySelector(".navlogo");

btn.onclick = function() {
    navbar.classList.toggle("active")
    links.classList.toggle("active")
    console.log("Jest git")
}