function roadRadar(speed, area) {

    let parser = {
        'city': (speed, speedLimit) => {
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`
            }

            if (speed > speedLimit) {
                let speedingStatus = "";
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    speedingStatus = "speeding";
                } else if (difference <= 40) {
                    speedingStatus = "excessive speeding";
                } else {
                    speedingStatus = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`
            }
        },
        'residential': (speed, speedLimit) => {
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`
            }

            if (speed > speedLimit) {
                let speedingStatus = "";
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    speedingStatus = "speeding";
                } else if (difference <= 40) {
                    speedingStatus = "excessive speeding";
                } else {
                    speedingStatus = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`
            }
        },
        'interstate': (speed, speedLimit) => {
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`
            }

            if (speed > speedLimit) {
                let speedingStatus = "";
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    speedingStatus = "speeding";
                } else if (difference <= 40) {
                    speedingStatus = "excessive speeding";
                } else {
                    speedingStatus = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`
            }
        },
        'motorway': (speed, speedLimit) => {
            if (speed <= speedLimit) {
                return `Driving ${speed} km/h in a ${speedLimit} zone`
            }

            if (speed > speedLimit) {
                let speedingStatus = "";
                let difference = speed - speedLimit;
                if (difference <= 20) {
                    speedingStatus = "speeding";
                } else if (difference <= 40) {
                    speedingStatus = "excessive speeding";
                } else {
                    speedingStatus = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`
            }
        }
    }

    switch (area) {
        case "city": console.log(parser.city(speed, 50)); break;
        case "residential": console.log(parser.city(speed, 20)); break;
        case "interstate": console.log(parser.city(speed, 90)); break;
        case "motorway": console.log(parser.city(speed, 130)); break;
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')