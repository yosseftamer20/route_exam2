// تعيين العناصر الأساسية عند التحميل
const displayArea = document.querySelector('#displayArea');
const searchContainer = document.querySelector('#searchContainer');
const loadingScreen = document.querySelector("#loadingScreen");

// تفعيل شاشة التحميل عند التحميل الأولي
document.addEventListener("DOMContentLoaded", async () => {
    await loadInitialData();
});

// تحميل البيانات عند التحميل الأولي
async function loadInitialData() {
    try {
        await getSearchByName(""); 
        hideLoadingScreen();
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// دالة شاشة التحميل
function hideLoadingScreen() {
    loadingScreen.style.transition = "opacity 0.5s";
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
        loadingScreen.style.display = "none";
        document.body.style.overflow = "visible";
    }, 500);
}

// دالة إعادة تعيين displayArea
function resetDisplayArea() {
    displayArea.innerHTML = '';
}

// دالة عرض البحث
function displaySearchInputs() {
    searchContainer.innerHTML = `
        <div class="row py-4">
            <div class="col-md-6">
                <input onkeyup="getSearchByName(this.value)" class="form-control bg-transparent text-light" type="text" id="searchByName" placeholder="Search By Name">
            </div>
            <div class="col-md-6">
                <input onkeyup="getSearchByFL(this.value)" class="form-control bg-transparent text-white" maxlength="1" type="text" id="searchByFL" placeholder="Search By First Letter">
            </div>
        </div>`;
    resetDisplayArea();
}

// دالة الجلب بواسطة اسم الوجبة
async function getSearchByName(mealName) {
    resetDisplayArea();
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        response = await response.json();
        displayMeals(response.meals || []);
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
}

// إضافة eventListeners للأزرار
search.addEventListener('click', displaySearchInputs);
categories.addEventListener('click', getCategories);
area.addEventListener('click', getArea);
ingredients.addEventListener('click', getIngredients);
contactUs.addEventListener('click', showContacts);

// استكمال باقي الدوال كـ getCategories و getArea بنفس الشكل
