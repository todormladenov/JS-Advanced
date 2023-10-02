function timeToWalk(steps, footPrint, speed) {

    let totalMeters = steps * footPrint;
    let totalBreaks = Math.floor(totalMeters / 500);
    let metersPerHour = speed * 1000
    
    let totalTimeHours = totalMeters / metersPerHour;
    let totalTimeSec = totalTimeHours * 3600
    let sec = Math.round(totalTimeSec % 60); 
    let min = (Math.floor(totalTimeSec % 3600 / 60) + totalBreaks);
    let hours = Math.trunc(totalTimeHours)

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    console.log(`${hours}:${min}:${sec}`); 

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
