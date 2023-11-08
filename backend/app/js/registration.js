const userR = new (function () {

    // Получение элементов формы регистрации по их ID
    this.name = document.getElementById("name");
    this.surname = document.getElementById("surname");
    this.phoneNumber = document.getElementById("phoneNumber");
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");

    // Метод для сохранения данных пользователя
    this.save = () => {
        var form = new FormData();
        form.append("name", this.name.value);
        form.append("surname", this.surname.value);
        form.append("phoneNumber", this.phoneNumber.value);
        form.append("email", this.email.value);
        form.append("password", this.password.value);

        // Отправка данных на сервер
        fetch("../controllers/userSave.php",{
            method: "POST",
            body: form // передача FormData в теле запроса
        })
            .then((res)=>res.json()) // обработка ответа как JSON
            .then((data)=>{
                console.log(data); // вывод данных в консоль
                alert("Регистрация прошла успешно!") // сообщение об успешной регистрации
            })
            .catch(error => console.log(error)) // обработка ошибок
    };
})();