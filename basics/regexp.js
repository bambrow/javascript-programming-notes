const re1 = /^\d{3}-\d{3,8}$/;
console.log(re1.test('123-12345')); // true
console.log(re1.test('123-1234x')); // false

console.log('1  2  3  4'.split(' '));
/*
[
  '1', '', '2', '',
  '3', '', '4'
]
 */
console.log('1  2  3  4'.split(/\s+/)); // [ '1', '2', '3', '4' ]
console.log('1,2 3,4'.split(/[\s,]+/)); // [ '1', '2', '3', '4' ]

const re2 = /^(\d{3})-(\d{3,8})$/;
console.log(re2.exec('123-12345'));
/*
[
  '123-12345',
  '123',
  '12345',
  index: 0,
  input: '123-12345',
  groups: undefined
]
 */
console.log(re2.exec('123-1234x')); // null

const re3 = /^(\d+)(0*)$/;
console.log(re3.exec('123400'));
/*
[
  '123400',
  '123400',
  '',
  index: 0,
  input: '123400',
  groups: undefined
]
 */

const re4 = /^(\d+?)(0*)$/;
console.log(re4.exec('123400'));
/*
[
  '123400',
  '1234',
  '00',
  index: 0,
  input: '123400',
  groups: undefined
]
 */

const re5 = /\d+/g;
const str = '123A234B345C456';
console.log(re5.exec(str));
// [ '123', index: 0, input: '123A234B345C456', groups: undefined ]
console.log(re5.lastIndex); // 3
console.log(re5.exec(str));
// [ '234', index: 4, input: '123A234B345C456', groups: undefined ]
console.log(re5.lastIndex); // 7
console.log(re5.exec(str));
// [ '345', index: 8, input: '123A234B345C456', groups: undefined ]
console.log(re5.lastIndex); // 11
console.log(re5.exec(str));
// [ '456', index: 12, input: '123A234B345C456', groups: undefined ]
console.log(re5.lastIndex); // 15
console.log(re5.exec(str)); // null
console.log(re5.lastIndex); // 0