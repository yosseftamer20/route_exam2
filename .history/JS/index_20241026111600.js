// left: -327px;
let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navTab = document.querySelector('.nav-tab');

buttonOpenClose.addEventListener('click', function () {
    console.log(buttonOpenClose);

    if (buttonOpenClose.classList.contains("fa-x")) {
        buttonOpenClose.classList.remove("fa-x");
        buttonOpenClose.classList.add("fa-bars");
    } else {
        // Remove the "bars" icon and add the "x" icon
        buttonOpenClose.classList.remove("fa-bars");
        buttonOpenClose.classList.add("fa-x");
    }
});
