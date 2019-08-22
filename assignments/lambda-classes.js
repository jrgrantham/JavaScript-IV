// CODE here for your Lambda Classes

// ------------- Person -------------

class Person {
    constructor (name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

let testPerson = new Person ('Amy', 5, 'Hull');
testPerson.speak();

// ------------- Student -------------

class Student extends Person {
    constructor (name, age, location, previousBackground, className, favSubjects, grade) {
        super (name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        })
        return this.favSubjects;
    }
    PRAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} passes with flying colours!`)
        } else {
            console.log(`${this.name} must try harder!`)
        }
    }
}

let james = new Student ('James', 40, 'Aberdeen', 'Oil and Gas', 'WEBEU3', ['maths', 'physics', 'JS']);
james.speak();
james.listsSubjects();
james.PRAssignments('test1');
james.sprintChallenge('test2');

// ------------- Instructor -------------

class Instructor extends Person {
    constructor (name, age, location, speciality, favLanguage, catchphrase) {
        super (name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchphrase = catchphrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}'.`);
        return `Today we are learning about ${subject}'.`;
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeStudent(student) {
        return student.grade = Math.floor(Math.random() * 100)
    }
}

let isaac = new Instructor ('Isaac', 55, 'Ireland', 'cooking', 'JS!', 'one, two, TREE');
isaac.speak();
isaac.demo('frying');
isaac.grade(james, 'JS');

// ------------- Project Manager -------------

class ProjectManager extends Instructor {
    constructor (name, age, location, speciality, favLanguage, catchphrase, gradClassName, favInstructor) {
        super (name, age, location, speciality, favLanguage, catchphrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) {
        console.log()
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

let isaacsBoss = new ProjectManager ('Tony', 16, 'London', 'dancing', 'French', 'Whoop whoop', 'WEBEU3', 'Isaac');