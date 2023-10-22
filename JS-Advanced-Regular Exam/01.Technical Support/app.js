window.addEventListener('load', solution);

function solution() {
  let employeeElement = document.getElementById('employee');
  let categoryElement = document.getElementById('category');
  let urgencyElement = document.getElementById('urgency');
  let teamElement = document.getElementById('team');
  let descriptionElement = document.getElementById('description');
  let addBtnElement = document.getElementById('add-btn');

  let previewListElement = document.querySelector('.preview-list');
  let pendingListElement = document.querySelector('.pending-list');
  let resolvedListElement = document.querySelector('.resolved-list');

  addBtnElement.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (employeeElement.value === '' ||
      categoryElement.value === '' ||
      urgencyElement.value === '' ||
      teamElement.value === '' ||
      descriptionElement.value === '') {
      return
    }

    let employee = employeeElement.value;
    let category = categoryElement.value;
    let urgency = urgencyElement.value;
    let team = teamElement.value;
    let description = descriptionElement.value;

    let problemContentElement = elementCreator('li', null, 'problem-content', previewListElement);
    let problemArticleElement = elementCreator('article', null, null, problemContentElement);
    elementCreator('p', `From: ${employee}`, null, problemArticleElement);
    elementCreator('p', `Category: ${category}`, null, problemArticleElement);
    elementCreator('p', `Urgency: ${urgency}`, null, problemArticleElement);
    elementCreator('p', `Assigned to: ${team}`, null, problemArticleElement);
    elementCreator('p', `Description: ${description}`, null, problemArticleElement);

    let editBtnElement = elementCreator('button', 'Edit', 'edit-btn', problemContentElement);
    let continueBtnElement = elementCreator('button', 'Continue', 'continue-btn', problemContentElement);

    clearInputFields();
    addBtnElement.disabled = true;

    editBtnElement.addEventListener('click', () => {
      employeeElement.value = employee;
      categoryElement.value = category;
      urgencyElement.value = urgency;
      teamElement.value = team;
      descriptionElement.value = description;

      addBtnElement.disabled = false;
      problemContentElement.remove();
    });

    continueBtnElement.addEventListener('click', onContinue);

    function onContinue(){
      addBtnElement.disabled = false;
      editBtnElement.remove();
      continueBtnElement.remove();

      pendingListElement.appendChild(problemContentElement);
      let resolvedBtnElement = elementCreator('button', 'Resolved', 'resolve-btn', problemContentElement);

      resolvedBtnElement.addEventListener('click', onResolve);
    }

    function onResolve(){
      document.querySelector('.resolved-btn').remove();

      resolvedListElement.appendChild(problemContentElement);
      let clearBtnElement = elementCreator('button', 'Clear', 'clear-btn', problemContentElement);

      clearBtnElement.addEventListener('click', () => {
        problemContentElement.remove();
      });
    }
  }

  function elementCreator(type, text, classStyle, parent) {
    let element = document.createElement(type);

    if (text) {
      element.textContent = text;
    }

    if (classStyle) {
      element.setAttribute('class', classStyle);
    }

    if (parent) {
      parent.appendChild(element);
    }

    return element
  }

  function clearInputFields() {
    employeeElement.value = '';
    categoryElement.value = '';
    urgencyElement.value = '';
    teamElement.value = '';
    descriptionElement.value = '';
  }


}




