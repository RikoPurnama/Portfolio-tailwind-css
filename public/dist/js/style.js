// fixedNav
window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.getElementById('toTop');

    if (window.pageYOffset > fixedNav) {
        header.classList.add("nav-fixed");
        toTop.classList.add('toTop-fixed');
        toTop.classList.remove("hidden");
    } else {
        header.classList.remove("nav-fixed");
        toTop.classList.add("hidden");
        toTop.classList.remove("toTop-fixed");
    }
}


// Navigation toggle
const btn = document.getElementById("toggle");
const navigation = document.getElementById("nav");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    navigation.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {

    if (e.target != btn && e.target != navigation) {
        btn.classList.remove("active");
        navigation.classList.add("hidden");
    }
})


// dark toggle
const darkToggle = document.getElementById("dark-toggle");
let circle = document.querySelector(".circle");


//  dark Mode
const color = document.querySelector('html');
let mode = localStorage.getItem('darkToggle');

if (!mode) {
    localStorage.setItem('darkToggle', 'off');
};

const darkMode = () => {
    circle.classList.add('translate-x-3');
    color.classList.add('dark');
    localStorage.setItem('darkToggle', 'on');
};

if (mode === 'on') {
    darkMode();
}

const lightMode = () => {
    circle.classList.remove('translate-x-3')
    color.classList.remove('dark');
    localStorage.setItem('darkToggle', 'off')
}


darkToggle.addEventListener("click", () => {
    if (darkToggle.checked) {
        darkMode();
    } else {
        lightMode();
    }
 });

// Typeit 
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type", {
  speed : 70
})
.delete(19)
.type('<span class="text-dark dark:text-slate-300 font-semibold opacity-80">FullStack </span>')
.type('<span class="text-dark dark:text-slate-300 font-semibold opacity-80">Developer </span>')
.go();
  });