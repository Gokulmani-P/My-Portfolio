let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function() {
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active');
}

let header = document.querySelector('header');

window.onscroll = function() {
    if (this.scrollY >= 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    btnMenu.classList.remove('fa-times');
    Menu.classList.remove('active');
}

// Typewriting effect
const typedTextSpan = document.querySelector(".typewriting-text");

const textArray = ["Front-End Developer","Web Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
