// //Object property initializer shorthand
// function createMachine(name, status) {
//     return {
//         name: name,
//         status: status
//     };
// }

// //by using create method
// function createMachine(name, status) {
//     return {
//         name,
//         status
//     };
// }

// // from local variables
// let name1 = 'Computer',
//     status1 = 'On';

// let machine = {
//    name1,
//    status1
// };

// //computed property name
// let name = 'machine name';
// let machine = {
//     [name]: 'server',
//     'machine hours': 10000
// };

// console.log(machine[name]); // server
// console.log(machine['machine hours']); // 10000

// //inside the [] 
// let prefix = 'machine';
// let machine = {
//     [prefix + ' name']: 'server',
//     [prefix + ' hours']: 10000
// };

// console.log(machine['machine name']); // server
// console.log(machine['machine hours']); // 10000

// // concise method syntax
// let server = {
// 	name: "Server",
// 	restart: function () {
// 		console.log("The" + this.name + " is restarting...");
// 	}
// };

// //using ES syntax
// let server = {
//     name: 'Server',
//     restart() {
//         console.log("The" + this.name + " is restarting...");
//     }
// };


// //alternate
// let server = {
//     name: 'Server',
//     restart() {
//         console.log("The " + this.name + " is restarting...");
//     },
//     'starting up'() {
//         console.log("The " +  this.name + " is starting up!");
//     }
// };

// server['starting up']();