document.addEventListener('DOMContentLoaded', function() {
    const pizzaSection = document.getElementById('Menu-Pizza');
    const snackSection = document.getElementById('Menu-Snack');
    const drinksSection = document.getElementById('Menu-Drinks');
    const showPizzaButton = document.getElementById('showPizzaButton');
    const showSnackButton = document.getElementById('showSnackButton');
    const showDrinksButton = document.getElementById('showDrinksButton');

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

    showPizzaButton.addEventListener('click', showPizza);
    showSnackButton.addEventListener('click', showSnack);
    showDrinksButton.addEventListener('click', showDrinks)
});