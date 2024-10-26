let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu'); 

buttonOpenClose.addEventListener('click', function () {
    // Check if nav-menu is currently open
    if (navMenu.classList.contains("open")) {
        // Close the menu: remove 'open' class, add fade-out animation
        navMenu.classList.remove("animate__fadeInUp");
        navMenu.classList.add("animate__fadeOutDown");
        
        // Set a timeout to remove the 'open' class after the animation duration (e.g., 500ms)
        setTimeout(() => {
            navMenu.classList.remove("open");
            navMenu.classList.remove("animate__fadeOutDown"); // Remove fade-out class after closing
        }, 500); // Delay should match your fade-out duration
    } else {
        
        navMenu.classList.add("open");
        
        
        setTimeout(() => {
            navMenu.classList.add("animate__fadeInUp");
        }, 20); 
    }

    if (buttonOpenClose.classList.contains("fa-x")) {
        buttonOpenClose.classList.remove("fa-x");
        buttonOpenClose.classList.add("fa-bars");
    } else {
        buttonOpenClose.classList.remove("fa-bars");
        buttonOpenClose.classList.add("fa-x");
    }
});
