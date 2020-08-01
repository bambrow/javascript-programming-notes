const arr = [1, 1]

let i, j = arr.length - 1;
for (i = 0; ; i++) {
    if (i > 20) {
        break;
    }
    arr.push(arr[j] + arr[j-1]);
    j++;
}

console.log(arr);
/*
[
      1,     1,     2,    3,    5,
      8,    13,    21,   34,   55,
     89,   144,   233,  377,  610,
    987,  1597,  2584, 4181, 6765,
  10946, 17711, 28657
]
 */

const person = {
    name: 'David',
    age: 26,
    zipcode: 90001
};

for (const key in person) {
    console.log(key);
}
/*
name
age
zipcode
 */

const arr2 = ['a', 'b', 'c'];
for (const k in arr2) {
    console.log(k); // 0, 1, 2
    console.log(arr2[k]); // a, b, c
}

const arr3 = [1, 1]
i = j = 0;
while (i < 20) {
    j = (j+1) % 2;
    arr3[j] = arr3[j] + arr3[(j+1) % 2];
    i++;
}
console.log(arr3[j]); // 17711

const map = new Map([['A', 1], ['B', 2], ['C', 3]]);
for (const x of map) {
    console.log(x);
}
/*
[ 'A', 1 ]
[ 'B', 2 ]
[ 'C', 3 ]
 */
for (const x of map) {
    console.log(x[0] + '=' + x[1]);
}
/*
A=1
B=2
C=3
 */

const arr4 = [1, 2, 3];
arr4.something = ['A'];
for (const x in arr4) {
    console.log(x); // 0, 1, 2, something
}
for (const x of arr4) {
    console.log(x); // 0, 1, 2
}

arr4.forEach(function (element, index, array) {
    console.log(element + ', index = ' + index)
});
/*
1, index = 0
2, index = 1
3, index = 2
 */

const set = new Set([1, 2, 3]);
set.forEach(function (element, sameElement, set) {
    console.log(element); // 1, 2, 3
});

const map2 = new Map([['A', 1], ['B', 2], ['C', 3]]);
map2.forEach(function (value, key, map) {
   console.log('key = ' + key + ', value = ' + value)
});
/*
key = A, value = 1
key = B, value = 2
key = C, value = 3
 */