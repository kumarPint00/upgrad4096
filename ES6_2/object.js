// object
const student = {
    firstName: 'ram',
    class: 10
};

// The syntax to declare an object is:

const object_name = {
   key1: value1,
   key2: value2
}

// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person);

/// Accessing Object Properties
// 1. Using dot Notation
const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person.name);

///2. Using bracket Notation
const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person["name"]);

// JavaScript Nested Objects
// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

// JavaScript Object Methods
const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person.greet();

// Functions are First-Class Objects
function message() {
    console.log("Greetings Linda!");
}

console.log(typeof message);               // => function
console.log(message instanceof Object);    // => true

var body = "return Math.PI * radius * radius";
var circle = new Function("radius", body);

console.log(circle(5));          // => 78.5398..


function Book(type, author) {
    this.type = type;
    this.author = author;
    this.getDetails = function () {
        return this.type + " written by " + this.author;
    }
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails());        // => Fiction written by Peter King


var circle = {
    radius: 10,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());                // => 314.15..
console.log(typeof circle.area);           // => function


function negate(f) {
    return function (i) {
        return !f(i);
    };
}

var isNumber = negate(isNaN);  // function object

console.log(isNumber(5));            // => true
console.log(isNumber(NaN));          // => false
console.log(isNumber("A"));          // => false


var isPrime = function (number) {     // determines if number is prime
    var divisor = parseInt(number / 2, 10);
    var prime = true;
    while (divisor > 1) {
        if (number % divisor === 0) {
            prime = false;
            divisor = 0;
        } else {
            divisor -= 1;
        }
    }
    return prime === true;
};

function negate(f) {
    return function (i) {
        return !f(i);
    };
}

var isComposite = negate(isPrime);       // function object

console.log([2, 4].every(isComposite));  // => false (2 is prime, 4 is not)
console.log([4, 6].every(isComposite));  // => true (4 or 6 are composite)



// Function Copied by Reference

function original() {
    // ...
}

original.message = "Hello";
var copy = original;

console.log(original.message);         // => Hello
console.log(copy.message);             // => Hello

copy.message = "Greetings";

console.log(original.message);         // => Greetings
console.log(copy.message);             // => Greetings


function original() {
    console.log("I am Original");
}
var copy = original;

original();                  // => I am Original
copy();                      // => I am Original

original = function () {     // Modify the original code
    console.log("I am Altered");
};

original();                  // => I am Altered
copy();                      // => I am Original


// Passing a function as a Callback





















//Object.create()
//The Object.create() method is used to create a new object and link it to the prototype of an existing object.

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

///Object.keys()

///Object.keys() creates an array containing the keys of an object.


// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

	 console.log(`${key}: ${value}`);
});

// Get the length of the keys
const length = Object.keys(employees).length;

console.log(length);

/**
 * Object.values()
 * Object.values() creates an array containing the values of an object.
 */
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);


/**
 * Object.entries()
Object.entries() creates a nested array of the key/value pairs of an object.
 */

// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

//Once we have the key/value pair arrays, we can use the forEach() method to loop through and work with the results.
// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

/**
 * Object.assign()
Object.assign() is used to copy values from one object to another.

We can create two objects, and merge them with Object.assign().
 */
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

console.log(character);

///by using spread operator
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the object with the spread operator
const character = {...name, ...details}

console.log(character);
// This spread syntax in object literals is also known as shallow-cloning.

/**
 * Object.freeze()
Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.


 */
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
// Object.isFrozen() is available to determine whether an object has been frozen or not, and returns a Boolean.

/**
 * Object.seal()
Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties. This method is similar to Object.freeze(). Refresh your console before implementing the code below to avoid an error.

 */
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

/**
 * Object.getPrototypeOf()
Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.
 */
const employees = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees);