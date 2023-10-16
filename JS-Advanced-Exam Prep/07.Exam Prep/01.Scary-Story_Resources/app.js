window.addEventListener("load", solve);

function solve() {
  let firstNameInputElement = document.getElementById('first-name');
  let lastNameInputElement = document.getElementById('last-name');
  let ageInputElement = document.getElementById('age');
  let storyTitleInputElement = document.getElementById('story-title');
  let genreInputElement = document.getElementById('genre');
  let storyInputElement = document.getElementById('story');
  let publishBtnElement = document.getElementById('form-btn');

  let previewListUlElement = document.getElementById('preview-list');
  let mainDivElement = document.getElementById('main');

  publishBtnElement.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();

    if (firstNameInputElement.value === '' ||
      lastNameInputElement.value === '' ||
      ageInputElement.value === '' ||
      storyTitleInputElement.value === '' ||
      genreInputElement.value === '' ||
      storyInputElement.value === ''
    ) {
      return
    }

    let liPreviewElement = document.createElement('li');
    liPreviewElement.setAttribute('class', 'story-info');

    let articleStoryInfo = document.createElement('article');

    let fullName = document.createElement('h4');
    fullName.textContent = `Name: ${firstNameInputElement.value} ${lastNameInputElement.value}`;

    let age = document.createElement('p');
    age.textContent = `Age: ${ageInputElement.value}`;

    let title = document.createElement('p');
    title.textContent = `Title: ${storyTitleInputElement.value}`;

    let genre = document.createElement('p');
    genre.textContent = `Genre: ${genreInputElement.value}`;

    let story = document.createElement('p');
    story.textContent = storyInputElement.value;

    let saveBtnElement = document.createElement('button');
    saveBtnElement.setAttribute('class', 'save-btn');
    saveBtnElement.textContent = 'Save Story';

    let editBtnElement = document.createElement('button');
    editBtnElement.setAttribute('class', 'edit-btn');
    editBtnElement.textContent = 'Edit Story';

    let deleteBtnElement = document.createElement('button');
    deleteBtnElement.setAttribute('class', 'delete-btn');
    deleteBtnElement.textContent = 'Delete Story';

    articleStoryInfo.appendChild(fullName);
    articleStoryInfo.appendChild(age);
    articleStoryInfo.appendChild(title);
    articleStoryInfo.appendChild(genre);
    articleStoryInfo.appendChild(story);

    liPreviewElement.appendChild(articleStoryInfo);
    liPreviewElement.appendChild(saveBtnElement);
    liPreviewElement.appendChild(editBtnElement);
    liPreviewElement.appendChild(deleteBtnElement);

    previewListUlElement.appendChild(liPreviewElement);

    let editFirstName = firstNameInputElement.value;
    let editLastName = lastNameInputElement.value;
    let editAge = ageInputElement.value;
    let editTitle = storyTitleInputElement.value;
    let editGenre = genreInputElement.value;
    let editStory = storyInputElement.value;

    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    ageInputElement.value = '';
    storyTitleInputElement.value = '';
    genreInputElement.value = '';
    storyInputElement.value = '';

    publishBtnElement.disabled = true;

    editBtnElement.addEventListener('click', edit);
    saveBtnElement.addEventListener('click', save);
    deleteBtnElement.addEventListener('click', onDelete);

    function edit() {
      firstNameInputElement.value = editFirstName;
      lastNameInputElement.value = editLastName;
      ageInputElement.value = editAge;
      storyTitleInputElement.value = editTitle;
      genreInputElement.value = editGenre;
      storyInputElement.value = editStory;

      publishBtnElement.disabled = false;
      liPreviewElement.remove();
    }

    function save() {
      mainDivElement.innerHTML = '';
      let message = document.createElement('h1');
      message.textContent = 'Your scary story is saved!';

      mainDivElement.appendChild(message);
    }

    function onDelete() {
      publishBtnElement.disabled = false;
      liPreviewElement.remove();
    }

  }
}
