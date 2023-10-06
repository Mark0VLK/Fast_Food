const sizeOptions = document.querySelectorAll('.sizeOption');
const sizeHighlight = document.querySelector('.sizeHighlight');
const sizeSlider = document.getElementById('pizzaSize');

sizeOptions.forEach((option, index) => {
    option.addEventListener('click', function() {
        const targetValue = parseInt(this.getAttribute('data-value'));
        sizeSlider.value = targetValue;
        updateSelectedSize(targetValue, index);
    });
});

function updateSelectedSize(targetValue, index) {
    sizeOptions.forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });

    // Move the sizeHighlight to the selected option
    const percentage = (index * 33.33) + '%';
    sizeHighlight.style.transform = `translateX(${percentage})`;
}

// Initialize the selected size
updateSelectedSize(1, 0); // Initially select the first size