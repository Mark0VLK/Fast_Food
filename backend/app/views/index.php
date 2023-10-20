<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../../../frontend/css/main.css">
    <script src="../../../frontend/js/app.js" defer></script>
    <script src="../../../frontend/js/Login.js" defer></script>
    <script src="../../../frontend/js/Button.js" defer></script>
    <script src="../js/code.js" defer</script>
<!--        <script src="../../../frontend/js/Menu.js" defer></script>-->
    <script src="../../../frontend/js/Info.js" defer></script>
    <link rel="apple-touch-icon" sizes="180x180" href="../../../frontend/icon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../../frontend/icon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../../frontend/icon_io/favicon-16x16.png">
    <link rel="manifest" href="../../../frontend/icon_io/site.webmanifest">
</head>
<body>
<section class="layers">
    <div class="layers__container">
        <div class="layers__item layer-1" style="background-image: url(../../../frontend/img/layer-1.jpg);"></div>
        <div class="layers__item layer-2" style="background-image: url(../../../frontend/img/layer-2.png);"></div>
        <div class="layers__item layer-3">
            <div class="hero-content">
                <h1 class="myMainText">italian pizza</h1>
                <h4 class="myMainText"><span>в вашем городе</span></h4>
                <button class="button-start">открыть меню</button>
            </div>
        </div>
        <div class="wrapper">
            <div class="arrow one">
                <img width="50" src="../../../frontend/img/Arrow-down.svg.png" alt="">
            </div>
            <div class="arrow two"><img width="50" src="../../../frontend/img/Arrow-down.svg.png" alt=""></div>
        </div>
        <div class="layers__item layer-4">
            <canvas class="rain"></canvas>
        </div>
        <div class="layers__item layer-5" style="background-image: url(../../../frontend/img/layer-5.png);"></div>
        <div class="layers__item layer-6" style="background-image: url(../../../frontend/img/layer-6.png);"></div>
    </div>
</section>
<div class="hero-content-menu">
    <button class="button-Menu" id="showAboutButton">О нас</button>
    <button class="button-Menu" id="showMenuButton">Меню</button>
    <button class="button-Menu" id="showBasketButton">Карзина</button>
    <a href="#ModalOverlay" class="open-modal"><button class="button-Menu">Войти</button></a>
</div>
<br>
<hr>
<hr>
<div id="About">
    <div>
        <br>

        <h1 class="text-h1">Окно про нашу историю</h1>
    </div>
</div>
<div id="Menu">
    <div>
        <div class="hero-content-menu">
            <button class="button-menu-menu" id="showPizzaButton">Pizza</button>
            <button class="button-menu-menu" id="showSnackButton">Snack</button>
            <button class="button-menu-menu" id="showDrinksButton">Drinks</button>
        </div>
        <br>
        <div id="Menu-Pizza">
            <section id="pizza" class="cards"></section>
        </div>
        <div id="Menu-Snack">
        </div>
        <div id="Menu-Drinks">
            <section id="drink" class="cards">
                <article>
                    <div class="card">
                        <div class="card__top">
                            <a href="#openModal" class="card__image">
                                <img
                                        src="frontend/picture/drinks/Americano%20Coffee.png"
                                        alt="Americano coffee"
                                />
                            </a>
                        </div>
                        <div class="card__bottom">
                            <div class="card__prices">
                                <div class="card__price card__price--common"></div>
                            </div>
                            <a href="#openModal" class="card__title">
                                Americano coffee
                            </a>
                            <button class="card__add">В корзину</button>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    </div>
</div>
<div id="Basket">
    <div>

    </div>
</div>
</body>
</html>