const p1 = {
    name: 'David',
    age: 27,
    zip: 90001
};

console.log(JSON.stringify(p1)); // {"name":"David","age":27,"zip":90001}
console.log(JSON.stringify(p1, null, '  '));
/*
{
  "name": "David",
  "age": 27,
  "zip": 90001
}
 */
console.log(JSON.stringify(p1, ['name', 'age'], '  '));
/*
{
  "name": "David",
  "age": 27
}
 */

function strToUpper(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

console.log(JSON.stringify(p1, strToUpper)); // {"name":"DAVID","age":27,"zip":90001}

const p2 = {
    name: 'Zach',
    age: 27,
    zip: 90009,
    toJSON: function () {
        return {
            'NAME': this.name,
            'AGE': this.age
        };
    }
};

console.log(JSON.stringify(p2)); // {"NAME":"Zach","AGE":27}

console.log(JSON.parse('[1,2,3,4,true]')); // [ 1, 2, 3, 4, true ]
console.log(JSON.parse('{"name":"David","age":27}')); // { name: 'David', age: 27 }

const p3 = JSON.parse('{"name":"David","age":27}', function (key, value) {
    if (key === 'name') {
        return value.toUpperCase();
    }
    return value;
});

console.log(p3); // { name: 'DAVID', age: 27 }
