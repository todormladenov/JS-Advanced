function attachEventsListeners() {

    let timeObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondsBtnElement = document.getElementById('secondsBtn');

    daysBtnElement.addEventListener('click', convert);
    hoursBtnElement.addEventListener('click', convert);
    minutesBtnElement.addEventListener('click', convert);
    secondsBtnElement.addEventListener('click', convert);

    function convert(e) {
        let inputElement = e.currentTarget.parentNode.querySelector('input');
        let result = calculate(Number(inputElement.value), inputElement.id);
          debugger  
        daysInputElement.value = result.days;
        hoursInputElement.value = result.hours;
        minutesInputElement.value = result.minutes;
        secondsInputElement.value = result.seconds;
    }

    function calculate(value, id) {

        let days = value / timeObj[id]

        return {
            days: days,
            hours: days * timeObj.hours,
            minutes: days * timeObj.minutes,
            seconds: days * timeObj.seconds
        }

    }
}