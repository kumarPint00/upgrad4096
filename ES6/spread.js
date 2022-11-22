// 1. Copying an array

// let fruits = ['Apple','Orange','Banana'];

// let newFruitArray = [...fruits];

// console.log(newFruitArray); // ['Apple','Orange','Banana']

// let array1 = ['h', 'e', 'y'];
// let array2 = [...array1];
// console.log(array2);

// 2. Concatenating arrays

// let arr1 = ['A', 'B', 'C'];

// let arr2 = ['X', 'Y', 'Z'];

// let result = [...arr1, ...arr2];

// console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

// let baked_desserts = ['cake', 'cookie', 'donut'];
// let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
// console.log(desserts);
// // //Appending baked_desserts after flan
// let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
// console.log(desserts2);

// 3. Spreading elements together with an individual element

// let fruits = ['Apple','Orange','Banana'];

// let newFruits = ['Cherry', ...fruits];

// console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']

// function multiply(number1, number2, number3) {
//     console.log(number1 * number2 * number3);
//   }
//   let numbers = [1,2,3];
//   multiply(...numbers);

// 4. Spreading elements on function calls

// let fruits = ['Apple','Orange','Banana'];

// var getFruits = (f1, f2, f3) => {
// console.log(Fruits `${f1}, ${f2} and ${f3}`); };

// getFruits(...fruits); // Fruits: Apple, Orange and Banana

// 5. Spread syntax for object literals

// var obj1 = { id: 101, name: 'Jhon Doe' }

// var obj2 = { age: 25, country: 'USA'}

// const employee = { ...obj1, ...obj2 }

// console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }

