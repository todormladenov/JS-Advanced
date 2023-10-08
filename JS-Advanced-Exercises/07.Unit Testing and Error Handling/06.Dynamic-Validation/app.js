function validate() {
    let emailInputElement = document.getElementById('email');
    let emailPattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    emailInputElement.addEventListener('change', () => {
        if (!emailInputElement.value.match(emailPattern)) {
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.classList.remove('error');
        }
    });
}