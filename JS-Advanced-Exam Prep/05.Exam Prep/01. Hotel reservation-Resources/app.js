window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let dateInElement = document.getElementById('date-in');
    let dateOutElement = document.getElementById('date-out');
    let peopleCountElement = document.getElementById('people-count');
    let verificationElement = document.getElementById('verification');

    let nextBtnElement = document.getElementById('next-btn');

    nextBtnElement.addEventListener('click', nextStep);

    function nextStep(event) {
        event.preventDefault();

        if (firstNameElement.value === '' ||
            lastNameElement.value === '' ||
            dateInElement.value === '' ||
            dateOutElement.value === '' ||
            peopleCountElement.value === '') {
            return;
        }

        if (new Date(dateInElement.value) >= new Date(dateOutElement.value)) {
            return
        }

        let infoListElement = document.querySelector('.info-list');
        let liContentElement = document.createElement('li');
        liContentElement.className = 'reservation-content';

        let articleElement = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${dateInElement.value}`;

        let pDateOut = document.createElement('p');
        pDateOut.textContent = `To date: ${dateOutElement.value}`;

        let pPeopleCount = document.createElement('p');
        pPeopleCount.textContent = `For ${peopleCountElement.value} people`;

        let editBtnElement = document.createElement('button');
        editBtnElement.textContent = 'Edit';
        editBtnElement.setAttribute('class', 'edit-btn');

        let continueBtnElement = document.createElement('button');
        continueBtnElement.textContent = 'Continue';
        continueBtnElement.setAttribute('class', 'continue-btn');

        articleElement.appendChild(h3);
        articleElement.appendChild(pFromDate);
        articleElement.appendChild(pDateOut);
        articleElement.appendChild(pPeopleCount);

        liContentElement.appendChild(articleElement);
        liContentElement.appendChild(editBtnElement);
        liContentElement.appendChild(continueBtnElement);

        infoListElement.appendChild(liContentElement);

        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editDateIn = dateInElement.value;
        let editDateOut = dateOutElement.value;
        let editPeopleCount = peopleCountElement.value;

        firstNameElement.value = '';
        lastNameElement.value = '';
        dateInElement.value = '';
        dateOutElement.value = '';
        peopleCountElement.value = '';

        nextBtnElement.disabled = true;

        editBtnElement.addEventListener('click', edit);
        continueBtnElement.addEventListener('click', onContinue);

        function edit() {
            liContentElement.remove();

            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName;
            dateInElement.value = editDateIn;
            dateOutElement.value = editDateOut;
            peopleCountElement.value = editPeopleCount;

            nextBtnElement.disabled = false;
        }

        function onContinue() {
            let confirmListElement = document.querySelector('.confirm-list');

            editBtnElement.remove();
            continueBtnElement.remove();
            liContentElement.remove();

            confirmListElement.appendChild(liContentElement);

            let confirmBtnElement = document.createElement('button');
            confirmBtnElement.textContent = 'Confirm';
            confirmBtnElement.setAttribute('class', 'confirm-btn');
            liContentElement.appendChild(confirmBtnElement);

            let cancelBtnElement = document.createElement('button');
            cancelBtnElement.textContent = 'Cancel';
            cancelBtnElement.setAttribute('class', 'cancel-btn');
            liContentElement.appendChild(cancelBtnElement);

            confirmBtnElement.addEventListener('click', confirm)
            cancelBtnElement.addEventListener('click', cancel);

            function confirm() {
                liContentElement.remove();
                nextBtnElement.disabled = false;

                verificationElement.setAttribute('class', 'reservation-confirmed');
                verificationElement.textContent = 'Confirmed';
            }

            function cancel() {
                liContentElement.remove();
                nextBtnElement.disabled = false;

                verificationElement.setAttribute('class', 'reservation-cancelled');
                verificationElement.textContent = 'Cancelled';
            }

        }

    }
}





