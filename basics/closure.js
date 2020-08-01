function lazySum(arr) {
    return function() {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
}

const f1 = lazySum([1, 2, 3, 4, 5]);
console.log(f1); // [Function (anonymous)]
console.log(f1()); // 15

function c1() {
    const arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

let [x1, x2, x3] = c1();
console.log('x1() = ' + x1());
console.log('x2() = ' + x2());
console.log('x3() = ' + x3());
/*
x1() = 16
x2() = 16
x3() = 16
 */

function c2() {
    const arr = [];
    for (let i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

[x1, x2, x3] = c2();
console.log('x1() = ' + x1());
console.log('x2() = ' + x2());
console.log('x3() = ' + x3());
/*
x1() = 1
x2() = 4
x3() = 9
 */

function createCounter(x) {
    let y = x || 0;
    return {
        increment: function () {
            y += 1;
            return y;
        }
    }
}

const counter1 = createCounter();
console.log(counter1.increment()); // 1
const counter2 = createCounter(10);
console.log(counter2.increment()); // 11

function createPow(k) {
    return function (x) {
        return Math.pow(x, k);
    }
}

console.log(createPow(2)(5)); // 25
console.log(createPow(3)(2)); // 8
