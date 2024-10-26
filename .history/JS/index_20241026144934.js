const search = document.querySelector('#search')
const categories = document.querySelector('#categories')
const area = document.querySelector('#area')
const ingredients = document.querySelector('#ingredients')
const contactUs = document.querySelector('#contactUs')

document.addEventListener("DOMContentLoaded", () => {
    const buttonOpenClose = document.querySelector('#buttonOpenClose');
    const navMenu = document.querySelector('.nav-menu');
    const animations = document.querySelectorAll('.animation');
    const menuToggle = new MenuToggle(buttonOpenClose, navMenu, animations);
});




class MenuToggle {
    constructor(button, menu, animations) {
        this.button = button;
        this.menu = menu;
        this.animations = animations;
        this.isOpen = false;

        this.button.addEventListener('click', () => this.toggleMenu());
    }

    // isOpen check

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
        this.toggleIcon();
    }

    // open part

    openMenu() {
        this.menu.classList.add("open");
        this.animations.forEach(element => {
            element.classList.remove("animate__fadeOutDown");
            element.classList.add("animate__fadeInUp");
        });
        this.isOpen = true;
    }

    // close part

    closeMenu() {
        this.menu.classList.remove("open");
        this.animations.forEach(element => {
            element.classList.remove("animate__fadeInUp");
            element.classList.add("animate__fadeOutDown");
        });
        this.isOpen = false;
    }

    // change icon

    toggleIcon() {
        if (this.button.classList.contains("fa-x")) {
            this.button.classList.remove("fa-x");
            this.button.classList.add("fa-bars");
        } else {
            this.button.classList.remove("fa-bars");
            this.button.classList.add("fa-x");
        }
    }
}


// https://www.themealdb.com/api/json/v1/1/categories.php ==> api List all meal categories


// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata ==> api Search meal by name


// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772 ==> api full meal details by id
area.addEventListener('click', () => {
    async function getAreaMeals(params) {
        let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        respone = await respone.json();
        console.log(respone);
        disPlayAreaMeals(re)
        
    };
    

    function disPlayAreaMeals(array) {
        
    }
});

