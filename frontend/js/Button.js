document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('About');
    const menuSection = document.getElementById('Menu');
    const basketSection = document.getElementById('Basket');
    const showMenuButton = document.getElementById('showMenuButton');
    const showAboutButton = document.getElementById('showAboutButton');
    const showBasketButton = document.getElementById('showBasketButton');

    function showAbout() {
        basketSection.style.display = 'none';
        menuSection.style.display = 'none';
        aboutSection.style.display = 'block';
    }

    function showMenu() {
        basketSection.style.display = 'none';
        aboutSection.style.display = 'none';
        menuSection.style.display = 'block';
    }
    function showBasket() {
        aboutSection.style.display = 'none';
        menuSection.style.display = 'none';
        basketSection.style.display = 'block';
    }

    showMenuButton.addEventListener('click', showMenu);
    showAboutButton.addEventListener('click', showAbout);
    showBasketButton.addEventListener('click', showBasket)
});