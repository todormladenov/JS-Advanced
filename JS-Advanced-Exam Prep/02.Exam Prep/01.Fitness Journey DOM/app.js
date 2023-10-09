window.addEventListener('load', solve);

function solve() {
    let nameInputElement = document.getElementById('name');
    let emailInputElement = document.getElementById('email');
    let contactNumberElement = document.getElementById('contact-number');
    let classTypeElement = document.getElementById('class-type');
    let classTimeElement = document.getElementById('class-time');

    let nextBtnElement = document.getElementById('next-btn');
    nextBtnElement.addEventListener('click', nextStep);

    function nextStep(event) {
        event.preventDefault();

        if (nameInputElement.value === '' ||
            emailInputElement.value === '' ||
            contactNumberElement.value === '' ||
            classTypeElement.value === '' ||
            classTimeElement.value === '') {
            return
        }

        let previewUlElement = document.querySelector('.class-info');

        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'info-item');
        previewUlElement.appendChild(liElement);

        let articleElement = document.createElement('article');
        articleElement.setAttribute('class', 'personal-info');
        liElement.appendChild(articleElement);

        let pNameElement = document.createElement('p');
        pNameElement.textContent = nameInputElement.value;
        articleElement.appendChild(pNameElement);

        let pEmailElement = document.createElement('p');
        pEmailElement.textContent = emailInputElement.value;
        articleElement.appendChild(pEmailElement);

        let pContactNumberElement = document.createElement('p');
        pContactNumberElement.textContent = contactNumberElement.value;
        articleElement.appendChild(pContactNumberElement);

        let pClassTypeElement = document.createElement('p');
        pClassTypeElement.textContent = classTypeElement.value;
        articleElement.appendChild(pClassTypeElement);

        let pClassTimeElement = document.createElement('p');
        pClassTimeElement.textContent = classTimeElement.value;
        articleElement.appendChild(pClassTimeElement);

        let editBtnElement = document.createElement('button');
        editBtnElement.textContent = 'Edit';
        editBtnElement.setAttribute('class', 'edit-btn');
        liElement.appendChild(editBtnElement);

        let continueBtnElement = document.createElement('button');
        continueBtnElement.textContent = 'Continue';
        continueBtnElement.setAttribute('class', 'continue-btn');
        liElement.appendChild(continueBtnElement);

        let previewName = nameInputElement.value;
        let previewEmail = emailInputElement.value;
        let previewContactNumber = contactNumberElement.value
        let previewClassType = classTypeElement.value;
        let previewClassTime = classTimeElement.value;

        nameInputElement.value = '';
        emailInputElement.value = '';
        contactNumberElement.value = '';
        classTypeElement.value = '';
        classTimeElement.value = '';

        nextBtnElement.disabled = true;

        editBtnElement.addEventListener('click', edit);
        continueBtnElement.addEventListener('click', onContinue);

        function edit() {
            liElement.remove();

            nameInputElement.value = previewName;
            emailInputElement.value = previewEmail;
            contactNumberElement.value = previewContactNumber;
            classTypeElement.value = previewClassType;
            classTimeElement.value = previewClassTime;

            nextBtnElement.disabled = false;
        }

        function onContinue() {
            let confirmClassElement = document.querySelector('.confirm-class');
            liElement.remove();
            liElement.setAttribute('class', 'continue-info');

            confirmClassElement.appendChild(liElement)
            editBtnElement.remove();
            continueBtnElement.remove();

            let cancelBtnElement = document.createElement('button');
            cancelBtnElement.textContent = 'Cancel';
            cancelBtnElement.setAttribute('class', 'cancel-btn');
            liElement.appendChild(cancelBtnElement);

            let confirmBtnElement = document.createElement('button');
            confirmBtnElement.textContent = 'Confirm';
            confirmBtnElement.setAttribute('class', 'confirm-btn');
            liElement.appendChild(confirmBtnElement);

            confirmBtnElement.addEventListener('click', () => {
                document.getElementById('main').remove();
                let bodyElement = document.getElementById('body');

                let h1Element = document.createElement('h1');
                h1Element.setAttribute('id', 'thank-you');
                h1Element.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';
                bodyElement.appendChild(h1Element);

                let doneBtnElement = document.createElement('button');
                doneBtnElement.setAttribute('id', 'done-btn');
                doneBtnElement.textContent = 'Done';
                bodyElement.appendChild(doneBtnElement);

                doneBtnElement.addEventListener('click', () => {
                    location.reload();
                })
            })

            cancelBtnElement.addEventListener('click', () => {
                liElement.remove();
                nextBtnElement.disabled = false;
            })
        }
    }
}




