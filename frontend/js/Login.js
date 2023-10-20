const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const closeButtonLeft = document.getElementById('closeButtonLeft'); // Получаем кнопку закрытия слева
const closeButtonRight = document.getElementById('closeButtonRight'); // Получаем кнопку закрытия справа
const modal = document.querySelector('.modal-login');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    modal.style.display = 'block';
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    modal.style.display = 'block';
});

// Добавляем слушатели событий для кнопок закрытия
closeButtonLeft.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    modal.style.display = 'none';
});

closeButtonRight.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    modal.style.display = 'none';
});


