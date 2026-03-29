console.log("Website Loaded");
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerText = "☀️";
} else {
toggle.innerText = "🌙";
}

});

/* SCROLL REVEAL */

function reveal() {

let reveals = document.querySelectorAll(".reveal");

for (let i = 0; i < reveals.length; i++) {

let windowHeight = window.innerHeight;

let elementTop =
reveals[i].getBoundingClientRect().top;

let elementVisible = 100;

if (elementTop < windowHeight - elementVisible) {

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);
