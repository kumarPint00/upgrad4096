// //Syntax
// /**
//  * `string text`

// `string text line 1
//  string text line 2`

// `string text ${expression} string text`

// tagFunction`string text ${expression} string text`
//  */
// `\`` === "`"; // true

// `\${1}` === "${1}"; // true

// //normal multiline string
// console.log("string text line 1\n" + "string text line 2");
// // using the + operator

// //normal
// const message1 = 'This is a long message\n' + 
// 'that spans across multiple lines\n' + 
// 'in the code.'

// console.log(message1)

// // using template
// const message1 = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message1)
// // "string text line 1
// // string text line 2"

// //using template litrals
// console.log(`string text line 1
// string text line 2`);
// // "string text line 1
// // string text line 2"
// const name = 'Jack';
// console.log(`Hello ${name}!`); // Hello Jack!
// const str1 = 'This is a string';

// // cannot use the same quotes
// const str2 = 'A "quote" inside a string';  // valid code
// const str3 = 'A 'quote' inside a string';  // Error

// const str4 = "Another 'quote' inside a string"; // valid code
// const str5 = "Another "quote" inside a string"; // Error
// // escape characters using \
// const str3 = 'A \'quote\' inside a string';  // valid code
// const str5 = "Another \"quote\" inside a string"; // valid code

// const str1 = `This is a string`;
// const str2 = `This is a string with a 'quote' in it`;
// const str3 = `This is a string with a "double quote" in it`;



// //string interpolation
// const a = 5;
// const b = 10;
// console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// // "Fifteen is 15 and
// // not 20."

// //using template
// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);
// // "Fifteen is 15 and
// // not 20."

// // another

// const name = 'Jack';
// console.log(`Hello ${name}`); 

// const result = 4 + 5;

// // template literals used with expressions
// console.log(`The sum of 4 + 5 is ${result}`);

// console.log(`${result < 10 ? 'Too low': 'Very high'}`)


// //Tagged templates: Tags allow you to parse template literals with a function.

// const person = "Mike";
// const age = 28;

// function myTag(strings, personExp, ageExp) {
//   const str0 = strings[0]; // "That "
//   const str1 = strings[1]; // " is a "
//   const str2 = strings[2]; // "."

//   const ageStr = ageExp > 99 ? "centenarian" : "youngster";

//   // We can even return a string built using a template literal
//   return `${str0}${personExp}${str1}${ageStr}${str2}`;
// }

// const output = myTag`That ${person} is a ${age}.`;

// console.log(output);
// // That Mike is a youngster.

// console.log`Hello`; // [ 'Hello' ]
// console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
// new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

// function recursive(strings, ...values) {
//   console.log(strings, values);
//   return recursive;
// }
// recursive`Hello``World`;

// //The only exception is optional chaining, which will throw a syntax error.

// console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
// console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain
// // Still a syntax error
// const a = console?.log
// `Hello`

// //Tag functions don't even need to return a string!
// function template(strings, ...keys) {
//     return (...values) => {
//       const dict = values[values.length - 1] || {};
//       const result = [strings[0]];
//       keys.forEach((key, i) => {
//         const value = Number.isInteger(key) ? values[key] : dict[key];
//         result.push(value, strings[i + 1]);
//       });
//       return result.join("");
//     };
//   }
  
//   const t1Closure = template`${0}${1}${0}!`;
//   // const t1Closure = template(["","","","!"],0,1,0);
//   t1Closure("Y", "A"); // "YAY!"
  
//   const t2Closure = template`${0} ${"foo"}!`;
//   // const t2Closure = template([""," ","!"],0,"foo");
//   t2Closure("Hello", { foo: "World" }); // "Hello World!"
  
//   const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
//   // const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
//   t3Closure("foo", { name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."
//   t3Closure({ name: "MDN", age: 30 }); // "I'm MDN. I'm almost 30 years old."

//   //another 
//   const callHistory = [];

// function tag(strings, ...values) {
//   callHistory.push(strings);
//   // Return a freshly made object
//   return {};
// }

// function evaluateLiteral() {
//   return tag`Hello, ${"world"}!`;
// }

// console.log(evaluateLiteral() === evaluateLiteral()); // false; each time `tag` is called, it returns a new object
// console.log(callHistory[0] === callHistory[1]); // true; all evaluations of the same tagged literal would pass in the same strings array

// //Raw strings

// function tag(strings) {
//     console.log(strings.raw[0]);
//   }
  
//   tag`string text line 1 \n string text line 2`;
//   // Logs "string text line 1 \n string text line 2" ,
//   // including the two characters '\' and 'n'

//   //using string.raw() method
//   const str = String.raw`Hi\n${2 + 3}!`;
// // "Hi\\n5!"

// str.length;
// // 6

// Array.from(str).join(",");
// // "H,i,\\,n,5,!"

// const identity = (strings, ...values) =>
//   String.raw({ raw: strings }, ...values);
// console.log(identity`Hi\n${2 + 3}!`);
// // Hi
// // 5!

// //tagged template
// function tagExample(strings) {
//     return strings;
// }

// // creating tagged template
// const result = tagExample`Hello Jack`;

// console.log(result);

// // another
// const name = 'Jack';
// const greet = true;

// function tagExample(strings, nameValue) {
//     let str0 = strings[0]; // Hello
//     let str1 = strings[1]; // , How are you?

//     if(greet) {
//         return `${str0}${nameValue}${str1}`;
//     }
// }

// // creating tagged literal
// // passing argument name
// const result = tagExample`Hello ${name}, How are you?`;

// console.log(result);