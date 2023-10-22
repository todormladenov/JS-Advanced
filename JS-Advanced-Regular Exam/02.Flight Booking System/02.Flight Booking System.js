class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let foundFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (foundFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        let foundFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (!foundFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        let price = foundFlight.price;
        this.bookings.push({ passengerName, flightNumber, price });
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        let foundFlight = this.bookings.find(f => f.flightNumber === flightNumber && f.passengerName === passengerName);

        if (!foundFlight) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        let indexOfFlight = this.bookings.indexOf(foundFlight);
        this.bookings.splice(indexOfFlight, 1);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (!this.bookings.length) {
            throw new Error('No bookings have been made yet.');
        }

        let result = ``;
        switch (criteria) {
            case 'all':
                result += `All bookings(${this.bookingsCount}):\n`;
                result += this.bookings.map(({ passengerName, flightNumber }) => `${passengerName} booked for flight ${flightNumber}.`)
                    .join('\n');

                return result;
            case 'cheap':
                let cheapFlights = this.bookings.filter(f => f.price <= 100);

                if (!cheapFlights.length) {
                    return 'No cheap bookings found.';
                }

                result += `Cheap bookings:\n`;
                result += cheapFlights.map(({ passengerName, flightNumber, price }) => `${passengerName} booked for flight ${flightNumber}.`)
                    .join('\n');

                return result;
            case 'expensive':
                let expensiveFlights = this.bookings.filter(f => f.price > 100);

                if (!expensiveFlights.length) {
                    return 'No expensive bookings found.';
                }

                result += `Expensive bookings:\n`;
                result += expensiveFlights.map(({ passengerName, flightNumber, price }) => `${passengerName} booked for flight ${flightNumber}.`)
                    .join('\n');

                return result;
        }
    }
}
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

