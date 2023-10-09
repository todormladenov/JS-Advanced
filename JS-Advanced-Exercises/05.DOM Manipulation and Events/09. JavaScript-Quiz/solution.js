function solve() {
  let sectionElements = Array.from(document.querySelectorAll('section'));
  let resultH1Element = document.querySelector('.results-inner h1');
  let resultUlElement = document.getElementById('results');

  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let result = 0;

  sectionElements.forEach(el => {
    let answers = el.querySelectorAll('p');
    let answerOne = answers[0];
    let answerTwo = answers[1];

    answerOne.addEventListener('click', nextStep);
    answerTwo.addEventListener('click', nextStep);
  });

  function nextStep(event) {
    event.preventDefault();
    let chosenAnswer = event.currentTarget.textContent;
    let currentSection = event.currentTarget.parentNode.parentNode.parentNode.parentNode;

    if (rightAnswers.includes(chosenAnswer)) {
      result++;
    }

    currentSection.style.display = 'none';

    let foundHiddenSectionElement = sectionElements.find(x => x.className === 'hidden');

    if (foundHiddenSectionElement) {
      foundHiddenSectionElement.style.display = 'block';
      foundHiddenSectionElement.className = '';
      answers = foundHiddenSectionElement.querySelectorAll('p');
      answerOne = answers[0];
      answerTwo = answers[1];

      answerOne.addEventListener('click', nextStep);
      answerTwo.addEventListener('click', nextStep);
    } else {
      if (result === sectionElements.length) {
        resultH1Element.textContent ='You are recognized as top JavaScript fan!';
      } else {
        resultH1Element.textContent = `You have ${result} right answers`;
      }
      resultUlElement.style.display = 'block';
    }
  }

}
