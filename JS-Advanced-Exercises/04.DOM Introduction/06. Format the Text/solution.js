function solve() {
  
  let textArea = document.getElementById('input').value;
  let output = document.getElementById('output');

  let sentencesArr = textArea.split('. ');

  while (sentencesArr.length) {

    let paragraphElement = document.createElement('p');
    
    let sentences = sentencesArr.splice(0, 3).join('. ');

    paragraphElement.textContent = sentences;

    output.appendChild(paragraphElement);

  }
}