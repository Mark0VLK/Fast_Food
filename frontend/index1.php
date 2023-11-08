<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <script src="libs/gsap/gsap.min.js" defer></script>
    <script src="libs/gsap/ScrollTrigger.min.js" defer></script>
    <script src="libs/gsap/ScrollSmoother.min.js" defer></script>

    <link rel="stylesheet" href="css/main.css">
    <script src="js/app1.js" defer></script>
    <script src="js/app.js" defer></script>

</head>
<body>
<div class="Mbody">
    <div class="Mwrapper">
        <div class="Mcontent">

            <header class="Mhero-section">
                <img data-speed=".6" class="Mhero" src="img/hero.png" alt="Alt" >
                <div class="Mcontainer">
                    <div data-speed=".75" class="Mmain-header">
                        <h1 class="Mmain-title">Наши пиццерии</h1>
                    </div>
                </div>
            </header>

            <div class="Mportfolio">
                <div class="Mcontainer">
                    <main class="Mgallery">

                        <div data-speed=".9" class="Mgallery__left">

                            <img class="Mgallery__item" src="img/work/1.jpg" alt="Alt">
                            <img class="Mgallery__item" src="img/work/2.jpg" alt="Alt">

                            <div class="Mtext-block Mgallery__item">
                                <h2 class="Mtext-block__h">Особый рецепт приготовления</h2>
                                <p class="Mtext-block__p">Пиццу мы выпекаем по традиционным итальянским технологиям - в настоящей печи на дровах! Готовим пиццу из качественных, преимущественно итальянских, продуктов. Приходите к нам и окунитесь в атмосферу и вкус истинной Италии!</p>
                            </div>

                            <img class="Mgallery__item" src="img/work/6.jpg" alt="Alt">

                        </div>

                        <div data-speed="1.1" class="Mgallery__right">

                            <div class="Mtext-block Mgallery__item">
                                <h2 class="Mtext-block__h">Каждая из наших пиццерий имеет свой уникальный стиль и атмосферу.</h2>
                                <p class="Mtext-block__p">Вы можете погрузится в атмосферу маленькой итальянской деревни, с особой атмосферой, созданной яркими мебельными конструкциями, необычными осветительными приборами и уникальными деталями интерьера. Или же вы можете выбрать современную эстетику, где простота дизайна сочетается с элементами лофт, создавая уютное и современное пространство. </p>
                            </div>

                            <img class="Mgallery__item" src="img/work/4.jpg" alt="Alt">
                            <img class="Mgallery__item" src="img/work/5.jpg" alt="Alt">
                            <img class="Mgallery__item" src="img/work/3.jpg" alt="Alt">
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>