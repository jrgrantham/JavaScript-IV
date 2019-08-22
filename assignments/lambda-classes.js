// CODE here for your Lambda Classes

class Person {
    constructor (name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor (name, age, location, speciality, favLanguage, catchphrase) {
        super (name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchphrase = catchphrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}'.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor (name, age, location, previousBackground, className, favSubjects) {
        super (name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects() {
        return this.favSubjects; // need listing one by one
    }
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor (name, age, location, speciality, favLanguage, catchphrase, gradClassName, favInstructor) {
        super (name, age, location, speciality, favLanguage, catchphrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

let james = new Student ('James', 40, 'Aberdeen', 'Oil and Gas', 'WEBEU3', ['maths', 'physics', 'JS']);
let isaac = new Instructor ('Isaac', 55, 'Ireland', 'cooking', 'JS!', 'one, two, TREE');
let isaacsBoss = new ProjectManager ('Tony', 16, 'London', 'dancing', 'French', 'Whoop whoop', 'WEBEU3', 'Isaac');

console.log(james.speak());
console.log(james.favSubjects);
