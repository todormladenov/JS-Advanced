function generateReport() {
    let checkboxElements = document.querySelectorAll('input[type=checkbox]');
    let employeeElement = checkboxElements[0];
    let deparmentElement = checkboxElements[1];
    let statusElement = checkboxElements[2];
    let dateHiredElement = checkboxElements[3];
    let benefitsElement = checkboxElements[4];
    let salaryElement = checkboxElements[5];
    let ratingElement = checkboxElements[6];

    let trElements = document.querySelectorAll('tbody tr');

    let outputElement = document.getElementById('output');
    let result = [];

    for (let el of trElements) {
        let tdElements = el.children;

        let reportObj = {}

        if (employeeElement.checked) {
            reportObj.employee = tdElements[0].textContent;
        }

        if (deparmentElement.checked) {
            reportObj.deparment = tdElements[1].textContent;
        }

        if (statusElement.checked) {
            reportObj.status = tdElements[2].textContent;
        }

        if (dateHiredElement.checked) {
            reportObj.dateHired = tdElements[3].textContent;
        }

        if (benefitsElement.checked) {
            reportObj.benefits = tdElements[4].textContent;
        }

        if (salaryElement.checked) {
            reportObj.salary = tdElements[5].textContent;
        }

        if (ratingElement.checked) {
            reportObj.rating = tdElements[6].textContent;
        }

        result.push(reportObj);
    }

    outputElement.textContent = JSON.stringify(result);
}