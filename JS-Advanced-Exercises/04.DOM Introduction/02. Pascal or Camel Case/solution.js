function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  text = text.toLowerCase();
  let elements = text.split(' ');
  let result = '';

  switch (namingConvention) {
    case 'Camel Case':
      result += elements.shift();

      elements.forEach(element => {
        result += element[0].toUpperCase() + element.substring(1);
      });

      break;
    case 'Pascal Case':

      elements.forEach(element => {
        result += element[0].toUpperCase() + element.substring(1);
      });

      break;
    default: result = 'Error!'; break;
  }

  document.getElementById('result').textContent = result;

}