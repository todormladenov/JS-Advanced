function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);
    let previousDate = date.getDate();
    year = date.getFullYear();
    month = date.getMonth();

    console.log(`${year}-${month + 1}-${previousDate}`);
    
}
previousDay(2016, 9, 30)
previousDay(2015, 5, 10)
previousDay(2011, 1, 1)