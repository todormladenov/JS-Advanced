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

        nextBtnElement.addEventListener('click', nextStep)

        function nextStep(e) {
                e.preventDefault();

                if (carModelElement.value === '' ||
                        carYearElement.value === '' ||
                        Number(carYearElement.value) < 1980 ||
                        Number(carYearElement.value) > 2023 ||
                        carPartNameElement.value === '' ||
                        carPartNumberElement.value === '' ||
                        carConditionElement.value === '') {
                        return;
                }

                let liPartContentElement = document.createElement('li');
                liPartContentElement.setAttribute('class', 'part-content');

                let article = document.createElement('article');

                let carModel = document.createElement('p');
                carModel.textContent = `Car Model: ${carModelElement.value}`;

                let yearElement = document.createElement('p');
                yearElement.textContent = `Car Year: ${carYearElement.value}`;

                let partNameElement = document.createElement('p');
                partNameElement.textContent = `Part Name: ${carPartNameElement.value}`;

                let partNumberElement = document.createElement('p');
                partNumberElement.textContent = `Part Number: ${carPartNumberElement.value}`;

                let condition = document.createElement('p');
                condition.textContent = `Condition: ${carConditionElement.value}`;

                let editBtnElement = document.createElement('button');
                editBtnElement.setAttribute('class', 'edit-btn');
                editBtnElement.textContent = 'Edit';

                let continueBtnElement = document.createElement('button');
                continueBtnElement.setAttribute('class', 'continue-btn');
                continueBtnElement.textContent = 'Continue';

                article.appendChild(carModel);
                article.appendChild(yearElement);
                article.appendChild(partNameElement);
                article.appendChild(partNumberElement);
                article.appendChild(condition);

                liPartContentElement.appendChild(article);
                liPartContentElement.appendChild(editBtnElement);
                liPartContentElement.appendChild(continueBtnElement);

                partInfoUlElement.appendChild(liPartContentElement);

                let editModel = carModelElement.value;
                let editYear = carYearElement.value;
                let editPartName = carPartNameElement.value;
                let editPartNumber = carPartNumberElement.value;
                let editCondition = carConditionElement.value;

                carModelElement.value = '';
                carYearElement.value = '';
                carPartNameElement.value = '';
                carPartNumberElement.value = '';
                carConditionElement.value = '';

                compleatImgElement.style.visibility = 'hidden';
                nextBtnElement.disabled = true;
                compleatTextElement.textContent = '';

                editBtnElement.addEventListener('click', edit);

                function edit() {
                        carModelElement.value = editModel;
                        carYearElement.value = editYear;
                        carPartNameElement.value = editPartName;
                        carPartNumberElement.value = editPartNumber;
                        carConditionElement.value = editCondition;

                        liPartContentElement.remove();
                        nextBtnElement.disabled = false;
                }

                continueBtnElement.addEventListener('click', onContinue);

                function onContinue() {

                        let confirmArticle = document.createElement('article');

                        confirmArticle = article;
                        liPartContentElement.remove();

                        let confirmBtnElement = document.createElement('button');
                        confirmBtnElement.setAttribute('class', 'confirm-btn');
                        confirmBtnElement.textContent = 'Confirm';

                        let cancelBtnElement = document.createElement('button');
                        cancelBtnElement.setAttribute('class', 'cancel-btn');
                        cancelBtnElement.textContent = 'Cancel';

                        let liConfirmElement = document.createElement('li');
                        liConfirmElement.setAttribute('class', 'part-content');

                        liConfirmElement.appendChild(confirmArticle);
                        liConfirmElement.appendChild(confirmBtnElement);
                        liConfirmElement.appendChild(cancelBtnElement);

                        confirmListElement.appendChild(liConfirmElement);

                        confirmBtnElement.addEventListener('click', () => {
                                liConfirmElement.remove();

                                compleatImgElement.style.visibility = 'visible';
                                nextBtnElement.disabled = false;
                                compleatTextElement.textContent = 'Part is Ordered!';
                        });

                        cancelBtnElement.addEventListener('click', () => {
                                liConfirmElement.remove();
                                nextBtnElement.disabled = false;
                        });
                }
        }
};




