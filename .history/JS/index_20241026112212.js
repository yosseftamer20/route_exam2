// left: -327px;
let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navMenu = document.querySelector('.nav-menu'); // Targeting the entire nav-menu container

buttonOpenClose.addEventListener('click', function () {
    // Toggle the open class on nav-menu
    navMenu.classList.toggle("open");

    // Toggle the button icon
    if (buttonOpenClose.classList.contains("fa-x")) {
        buttonOpenClose.classList.remove("fa-x");
        buttonOpenClose.classList.add("fa-bars");
    } else {
        buttonOpenClose.classList.remove("fa-bars");
        buttonOpenClose.classList.add("fa-x");
    }
});
