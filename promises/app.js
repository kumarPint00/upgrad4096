// //1.Find the difference in two given dates?                                   
// const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");

// //2. Add 20 days to a given date and find what date it is?
// Date.prototype.addDays = function(days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }

// var date = new Date();

// console.log(date.addDays(6));

// // different approach
// function addDays(date, days) {
//     var result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   }

// // To add Days
// var d = new Date();
// d.setDate(d.getDate() + 5);

// // To add Months
// var m = new Date();
// m.setMonth(m.getMonth() + 5);

// // To add Years
// var y = new Date();
// y.setFullYear(y.getFullYear() + 5);

// //3.Find user age from given date of birth?
// function _calculateAge(birthday) { // birthday is a date
//     var ageDifMs = Date.now() - birthday.getTime();
//     var ageDate = new Date(ageDifMs); // miliseconds from epoch
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }




























//Write a JavaScript program to search a date within a string?      
var str = 'On the 03/09/2015 I am swiming in a pool, that was build on the 27-03-1994';

var res = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);

// document.getElementById('out').value = res;
console.log(res);

