// // Object.is()
// // /**
// //  * Syntax
// // Object.is(value1, value2)
// // Object.is() determines whether two values are the same value. Two values are the same if one of the following holds:

// // both undefined
// // both null
// // both true or both false
// // both strings of the same length with the same characters in the same order
// // both the same object (meaning both values reference the same object in memory)
// // both BigInts with the same numeric value
// // both symbols that reference the same symbol value
// // both numbers and
// // both +0
// // both -0
// // both NaN
// // or both non-zero, not NaN, and have the same value
// //  */

// // // Case 1: Evaluation result is the same as using ===
// Object.is(25, 25); // true
// Object.is("foo", "foo"); // true
// Object.is("foo", "bar"); // false
// Object.is(null, null); // true
// Object.is(undefined, undefined); // true
// Object.is(window, window); // true
// Object.is([], []); // false

// const foo = { a: 1 };
// const bar = { a: 1 };
// const sameFoo = foo;
// Object.is(foo, foo); // true
// Object.is(foo, bar); // false
// Object.is(foo, sameFoo); // true

// // // Case 2: Signed zero
// Object.is(0, -0); // false
// Object.is(+0, -0); // false
// Object.is(-0, -0); // true

// // // Case 3: NaN
// Object.is(NaN, 0 / 0); // true
// Object.is(NaN, Number.NaN); // true

// // // Objects with the same values
// console.log(Object.is("JavaScript", "JavaScript")); // true
// // // Objects with different values
// console.log(Object.is("JavaScript", "javascript")); // false

// console.log(Object.is([], [])); // false

// let obj1 = { a: 1 };
// let obj2 = { a: 1 };
// console.log(Object.is(obj1, obj1)); // true
// console.log(Object.is(obj1, obj2)); // false

// console.log(Object.is(null, null)); // true

// // // Special Cases
// console.log(Object.is(0, -0)); // false
// console.log(Object.is(-0, -0)); // true
// console.log(Object.is(NaN, 0 / 0)); // true



//other ways to clone data
// const person = {
//     name: 'John',
//     age: 21,
// }
// const person1 = person;
// console.log(person1); // {name: "John", age: 21}

// person1.name = 'Peter';
// console.log(person1.name); // Peter
// console.log(person.name); // Peter

//Clone the Object Using Object.assign()
// program to clone the object

// declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = Object.assign({}, person);

// console.log(clonePerson);

// // // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);

//Clone the Object Using Spread Syntax
// program to clone the object
// declaring object
// const person = {
//     name: 'John',
//     age: 21,
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);
// console.log(person.name);

//The spread syntax can be used to make a shallow person1 of an object. 
// const person = {
//     name: 'John',
//     age: 21,

//     // the inner objects will change in the shallow person1
//     marks: { math: 66, english: 73}
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson); // {name: "John", age: 21, marks: {…}}

// // changing the value of clonePerson
// clonePerson.marks.math = 100;

// console.log(clonePerson.marks.math); // 100
// console.log(person.marks.math); // 100

//Clone the Object Using JSON.parse()
// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);