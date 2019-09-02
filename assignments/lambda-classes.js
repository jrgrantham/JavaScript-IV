// CODE here for your Lambda Classes

// ------------- Person -------------

class Person {
    // constructor (name, age, location) {
    //     this.name = name;
    //     this.age = age;
    //     this.location = location;
    constructor (data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// let testPerson = new Person ('testPerson', 5, 'Imagination Land');
let testPerson = new Person ({
    name: 'testPerson',
    age: 5,
    location: 'Imagination Land'
});
testPerson.speak();

// ------------- Student -------------

class Student extends Person {
    // constructor (name, age, location, previousBackground, className, favSubjects) {
    //     super (name, age, location);
    //     this.previousBackground = previousBackground;
    //     this.className = className;
    //     this.favSubjects = favSubjects;
    //     this.grade = 0;
    // }
    constructor (data) {
        super (data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
        this.grade = 0;
    }
    listsSubjects() {
        const name = this.name;
        this.favSubjects.forEach(function(subject) {
            console.log(`${name} is studing ${subject}`);
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
            console.log(`${this.grade}: ${this.name} passes with flying colours!`);
            return `${this.grade}: ${this.name} passes with flying colours!`;
        } else {
            console.log(`${this.grade}: ${this.name} does not graduate - must try harder!`);
            return `${this.grade}: ${this.name} does not graduate - must try harder!`;
        }
    }
}

// let james = new Student ('James', 40, 'Aberdeen', 'Oil and Gas', 'WEBEU3', ['maths', 'physics', 'JS']);
let james = new Student ({
    name: 'James',
    age: 40,
    location: 'Aberdeen',
    previousBackground: 'Oil and Gas',
    className: 'WEBEU3',
    favSubjects: ['maths', 'physics', 'JS']
});
james.speak();
james.listsSubjects();
james.PRAssignments('test1');
james.sprintChallenge('test2');

// ------------- Instructor -------------

class Instructor extends Person {
    // constructor (name, age, location, speciality, favLanguage, catchphrase) {
    //     super (name, age, location);
    //     this.speciality = speciality;
    //     this.favLanguage = favLanguage;
    //     this.catchphrase = catchphrase;
    // }
    constructor (data) {
        super (data);
        this.speciality = data.speciality;
        this.favLanguage = data.favLanguage;
        this.catchphrase = data.catchphrase;
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
        return student.grade = Math.floor(Math.random() * 100);
    }
}

// let isaac = new Instructor ('Isaac', 55, 'Ireland', 'cooking', 'JS!', 'one, two, TREE');
let isaac = new Instructor ({
    name: 'Isaac',
    age: 55,
    location: 'Ireland',
    speciality: 'cooking',
    favLanguage: 'JS!',
    catchphrase: 'one, two, TREE'
});

isaac.speak();
isaac.demo('frying');
isaac.grade(james, 'JS');
console.log(`${isaac.name} says "${isaac.catchphrase}"`)

isaac.gradeStudent(james); // refresh page to regenerate
james.graduate();

// ------------- Project Manager ------------- 

// refactored into object (data) without saving original (enough examples)

class ProjectManager extends Instructor {
    constructor (data) {
        super (data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

let isaacsBoss = new ProjectManager ({
    name: 'Tony',
    age: 16,
    location: 'London',
    speciality: 'dancing',
    favLanguage: 'French',
    catchphrase: 'Whoop whoop',
    gradClassName: 'WEBEU3',
    favInstructor: 'Isaac',
});
isaacsBoss.standUp('WEBEU3');
isaacsBoss.debugsCode(james, 'JS');