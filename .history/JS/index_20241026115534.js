let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu');

buttonOpenClose.addEventListener('click', function () {
    if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("animate__fadeInUp");
        navMenu.classList.add("animate__fadeOutDown");

        setTimeout(() => {
            navMenu.classList.remove("open");
            navMenu.classList.remove("animate__fadeOutDown");
        }, 600); // Match the animation duration
    } else {
        navMenu.classList.add("open");
        navMenu.classList.add("animate__fadeInUp");

        setTimeout(() => {
            navMenu.classList.remove("animate__fadeInUp");
        }, 600); // Match the animation duration
    }

    // Toggle button icon
    buttonOpenClose.classList.toggle("fa-x");
    buttonOpenClose.classList.toggle("fa-bars");
});
