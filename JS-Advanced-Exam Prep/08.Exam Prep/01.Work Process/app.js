function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthDayElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let addWorkerBtnElement = document.getElementById('add-worker');
    let tbodyElement = document.getElementById('tbody');

    let sumElement = document.getElementById('sum');

    addWorkerBtnElement.addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        if (firstNameElement.value === '' ||
            lastNameElement.value === '' ||
            emailElement.value === '' ||
            birthDayElement.value === '' ||
            positionElement.value === '' ||
            salaryElement.value === '') {
            return;
        }

        tbodyElement.appendChild(trElementCreator());

        sumElement.textContent = (Number(salaryElement.value) + Number(sumElement.textContent)).toFixed(2);
        clearInputs();
    }

    function trElementCreator() {

        let employeeInfoElement = document.createElement('tr');

        employeeInfoElement.appendChild(createTdElement(firstNameElement.value));
        employeeInfoElement.appendChild(createTdElement(lastNameElement.value));
        employeeInfoElement.appendChild(createTdElement(emailElement.value));
        employeeInfoElement.appendChild(createTdElement(birthDayElement.value));
        employeeInfoElement.appendChild(createTdElement(positionElement.value));
        employeeInfoElement.appendChild(createTdElement(salaryElement.value));

        firstName = firstNameElement.value;
        lastName = lastNameElement.value;
        email = emailElement.value;
        dateOfBirth = birthDayElement.value;
        position = positionElement.value;
        salary = salaryElement.value;

        let tdForBtns = createTdElement();

        let firedBtn = createBtnElement('fired', 'Fired');
        firedBtn.addEventListener('click', () => {
            sumElement.textContent = Math.abs((Number(salary) - Number(sumElement.textContent))).toFixed(2);
            employeeInfoElement.remove();
        });

        let editBtn = createBtnElement('edit', 'Edit');
        editBtn.addEventListener('click', () => {

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            emailElement.value = email;
            birthDayElement.value = dateOfBirth;
            positionElement.value = position;
            salaryElement.value = salary;

            sumElement.textContent = Math.abs((Number(salary) - Number(sumElement.textContent))).toFixed(2);
            employeeInfoElement.remove();
        });

        tdForBtns.appendChild(firedBtn);
        tdForBtns.appendChild(editBtn);
        employeeInfoElement.appendChild(tdForBtns);

        return employeeInfoElement;
    }

    function createTdElement(text) {
        let tdElement = document.createElement('td');
        tdElement.textContent = text;

        return tdElement;
    }

    function createBtnElement(classStyle, text) {
        let btnElement = document.createElement('button');
        btnElement.textContent = text;
        btnElement.classList.add(classStyle);

        return btnElement
    }

    function clearInputs() {
        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthDayElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';
    }

}
solve()