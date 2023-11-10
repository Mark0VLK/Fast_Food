document.addEventListener('DOMContentLoaded', function () {

    el = 'MenuSection';

    // Кнопка "Начать"
    const buttonStart = document.getElementById('buttonStart');

    // Форма
    const form = document.getElementById('Form');

    // Кнопки навигации в главной панели
    const PanelMenuButton = document.getElementById('PanelMenuButton');
    const PanelBasketButton = document.getElementById('PanelBasketButton');
    const PanelAboutButton = document.getElementById('PanelAboutButton');
    const PanelLoginButton = document.getElementById('PanelLoginButton');
    const PanelUserButton = document.getElementById('PanelUserButton');

    // Разделы страницы
    const menuSection = document.getElementById('MenuSection');
    const basketSection = document.getElementById('BasketSection');
    const aboutSection = document.getElementById('AboutSection');
    const loginSection = document.getElementById('LoginSection');
    const userSection = document.getElementById('UserSection');

    // Кнопки для переключения разделов меню
    const PizzaButton = document.getElementById('PizzaButton');
    const SnackButton = document.getElementById('SnackButton');
    const DrinksButton = document.getElementById('DrinkButton');

    // Разделы меню
    const PizzaSection = document.getElementById('PizzaSection');
    const SnackSection = document.getElementById('SnackSection');
    const DrinkSection = document.getElementById('DrinkSection');

    // Устанавливаем начальные значения видимости разделов
    basketSection.style.display = 'none';
    aboutSection.style.display = 'none';
    loginSection.style.display = 'none';
    userSection.style.display = 'none';

    // Загрузка данных о категориях
    app.listPizza();
    app.listSnack();
    app.listDrink();

    // Функции для прокрутки к разделам меню
    function showMenu1() {
        form.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    }

    function showMenu2() {
        const block = PizzaSection;
        if (block) {
            const offset = block.offsetTop - 80; // Устанавливаем отступ (в пикселях)
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }

    function showMenu3() {
        const block = SnackSection;
        if (block) {
            const offset = block.offsetTop - 80; // Устанавливаем отступ (в пикселях)
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }

    function showMenu4() {
        const block = DrinkSection;
        if (block) {
            const offset = block.offsetTop - 80; // Устанавливаем отступ (в пикселях)
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    }

    // Назначаем обработчики событий на кнопки и элементы навигации
    buttonStart.addEventListener('click', showMenu1);

    function showMenu() {
        basketSection.style.display = 'none';
        aboutSection.style.display = 'none';
        loginSection.style.display = 'none';
        userSection.style.display = 'none';
        menuSection.style.display = 'block';
        el = 'MenuSection';

    }

    function showBasket() {
        menuSection.style.display = 'none';
        aboutSection.style.display = 'none';
        loginSection.style.display = 'none';
        userSection.style.display = 'none';
        basketSection.style.display = 'block';
        el = 'BasketSection';
    }

    function showAbout() {
        menuSection.style.display = 'none';
        basketSection.style.display = 'none';
        loginSection.style.display = 'none';
        userSection.style.display = 'none';
        aboutSection.style.display = 'block';
        el = 'AboutSection';
    }
    function showUser() {
        menuSection.style.display = 'none';
        basketSection.style.display = 'none';
        loginSection.style.display = 'none';
        aboutSection.style.display = 'none';
        userSection.style.display = 'block';
        el = 'UserSection';
    }

    function showLogin() {
        switch (el) {
            case 'MenuSection':
                menuSection.style.display = 'block';
                basketSection.style.display = 'none';
                aboutSection.style.display = 'none';
                loginSection.style.display = 'block';
                break;
            case 'BasketSection':
                menuSection.style.display = 'none';
                basketSection.style.display = 'block';
                aboutSection.style.display = 'none';
                loginSection.style.display = 'block';
                break;
            case 'AboutSection':
                menuSection.style.display = 'none';
                basketSection.style.display = 'none';
                aboutSection.style.display = 'block';
                loginSection.style.display = 'block';
                break;
        }
    }

    function showPizza() {
        showMenu2()
    }

    function showSnack() {
        showMenu3();
    }

    function showDrinks() {
        showMenu4()
    }

    // Назначаем обработчики событий на кнопки навигации главной панели
    PanelMenuButton.addEventListener('click', showMenu);
    PanelBasketButton.addEventListener('click', showBasket);
    PanelAboutButton.addEventListener('click', showAbout);
    PanelLoginButton.addEventListener('click', showLogin);
    PanelUserButton.addEventListener('click', showUser);

    // Назначаем обработчики событий на кнопки разделов меню
    PizzaButton.addEventListener('click', showPizza);
    SnackButton.addEventListener('click', showSnack);
    DrinksButton.addEventListener('click', showDrinks);

    // Назначаем обработчик события на кнопку закрытия
    const closeLink = document.querySelector('.close1');
    closeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const bodyL = document.querySelector('.bodyL');
        bodyL.style.display = 'none';
    });
})
