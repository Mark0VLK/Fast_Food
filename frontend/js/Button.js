document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('About');
    const menuSection = document.getElementById('Menu');
    const basketSection = document.getElementById('Basket');
    const userSection = document.getElementById('User');
    const showMenuButton = document.getElementById('showMenuButton');
    const showAboutButton = document.getElementById('showAboutButton');
    const showBasketButton = document.getElementById('showBasketButton');
    const showUserButton = document.getElementById('showUserButton');

    function showAbout() {
        basketSection.style.display = 'none';
        menuSection.style.display = 'none';
        userSection.style.display = 'none';
        aboutSection.style.display = 'block';
    }

    function showMenu() {
        basketSection.style.display = 'none';
        aboutSection.style.display = 'none';
        userSection.style.display = 'none';
        menuSection.style.display = 'block';
    }
    function showBasket() {
        aboutSection.style.display = 'none';
        menuSection.style.display = 'none';
        userSection.style.display = 'none';
        basketSection.style.display = 'block';
    }
    function showUser(){
        aboutSection.style.display = 'none';
        menuSection.style.display = 'none';
        basketSection.style.display = 'none';
        userSection.style.display = 'block';
    }

    showMenuButton.addEventListener('click', showMenu);
    showAboutButton.addEventListener('click', showAbout);
    showBasketButton.addEventListener('click', showBasket)
    showUserButton.addEventListener('click', showUser);
});
