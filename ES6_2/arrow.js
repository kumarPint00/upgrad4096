// function expression
let x = function(x, y) {
    return x * y;
 }

 // using arrow functions
let x = (x, y) => x * y;

//Arrow Function Syntax
let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}

// If the body has single statement or expression, you can write arrow function as:

let myFunction = (arg1, arg2, ...argN) => expression


//Example 1: Arrow Function with No Argument
let greet = () => console.log('Hello');
greet(); // Hello

//Example 2: Arrow Function with One Argument
let greet = x => console.log(x);
greet('Hello'); // Hello 

//Example 3: Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

//Example 4: Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12

//this with Arrow Function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();

//Inside an arrow function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();


//Arguments Binding

let x = function () {
    console.log(arguments);
}
x(4,6,7);

//When you try to access an argument using the arrow function, it will give an error. For example
let x = () => {
    console.log(arguments);
}

x(4,6,7);

//To solve this issue, you can use the spread syntax. For example,
let x = (...n) => {
    console.log(n);
}

x(4,6,7);

//Arrow Function with Promises and Callbacks
// ES5
asyncFunction().then(function() {
    return asyncFunction1();
}).then(function() {
    return asyncFunction2();
}).then(function() {
    finish;
});

// ES6
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish);

//Things You Should Avoid With Arrow Functions
//////1. You should not use arrow functions to create methods inside objects.

let person = {
    name: 'Jack',
    age: 25,
    sayName: () => {

        // this refers to the global .....
        //
        console.log(this.age);
    }
}

person.sayName(); // undefined

///2. You cannot use an arrow function as a constructor.
let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor































const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));


  //
  // Traditional anonymous function
(function (a) {
    return a + 100;
  });
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  };
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the parameter parentheses
  a => a + 100;

  // Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  (a, b) => a + b + 100;
  
  const a = 4;
  const b = 2;
  
  // Traditional anonymous function (no parameters)
  (function() {
    return a + b + 100;
  });
  
  // Arrow function (no arguments)
  () => a + b + 100;


// Arrow functions cannot guess what or when you want to return.
// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
  });
  
  // Arrow function
  (a, b) => {
    const chuck = 42;
    return a + b + chuck;
  };
// /Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable so it has a name.
// Traditional Function
function bob(a) {
    return a + 100;
  }
  
  // Arrow Function
  const bob2 = (a) => a + 100;

  
// /Function body
const func = (x) => x * x;
// concise body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed


// /Cannot be used as methods
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }












///Arrow function properties are often said to be "auto-bound methods", because the equivalent with normal methods is:

class C {
    a = 1;
    constructor() {
      this.method = this.method.bind(this);
    }
    method() {
      console.log(this.a);
    }
  }

  ///No binding of arguments
  const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); // 1

function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6

// /using rest parameters
function foo(n) {
    const f = (...args) => args[0] + n;
    return f(10);
  }
  
  foo(1); // 11

//   /Cannot be used as constructors
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false


/**
 * Cannot be used as generators
The yield keyword cannot be used in an arrow function's body (except when used within generator functions further nested within the arrow function). As a consequence, arrow functions cannot be used as generators.
 */

// /Line break before arrow
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'


// / line breaks between parameters.
const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c,
) => 1;



/**
 * Precedence of arrow
Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact differently with operator precedence compared to regular functions.
 */
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments


///more examples
// An empty arrow function returns undefined
const empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

const max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
  // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);


// /Using call, bind, and apply
const obj = {
    num: 100,
  };
  
  // Setting "num" on globalThis to show how it is NOT used.
  globalThis.num = 42;
  
  // A simple traditional function to operate on "this"
  const add = function (a, b, c) {
    return this.num + a + b + c;
  };
  
  console.log(add.call(obj, 1, 2, 3)); // 106
  console.log(add.apply(obj, [1, 2, 3])); // 106
  const boundAdd = add.bind(obj);
  console.log(boundAdd(1, 2, 3)); // 106
// With arrow functions, since our add function is essentially created on the globalThis (global) scope, it will assume this is the globalThis.
const obj = {
    num: 100,
  };
  
  // Setting "num" on globalThis to show how it gets picked up.
  globalThis.num = 42;
  
  // Arrow function
  const add = (a, b, c) => this.num + a + b + c;
  
  console.log(add.call(obj, 1, 2, 3)); // 48
  console.log(add.apply(obj, [1, 2, 3])); // 48
  const boundAdd = add.bind(obj);
  console.log(boundAdd(1, 2, 3)); // 48

  

  ///With traditional function expressions, code like this does not work as expected:

  const obj = {
    count: 10,
    doSomethingLater() {
      setTimeout(function () { // the function executes on the window scope
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
  obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.

//   /With arrow functions, the this scope is more easily preserved:
const obj = {
    count: 10,
    doSomethingLater() {
      // The method syntax binds "this" to the "obj" context.
      setTimeout(() => {
        // Since the arrow function doesn't have its own binding and
        // setTimeout (as a function call) doesn't create a binding
        // itself, the "obj" context of the outer method is used.
        this.count++;
        console.log(this.count);
      }, 300);
    },
  };
  
  obj.doSomethingLater(); // logs 11
  