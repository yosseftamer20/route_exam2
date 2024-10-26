// left: -327px;
let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navTab = document.querySelector('.nav-tab');

buttonOpenClose.addEventListener('click', function () {
    console.log(buttonOpenClose);

    // Check if the `fa-x` icon is currently applied
    if (buttonOpenClose.classList.contains("fa-x")) {
        // Remove the "x" icon and add the "bars" icon
        buttonOpenClose.classList.remove("fa-x");
        buttonOpenClose.classList.add("fa-bars");
    } else {
        // Remove the "bars" icon and add the "x" icon
        buttonOpenClose.classList.remove("fa-bars");
        buttonOpenClose.classList.add("fa-x");
    }
});
