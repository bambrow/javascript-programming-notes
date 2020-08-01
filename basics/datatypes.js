console.log(false == 0); // true
console.log(false === 0); // false

console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

console.log(1 / 3 === (1 - 2 / 3)); // false

const [x1, x2] = ['A', 'B'];
console.log('x1 = ' + x1); // x1 = A
console.log('x2 = ' + x2); // x2 = B
const [, , y1] = ['A', 'B', 'C'];
console.log('y1 = ' + y1); // y1 = C

const arr = [1, 2.2, 'abc', null, true];
console.log(arr[0]); // 1
console.log(arr); // [ 1, 2.2, 'abc', null, true ]

const address = {
    state: 'CA',
    city: 'Los Angeles',
    tags: ['t1', 't2'],
    zip: 90009
};
console.log(address.city); // Los Angeles
console.log(address); // { state: 'CA', city: 'Los Angeles', tags: [ 't1', 't2' ], zip: 90009 }
const {state, city} = address;
console.log(state); // CA
console.log(city); // Los Angeles
const {zip:zip2} = address;
console.log(zip2); // 90009
const {missing=true} = address;
console.log(missing); // true

const address2 = {
    addr: {
        state: 'CA',
        city: 'Los Angeles'
    }
};
const {addr: {state:state2, city:city2}} = address2;
console.log(state2); // CA
console.log(city2); // Los Angeles

const str = `This is 
a multi line 
string`;
console.log(str);

const person = {
    name: 'David',
    age: 26
}
console.log(`Hello ${person.name}, you are ${person.age} years old.`);

const str2 = 'Hello world!';
console.log(str2[0]); // H
console.log(str2[str2.length]); // undefined
console.log(str2.toUpperCase());
console.log(str2.indexOf('world'));
console.log(str2.substring(0, 5));

const arr2 = [1, 2.2, 'abc', null, true];
arr2.length = 3;
console.log(arr2); // [ 1, 2.2, 'abc' ]

const arr3 = [1, 2];
arr3[5] = 5;
console.log(arr3); // [ 1, 2, <3 empty items>, 5 ]

let arr4 = arr;
console.log(arr4); // [ 1, 2.2, 'abc', null, true ]
console.log(arr4.indexOf('abc')); // 2
console.log(arr4.slice(1, 3)); // [ 2.2, 'abc' ]

console.log(arr4 === arr); // true
const arr5 = arr.slice();
console.log(arr5 === arr); // false

arr4 = [];
arr4.push('cde', 5.5);
console.log(arr4); // [ 'cde', 5.5 ]
arr4.pop(); arr4.pop();
console.log(arr4); // []
arr4.unshift(0, 'a');
console.log(arr4); // [ 0, 'a' ]
arr4.shift(); arr4.shift();
console.log(arr4); // []

arr4 = [1, -1, 'abc', 'a'];
arr4.sort();
console.log(arr4); // [ -1, 1, 'a', 'abc' ]
arr4.reverse();
console.log(arr4); // [ 'abc', 'a', 1, -1 ]

const arr6 = [1, 2, 3, 4]
arr6.splice(2, 2, 'a', 'b');
console.log(arr6); // [ 1, 2, 'a', 'b' ]
arr6.splice(1, 2);
console.log(arr6); // [ 1, 'b' ]
arr6.splice(1, 0, 'c', 'd');
console.log(arr6); // [ 1, 'c', 'd', 'b' ]

console.log([1, 3].concat([2, 4])); // [ 1, 3, 2, 4 ]
console.log([1, 2, 3].join('-')); // 1-2-3

const p2 = person;
p2.name = 'Zach';
console.log(p2); // { name: 'Zach', age: 26 }
p2.zipcode = 90001;
console.log(p2); // { name: 'Zach', age: 26, zipcode: 90001 }
delete p2.zipcode;
p2['zip-code'] = 90001;
console.log(p2); // { name: 'Zach', age: 26, 'zip-code': 90001 }
delete p2['zip-code'];
console.log('name' in p2); // true
console.log('zip-code' in p2); // false
console.log('toString' in p2); // true
console.log(p2.hasOwnProperty('toString')); // false

const map = new Map([['David', 26]]);
console.log(map.get('David')); // 26
map.set('Zach', 27);
console.log(map); // Map(2) { 'David' => 26, 'Zach' => 27 }
console.log(map.has('David')); // true
map.delete('Zach');

const set = new Set([1, 2, 3]);
set.add(4);
set.delete(3);
console.log(set); // Set(3) { 1, 2, 4 }
