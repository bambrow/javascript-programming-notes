// function
function fibs(x) {
    if (x <= 1) {
        return 1;
    }
    let [a, b] = [0, 1];
    let i = 2;
    while (i <= x) {
        [a, b] = [b, a+b];
        i++;
    }
    return b;
}

console.log(fibs(20)); // 6765

// generator
function* fibs2(x) {
    if (x <= 1) {
        yield 1;
    } else {
        let [a, b] = [0, 1];
        let i = 0;
        while (i < x) {
            yield b;
            [a, b] = [b, a+b];
            i++;
        }
    }
}

const f1 = fibs2(5);
console.log(f1); // Object [Generator] {}

for (let i = 0; i < 6; i++) {
    console.log(f1.next());
}
/*
{ value: 1, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 5, done: false }
{ value: undefined, done: true }
 */

for (const x of fibs2(10)) {
    console.log(x);
}
/*
1
1
2
3
5
8
13
21
34
55
 */