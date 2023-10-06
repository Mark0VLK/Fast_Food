document.addEventListener('DOMContentLoaded', function() {
    const meinSection = document.getElementById('Mein');
    const menuSection = document.getElementById('Menu');
    const basketSection = document.getElementById('Basket');
    const contactsSection = document.getElementById('Contacts');
    const showMenuButton = document.getElementById('showMenuButton');
    const showMeinButton = document.getElementById('showMeinButton');
    const showBasketButton = document.getElementById('showBasketButton');
    const showContactsButton = document.getElementById('showContactsButton');

    function showMein() {
        basketSection.style.display = 'none';
        contactsSection.style.display = 'none';
        menuSection.style.display = 'none';
        meinSection.style.display = 'block';
    }

    function showMenu() {
        basketSection.style.display = 'none';
        contactsSection.style.display = 'none';
        meinSection.style.display = 'none';
        menuSection.style.display = 'block';
    }
    function showBasket() {
        contactsSection.style.display = 'none';
        meinSection.style.display = 'none';
        menuSection.style.display = 'none';
        basketSection.style.display = 'block';
    }
    function showContacts() {
        basketSection.style.display = 'none';
        meinSection.style.display = 'none';
        menuSection.style.display = 'none';
        contactsSection.style.display = 'block';
    }

    showMenuButton.addEventListener('click', showMenu);
    showMeinButton.addEventListener('click', showMein);
    showBasketButton.addEventListener('click', showBasket)
    showContactsButton.addEventListener('click', showContacts)
});