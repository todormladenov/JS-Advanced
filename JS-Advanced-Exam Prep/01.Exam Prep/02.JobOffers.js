class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let addedCandidates = [];

        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');

            let foundCandidate = this.jobCandidates.find(c => c.name === name);

            if (!foundCandidate) {
                this.jobCandidates.push({ name, education, yearsExperience });
                addedCandidates.push(name);
            } else if (foundCandidate.yearsExperience < yearsExperience) {
                foundCandidate.yearsExperience = yearsExperience;
            }

        });

        return `You successfully added candidates: ${addedCandidates.join(', ')}.`

    }

    jobOffer(chosenPerson) {
        let [name, minExperience] = chosenPerson.split('-');

        let foundCandidate = this.jobCandidates.find(c => c.name === name);
        if (!foundCandidate) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if (Number(foundCandidate.yearsExperience) < Number(minExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExperience} years.`)
        }

        foundCandidate.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`

    }

    salaryBonus(name) {
        let foundCandidate = this.jobCandidates.find(c => c.name === name);
        if (!foundCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (foundCandidate.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (foundCandidate.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if (!this.jobCandidates.length) {
            throw new Error('Candidate Database is empty!');
        }

        let result = `Candidates list:\n`;
        let sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        result += sortedCandidates.map(({ name, education, yearsExperience }) => `${name}-${yearsExperience}`).join('\n');

        return result;
    }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());