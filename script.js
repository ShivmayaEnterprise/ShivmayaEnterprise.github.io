console.log("Website Loaded");
/* DARK MODE */

const toggle =
document.getElementById("darkToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);

};

/* LOAD DARK MODE */

if(localStorage.getItem("darkMode") === "true"){

document.body.classList.add("dark");

}

/* SCROLL REVEAL */

function reveal(){

let reveals =
document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight =
window.innerHeight;

let elementTop =
reveals[i]
.getBoundingClientRect().top;

if(elementTop < windowHeight-100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);
