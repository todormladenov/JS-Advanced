window.addEventListener('load', solve);

function solve() {

        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let carPartNameElement = document.getElementById('part-name');
        let carPartNumberElement = document.getElementById('part-number');
        let carConditionElement = document.getElementById('condition');

        let nextBtnElement = document.getElementById('next-btn');       
        let compleatImgElement = document.getElementById('complete-img');
        let partInfoUlElement = document.querySelector('.info-list');
        let confirmListElement = document.querySelector('.confirm-list');
        let compleatTextElement = document.getElementById('complete-text');

        let editBtnElement = document.createElement('button');
        let continueBtnElement = document.createElement('button');

        nextBtnElement.addEventListener('click', nextStep)

        function nextStep() {
        
                if (carModelElement.value.trim() === '' ||
                carYearElement.value.trim() === '' ||
                Number(carYearElement.value) < 1980 ||
                Number(carYearElement.value) > 2023 ||
                carPartNameElement.value.trim() === '' ||
                carPartNumberElement.value.trim() === '' ||
                carConditionElement.value.trim() === '') {
                    return;    
                }

                let modelDomElements = generatePElements(carModelElement);
                let yearDomElements = generatePElements(carYearElement);
                let partNameDomElements = generatePElements(carPartNameElement);
                let partNumberDomElements = generatePElements(carPartNumberElement);
                let conditionDomElements = generatePElements(carConditionElement);

                let liElement = document.createElement('li');
                liElement.className = 'part-content';
                partInfoUlElement.appendChild(liElement);

                let articleElement = document.createElement('article');

                liElement.appendChild(articleElement);

                articleElement.innerHTML = `
                <p>${modelDomElements.textContent}</p>
                <p>${yearDomElements.textContent}</p>
                <p>${partNameDomElements.textContent}</p>
                <p>${partNumberDomElements.textContent}</p>
                <p>${conditionDomElements.textContent}</p>
                `
                carModelElement.value = '';
                carYearElement.value = '';
                carPartNameElement.value = '';
                carPartNumberElement.value = '';
                carConditionElement.value = '';

                nextBtnElement.disabled = true;
                compleatImgElement.style.visibility = 'hidden';
                compleatTextElement.textContent = '';

                editBtnElement.textContent = 'Edit';
                editBtnElement.className = 'edit-btn'
               
                continueBtnElement.className = 'continue-btn';
                continueBtnElement.textContent = 'Continue';

                liElement.appendChild(editBtnElement);
                liElement.appendChild(continueBtnElement);

                editBtnElement.addEventListener('click', edit);
                continueBtnElement.addEventListener('click', continueNextStep)
        }

        function generatePElements(input){
                let pElement = document.createElement('p');
                let labelElement = document.querySelector('label[for=' + input.id + ']');

                pElement.textContent = `${labelElement.textContent} ${input.value}`;
                return pElement;       
        }

        function edit(){
                let pElements = document.querySelectorAll('.part-content article p');

                let infoList = [];

                for (let el of pElements) {
                        let [labelInfo, inputValue] = el.textContent.split(': ');
                        infoList.push(inputValue);
                }

                carModelElement.value = infoList[0];
                carYearElement.value = infoList[1];
                carPartNameElement.value = infoList[2];
                carPartNumberElement.value = infoList[3];
                carConditionElement.value = infoList[4];

                nextBtnElement.disabled = false;

                partInfoUlElement.innerHTML = '';
        }

        function continueNextStep(){
                
                editBtnElement.remove();
                continueBtnElement.remove();

                let transferredInnerHTM = document.querySelector('.part-content');
                confirmListElement.innerHTML = `<li class="part-content">${transferredInnerHTM.innerHTML}</li>`;

                partInfoUlElement.innerHTML = '';

                let confirmBtnElement = document.createElement('button');
                let cancelBtnElement = document.createElement('button');

                confirmBtnElement.textContent = 'Confirm';
                cancelBtnElement.textContent = 'Cancel';

                confirmBtnElement.className = 'confirm-btn';
                cancelBtnElement.className = 'cancel-btn';

                confirmListElement.appendChild(confirmBtnElement);
                confirmListElement.appendChild(cancelBtnElement);

                confirmBtnElement.addEventListener('click', confirm);
                cancelBtnElement.addEventListener('click', cancel);
        }

        function confirm(){
                confirmListElement.innerHTML = '';
                nextBtnElement.disabled = false;

                compleatImgElement.style.visibility = 'visible';
                compleatTextElement.textContent = 'Part is Ordered!';
        }

        function cancel(){
                confirmListElement.innerHTML = '';
                nextBtnElement.disabled = false;
        }
};


    
    
