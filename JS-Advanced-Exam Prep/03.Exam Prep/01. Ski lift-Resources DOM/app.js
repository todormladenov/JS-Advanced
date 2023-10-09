window.addEventListener('load', solve);

function solve() {
    let firstNameInputElement = document.getElementById('first-name');
    let lastNameInputElement = document.getElementById('last-name');
    let numberPeopleInputElement = document.getElementById('people-count');
    let fromDateInputElement = document.getElementById('from-date');
    let daysCountInputElement = document.getElementById('days-count');

    let nextStepBtnElement = document.getElementById('next-btn');

    let ticketPreviewElement = document.querySelector('.ticket-info-list');
    let confirmTicketElement = document.querySelector('.confirm-ticket');

    nextStepBtnElement.addEventListener('click', nextStep);

    function nextStep(e) {
        e.preventDefault();
        if (firstNameInputElement.value.trim() === '' ||
            lastNameInputElement.value.trim() === '' ||
            numberPeopleInputElement.value.trim() === '' ||
            fromDateInputElement.value.trim() === '' ||
            daysCountInputElement.value.trim() === ''
        ) {
            return;
        }

        let liTicketsElement = document.createElement('li');
        liTicketsElement.setAttribute('class', 'ticket');

        let articleInfoElement = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Name: ${firstNameInputElement.value} ${lastNameInputElement.value}`;

        let pDateElement = document.createElement('p');
        pDateElement.textContent = `From date :${fromDateInputElement.value}`;

        let pDaysCountElement = document.createElement('p');
        pDaysCountElement.textContent = `For ${daysCountInputElement.value} days`;

        let pNumberPeopleElement = document.createElement('p');
        pNumberPeopleElement.textContent = `For ${numberPeopleInputElement.value} people`;

        let editBtnElement = document.createElement('button');
        editBtnElement.textContent = 'Edit';
        editBtnElement.setAttribute('class', 'edit-btn');
        liTicketsElement.appendChild(editBtnElement);

        let continueBtnElement = document.createElement('button');
        continueBtnElement.textContent = 'Continue';
        continueBtnElement.setAttribute('class', 'continue-btn')
        liTicketsElement.appendChild(continueBtnElement);

        editBtnElement.addEventListener('click', edit);
        continueBtnElement.addEventListener('click', continueNextStep);

        articleInfoElement.appendChild(h3Element);
        articleInfoElement.appendChild(pDateElement);
        articleInfoElement.appendChild(pDaysCountElement);
        articleInfoElement.appendChild(pNumberPeopleElement);

        liTicketsElement.appendChild(articleInfoElement);
        ticketPreviewElement.appendChild(liTicketsElement);
        
        let previewFirstNameElement = firstNameInputElement.value;
        let previewLastNameElement = lastNameInputElement.value;
        let previewDateElement = fromDateInputElement.value;
        let previewDaysCountElement = daysCountInputElement.value;
        let previewNumberPeopleElement = numberPeopleInputElement.value;

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        fromDateInputElement.value = '';
        daysCountInputElement.value = '';
        numberPeopleInputElement.value = '';
        nextStepBtnElement.disabled = true;

        function edit() {

            firstNameInputElement.value = previewFirstNameElement;
            lastNameInputElement.value = previewLastNameElement;
            numberPeopleInputElement.value = previewNumberPeopleElement;
            fromDateInputElement.value = previewDateElement;
            daysCountInputElement.value = previewDaysCountElement;

            liTicketsElement.remove();
            nextStepBtnElement.disabled = false;
        }

        function continueNextStep() {
            let liContinueElement = document.createElement('li');
            liContinueElement.setAttribute('class', 'ticket-content');

            let articleConfirmElement = document.createElement('article');
            articleConfirmElement = articleInfoElement;     
            
            let confirmBtnElement = document.createElement('button');
            confirmBtnElement.textContent = 'Confirm';
            confirmBtnElement.setAttribute('class', 'confirm-btn');

            let cancelBtnElement = document.createElement('button');
            cancelBtnElement.textContent = 'Cancel';
            cancelBtnElement.setAttribute('class', 'cancel-btn');

            liContinueElement.appendChild(articleConfirmElement);
            liContinueElement.appendChild(confirmBtnElement);
            liContinueElement.appendChild(cancelBtnElement);
            confirmTicketElement.appendChild(liContinueElement);
             
            liTicketsElement.remove();

            confirmBtnElement.addEventListener('click', confirm);
            cancelBtnElement.addEventListener('click', cancel);

            function confirm(){
                let mainDivElement = document.getElementById('main');
                mainDivElement.remove();

                let bodyElement = document.getElementById('body');

                let thankYouH1Element = document.createElement('h1');
                thankYouH1Element.setAttribute('id', 'thank-you');
                thankYouH1Element.textContent = 'Thank you, have a nice day!';

                let backBtnElement = document.createElement('button');
                backBtnElement.setAttribute('id', 'back-btn');
                backBtnElement.textContent = 'Back'

                bodyElement.appendChild(thankYouH1Element);
                bodyElement.appendChild(backBtnElement);

                backBtnElement.addEventListener('click', goBack)
                function goBack(){
                    location.reload();
                }
            }

            function cancel(){
                liContinueElement.remove();
                nextStepBtnElement.disabled = false;
            }
        }
    }
}




