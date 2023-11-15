const userR = new (function () {

    // Получение элементов формы регистрации по их ID
    this.name = document.getElementById("name");
    this.surname = document.getElementById("surname");
    this.phoneNumber = document.getElementById("phoneNumber");
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");

    // Метод для сохранения данных пользователя
    this.save = () => {
        const form = new FormData(); // Создание объекта FormData(используется для создания набора пар ключ/значение)
        form.append("name", this.name.value);
        form.append("surname", this.surname.value);
        form.append("phoneNumber", this.phoneNumber.value);
        form.append("email", this.email.value);
        form.append("password", this.password.value);

        // Отправка данных на сервер
        fetch("../controllers/userSave.php", {
            method: "POST",
            body: form // передача FormData в теле запроса
        })
            .then((res) => res.json()) // обработка ответа как JSON
            .then((data) => {
                console.log(data); // вывод данных в консоль
                alert("Регистрация прошла успешно!") // сообщение об успешной регистрации
            })
            .catch(error => { // обработка ошибок
                console.log(error);
                alert("При регистрации произошла ошибка");
            })
    };
})();

const userA = new (function () {

    // Получение элементов формы для изменения данных пользователя
    this.ChangeName = document.getElementById('ChangeName');
    this.ChangeSurname = document.getElementById('ChangeSurname');
    this.ChangeBirthDate = document.getElementById('ChangeBirthDate');
    this.ChangeEmail = document.getElementById('ChangeEmail');
    this.ChangePhone = document.getElementById('ChangePhone');

    // Получение элементов формы для ввода email и пароля
    this.email = document.getElementById("emailR");
    this.password = document.getElementById("passwordR");

    // Функция для поиска пользователя
    this.find = () => {
        const form = new FormData();
        form.append("email", this.email.value);
        form.append("password", this.password.value);

        // Отправка запроса на сервер для поиска пользователя
        fetch("../controllers/userFindOne.php", {
            method: "POST",
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                // Вывод полученных данных в консоль (для отладки)
                console.log(data);

                // Установка значений полей формы в соответствии с данными пользователя
                this.ChangeName.value = data.name;
                this.ChangeSurname.value = data.surname;
                this.ChangeBirthDate.value = data.birthDate;
                this.ChangeEmail.value = data.email;
                this.ChangePhone.value = data.phoneNumber;

                alert("Аутентификация прошла успешно!") // сообщение об успешной аутентификации
            })
            .catch(error => { // обработка ошибок
                console.log(error);
                alert("При аутентификации произошла ошибка! Проверьте ваши данные!");
            })
    };
})();

const userChangeInfo = new (function () {

    // Получение элементов формы для изменения данных пользователя
    this.ChangeName = document.getElementById('ChangeName');
    this.ChangeSurname = document.getElementById('ChangeSurname');
    this.ChangeBirthDate = document.getElementById('ChangeBirthDate');
    this.ChangeEmail = document.getElementById('ChangeEmail');
    this.ChangePhone = document.getElementById('ChangePhone');

    // Функция для поиска пользователя
    this.updateInfo = () => {
        const form = new FormData();
        form.append("name", this.ChangeName.value);
        form.append("surname", this.ChangeSurname.value);
        form.append("birthDate", this.ChangeBirthDate.value);
        form.append("email", this.ChangeEmail.value);
        form.append("phoneNumber", this.ChangePhone.value);

        // Отправка запроса на сервер для поиска пользователя
        fetch("../controllers/userUpdate.php", {
            method: "POST",
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                // Вывод полученных данных в консоль (для отладки)
                console.log(data);
                alert("Двнные успешно обновлены!")
            });
    }
})();

const deleteUser = new (function () {

    this.deleteUser = document.getElementById('deleteUser');

    // Функция для удаления пользователя
    this.delete = () => {

        fetch("../controllers/userDelete.php")
            .then((res) => res.json())
            .then((data) => {
                // Вывод полученных данных в консоль (для отладки)
                console.log(data);

                alert("Учётная запись успешно удалена.")

                // Перенаправление на главную страницу после успешного удаления
                window.location.href = "../views/index.php"; // URL главной страницы
            })
            .catch(error => {
                // Обработка ошибок при удалении
                console.error('Ошибка при удалении:', error);
            });
    }
    // Привязка обработчика событий к кнопке deleteUser
    this.deleteUser.addEventListener('click', this.delete);
})();