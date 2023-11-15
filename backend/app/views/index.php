<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Italian pizza</title>

    <link rel="stylesheet" href="../../../frontend/css/main.css">

    <script src="../../../frontend/js/app.js" defer></script>
    <script src="../js/productInfo.js" defer></script>
    <script src="../js/navigation.js" defer></script>
    <script src="../js/registration.js" defer></script>

    <link rel="apple-touch-icon" sizes="180x180" href="../../../frontend/icon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../../frontend/icon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../../frontend/icon_io/favicon-16x16.png">
    <link rel="manifest" href="../../../frontend/icon_io/site.webmanifest">
</head>
<body>
<section class="layers" id="foto">
    <div class="layers__container">
        <div class="layers__item layer-1" style="background-image: url(../../../frontend/img/layer-1.jpg);"></div>
        <div class="layers__item layer-2" style="background-image: url(../../../frontend/img/layer-2.png);"></div>

        <div class="layers__item layer-3">
            <div class="hero-content">
                <h1 class="myMainText1">original<span> italian </span><span1>pizza</span1></h1>
                <h3 class="myMainText1"><span2>в вашем городе</span2></h3>
                <button class="button-start" id="buttonStart">открыть меню</button>
            </div>
        </div>

        <div class="layers__item layer-5" style="background-image: url(../../../frontend/img/layer-5.png);"></div>
        <div class="layers__item layer-6" style="background-image: url(../../../frontend/img/layer-6.png);"></div>
    </div>
</section>
<!--<div class="wrapper">-->
    <div class="arrow one">
        <img width="50" src="../../../frontend/img/strelka.png" alt="">
    </div>
    <div class="arrow two"><img width="50" src="../../../frontend/img/strelka.png" alt=""></div>
<!--</div>-->
<div class="hero-content-menu1">
    <button class="button-Menu1" id="PanelMenuButton">Меню</button>
    <button class="button-Menu1" id="PanelBasketButton">Корзина<span class="red">5</span></button>
    <button class="button-Menu1" id="PanelAboutButton">О нас</button>
    <button class="button-Menu1" id="PanelLoginButton">Войти</button>
    <button class="button-Menu1" id="PanelUserButton">Кабинет</button>
</div>
<hr>
<div id="Form">
    <div id="MenuSection">
        <div class="hero-content-menu2">
            <button class="button-Menu2" id="PizzaButton">Пицца</button>
            <button class="button-Menu2" id="SnackButton">Закуски</button>
            <button class="button-Menu2" id="DrinkButton">Напитки</button>
        </div>
        <div>
           <div id="PizzaSection">
               <div class="up" id="pUp">
                   <div class="up-text">Пицца</div>
               </div>
               <section id="pizza" class="cards"></section>
           </div>

            <div id="SnackSection">
                <div class="up" id="sUp">
                    <div class="up-text">Закуски</div>
                </div>
                <section id="snack" class="cards"></section>
            </div>

            <div id="DrinkSection">
                <div class="up" id="dUp">
                    <div class="up-text">Напитки</div>
                </div>
                <section id="drink" class="cards"></section>
            </div>
        </div>
    </div>
    <div id="BasketSection">
        <h2 class="text-Basket">корзина пуста</h2>
    </div>
    <div id="AboutSection">

        <h1 class="text-h1">О нас</h1>
        <div class="container-about">
            <div class="text">
                <p>Добро пожаловать в ресторан "Итальянская пицца" - уютное место, где ваши вкусовые предпочтения будут приятно удовлетворены!</p>
                <p>Мы - команда настоящих поклонников итальянской кухни, поставивших перед собой цель - познакомить вас с настоящим итальянским вкусом пиццы.</p>
            </div>
            <div class="rounded-image">
                <img src="../../../frontend/img/vnytri.png" alt="Внутри">
            </div>
        </div>
        <div class="container-about">
            <div class="rounded-image">
                <img src="../../../frontend/img/povari.png" alt="Поворы">
            </div>
            <div class="text">
                <p>Мы гордимся тем, что предлагаем самые лучшие пиццы в городе, и нашей целью является создание уютной и дружеской атмосферы для наших гостей. У нас вы можете насладиться истинной итальянской гостеприимностью, а наш внимательный персонал всегда готов пойти на все, чтобы сделать ваше посещение приятным и незабываемым.</p>
                <p>Приглашаем вас насладиться ароматными и вкусными пиццами в ресторане "Итальянская пицца" и открыть для себя настоящий вкус Италии!</p>
            </div>
        </div>
        <div class="container-about">
            <div class="text">
                <p>Наши пиццы готовятся с любовью к деталям, и мы используем только самые качественные и свежие ингредиенты. Наш шеф-повар - настоящий мастер своего дела, соблюдающий все традиции и секреты итальянской кухни.</p>
                <p>Меню включает в себя широкий выбор аутентичных и классических пицц, которые удовлетворят любой вкус. Вы сможете насладиться тонким, ароматным тестом, нежными сырами, сочными овощами, а также разнообразными мясными и морскими деликатесами. У нас также есть вегетарианские и веганские варианты пиццы, чтобы угодить даже самым взыскательным гостям.</p>
            </div>
            <div class="rounded-image">
                <img src="../../../frontend/img/pizzaPech.png" alt="пицца в печи">
            </div>
        </div>
        <div class="container-about">
            <div class="text">
                <p>Добро пожаловать в ресторан "Итальянская пицца" - уютное место, где ваши вкусовые предпочтения будут приятно удовлетворены!</p>
                <p>Мы - команда настоящих поклонников итальянской кухни, поставивших перед собой цель - познакомить вас с настоящим итальянским вкусом пиццы.</p>
            </div>
            <div class="rounded-image">
                <img src="../../../frontend/img/vnytri.png" alt="Внутри">
            </div>
        </div>
        <div class="container-about">
            <div class="text">
                <p>Добро пожаловать в ресторан "Итальянская пицца" - уютное место, где ваши вкусовые предпочтения будут приятно удовлетворены!</p>
                <p>Мы - команда настоящих поклонников итальянской кухни, поставивших перед собой цель - познакомить вас с настоящим итальянским вкусом пиццы.</p>
            </div>
            <div class="rounded-image">
                <img src="../../../frontend/img/vnytri.png" alt="Внутри">
            </div>
        </div>
        <div class="container-about">
            <div class="text">
                <p>Добро пожаловать в ресторан "Итальянская пицца" - уютное место, где ваши вкусовые предпочтения будут приятно удовлетворены!</p>
                <p>Мы - команда настоящих поклонников итальянской кухни, поставивших перед собой цель - познакомить вас с настоящим итальянским вкусом пиццы.</p>
            </div>
            <div class="rounded-image">
                <img src="../../../frontend/img/vnytri.png" alt="Внутри">
            </div>
        </div>
        <h2 class="text-h2">Приглашаем вас насладиться ароматными и вкусными пиццами в ресторане "Итальянская пицца" и открыть для себя настоящий вкус Италии!</h2>
        <div class="container-about">
            <div class="rounded-image-2">
                <img src="../../../frontend/img/potrebitel.png" alt="потребитель">
            </div>
        </div>

    </div>
    <div class="bodyL" id="LoginSection">
        <div class="mainL">
            <a href="#close">
                <img src="../../../frontend/img/крестик.png" alt="закрыть" class="close1"/>
            </a>
            <input type="checkbox" id="chk" aria-hidden="true">

            <div class="signupL">
                <form action="javascript:void(0);" onsubmit="userR.save()">
                    <label class="labelL" for="chk" aria-hidden="true">Регистрация</label>
                    <label>
                        <input
                            type="text"
                            class="inputL"
                            id="name"
                            placeholder="Имя"
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            class="inputL"
                            id="surname"
                            placeholder="Фамилия"
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            class="inputL"
                            id="phoneNumber"
                            placeholder="Номер телефона"
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            class="inputL"
                            id="email"
                            placeholder="Email"
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            class="inputL"
                            id="password"
                            placeholder="Пароль"
                            required
                        />
                    </label>
                    <div class="RButton-container">
                        <button type="submit" class="buttonL">Зарегистрироваться</button>
                        <button type="reset" class="buttonClean">Отмена</button>
                    </div>
                </form>
            </div>

            <div class="loginL">
                <form action="javascript:void(0);" onsubmit="userA.find()">
                    <hr class="h">
                    <label class="labelL" for="chk" aria-hidden="true">Вход</label>
                    <label>
                        <input  class="inputL" id="emailR" type="email" name="email" placeholder="Email" required="">
                    </label>
                    <label>
                        <input  class="inputL" id="passwordR" type="password" name="password" placeholder="Пароль" required="">
                    </label>
                    <div class="RButton-container">
                        <button type="submit" class="buttonL">Войти</button>
                        <button type="reset" class="buttonClean">Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="UserSection">
        <div class="user-container">
            <h1 class="h1-user">Профиль пользователя</h1>

            <div id="personal-info">
                <h2 class="h2-user">Личная информация</h2>
                <form class="form-user" action="javascript:void(0);" onsubmit="userChangeInfo.updateInfo()">
                    <label class="label-user">Имя:</label>
                    <input
                        type="text"
                        class="inputL"
                        id="ChangeName"
                        placeholder="Имя"
                        value="Марк123"
                        required
                    />

                    <label class="label-user">Фамилия:</label>
                    <input
                        type="text"
                        class="inputL"
                        id="ChangeSurname"
                        placeholder="Фамилия"
                        value="Ф123"
                        required
                    />

                    <label for="surname" class="label-user">Дата рождения:</label>
                    <input
                        type="text"
                        class="inputL"
                        id="ChangeBirthDate"
                        placeholder="День рождения"
                        value="Ддд123"
                    />

                    <label for="email" class="label-user">Email:</label>
                    <input
                        type="email"
                        class="inputL"
                        id="ChangeEmail"
                        placeholder="email"
                        value="123proba@gmail.com"
                        required
                    />

                    <label for="phone" class="label-user">Телефон:</label>
                    <input
                        type="text"
                        class="inputL"
                        id="ChangePhone"
                        placeholder="номер телефона"
                        value="+37529"
                        required
                    />
                    <br>
                    <button type="submit" class="buttonL">Сохранить</button>
                </form>
                <br>
                <br>
                <button id="deleteUser" class="buttonL">Удалить учётную запись</button>
            </div>

            <div id="account-actions">
                <h2 class="h2-user">Изменение пароля</h2>
                <form class="form-user">
                    <label for="current-password" class="label-user">Текущий пароль:</label>
                    <input type="password" id="current-password" class="inputL" required>

                    <label for="new-password" class="label-user">Новый пароль:</label>
                    <input type="password" id="new-password" class="inputL" required>

                    <label for="confirm-password" class="label-user">Подтвердите новый пароль:</label>
                    <input type="password" id="confirm-password" class="inputL" required>
                    <br>
                    <input type="submit" value="Сохранить" class="button-Menu3">
                </form>
            </div>
            <a href="#" class="a-user">Выйти</a>
        </div>
    </div>
    <div id="openModal1" class="modalDialog">
    </div>
    <div id="openModal2" class="modalDialog">
    </div>
    <div id="openModal3" class="modalDialog">
    </div>
</div>
</div>
<footer class="foot">

    <div class="kartyBank">
        <div>Принимаем к оплате: </div>
        <img src="../../../frontend/img/Карты.png">
    </div>

    <div class="download">
        <a href="https://support.apple.com/ru-ru">
            <img src="../../../frontend/img/3.png">
        </a>
        <a href="https://play.google.com/store/games?hl=ru&gl=US">
            <span><img src="../../../frontend/img/1.png"></span>
        </a>
    </div>

    <div class="seti">
        <a href="https://vk.com/login?u=2&to=L2FsX2ZlZWQucGhw">
            <img src="../../../frontend/img/vk1.png" alt="vk" >
        </a>
        <a href="https://web.telegram.org/k/">
            <img src="../../../frontend/img/tg2.png" alt="telegram">
        </a>
        <a href="https://www.instagram.com/">
            <img src="../../../frontend/img/inst2.png" alt="instagram">
        </a>
    </div>
    <div class="T">
        ORIGINAL ITALIAN PIZZA © 2023
    </div>
</footer>
</body>
</html>