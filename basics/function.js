function fibs(x) {
    if (x <= 2) {
        return 1;
    }
    const arr = [1, 1];
    let i = 2;
    let j = 0;
    while (i < x) {
        j = (j+1) % 2;
        arr[j] = arr[j] + arr[(j+1) % 2];
        i++;
    }
    return arr[j];
}

console.log(fibs(20)); // 6765
console.log(fibs(25, 'test', false, 'what?', null)); // 75025
console.log(fibs()); // 1

function foo(x) {
    console.log('x = ' + x);
    for (let i = 0; i < arguments.length; i++) {
        console.log('arg[' + i + '] = ' + arguments[i]);
    }
}

foo(1, 2, 3, 4, 5);
/*
x = 1
arg[0] = 1
arg[1] = 2
arg[2] = 3
arg[3] = 4
arg[4] = 5
 */

foo(); // x = undefined

function bar(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    for (let i = 0; i < rest.length; i++) {
        console.log('rest[' + i + '] = ' + rest[i]);
    }
}

bar(1, 2, 3, 4, 5);
/*
a = 1
b = 2
rest[0] = 3
rest[1] = 4
rest[2] = 5
 */

bar();
/*
a = undefined
b = undefined
 */

function createDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(createDate({ year: 2020, month: 7, day: 30 }));
// 2020-07-30T07:00:00.000Z

const p = {
    name: 'David',
    'birth-year': 1993,
    age: function() {
        let y = new Date().getFullYear();
        return y - this['birth-year'];
    }
};

console.log(p.age); // [Function: age]
console.log(p.age()); // 27

function getAge() {
    let y = new Date().getFullYear();
    return y - this['birth-year'];
}

const p2 = {
    name: 'Zach',
    'birth-year': 1992,
    age: getAge
};

console.log(p2.age()); // 28
console.log(getAge.apply(p2, [])); // 28

function addByFunc(x, y, f) {
    return f(x) + f(y);
}

console.log(addByFunc(-3, -2, Math.abs)); // 5

const arr = [1, 4, 9, 16];
console.log(arr.map(Math.sqrt)); // [ 1, 2, 3, 4 ]
console.log(arr.map(String)); // [ '1', '4', '9', '16' ]
console.log(arr.reduce(function (x, y) {
    return x + y;
})); // 30
console.log(arr.filter(function (x) {
    return x % 2 === 0;
})); // [ 4, 16 ]
arr.filter(function (element, index, self) {
    console.log('arr[' + index + '] = ' + element);
    return true;
});
/*
arr[0] = 1
arr[1] = 4
arr[2] = 9
arr[3] = 16
 */
arr.filter(function (element, index, self) {
    const filtered = element % 2 === 0;
    if (filtered) {
        console.log('arr[' + index + '] = ' + element);
    }
    return filtered;
});
/*
arr[1] = 4
arr[3] = 16
 */

console.log(arr.sort()); // [ 1, 16, 4, 9 ]
console.log(arr.sort(function (x, y) {
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
})); // [ 1, 4, 9, 16 ]

console.log(arr.every(function (x) {
    return x < 10;
})); // false
console.log(arr.find(function (x) {
    return x > 10;
})); // 16
console.log(arr.find(function (x) {
    return x > 20;
})); // undefined
console.log(arr.findIndex(function (x) {
    return x > 10;
})); // 3

arr.forEach(console.log);
/*
1 0 [ 1, 4, 9, 16 ]
4 1 [ 1, 4, 9, 16 ]
9 2 [ 1, 4, 9, 16 ]
16 3 [ 1, 4, 9, 16 ]
 */

const f1 = x => x * x;
console.log(f1(3)); // 9

const f2 = (x, y) => x * x + y * y;
console.log(f2(2, 3)); // 13

const f3 = () => 5;
console.log(f3()); // 5

const f4 = (x, ...rest) => {
    let sum = x;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log(f4(1, 3, 5, 7, 9)); // 25
