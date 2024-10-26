// left: -327px;
let buttonOpenClose = document.querySelector('#buttonOpenClose');
let navTab = document.querySelector('.nav-tab');

buttonOpenClose.addEventListener('click', function () {
    console.log(buttonOpenClose);
    

    buttonOpenClose.classList.replace("fa-solid open-close-icon fa-2x fa-x", "fa-solid fa-bars");


})