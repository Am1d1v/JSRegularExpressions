

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

const reg = /\d/;
// console.log(reg.test('123'));
// console.log(reg.test(123));
// console.log(reg.test('abc'));
// console.log(reg.test('abc123'));