class Person {
    constructor(name) {
        this.name = name;
    }

    intro() {
        console.log('My name is ' + this.name + '.');
    }
}

const p1 = new Person('David');
p1.intro(); // My name is David.

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    intro() {
        console.log('Name: ' + this.name + ', grade: ' + this.grade + '.');
    }
}

const p2 = new Student('David', 99);
p2.intro(); // Name: David, grade: 99.