const displayArea = document.querySelector('#displayArea');
const search = document.querySelector('#search');
const searchContainer = document.querySelector('#searchContainer');


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

function displayMeals(arr) {

    let box = ``;

    arr.forEach(meal => {
        box += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${meal.idMeal}')" class="meal cursor position-relative overflow-hidden rounded-2">
                    <img class="w-100" src="${meal.strMealThumb}" alt="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            </div>
        `
    });
    displayArea.innerHTML = box;
}



async function getArea() {
    displayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    response = await response.json();
    disPlayArea(response.meals);
};

function disPlayArea(areas) {
    let box = ``;

    areas.forEach(area => {
        box += `<div class="col-md-3">
            <div onclick = "getAreaMeals('${area.strArea}')" class="rounded-2 text-center cursor">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${area.strArea}</h3>
            </div>
        </div>`
    });
    displayArea.innerHTML = box;
};



async function getAreaMeals(area) {
    displayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()
    displayMeals(response.meals.slice(0, 20));

};




async function getMealDetails(idMeal) {
    displayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    response = await response.json()
    displayMealDetails(response.meals[0])

    // console.log(response.meals[0].strTags);

}


function displayMealDetails(details) {
    let recipes = ``;
    for (let i = 1; i <= 15; i++) {
        if (details[`strIngredient${i}`]) {
            recipes += `<li class="alert alert-info m-2 p-1">${details[`strMeasure${i}`]} ${details[`strIngredient${i}`]}</li>`;
        }
    }



    let tags = details.strTags.split(",")
    if (!tags) tags = []


    let strTag = '';

    if (!strTag) {
        for (let i = 0; i < tags.length; i++) {
            tags += `<li class="alert alert-info border-1 border-danger m-2 p-1">${strTag[i]}</li>`
        }
    }





    let box = ``;
    box += `
        <div class="col-md-4">
                <img class="w-100 rounded-3" src="${details.strMealThumb}" alt="">
                <h2>${details.strMeal}</h2>
            </div>

            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${details.strInstructions}</p>
                <h3>
                    Area :<span class="fw-bolder">${details.strArea}</span>
                </h3>
                <h3>
                    Category :<span class="fw-bolder">${details.strCategory}</span>
                </h3>
                <h3>Recipes :</h3>

                <ul id="recipe" class="list-unstyled d-flex flex-wrap g-3">
                    ${recipes}
                </ul>
                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${strTag}
                </ul>
                <a target="_blank" href="${details.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${details.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
        `
    displayArea.innerHTML = box;
}





async function getIngredients() {

    displayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await response.json()
    displayIngredients(response.meals.slice(0, 20))


}

function displayIngredients(arr) {
    let box = "";

    for (let i = 0; i < arr.length; i++) {
        box += `
        <div class="col-md-3">
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}') class="rounded-2 text-center cursor">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
        </div>
        `
    }

    displayArea.innerHTML = box;
}


async  getIngredientsMeals


async function getCategories() {


    displayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    displayCategories(response.categories)


}

function displayCategories(arr) {


    let box = "";

    for (let i = 0; i < arr.length; i++) {
        box += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    displayArea.innerHTML = box;

}


function displaySearchInputs() {
    searchContainer.innerHTML = `
    <div class="row py-4">
            <div class="col-md-6">
                <input onkeyup="getSearchByName(this.value)" class="form-control bg-transparent text-light" type="text" id="searchByName" placeholder="Search By Name">
            </div>
            <div class="col-md-6">
                <input onkeyup="getSearchByFL(this.value)" class="form-control bg-transparent text-white" maxlength="1" type="text" id="searchByFL" placeholder="Search By First Letter">
            </div>
        </div>
    `;
    disPlayArea.innerHTML = '';
}


async function getSearchByName(mealName) {
    displayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    response = await response.json();

    if (response.meals) {
        displayMeals(response.meals);
    } else {
        displayMeals([]);
    }
}

async function getSearchByFL(mealName) {
    displayArea.innerHTML = '';

    if (mealName === "") {
        mealName = "a";
    }

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`);
    response = await response.json();

    if (response.meals) {
        displayMeals(response.meals);
    } else {
        displayMeals([]);
    }
}






area.addEventListener('click', () => {
    getArea();
});
ingredients.addEventListener('click', () => {
    getIngredients();
});
categories.addEventListener('click', () => {
    getCategories();
});
search.addEventListener('click', () => {
    displaySearchInputs();
});










