document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})


//Для открытия модального окна
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