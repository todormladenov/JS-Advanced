window.addEventListener("load", solve);

function solve() {
  let nameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let taskElement = document.getElementById('task');
  let genderElement = document.getElementById('genderSelect');
  let submitBtnElement = document.getElementById('form-btn');
  let inProgressElement = document.getElementById('in-progress');
  let progressCountElement = document.getElementById('progress-count');
  let finishedElement = document.getElementById('finished');
  let clearBtnElement = document.getElementById('clear-btn');

  submitBtnElement.addEventListener('click', submit);

  function submit(e) {
    e.preventDefault();

    if (nameElement.value === '' ||
      lastNameElement.value === '' ||
      ageElement.value === '' ||
      taskElement.value === '') {
      return;
    }

    progressCountElement.textContent = Number(progressCountElement.textContent) + 1;

    let liInProgressElement = document.createElement('li');
    liInProgressElement.setAttribute('class', 'each-line');

    let article = document.createElement('article');

    let fullName = document.createElement('h4');
    fullName.textContent = `${nameElement.value} ${lastNameElement.value}`;

    let genderAndAge = document.createElement('p');
    genderAndAge.textContent = `${genderElement.value}, ${ageElement.value}`;

    let task = document.createElement('p');
    task.textContent = `Dish description: ${taskElement.value}`;

    let editBtnElement = document.createElement('button');
    editBtnElement.textContent = 'Edit';
    editBtnElement.setAttribute('class', 'edit-btn');
    editBtnElement.addEventListener('click', edit);

    let completeBtnElement = document.createElement('button');
    completeBtnElement.textContent = 'Mark as complete';
    completeBtnElement.setAttribute('class', 'complete-btn');
    completeBtnElement.addEventListener('click', complete);

    article.appendChild(fullName);
    article.appendChild(genderAndAge);
    article.appendChild(task);

    liInProgressElement.appendChild(article);
    liInProgressElement.appendChild(editBtnElement);
    liInProgressElement.appendChild(completeBtnElement);

    inProgressElement.appendChild(liInProgressElement);

    let editName = nameElement.value;
    let editLastName = lastNameElement.value;
    let editAge = ageElement.value;
    let editTask = taskElement.value;

    nameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    taskElement.value = '';

    submitBtnElement.disabled = true;

    function edit() {
      nameElement.value = editName;
      lastNameElement.value = editLastName;
      ageElement.value = editAge;
      taskElement.value = editTask;

      liInProgressElement.remove();
      progressCountElement.textContent = Number(progressCountElement.textContent) - 1;
      submitBtnElement.disabled = false;
    }

    function complete() {
      let articleFinishedElement = document.createElement('article');
      articleFinishedElement = article;
      liInProgressElement.remove();

      let liFinishedElement = document.createElement('li');
      liFinishedElement.setAttribute('class', 'each-line');

      liFinishedElement.appendChild(articleFinishedElement);
      
      finishedElement.appendChild(liFinishedElement);
      progressCountElement.textContent = Number(progressCountElement.textContent) - 1;

      clearBtnElement.addEventListener('click', () => {
        liFinishedElement.remove();
        submitBtnElement.disabled = false;
      });
    }
  }
}



/*
Unexpected error: Dish description is invalid: expected 
'Biscuits n gravy. An irresistible Southern favorite, biscuits and gravy would be a cliche if they werent so darned delicious.' 
'Dish description: Biscuits n gravy. An irresistible Southern favorite, biscuits and gravy would be a cliche if they werent so darned delicious.'*/