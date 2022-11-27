// /**
//  * Array
// The Array object, as with arrays in other programming languages,
//  enables storing a collection of multiple items under a single variable name,
//   and has members for performing common array operations.

//   Characterstics 
//   JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//  */

// ///Create an array
// // 'fruits' array created using array literal notation.
// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// // 2

// // 'fruits2' array created using the Array() constructor.
// const fruits2 = new Array("Apple", "Banana");
// console.log(fruits2.length);
// // 2

// // 'fruits3' array created using String.prototype.split().
// const fruits3 = "Apple, Banana".split(", ");
// console.log(fruits3.length);
// // 2

// ///Create a string from an array
// const fruits = ["Apple", "Banana"];
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);
// // "Apple, Banana"


// ///Access an array item by its index
// const fruits = ["Apple", "Banana"];

// // The index of an array's first element is always 0.
// fruits[0]; // Apple

// // The index of an array's second element is always 1.
// fruits[1]; // Banana

// // The index of an array's last element is always one
// // less than the length of the array.
// fruits[fruits.length - 1]; // Banana

// // Using a index number larger than the array's length
// // returns 'undefined'.
// fruits[99]; // undefined


// ///Find the index of an item in an array
// const fruits = ["Apple", "Banana"];
// console.log(fruits.indexOf("Banana"));
// // 1

// ///Check if an array contains a certain item
// const fruits = ["Apple", "Banana"];

// fruits.includes("Banana"); // true
// fruits.includes("Cherry"); // false

// // If indexOf() doesn't return -1, the array contains the given item.
// fruits.indexOf("Banana") !== -1; // true
// fruits.indexOf("Cherry") !== -1; // false

// ///Append an item to an array
// const fruits = ["Apple", "Banana"];
// const newLength = fruits.push("Orange");
// console.log(fruits);
// // ["Apple", "Banana", "Orange"]
// console.log(newLength);
// // 3



// ///\\\Remove the last item from an array
// const fruits = ["Apple", "Banana", "Orange"];
// const removedItem = fruits.pop();
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItem);
// // Orange



// ///\\\\\\\\\Remove multiple items from the end of an array
// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]


// ///\\\\\\\\\Truncate an array down to just its first N items
// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const start = 2;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]


// ///\\\\\\\\\\Remove the first item from an array    
// const fruits = ["Apple", "Banana"];
// const removedItem = fruits.shift();
// console.log(fruits);
// // ["Banana"]
// console.log(removedItem);
// // Apple


// ///\\\\\\\\\\Remove multiple items from the beginning of an array
// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]


// ///\\\\\\\Add a new first item to an array
// const fruits = ["Banana", "Mango"];
// const newLength = fruits.unshift("Strawberry");
// console.log(fruits);
// // ["Strawberry", "Banana", "Mango"]
// console.log(newLength);
// // 3



// ///\\\\\\\\\Remove a single item by index
// const fruits = ["Strawberry", "Banana", "Mango"];
// const start = fruits.indexOf("Banana");
// const deleteCount = 1;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Strawberry", "Mango"]
// console.log(removedItems);
// // ["Banana"]



// ///\\\\\\\Remove multiple items by index
// const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
// const start = 1;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Apple", "Mango"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]


// ///\\\\\\\\\Replace multiple items in an array
// const fruits = ["Apple", "Banana", "Strawberry"];
// const start = -2;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
// console.log(fruits);
// // ["Apple", "Mango", "Cherry"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]

// ///\\\\\\\\\\Iterate over an array

// const fruits = ["Apple", "Mango", "Cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// // Apple
// // Mango
// // Cherry


// ///\\\\\\\\\Call a function on each element in an array
// const fruits = ["Apple", "Mango", "Cherry"];
// fruits.forEach((item, index, array) => {
//   console.log(item, index);
// });
// // Apple 0
// // Mango 1
// // Cherry 2


// ///\\\\\\\\\\\Merge multiple arrays together
// const fruits = ["Apple", "Banana", "Strawberry"];
// const moreFruits = ["Mango", "Cherry"];
// const combinedFruits = fruits.concat(moreFruits);
// console.log(combinedFruits);
// // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// // The 'fruits' array remains unchanged.
// console.log(fruits);
// // ["Apple", "Banana", "Strawberry"]

// // The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// // ["Mango", "Cherry"]



// ///\\\\\\\\\\\Copy an array
// const fruits = ["Strawberry", "Mango"];

// // Create a copy using spread syntax.
// const fruitsCopy = [...fruits];
// // ["Strawberry", "Mango"]

// // Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// // ["Strawberry", "Mango"]

// // Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// // ["Strawberry", "Mango"]


// ///\\\\\\\\\\\\\Grouping the elements of an array

// const inventory = [
//     { name: "asparagus", type: "vegetables" },
//     { name: "bananas", type: "fruit" },
//     { name: "goat", type: "meat" },
//     { name: "cherries", type: "fruit" },
//     { name: "fish", type: "meat" },
//   ];

  

//   ///\\\\\\\\\\\\\\\\Creating a two-dimensional array
//   const board = [
//     ["R", "N", "B", "Q", "K", "B", "N", "R"],
//     ["P", "P", "P", "P", "P", "P", "P", "P"],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     ["p", "p", "p", "p", "p", "p", "p", "p"],
//     ["r", "n", "b", "q", "k", "b", "n", "r"],
//   ];
  
//   console.log(`${board.join("\n")}\n\n`);
  
//   // Move King's Pawn forward 2
//   board[4][4] = board[6][4];
//   board[6][4] = " ";
//   console.log(board.join("\n"));

  


//   ///\\\\\\\\\\Using an array to tabulate a set of values
//   const values = [];
//   for (let x = 0; x < 10; x++) {
//     values.push([2 ** x, 2 * x ** 2]);
//   }
//   console.table(values);

  


//   /**
//    * TO-DO 
//    * Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
//    */