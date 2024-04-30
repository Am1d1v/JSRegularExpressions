

// Match
/* let string = 'String, one more string';
console.log(string.match(/string/ig)); */


// Replace
/* let str = 'String, one more string, another stRing';
console.log(str.replace(/stRing/i, 'somethingnew'));
console.log(str.replace(/stRing/i, '$& New'));
 */


// Test
// let str = 'String, one more string, another stRing';
// console.log(/string/gi.test(str));



// Add brackets for tel
let str = document.querySelector('a').textContent;
let reg = /\d/g;
let number = str.match(reg).join('');
document.querySelector('a').setAttribute('href', `tel:+${number}`);
console.log(number);