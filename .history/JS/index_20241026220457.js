const displayArea = document.querySelector('#displayArea');
const searchContainer = document.querySelector('#searchContainer');
const search = document.querySelector('#search');
const categories = document.querySelector('#categories');
const area = document.querySelector('#area');
const ingredients = document.querySelector('#ingredients');
const contactUs = document.querySelector('#contactUs');


document.addEventListener("DOMContentLoaded", async () => {
    await getSearchByName(""); 
    const loadingScreen = document.querySelector("#loadingScreen");
    
    loadingScreen.style.transition = "opacity 0.5s";
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
        loadingScreen.style.display = "none";
        document.body.style.overflow = "visible";
    }, 500); 
});



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
}

function displayMealDetails(details) {
    let recipes = ``;
    for (let i = 1; i <= 15; i++) {
        if (details[`strIngredient${i}`]) {
            recipes += `<li class="alert alert-info m-2 p-1">${details[`strMeasure${i}`]} ${details[`strIngredient${i}`]}</li>`;
        }
    }

    let tags = details.strTags ? details.strTags.split(",") : [];
    let strTag = '';

    for (let i = 0; i < tags.length; i++) {
        strTag += `<li class="alert alert-info border-1  m-2 p-1">${tags[i]}</li>`;
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
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="rounded-2 text-center cursor">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
        </div>
        `
    }
    displayArea.innerHTML = box;
}


async function getIngredientsMeals(ingredient) {
    disPlayArea.innerHTML = '';

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    response = await response.json()
    displayMeals(response.meals.slice(0, 20))
}


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

async function getCategoryMeals(category) {
    disPlayArea.innerHTML = ""

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()

    displayMeals(response.meals.slice(0, 20))

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

    // استدعاء الدالة لتفريغ محتوى displayArea
    resetDisplayArea();
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


function showContacts() {
    disPlayArea.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
}






search.addEventListener('click', () => {
    displaySearchInputs();
});
categories.addEventListener('click', () => {
    getCategories();
});
area.addEventListener('click', () => {
    getArea();
});
ingredients.addEventListener('click', () => {
    getIngredients();
});
contactUs.addEventListener('click', () => {
    showContacts();
});








