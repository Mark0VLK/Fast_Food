document.addEventListener('DOMContentLoaded', function () {
    const pizzaSection = document.getElementById('Menu-Pizza');
    const snackSection = document.getElementById('Menu-Snack');
    const drinksSection = document.getElementById('Menu-Drinks');
    const showPizzaButton = document.getElementById('showPizzaButton');
    const showSnackButton = document.getElementById('showSnackButton');
    const showDrinksButton = document.getElementById('showDrinksButton');

    const tbody = document.getElementById("pizza");

    function list() {
        fetch("../../backend/app/controllers/informationController.php")
            .then((res)=>res.json())
            .then((data)=> {
                // console.log(data);
                tbody.innerHTML = "";
                data.forEach((item) => {
                    tbody.innerHTML += `
                    <div class="card">
                        <div class="card__top">
                            <a href="#openModal" class="card__image">
                                <img
                                    src=${item.image}
                                    alt="Barbecue Chicken"
                                />
                            </a>
                        </div>
                        <div class="card__bottom">
                            <div class="card__prices">
                                <div class="card__price card__price--common">30</div>
                            </div>
                            <a href="#openModal" class="card__title">
                                ${item.name}
                            </a>
                        <button class="card__add">В корзину</button>
                        </div>
                    </div>
                    `
                })
            });
    }




    function showPizza() {
        snackSection.style.display = 'none';
        drinksSection.style.display = 'none';
        pizzaSection.style.display = 'block';
    }

    function showSnack() {
        pizzaSection.style.display = 'none';
        drinksSection.style.display = 'none';
        snackSection.style.display = 'block';
    }

    function showDrinks() {
        pizzaSection.style.display = 'none';
        snackSection.style.display = 'none';
        drinksSection.style.display = 'block';
    }

    showPizzaButton.addEventListener('click', showPizza, list);
    showSnackButton.addEventListener('click', showSnack);
    showDrinksButton.addEventListener('click', showDrinks)
});