// //Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one?
// function compare(base, compared, deepSearch) {
//   var missing = [];

//   var compareProp = function (baseValue, comparedValue, path, deepSearch) {
//     //console.log('comparing', path.join('.'));

//     if (comparedValue === undefined) {
//       console.log('missing key', path.join('.'));

//         if (!deepSearch) {
//           return;
//         }
//     }

//     if (typeof baseValue === 'object') {
//       Object.keys(baseValue).forEach(function (key) {
//         compareProp(baseValue [key], comparedValue && comparedValue [key], path.concat(key), deepSearch);
//       }); 
//     }
//   };

//   Object.keys(base).forEach(function (key) {
//     compareProp(base [key], compared [key], [key], deepSearch);
//   });
// }

// UC = {};
// UC.start = {}
// UC.start.enableHardEccDecline = '';
// UC.start.template = {};
// UC.start.template.ecc = '';
// UC.start.template.decline = {};
// UC.start.template.decline.title = '';
// UC.start.template.decline.body = '';
// UC.general = {};

// compare (UC, {}, true);

//Write a JavaScript program to convert a specified number to an array of digits?                       
var myInt = 1234567890;

// Getting the string as a parameter
// and typecasting it into an integer
let myFunc = num => Number(num);

var intArr = Array.from(String(myInt), myFunc);

// Print the result array
console.log(intArr);

// using the map
// Declare a variable and store an
// integer value
var num = 235345

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

var myArr = String(num).split("").map((num)=>{
return Number(num)
})

console.log(myArr)

//using the reduce()
var myInt = 235345;

// number to string convertion
var temp = ''+myInt
// forming array with numbers as element
var intArr = [...temp].reduce((acc, n)=> acc.concat(+n), [] );

// Print the result array
console.log(intArr);
