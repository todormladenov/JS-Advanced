class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        }

        this.participants[participantName] = participantGender;

        return `A new participant has been added - ${participantName}`; 
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let completedCount = Math.floor(condition / 30);

        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        let participantGender = this.participants[participantName];
        this.listOfFinalists.push({ participantName, participantGender });
        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        let foundFinalist = this.listOfFinalists.find(f => f.participantName === participantName);
        if (!foundFinalist) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`
    }

    showRecord(criteria) {
        if (!this.listOfFinalists.length) {
            return `There are no finalists in this competition`;
        }

        if (criteria === 'all') {
            let result = [`List of all ${this.competitionName} finalists:`];

            let winners = this.listOfFinalists.map(({ participantName, participantGender }) => `${participantName}`);

            return result.concat(winners).join('\n');
        }

        if (criteria == 'male' || criteria == 'female') {
            let foundFinalist = this.listOfFinalists.find(f => f.participantGender === criteria);

            if (!foundFinalist) {
                return `There are no ${criteria}'s that finished the competition`
            }

            return `${foundFinalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }

    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Pesho", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Pesho", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));
