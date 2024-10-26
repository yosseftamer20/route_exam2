let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu'); 

buttonOpenClose.addEventListener('click', function () {
    if (navMenu.classList.contains("open")) {
        
        navMenu.classList.remove("animate__fadeInUp");
        navMenu.classList.add("animate__fadeOutDown");
        
        setTimeout(() => {
            navMenu.classList.remove("open");
            navMenu.classList.remove("animate__fadeOutDown"); 
        }, 500); 
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
