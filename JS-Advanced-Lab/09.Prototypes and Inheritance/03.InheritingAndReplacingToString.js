function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}
let classes = toStringExtension();
let person = classes.Person;
let teacher = classes.Teacher;
let student = classes.Student;
let t = new teacher("Ivan",'ivan@ivan.com',"Graphics");

console.log(t.toString())

