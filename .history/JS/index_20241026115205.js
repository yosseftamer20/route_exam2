let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu'); // Targeting the entire nav-menu container

buttonOpenClose.addEventListener('click', function () {
    // Check if nav-menu is currently open
    if (navMenu.classList.contains("open")) {
        // Close the menu: add fade-out animation
        navMenu.classList.add("animate__fadeOutDown");
        
        // Set a timeout to remove the 'open' class and reset animations after the fade-out duration
        setTimeout(() => {
            navMenu.classList.remove("open");
            navMenu.classList.remove("animate__fadeOutDown"); // Remove fade-out class
            navMenu.classList.remove("animate__fadeInUp"); // Ensure fade-in class is removed
        }, 500); // Delay should match your fade-out duration
    } else {
        // Open the menu: add 'open' class immediately
        navMenu.classList.add("open");
        
        // Use a timeout to add fade-in class after a short delay
        setTimeout(() => {
            navMenu.classList.add("animate__fadeInUp");
        }, 20); // Small delay to ensure the transition happens smoothly
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
