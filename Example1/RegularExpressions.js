

// Constructor Example
//new RegExp('pattern', 'flags');

// 
// /pattern/flags 

// Flags
// i
// g
// m




// Search
/* const ans = prompt('Type your name');

const reg = /n/i;
//const reg = /n/ig;
console.log(ans.search(reg));  */



// Match 
/* const ans = prompt('Type your name');

const reg = /n/ig;
console.log(ans.match(reg)); */



// Replace
/* const pass = prompt('Password');
console.log(pass.replace(/./g, "*"));
console.log(pass.replace(/\./g, "*")); */
//console.log('12-34-56'.replace(/-/g, ""));
//console.log('12-34-56'.replace(/-/g, ":"));



// Test
/* const reg = /n/ig;
console.log(reg.test('Ann'));
console.log(reg.test('ANN'));
console.log(reg.test('A')); */


// Classes
// \d - digits
// \w - words/letters
// \s - spaces

/* const reg = /\d/g;
// console.log(reg.test('123'));
// console.log(reg.test(123));
// console.log(reg.test('abc'));
// console.log(reg.test('abc123'));
console.log('abc'.match(reg));
console.log('123'.match(reg));
console.log('aaa1aaa'.match(reg)); */


// Certain Pattern
/* const str = 'My name is a1b2c3';
console.log(str.match(/\w\d\w\d\w\d/ig)); */


// Reverse Classes
const str = 'a 1 b 2 c 3';
console.log(str.match(/\D/g));
console.log(str.match(/\W/g));