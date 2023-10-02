function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textAreaElement = document.querySelectorAll('#inputs textarea');

   function onClick () {
      textAreaArr = JSON.parse(textAreaElement[0].value);

      let averageSalary = 0;
      let restaurants = {};

      textAreaArr.forEach(restaurant => {
         let [currRestaurant, workers] = restaurant.split(' - ');
         
         let workersArr = workers.split(', ');

         for (let el of workersArr) {

            let tokens = el.split(' ');
            let worker = tokens[0];
            let salary = Number(tokens[1]);
         
            if (!restaurants.hasOwnProperty(currRestaurant)) {
               restaurants.restaurantName = 
            } else {
               found[worker] += salary;
            }

            debugger
            
            
         }
      });
      
   }
}