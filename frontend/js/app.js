// Слушаем событие 'mousemove' на документе
document.addEventListener('mousemove', e => {
	// Вычисляем горизонтальное перемещение на основе положения мыши относительно центра окна
	// e.clientX - это горизонтальная координата курсора мыши относительно левого края окна браузера
	// window.innerWidth / 2 - это середина окна браузера по горизонтали.
	const moveX = (e.clientX - window.innerWidth / 2) * -0.005;

	// Вычисляем вертикальное перемещение на основе положения мыши относительно центра окна
	const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

	// Применяем вычисленные значения как пользовательские свойства к корневому элементу (html)
	Object.assign(document.documentElement, {
		style: `
        --move-x: ${moveX}deg;
        --move-y: ${moveY}deg;
        `
	});
});
