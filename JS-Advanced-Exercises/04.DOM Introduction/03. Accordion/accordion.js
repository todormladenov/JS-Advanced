function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let extraText = document.getElementById('extra')

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        extraText.style.display = 'block';
    } else if (buttonElement.textContent === 'Less') {
        buttonElement.textContent = 'More';
        extraText.style.display = 'none';
    }

}