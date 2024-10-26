const displayArea = document.querySelector('#displayArea');
const search = document.querySelector('#search');
const categories = document.querySelector('#categories');
const area = document.querySelector('#area');
const ingredients = document.querySelector('#ingredients');
const contactUs = document.querySelector('#contactUs');


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


// Function is display to [getAreaMeals(),]

function disPlayArea(areas) {
    let box = ``;

    areas.forEach(area => {
        box += `<div class="col-md-3">
                <div class="meal cursor position-relative overflow-hidden rounded-2">
                    <img class="w-100" src="images/1 (1).jpg" alt="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>yusuf</h3>
                    </div>
                </div>
            </div>`
    });
    displayArea.innerHTML = box;
};



async function getArea() {
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    respone = await respone.json();
    disPlayArea(respone.meals);
};

function disPlayArea(areas) {
    let box = ``;

    areas.forEach(area => {
        box += `<div class="col-md-3">
            <div onclick = "getAreaMeals${area.strArea}" class="rounded-2 text-center cursor">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${area.strArea}</h3>
            </div>
        </div>`
    });
    displayArea.innerHTML = box;
};





async function getAreaMeals(area) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()
    displayAreaMeals(respone.meals.slice(0, 20));
};

function displayMeals(arr) {
    let box = ``;

    arr.forEach(meal => {
        box += ``
    });
    displayArea.innerHTML = box;
}






area.addEventListener('click', () => {
    getArea();
});

