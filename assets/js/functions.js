"use strict";

const toggleButton = document.getElementById("toggleButton");
const bodyElement = document.getElementsByTagName("body")[0];

function toggleHamburgerMenu(event){
    
    // If we click anywhere, and the menu is open, close it.
    if (event.currentTarget === bodyElement && !navMenu.classList.contains("hidden")){
        navMenu.classList.add("hidden");
        event.stopPropagation();    // Handle event only once

    } else if (event.currentTarget === toggleButton){
        // Otherwise when triggered via toggleButton, toggle.

        navMenu.classList.toggle("hidden");
        event.stopPropagation();
    }
}

toggleButton.addEventListener("click", toggleHamburgerMenu);
bodyElement.addEventListener("click", toggleHamburgerMenu);
