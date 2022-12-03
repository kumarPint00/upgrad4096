var msg = require('./message');

console.log(msg);

console.log(msg.SimpleMessage);

var msg = require('./Log.js');

msg.log('Hello World');


var person = require('./data.js');
console.log(person.firstName + ' ' + person.lastName);


var person = require('./Person.js');

var person1 = new person('James', 'Bond');

console.log(person1.fullName());