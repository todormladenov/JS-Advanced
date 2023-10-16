class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let result = `You successfully invite `;
        let players = [];

        footballPlayers.forEach(player => {
            let [name, age, playerValue] = player.split('/');
            let foundPlayer = this.invitedPlayers.find(p => p.name === name);

            if (!foundPlayer) {
                this.invitedPlayers.push({ name, age, playerValue });
                players.push(name);
            } else {
                if (foundPlayer.playerValue < playerValue) {
                    foundPlayer.playerValue = playerValue;
                    if (!players.includes(name)) {
                        players.push(name);
                    }
                }
            }
        });

        result += players.join(', ') + '.';
        return result;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');

        let foundPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!foundPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (foundPlayer.playerValue > offer) {
            let priceDifference = foundPlayer.playerValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        foundPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        let foundPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!foundPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (foundPlayer.age < age) {
            let ageDifference = age - foundPlayer.age;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }

            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }

        return `${name} is above age limit!`
    }

    transferWindowResult() {
        let result = `Players list:\n`;

        result += this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, age, playerValue }) => `Player ${name}-${playerValue}`)
            .join('\n');

        return result;
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());