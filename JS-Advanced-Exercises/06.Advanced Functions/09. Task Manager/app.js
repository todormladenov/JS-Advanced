function solve() {
    let taskInputElement = document.getElementById('task');
    let descriptionInputElement = document.getElementById('description');
    let dateInputElement = document.getElementById('date');

    let addBtnElement = document.getElementById('add');

    addBtnElement.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (taskInputElement.value === '' ||
            descriptionInputElement.value === '' ||
            dateInputElement.value === '') {
            return
        }

        let openElement = document.querySelectorAll('section')[1].children[1];

        let article = document.createElement('article');
        openElement.appendChild(article);

        let h3Element = document.createElement('h3');
        h3Element.textContent = taskInputElement.value;
        article.appendChild(h3Element);

        let pDescriptionElement = document.createElement('p');
        pDescriptionElement.textContent = `Description: ${descriptionInputElement.value}`;
        article.appendChild(pDescriptionElement);

        let pDateElement = document.createElement('p');
        pDateElement.textContent = `Due Date: ${dateInputElement.value}`;
        article.appendChild(pDateElement);

        let divFlexElement = document.createElement('div');
        divFlexElement.setAttribute('class', 'flex')

        let startBtnElement = document.createElement('button');
        startBtnElement.textContent = 'Start';
        startBtnElement.setAttribute('class', 'green');
        divFlexElement.appendChild(startBtnElement);
        startBtnElement.addEventListener('click', start);

        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.textContent = 'Delete';
        deleteBtnElement.setAttribute('class', 'red');
        divFlexElement.appendChild(deleteBtnElement);
        deleteBtnElement.addEventListener('click', onDelete);

        article.appendChild(divFlexElement);

        taskInputElement.value = '';
        descriptionInputElement.value = '';
        dateInputElement.value = '';

        function onDelete() {
            article.remove();
        }

        function start() {
            let inProgressElement = document.getElementById('in-progress');
            article.remove();
            startBtnElement.remove();

            inProgressElement.appendChild(article);

            let finishBtnElement = document.createElement('button');
            finishBtnElement.textContent = 'Finish';
            finishBtnElement.setAttribute('class', 'orange');
            divFlexElement.appendChild(finishBtnElement);
            finishBtnElement.addEventListener('click', finish);

            function finish(){
                
                divFlexElement.remove();
                let compleatElement = document.querySelectorAll('section')[3].children[1];
                compleatElement.appendChild(article);
            }


        }
    }
}