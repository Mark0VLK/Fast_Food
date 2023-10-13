const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const closeButtonLeft = document.getElementById('closeButtonLeft'); // Получаем кнопку закрытия слева
const closeButtonRight = document.getElementById('closeButtonRight'); // Получаем кнопку закрытия справа
const modal = document.querySelector('.modal-login');
const overlay = document.getElementById('ModalOverlay');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    modal.style.display = 'block';
    document.body.classList.add('modal-active'); // Добавить класс для блокировки страницы
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    modal.style.display = 'block';
    document.body.classList.add('modal-active'); // Добавить класс для блокировки страницы
});

// Добавляем слушатели событий для кнопок закрытия
closeButtonLeft.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    modal.style.display = 'none';
    document.body.classList.remove('modal-active'); // Удалить класс для разблокировки страницы
});

closeButtonRight.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    modal.style.display = 'none';
    document.body.classList.remove('modal-active'); // Удалить класс для разблокировки страницы
});

overlay.addEventListener('click', (event) => {
    if(event.target === overlay) { // Проверка, не произошло ли клик на самом модальном окне
        modal.style.display = 'none';
        container.classList.remove('right-panel-active');
        document.body.classList.remove('modal-active');
    }
});

