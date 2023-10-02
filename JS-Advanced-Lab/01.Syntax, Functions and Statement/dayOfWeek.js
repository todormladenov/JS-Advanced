function dayOfWeek(day){

    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (daysOfTheWeek.includes(day)) {
        console.log(daysOfTheWeek.indexOf(day) + 1);
    } else {
        console.log(`error`);
    }

}
dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')