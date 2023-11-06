document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

document.addEventListener('DOMContentLoaded', function() {
	const menuSection = document.getElementById('Menu');
	const basketSection = document.getElementById('Basket');
	const userSection = document.getElementById('User');
	menuSection.style.display = 'none';
	basketSection.style.display = 'none';
	userSection.style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function() {
	const snackSection = document.getElementById('Menu-Snack');
	const drinksSection = document.getElementById('Menu-Drinks');
	snackSection.style.display = 'none';
	drinksSection.style.display = 'none';
});
// Для открытия модального окна
document.addEventListener('DOMContentLoaded', function() {
	const openModalLinks = document.querySelectorAll('.open-modal');
	openModalLinks.forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			const modalId = this.getAttribute('href').substring(1); // Получаем идентификатор модального окна
			const modal = document.getElementById(modalId);
			modal.style.display = 'block';
		});
	});
});

const openModalLink = document.querySelector('.open-modal');
openModalLink.addEventListener('click', (event) => {
	event.preventDefault(); // Предотвращаем стандартное действие ссылки - переход по URL

	// Здесь добавляем код для отображения модального окна
	modal.style.display = 'block';
	container.classList.add('right-panel-active');
	document.body.classList.add('modal-active');
});

