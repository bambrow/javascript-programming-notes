// not recommended
const Person = {
    name: 'Random',
    age: 99,
    intro: function () {
        console.log('My name is ' + this.name + ', and I am ' + this.age + ' years old.');
    }
};

function createPerson(name, age) {
    const p = Object.create(Person);
    p.name = name ? name : Person.name;
    p.age = age ? age : Person.age;
    return p;
}

const p1 = createPerson('David', 27);
p1.intro(); // My name is David, and I am 27 years old.
const p11 = createPerson('David', 27);
console.log(p1.intro === p11.intro); // true

// not recommended
function Person2(name) {
    this.name = name;
    this.intro = function () {
        console.log('My name is ' + this.name + '.');
    }
}

const p2 = new Person2('David');
p2.intro(); // My name is David.
const p22 = new Person2('David');
console.log(p2.intro === p22.intro); // false

// recommended
function Person3(name) {
    this.name = name;
}
Person3.prototype.intro = function () {
    console.log('My name is ' + this.name + '.');
};

const p3 = new Person3('David');
p3.intro(); // My name is David.
const p33 = new Person3('David');
console.log(p3.intro === p33.intro); // true

// recommended
function Person4(props) {
    this.name = props.name || 'Random';
}
Person4.prototype.intro = function () {
    console.log('My name is ' + this.name + '.');
};
function createPerson4(props) {
    return new Person4(props);
}

const p4 = createPerson4({
    name: 'David'
});
p4.intro(); // My name is David.
const p44 = createPerson4({
    name: 'David'
});
console.log(p4.intro === p44.intro); // true
