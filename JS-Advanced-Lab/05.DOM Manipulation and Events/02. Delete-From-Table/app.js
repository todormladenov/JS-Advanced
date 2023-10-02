function deleteByEmail() {
    let emailsElements = document.querySelectorAll('#customers tr td:nth-of-type(2)');
    let deleteInput = document.querySelector('input[name=email]');
    let resultElement = document.getElementById('result');

    let emailsElementsArr = Array.from(emailsElements);

    let targetEmail = emailsElementsArr.find(el => el.textContent === deleteInput.value)

        if (targetEmail) {
            targetEmail.parentNode.remove()
            resultElement.textContent = 'Delete.'
        } else {
            resultElement.textContent = 'Not found.';
        }
}