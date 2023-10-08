function validate() {
    let inputElements = document.querySelectorAll('input');
    let usernameElement = inputElements[0];
    let emailElement = inputElements[1];
    let passwordElement = inputElements[2];
    let confirmPasswordElement = inputElements[3];
    let companyCheckBoxElement = inputElements[4];
    let companyNumberElement = inputElements[5];
    let submitBtnElement = document.getElementById('submit');
    let validElement = document.getElementById('valid');
    let companyInfoElement = document.getElementById('companyInfo');

    let isValid = true;

    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    let passwordPattern = /^[\w]{5,15}$/g;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/g;
    let companyNumberPattern = /^[1-9]\d{3}$/g;

    submitBtnElement.addEventListener('click', onClick);

    companyCheckBoxElement.addEventListener('change', () => {

        if (companyCheckBoxElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });

    function onClick(e) {
        e.preventDefault();

        if (!usernameElement.value.match(usernamePattern)) {
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.borderColor = 'none';
        }

        if (!emailElement.value.match(emailPattern)) {
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.borderColor = 'none';
        }

        if (!passwordElement.value.match(passwordPattern) || confirmPasswordElement.value !== passwordElement.value) {
            passwordElement.style.borderColor = 'red';
            confirmPasswordElement.style.borderColor = 'red';
        } else {
            passwordElement.style.borderColor = 'none';
            confirmPasswordElement.style.borderColor = 'none';
        }

        if (companyCheckBoxElement.checked) {
            if (!companyNumberElement.value.match(companyNumberPattern)) {
                companyNumberElement.style.borderColor = 'red';
            }

        } else {
            companyNumberElement.style.borderColor = 'none';
        }

        for (let el of inputElements) {

            if (el.style.borderColor === 'red') {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            validElement.style.display = 'block';
        }

    }
}
