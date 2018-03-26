
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their majos is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let location = super.getGreeting();

        if (this.hasLocation()) {
            location += ` I'm visiting from ${this.homeLocation}.`
        }

        return location;
    }
}

const me = new Student('Cristinel', 31, 'Computer Science');
console.log(me.getDescription());

const my = new Traveller('Cristinel', 31, 'Brasov');
console.log(my.getGreeting());


const other = new Student();
console.log(other.getGreeting());
