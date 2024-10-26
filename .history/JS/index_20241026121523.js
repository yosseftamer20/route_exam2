let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu');
let animation = document.querySelectorAll('.animation');

console.log(animation);


buttonOpenClose.addEventListener('click', function () {
    if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        for (let i = 0; i < animation.length; i++) {
            animation.classList.remove("animate__fadeInUp");
            animation.classList.add("animate__fadeOutDown");
        }
    } else {
        navMenu.classList.add("open");
        for (let i = 0; i < animation.length; i++) {
            animation.classList.remove("animate__fadeOutDown");
            animation.classList.add("animate__fadeInUp");
        }

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