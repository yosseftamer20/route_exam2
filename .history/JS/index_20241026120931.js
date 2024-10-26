let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu'); 
let animation = document.querySelector('.animation'); 

buttonOpenClose.addEventListener('click', function () {
    // Check if nav-menu is currently open
    if (navMenu.classList.contains("open")) {
        // Close the menu: remove 'open' class, add fade-out animation
        navMenu.classList.remove("open");
        animation.classList.remove("animate__fadeInUp");
        navMenu.classList.add("animate__fadeOutDown");
    } else {
        // Open the menu: add 'open' class, add fade-in animation
        navMenu.classList.add("open");
        navMenu.classList.remove("animate__fadeOutDown");
        navMenu.classList.add("animate__fadeInUp");
    }

    // Toggle the button icon
    if (buttonOpenClose.classList.contains("fa-x")) {
        buttonOpenClose.classList.remove("fa-x");
        buttonOpenClose.classList.add("fa-bars");
    } else {
        buttonOpenClose.classList.remove("fa-bars");
        buttonOpenClose.classList.add("fa-x");
    }
});