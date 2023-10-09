function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textAreaElement = document.querySelectorAll('#inputs textarea');

   function onClick() {
      textAreaArr = JSON.parse(textAreaElement[0].value);

      let restaurants = {};

      textAreaArr.forEach(restaurant => {
         let [currRestaurant, workers] = restaurant.split(' - ');

         if (!restaurants.hasOwnProperty(currRestaurant)) {
            restaurants[currRestaurant] = {
               averageSalary: clacAverageSalary(workers),
               bestSalary: clacBestSalary(workers),
               workers: workers
            };
         } else {
            restaurants[currRestaurant].workers = addWorkers(restaurants[currRestaurant][workers], workers);
            restaurants[currRestaurant].averageSalary = clacAverageSalary(restaurants[currRestaurant][workers]);
            restaurants[currRestaurant].bestSalary = clacBestSalary(restaurants[currRestaurant][workers]);
         }
      });

      function clacAverageSalary(workers) {
         let workersArr = workers.split(', ');
         let averageSalary = 0;

         for (let el of workersArr) {
            let [worker, salary] = el.split(' ');
            averageSalary += Number(salary);
         }
         return averageSalary / workersArr.length;
      }

      function clacBestSalary(workers) {
         let workersArr = workers.split(', ');
         let bestSalary = 0;

         for (let el of workersArr) {
            let [worker, salary] = el.split(' ');
            if (salary > bestSalary) {
               bestSalary = el;
            }
         }
         return bestSalary
      }

      function addWorkers(oldWorkers, newWorkers) {
         return oldWorkers.concat(newWorkers);
      }

      let theBestRestaurantsSorted = Object.entries(restaurants).sort((a, b) => b[1].averageSalary - a[1].averageSalary);
      let theBestRestaurant = theBestRestaurantsSorted[0];

      let theBestRestaurantWorkersSorted = theBestRestaurant[1].workers.split(', ')
         .sort((a, b) => b.split(' ')[1] - a.split(' ')[1]);
      let theBestWorkerSalary = Number(theBestRestaurantWorkersSorted[0].split(' ')[1]);     

      let theBestRestaurantsPElement = document.querySelector('div[id=bestRestaurant] p');
      theBestRestaurantsPElement.textContent = `Name: ${theBestRestaurantsSorted[0][0]} Average Salary: ${theBestRestaurantsSorted[0][1].averageSalary.toFixed(2)} Best Salary: ${theBestWorkerSalary.toFixed(2)}`;

      let bestWorkersPElement = document.querySelector('div[id=workers] p');
      bestWorkersPElement.textContent = ``;
      
      for (let workerInfo of theBestRestaurantWorkersSorted) {
         let [name, money] = workerInfo.split(' ');
         bestWorkersPElement.textContent += `Name: ${name} With Salary: ${money} `;
      }
   }
}
