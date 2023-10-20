window.addEventListener("load", solve);

function solve() {
  let postTitleElement = document.getElementById('post-title');
  let postCategoryElement = document.getElementById('post-category');
  let postContentElement = document.getElementById('post-content');
  let publishBtnElement = document.getElementById('publish-btn');

  let reviewElement = document.getElementById('review-list');
  let publishedListElement = document.getElementById('published-list');
  let clearBtnElement = document.getElementById('clear-btn');

  publishBtnElement.addEventListener('click', onPublish);

  function onPublish(e) {
    e.preventDefault();

    if (postTitleElement.value === '' ||
      postCategoryElement.value === '' ||
      postContentElement.value === '') {
      return
    }

    let title = postTitleElement.value;
    let category = postCategoryElement.value;
    let content = postContentElement.value;

    let liPostElement = elementCreator('li', null, 'rpost', reviewElement);
    let articlePostElement = elementCreator('article', null, null, liPostElement);
    elementCreator('h4', title, null, articlePostElement);
    elementCreator('p', `Category: ${category}`, null, articlePostElement);
    elementCreator('p', `Content: ${content}`, null, articlePostElement);
    let editBtnElement = elementCreator('button', 'Edit', 'action-btn edit', liPostElement);
    let approveBtnElement = elementCreator('button', 'Approve', 'action-btn approve', liPostElement);

    clearInputs();

    editBtnElement.addEventListener('click', () => {
      postTitleElement.value = title;
      postCategoryElement.value = category;
      postContentElement.value = content;

      liPostElement.remove();
    });

    approveBtnElement.addEventListener('click', () => {
      editBtnElement.remove();
      approveBtnElement.remove();
      liPostElement.remove();

      publishedListElement.appendChild(liPostElement);

      clearBtnElement.addEventListener('click', () => {
        publishedListElement.innerHTML = '';
      });
    });
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

    return element;
  }

  function clearInputs() {
    postTitleElement.value = '';
    postCategoryElement.value = '';
    postContentElement.value = '';
  }

}
