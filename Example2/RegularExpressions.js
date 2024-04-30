

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
/* let str = document.querySelector('a').textContent;
let reg = /\d/g;
let number = str.match(reg).join('');
document.querySelector('a').setAttribute('href', `tel:+${number}`);
 */


/* 
// Show all digits
const digits = 'lorem 1234567890 lorem lorem';
console.log(digits.match(/\d/g));

// Show all spaces
const spaces = 'lorem 1234567890 lorem lorem';
console.log(spaces.match(/\s/g));

// Show all words
const words = 'lorem 1234567890 lorem lorem _ _ lorem';
console.log(words.match(/\w/g));

// Show all  but digits
const Digits = 'lorem 1234567890 lorem lorem _ _ lorem';
console.log(Digits.match(/\D/g));
 */


// Strings start/end
/* console.log(/^Hello/.test('Hello World'));
console.log(/^A/.test('Hello World'));

console.log(/World$/.test('Hello World'));
console.log(/World$/.test('Hello A')); */

// Template
// const reg = /\d\d:\d\d/;
// const str = '10:10';
// console.log(reg.test(str));

// const res = prompt('Enter Time');
// const reg = /\d\d:\d\d/;
// console.log(reg.test(res));



// Multiple Strings
/* const str = `1. First string
        2. Second string
    3. Third string`;
    
console.log(str.match(/\d/m));
console.log(str.match(/\d/gm)); */


// Borders
/* console.log('Hello World'.match(/\bWorld\b/g));
console.log('Hello DWorld'.match(/\bWorld\b/g));
console.log('Hello 123 234 345 456'.match(/\b\d\d\d\b/));
 */


// Symbols
/* console.log('6.2'.match(/\d.\d/g));
console.log('652'.match(/\d\.\d/g));
console.log('/'.match(/\//)); */



// Set
console.log("12 23 34 45 55 15 65".match(/[16]5/g));

// Range
console.log("12 23 34 45 55 15 65".match(/[1-6]5/g));


