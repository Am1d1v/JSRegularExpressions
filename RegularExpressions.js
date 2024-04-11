

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
const pass = prompt('Password');
console.log(pass.replace(/./g, "*"));
console.log(pass.replace(/\./g, "*"));