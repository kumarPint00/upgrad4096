// //Write a JavaScript program to extract the values at the specified indexes from a specified array?                                     
// var valueAtIndex1 = myValues[1];


// var valueAtIndex1 = myValues.at(1);

// /**
//  * Write a JavaScript program to extract out the values at the specified indexes from a specified array.

// Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
// Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
// Use Array.prototype.push() to re-populate it with only the pulled values.
// Use Array.prototype.push() to keep track of pulled values.
//  */
// const pull_at_Index = (arr, pullArr) => {
//     let removed = [];
//     let pulled = arr
//       .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
//       .filter((v, i) => !pullArr.includes(i));
//     arr.length = 0;
//     pulled.forEach(v => arr.push(v));
//     return removed;
//   };
//   let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//   console.log(pull_at_Index(arra1, [1, 3]));
//   let arra2 =  [1, 2, 3, 4, 5, 6, 7];
//   console.log(pull_at_Index(arra2, [4]));

//   // Extract Value Using map()

//   // program to extract value as an array from an array of objects

// function extractValue(arr, prop) {

//     // extract value from property
//     let extractedValue = arr.map(item => item[prop]);

//     return extractedValue;

// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extractValue(objArray, 'a');
// console.log(result);

// //Extract Value Using for Loop
// // program to extract value as an array from an array of objects

// function extractValue(arr, prop) {

//     let extractedValue = [];

//     for (let i=0; i < arr.length ; ++i) {

//         // extract value from property
//         extractedValue.push(arr[i][prop]);
//     }
//     return extractedValue;
// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extractValue(objArray, 'a');
// console.log(result);



// /**
//  * How to move specified number of elements to the end of an array in JavaScript ?
//  * 
//  * Approach 1:

// First, we will extract first X elements from the array into a new array arr1.
// Then extract the last (N-X) elements from the array into a new array arr2.
// Then concatenate arr1 after arr2 to get the resulting array.
//  */
// function moveElementsToEndOfArray(arr, x) {

// 	// arr is the input array
// 	// x is the no. of elements that
// 	// needs to be moved to end of
// 	// the array

// 	let n = arr.length;

// 	// if x is greater than length
// 	// of the array
// 	x = x % n;

// 	let first_x_elements = arr.slice(0, x);

// 	let remaining_elements = arr.slice(x, n);

// 	// Destructuring to create the desired array
// 	arr = [...remaining_elements, ...first_x_elements];

// 	console.log(arr);
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let k = 5;
// moveElementsToEndOfArray(arr, k);


// /**
//  * Get the last element of an array using JavaScript
//  */
// //1) Using the array length property
// let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// let lastElement = arry[arry.length - 1];

// console.log(lastElement);

// //Using the slice() method
// let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// let lastElement = arry.slice(-1);

// console.log(lastElement);

// //Using the pop() method
// let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// let lastElement = arry.pop();

// console.log(lastElement);




// /**
//  * How to replace the names of multiple object keys with the values provided using JavaScript ?
//  * 
//  * Use Object.keys() in combination with Array.prototype.reduce() and the spread operator (...) to get the object's keys and rename them according to keysMap.

//  */
//  const rename_keys = (keysMap, obj) =>
//  Object.keys(obj).reduce(
//    (acc, key) => ({
//      ...acc,
//      ...{ [keysMap[key] || key]: obj[key] }
//    }),
//    {}
//  );
// const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
// console.log("Original Object");
// console.log(obj);
// console.log("-------------------------------------");
// result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
// console.log("New Object");
// console.log(result);




// //////////////////////////////////////////////
// let object = {
//     name: "Hello",
//     age: 20,
//     gender: "Male",
//   };
  
//   console.log(object);

//   /**
//    * Approach 1: 

// This is the native approach and quite a simple one too.
// In this approach we will directly pick up the object key and will change the name of that picked key with the name provided by the user.
// After providing the key name we will then delete the previously declared one and replace it with new one.
// We will write the logic part in a method (or function) and further will call that method which will execute our result.
//    */

// let object = {
//     name: "Hello",
//     age: 20,
//     gender: "Male",
//   };
  
//   let renmeObjectKey = (object) => {
//     object.FirstName = object.name;
//     delete object.name;
//   };
//   renmeObjectKey(object);
//   console.log(object);


//   ///////////////////
//   let object = {
//     name: "Hello",
//     age: 20,
//     gender: "Male",
//   };
  
//   let renmeObjectKey = (object) => {
//     object.FirstName = object.name;
//     object.currentAge = object.age;
//     delete object.name;
//     delete object.age;
//   };
//   renmeObjectKey(object);
//   console.log(object);



//   /**
//    * Approach 2: 

// In this approach we will declare a method which is completely responsible for executing our result.
// Inside the parameters of this method, we will pass in two arguments, first one is keysMap object which we will accept it from user that actually contains the new key name which will be going to replace from the previous key name and second one is the object which we are referring to.
// Now inside that method we will use Object.keys() which will accept our object initially and will target all our object keys, and then we will execute reduce() over it which will accept two things: first is accumulator value which will act as our result variable and second one is the key which we are targeting currently.
// Then afterwards we will write our logic part and for that we will first take into our account of spread operator which will spread our object into an array, and then we will render out the object keys and replace it with own passed key name.
// Then later we will pass our method inside a new variable which we will declare as our result variable and then will console.log() our result.
//    */

// let object = {
//     name: "Hello",
//     age: 20,
//     gender: "Male",
//   };
  
//   let renameKeys = (keysMap, object) =>
//     Object.keys(object).reduce(
//       (acc, key) => ({
//         ...acc,
//         ...{ [keysMap[key] || key]: object[key] },
//       }),
//       {}
//     );
  
//   let result = renameKeys({ name: "FirstName" }, object);
//   console.log(result);



//   /**
//    * Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

// Use Object.keys(), Array.prototype.filter() and Array.prototype.includes() to remove the provided keys.
// Use Array.prototype.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.

//    */

// const omit = (obj, arr) =>
//   Object.keys(obj)
//     .filter(k => !arr.includes(k))
//     .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

// console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
// console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));


// ///2
// var myObj = {
//     Name: "adam",
//     Age: 28,
//     Sex: "Male",
//     Work: "Web Developer",
//     YearsOfExperience: 6,
//     Organisation: "upgrad",
//     Address: "address--address some value"
//   };

//   console.log("After removal: ");
//   // Deleting address key
//   delete (myObj.Address); // Or delete(myObj[Address]);
//   console.log(myObj);

//   ///3
//   // Function to delete the keys given in the array
//   function DeleteKeys(myObj, array) {
//     for (let index = 0; index < array.length; index++) {
//         delete myObj[array[index]];
//     }
//     return myObj;
//   }

//   // Declaring the object
//   var myObj = {
//     Name: "smith",
//     Age: 30,
//     Sex: "Male",
//     Work: "Web Developer",
//     YearsOfExperience: 6,
//     Organisation: "upgrad",
//     Address: "address--address some value"
//   };

//   // Adding the keys to be deleted in the array
//   var array = 
//   ["Work", "Address", "Organisation", "YearsOfExperience"];
//   var finalobj = DeleteKeys(myObj, array);
//   console.log("After removal: ");
//   console.log(finalobj);


//   ///4
//   var obj = {a: 5, b: 3};
// delete obj["a"];
// console.log(obj); 



// /**
//  * Write a JavaScript program to round a number to a specified amount of digits.

// Use Math.round() and template literals to round the number to the specified number of digits.
// Omit the second argument, decimals, to round to an integer.
//  */

// const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// console.log(round(1.005, 2));
// console.log(round(1.05, 2));
// console.log(round(1.0005, 2));

// ///2
// function precise_round(n, r) {
//     let int = Math.floor(n).toString()
//     if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
//     if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
//     return n.toPrecision(int.length + r)
// }
// console.log(precise_round(12.375,2));
// console.log(precise_round(-10.3079499, 3));
// console.log(precise_round(10.49999,0));
// console.log(precise_round(10.49999,2));

// ///3
// let a = Math.round(2.60);
// let b = Math.round(2.50);
// let c = Math.round(2.49);
// let d = Math.round(-2.60);
// let e = Math.round(-2.50);
// let f = Math.round(-2.49);


// /**
//  * Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

// Use Object.keys() to get all the keys of the second object.
// Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.
//  */
// const matches = (obj, source) =>
//   Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


// //Deep Nested Comparison

// const one = {
//     fruit: '🥝',
//     nutrients: {
//       energy: '255kJ',
//       minerals: {
//         name: 'calcium',
//       },
//     },
//   };
  
//   const two = {
//     fruit: '🥝',
//     nutrients: {
//       energy: '255kJ',
//       minerals: {
//         name: 'calcium',
//       },
//     },
//   };
  
//   // Using JavaScript
//   JSON.stringify(one) === JSON.stringify(two); // true
  
//   // Using Lodash
//   _.isEqual(one, two); 


//   ///ES6 Way for comparing 2 objects
//   const k1 = { fruit: '🥝' };
// const k2 = { fruit: '🥝' };

// Object.entries(k1).toString() === Object.entries(k2).toString();


// /////////////////////
// // Define the first object
// let obj1 = {
//     name: "John",
//     age: 23,
//     degree: "CS"
// }

// // Define the second object
// let obj2 = {
//     age: 23,
//     degree: "CS"
// }

// // Define the function check
// function check(obj1, obj2) {

//     // Iterate the obj2 using for..in
//     for (key in obj2) {
          
//         // Check if both objects do 
//         // not have the equal values
//         // of same key
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true
// }

// // Call the function
// console.log(check(obj1, obj2))


// //In this approach, we create an array of all the keys of obj2 by using the Object.keys() method and then using the Array.every() method we check if all the properties of obj2 are equal to obj1 or not.

// // Define the first object
// let obj1 = {
//     name: "John",
//     age: 23,
//     degree: "CS"
// }

// // Define the Second object
// let obj2 = {
//     age: 23,
//     degree: "CS"
// }

// // Define the function check
// function check(obj1, obj2) {
//     return Object

//         // Get all the keys in array
//         .keys(obj2)
//         .every(val => obj1.hasOwnProperty(val) 
//             && obj1[val] === obj2[val])
// }

// // Call the function
// console.log(check(obj1, obj2))


// /**
//  * Write a JavaScript program that will return true if an object looks like a Promise, false otherwise.

// Check if the object is not null, its typeof matches either object or function and if it has a .then property, which is also a function.
//  */
// const isPromiseLike = obj =>
//   obj !== null &&
//   (typeof obj === 'object' || typeof obj === 'function') &&
//   typeof obj.then === 'function';

// console.log(isPromiseLike({
//   then: function() {
//     return '';
//   }
// })); 
// console.log(isPromiseLike(null));
// console.log(isPromiseLike({}));


// //Method 2: By checking if the passed value p is an object and checking if p.then is a function.


// var prom = new Promise(function(resolve, reject) {
//     resolve();
// });
// var num = 10;
// var name = "Upgrad";
// var object = {
//     site: "Upgrad"
// };

// console.log(isPromise(prom));
// console.log(isPromise(num));
// console.log(isPromise(name));
// console.log(isPromise(object));

// function isPromise(p) {
//     return !!p && (typeof p === 'object' 
//         || typeof p === 'function') 
//         && typeof p.then === 'function';
// }

// //Method 3: By checking if Promise.resolve(p) == p:


// var prom = new Promise(function(resolve, reject) {
//     resolve();
// });
  
// var num = 10;
// var name = "Upgrad";
// var object = {
//     site: "Upgrad"
// };

// console.log(isPromise(prom));
// console.log(isPromise(num));
// console.log(isPromise(name));
// console.log(isPromise(object));

// function isPromise(p) {
//     if (Promise && Promise.resolve) {
//         return Promise.resolve(p) == p;
//     }
// }



// /**
//  * Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
//  */
//  let john = { name: "John", age: 25 };
//  let pete = { name: "Pete", age: 30 };
//  let mary = { name: "Mary", age: 28 };
 
//  let arr = [ pete, john, mary ];
 
//  sortByAge(arr);
//  console.log(arr)

//  //2

// /*
// Write a sorting function (sometimes called a custom comparator),
// that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.
// */

// const students = [
//     { id: 1, name: "bruce",    age: 40 },
//     { id: 2, name: "zoidberg", age: 22 },
//     { id: 3, name: "alex",     age: 22 },
//     { id: 4, name: "alex",     age: 30 },
//   ];
  
//   //How to compare the names?
//   //Make a second array that mimicks the names of the objects
//   //After, use those indices to reassign the objects
//   //Use age to distinguish between the same names
//   //Array is already sorted according to needs, how would I account for the same name, different age case?
  
//   students.sort((a,b) => {
//     let nameA = a.name;
//     let nameB = b.name;
//     let ageA = a.age;
//     let ageB = b.age;
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     if (nameA === nameB) {
//       if (ageA < ageB) {
//         return 1;
//       } else {
//         return -1;
//       }
//     }
//   });
//   console.log(students);


//   //////////////////////////////////////////
//   const characters = [
//     { firstName: 'Jean-Luc', lastName: 'Picard', rank: 'Captain', age: 59 },
//     { firstName: 'Will', lastName: 'Riker', rank: 'Commander', age: 29 },
//     { firstName: 'Geordi', lastName: 'La Forge', rank: 'Lieutenant', age: 29 }
//   ];

//   //Sorting By age
//   characters.sort((a, b) => a.age - b.age);


//   //Sorting by lastName
//   characters.sort((a, b) => {
//     if (a === b) {
//       return 0;
//     }
//     return a.lastName < b.lastName ? -1 : 1;
//   });

//   //Sorting by rank 

//   const rankOrder = new Map([
//     ['Captain', 1],
//     ['Commander', 2],
//     ['Lieutenant', 3]
//   ]);
  
//   characters.sort((a, b) => {
//     return rankOrder.get(a.rank) - rankOrder.get(b.rank);
//   });