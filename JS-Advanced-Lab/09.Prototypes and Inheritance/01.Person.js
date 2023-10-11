function createPerson(firstName, lastName) {
    let person = {
        firstName,
        lastName,
    }

    Object.defineProperty(person, "fullName", {
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },
        set: function (value) {
            let [name, sureName] = value.split(' ');
            this.firstName = name;
            this.lastName = sureName;
        },
    }
  );
  return person
}
let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla