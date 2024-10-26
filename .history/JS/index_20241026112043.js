// left: -327px;
let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navTab = document.querySelector('.nav-tab');

buttonOpenClose.addEventListener('click', function () {
    // Toggle the icon between fa-x and fa-bars
    if (buttonOpenClose.classList.contains("fa-x")) {
        buttonOpenClose.classList.remove("fa-x");
        buttonOpenClose.classList.add("fa-bars");

        // Move nav-tab back to the left (hide it)
        navTab.style.left = "-327px";
    } else {
        buttonOpenClose.classList.remove("fa-bars");
        buttonOpenClose.classList.add("fa-x");

        // Move nav-tab to the visible position (show it)
        navTab.style.left = "0";
    }
});
