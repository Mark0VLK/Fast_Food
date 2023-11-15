
const app = new (function () {

    // Получаем элементы DOM
    this.PizzaCard = document.getElementById('openModal1');
    this.SnackCard = document.getElementById('openModal2');
    this.DrinkCard = document.getElementById('openModal3');
    const PBody = document.getElementById("pizza");
    const SBody = document.getElementById("snack");
    const DBody = document.getElementById("drink");

    // Функция для получения списка пицц
    this.listPizza = () => {
        fetch("../controllers/readAllPizza.php")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                PBody.innerHTML = "";
                data.forEach((item) => {
                    PBody.innerHTML += `

                    <!-- Генерация HTML карточек пиццы -->
                    <div class="card">
                        <div class="card__top">
                            <a href="#openModal" onclick="app.modalInfoPizza(${item.id})" class="card__image">
                                <img
                                    src=${item.image}
                                    alt=${item.name}
                                />
                            </a>
                        </div>
                        <div class="card__bottom">
                            <a href="#openModal" onclick="app.modalInfoPizza(${item.id})" class="card__title">
                                ${item.name}
                            </a>
                            <div class="card__ingredients">
                                ${item.ingredients}
                            </div>
                            <div class="card__prices">
                                <div class="card__price card__price--common">${item.price}</div>
                            </div>
                                <a href="#openModal" onclick="app.modalInfoPizza(${item.id})">
                                    <button id="inf" class="card__add">выбрать</button>
                                </a>
                        </div>
                    </div>
                    `
                })
            });
    }

    // Функция для получения списка закусок
    this.listSnack = () => {
        fetch("../controllers/readAllSnack.php")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                SBody.innerHTML = "";
                data.forEach((item) => {
                    SBody.innerHTML += `

                    <!-- Генерация HTML карточек закусок -->
                    <div class="card">
                        <div class="card__top">
                            <a href="#openModal"  onclick="app.modalInfoSnack(${item.id})" class="card__image">
                                <img
                                    src=${item.image}
                                    alt=${item.name}
                                />
                            </a>
                        </div>
                        <div class="card__bottom">
                            <a href="#openModal" onclick="app.modalInfoSnack(${item.id})" class="card__title">
                                ${item.name}
                            </a>
                            <div class="card__ingredients">
                                ${item.ingredients}
                            </div>
                            <div class="card__prices">
                                <div class="card__price card__price--common">${item.price}</div>
                            </div>
                                <a href="#openModal" onclick="app.modalInfoSnack(${item.id})">
                                    <button class="card__add">выбрать</button>
                                </a>
                        </div>
                    </div>
                    `
                })
            });
    }

    // Функция для получения списка напитков
    this.listDrink = () => {
        fetch("../controllers/readAllDrink.php")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                DBody.innerHTML = "";
                data.forEach((item) => {
                    DBody.innerHTML += `

                     <!-- Генерация HTML карточек напитков -->
                    <div class="card">
                        <div class="card__top">
                            <a href="#openModal" onclick="app.modalInfoDrink(${item.id})" class="card__image">
                                <img
                                    src=${item.image}
                                    alt=${item.name}
                                />
                            </a>
                        </div>
                        <div class="card__bottom">
                            <a href="#openModal" onclick="app.modalInfoDrink(${item.id})" class="card__title">
                                ${item.name}
                            </a>
                            <div class="card__ingredients">
                                ${item.ingredients}
                            </div>
                            <div class="card__prices">
                                <div class="card__price card__price--common">${item.price}</div>
                            </div>
                                <a href="#openModal" onclick="app.modalInfoDrink(${item.id})">
                                    <button class="card__add">выбрать</button>
                                </a>
                        </div>
                    </div>
                    `
                })
            });
    }

    // Функция для отображения модального окна с информацией о пицце
    this.modalInfoPizza = (id) => {
        // console.log("Начало")
        app.stopPizza();
        const form = new FormData();
        form.append("id", id);
        fetch("../controllers/pizzaInfo.php", {
            method: "POST",
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.PizzaCard.innerHTML = ""; // Очищаем содержимое PizzaCard
                data.forEach((item) => {
                    console.log(data);
                    // Создаем HTML-разметку и добавляем ее в PizzaCard
                    this.PizzaCard.innerHTML += `

                    <!-- Генерация HTML с информацией о пицце -->
                   <div class="modalContent">
                        <div class="pizzaDetails"> 
                            <img class="img-info" src=${item.image} alt="фото продукта">
                
                            <div class="pizzaInfo">
                                <a href="#close" onclick="app.stopPizza()">
                                    <img src="../../../frontend/img/крестик.png" alt="закрыть" class="close"/>
                                </a>
                                <h2>${item.name}</h2>
                                <div class="size">
                                    <p>${item.diameter} см, ${item.weight} г</p>
                                </div>
                                <div class="energy">
                                <p>Пищевая ценность на 100 г</p>
                                <p>Энерг. ценность ${item.energyValue} ккал</p>
                                <p>Белки ${item.proteins} г</p>
                                <p>Жиры ${item.far} г</p>
                                <p>Углеводы ${item.carb} г</p>
                            </div>
                
                            <div class="sizeSelector">
                                <button id="min" class="sizeOption1">Маленькая</button>
                                <button id="medium" class="sizeOption2">Средняя</button>
                                <button id="max" class="sizeOption3">Большая</button>
                            </div>
                
                            <div class="ingredients">
                                <p>${item.ingredients}</p>
                            </div>
                            <button class="addToBasket">Добавить в корзину за ${item.price} руб.</button>
                        </div>
                        </div>
                   </div>
                    `
                })
            });
        setTimeout(() => {
            app.openPizza();
        }, 200);
    }

    // Функция для отображения модального окна с информацией о закуске
    this.modalInfoSnack = (id) => {
        // console.log("Начало")
        app.stopSnack();
        const form = new FormData();
        form.append("id", id);
        fetch("../controllers/snackInfo.php", {
            method: "POST",
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.SnackCard.innerHTML = "";
                data.forEach((item) => {
                    console.log(data);
                    this.SnackCard.innerHTML += `

                    <!-- Генерация HTML с информацией о закуске -->
                   <div class="modalContent">
                        <div class="pizzaDetails"> 
                            <img class="img-info" src=${item.image} alt="фото продукта">
                
                            <div class="pizzaInfo">
                                <a href="#close" onclick="app.stopSnack()">
                                    <img src="../../../frontend/img/крестик.png" alt="закрыть" class="close"/>
                                </a>
                                
                                <h2>${item.name}</h2>
                                <div class="size">
                                    <p>${item.weight} г</p>
                                </div>
                                
                                <div class="energy">
                                <p>Пищевая ценность на 100 г</p>
                                <p>Энерг. ценность ${item.energyValue} ккал</p>
                                <p>Белки ${item.proteins} г</p>
                                <p>Жиры ${item.far} г</p>
                                <p>Углеводы ${item.carb} г</p>
                            </div>
                            
                            <div class="ingredients">
                                <p>${item.ingredients}</p>
                            </div>
                            <button class="addToBasket">Добавить в корзину за ${item.price} руб.</button>
                        </div>
                        </div>
                   </div>
                    `
                })
            });
        setTimeout(() => {
            app.openSnack();
        }, 200);
    }

    // Функция для отображения модального окна с информацией о напитке
    this.modalInfoDrink = (id) => {
        app.stopDrink();
        const form = new FormData();
        form.append("id", id);
        fetch("../controllers/drinkInfo.php", {
            method: "POST",
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.DrinkCard.innerHTML = "";
                data.forEach((item) => {
                    console.log(data);
                    this.DrinkCard.innerHTML += `

                    <!-- Генерация HTML с информацией о напитке -->
                   <div class="modalContent">
                        <div class="pizzaDetails"> 
                            <img class="img-info" src=${item.image} alt="фото продукта">
                
                            <div class="pizzaInfo">
                                <a href="#close" onclick="app.stopDrink()">
                                    <img src="../../../frontend/img/крестик.png" alt="закрыть" class="close"/>
                                </a>
                                
                                <h2>${item.name}</h2>
                                <div class="size">
                                    <p>${item.volume} л</p>
                                </div>
                                
                                <div class="energy">
                                <p>Пищевая ценность на 100 г</p>
                                <p>Энерг. ценность ${item.energyValue} ккал</p>
                                <p>Белки ${item.proteins} г</p>
                                <p>Жиры ${item.far} г</p>
                                <p>Углеводы ${item.carb} г</p>
                            </div>
                            
                            <div class="ingredients">
                                <p>${item.ingredients}</p>
                            </div>
                            <button class="addToBasket">Добавить в корзину за ${item.price} руб.</button>
                        </div>
                        </div>
                   </div>
                    `
                })
            });
        setTimeout(() => {
            app.openDrink();
        }, 200);
    }

    // Функция для закрытия модального окна с информацией о пицце
    this.stopPizza = () => {
        this.PizzaCard.style.display = 'none';
    }

    // Функция для открытия модального окна с информацией о пицце
    this.openPizza = () => {
        this.PizzaCard.style.display = 'block';
    }

    // Функция для закрытия модального окна с информацией о закуске
    this.stopSnack = () => {
        this.SnackCard.style.display = 'none';
    }

    // Функция для открытия модального окна с информацией о закуске
    this.openSnack = () => {
        this.SnackCard.style.display = 'block';
    }

    // Функция для закрытия модального окна с информацией о напитке
    this.stopDrink = () => {
        this.DrinkCard.style.display = 'none';
    }

    // Функция для открытия модального окна с информацией о напитке
    this.openDrink = () => {
        this.DrinkCard.style.display = 'block';
    }
})();

