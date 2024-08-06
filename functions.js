"use strict";

const toggleButton = document.getElementById("toggleButton");
const navMenu = document.getElementById("navMenu");

function toggleHamburgerMenu(event){
    navMenu.classList.toggle("hidden");
}

toggleButton.addEventListener("click", toggleHamburgerMenu);
navMenu.addEventListener("click", toggleHamburgerMenu);
