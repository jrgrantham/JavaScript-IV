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

class Instructors extends Person {
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

class Students extends Person {
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

class ProjectManagers extends Instructors {
    constructor (name, age, location, gradClassName, favInstructor) {
        super (name, age, location);
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

let James = new student ('James', 40, 'Aberdeen', 'Oil and Gas', 'WEBEU3', 'test');
